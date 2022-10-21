(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.httpErrors = {}));
}(this, (function (exports) { 'use strict';

  class HttpBadRequestError extends Error {
    constructor(res) {
      super('Bad Request');
      this.res = res;
    }
  }

  class HttpUnauthorizedError extends Error {
    constructor(res) {
      super('Unauthorized');
      this.res = res;
    }
  }

  class HttpPaymentRequiredError extends Error {
    constructor(res) {
      super('Payment Required');
      this.res = res;
    }
  }

  class HttpForbiddenError extends Error {
    constructor(res) {
      super('Forbidden');
      this.res = res;
    }
  }

  class HttpNotFoundError extends Error {
    constructor(res) {
      super('Not Found');
      this.res = res;
    }
  }

  class HttpMethodNotAllowedError extends Error {
    constructor(res) {
      super('Method Not Allowed');
      this.res = res;
    }
  }

  class HttpNotAcceptableError extends Error {
    constructor(res) {
      super('Not Acceptable');
      this.res = res;
    }
  }

  class HttpProxyAuthenticationRequiredError extends Error {
    constructor(res) {
      super('Proxy Authentication Required');
      this.res = res;
    }
  }

  class HttpRequestTimeOutError extends Error {
    constructor(res) {
      super('Request Time-Out');
      this.res = res;
    }
  }

  class HttpConflictError extends Error {
    constructor(res) {
      super('Conflict');
      this.res = res;
    }
  }

  class HttpPreconditionFailedError extends Error {
    constructor(res) {
      super('Precondition Failed');
      this.res = res;
    }
  }

  class HttpInternalServerError extends Error {
    constructor(res) {
      super('Internal Server');
      this.res = res;
    }
  }

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
      case 412:
        throw new HttpPreconditionFailedError(res);
      case 500:
        throw new HttpInternalServerError(res);
      default:
        return res;
    }
  }

  exports.HttpBadRequestError = HttpBadRequestError;
  exports.HttpConflictError = HttpConflictError;
  exports.HttpForbiddenError = HttpForbiddenError;
  exports.HttpInternalServerError = HttpInternalServerError;
  exports.HttpMethodNotAllowedError = HttpMethodNotAllowedError;
  exports.HttpNotAcceptableError = HttpNotAcceptableError;
  exports.HttpNotFoundError = HttpNotFoundError;
  exports.HttpPaymentRequiredError = HttpPaymentRequiredError;
  exports.HttpPreconditionFailedError = HttpPreconditionFailedError;
  exports.HttpProxyAuthenticationRequiredError = HttpProxyAuthenticationRequiredError;
  exports.HttpRequestTimeOutError = HttpRequestTimeOutError;
  exports.HttpUnauthorizedError = HttpUnauthorizedError;
  exports.handleHttpErrors = handleHttpErrors;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
