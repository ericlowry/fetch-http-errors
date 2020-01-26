# fetch-http-errors

Errors subclasses for HTTP code response.

## Usage

```js
import {
  handleHttpErrors,
  HttpNotFoundError,
  HttpBadRequestError,
} from 'fetch-http-errors';

fetch('https://examples.com')
  .then(handleHttpErrors)
  .then(res => console.log({ json: res.json() }))
  .catch(err => {
    if (err instanceof HttpNotFoundError) {
      console.log({ message: 'Not found' });
    } else if (err instanceof HttpBadRequestError) {
      console.log({ message: 'Bad request', res: err.res });
    } else {
      console.log({ message: err.message, res: err.res });
    }
  })
```

## Available scripts

##### `npm run code`

This script run `generate-code.sh` with `bash` which read `http-errors.txt` file and
produce all Javascript Error subclasses corresponding to each http code line describe as:
```
CODE|MESSAGE
```
Example:
```
404|Not Found
```

##### `npm run build`

Generate a `commonjs` library into `dist/index.js`.

