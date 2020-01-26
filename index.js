import HttpBadRequestError from './classes/http-bad-request-error.js'
import HttpUnauthorizedError from './classes/http-unauthorized-error.js'
import HttpPaymentRequiredError from './classes/http-payment-required-error.js'
import HttpForbiddenError from './classes/http-forbidden-error.js'
import HttpNotFoundError from './classes/http-not-found-error.js'
import HttpMethodNotAllowedError from './classes/http-method-not allowed-error.js'
import HttpNotAcceptableError from './classes/http-not-acceptable-error.js'
import HttpProxyAuthenticationRequiredError from './classes/http-proxy-authentication required-error.js'
import HttpRequestTimeOutError from './classes/http-request-time-out-error.js'
import HttpConflictError from './classes/http-conflict-error.js'
import HttpInternalServerError from './classes/http-internal-server-error.js'

function handleHttpErrors(res) {
  switch (res.status) {
    case 400:
      throw new HttpBadRequestError(res);
    case 401:
      throw new HttpUnauthorizedError(res);
    case 402:
      throw new HttpPaymentRequiredError(res);
    case 403:
      throw new HttpForbiddenError(res);
    case 404:
      throw new HttpNotFoundError(res);
    case 405:
      throw new HttpMethodNotAllowedError(res);
    case 406:
      throw new HttpNotAcceptableError(res);
    case 407:
      throw new HttpProxyAuthenticationRequiredError(res);
    case 408:
      throw new HttpRequestTimeOutError(res);
    case 409:
      throw new HttpConflictError(res);
    case 500:
      throw new HttpInternalServerError(res);
    default:
      return res;
  }
}

export {
    handleHttpErrors,
    HttpBadRequestError,
    HttpUnauthorizedError,
    HttpPaymentRequiredError,
    HttpForbiddenError,
    HttpNotFoundError,
    HttpMethodNotAllowedError,
    HttpNotAcceptableError,
    HttpProxyAuthenticationRequiredError,
    HttpRequestTimeOutError,
    HttpConflictError,
    HttpInternalServerError,
}
