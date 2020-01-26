#!/bin/bash

set -e

ERRORS=$(cat http-errors.txt)

TEMPLATE_ERROR=$(cat << EOF
export default class |NAME| extends Error {
  constructor(res) {
    super('|MESSAGE|');
    this.res = res;
  }
}
EOF
)

IMPORTS=""
CASES=""
EXPORTS=""

if [[ ! -d "./classes" ]]; then
    mkdir classes
fi

IFS=$'\n'
for ERROR in $(echo "$ERRORS");
do
    CODE=$(echo "$ERROR" | cut -d\| -f1)
    MESSAGE=$(echo "$ERROR" | cut -d\| -f2)
    NAME=$(echo "Http${MESSAGE// }Error" | tr -d '-')
    FILENAME=$(echo "http-${MESSAGE/ /-}-error.js" | tr '[:upper:]' '[:lower:]')

    echo "$TEMPLATE_ERROR" | sed "s/|NAME|/${NAME}/" | sed "s/|MESSAGE|/${MESSAGE}/" > "./classes/$FILENAME"

# Generate imports
    IMPORTS+="import ${NAME} from './classes/${FILENAME}'"
    IMPORTS+=$'\n'

# Generate switch cases
    CASES+=$(cat << EOF
    case ${CODE}:
      throw new ${NAME}(res);
EOF
)
    CASES+=$'\n'

# Generate exports
    EXPORTS+=$(echo "    ${NAME},")
    EXPORTS+=$'\n'
done

INDEX=$(cat << EOF
${IMPORTS}
function handleHttpErrors(res) {
  switch (res.status) {
${CASES}    default:
      return res;
  }
}

export {
    handleHttpErrors,
${EXPORTS}}
EOF
)

echo "$INDEX" > index.js
