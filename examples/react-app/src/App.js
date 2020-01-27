import React, { useRef, useCallback, useState } from 'react';
import { handleHttpErrors, HttpNotFoundError, HttpConflictError } from 'fetch-http-errors';

function App() {
  const [result, setResult] = useState(null);
  const status = useRef();

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    fetch(`http://localhost:8000/${status.current.value}`)
      .then(handleHttpErrors)
      .then(() => {
        setResult('No error handled');
      })
      .catch(err => {
        if (err instanceof HttpNotFoundError) {
          setResult("It's a 404 HttpNotFoundError");
        } else if (err instanceof HttpConflictError) {
          setResult("It's a 409 HttpConflictError");
        } else {
          setResult(`It's a ${err.res.status} ${err.message}`);
        }
      })
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>HTTP Status
          <input type="number" ref={status} required />
        </label>
        <button type="submit">Send</button>
      </form>
      <div>Result (try 404 or 409): {result}</div>
    </div>
  );
}

export default App;
