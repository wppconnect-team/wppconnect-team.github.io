/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/workbox-core/_private/Deferred.js":
/*!********************************************************!*\
  !*** ./node_modules/workbox-core/_private/Deferred.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Deferred": () => (/* binding */ Deferred)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The Deferred class composes Promises in a way that allows for them to be
 * resolved or rejected from outside the constructor. In most cases promises
 * should be used directly, but Deferreds can be necessary when the logic to
 * resolve a promise must be separate.
 *
 * @private
 */
class Deferred {
    /**
     * Creates a promise and exposes its resolve and reject functions as methods.
     */
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/WorkboxError.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-core/_private/WorkboxError.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkboxError": () => (/* binding */ WorkboxError)
/* harmony export */ });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "./node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = (0,_models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__.messageGenerator)(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/assert.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/assert.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assert": () => (/* binding */ finalAssertExports)
/* harmony export */ });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-type', details);
    }
};
const isInstance = (object, 
// Need the general type to do the check later.
// eslint-disable-next-line @typescript-eslint/ban-types
expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClassName'] = expectedClass.name;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] = `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('invalid-value', details);
    }
};
const isArrayOfClass = (value, 
// Need general type to do check later.
expectedClass, // eslint-disable-line
details) => {
    const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  false
    ? 0
    : {
        hasMethod,
        isArray,
        isInstance,
        isOneOf,
        isType,
        isArrayOfClass,
    };



/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheMatchIgnoreParams": () => (/* binding */ cacheMatchIgnoreParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

function stripParams(fullURL, ignoreParams) {
    const strippedURL = new URL(fullURL);
    for (const param of ignoreParams) {
        strippedURL.searchParams.delete(param);
    }
    return strippedURL.href;
}
/**
 * Matches an item in the cache, ignoring specific URL params. This is similar
 * to the `ignoreSearch` option, but it allows you to ignore just specific
 * params (while continuing to match on the others).
 *
 * @private
 * @param {Cache} cache
 * @param {Request} request
 * @param {Object} matchOptions
 * @param {Array<string>} ignoreParams
 * @return {Promise<Response|undefined>}
 */
async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
    const strippedRequestURL = stripParams(request.url, ignoreParams);
    // If the request doesn't include any ignored params, match as normal.
    if (request.url === strippedRequestURL) {
        return cache.match(request, matchOptions);
    }
    // Otherwise, match by comparing keys
    const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
    const cacheKeys = await cache.keys(request, keysOptions);
    for (const cacheKey of cacheKeys) {
        const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
        if (strippedRequestURL === strippedCacheKeyURL) {
            return cache.match(cacheKey, matchOptions);
        }
    }
    return;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheNames.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheNames.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheNames": () => (/* binding */ cacheNames)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const _cacheNameDetails = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : '',
};
const _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
        .filter((value) => value && value.length > 0)
        .join('-');
};
const eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
        fn(key);
    }
};
const cacheNames = {
    updateDetails: (details) => {
        eachCacheNameDetail((key) => {
            if (typeof details[key] === 'string') {
                _cacheNameDetails[key] = details[key];
            }
        });
    },
    getGoogleAnalyticsName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
        return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
        return _cacheNameDetails.suffix;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canConstructResponseFromBodyStream": () => (/* binding */ canConstructResponseFromBodyStream)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */
function canConstructResponseFromBodyStream() {
    if (supportStatus === undefined) {
        const testResponse = new Response('');
        if ('body' in testResponse) {
            try {
                new Response(testResponse.body);
                supportStatus = true;
            }
            catch (error) {
                supportStatus = false;
            }
        }
        supportStatus = false;
    }
    return supportStatus;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js":
/*!**************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "executeQuotaErrorCallbacks": () => (/* binding */ executeQuotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.js */ "./node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof workbox-core
 * @private
 */
async function executeQuotaErrorCallbacks() {
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(`About to run ${_models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks.size} ` +
            `callbacks to clean up caches.`);
    }
    for (const callback of _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks) {
        await callback();
        if (true) {
            _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(callback, 'is complete.');
        }
    }
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log('Finished running callbacks.');
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/getFriendlyURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFriendlyURL": () => (/* binding */ getFriendlyURL)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.
    return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
};



/***/ }),

/***/ "./node_modules/workbox-core/_private/logger.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/logger.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( false
    ? 0
    : (() => {
        // Don't overwrite this value if it's already set.
        // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
        if (!('__WB_DISABLE_DEV_LOGS' in self)) {
            self.__WB_DISABLE_DEV_LOGS = false;
        }
        let inGroup = false;
        const methodToColorMap = {
            debug: `#7f8c8d`,
            log: `#2ecc71`,
            warn: `#f39c12`,
            error: `#c0392b`,
            groupCollapsed: `#3498db`,
            groupEnd: null, // No colored prefix on groupEnd
        };
        const print = function (method, args) {
            if (self.__WB_DISABLE_DEV_LOGS) {
                return;
            }
            if (method === 'groupCollapsed') {
                // Safari doesn't print all console.groupCollapsed() arguments:
                // https://bugs.webkit.org/show_bug.cgi?id=182754
                if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                    console[method](...args);
                    return;
                }
            }
            const styles = [
                `background: ${methodToColorMap[method]}`,
                `border-radius: 0.5em`,
                `color: white`,
                `font-weight: bold`,
                `padding: 2px 0.5em`,
            ];
            // When in a group, the workbox prefix is not displayed.
            const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
            console[method](...logPrefix, ...args);
            if (method === 'groupCollapsed') {
                inGroup = true;
            }
            if (method === 'groupEnd') {
                inGroup = false;
            }
        };
        // eslint-disable-next-line @typescript-eslint/ban-types
        const api = {};
        const loggerMethods = Object.keys(methodToColorMap);
        for (const key of loggerMethods) {
            const method = key;
            api[method] = (...args) => {
                print(method, args);
            };
        }
        return api;
    })());



/***/ }),

/***/ "./node_modules/workbox-core/_private/timeout.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-core/_private/timeout.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeout": () => (/* binding */ timeout)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Returns a promise that resolves and the passed number of milliseconds.
 * This utility is an async/await-friendly version of `setTimeout`.
 *
 * @param {number} ms
 * @return {Promise}
 * @private
 */
function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


/***/ }),

/***/ "./node_modules/workbox-core/_private/waitUntil.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-core/_private/waitUntil.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "waitUntil": () => (/* binding */ waitUntil)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A utility method that makes it easier to use `event.waitUntil` with
 * async functions and return the result.
 *
 * @param {ExtendableEvent} event
 * @param {Function} asyncFn
 * @return {Function}
 * @private
 */
function waitUntil(event, asyncFn) {
    const returnPromise = asyncFn();
    event.waitUntil(returnPromise);
    return returnPromise;
}



/***/ }),

/***/ "./node_modules/workbox-core/_version.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-core/_version.js ***!
  \***********************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:core:6.5.3'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-core/copyResponse.js":
/*!***************************************************!*\
  !*** ./node_modules/workbox-core/copyResponse.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copyResponse": () => (/* binding */ copyResponse)
/* harmony export */ });
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * This method is intentionally limited to same-origin responses, regardless of
 * whether CORS was used or not.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof workbox-core
 */
async function copyResponse(response, modifier) {
    let origin = null;
    // If response.url isn't set, assume it's cross-origin and keep origin null.
    if (response.url) {
        const responseURL = new URL(response.url);
        origin = responseURL.origin;
    }
    if (origin !== self.location.origin) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('cross-origin-copy-response', { origin });
    }
    const clonedResponse = response.clone();
    // Create a fresh `ResponseInit` object by cloning the headers.
    const responseInit = {
        headers: new Headers(clonedResponse.headers),
        status: clonedResponse.status,
        statusText: clonedResponse.statusText,
    };
    // Apply any user modifications.
    const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
    // Create the new response from the body stream and `ResponseInit`
    // modifications. Note: not all browsers support the Response.body stream,
    // so fall back to reading the entire body into memory as a blob.
    const body = (0,_private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__.canConstructResponseFromBodyStream)()
        ? clonedResponse.body
        : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
}



/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messageGenerator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messageGenerator": () => (/* binding */ messageGenerator)
/* harmony export */ });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = _messages_js__WEBPACK_IMPORTED_MODULE_0__.messages[code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator =  false ? 0 : generatorFunction;


/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messages.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messages.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messages": () => (/* binding */ messages)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return (`The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`);
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`);
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName, }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}` +
            `${funcName}()' must be of type ${expectedType}.`);
    },
    'incorrect-class': ({ expectedClassName, paramName, moduleName, className, funcName, isReturnValueProblem, }) => {
        if (!expectedClassName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        if (isReturnValueProblem) {
            return (`The return value from ` +
                `'${moduleName}.${classNameStr}${funcName}()' ` +
                `must be an instance of class ${expectedClassName}.`);
        }
        return (`The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}${funcName}()' ` +
            `must be an instance of class ${expectedClassName}.`);
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName, }) => {
        if (!expectedMethod ||
            !paramName ||
            !moduleName ||
            !className ||
            !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return (`${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`);
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return (`An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`);
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` + `'add-to-cache-list-duplicate-entries' error.`);
        }
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry} but different revision details. Workbox is ` +
            `unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`);
    },
    'plugin-error-request-will-fetch': ({ thrownErrorMessage }) => {
        if (!thrownErrorMessage) {
            throw new Error(`Unexpected input to ` + `'plugin-error-request-will-fetch', error.`);
        }
        return (`An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownErrorMessage}'.`);
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return (`You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`);
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return (`The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`);
    },
    'unregister-route-route-not-registered': () => {
        return (`The route you're trying to unregister was not previously ` +
            `registered.`);
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return (`The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`);
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return (`The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`);
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return (`The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`);
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName, }) => {
        return (`The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`);
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return (`You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`);
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return (`When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`);
    },
    'channel-name-required': () => {
        return (`You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`);
    },
    'invalid-responses-are-same-args': () => {
        return (`The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`);
    },
    'expire-custom-caches-only': () => {
        return (`You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`);
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return (`The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`);
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return (`Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return (`The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`);
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return (`The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`);
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return (`Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`);
    },
    'cache-put-with-no-response': ({ url }) => {
        return (`There was an attempt to cache '${url}' but the response was not ` +
            `defined.`);
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return (`The precaching request for '${url}' failed` +
            (status ? ` with an HTTP status of ${status}.` : `.`));
    },
    'non-precached-url': ({ url }) => {
        return (`createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`);
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return (`Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`);
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
    'cross-origin-copy-response': ({ origin }) => {
        return (`workbox-core.copyResponse() can only be used with same-origin ` +
            `responses. It was passed a response with origin ${origin}.`);
    },
    'opaque-streams-source': ({ type }) => {
        const message = `One of the workbox-streams sources resulted in an ` +
            `'${type}' response.`;
        if (type === 'opaqueredirect') {
            return (`${message} Please do not use a navigation request that results ` +
                `in a redirect as a source.`);
        }
        return `${message} Please ensure your sources are CORS-enabled.`;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/models/quotaErrorCallbacks.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-core/models/quotaErrorCallbacks.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "quotaErrorCallbacks": () => (/* binding */ quotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// Callbacks to be executed whenever there's a quota error.
// Can't change Function type right now.
// eslint-disable-next-line @typescript-eslint/ban-types
const quotaErrorCallbacks = new Set();



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheController.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheController.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => (/* binding */ PrecacheController)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/waitUntil.js */ "./node_modules/workbox-core/_private/waitUntil.js");
/* harmony import */ var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createCacheKey.js */ "./node_modules/workbox-precaching/utils/createCacheKey.js");
/* harmony import */ var _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PrecacheInstallReportPlugin.js */ "./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js");
/* harmony import */ var _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PrecacheCacheKeyPlugin.js */ "./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js");
/* harmony import */ var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/printCleanupDetails.js */ "./node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* harmony import */ var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/printInstallDetails.js */ "./node_modules/workbox-precaching/utils/printInstallDetails.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_11__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/












/**
 * Performs efficient precaching of assets.
 *
 * @memberof workbox-precaching
 */
class PrecacheController {
    /**
     * Create a new PrecacheController.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] The cache to use for precaching.
     * @param {string} [options.plugins] Plugins to use when precaching as well
     * as responding to fetch events for precached assets.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor({ cacheName, plugins = [], fallbackToNetwork = true, } = {}) {
        this._urlsToCacheKeys = new Map();
        this._urlsToCacheModes = new Map();
        this._cacheKeysToIntegrities = new Map();
        this._strategy = new _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy({
            cacheName: workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(cacheName),
            plugins: [
                ...plugins,
                new _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__.PrecacheCacheKeyPlugin({ precacheController: this }),
            ],
            fallbackToNetwork,
        });
        // Bind the install and activate methods to the instance.
        this.install = this.install.bind(this);
        this.activate = this.activate.bind(this);
    }
    /**
     * @type {workbox-precaching.PrecacheStrategy} The strategy created by this controller and
     * used to cache assets and respond to fetch events.
     */
    get strategy() {
        return this._strategy;
    }
    /**
     * Adds items to the precache list, removing any duplicates and
     * stores the files in the
     * {@link workbox-core.cacheNames|"precache cache"} when the service
     * worker installs.
     *
     * This method can be called multiple times.
     *
     * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
     */
    precache(entries) {
        this.addToCacheList(entries);
        if (!this._installAndActiveListenersAdded) {
            self.addEventListener('install', this.install);
            self.addEventListener('activate', this.activate);
            this._installAndActiveListenersAdded = true;
        }
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {Array<workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
     *     Array of entries to precache.
     */
    addToCacheList(entries) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isArray(entries, {
                moduleName: 'workbox-precaching',
                className: 'PrecacheController',
                funcName: 'addToCacheList',
                paramName: 'entries',
            });
        }
        const urlsToWarnAbout = [];
        for (const entry of entries) {
            // See https://github.com/GoogleChrome/workbox/issues/2259
            if (typeof entry === 'string') {
                urlsToWarnAbout.push(entry);
            }
            else if (entry && entry.revision === undefined) {
                urlsToWarnAbout.push(entry.url);
            }
            const { cacheKey, url } = (0,_utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__.createCacheKey)(entry);
            const cacheMode = typeof entry !== 'string' && entry.revision ? 'reload' : 'default';
            if (this._urlsToCacheKeys.has(url) &&
                this._urlsToCacheKeys.get(url) !== cacheKey) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-entries', {
                    firstEntry: this._urlsToCacheKeys.get(url),
                    secondEntry: cacheKey,
                });
            }
            if (typeof entry !== 'string' && entry.integrity) {
                if (this._cacheKeysToIntegrities.has(cacheKey) &&
                    this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                    throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-integrities', {
                        url,
                    });
                }
                this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
            }
            this._urlsToCacheKeys.set(url, cacheKey);
            this._urlsToCacheModes.set(url, cacheMode);
            if (urlsToWarnAbout.length > 0) {
                const warningMessage = `Workbox is precaching URLs without revision ` +
                    `info: ${urlsToWarnAbout.join(', ')}\nThis is generally NOT safe. ` +
                    `Learn more at https://bit.ly/wb-precache`;
                if (false) {}
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.warn(warningMessage);
                }
            }
        }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.InstallResult>}
     */
    install(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const installReportPlugin = new _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__.PrecacheInstallReportPlugin();
            this.strategy.plugins.push(installReportPlugin);
            // Cache entries one at a time.
            // See https://github.com/GoogleChrome/workbox/issues/2528
            for (const [url, cacheKey] of this._urlsToCacheKeys) {
                const integrity = this._cacheKeysToIntegrities.get(cacheKey);
                const cacheMode = this._urlsToCacheModes.get(url);
                const request = new Request(url, {
                    integrity,
                    cache: cacheMode,
                    credentials: 'same-origin',
                });
                await Promise.all(this.strategy.handleAll({
                    params: { cacheKey },
                    request,
                    event,
                }));
            }
            const { updatedURLs, notUpdatedURLs } = installReportPlugin;
            if (true) {
                (0,_utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__.printInstallDetails)(updatedURLs, notUpdatedURLs);
            }
            return { updatedURLs, notUpdatedURLs };
        });
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<workbox-precaching.CleanupResult>}
     */
    activate(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const cache = await self.caches.open(this.strategy.cacheName);
            const currentlyCachedRequests = await cache.keys();
            const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
            const deletedURLs = [];
            for (const request of currentlyCachedRequests) {
                if (!expectedCacheKeys.has(request.url)) {
                    await cache.delete(request);
                    deletedURLs.push(request.url);
                }
            }
            if (true) {
                (0,_utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__.printCleanupDetails)(deletedURLs);
            }
            return { deletedURLs };
        });
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */
    getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */
    getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()];
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */
    getCacheKeyForURL(url) {
        const urlObject = new URL(url, location.href);
        return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * @param {string} url A cache key whose SRI you want to look up.
     * @return {string} The subresource integrity associated with the cache key,
     * or undefined if it's not set.
     */
    getIntegrityForCacheKey(cacheKey) {
        return this._cacheKeysToIntegrities.get(cacheKey);
    }
    /**
     * This acts as a drop-in replacement for
     * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */
    async matchPrecache(request) {
        const url = request instanceof Request ? request.url : request;
        const cacheKey = this.getCacheKeyForURL(url);
        if (cacheKey) {
            const cache = await self.caches.open(this.strategy.cacheName);
            return cache.match(cacheKey);
        }
        return undefined;
    }
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @return {workbox-routing~handlerCallback}
     */
    createHandlerBoundToURL(url) {
        const cacheKey = this.getCacheKeyForURL(url);
        if (!cacheKey) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('non-precached-url', { url });
        }
        return (options) => {
            options.request = new Request(url);
            options.params = Object.assign({ cacheKey }, options.params);
            return this.strategy.handle(options);
        };
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheFallbackPlugin.js":
/*!*******************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheFallbackPlugin.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheFallbackPlugin": () => (/* binding */ PrecacheFallbackPlugin)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * `PrecacheFallbackPlugin` allows you to specify an "offline fallback"
 * response to be used when a given strategy is unable to generate a response.
 *
 * It does this by intercepting the `handlerDidError` plugin callback
 * and returning a precached response, taking the expected revision parameter
 * into account automatically.
 *
 * Unless you explicitly pass in a `PrecacheController` instance to the
 * constructor, the default instance will be used. Generally speaking, most
 * developers will end up using the default.
 *
 * @memberof workbox-precaching
 */
class PrecacheFallbackPlugin {
    /**
     * Constructs a new PrecacheFallbackPlugin with the associated fallbackURL.
     *
     * @param {Object} config
     * @param {string} config.fallbackURL A precached URL to use as the fallback
     *     if the associated strategy can't generate a response.
     * @param {PrecacheController} [config.precacheController] An optional
     *     PrecacheController instance. If not provided, the default
     *     PrecacheController will be used.
     */
    constructor({ fallbackURL, precacheController, }) {
        /**
         * @return {Promise<Response>} The precache response for the fallback URL.
         *
         * @private
         */
        this.handlerDidError = () => this._precacheController.matchPrecache(this._fallbackURL);
        this._fallbackURL = fallbackURL;
        this._precacheController =
            precacheController || (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheRoute.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheRoute.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheRoute": () => (/* binding */ PrecacheRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-routing/Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/generateURLVariations.js */ "./node_modules/workbox-precaching/utils/generateURLVariations.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * A subclass of {@link workbox-routing.Route} that takes a
 * {@link workbox-precaching.PrecacheController}
 * instance and uses it to match incoming requests and handle fetching
 * responses from the precache.
 *
 * @memberof workbox-precaching
 * @extends workbox-routing.Route
 */
class PrecacheRoute extends workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * @param {PrecacheController} precacheController A `PrecacheController`
     * instance used to both match requests and respond to fetch events.
     * @param {Object} [options] Options to control how requests are matched
     * against the list of precached URLs.
     * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
     * check cache entries for a URLs ending with '/' to see if there is a hit when
     * appending the `directoryIndex` value.
     * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
     * array of regex's to remove search params when looking for a cache match.
     * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
     * check the cache for the URL with a `.html` added to the end of the end.
     * @param {workbox-precaching~urlManipulation} [options.urlManipulation]
     * This is a function that should take a URL and return an array of
     * alternative URLs that should be checked for precache matches.
     */
    constructor(precacheController, options) {
        const match = ({ request, }) => {
            const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
            for (const possibleURL of (0,_utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__.generateURLVariations)(request.url, options)) {
                const cacheKey = urlsToCacheKeys.get(possibleURL);
                if (cacheKey) {
                    const integrity = precacheController.getIntegrityForCacheKey(cacheKey);
                    return { cacheKey, integrity };
                }
            }
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`Precaching did not find a match for ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(request.url));
            }
            return;
        };
        super(match, precacheController.strategy);
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheStrategy.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheStrategy.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheStrategy": () => (/* binding */ PrecacheStrategy)
/* harmony export */ });
/* harmony import */ var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/copyResponse.js */ "./node_modules/workbox-core/copyResponse.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-strategies/Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * A {@link workbox-strategies.Strategy} implementation
 * specifically designed to work with
 * {@link workbox-precaching.PrecacheController}
 * to both cache and fetch precached assets.
 *
 * Note: an instance of this class is created automatically when creating a
 * `PrecacheController`; it's generally not necessary to create this yourself.
 *
 * @extends workbox-strategies.Strategy
 * @memberof workbox-precaching
 */
class PrecacheStrategy extends workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__.Strategy {
    /**
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] {@link https://developers.google.com/web/tools/workbox/guides/using-plugins|Plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters|init}
     * of all fetch() requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * {@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions|CacheQueryOptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor(options = {}) {
        options.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(options.cacheName);
        super(options);
        this._fallbackToNetwork =
            options.fallbackToNetwork === false ? false : true;
        // Redirected responses cannot be used to satisfy a navigation request, so
        // any redirected response must be "copied" rather than cloned, so the new
        // response doesn't contain the `redirected` flag. See:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
        this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const response = await handler.cacheMatch(request);
        if (response) {
            return response;
        }
        // If this is an `install` event for an entry that isn't already cached,
        // then populate the cache.
        if (handler.event && handler.event.type === 'install') {
            return await this._handleInstall(request, handler);
        }
        // Getting here means something went wrong. An entry that should have been
        // precached wasn't found in the cache.
        return await this._handleFetch(request, handler);
    }
    async _handleFetch(request, handler) {
        let response;
        const params = (handler.params || {});
        // Fall back to the network if we're configured to do so.
        if (this._fallbackToNetwork) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`The precached response for ` +
                    `${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} in ${this.cacheName} was not ` +
                    `found. Falling back to the network.`);
            }
            const integrityInManifest = params.integrity;
            const integrityInRequest = request.integrity;
            const noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest;
            // Do not add integrity if the original request is no-cors
            // See https://github.com/GoogleChrome/workbox/issues/3096
            response = await handler.fetch(new Request(request, {
                integrity: request.mode !== 'no-cors'
                    ? integrityInRequest || integrityInManifest
                    : undefined,
            }));
            // It's only "safe" to repair the cache if we're using SRI to guarantee
            // that the response matches the precache manifest's expectations,
            // and there's either a) no integrity property in the incoming request
            // or b) there is an integrity, and it matches the precache manifest.
            // See https://github.com/GoogleChrome/workbox/issues/2858
            // Also if the original request users no-cors we don't use integrity.
            // See https://github.com/GoogleChrome/workbox/issues/3096
            if (integrityInManifest &&
                noIntegrityConflict &&
                request.mode !== 'no-cors') {
                this._useDefaultCacheabilityPluginIfNeeded();
                const wasCached = await handler.cachePut(request, response.clone());
                if (true) {
                    if (wasCached) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`A response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} ` +
                            `was used to "repair" the precache.`);
                    }
                }
            }
        }
        else {
            // This shouldn't normally happen, but there are edge cases:
            // https://github.com/GoogleChrome/workbox/issues/1441
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('missing-precache-entry', {
                cacheName: this.cacheName,
                url: request.url,
            });
        }
        if (true) {
            const cacheKey = params.cacheKey || (await handler.getCacheKey(request, 'read'));
            // Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Precaching is responding to: ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url));
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`Serving the precached url: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(cacheKey instanceof Request ? cacheKey.url : cacheKey)}`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View request details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(request);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View response details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        return response;
    }
    async _handleInstall(request, handler) {
        this._useDefaultCacheabilityPluginIfNeeded();
        const response = await handler.fetch(request);
        // Make sure we defer cachePut() until after we know the response
        // should be cached; see https://github.com/GoogleChrome/workbox/issues/2737
        const wasCached = await handler.cachePut(request, response.clone());
        if (!wasCached) {
            // Throwing here will lead to the `install` handler failing, which
            // we want to do if *any* of the responses aren't safe to cache.
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('bad-precaching-response', {
                url: request.url,
                status: response.status,
            });
        }
        return response;
    }
    /**
     * This method is complex, as there a number of things to account for:
     *
     * The `plugins` array can be set at construction, and/or it might be added to
     * to at any time before the strategy is used.
     *
     * At the time the strategy is used (i.e. during an `install` event), there
     * needs to be at least one plugin that implements `cacheWillUpdate` in the
     * array, other than `copyRedirectedCacheableResponsesPlugin`.
     *
     * - If this method is called and there are no suitable `cacheWillUpdate`
     * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
     *
     * - If this method is called and there is exactly one `cacheWillUpdate`, then
     * we don't have to do anything (this might be a previously added
     * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
     *
     * - If this method is called and there is more than one `cacheWillUpdate`,
     * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
     * we need to remove it. (This situation is unlikely, but it could happen if
     * the strategy is used multiple times, the first without a `cacheWillUpdate`,
     * and then later on after manually adding a custom `cacheWillUpdate`.)
     *
     * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
     *
     * @private
     */
    _useDefaultCacheabilityPluginIfNeeded() {
        let defaultPluginIndex = null;
        let cacheWillUpdatePluginCount = 0;
        for (const [index, plugin] of this.plugins.entries()) {
            // Ignore the copy redirected plugin when determining what to do.
            if (plugin === PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
                continue;
            }
            // Save the default plugin's index, in case it needs to be removed.
            if (plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
                defaultPluginIndex = index;
            }
            if (plugin.cacheWillUpdate) {
                cacheWillUpdatePluginCount++;
            }
        }
        if (cacheWillUpdatePluginCount === 0) {
            this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
        }
        else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
            // Only remove the default plugin; multiple custom plugins are allowed.
            this.plugins.splice(defaultPluginIndex, 1);
        }
        // Nothing needs to be done if cacheWillUpdatePluginCount is 1
    }
}
PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
    async cacheWillUpdate({ response }) {
        if (!response || response.status >= 400) {
            return null;
        }
        return response;
    },
};
PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
    async cacheWillUpdate({ response }) {
        return response.redirected ? await (0,workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__.copyResponse)(response) : response;
    },
};



/***/ }),

/***/ "./node_modules/workbox-precaching/_types.js":
/*!***************************************************!*\
  !*** ./node_modules/workbox-precaching/_types.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// * * * IMPORTANT! * * *
// ------------------------------------------------------------------------- //
// jdsoc type definitions cannot be declared above TypeScript definitions or
// they'll be stripped from the built `.js` files, and they'll only be in the
// `d.ts` files, which aren't read by the jsdoc generator. As a result we
// have to put declare them below.
/**
 * @typedef {Object} InstallResult
 * @property {Array<string>} updatedURLs List of URLs that were updated during
 * installation.
 * @property {Array<string>} notUpdatedURLs List of URLs that were already up to
 * date.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} CleanupResult
 * @property {Array<string>} deletedCacheRequests List of URLs that were deleted
 * while cleaning up the cache.
 *
 * @memberof workbox-precaching
 */
/**
 * @typedef {Object} PrecacheEntry
 * @property {string} url URL to precache.
 * @property {string} [revision] Revision information for the URL.
 * @property {string} [integrity] Integrity metadata that will be used when
 * making the network request for the URL.
 *
 * @memberof workbox-precaching
 */
/**
 * The "urlManipulation" callback can be used to determine if there are any
 * additional permutations of a URL that should be used to check against
 * the available precached files.
 *
 * For example, Workbox supports checking for '/index.html' when the URL
 * '/' is provided. This callback allows additional, custom checks.
 *
 * @callback ~urlManipulation
 * @param {Object} context
 * @param {URL} context.url The request's URL.
 * @return {Array<URL>} To add additional urls to test, return an Array of
 * URLs. Please note that these **should not be strings**, but URL objects.
 *
 * @memberof workbox-precaching
 */


/***/ }),

/***/ "./node_modules/workbox-precaching/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/_version.js ***!
  \*****************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:precaching:6.5.3'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-precaching/addPlugins.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-precaching/addPlugins.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPlugins": () => (/* binding */ addPlugins)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds plugins to the precaching strategy.
 *
 * @param {Array<Object>} plugins
 *
 * @memberof workbox-precaching
 */
function addPlugins(plugins) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.strategy.plugins.push(...plugins);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/addRoute.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/addRoute.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addRoute": () => (/* binding */ addRoute)
/* harmony export */ });
/* harmony import */ var workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-routing/registerRoute.js */ "./node_modules/workbox-routing/registerRoute.js");
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} [options] See the {@link workbox-precaching.PrecacheRoute}
 * options.
 *
 * @memberof workbox-precaching
 */
function addRoute(options) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__.getOrCreatePrecacheController)();
    const precacheRoute = new _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__.PrecacheRoute(precacheController, options);
    (0,workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__.registerRoute)(precacheRoute);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js":
/*!******************************************************************!*\
  !*** ./node_modules/workbox-precaching/cleanupOutdatedCaches.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cleanupOutdatedCaches": () => (/* binding */ cleanupOutdatedCaches)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/deleteOutdatedCaches.js */ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds an `activate` event listener which will clean up incompatible
 * precaches that were created by older versions of Workbox.
 *
 * @memberof workbox-precaching
 */
function cleanupOutdatedCaches() {
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('activate', ((event) => {
        const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getPrecacheName();
        event.waitUntil((0,_utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.deleteOutdatedCaches)(cacheName).then((cachesDeleted) => {
            if (true) {
                if (cachesDeleted.length > 0) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`The following out-of-date precaches were cleaned up ` +
                        `automatically:`, cachesDeleted);
                }
            }
        }));
    }));
}



/***/ }),

/***/ "./node_modules/workbox-precaching/createHandlerBoundToURL.js":
/*!********************************************************************!*\
  !*** ./node_modules/workbox-precaching/createHandlerBoundToURL.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHandlerBoundToURL": () => (/* binding */ createHandlerBoundToURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandlerBoundToURL} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandlerBoundToURL} on that instance,
 * instead of using this function.
 *
 * @param {string} url The precached URL which will be used to lookup the
 * `Response`.
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {workbox-routing~handlerCallback}
 *
 * @memberof workbox-precaching
 */
function createHandlerBoundToURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.createHandlerBoundToURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/getCacheKeyForURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-precaching/getCacheKeyForURL.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCacheKeyForURL": () => (/* binding */ getCacheKeyForURL)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @memberof workbox-precaching
 */
function getCacheKeyForURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.getCacheKeyForURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/index.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-precaching/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => (/* reexport safe */ _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__.PrecacheController),
/* harmony export */   "PrecacheFallbackPlugin": () => (/* reexport safe */ _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__.PrecacheFallbackPlugin),
/* harmony export */   "PrecacheRoute": () => (/* reexport safe */ _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__.PrecacheRoute),
/* harmony export */   "PrecacheStrategy": () => (/* reexport safe */ _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy),
/* harmony export */   "addPlugins": () => (/* reexport safe */ _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   "addRoute": () => (/* reexport safe */ _addRoute_js__WEBPACK_IMPORTED_MODULE_1__.addRoute),
/* harmony export */   "cleanupOutdatedCaches": () => (/* reexport safe */ _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.cleanupOutdatedCaches),
/* harmony export */   "createHandlerBoundToURL": () => (/* reexport safe */ _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__.createHandlerBoundToURL),
/* harmony export */   "getCacheKeyForURL": () => (/* reexport safe */ _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__.getCacheKeyForURL),
/* harmony export */   "matchPrecache": () => (/* reexport safe */ _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__.matchPrecache),
/* harmony export */   "precache": () => (/* reexport safe */ _precache_js__WEBPACK_IMPORTED_MODULE_6__.precache),
/* harmony export */   "precacheAndRoute": () => (/* reexport safe */ _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPlugins.js */ "./node_modules/workbox-precaching/addPlugins.js");
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanupOutdatedCaches.js */ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js");
/* harmony import */ var _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createHandlerBoundToURL.js */ "./node_modules/workbox-precaching/createHandlerBoundToURL.js");
/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "./node_modules/workbox-precaching/getCacheKeyForURL.js");
/* harmony import */ var _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matchPrecache.js */ "./node_modules/workbox-precaching/matchPrecache.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony import */ var _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./precacheAndRoute.js */ "./node_modules/workbox-precaching/precacheAndRoute.js");
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PrecacheFallbackPlugin.js */ "./node_modules/workbox-precaching/PrecacheFallbackPlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_types.js */ "./node_modules/workbox-precaching/_types.js");
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/













/**
 * Most consumers of this module will want to use the
 * {@link workbox-precaching.precacheAndRoute}
 * method to add assets to the cache and respond to network requests with these
 * cached assets.
 *
 * If you require more control over caching and routing, you can use the
 * {@link workbox-precaching.PrecacheController}
 * interface.
 *
 * @module workbox-precaching
 */




/***/ }),

/***/ "./node_modules/workbox-precaching/matchPrecache.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/matchPrecache.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matchPrecache": () => (/* binding */ matchPrecache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#matchPrecache} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call
 * {@link PrecacheController#matchPrecache} on that instance,
 * instead of using this function.
 *
 * @param {string|Request} request The key (without revisioning parameters)
 * to look up in the precache.
 * @return {Promise<Response|undefined>}
 *
 * @memberof workbox-precaching
 */
function matchPrecache(request) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.matchPrecache(request);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precache.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/precache.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "precache": () => (/* binding */ precache)
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * {@link workbox-core.cacheNames|"precache cache"} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * {@link workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * {@link workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
 *
 * @memberof workbox-precaching
 */
function precache(entries) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.precache(entries);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precacheAndRoute.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-precaching/precacheAndRoute.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "precacheAndRoute": () => (/* binding */ precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * {@link workbox-precaching.precache} and
 * {@link workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} [options] See the
 * {@link workbox-precaching.PrecacheRoute} options.
 *
 * @memberof workbox-precaching
 */
function precacheAndRoute(entries, options) {
    (0,_precache_js__WEBPACK_IMPORTED_MODULE_1__.precache)(entries);
    (0,_addRoute_js__WEBPACK_IMPORTED_MODULE_0__.addRoute)(options);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js":
/*!*************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheCacheKeyPlugin": () => (/* binding */ PrecacheCacheKeyPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to translate URLs into
 * the corresponding cache key, based on the current revision info.
 *
 * @private
 */
class PrecacheCacheKeyPlugin {
    constructor({ precacheController }) {
        this.cacheKeyWillBeUsed = async ({ request, params, }) => {
            // Params is type any, can't change right now.
            /* eslint-disable */
            const cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) ||
                this._precacheController.getCacheKeyForURL(request.url);
            /* eslint-enable */
            return cacheKey
                ? new Request(cacheKey, { headers: request.headers })
                : request;
        };
        this._precacheController = precacheController;
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js":
/*!******************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheInstallReportPlugin": () => (/* binding */ PrecacheInstallReportPlugin)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to determine the
 * of assets that were updated (or not updated) during the install event.
 *
 * @private
 */
class PrecacheInstallReportPlugin {
    constructor() {
        this.updatedURLs = [];
        this.notUpdatedURLs = [];
        this.handlerWillStart = async ({ request, state, }) => {
            // TODO: `state` should never be undefined...
            if (state) {
                state.originalRequest = request;
            }
        };
        this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse, }) => {
            if (event.type === 'install') {
                if (state &&
                    state.originalRequest &&
                    state.originalRequest instanceof Request) {
                    // TODO: `state` should never be undefined...
                    const url = state.originalRequest.url;
                    if (cachedResponse) {
                        this.notUpdatedURLs.push(url);
                    }
                    else {
                        this.updatedURLs.push(url);
                    }
                }
            }
            return cachedResponse;
        };
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/createCacheKey.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/createCacheKey.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCacheKey": () => (/* binding */ createCacheKey)
/* harmony export */ });
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


// Name of the search parameter used to store revision info.
const REVISION_SEARCH_PARAM = '__WB_REVISION__';
/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object|string} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof workbox-precaching
 */
function createCacheKey(entry) {
    if (!entry) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If a precache manifest entry is a string, it's assumed to be a versioned
    // URL, like '/app.abcd1234.js'. Return as-is.
    if (typeof entry === 'string') {
        const urlObject = new URL(entry, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    const { revision, url } = entry;
    if (!url) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If there's just a URL and no revision, then it's also assumed to be a
    // versioned URL.
    if (!revision) {
        const urlObject = new URL(url, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    // Otherwise, construct a properly versioned URL using the custom Workbox
    // search parameter along with the revision info.
    const cacheKeyURL = new URL(url, location.href);
    const originalURL = new URL(url, location.href);
    cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
    return {
        cacheKey: cacheKeyURL.href,
        url: originalURL.href,
    };
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteOutdatedCaches": () => (/* binding */ deleteOutdatedCaches)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const SUBSTRING_TO_FIND = '-precache-';
/**
 * Cleans up incompatible precaches that were created by older versions of
 * Workbox, by a service worker registered under the current scope.
 *
 * This is meant to be called as part of the `activate` event.
 *
 * This should be safe to use as long as you don't include `substringToFind`
 * (defaulting to `-precache-`) in your non-precache cache names.
 *
 * @param {string} currentPrecacheName The cache name currently in use for
 * precaching. This cache won't be deleted.
 * @param {string} [substringToFind='-precache-'] Cache names which include this
 * substring will be deleted (excluding `currentPrecacheName`).
 * @return {Array<string>} A list of all the cache names that were deleted.
 *
 * @private
 * @memberof workbox-precaching
 */
const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
    const cacheNames = await self.caches.keys();
    const cacheNamesToDelete = cacheNames.filter((cacheName) => {
        return (cacheName.includes(substringToFind) &&
            cacheName.includes(self.registration.scope) &&
            cacheName !== currentPrecacheName);
    });
    await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
    return cacheNamesToDelete;
};



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/generateURLVariations.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/generateURLVariations.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateURLVariations": () => (/* binding */ generateURLVariations)
/* harmony export */ });
/* harmony import */ var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIgnoredSearchParams.js */ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof workbox-precaching
 */
function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = 'index.html', cleanURLs = true, urlManipulation, } = {}) {
    const urlObject = new URL(url, location.href);
    urlObject.hash = '';
    yield urlObject.href;
    const urlWithoutIgnoredParams = (0,_removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__.removeIgnoredSearchParams)(urlObject, ignoreURLParametersMatching);
    yield urlWithoutIgnoredParams.href;
    if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
        const directoryURL = new URL(urlWithoutIgnoredParams.href);
        directoryURL.pathname += directoryIndex;
        yield directoryURL.href;
    }
    if (cleanURLs) {
        const cleanURL = new URL(urlWithoutIgnoredParams.href);
        cleanURL.pathname += '.html';
        yield cleanURL.href;
    }
    if (urlManipulation) {
        const additionalURLs = urlManipulation({ url: urlObject });
        for (const urlToAttempt of additionalURLs) {
            yield urlToAttempt.href;
        }
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js":
/*!********************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrCreatePrecacheController": () => (/* binding */ getOrCreatePrecacheController)
/* harmony export */ });
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let precacheController;
/**
 * @return {PrecacheController}
 * @private
 */
const getOrCreatePrecacheController = () => {
    if (!precacheController) {
        precacheController = new _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController();
    }
    return precacheController;
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printCleanupDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printCleanupDetails.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printCleanupDetails": () => (/* binding */ printCleanupDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} deletedURLs
 *
 * @private
 */
const logGroup = (groupTitle, deletedURLs) => {
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
};
/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof workbox-precaching
 */
function printCleanupDetails(deletedURLs) {
    const deletionCount = deletedURLs.length;
    if (deletionCount > 0) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(`During precaching cleanup, ` +
            `${deletionCount} cached ` +
            `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
        logGroup('Deleted Cache Requests', deletedURLs);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printInstallDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printInstallDetails.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printInstallDetails": () => (/* binding */ printInstallDetails)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */
function _nestedGroup(groupTitle, urls) {
    if (urls.length === 0) {
        return;
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of urls) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
}
/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof workbox-precaching
 */
function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
    const precachedCount = urlsToPrecache.length;
    const alreadyPrecachedCount = urlsAlreadyPrecached.length;
    if (precachedCount || alreadyPrecachedCount) {
        let message = `Precaching ${precachedCount} file${precachedCount === 1 ? '' : 's'}.`;
        if (alreadyPrecachedCount > 0) {
            message +=
                ` ${alreadyPrecachedCount} ` +
                    `file${alreadyPrecachedCount === 1 ? ' is' : 's are'} already cached.`;
        }
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(message);
        _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
        _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js":
/*!****************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeIgnoredSearchParams": () => (/* binding */ removeIgnoredSearchParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof workbox-precaching
 */
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
    // Convert the iterable into an array at the start of the loop to make sure
    // deletion doesn't mess up iteration.
    for (const paramName of [...urlObject.searchParams.keys()]) {
        if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
            urlObject.searchParams.delete(paramName);
        }
    }
    return urlObject;
}


/***/ }),

/***/ "./node_modules/workbox-routing/RegExpRoute.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-routing/RegExpRoute.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegExpRoute": () => (/* binding */ RegExpRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * RegExpRoute makes it easy to create a regular expression based
 * {@link workbox-routing.Route}.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * @memberof workbox-routing
 * @extends workbox-routing.Route
 */
class RegExpRoute extends _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * If the regular expression contains
     * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
     * the captured values will be passed to the
     * {@link workbox-routing~handlerCallback} `params`
     * argument.
     *
     * @param {RegExp} regExp The regular expression to match against URLs.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(regExp, handler, method) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(regExp, RegExp, {
                moduleName: 'workbox-routing',
                className: 'RegExpRoute',
                funcName: 'constructor',
                paramName: 'pattern',
            });
        }
        const match = ({ url }) => {
            const result = regExp.exec(url.href);
            // Return immediately if there's no match.
            if (!result) {
                return;
            }
            // Require that the match start at the first character in the URL string
            // if it's a cross-origin request.
            // See https://github.com/GoogleChrome/workbox/issues/281 for the context
            // behind this behavior.
            if (url.origin !== location.origin && result.index !== 0) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.debug(`The regular expression '${regExp.toString()}' only partially matched ` +
                        `against the cross-origin URL '${url.toString()}'. RegExpRoute's will only ` +
                        `handle cross-origin requests if they match the entire URL.`);
                }
                return;
            }
            // If the route matches, but there aren't any capture groups defined, then
            // this will return [], which is truthy and therefore sufficient to
            // indicate a match.
            // If there are capture groups, then it will return their values.
            return result.slice(1);
        };
        super(match, handler, method);
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/Route.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-routing/Route.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Route": () => (/* binding */ Route)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof workbox-routing
 */
class Route {
    /**
     * Constructor for Route class.
     *
     * @param {workbox-routing~matchCallback} match
     * A callback function that determines whether the route matches a given
     * `fetch` event by returning a non-falsy value.
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(match, handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.defaultMethod) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(match, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'match',
            });
            if (method) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isOneOf(method, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validMethods, { paramName: 'method' });
            }
        }
        // These values are referenced directly by Router so cannot be
        // altered by minificaton.
        this.handler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
        this.match = match;
        this.method = method;
    }
    /**
     *
     * @param {workbox-routing-handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response
     */
    setCatchHandler(handler) {
        this.catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/Router.js":
/*!************************************************!*\
  !*** ./node_modules/workbox-routing/Router.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Router": () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * The Router can be used to process a `FetchEvent` using one or more
 * {@link workbox-routing.Route}, responding with a `Response` if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof workbox-routing
 */
class Router {
    /**
     * Initializes a new Router.
     */
    constructor() {
        this._routes = new Map();
        this._defaultHandlerMap = new Map();
    }
    /**
     * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
     * method name ('GET', etc.) to an array of all the corresponding `Route`
     * instances that are registered.
     */
    get routes() {
        return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */
    addFetchListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('fetch', ((event) => {
            const { request } = event;
            const responsePromise = this.handleRequest({ request, event });
            if (responsePromise) {
                event.respondWith(responsePromise);
            }
        }));
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */
    addCacheListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('message', ((event) => {
            // event.data is type 'any'
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (event.data && event.data.type === 'CACHE_URLS') {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const { payload } = event.data;
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Caching URLs from the window`, payload.urlsToCache);
                }
                const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                    if (typeof entry === 'string') {
                        entry = [entry];
                    }
                    const request = new Request(...entry);
                    return this.handleRequest({ request, event });
                    // TODO(philipwalton): TypeScript errors without this typecast for
                    // some reason (probably a bug). The real type here should work but
                    // doesn't: `Array<Promise<Response> | undefined>`.
                })); // TypeScript
                event.waitUntil(requestPromises);
                // If a MessageChannel was used, reply to the message on success.
                if (event.ports && event.ports[0]) {
                    void requestPromises.then(() => event.ports[0].postMessage(true));
                }
            }
        }));
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle.
     * @param {ExtendableEvent} options.event The event that triggered the
     *     request.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */
    handleRequest({ request, event, }) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'handleRequest',
                paramName: 'options.request',
            });
        }
        const url = new URL(request.url, location.href);
        if (!url.protocol.startsWith('http')) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
            }
            return;
        }
        const sameOrigin = url.origin === location.origin;
        const { params, route } = this.findMatchingRoute({
            event,
            request,
            sameOrigin,
            url,
        });
        let handler = route && route.handler;
        const debugMessages = [];
        if (true) {
            if (handler) {
                debugMessages.push([`Found a route to handle this request:`, route]);
                if (params) {
                    debugMessages.push([
                        `Passing the following params to the route's handler:`,
                        params,
                    ]);
                }
            }
        }
        // If we don't have a handler because there was no matching route, then
        // fall back to defaultHandler if that's defined.
        const method = request.method;
        if (!handler && this._defaultHandlerMap.has(method)) {
            if (true) {
                debugMessages.push(`Failed to find a matching route. Falling ` +
                    `back to the default handler for ${method}.`);
            }
            handler = this._defaultHandlerMap.get(method);
        }
        if (!handler) {
            if (true) {
                // No handler so Workbox will do nothing. If logs is set of debug
                // i.e. verbose, we should print out this information.
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`No route found for: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            }
            return;
        }
        if (true) {
            // We have a handler, meaning Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Router is responding to: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            debugMessages.forEach((msg) => {
                if (Array.isArray(msg)) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(...msg);
                }
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(msg);
                }
            });
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        // Wrap in try and catch in case the handle method throws a synchronous
        // error. It should still callback to the catch handler.
        let responsePromise;
        try {
            responsePromise = handler.handle({ url, request, event, params });
        }
        catch (err) {
            responsePromise = Promise.reject(err);
        }
        // Get route's catch handler, if it exists
        const catchHandler = route && route.catchHandler;
        if (responsePromise instanceof Promise &&
            (this._catchHandler || catchHandler)) {
            responsePromise = responsePromise.catch(async (err) => {
                // If there's a route catch handler, process that first
                if (catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to route's Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    try {
                        return await catchHandler.handle({ url, request, event, params });
                    }
                    catch (catchErr) {
                        if (catchErr instanceof Error) {
                            err = catchErr;
                        }
                    }
                }
                if (this._catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to global Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    return this._catchHandler.handle({ url, request, event });
                }
                throw err;
            });
        }
        return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {boolean} options.sameOrigin The result of comparing `url.origin`
     *     against the current origin.
     * @param {Request} options.request The request to match.
     * @param {Event} options.event The corresponding event.
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */
    findMatchingRoute({ url, sameOrigin, request, event, }) {
        const routes = this._routes.get(request.method) || [];
        for (const route of routes) {
            let params;
            // route.match returns type any, not possible to change right now.
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const matchResult = route.match({ url, sameOrigin, request, event });
            if (matchResult) {
                if (true) {
                    // Warn developers that using an async matchCallback is almost always
                    // not the right thing to do.
                    if (matchResult instanceof Promise) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`While routing ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}, an async ` +
                            `matchCallback function was used. Please convert the ` +
                            `following route to use a synchronous matchCallback function:`, route);
                    }
                }
                // See https://github.com/GoogleChrome/workbox/issues/2079
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                params = matchResult;
                if (Array.isArray(params) && params.length === 0) {
                    // Instead of passing an empty array in as params, use undefined.
                    params = undefined;
                }
                else if (matchResult.constructor === Object && // eslint-disable-line
                    Object.keys(matchResult).length === 0) {
                    // Instead of passing an empty object in as params, use undefined.
                    params = undefined;
                }
                else if (typeof matchResult === 'boolean') {
                    // For the boolean value true (rather than just something truth-y),
                    // don't set params.
                    // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
                    params = undefined;
                }
                // Return early if have a match.
                return { route, params };
            }
        }
        // If no match was found above, return and empty object.
        return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to associate with this
     * default handler. Each method has its own default.
     */
    setDefaultHandler(handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.defaultMethod) {
        this._defaultHandlerMap.set(method, (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler));
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setCatchHandler(handler) {
        this._catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {workbox-routing.Route} route The route to register.
     */
    registerRoute(route) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route, 'match', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.handler, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route.handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.handler',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.method, 'string', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.method',
            });
        }
        if (!this._routes.has(route.method)) {
            this._routes.set(route.method, []);
        }
        // Give precedence to all of the earlier routes by adding this additional
        // route to the end of the array.
        this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {workbox-routing.Route} route The route to unregister.
     */
    unregisterRoute(route) {
        if (!this._routes.has(route.method)) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-but-not-found-with-method', {
                method: route.method,
            });
        }
        const routeIndex = this._routes.get(route.method).indexOf(route);
        if (routeIndex > -1) {
            this._routes.get(route.method).splice(routeIndex, 1);
        }
        else {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-route-not-registered');
        }
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/_version.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-routing/_version.js ***!
  \**************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:routing:6.5.3'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-routing/registerRoute.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-routing/registerRoute.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerRoute": () => (/* binding */ registerRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExpRoute.js */ "./node_modules/workbox-routing/RegExpRoute.js");
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Easily register a RegExp, string, or function with a caching
 * strategy to a singleton Router instance.
 *
 * This method will generate a Route for you if needed and
 * call {@link workbox-routing.Router#registerRoute}.
 *
 * @param {RegExp|string|workbox-routing.Route~matchCallback|workbox-routing.Route} capture
 * If the capture param is a `Route`, all other arguments will be ignored.
 * @param {workbox-routing~handlerCallback} [handler] A callback
 * function that returns a Promise resulting in a Response. This parameter
 * is required if `capture` is not a `Route` object.
 * @param {string} [method='GET'] The HTTP method to match the Route
 * against.
 * @return {workbox-routing.Route} The generated `Route`.
 *
 * @memberof workbox-routing
 */
function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === 'string') {
        const captureUrl = new URL(capture, location.href);
        if (true) {
            if (!(capture.startsWith('/') || capture.startsWith('http'))) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('invalid-string', {
                    moduleName: 'workbox-routing',
                    funcName: 'registerRoute',
                    paramName: 'capture',
                });
            }
            // We want to check if Express-style wildcards are in the pathname only.
            // TODO: Remove this log message in v4.
            const valueToCheck = capture.startsWith('http')
                ? captureUrl.pathname
                : capture;
            // See https://github.com/pillarjs/path-to-regexp#parameters
            const wildcards = '[*:?+]';
            if (new RegExp(`${wildcards}`).exec(valueToCheck)) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`The '$capture' parameter contains an Express-style wildcard ` +
                    `character (${wildcards}). Strings are now always interpreted as ` +
                    `exact matches; use a RegExp for partial or wildcard matches.`);
            }
        }
        const matchCallback = ({ url }) => {
            if (true) {
                if (url.pathname === captureUrl.pathname &&
                    url.origin !== captureUrl.origin) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`${capture} only partially matches the cross-origin URL ` +
                        `${url.toString()}. This route will only handle cross-origin requests ` +
                        `if they match the entire URL.`);
                }
            }
            return url.href === captureUrl.href;
        };
        // If `capture` is a string then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(matchCallback, handler, method);
    }
    else if (capture instanceof RegExp) {
        // If `capture` is a `RegExp` then `handler` and `method` must be present.
        route = new _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__.RegExpRoute(capture, handler, method);
    }
    else if (typeof capture === 'function') {
        // If `capture` is a function then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(capture, handler, method);
    }
    else if (capture instanceof _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route) {
        route = capture;
    }
    else {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('unsupported-route-type', {
            moduleName: 'workbox-routing',
            funcName: 'registerRoute',
            paramName: 'capture',
        });
    }
    const defaultRouter = (0,_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__.getOrCreateDefaultRouter)();
    defaultRouter.registerRoute(route);
    return route;
}



/***/ }),

/***/ "./node_modules/workbox-routing/utils/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-routing/utils/constants.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultMethod": () => (/* binding */ defaultMethod),
/* harmony export */   "validMethods": () => (/* binding */ validMethods)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The default HTTP method, 'GET', used when there's no specific method
 * configured for a route.
 *
 * @type {string}
 *
 * @private
 */
const defaultMethod = 'GET';
/**
 * The list of valid HTTP methods associated with requests that could be routed.
 *
 * @type {Array<string>}
 *
 * @private
 */
const validMethods = [
    'DELETE',
    'GET',
    'HEAD',
    'PATCH',
    'POST',
    'PUT',
];


/***/ }),

/***/ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrCreateDefaultRouter": () => (/* binding */ getOrCreateDefaultRouter)
/* harmony export */ });
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Router.js */ "./node_modules/workbox-routing/Router.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let defaultRouter;
/**
 * Creates a new, singleton Router instance if one does not exist. If one
 * does already exist, that instance is returned.
 *
 * @private
 * @return {Router}
 */
const getOrCreateDefaultRouter = () => {
    if (!defaultRouter) {
        defaultRouter = new _Router_js__WEBPACK_IMPORTED_MODULE_0__.Router();
        // The helpers that use the default Router assume these listeners exist.
        defaultRouter.addFetchListener();
        defaultRouter.addCacheListener();
    }
    return defaultRouter;
};


/***/ }),

/***/ "./node_modules/workbox-routing/utils/normalizeHandler.js":
/*!****************************************************************!*\
  !*** ./node_modules/workbox-routing/utils/normalizeHandler.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalizeHandler": () => (/* binding */ normalizeHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {function()|Object} handler Either a function, or an object with a
 * 'handle' method.
 * @return {Object} An object with a handle method.
 *
 * @private
 */
const normalizeHandler = (handler) => {
    if (handler && typeof handler === 'object') {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return handler;
    }
    else {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(handler, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return { handle: handler };
    }
};


/***/ }),

/***/ "./node_modules/workbox-strategies/Strategy.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-strategies/Strategy.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Strategy": () => (/* binding */ Strategy)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StrategyHandler.js */ "./node_modules/workbox-strategies/StrategyHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An abstract base class that all other strategy classes must extend from:
 *
 * @memberof workbox-strategies
 */
class Strategy {
    /**
     * Creates a new instance of the strategy and sets all documented option
     * properties as public instance properties.
     *
     * Note: if a custom strategy class extends the base Strategy class and does
     * not need more than these properties, it does not need to define its own
     * constructor.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * {@link workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     */
    constructor(options = {}) {
        /**
         * Cache name to store and retrieve
         * requests. Defaults to the cache names provided by
         * {@link workbox-core.cacheNames}.
         *
         * @type {string}
         */
        this.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getRuntimeName(options.cacheName);
        /**
         * The list
         * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
         * used by this strategy.
         *
         * @type {Array<Object>}
         */
        this.plugins = options.plugins || [];
        /**
         * Values passed along to the
         * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
         * of all fetch() requests made by this strategy.
         *
         * @type {Object}
         */
        this.fetchOptions = options.fetchOptions;
        /**
         * The
         * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
         * for any `cache.match()` or `cache.put()` calls made by this strategy.
         *
         * @type {Object}
         */
        this.matchOptions = options.matchOptions;
    }
    /**
     * Perform a request strategy and returns a `Promise` that will resolve with
     * a `Response`, invoking all relevant plugin callbacks.
     *
     * When a strategy instance is registered with a Workbox
     * {@link workbox-routing.Route}, this method is automatically
     * called when the route matches.
     *
     * Alternatively, this method can be used in a standalone `FetchEvent`
     * listener by passing it to `event.respondWith()`.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     */
    handle(options) {
        const [responseDone] = this.handleAll(options);
        return responseDone;
    }
    /**
     * Similar to {@link workbox-strategies.Strategy~handle}, but
     * instead of just returning a `Promise` that resolves to a `Response` it
     * it will return an tuple of `[response, done]` promises, where the former
     * (`response`) is equivalent to what `handle()` returns, and the latter is a
     * Promise that will resolve once any promises that were added to
     * `event.waitUntil()` as part of performing the strategy have completed.
     *
     * You can await the `done` promise to ensure any extra work performed by
     * the strategy (usually caching responses) completes successfully.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     * @return {Array<Promise>} A tuple of [response, done]
     *     promises that can be used to determine when the response resolves as
     *     well as when the handler has completed all its work.
     */
    handleAll(options) {
        // Allow for flexible options to be passed.
        if (options instanceof FetchEvent) {
            options = {
                event: options,
                request: options.request,
            };
        }
        const event = options.event;
        const request = typeof options.request === 'string'
            ? new Request(options.request)
            : options.request;
        const params = 'params' in options ? options.params : undefined;
        const handler = new _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__.StrategyHandler(this, { event, request, params });
        const responseDone = this._getResponse(handler, request, event);
        const handlerDone = this._awaitComplete(responseDone, handler, request, event);
        // Return an array of promises, suitable for use with Promise.all().
        return [responseDone, handlerDone];
    }
    async _getResponse(handler, request, event) {
        await handler.runCallbacks('handlerWillStart', { event, request });
        let response = undefined;
        try {
            response = await this._handle(request, handler);
            // The "official" Strategy subclasses all throw this error automatically,
            // but in case a third-party Strategy doesn't, ensure that we have a
            // consistent failure when there's no response or an error response.
            if (!response || response.type === 'error') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('no-response', { url: request.url });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                for (const callback of handler.iterateCallbacks('handlerDidError')) {
                    response = await callback({ error, event, request });
                    if (response) {
                        break;
                    }
                }
            }
            if (!response) {
                throw error;
            }
            else if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(`While responding to '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(request.url)}', ` +
                    `an ${error instanceof Error ? error.toString() : ''} error occurred. Using a fallback response provided by ` +
                    `a handlerDidError plugin.`);
            }
        }
        for (const callback of handler.iterateCallbacks('handlerWillRespond')) {
            response = await callback({ event, request, response });
        }
        return response;
    }
    async _awaitComplete(responseDone, handler, request, event) {
        let response;
        let error;
        try {
            response = await responseDone;
        }
        catch (error) {
            // Ignore errors, as response errors should be caught via the `response`
            // promise above. The `done` promise will only throw for errors in
            // promises passed to `handler.waitUntil()`.
        }
        try {
            await handler.runCallbacks('handlerDidRespond', {
                event,
                request,
                response,
            });
            await handler.doneWaiting();
        }
        catch (waitUntilError) {
            if (waitUntilError instanceof Error) {
                error = waitUntilError;
            }
        }
        await handler.runCallbacks('handlerDidComplete', {
            event,
            request,
            response,
            error: error,
        });
        handler.destroy();
        if (error) {
            throw error;
        }
    }
}

/**
 * Classes extending the `Strategy` based class should implement this method,
 * and leverage the {@link workbox-strategies.StrategyHandler}
 * arg to perform all fetching and cache logic, which will ensure all relevant
 * cache, cache options, fetch options and plugins are used (per the current
 * strategy instance).
 *
 * @name _handle
 * @instance
 * @abstract
 * @function
 * @param {Request} request
 * @param {workbox-strategies.StrategyHandler} handler
 * @return {Promise<Response>}
 *
 * @memberof workbox-strategies.Strategy
 */


/***/ }),

/***/ "./node_modules/workbox-strategies/StrategyHandler.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-strategies/StrategyHandler.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrategyHandler": () => (/* binding */ StrategyHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheMatchIgnoreParams.js */ "./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* harmony import */ var workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/Deferred.js */ "./node_modules/workbox-core/_private/Deferred.js");
/* harmony import */ var workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/executeQuotaErrorCallbacks.js */ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "./node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









function toRequest(input) {
    return typeof input === 'string' ? new Request(input) : input;
}
/**
 * A class created every time a Strategy instance instance calls
 * {@link workbox-strategies.Strategy~handle} or
 * {@link workbox-strategies.Strategy~handleAll} that wraps all fetch and
 * cache actions around plugin callbacks and keeps track of when the strategy
 * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
 *
 * @memberof workbox-strategies
 */
class StrategyHandler {
    /**
     * Creates a new instance associated with the passed strategy and event
     * that's handling the request.
     *
     * The constructor also initializes the state that will be passed to each of
     * the plugins handling this request.
     *
     * @param {workbox-strategies.Strategy} strategy
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params] The return value from the
     *     {@link workbox-routing~matchCallback} (if applicable).
     */
    constructor(strategy, options) {
        this._cacheKeys = {};
        /**
         * The request the strategy is performing (passed to the strategy's
         * `handle()` or `handleAll()` method).
         * @name request
         * @instance
         * @type {Request}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * The event associated with this request.
         * @name event
         * @instance
         * @type {ExtendableEvent}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `URL` instance of `request.url` (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `url` param will be present if the strategy was invoked
         * from a workbox `Route` object.
         * @name url
         * @instance
         * @type {URL|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        /**
         * A `param` value (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `param` param will be present if the strategy was invoked
         * from a workbox `Route` object and the
         * {@link workbox-routing~matchCallback} returned
         * a truthy value (it will be that value).
         * @name params
         * @instance
         * @type {*|undefined}
         * @memberof workbox-strategies.StrategyHandler
         */
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(options.event, ExtendableEvent, {
                moduleName: 'workbox-strategies',
                className: 'StrategyHandler',
                funcName: 'constructor',
                paramName: 'options.event',
            });
        }
        Object.assign(this, options);
        this.event = options.event;
        this._strategy = strategy;
        this._handlerDeferred = new workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred();
        this._extendLifetimePromises = [];
        // Copy the plugins list (since it's mutable on the strategy),
        // so any mutations don't affect this handler instance.
        this._plugins = [...strategy.plugins];
        this._pluginStateMap = new Map();
        for (const plugin of this._plugins) {
            this._pluginStateMap.set(plugin, {});
        }
        this.event.waitUntil(this._handlerDeferred.promise);
    }
    /**
     * Fetches a given request (and invokes any applicable plugin callback
     * methods) using the `fetchOptions` (for non-navigation requests) and
     * `plugins` defined on the `Strategy` object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - `requestWillFetch()`
     * - `fetchDidSucceed()`
     * - `fetchDidFail()`
     *
     * @param {Request|string} input The URL or request to fetch.
     * @return {Promise<Response>}
     */
    async fetch(input) {
        const { event } = this;
        let request = toRequest(input);
        if (request.mode === 'navigate' &&
            event instanceof FetchEvent &&
            event.preloadResponse) {
            const possiblePreloadResponse = (await event.preloadResponse);
            if (possiblePreloadResponse) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Using a preloaded navigation response for ` +
                        `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}'`);
                }
                return possiblePreloadResponse;
            }
        }
        // If there is a fetchDidFail plugin, we need to save a clone of the
        // original request before it's either modified by a requestWillFetch
        // plugin or before the original request's body is consumed via fetch().
        const originalRequest = this.hasCallback('fetchDidFail')
            ? request.clone()
            : null;
        try {
            for (const cb of this.iterateCallbacks('requestWillFetch')) {
                request = await cb({ request: request.clone(), event });
            }
        }
        catch (err) {
            if (err instanceof Error) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('plugin-error-request-will-fetch', {
                    thrownErrorMessage: err.message,
                });
            }
        }
        // The request can be altered by plugins with `requestWillFetch` making
        // the original request (most likely from a `fetch` event) different
        // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
        const pluginFilteredRequest = request.clone();
        try {
            let fetchResponse;
            // See https://github.com/GoogleChrome/workbox/issues/1796
            fetchResponse = await fetch(request, request.mode === 'navigate' ? undefined : this._strategy.fetchOptions);
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' returned a response with ` +
                    `status '${fetchResponse.status}'.`);
            }
            for (const callback of this.iterateCallbacks('fetchDidSucceed')) {
                fetchResponse = await callback({
                    event,
                    request: pluginFilteredRequest,
                    response: fetchResponse,
                });
            }
            return fetchResponse;
        }
        catch (error) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' threw an error.`, error);
            }
            // `originalRequest` will only exist if a `fetchDidFail` callback
            // is being used (see above).
            if (originalRequest) {
                await this.runCallbacks('fetchDidFail', {
                    error: error,
                    event,
                    originalRequest: originalRequest.clone(),
                    request: pluginFilteredRequest.clone(),
                });
            }
            throw error;
        }
    }
    /**
     * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
     * the response generated by `this.fetch()`.
     *
     * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
     * so you do not have to manually call `waitUntil()` on the event.
     *
     * @param {Request|string} input The request or URL to fetch and cache.
     * @return {Promise<Response>}
     */
    async fetchAndCachePut(input) {
        const response = await this.fetch(input);
        const responseClone = response.clone();
        void this.waitUntil(this.cachePut(input, responseClone));
        return response;
    }
    /**
     * Matches a request from the cache (and invokes any applicable plugin
     * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
     * defined on the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cachedResponseWillByUsed()
     *
     * @param {Request|string} key The Request or URL to use as the cache key.
     * @return {Promise<Response|undefined>} A matching response, if found.
     */
    async cacheMatch(key) {
        const request = toRequest(key);
        let cachedResponse;
        const { cacheName, matchOptions } = this._strategy;
        const effectiveRequest = await this.getCacheKey(request, 'read');
        const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
        cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
        if (true) {
            if (cachedResponse) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Found a cached response in '${cacheName}'.`);
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`No cached response found in '${cacheName}'.`);
            }
        }
        for (const callback of this.iterateCallbacks('cachedResponseWillBeUsed')) {
            cachedResponse =
                (await callback({
                    cacheName,
                    matchOptions,
                    cachedResponse,
                    request: effectiveRequest,
                    event: this.event,
                })) || undefined;
        }
        return cachedResponse;
    }
    /**
     * Puts a request/response pair in the cache (and invokes any applicable
     * plugin callback methods) using the `cacheName` and `plugins` defined on
     * the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cacheWillUpdate()
     * - cacheDidUpdate()
     *
     * @param {Request|string} key The request or URL to use as the cache key.
     * @param {Response} response The response to cache.
     * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
     * not be cached, and `true` otherwise.
     */
    async cachePut(key, response) {
        const request = toRequest(key);
        // Run in the next task to avoid blocking other cache reads.
        // https://github.com/w3c/ServiceWorker/issues/1397
        await (0,workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__.timeout)(0);
        const effectiveRequest = await this.getCacheKey(request, 'write');
        if (true) {
            if (effectiveRequest.method && effectiveRequest.method !== 'GET') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('attempt-to-cache-non-get-request', {
                    url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
                    method: effectiveRequest.method,
                });
            }
            // See https://github.com/GoogleChrome/workbox/issues/2818
            const vary = response.headers.get('Vary');
            if (vary) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)} ` +
                    `has a 'Vary: ${vary}' header. ` +
                    `Consider setting the {ignoreVary: true} option on your strategy ` +
                    `to ensure cache matching and deletion works as expected.`);
            }
        }
        if (!response) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.error(`Cannot cache non-existent response for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}'.`);
            }
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('cache-put-with-no-response', {
                url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
            });
        }
        const responseToCache = await this._ensureResponseSafeToCache(response);
        if (!responseToCache) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Response '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}' ` +
                    `will not be cached.`, responseToCache);
            }
            return false;
        }
        const { cacheName, matchOptions } = this._strategy;
        const cache = await self.caches.open(cacheName);
        const hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');
        const oldResponse = hasCacheUpdateCallback
            ? await (0,workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__.cacheMatchIgnoreParams)(
            // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
            // feature. Consider into ways to only add this behavior if using
            // precaching.
            cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions)
            : null;
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Updating the '${cacheName}' cache with a new Response ` +
                `for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}.`);
        }
        try {
            await cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);
        }
        catch (error) {
            if (error instanceof Error) {
                // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
                if (error.name === 'QuotaExceededError') {
                    await (0,workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__.executeQuotaErrorCallbacks)();
                }
                throw error;
            }
        }
        for (const callback of this.iterateCallbacks('cacheDidUpdate')) {
            await callback({
                cacheName,
                oldResponse,
                newResponse: responseToCache.clone(),
                request: effectiveRequest,
                event: this.event,
            });
        }
        return true;
    }
    /**
     * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
     * executes any of those callbacks found in sequence. The final `Request`
     * object returned by the last plugin is treated as the cache key for cache
     * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
     * been registered, the passed request is returned unmodified
     *
     * @param {Request} request
     * @param {string} mode
     * @return {Promise<Request>}
     */
    async getCacheKey(request, mode) {
        const key = `${request.url} | ${mode}`;
        if (!this._cacheKeys[key]) {
            let effectiveRequest = request;
            for (const callback of this.iterateCallbacks('cacheKeyWillBeUsed')) {
                effectiveRequest = toRequest(await callback({
                    mode,
                    request: effectiveRequest,
                    event: this.event,
                    // params has a type any can't change right now.
                    params: this.params, // eslint-disable-line
                }));
            }
            this._cacheKeys[key] = effectiveRequest;
        }
        return this._cacheKeys[key];
    }
    /**
     * Returns true if the strategy has at least one plugin with the given
     * callback.
     *
     * @param {string} name The name of the callback to check for.
     * @return {boolean}
     */
    hasCallback(name) {
        for (const plugin of this._strategy.plugins) {
            if (name in plugin) {
                return true;
            }
        }
        return false;
    }
    /**
     * Runs all plugin callbacks matching the given name, in order, passing the
     * given param object (merged ith the current plugin state) as the only
     * argument.
     *
     * Note: since this method runs all plugins, it's not suitable for cases
     * where the return value of a callback needs to be applied prior to calling
     * the next callback. See
     * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
     * below for how to handle that case.
     *
     * @param {string} name The name of the callback to run within each plugin.
     * @param {Object} param The object to pass as the first (and only) param
     *     when executing each callback. This object will be merged with the
     *     current plugin state prior to callback execution.
     */
    async runCallbacks(name, param) {
        for (const callback of this.iterateCallbacks(name)) {
            // TODO(philipwalton): not sure why `any` is needed. It seems like
            // this should work with `as WorkboxPluginCallbackParam[C]`.
            await callback(param);
        }
    }
    /**
     * Accepts a callback and returns an iterable of matching plugin callbacks,
     * where each callback is wrapped with the current handler state (i.e. when
     * you call each callback, whatever object parameter you pass it will
     * be merged with the plugin's current state).
     *
     * @param {string} name The name fo the callback to run
     * @return {Array<Function>}
     */
    *iterateCallbacks(name) {
        for (const plugin of this._strategy.plugins) {
            if (typeof plugin[name] === 'function') {
                const state = this._pluginStateMap.get(plugin);
                const statefulCallback = (param) => {
                    const statefulParam = Object.assign(Object.assign({}, param), { state });
                    // TODO(philipwalton): not sure why `any` is needed. It seems like
                    // this should work with `as WorkboxPluginCallbackParam[C]`.
                    return plugin[name](statefulParam);
                };
                yield statefulCallback;
            }
        }
    }
    /**
     * Adds a promise to the
     * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
     * of the event event associated with the request being handled (usually a
     * `FetchEvent`).
     *
     * Note: you can await
     * {@link workbox-strategies.StrategyHandler~doneWaiting}
     * to know when all added promises have settled.
     *
     * @param {Promise} promise A promise to add to the extend lifetime promises
     *     of the event that triggered the request.
     */
    waitUntil(promise) {
        this._extendLifetimePromises.push(promise);
        return promise;
    }
    /**
     * Returns a promise that resolves once all promises passed to
     * {@link workbox-strategies.StrategyHandler~waitUntil}
     * have settled.
     *
     * Note: any work done after `doneWaiting()` settles should be manually
     * passed to an event's `waitUntil()` method (not this handler's
     * `waitUntil()` method), otherwise the service worker thread my be killed
     * prior to your work completing.
     */
    async doneWaiting() {
        let promise;
        while ((promise = this._extendLifetimePromises.shift())) {
            await promise;
        }
    }
    /**
     * Stops running the strategy and immediately resolves any pending
     * `waitUntil()` promises.
     */
    destroy() {
        this._handlerDeferred.resolve(null);
    }
    /**
     * This method will call cacheWillUpdate on the available plugins (or use
     * status === 200) to determine if the Response is safe and valid to cache.
     *
     * @param {Request} options.request
     * @param {Response} options.response
     * @return {Promise<Response|undefined>}
     *
     * @private
     */
    async _ensureResponseSafeToCache(response) {
        let responseToCache = response;
        let pluginsUsed = false;
        for (const callback of this.iterateCallbacks('cacheWillUpdate')) {
            responseToCache =
                (await callback({
                    request: this.request,
                    response: responseToCache,
                    event: this.event,
                })) || undefined;
            pluginsUsed = true;
            if (!responseToCache) {
                break;
            }
        }
        if (!pluginsUsed) {
            if (responseToCache && responseToCache.status !== 200) {
                responseToCache = undefined;
            }
            if (true) {
                if (responseToCache) {
                    if (responseToCache.status !== 200) {
                        if (responseToCache.status === 0) {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.warn(`The response for '${this.request.url}' ` +
                                `is an opaque response. The caching strategy that you're ` +
                                `using will not cache opaque responses by default.`);
                        }
                        else {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for '${this.request.url}' ` +
                                `returned a status code of '${response.status}' and won't ` +
                                `be cached as a result.`);
                        }
                    }
                }
            }
        }
        return responseToCache;
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-strategies/_version.js ***!
  \*****************************************************/
/***/ (() => {


// @ts-ignore
try {
    self['workbox:strategies:6.5.3'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-precaching/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/workbox-precaching/index.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController),
/* harmony export */   "PrecacheFallbackPlugin": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheFallbackPlugin),
/* harmony export */   "PrecacheRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheRoute),
/* harmony export */   "PrecacheStrategy": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheStrategy),
/* harmony export */   "addPlugins": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins),
/* harmony export */   "addRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.addRoute),
/* harmony export */   "cleanupOutdatedCaches": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.cleanupOutdatedCaches),
/* harmony export */   "createHandlerBoundToURL": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.createHandlerBoundToURL),
/* harmony export */   "getCacheKeyForURL": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.getCacheKeyForURL),
/* harmony export */   "matchPrecache": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.matchPrecache),
/* harmony export */   "precache": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precache),
/* harmony export */   "precacheAndRoute": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_0__.precacheAndRoute)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-precaching/index.js");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************************************!*\
  !*** ./node_modules/@docusaurus/plugin-pwa/lib/sw.js ***!
  \*******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-precaching */ "./node_modules/workbox-precaching/index.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable no-restricted-globals */

function parseSwParams() {
    const params = JSON.parse(new URLSearchParams(self.location.search).get('params'));
    if (params.debug) {
        console.log('[Docusaurus-PWA][SW]: Service Worker params:', params);
    }
    return params;
}
// Doc advises against dynamic imports in SW
// https://developers.google.com/web/tools/workbox/guides/using-bundlers#code_splitting_and_dynamic_imports
// https://twitter.com/sebastienlorber/status/1280155204575518720
// but looks it's working fine as it's inlined by webpack, need to double check
async function runSWCustomCode(params) {
    if (false) {}
}
/**
 * Gets different possible variations for a request URL. Similar to
 * https://git.io/JvixK
 */
function getPossibleURLs(url) {
    const urlObject = new URL(url, self.location.href);
    if (urlObject.origin !== self.location.origin) {
        return [];
    }
    // Ignore search params and hash
    urlObject.search = '';
    urlObject.hash = '';
    return [
        // /blog.html
        urlObject.href,
        // /blog/ => /blog/index.html
        // /blog => /blog/index.html
        `${urlObject.href}${urlObject.pathname.endsWith('/') ? '' : '/'}index.html`,
    ];
}
(async () => {
    const params = parseSwParams();
    // eslint-disable-next-line no-underscore-dangle
    const precacheManifest = [{"revision":"a201c5156373b4b6aece5bd4e36a6e46","url":"404.html"},{"revision":"7fb939314e9e6dd411ac45f12256bcb0","url":"assets/css/styles.4a641c88.css"},{"revision":"13d605378e1e959b07427aab6f5e367c","url":"assets/js/00172073.5b50c049.js"},{"revision":"9189860244aec1022dedf71e8da44e0b","url":"assets/js/00284346.0b317fb4.js"},{"revision":"96e2cf8c0824806a59ccdc74e126c9d4","url":"assets/js/0086b219.974de917.js"},{"revision":"6c44f25a300923823d4057e25a274b77","url":"assets/js/01a85c17.23f92537.js"},{"revision":"cac15c653418afc6bc3d2a9271924ccc","url":"assets/js/025d59ef.ab8863f6.js"},{"revision":"66ed84558e458862aae56e9eae9819f8","url":"assets/js/02733c6c.729042a2.js"},{"revision":"a010e4f7314fac6851c8c31f3aab1f36","url":"assets/js/027fc398.b912c27e.js"},{"revision":"94667248286d75e888cb99beffbce4b9","url":"assets/js/039dd2c7.ae993311.js"},{"revision":"17b1eddaa2a2af145b77388086ab7f81","url":"assets/js/03c710bc.5b4dd404.js"},{"revision":"9b9c72f435e26ca363d1a188b84a7a4e","url":"assets/js/03f7bd17.8d6edc6a.js"},{"revision":"aeaca941984705116fdbbb78dfa10aed","url":"assets/js/046488a7.bc401aac.js"},{"revision":"5e4f8e97507c8aa6d4626d765bf7738f","url":"assets/js/053ae94d.dc47e787.js"},{"revision":"b59a0bc7eb11df09ad8cbca18d3385b5","url":"assets/js/06790a8b.56c79ed7.js"},{"revision":"8470a84f384fab239f7b5eae22df7d1a","url":"assets/js/06e3d6d2.f147c044.js"},{"revision":"4a693a8f4c927402986516f3e1ae124b","url":"assets/js/0745e1ff.ec2427fc.js"},{"revision":"3fa82bffe95d635f4ba4c39ff9a3375d","url":"assets/js/085e67ff.84d4a741.js"},{"revision":"058fb4150c70804415731140d0947913","url":"assets/js/0869cb23.8643197d.js"},{"revision":"8bf7d852439773e17929bbec4d4d064f","url":"assets/js/08c64aeb.b0aad24e.js"},{"revision":"243f97a3402a226b694fd6877162b412","url":"assets/js/098573c7.eab65b76.js"},{"revision":"b25510b420036fa553f6c6d0e295c146","url":"assets/js/09bfb330.c8f1721f.js"},{"revision":"47bdca1602344ee434870f4143546dbe","url":"assets/js/0aaba0d8.40266f9b.js"},{"revision":"636017f58070aed455c67099049d81f4","url":"assets/js/0bbe4718.d953fc29.js"},{"revision":"6e373b140eb19381939eeb85eeec3c79","url":"assets/js/0c5ba318.1c081c74.js"},{"revision":"eb6f7c37a04d7f472b84f7a2a1ffc108","url":"assets/js/0c73ef7e.54cf8172.js"},{"revision":"7507890761792adb9c9c7d9dce469e7b","url":"assets/js/0cbf5789.c3d4a47f.js"},{"revision":"8cda66ef4b06db05f5f6af156d8db6d7","url":"assets/js/0db6b6f3.a7d9154a.js"},{"revision":"cdfa7c9eed03c31cfab53dc82a58511f","url":"assets/js/0dd2f718.a735292a.js"},{"revision":"560b2de3807287cb787207301f848d0c","url":"assets/js/0e500ae3.e9ffd5af.js"},{"revision":"ccfeed5fa2107871266d250b64d3acd4","url":"assets/js/0eb05062.083bd0ba.js"},{"revision":"bfaef845854f5be4dd3894761022bbe4","url":"assets/js/0ef49e63.778246b2.js"},{"revision":"f9b062dae14cba08fc2ceb5ffeeaeac8","url":"assets/js/0fb30267.ad7dc7c0.js"},{"revision":"e534eca01e2db37c0b51b3d3255f7979","url":"assets/js/0fc9e51b.d648970a.js"},{"revision":"ac749490c22a046799a595f3f77058d8","url":"assets/js/10230.c21d1ee7.js"},{"revision":"d289b35e21c677f146fb5f9d08c6c215","url":"assets/js/10b6779e.d6faa34d.js"},{"revision":"a2a60a6224c4a1bda9b93b0648911f38","url":"assets/js/10f60a05.5dbf05bd.js"},{"revision":"1e1e835d958341c622b424384ef0e2df","url":"assets/js/11ce4159.fb178331.js"},{"revision":"fafa7abea46a331acc8eb04872467d2e","url":"assets/js/13b7bfa6.98c39e65.js"},{"revision":"3d05cbf1404698617208df4862d1e151","url":"assets/js/13d86c27.9b83547e.js"},{"revision":"eb35850cc519844bbe77f8afc7bd1ec5","url":"assets/js/13e6ac9a.2346b9a4.js"},{"revision":"db417f551568f4f66c19a25ce0c08fed","url":"assets/js/14eaf3dd.5394dc9a.js"},{"revision":"c63e5e1a7c663d8fc6f3c0d2f801c602","url":"assets/js/1534a0cc.af6763be.js"},{"revision":"e386dc1d198c79eb4b1beb4165051bc6","url":"assets/js/15525.9198fc49.js"},{"revision":"d1783aea064b2063d515f9d657adf306","url":"assets/js/1631d2dc.a69d0324.js"},{"revision":"a6c0761de156eca57df178a31ee2bb48","url":"assets/js/16e8c96b.c91ed2a9.js"},{"revision":"5b7f143f6f8a459a664c0f6ff65cbbfc","url":"assets/js/17896441.e53c1d82.js"},{"revision":"b140f51d7fcd068e4966a99826446120","url":"assets/js/17a04ce2.0613df81.js"},{"revision":"9bc36e5fc4ca9aa7ebd44161376c0ac6","url":"assets/js/17d28164.9a31b5b4.js"},{"revision":"ea48c2fc860d258676b827e4f7f229d3","url":"assets/js/18d47402.94561e0f.js"},{"revision":"347aa3cb9db9b44480c1bb00f81ae853","url":"assets/js/19521.55dc04f5.js"},{"revision":"61473a8a27be06ddcbbd97238a960b3d","url":"assets/js/19c7bc7e.4bc1434a.js"},{"revision":"6dfc3f493719ce3a1d89264619a38266","url":"assets/js/19dba3dd.3e09ba0e.js"},{"revision":"e38be6854d5c194222f6c5167e93385b","url":"assets/js/1a0e7ada.d540fc93.js"},{"revision":"0271b329d11b67cc3f88a7979f424986","url":"assets/js/1a4e3797.5f88350e.js"},{"revision":"9540b57acc4f5c488748d096e3c0f974","url":"assets/js/1ae8e3d5.47168f8d.js"},{"revision":"1eaabaaed80d1a3d67a3d239883b2365","url":"assets/js/1be78505.bfed482b.js"},{"revision":"d31eaddb38cb1dcb424b966d0787588b","url":"assets/js/1c7d93d5.9dd23391.js"},{"revision":"c1ad0faa1c590ede8535c72e6f1f15df","url":"assets/js/1cfb3d52.2d1d9dd7.js"},{"revision":"44ba62b67ac5c8f5d48ffaa50c889193","url":"assets/js/1d88e44d.0805eff7.js"},{"revision":"826ad315aafc6aac745e1089a030666f","url":"assets/js/1da34892.b7b56b0a.js"},{"revision":"5226fcf8e6a09b8ed289745915c793a4","url":"assets/js/1df93b7f.fbe3f4a9.js"},{"revision":"e1183d30f7ca963aed56d424483912d9","url":"assets/js/1e1076f2.31b83e4a.js"},{"revision":"145668609a65c7f03e3a9be9e83fa285","url":"assets/js/1ecc37b4.25448991.js"},{"revision":"8bd80ac19f0e74ce307b2c1202e6f3fb","url":"assets/js/1f4ab3e5.24be355b.js"},{"revision":"dbffc3595581884a22c88fdb56255788","url":"assets/js/1f6fefb1.87fed345.js"},{"revision":"d812e724bd0f8076160c00746dbba8cc","url":"assets/js/1fd3b633.15ad65ba.js"},{"revision":"0c6fd428615302858dace07ed01f9a4b","url":"assets/js/2010ae57.64febcc0.js"},{"revision":"c820c8d8eec27c24b445ddf98bba78d2","url":"assets/js/2047aa8f.3c5d842d.js"},{"revision":"bf75504f9f4b38e7a11b29a4f814871a","url":"assets/js/20af6d28.d873f484.js"},{"revision":"8009991f17f884b6c076c78749c8ba93","url":"assets/js/213757cf.34637cef.js"},{"revision":"cab6a2d856a2f34986f70162cfeed277","url":"assets/js/21821312.08ccc646.js"},{"revision":"ad57cccc131108abc66aaf56d9ec04b2","url":"assets/js/218e6c44.26c344b8.js"},{"revision":"72eb68ff0771f3b403df854a36c0bdea","url":"assets/js/2226f3e7.15d3fe3e.js"},{"revision":"2c3099ef5613ce15782ded64dd93b015","url":"assets/js/22df419e.950d45bb.js"},{"revision":"241193ac3a56f53270630d03649dbd5b","url":"assets/js/235910b8.8d558663.js"},{"revision":"9d899b0fda1ef0b5b0c9d9fa053c14bd","url":"assets/js/241f2452.8fb4dfa5.js"},{"revision":"30c3e7b0ac5b7d5d05e29b8d2cf6ea04","url":"assets/js/242b04c1.f2740601.js"},{"revision":"5dd68df54c6d2501cc8c0c6ee03c7218","url":"assets/js/252f9594.d51dde55.js"},{"revision":"578e2ac37a7e0e62dfff5725ca196e5b","url":"assets/js/25d525fe.dbe04704.js"},{"revision":"92e68c7a8a93c50e6140d3b8b05e6708","url":"assets/js/2676f3dc.6624a19d.js"},{"revision":"f190ec1c5f9215bba98a351ebcabff26","url":"assets/js/27432403.ecf6a900.js"},{"revision":"abd3d8e229770375d8a5d296a0d71ee4","url":"assets/js/2803e6ad.864c0f23.js"},{"revision":"e31c438d92ef6fa46e395ce242a74415","url":"assets/js/29ff3bf2.5741b395.js"},{"revision":"899be1cd09ffb5653c53ed3c5cee4c43","url":"assets/js/2b09ff95.216bca9f.js"},{"revision":"290f9b6fbb33e9aaa682b140ec26689b","url":"assets/js/2c1c3924.9b59e6fe.js"},{"revision":"2ac4fa92ffdd6b9d939c57145a649089","url":"assets/js/2c8d0f78.f4d9bdb5.js"},{"revision":"65b4d6ce9ecabf5cd1601b61454af801","url":"assets/js/2cabe19e.e8c7ef4f.js"},{"revision":"af30e2760000266a6d5de1278b1e3e1c","url":"assets/js/2dcc784b.17acbcd3.js"},{"revision":"2aac0fad69e992ef9955b9ba6fcde8ea","url":"assets/js/2e1ea7b0.1d56f099.js"},{"revision":"f344a4937ec88c08d204e4ed365db1d6","url":"assets/js/2e563dd5.f07aa6bc.js"},{"revision":"dcce342fae168a14cfa64a5b3b6efb6d","url":"assets/js/2e638813.d5de242e.js"},{"revision":"4e6fc61f9a532e9105bac4721bce9ad7","url":"assets/js/2e6c79b8.3cffec10.js"},{"revision":"ec2c78019b1c6ef4e10a3c2fcf506072","url":"assets/js/2e854b47.25a7fc92.js"},{"revision":"3b0dfcaed0749bde67651df8e14c2f3a","url":"assets/js/2ee1fd6d.f1e2e078.js"},{"revision":"b54e6f9f483d368647b25f7de3bba9b7","url":"assets/js/2f2b5bf0.0a589391.js"},{"revision":"5256b7015236a63053c396c7fd06b870","url":"assets/js/2f8ded00.1d128b1c.js"},{"revision":"51d44d29dad7132c31c5b35797fc417e","url":"assets/js/30379573.0ef347cb.js"},{"revision":"9a582d1cdb5fa099567883483ffc25dd","url":"assets/js/30536337.1a52ec53.js"},{"revision":"73582974212a959edad2d1fd5f2bcaff","url":"assets/js/30a24c52.9eacafea.js"},{"revision":"9b7f1553a9997e9185ccd1df6fd64e9b","url":"assets/js/3103b090.592ae986.js"},{"revision":"633aee681e1496c9fe2af09ba064cfd7","url":"assets/js/32dcba7f.6ef67365.js"},{"revision":"e6bfac18cbacf05bcd7c61ffca72f849","url":"assets/js/332b2d62.36d3f202.js"},{"revision":"49948d28c2dce79937872255d5476cd1","url":"assets/js/337c5016.e3340742.js"},{"revision":"dc05c981ad8d24962825bdfd0ffbb825","url":"assets/js/34ebd12d.1b49ee77.js"},{"revision":"5daf897ca350d0872025d1e4a8f23b81","url":"assets/js/355c046e.01613ef6.js"},{"revision":"478d1fb89a0b20d0a189b1e30fd6c2be","url":"assets/js/35acce06.811fa25f.js"},{"revision":"c5810396cf21ad43e44bccd8caf2aa71","url":"assets/js/362355b9.dea013b0.js"},{"revision":"265fa3bd96537500d3fe38497fd36fae","url":"assets/js/36282669.9625c306.js"},{"revision":"4156a03af303cb705da37a7fcb25030c","url":"assets/js/366dbc8e.b9444a87.js"},{"revision":"15d16fe40273ed043a65bf17e30892dd","url":"assets/js/3699f425.8b807dd2.js"},{"revision":"a068d09a55605126696ff5aeaa53dc3f","url":"assets/js/37221273.9999c1b9.js"},{"revision":"7ffb8eb3794af8094a50fdd28fff4224","url":"assets/js/38358a3d.20c4261b.js"},{"revision":"44100f0931b0ae0505a808c450cee32f","url":"assets/js/388b0277.450d6207.js"},{"revision":"939c6cb9edc0a33056dca5a179704dc3","url":"assets/js/3907004f.c1abaefd.js"},{"revision":"7cada4021d1f4fd737274b3b17802f36","url":"assets/js/39567e86.23d93b5b.js"},{"revision":"cedda2db5ec1438b962316e8d70e1d93","url":"assets/js/3ae833cb.e4fe0e4e.js"},{"revision":"01ab9b059cf0b07574ef8b03d4a62d34","url":"assets/js/3b56b0f8.7b276b07.js"},{"revision":"f397273bc17fa2d6105056e71bf321c7","url":"assets/js/3b6b0245.7c3b6266.js"},{"revision":"0efc62d775a80d21576379b27abecda1","url":"assets/js/3c0faf67.3891c35b.js"},{"revision":"7a7335880e464c47311330e5a4d41ed7","url":"assets/js/3d586560.4bcee87f.js"},{"revision":"a0feaf82fafc55e70eedd4b0db8b65cc","url":"assets/js/3dd774a7.9dc0d2f2.js"},{"revision":"58bc1e59e64212cdda20a12f31a1a734","url":"assets/js/3eebcea2.e9101e9e.js"},{"revision":"a0de77c43b790359fd921cafac80aa9f","url":"assets/js/3fe44cac.7cdf1803.js"},{"revision":"21e6e9eee71f15f058082ae5800a2efa","url":"assets/js/4167803b.aa67b970.js"},{"revision":"f7ce324c031b11886696e705bfb71207","url":"assets/js/41f86a93.feaeee99.js"},{"revision":"45e0fb31a92fa015bb992a1f2f4f4bf0","url":"assets/js/42b3dcd1.d5339053.js"},{"revision":"b562b17860f92433bac0ea46e87e08bb","url":"assets/js/43096ccf.60bf9e56.js"},{"revision":"04bc874f8d0ae549ee67cc99ae4bef00","url":"assets/js/44823fa9.c49ba59b.js"},{"revision":"cb53817ccdace0ad3f749142dd24e7ff","url":"assets/js/44ac4dbb.ca19c017.js"},{"revision":"3246673ee6ae39334bd9fff1f4bc2eab","url":"assets/js/454b0f72.5bc7eeb6.js"},{"revision":"dcb4c5d7f6e781cf3b33905274d14f5e","url":"assets/js/46048.4c592722.js"},{"revision":"5916445a3acd2c937034b90fee6067f8","url":"assets/js/46dc0b0e.e0c12c3a.js"},{"revision":"6679c6d6effffa7b4fcb33ec788bda53","url":"assets/js/4794f43e.0e3a3c6e.js"},{"revision":"5d3a2d6dee75d136e322f33a6b0ff989","url":"assets/js/47a6c6ab.73eba94b.js"},{"revision":"cd1a7abe0bd4039f3fe84a37b5c577fd","url":"assets/js/485a8cc8.1dc08428.js"},{"revision":"c75b82e0e81db44b3b655be02fb69065","url":"assets/js/4880b420.2c5aa654.js"},{"revision":"b0b829e6690dba62df0a105647e89229","url":"assets/js/4972.bc8f3bf4.js"},{"revision":"dd312bacc7fa909c55369b42cab269ed","url":"assets/js/497e9810.089a38b3.js"},{"revision":"48b495372f113314899b56dd31e226cb","url":"assets/js/4a066ba4.ebecb208.js"},{"revision":"d19697c2bef488ab6b69aa591e5e2697","url":"assets/js/4a765ec0.0aaf4820.js"},{"revision":"f496b9b7095b1e06910ad967a8eabee5","url":"assets/js/4ae7c48b.c4d24aa4.js"},{"revision":"3e39682c5d62c5007e2e0691b8b9428e","url":"assets/js/4ba0dd52.62be7254.js"},{"revision":"ef4d168c5a92289a74927226168e3de0","url":"assets/js/4c9feb10.65df9adb.js"},{"revision":"140f914c6ee777c926b3c15f31d339a9","url":"assets/js/4cede956.f8b6a214.js"},{"revision":"edd78c7d03e8d53595fe6dc68332a27d","url":"assets/js/4d6e2ffd.f9744eea.js"},{"revision":"36b957f3dad222fafd692ae8d1bd0538","url":"assets/js/4da77be0.980ddc26.js"},{"revision":"540cb9af77a211cb1093b83c38350e59","url":"assets/js/4e22dfac.410b316a.js"},{"revision":"27080abb6ca379e24b752493ab965de6","url":"assets/js/4e22fe1b.d76cd534.js"},{"revision":"4fb0c8b5b188744fb95c62620f2d667a","url":"assets/js/4e241610.286299fd.js"},{"revision":"fa7554e5774879cd17d9a84a18de7418","url":"assets/js/4e7859bf.f0e2bb30.js"},{"revision":"047a0a51343af59e28569438ddeffe54","url":"assets/js/4f8ef998.15e40892.js"},{"revision":"ff3f54b4c9ea842b7986dd1c5f55820a","url":"assets/js/4fd5a9e1.d9e8c26f.js"},{"revision":"298b4b00d01760fdd0ea1f176f45eae7","url":"assets/js/503aa524.3737608d.js"},{"revision":"872f4165672e3906e92ad317871260c6","url":"assets/js/50796e2a.9de18246.js"},{"revision":"31aeb3df31a890300d636a4942525fdc","url":"assets/js/508a85c9.fc422cdf.js"},{"revision":"b4771c9959a54bb2618738d0d7c8d4f4","url":"assets/js/50ccd330.6140c6b1.js"},{"revision":"e51fbb8694a698221cd33873725aa6d0","url":"assets/js/51a82071.f22f17fa.js"},{"revision":"d8d5360039aa09a224da6003b898bf5c","url":"assets/js/51bd407e.2e24742a.js"},{"revision":"dc012bec5433f456a5ffc23830c17614","url":"assets/js/52099127.796885c4.js"},{"revision":"547eafc45ac5f61cce6cd850ecb7941a","url":"assets/js/52540353.cb460594.js"},{"revision":"e9b97bc58e28d9d7a39fc6b8e0a4cee1","url":"assets/js/539e0d19.1fc1500e.js"},{"revision":"c80778307248835d72123aa463f57603","url":"assets/js/54638a79.c3add02d.js"},{"revision":"282518469e9fe15803e0aee5baf1cfeb","url":"assets/js/551083d7.dba93006.js"},{"revision":"11b2e9ce8aa08995a610fa34046ad621","url":"assets/js/55d82cdd.23651078.js"},{"revision":"af1adf25b3c4dccc7a59736c6de97c69","url":"assets/js/56594b00.559a587d.js"},{"revision":"692cfcab735a7ade7c9399daaaa7f44c","url":"assets/js/56fdbdca.db658336.js"},{"revision":"5190044f37079a2e836c57c825f9f481","url":"assets/js/57c19187.944da1f3.js"},{"revision":"f7504b3229af833b3aa706e9937ae9a2","url":"assets/js/589235c8.34848ec7.js"},{"revision":"9fd8ba8bc763149bf35efcadf1a43ef7","url":"assets/js/595442a6.a521273e.js"},{"revision":"87b347c756b19efbd88fb3ee8299ea61","url":"assets/js/5a1e12ae.db0fea5d.js"},{"revision":"3ce45b2644e291788e8e1129ceeef5e5","url":"assets/js/5b3cd593.57dc6ddc.js"},{"revision":"a20d3ca49cf623051af0ee7f6ee1fae9","url":"assets/js/5c4b22df.d5e24139.js"},{"revision":"123ae4053a5d2a68fe948d0fa27a9b22","url":"assets/js/5c5f0a59.926f2f51.js"},{"revision":"821113fb201ef77fbafad2c733981ed6","url":"assets/js/5ce4fa04.1dbb21b0.js"},{"revision":"d30b89f0c2b5647a0d4fc3bf73f0da67","url":"assets/js/5e68bd56.6fee1e6d.js"},{"revision":"f4ed87ae0df20cc239732948ffebe2d0","url":"assets/js/5e855279.69ee22c2.js"},{"revision":"6fda7df4d21430b3c272b444e4648270","url":"assets/js/5e8c322a.e071c90f.js"},{"revision":"8b3b2c7f44da3303ef050f18b9a6b062","url":"assets/js/5f2f9698.46fb33da.js"},{"revision":"de674b672f011233f7418d6e9be352cb","url":"assets/js/5f3af9ad.3376fd83.js"},{"revision":"3bbbb61521cc365588c3d7163d4b18e0","url":"assets/js/5fa57016.321ae9ac.js"},{"revision":"e1de5ed56dcfab018c6d45c8d55fbfb4","url":"assets/js/5fed7236.a767f4f2.js"},{"revision":"f41f9fdfc219e626b0384e9aab3af654","url":"assets/js/604b4414.92619ea6.js"},{"revision":"d57b8320243fb57511b48c6ef3e2fb20","url":"assets/js/6050a84c.7be449e9.js"},{"revision":"7ee2d02f1b82b82860b645dd415911e3","url":"assets/js/608ae6a4.12bb01e8.js"},{"revision":"7effcf1393d539118195b2572ba422b5","url":"assets/js/60f53af6.40645fa2.js"},{"revision":"54154175a4647b1914fbc70e215739f9","url":"assets/js/610834a4.8bd3ccd2.js"},{"revision":"aa9910a7ef043da0ac7f583a7da08e93","url":"assets/js/614c0c6a.dc453809.js"},{"revision":"b8b15a5767ba4946fad86338f2641259","url":"assets/js/6178ffef.f273c8c8.js"},{"revision":"f4e5cad38f046e11841a067a4681bb7a","url":"assets/js/629f5098.78cad3e0.js"},{"revision":"97c1bc71aec0ae354750be47fe32a4ab","url":"assets/js/63c9ca0e.fba2d07f.js"},{"revision":"4ffca24bd5b3ea8b4fd99e1824055a23","url":"assets/js/6427fb77.66335a28.js"},{"revision":"bfe808c4f8dca8e2f6fca0d0aa1572a4","url":"assets/js/65007785.1182f87f.js"},{"revision":"feb175e8dd75a5747d8ff750d9351b2d","url":"assets/js/6527ee76.623096a4.js"},{"revision":"22b840a99cbdb5f2af1688ec7d7bb026","url":"assets/js/65283.d7329e87.js"},{"revision":"7d7f2ec1bca6f4ff966ce904d91f3557","url":"assets/js/6593d481.f301a7bd.js"},{"revision":"2c62d44dc2a62dc02a999f674911ca08","url":"assets/js/65ac6523.7edaa689.js"},{"revision":"1e3a24c3fbc2acadee178af0cd65319a","url":"assets/js/65b87958.466cf3b2.js"},{"revision":"ae7a3e0b8cc80e6d0fc04eaeb7a10762","url":"assets/js/662a8d47.0776f75e.js"},{"revision":"a6d9f758698a935c60d05422e67655d9","url":"assets/js/662e2d81.f8619940.js"},{"revision":"30c23f20e75f5b42b1cdfd47a410d8d5","url":"assets/js/66406991.78b85963.js"},{"revision":"eefd1877075082f76837c98a524a10f8","url":"assets/js/68122b44.3b429f06.js"},{"revision":"de30687f2978a9f03f79d1603cfff268","url":"assets/js/68443.804097a3.js"},{"revision":"4fd867aa076f44552858dc56bfb45af9","url":"assets/js/6875c492.33e20915.js"},{"revision":"0194f0e6e5b9922639d3785f873680d2","url":"assets/js/6925ce22.0f365f40.js"},{"revision":"dce8602f655d785b32bd63065ce927b0","url":"assets/js/69b4bdac.2dfe57d3.js"},{"revision":"c39901112973fc22f0e14395922cdbff","url":"assets/js/69f94450.d05cf9f9.js"},{"revision":"c2080d54fa548615ab167e578a62eaeb","url":"assets/js/6bce7362.91c9ed21.js"},{"revision":"27c3a6997961f3993d807bbe386b9230","url":"assets/js/6c2f6126.ae0f30bd.js"},{"revision":"bdd5cda76c46f4e24f74992af0e6ef15","url":"assets/js/6c456125.09324714.js"},{"revision":"b119c068be2c698d59a116c4bdfdcfe1","url":"assets/js/6c601b0f.a3bf9c5d.js"},{"revision":"880e58611856ed091ed9ad7034173453","url":"assets/js/6ce81239.7f0a3a69.js"},{"revision":"38e0883b09e750297c573be18417398a","url":"assets/js/6d4f0d81.3f340745.js"},{"revision":"705417efad0c8b5c0b31f6ea30f8d726","url":"assets/js/6d61591a.c5d8bcd8.js"},{"revision":"b56fe8257b705ea48870bd638c104778","url":"assets/js/6e576eaf.4c0c759a.js"},{"revision":"efac2987ea9e5a8ee451d964d84cf427","url":"assets/js/6f033260.7b7960bc.js"},{"revision":"0dadde0c992ae7b169e10c99642373d2","url":"assets/js/6fe280a8.46ab3f85.js"},{"revision":"10a6efd463f0fefaeb7ee3ca4f778162","url":"assets/js/70061a6f.3c94e410.js"},{"revision":"1b8e4788a6398eee77a415e9ded8ff95","url":"assets/js/711731d9.59d653f0.js"},{"revision":"eddeff059bcb076175396d2bffca4164","url":"assets/js/7124f25c.a0c5d0d2.js"},{"revision":"1071729b9bdfffdb7e53ef1e5919e585","url":"assets/js/7201d838.36ceb74d.js"},{"revision":"934f7e4aca99065b16204ff15fc4c84b","url":"assets/js/72933df8.82ba116b.js"},{"revision":"483e9609e3ffb5050374f331151ea574","url":"assets/js/731e4fc5.4934a6cf.js"},{"revision":"404cccaa3e48c4e604b2dabb32665b52","url":"assets/js/73a22171.1cfe1e3d.js"},{"revision":"75e0e61776bf22606ec5d4655a520e52","url":"assets/js/73c2c7ac.6f15a586.js"},{"revision":"37fa3753ed0d22425e2387072672fa56","url":"assets/js/7496195e.d39f7ff6.js"},{"revision":"73701e39d06249b7b0f6a733ce3174c0","url":"assets/js/75131.4270b1de.js"},{"revision":"2cb28df4602f49c771778c7f9ff8af29","url":"assets/js/758422aa.5c666cb1.js"},{"revision":"79a160c39d77fd3e5baa22608970cf80","url":"assets/js/76189c01.6ce02eb3.js"},{"revision":"acdeafdf20b8845e7ddacbd1049cdc8d","url":"assets/js/772da8e0.229f0d06.js"},{"revision":"dc0b3e72bf2d78754664204803cda3d4","url":"assets/js/774d5825.317a5dea.js"},{"revision":"aaca23dc7560c4ebbec9444298206102","url":"assets/js/77bc0ffc.c1ae1b05.js"},{"revision":"fe3ba79291594007a82b7f0732ad97fb","url":"assets/js/77caf1fa.e41bfb80.js"},{"revision":"dc171ec2de84f339013181ebaf71f87b","url":"assets/js/780fcf45.af99c41b.js"},{"revision":"36236c4d9f050007bb061d4f8b642936","url":"assets/js/787015b9.de368d51.js"},{"revision":"782c39672ae66b347069d80101442ef7","url":"assets/js/791fdca8.dc56b739.js"},{"revision":"e827fd48cd5b876cc42e7a03781ce585","url":"assets/js/79be306d.66eeff1b.js"},{"revision":"77e5d5f4e24b70423d531cc508267186","url":"assets/js/7a190dbf.9ade45ae.js"},{"revision":"545e71a999f50e69fedd650c2feba9f3","url":"assets/js/7a98d89f.7537490d.js"},{"revision":"744a8dac4ebc075541b28eefbdbee9f9","url":"assets/js/7bc1b8cb.2bd0c280.js"},{"revision":"d097995949b4309b583f61e477a6f314","url":"assets/js/7bcf35fa.90d9832c.js"},{"revision":"8dc7115b444f3edb315ca92fd1f1c0c8","url":"assets/js/7c0f2c3f.dfc2d089.js"},{"revision":"167ce8a3e994e75511d49d03f39f214b","url":"assets/js/7c85fa60.48507040.js"},{"revision":"56a61a6b4bc54fa4b900985bbafaafce","url":"assets/js/7ca6b6be.e6c70942.js"},{"revision":"688e73d5cf7265730d9b114634d72d3e","url":"assets/js/7d149f5a.4f3596f6.js"},{"revision":"b12895c7731553e34fcf7f1a4eea4e2a","url":"assets/js/7d8d0d17.6e8ab097.js"},{"revision":"cceac0f04520348136d1909edacb93bd","url":"assets/js/7d9726a8.1801bcc0.js"},{"revision":"47684b685a33108ea5e2f1170b0ca73d","url":"assets/js/7d97355e.7bbf81c5.js"},{"revision":"2f1555ab236e092e8d5d82e5b879c080","url":"assets/js/7ddfed32.fdedc3b7.js"},{"revision":"dce261a9268e8cfe45a47f5881338db4","url":"assets/js/7e0e157d.142bf811.js"},{"revision":"f25891d4d0eb1daf58651aba4c672cad","url":"assets/js/7f9b9f83.8a12b4bc.js"},{"revision":"68aa31a9213faf41f06b560ebf43aebe","url":"assets/js/8006f921.fa252beb.js"},{"revision":"a214f4ea9daea460473ef16bd4945fe1","url":"assets/js/810038d8.c71e2c05.js"},{"revision":"a152bebd90c6c270723efcdf1d398f79","url":"assets/js/8120826e.4716f204.js"},{"revision":"850a7470b504eb1add7a12cb722cd30e","url":"assets/js/813c047f.25eafe10.js"},{"revision":"9a8c4dd089d121bbd95ed46d3f6851b0","url":"assets/js/814f3328.04e61407.js"},{"revision":"96345d1fb82ba552091fc1120b8fdef3","url":"assets/js/81832617.6ceb88f7.js"},{"revision":"1185978bcef79e9a647c3b3882d163dc","url":"assets/js/8289c30d.5a0e792a.js"},{"revision":"bef608f022d278d09b3534fdd04587c2","url":"assets/js/82a34934.2b69bac3.js"},{"revision":"ae1008420573007debf495a34da54074","url":"assets/js/82e80ffa.29b0ccdc.js"},{"revision":"a085470c7096acdbebc9fd60c8352e77","url":"assets/js/8329d12e.e9fa1008.js"},{"revision":"139450c73850423ff8af3b964d6b7d28","url":"assets/js/8332fdcb.a6120c1a.js"},{"revision":"45e26c9ab8cc6a8fa9862c911a427d92","url":"assets/js/83527.3054e6e9.js"},{"revision":"b20986aa9cf78a16f6b0532741419c6e","url":"assets/js/83d2b88b.4072715c.js"},{"revision":"13e714a561707ba9f5a8ff39d36e087e","url":"assets/js/84697ce9.76208015.js"},{"revision":"3e8167461200be318f9cf3c75db8589d","url":"assets/js/84bae1a0.f36e17ee.js"},{"revision":"47f57087ccfc4f98e6a1e06ab17617fb","url":"assets/js/84e6cea8.4f88977e.js"},{"revision":"cd2bff43d7b3b6b0f4649101751fbe27","url":"assets/js/856929f8.b01b4640.js"},{"revision":"1073e1c8c54fe29fe8effbd7071eadf3","url":"assets/js/8613e2de.bcabf7f6.js"},{"revision":"cc0af8dc9b277c96f909fc63dfc0bbeb","url":"assets/js/863c8d78.33c0897e.js"},{"revision":"ddd68fb778a877efc684e4760520792b","url":"assets/js/8677e416.534e8eed.js"},{"revision":"2d37a1504af1324985c2196d1325eb48","url":"assets/js/86c7bef2.da6e7559.js"},{"revision":"f1a5804310a0a1ad42ce3334d86d2aa7","url":"assets/js/86d0410b.752171bb.js"},{"revision":"a828364bc00332535cdc5897f09f210a","url":"assets/js/86d97ad6.ac1a29b6.js"},{"revision":"2ab557d70bcdb6b7e446f751799ee4cd","url":"assets/js/879a6b5d.7c1f8ff1.js"},{"revision":"453ffa42bce9d3a1883a6985f87b00f4","url":"assets/js/887bd5e0.d90d9ffb.js"},{"revision":"6ebe656afd904ebcf621b038d6232daa","url":"assets/js/88928.bc8e05d3.js"},{"revision":"1a58b299cba90796b961bd932a91f0fc","url":"assets/js/8943fa10.f0c68f32.js"},{"revision":"4fbd8caf4bee378acf9c36c92f9d1315","url":"assets/js/894ec14d.7ee50f0e.js"},{"revision":"802fd4852b047a91b02d115a167eb049","url":"assets/js/89e35390.30a69053.js"},{"revision":"ba6a792dcde3cb4e4409775ef461d572","url":"assets/js/8a3ff3cf.fe259f52.js"},{"revision":"2a47e96ec3c59aee71a309352ce28835","url":"assets/js/8a81c7c2.2981d51c.js"},{"revision":"c85a8a75f8d227921600e810ea78f55e","url":"assets/js/8baa0334.9ef23f88.js"},{"revision":"9f17a208b28ecbaa58b30bcbcb9351fa","url":"assets/js/8e823d8f.fec4af61.js"},{"revision":"42f2798605a9b866e4e20929d5fa4d71","url":"assets/js/8eb4e46b.75b393cd.js"},{"revision":"760324044871c371fca2dfd57694ed1d","url":"assets/js/8f5c6a11.21cc1702.js"},{"revision":"d25ea84756f6b84a3899f613e8fd69fa","url":"assets/js/8fcca456.3ba54955.js"},{"revision":"715acb31f6c4ff8add0d56f8b2d22d5d","url":"assets/js/8fe83f1f.6b9071b1.js"},{"revision":"c0970c7774ed9eef7600205fc9cbf8b5","url":"assets/js/9178d290.39b7c2ad.js"},{"revision":"beb317f574c80fc970c70692d1b12917","url":"assets/js/91bb3ae9.f1dc838b.js"},{"revision":"a2acd73345f876374450a834d2bd31c0","url":"assets/js/9268b7cd.aa0fc6c6.js"},{"revision":"952f5f7182d2c94b3baff040c24bb453","url":"assets/js/92999a1c.5cf02f22.js"},{"revision":"3e045fefae5fc9e95d30dcac05af67e0","url":"assets/js/9299c7b4.0be9e60d.js"},{"revision":"01751c991b5c33c16e08b81d8ff7915f","url":"assets/js/92b884ae.a9c84cf0.js"},{"revision":"68a1be29a7b02f2398f3ff678a310798","url":"assets/js/92fec0b3.0b4e9c3e.js"},{"revision":"e9173b66c344b183e6235d8e367b0a74","url":"assets/js/933aa149.062811dc.js"},{"revision":"a2125d577d1c03ef7a771d06c6949029","url":"assets/js/935f2afb.b855e171.js"},{"revision":"f8a83e07215e82ff36c36692178ff7c5","url":"assets/js/93bfdf5c.c2854166.js"},{"revision":"0a21fc9a80606733d3f7870713ae7e41","url":"assets/js/9477cb64.32701b2e.js"},{"revision":"297f585596d5615126d90880b8f35e0a","url":"assets/js/94a8cb5b.1717e62a.js"},{"revision":"66da1f93c07bf381946e9e017748d79b","url":"assets/js/94feb75b.9dda94d9.js"},{"revision":"24b8c52754a473c97b129f827e874bac","url":"assets/js/959bcd83.d15dab49.js"},{"revision":"fafae2761d8562be433c12e947779259","url":"assets/js/9609e992.239b222b.js"},{"revision":"072349ad4b124deebd9beb5bf28d777a","url":"assets/js/977306bf.d8f27e0b.js"},{"revision":"393d22dc1091cfc5b3e159b9d164154c","url":"assets/js/97bf9e5d.0cbeac5d.js"},{"revision":"1615cac02950069dcacebe6d77b96dbe","url":"assets/js/984d2cf8.cd23b59e.js"},{"revision":"53d59421af295264d86c6fcd78bbf6ba","url":"assets/js/98b657d8.bd9d69f4.js"},{"revision":"098051f4e2dbd526b9a3f49c1a9b0574","url":"assets/js/98eb4454.2508b7bd.js"},{"revision":"70e8bfb2cd50549a9c8d8e45bfdd2f3a","url":"assets/js/9ad67e14.0ed7ee76.js"},{"revision":"a81073b2920b51bc7684599047339f29","url":"assets/js/9bc0385d.37a2e852.js"},{"revision":"8f90716e00142ad29f36eaa638feada0","url":"assets/js/9bfeb2fa.87bc82a2.js"},{"revision":"9946f207860ee44b4ef6243cfd93c10b","url":"assets/js/9cacecbe.44bdcf62.js"},{"revision":"a7d0cb80915168f48d46713dd3f47447","url":"assets/js/9ce24bf0.4318d0ee.js"},{"revision":"b3b499ffd7edd9e27ce1e0ff532426c3","url":"assets/js/9d3357df.230f2bac.js"},{"revision":"fe79f157e5f2f2035f0e96ffe62dc431","url":"assets/js/9dc53d77.b12b04ee.js"},{"revision":"6fe1e475d38672d9e846dee3e3c6f76e","url":"assets/js/9e3989ae.38b807d2.js"},{"revision":"833edf48100a1108283de3d63950c581","url":"assets/js/9e4087bc.cddde1f2.js"},{"revision":"683214bbb9293b23b54ffd00fa898a3b","url":"assets/js/9e81bb00.b08aeaa7.js"},{"revision":"0fdeb644f0a7e5814ca13e09612e4760","url":"assets/js/9ee1e248.e8c7a1e1.js"},{"revision":"15bb41c18c593a1f54b4bdaa2c2e26a1","url":"assets/js/9f1744f9.2dfef000.js"},{"revision":"1af33045568cf733f482e1154d0b5b34","url":"assets/js/a07d50c9.f59167f2.js"},{"revision":"fc43e7764e192964e75b0d2c8baa0208","url":"assets/js/a0fc4bdd.ba72a413.js"},{"revision":"35ff1bf1efe17857656df95431a66b96","url":"assets/js/a121b08a.5bc824b2.js"},{"revision":"dc6df4794d6e27db0403ab8445600f33","url":"assets/js/a1b4e2ba.ff285140.js"},{"revision":"6ea8c87d8bf9eaacca718ac4b871e22e","url":"assets/js/a2466a13.8d17e0d8.js"},{"revision":"f87b4c88ecae5f146c477f894fd9db85","url":"assets/js/a33d27ff.7c41c126.js"},{"revision":"284a8dc35bb8377cb3b74c48fc045e56","url":"assets/js/a3d640fa.72b7bdfa.js"},{"revision":"0d2ed68d5c8be2cc3a4f38590a79b35b","url":"assets/js/a53e793b.e4b7d84f.js"},{"revision":"7b9c46f9d0f9aefc9030745f809dc34e","url":"assets/js/a68a231f.81a0fc17.js"},{"revision":"31de072698414be2a7d435771b929c3b","url":"assets/js/a6aa9e1f.d1d69bfa.js"},{"revision":"67995d4d818561b65ed120fd98234820","url":"assets/js/a6b73347.0b90b8a6.js"},{"revision":"1b4a2da1a17d9ea25de903b72e4e0ee3","url":"assets/js/a7023ddc.cbef2cc1.js"},{"revision":"aeabe764fd08a97ef3d7df2d2542afa7","url":"assets/js/a80da1cf.b8b9dc88.js"},{"revision":"299b8a53021ee93752196bd78fc50191","url":"assets/js/a85a7c6c.1569fa4a.js"},{"revision":"4e4769236096ee83899c81966fe5c681","url":"assets/js/a88a9220.8f77e4bf.js"},{"revision":"9b9a2e124f2f6feb93f1e605d70131fb","url":"assets/js/a9122d62.b1ad6ffc.js"},{"revision":"8b2eabd7081bf749a32625aef12e896e","url":"assets/js/a9124411.efaf582e.js"},{"revision":"dc57fdcc0c389ee2b9e8d9bc7a647a24","url":"assets/js/a9a41dcb.8ce6a6af.js"},{"revision":"2805cd4f8e2f59821d5ab8a8dfd52cc6","url":"assets/js/a9b32d86.1ff4f219.js"},{"revision":"020df5a930c57d9939f57a23a0ff7ff8","url":"assets/js/aa8cfd05.791979e4.js"},{"revision":"5e6e1bac61ab413da5dcd2d47b6b1b13","url":"assets/js/ab0797d9.6e59fa5b.js"},{"revision":"564d43bcea62b1278835a0a83e7d2233","url":"assets/js/ac28c0a5.7d2e3988.js"},{"revision":"b728351b6d88934ff3fa3eb45dc26a54","url":"assets/js/ac5aaebd.e9dc2696.js"},{"revision":"e2779772bd193f61dba71c86804ddc1a","url":"assets/js/ad738a0e.16a953b8.js"},{"revision":"579339efb8d4c31023b1a8f5cb094b48","url":"assets/js/ae6096b3.fc8ad37b.js"},{"revision":"d9a3dc30dcc1844cd39b5c65a030acfe","url":"assets/js/af40e190.16f47f32.js"},{"revision":"9607d6ed8ff0aa055ec0765eb0cc3304","url":"assets/js/af7203f2.04eb4610.js"},{"revision":"6ddeccce2e9d74e7ecfb69a1dfb075f3","url":"assets/js/af9ecc53.5efd2e50.js"},{"revision":"f87fe484cdbf8551d678dbd7c6f62319","url":"assets/js/afbc055c.06db5df1.js"},{"revision":"e91596b7c511adb57117c98e4d1927c6","url":"assets/js/b045c544.d6f88612.js"},{"revision":"2ebe957949b0cde46b5bb9c3c1bba329","url":"assets/js/b06d16d9.ec0de2ba.js"},{"revision":"3506b61b9ce39255e69e566fac7fbc15","url":"assets/js/b120072e.2f20ddd1.js"},{"revision":"797ba5a49d16f6f9177b10f002bc6caf","url":"assets/js/b1793cdb.bc1d41fe.js"},{"revision":"1427c56adb0c1ded832923fc8601eb2b","url":"assets/js/b1b76d83.3d44df76.js"},{"revision":"d43f08bf942988b72499f14a25d3f95c","url":"assets/js/b220b87a.f0b3b417.js"},{"revision":"edec7c5d75b4b68d40b8eb4248ed776a","url":"assets/js/b294dbf2.238f3ce6.js"},{"revision":"3ec18835657cdcb3bdaaeab683aa8d88","url":"assets/js/b2b675dd.f3c786d4.js"},{"revision":"2c7905d14ae29d34575ef8837a81f694","url":"assets/js/b2f554cd.4e80716a.js"},{"revision":"aa732cc771454b24b63789218a7d75a8","url":"assets/js/b3aeb698.9c986edf.js"},{"revision":"7d69c7e31cf6896d5b2100ae7eb19307","url":"assets/js/b41937ce.7345b722.js"},{"revision":"b912daf7428f193b38a0bf69311e45c5","url":"assets/js/b507effc.d6ee7cdb.js"},{"revision":"39ef616382dcaf06c99d78f15ca9de77","url":"assets/js/b5922a77.32975f9d.js"},{"revision":"ec01e610969667025a1769ca6c773f91","url":"assets/js/b5f6351d.212181e4.js"},{"revision":"9d0efc2f74d70e0c28b75f3146ea8403","url":"assets/js/b62cec13.c908f642.js"},{"revision":"a1a717b2fd442ff94c4f62945a8750e2","url":"assets/js/b6a6b6a8.6d0adc3b.js"},{"revision":"dd0c7adadfd4d9ba6d04d22b30ea1118","url":"assets/js/b6e4ff84.cb76c5ce.js"},{"revision":"adce0d656ec3694e0dd9df16c94be861","url":"assets/js/b749f6ec.b7792bcc.js"},{"revision":"516cd997a611242af49d2313a071ea73","url":"assets/js/b7d7bb96.4d759079.js"},{"revision":"8665156f8f7615eae10f2dc2de93f29d","url":"assets/js/b7fed251.0799c291.js"},{"revision":"d46c846e9a9b1f43312c763720f80e46","url":"assets/js/b849fd55.410e28b1.js"},{"revision":"d4324f6d77c950e5b9fc8ab5a219696d","url":"assets/js/b8b1e67c.2b3f79db.js"},{"revision":"844a81f052af30d6641bc2b101cdc52c","url":"assets/js/b8d223ff.a399f7a0.js"},{"revision":"2f76f7fcf66ca72d0a73a5c2a6da97c2","url":"assets/js/b8f78f32.84887d3f.js"},{"revision":"9489374997e1672f1d5aea0040a58978","url":"assets/js/b953ccfa.944a16df.js"},{"revision":"a32cd41aa1acf51c0599089ce250c3ea","url":"assets/js/b9ef3ca1.cfc41ddd.js"},{"revision":"90f8e16821b03bf343960b23bafe884e","url":"assets/js/bae5ebf4.b5f3dc7b.js"},{"revision":"8b723b311c452327c95288ed80e0379d","url":"assets/js/bb6b2c60.83c6e261.js"},{"revision":"b0bcc5719b64d5e25f010848494340e1","url":"assets/js/bc18cd3f.c2035285.js"},{"revision":"175ee9b4ed9b63cc5cf4d6820f5c4d97","url":"assets/js/bc3c9d56.b4717b0d.js"},{"revision":"80eff55f8282849dd35932d27fc22776","url":"assets/js/bd523924.b6ab140e.js"},{"revision":"8409ed4d3f21e024a46053057ee46944","url":"assets/js/be3295fa.564046cd.js"},{"revision":"6db838aa002303512fae6656b20fe0e4","url":"assets/js/be813891.636d9ab5.js"},{"revision":"fd6e5eeef18960f86bc89dd6289d8630","url":"assets/js/beacfb9e.2682a75c.js"},{"revision":"3837cbb2b3103f14b5df1f5aa398edad","url":"assets/js/beea6c26.5e150729.js"},{"revision":"8bcdd9c356c4e0c28f3c71fa1e82874d","url":"assets/js/bef17a8a.42047b65.js"},{"revision":"d7672c5733d5e569260bd1eb92023b3e","url":"assets/js/bfabbd1a.a13c2726.js"},{"revision":"f91b5834fe5b10a4677896dc042e6877","url":"assets/js/c041151e.bdab9d4d.js"},{"revision":"1739d183f2f61cf192929b4042906529","url":"assets/js/c0e92f41.dff32ad4.js"},{"revision":"60f42c05279dff5eaddc5f3c371628c1","url":"assets/js/c16eb2cb.764d0f50.js"},{"revision":"658440870a58bfd7ee97ab55922f0cfd","url":"assets/js/c22e6914.933c18b1.js"},{"revision":"d6930f4aacf69b010efd7b882def471e","url":"assets/js/c29f0c30.5ab3305f.js"},{"revision":"77ca5ac105774ca51a53bf8ee8a874e8","url":"assets/js/c320b3d1.4f434efa.js"},{"revision":"dc4998edc8b75f46371f1723482b915d","url":"assets/js/c32946b0.b59e2b53.js"},{"revision":"ed28d8e4e29821621856b5f24c04e180","url":"assets/js/c39b0fe3.7fa81475.js"},{"revision":"c7a967c15f2fc30444a4e383b65cf051","url":"assets/js/c4305851.3ab9b017.js"},{"revision":"95e45d66899c25dbb45b447bc390d9a5","url":"assets/js/c51ac394.194d2327.js"},{"revision":"6fe9ce3e29278b561c6c168213c3ddd0","url":"assets/js/c5d3f16a.7d426e57.js"},{"revision":"bbe9234d0d75efea38d5cf1cd0e342eb","url":"assets/js/c5dc997e.9edf77ad.js"},{"revision":"3c0cbe8a8345fa1b5e5185f550c257f9","url":"assets/js/c5fba11c.d0764f08.js"},{"revision":"152a281ed12317172e5cbc0edc0d690b","url":"assets/js/c649d63a.cd535c3a.js"},{"revision":"0acc5861cb028b298d8ed9d8248317f4","url":"assets/js/c7788412.1a14f408.js"},{"revision":"9f5f79931259eee4df66530a055611ba","url":"assets/js/c7d25af9.60b92ea4.js"},{"revision":"61ccb63313ca48afea5b45b31d70a569","url":"assets/js/c7d9c84c.c16393d3.js"},{"revision":"9c4abe4940bb7482b934fea979950b28","url":"assets/js/c863390a.1eab508f.js"},{"revision":"329049c584cb5d504f32d9df35350423","url":"assets/js/c926bcff.26248d0d.js"},{"revision":"4f2b7ff3621e7769ebda966a30a1031f","url":"assets/js/c9a1127c.7be51448.js"},{"revision":"8543b9268cc635fa1f9b847329701784","url":"assets/js/c9a3880a.464692c9.js"},{"revision":"d659e6aae4c5235afa38b9a4345ea2a9","url":"assets/js/ca84acd0.9a6dfe80.js"},{"revision":"7b8598142a9a0fa0cda6ff7756865a9a","url":"assets/js/ca89c0b3.fc686a59.js"},{"revision":"b25f03de527e92217b61d2b27c032404","url":"assets/js/cb42e102.745e875b.js"},{"revision":"2ae0a8342eb51afac7c3a58e990755a7","url":"assets/js/cb8b4419.e8b72751.js"},{"revision":"cd472cd7ae5ed07ce53430af890ba0bd","url":"assets/js/cc3f4a0c.70950cb9.js"},{"revision":"66bf77e8e72888f12e86fd1ce7e153ea","url":"assets/js/cc5d2bcd.50505f9e.js"},{"revision":"435ba49966f94eb26ecef757d6517b76","url":"assets/js/ccc49370.d2c49174.js"},{"revision":"ef9e325a861cea3051546d781b5cadb0","url":"assets/js/cdc3b41d.bfc010d9.js"},{"revision":"3b35c2c22e7bb07fe3f3edadd1238274","url":"assets/js/cfd070c8.10823c03.js"},{"revision":"55faefc61806efa9d7e921a4a33cbdee","url":"assets/js/d011464f.0b33616b.js"},{"revision":"aa88a253aeb9a7e4a0135efc70ab0afe","url":"assets/js/d0dab98d.1278b543.js"},{"revision":"17fc4a38eeaacf5739a61a68fadfbe81","url":"assets/js/d241f030.39bbcc5c.js"},{"revision":"87979ef588983e9c9f9f658ca8f6f557","url":"assets/js/d3671536.472f48ec.js"},{"revision":"3b4b5d517aa00accbe0ba4df84a5c203","url":"assets/js/d387dcd1.b4b948f9.js"},{"revision":"24ded3499fff52cb45fad1eadf35c430","url":"assets/js/d419da7f.78ba0c65.js"},{"revision":"b54f13d229cc02e0d96e66b160d34ee6","url":"assets/js/d45002a0.e5ee2ac5.js"},{"revision":"a853f185b75bdbea776b27a4f01eda0e","url":"assets/js/d4e72294.8f6c18ca.js"},{"revision":"028e7918d0f74fe5997c7cbca91f25c1","url":"assets/js/d4f36fce.139b1e6f.js"},{"revision":"816910c8da8f0fd9eee6d8ca83c0e713","url":"assets/js/d50e724c.16d3238b.js"},{"revision":"c1efa6418302fcb8b3e88a9c1e7acd5e","url":"assets/js/d67fa14e.27069b28.js"},{"revision":"23c69602d354185be7a4de7939ef0fc0","url":"assets/js/d691d12c.f89dc7de.js"},{"revision":"87889db60f1a6a44422622362dfd7557","url":"assets/js/d6bc24fc.150e2133.js"},{"revision":"ebbe924eb11fb53f1a39a42d1c4f9fc1","url":"assets/js/d96a4c69.f18741f9.js"},{"revision":"30fa27f567cc2e8670ee50143dff8b96","url":"assets/js/d9785db0.285b9294.js"},{"revision":"521a674668eab257a6890b838f8dae06","url":"assets/js/daddbaa1.862d8798.js"},{"revision":"5496d28c440ccbcd3b5f5158247c225f","url":"assets/js/daec948e.8086f23b.js"},{"revision":"dcf2c000d0e785e1d6897ed91987d4d4","url":"assets/js/db35a99f.544f9c5a.js"},{"revision":"3dd39025f65e300b5bcdbd779ca6e3c4","url":"assets/js/db6d481c.785220c3.js"},{"revision":"3075cba71ba1245c45257c571bccae05","url":"assets/js/dbe19f32.238888d5.js"},{"revision":"9dae9f12c2bc83394296c0886d9ec64f","url":"assets/js/dbf9bc40.a73f52f6.js"},{"revision":"e0a0ae3bb4c43abdfdaf8ea3dbc2af49","url":"assets/js/dc1f4a2b.aa3971a2.js"},{"revision":"de5e29b70466b8a798febee308d87898","url":"assets/js/dceffdc1.d3658496.js"},{"revision":"88c11f383a9f1408856eb4b8309c2917","url":"assets/js/dcf2a602.8c7d81d1.js"},{"revision":"3883c90a6b6b78290a77d56dc9905a98","url":"assets/js/dd3410d4.5a3aa9ce.js"},{"revision":"d47691d7ccdb35a89d1676302fb9c3b9","url":"assets/js/dda55354.0d4708de.js"},{"revision":"b6f66b0414da30f5d79d9820cad000dc","url":"assets/js/de143e13.a3f03ba0.js"},{"revision":"0aedb17cbe8ca423d5dfbe005823f4af","url":"assets/js/df53ee4a.5fba4c96.js"},{"revision":"207a1986c3b9b2a5fb0b09bb8fca10ef","url":"assets/js/dfd40ac7.bb47ab66.js"},{"revision":"eb0d28336d0a441a67bbe722f3723e86","url":"assets/js/e06ad6e5.a5924ace.js"},{"revision":"4d88670b6ca96d8cd2695d5e17a8220b","url":"assets/js/e1980b35.f17a8078.js"},{"revision":"c0b8577a1d7a1d321fa0b6a3301015f3","url":"assets/js/e30b83be.f9079f5a.js"},{"revision":"f57651547e8be9c482240aae28de0177","url":"assets/js/e3419b10.1ae73a46.js"},{"revision":"92c6958a06044c93e190970cef096853","url":"assets/js/e3939e2c.ca06ee99.js"},{"revision":"3a4bb07276f1ba283af22e1a152a7531","url":"assets/js/e40a1096.bb55471b.js"},{"revision":"9c61bfe130a1dff1ee19fa5f1663d69e","url":"assets/js/e4eebc9d.31135411.js"},{"revision":"14b81290b85123046e54d0b0ec727f82","url":"assets/js/e5d5c863.eb0de9a9.js"},{"revision":"d3ba3c80578ba95b051ea8196ce57098","url":"assets/js/e6c44b2b.a5d0be9f.js"},{"revision":"65fc89a2be66d4e98f0d26aeed9dc3f7","url":"assets/js/e6d5bf97.6deb5b07.js"},{"revision":"4081ff3ac753feb50dced56570c7ea7a","url":"assets/js/e6e13968.e8dc91da.js"},{"revision":"7c33ed04da598724444555ccfa9ed48a","url":"assets/js/e6e8ac82.9b6d0fd2.js"},{"revision":"80a78d2f4a240a059f117892b265d8c5","url":"assets/js/e7251ae5.addc9945.js"},{"revision":"aad637ee0d8d1d9c73cfb2dca19028a0","url":"assets/js/e7a1b3f5.921d1fbd.js"},{"revision":"bec75be6bebd7738ef64a53f03e3d95c","url":"assets/js/e7f96876.5bd033f3.js"},{"revision":"d3578fcdd26e1fe3af87b42653ff7ed8","url":"assets/js/e8691aac.64ad221b.js"},{"revision":"1a91a3db60c3636107c3f3d6da57b5e9","url":"assets/js/e8fb1707.05a4567d.js"},{"revision":"4941335e84bba3d50c12ae2d6e54bf26","url":"assets/js/e9087c4b.6d15076c.js"},{"revision":"a340c0a0ce65a48214e83b5c0d625f4b","url":"assets/js/e967e667.2ea595bc.js"},{"revision":"1f4dc73aabb2b0a9fa88a16ba614716a","url":"assets/js/e9e85417.bb130970.js"},{"revision":"f1bfd43a83734594fb4ecd7b3966495c","url":"assets/js/ea2d3cad.389f1b2e.js"},{"revision":"368db5eef9e9be714a4b9e040c3585c2","url":"assets/js/ea8727a6.3a8bd7ec.js"},{"revision":"65b17099a27af4216cb6ede9eb084a7f","url":"assets/js/ebc84fc0.2ff873c9.js"},{"revision":"948332075fbcb2ee338e32f07f1afa0b","url":"assets/js/ecbf0a98.10d8ed5a.js"},{"revision":"225e9e56138e4f25e63d266b67db9dba","url":"assets/js/ed3d142d.40f63153.js"},{"revision":"1dd892c0fe0e5faf0de972fe63d0f411","url":"assets/js/ed5af355.6c084f55.js"},{"revision":"8ac52ab2bbf87f0bb2f8d3debec0b459","url":"assets/js/edb997da.ecec12e9.js"},{"revision":"5d37396f714850d795388a1ffae55a01","url":"assets/js/edc2676b.1981ba90.js"},{"revision":"4ee8adce7c486d84709c085e2b1ce245","url":"assets/js/edccb071.8450ac03.js"},{"revision":"00ac5f4983bd97b920f8baaeb6bae8a2","url":"assets/js/ee2f8d5c.4c362200.js"},{"revision":"1cc5bbe44a6b7afdbea4db6cf7d69dc1","url":"assets/js/f011d17b.bc77d0a9.js"},{"revision":"faf7dec3de6cacbfb9ceecb74f1b3f32","url":"assets/js/f091cc2c.31bf056a.js"},{"revision":"e231f2898f772c6f1aaf34b0ffff279b","url":"assets/js/f0ad3fbb.e033c040.js"},{"revision":"fb04b925e4affe0ea1dbcf76d0e2971e","url":"assets/js/f0e80be9.b05a364a.js"},{"revision":"00ca618ce47c509b4013ee44a229f10f","url":"assets/js/f0e8ae24.efaaa8bf.js"},{"revision":"1354c5e17efc3f76c7c359df26f7ddde","url":"assets/js/f13b58c7.18bed3fe.js"},{"revision":"20403eb7a9855fa53d6e12883af14aa3","url":"assets/js/f1797540.847460fc.js"},{"revision":"dee82f29e52e266e7059b3167927839b","url":"assets/js/f249cd2a.7c8e7e9e.js"},{"revision":"f14f08533689f6f25083341a9c49a826","url":"assets/js/f27708a6.5f296107.js"},{"revision":"bbbb109a497e622a1c92081a13812128","url":"assets/js/f351da26.2e530634.js"},{"revision":"e48c772ada979508844d5f04e5a09d4f","url":"assets/js/f38e142f.68cd5d62.js"},{"revision":"d142e80a2c55bc78b67cae18e018b1ea","url":"assets/js/f44540ba.1f46f2a0.js"},{"revision":"181bd66e161979bc372631818cbe38b8","url":"assets/js/f4d07f69.185cb9aa.js"},{"revision":"08c1f0ad4a2913f9cbbefcf6bfe7d5f0","url":"assets/js/f755490c.20ccece5.js"},{"revision":"1f1545a02b8e0136c973bca6a449734f","url":"assets/js/f8004d8c.49d983eb.js"},{"revision":"20ebd4ca03a5e05345dd0cac31a10b4b","url":"assets/js/f83aa087.1a00eac2.js"},{"revision":"b76e4890b6a08baf292117617692966c","url":"assets/js/f8a9c3eb.d09035d3.js"},{"revision":"1300c8e1d88a751875338f13a91b6375","url":"assets/js/f95e0328.9fdc6534.js"},{"revision":"27fd9171608d5b76c52fdff2f006b85e","url":"assets/js/f994f74c.fabf045f.js"},{"revision":"1f9d28fec0cd6352d8537e356ceda89e","url":"assets/js/f99e2f47.47b893ba.js"},{"revision":"9c4123857e327185c5ae8a3fdc1abd00","url":"assets/js/f9a1e4f8.a10cdf25.js"},{"revision":"97d33b6624617ea9ba4fbbdcce936c66","url":"assets/js/f9c86808.b9bc00f0.js"},{"revision":"44160c1ec9bae6512972f1525e1e1fba","url":"assets/js/f9d6d432.69a86703.js"},{"revision":"e72d5e5705b4ab4ba10608f5edfc9131","url":"assets/js/fa6367a7.c89acbd8.js"},{"revision":"b8078c33bdc2ffefee2f323208be9e23","url":"assets/js/fa953b1c.5f994db4.js"},{"revision":"4ffb9842dc5354419ec60e45f093f1bd","url":"assets/js/fb4b29e8.1b8cc667.js"},{"revision":"cda3b33b7d85ec0fb5852e4d52995d4d","url":"assets/js/fbd7b8db.2a029de8.js"},{"revision":"bae1f4f4360d589f49facced5e84e605","url":"assets/js/fce1173a.3e2a6d16.js"},{"revision":"f6a58178460c9c5dcc203d274fc91123","url":"assets/js/fce5fff2.5b8032d3.js"},{"revision":"d817682dfba15c6023a0466ffa21ec56","url":"assets/js/fd98d5cf.e7232f66.js"},{"revision":"ae989d95b0ca05804b902877cf40a640","url":"assets/js/fda6a971.7e7f81bc.js"},{"revision":"c05791e683fda06db7288dd8535aa6c0","url":"assets/js/fde7a9cf.507fce84.js"},{"revision":"353dc1484006cfa70c6916f583bdd566","url":"assets/js/fedf8153.95cdd3e7.js"},{"revision":"ac8809e86b950166f7bccb18fb11dea0","url":"assets/js/feefb48c.e0536fb3.js"},{"revision":"7ffd28efcbc809109287c76774dc4496","url":"assets/js/ffa734eb.8a9cc70e.js"},{"revision":"008ace8ca5d9728e1f03115bc6f37c56","url":"assets/js/ffc9929f.65369ec6.js"},{"revision":"a121e1f5c933062d6ca05f1f8fc18773","url":"assets/js/main.874fbe98.js"},{"revision":"88701bc943d7e8c711835e9d46261b9b","url":"assets/js/runtime~main.f45cb10c.js"},{"revision":"546d1d193bea2fc24d60e98572781af9","url":"blog/archive/index.html"},{"revision":"95e4eca6e056d80c31502717af5f3141","url":"blog/index.html"},{"revision":"0801f13d71d8210b4301195567376a35","url":"blog/new-site/index.html"},{"revision":"323c8773ff5410e520f037fe306cc6ef","url":"blog/page/2/index.html"},{"revision":"cd8e86fde3b675b355e830d51b32c86e","url":"blog/page/3/index.html"},{"revision":"0953f6daff64d37a08b6f56f2d27ce87","url":"blog/page/4/index.html"},{"revision":"b6e316f83c8be9b693a89875fda2282d","url":"blog/page/5/index.html"},{"revision":"3c25b672f2ed45f7d73f6c8877ca256c","url":"blog/page/6/index.html"},{"revision":"b80831481ab9766e8fd2dfa1e76c7bd6","url":"blog/page/7/index.html"},{"revision":"cd10c9d920bae8ed3e820581e7337000","url":"blog/page/8/index.html"},{"revision":"74e1bcd083aa126119ef3f9911f9c789","url":"blog/page/9/index.html"},{"revision":"45affc354e0cbb76fe7bbe5d91627e66","url":"blog/server-cli/v1.1.3/index.html"},{"revision":"87a4ae310f9ae51190c9cdf0fd198855","url":"blog/server-cli/v1.1.4/index.html"},{"revision":"43db3351a7e7075b1b59971074013c41","url":"blog/server-cli/v1.2.0/index.html"},{"revision":"5f8c24e171dcde9d20fda0c6ab32b40d","url":"blog/server-cli/v1.3.0/index.html"},{"revision":"b0045f86b0e6fc73937a569954cd12e4","url":"blog/server-cli/v1.3.1/index.html"},{"revision":"013d4ab9c5776c1ebccc1531a9da04c4","url":"blog/server-cli/v1.3.2/index.html"},{"revision":"027ef366bdf5b79d3d7405ff5dc01911","url":"blog/server-cli/v1.3.3/index.html"},{"revision":"f73389cbe61ee79afa7c5a380d832312","url":"blog/server-cli/v1.3.4/index.html"},{"revision":"a5dfec36a1c6203f863bd1fa9427be08","url":"blog/server-cli/v1.3.5/index.html"},{"revision":"4816eff62df5c3824ce4605085df8f86","url":"blog/tags/browser/index.html"},{"revision":"23f1c441fb641e6b0fa27c190161860b","url":"blog/tags/browser/page/2/index.html"},{"revision":"a9c9d184e4ef2315d38c812d316fa558","url":"blog/tags/browser/page/3/index.html"},{"revision":"cd0e55bc9863dcfbe72cd0245779b6dc","url":"blog/tags/browser/page/4/index.html"},{"revision":"c99bd6524a7c5011438be40f6885af55","url":"blog/tags/cli/index.html"},{"revision":"6fb662a0f0b4f1a68b61a7ebf9d67cd5","url":"blog/tags/docusaurus/index.html"},{"revision":"299043cd45f31019d7cb8a20c2737b8a","url":"blog/tags/hello/index.html"},{"revision":"2ccdc0c14d56950ec13ef69a6a95a330","url":"blog/tags/index.html"},{"revision":"3d68c02ec78fe51c5e2a2d3d392a8114","url":"blog/tags/javascript/index.html"},{"revision":"f81141023647e215e1a3d6c3503c30ef","url":"blog/tags/javascript/page/2/index.html"},{"revision":"ac33c4ba515ba8d992b9fb486f41a507","url":"blog/tags/javascript/page/3/index.html"},{"revision":"ceef0b7895fcc95a634505e5f526c705","url":"blog/tags/javascript/page/4/index.html"},{"revision":"37149e14bbe6ce60f98b036d1b137301","url":"blog/tags/javascript/page/5/index.html"},{"revision":"74b4ec097936c98bb4465772cf027ff5","url":"blog/tags/javascript/page/6/index.html"},{"revision":"3315c44096025c8431d5f4f24988113c","url":"blog/tags/javascript/page/7/index.html"},{"revision":"06e226e6feef6676b3c945890ac4d779","url":"blog/tags/javascript/page/8/index.html"},{"revision":"500a823cd690794f3833f5d59ade789a","url":"blog/tags/javascript/page/9/index.html"},{"revision":"6ce8c37bc323a1bec48f86d9713cbc6b","url":"blog/tags/lib/index.html"},{"revision":"2f5e2d050aada26f092fb251820d2fe8","url":"blog/tags/lib/page/2/index.html"},{"revision":"450e938c6b9ddd6fe5d4c169b0f2d8f6","url":"blog/tags/nodejs/index.html"},{"revision":"b57d784bc2902490eb7500a0a5dc6643","url":"blog/tags/nodejs/page/2/index.html"},{"revision":"f074b873e476caa6abfba73ed13f8028","url":"blog/tags/nodejs/page/3/index.html"},{"revision":"9410d715ac61a8a78ef8452cbcc32b7a","url":"blog/tags/nodejs/page/4/index.html"},{"revision":"192e610997ed144d28df9627b90ba911","url":"blog/tags/nodejs/page/5/index.html"},{"revision":"b25e268759d6d78f1574834ebfa0f189","url":"blog/tags/server/index.html"},{"revision":"f68f39568dcbb569beae89e7ee511c71","url":"blog/tags/server/page/2/index.html"},{"revision":"b1deea565a697a6e28fe505897bb7a5f","url":"blog/tags/server/page/3/index.html"},{"revision":"b9fe482335a0a76aa6b704fe799b4dde","url":"blog/tags/wa-js/index.html"},{"revision":"5c3b62f87ccc2d6e948f9339edf3d188","url":"blog/tags/wa-js/page/2/index.html"},{"revision":"39f5a6d2bf573319f22929312752f9b4","url":"blog/tags/wa-js/page/3/index.html"},{"revision":"cea9bdf44c09fc6cb8e070349f59935c","url":"blog/tags/wa-js/page/4/index.html"},{"revision":"797553235e9795b505084b41852f4cf6","url":"blog/tags/wppconnect/index.html"},{"revision":"62f25c1b33829edd54048f83c461f622","url":"blog/tags/wppconnect/page/2/index.html"},{"revision":"852aea2f9aac0a54b56f343cd34a83f4","url":"blog/tags/wppconnect/page/3/index.html"},{"revision":"5ac21fcf3a889c99cc4705e56cea2cea","url":"blog/tags/wppconnect/page/4/index.html"},{"revision":"e99c002b5f9fa1e921c35f1737f4c32b","url":"blog/tags/wppconnect/page/5/index.html"},{"revision":"06b4211b3937bbe1413fe4eedd90bff4","url":"blog/tags/wppconnect/page/6/index.html"},{"revision":"abb03b4aa64be5a3f54d5ac37b512ebc","url":"blog/tags/wppconnect/page/7/index.html"},{"revision":"c582394c2e1b6127235684f4778f509a","url":"blog/tags/wppconnect/page/8/index.html"},{"revision":"170e317ce20067cd45c2da387978a712","url":"blog/tags/wppconnect/page/9/index.html"},{"revision":"84829fe34a50235d34b1efd639081028","url":"blog/wa-js/v2.10.0/index.html"},{"revision":"8bc631c9a01812832fd8c13138ba33fd","url":"blog/wa-js/v2.10.1/index.html"},{"revision":"aece4fdf0d56f83abb79d3839eccb488","url":"blog/wa-js/v2.11.0/index.html"},{"revision":"e5491e867cafdb2d5049d447c9bcc34e","url":"blog/wa-js/v2.11.1/index.html"},{"revision":"45844053f99f5b0e921877545c73b22a","url":"blog/wa-js/v2.12.0/index.html"},{"revision":"981f5d033ff64cf9df9c7eb69ff4c0d6","url":"blog/wa-js/v2.13.0/index.html"},{"revision":"d1e3bd614f90f1846f22199614abbabc","url":"blog/wa-js/v2.13.1/index.html"},{"revision":"233b21cdb0b9d83357b0a20a5f6e9998","url":"blog/wa-js/v2.13.2/index.html"},{"revision":"489f499303c55991f9439142b7077863","url":"blog/wa-js/v2.13.3/index.html"},{"revision":"259a3bdbf31e6f17908671e4d127f1b2","url":"blog/wa-js/v2.13.4/index.html"},{"revision":"c51f5b149d952694034f8fe1f9c805c3","url":"blog/wa-js/v2.14.0/index.html"},{"revision":"ec98d89ad3464723d722633404715717","url":"blog/wa-js/v2.14.1/index.html"},{"revision":"fc5af85e3c2f3b449a543db952518fe6","url":"blog/wa-js/v2.15.0/index.html"},{"revision":"67d1ce6c147d02a6e8a73a3ac4c847b0","url":"blog/wa-js/v2.15.1/index.html"},{"revision":"7ab0db5fe908e381b252a0c2de0576f4","url":"blog/wa-js/v2.15.2/index.html"},{"revision":"6b0911da4207651d9c4966b5dd1a9eeb","url":"blog/wa-js/v2.16.0/index.html"},{"revision":"04b8a10371f555879b5d9b2e9f04f91a","url":"blog/wa-js/v2.16.1/index.html"},{"revision":"e9a9d13081d4ab2eeeca3927848b25fe","url":"blog/wa-js/v2.16.2/index.html"},{"revision":"adf93f2915708109e10f197b4b057b4d","url":"blog/wa-js/v2.16.3/index.html"},{"revision":"a0144be2f28a1917bc8beeb0b46b988d","url":"blog/wa-js/v2.17.0/index.html"},{"revision":"41ee32a9976c8c1d2512db2d18836110","url":"blog/wa-js/v2.18.0/index.html"},{"revision":"e37a2558f03edbf93cde70ed9f019a5f","url":"blog/wa-js/v2.18.1/index.html"},{"revision":"9eab6ea44cc6f29967d9364f788ce509","url":"blog/wa-js/v2.18.2/index.html"},{"revision":"3b7c03d3923086bda570d8b5d90a1e83","url":"blog/wa-js/v2.18.3/index.html"},{"revision":"1b34110c7edfc87447e4bafdda1e4c07","url":"blog/wa-js/v2.18.4/index.html"},{"revision":"c96c2b7ba031b933d02c94c12dfadf09","url":"blog/wa-js/v2.4.1/index.html"},{"revision":"35f11c06be9f5acfed5ae49b0f84f970","url":"blog/wa-js/v2.5.0/index.html"},{"revision":"ca913ad7ef12eeaad4c2709117b0be75","url":"blog/wa-js/v2.5.1/index.html"},{"revision":"ad1e28b1a9cb82bcc7c53610d23aaf0c","url":"blog/wa-js/v2.6.0/index.html"},{"revision":"5625acc866ccb0d0ef3f1501d8d4bb9a","url":"blog/wa-js/v2.7.0/index.html"},{"revision":"22aa1abf9b151e7ba5c5a02e386f9b76","url":"blog/wa-js/v2.7.1/index.html"},{"revision":"537710219019034eb733c2bedc4f3307","url":"blog/wa-js/v2.7.2/index.html"},{"revision":"04fcce718df8d57ab15260020148e42e","url":"blog/wa-js/v2.7.3/index.html"},{"revision":"719a9e717ed2a8f89f06a3f2819121e0","url":"blog/wa-js/v2.8.0/index.html"},{"revision":"3d5fab419d46cb2daf2b7e1751f334e4","url":"blog/wa-js/v2.8.1/index.html"},{"revision":"25a5852e1fbac8706c5b98b5040788e8","url":"blog/wa-js/v2.8.2/index.html"},{"revision":"4e11b6b418f85d6cd9fb5bbea5219444","url":"blog/wa-js/v2.9.0/index.html"},{"revision":"f78f78efa8378ac60d2666d539f2b16d","url":"blog/wppconnect-server/v1.2.0/index.html"},{"revision":"eaf6f55ae93c5322c514e51ae1f70853","url":"blog/wppconnect-server/v1.3.0/index.html"},{"revision":"2a5a6e61c16be408859b151fab23cb70","url":"blog/wppconnect-server/v1.3.1/index.html"},{"revision":"7a7f87132da774b0210d7746333ee2c5","url":"blog/wppconnect-server/v1.3.2/index.html"},{"revision":"6bd52b7ed4fca9dda2c77ce914a5ce8b","url":"blog/wppconnect-server/v1.3.3/index.html"},{"revision":"b4edcf5be400173e633f441780468543","url":"blog/wppconnect-server/v1.3.4/index.html"},{"revision":"67e0f461fe5ddc2642e43bed04388293","url":"blog/wppconnect-server/v1.4.0/index.html"},{"revision":"2c5786dc96bd4bf9ae691e0e9a0d8f10","url":"blog/wppconnect-server/v1.5.0/index.html"},{"revision":"46f8632df0e02e57e4a051f9b1963aa2","url":"blog/wppconnect-server/v1.6.0/index.html"},{"revision":"2822ee92d66c86ab32b57a148db4ebfc","url":"blog/wppconnect-server/v1.6.1/index.html"},{"revision":"aaaf7c87f051f30c440135f0e55c2942","url":"blog/wppconnect-server/v1.6.2/index.html"},{"revision":"d46fdca49937f7f021b675d0002ff151","url":"blog/wppconnect-server/v1.6.3/index.html"},{"revision":"648fc846e625893d48ae588138d11539","url":"blog/wppconnect-server/v1.6.4/index.html"},{"revision":"78671f2fe7280ff9c63d51789804acb3","url":"blog/wppconnect-server/v1.7.0/index.html"},{"revision":"e5668673dce7b21575d6e967f81dfdbc","url":"blog/wppconnect-server/v1.7.1/index.html"},{"revision":"5e7be862908bfa2e4d23491b9ecd1350","url":"blog/wppconnect-server/v1.7.2/index.html"},{"revision":"8d13deff51316cf29da54a39da2ae664","url":"blog/wppconnect-server/v1.7.3/index.html"},{"revision":"26943f9740da6f0e1ee7a8d8e892bc73","url":"blog/wppconnect-server/v1.7.4/index.html"},{"revision":"b06c59a04bfee60d179d09fd69297204","url":"blog/wppconnect-server/v1.8.0/index.html"},{"revision":"55d36778201dbe956968a448a277ae35","url":"blog/wppconnect-server/v1.8.1/index.html"},{"revision":"08442484ad18b27351fe8402d1389a1e","url":"blog/wppconnect-server/v1.8.2/index.html"},{"revision":"6f0b81452f2e6926b7bae2d592e179cc","url":"blog/wppconnect/v1.13.3/index.html"},{"revision":"fe7c66a2968fb5c520b9f3ea762fbbf9","url":"blog/wppconnect/v1.14.0/index.html"},{"revision":"4f00c9dc3b5741fb09590a9990b219f5","url":"blog/wppconnect/v1.14.1/index.html"},{"revision":"b9e8073c251aadba19cf4bb2702cd5a5","url":"blog/wppconnect/v1.14.2/index.html"},{"revision":"e45a091eb020ac205230b5ba9172d368","url":"blog/wppconnect/v1.14.3/index.html"},{"revision":"a568964a1a3eb237b19240369a6265b0","url":"blog/wppconnect/v1.14.4/index.html"},{"revision":"422e2f31c0e728ef908010818880e1de","url":"blog/wppconnect/v1.14.5/index.html"},{"revision":"34486d04336c16810f1ff7685b6236c0","url":"blog/wppconnect/v1.15.0/index.html"},{"revision":"652f5e7917785a633bbe00f0cb2c11bc","url":"blog/wppconnect/v1.16.0/index.html"},{"revision":"937403f0c220c940d3200cfedaccfec6","url":"blog/wppconnect/v1.16.1/index.html"},{"revision":"aa8b31f7d98aaaec1a171964925531c1","url":"blog/wppconnect/v1.17.0/index.html"},{"revision":"a7616d49b3d8fa3df3e886b707d35bb6","url":"blog/wppconnect/v1.17.1/index.html"},{"revision":"193298bee7e5f1f87288af2e521a8316","url":"blog/wppconnect/v1.18.0/index.html"},{"revision":"b311e189e4d9fee67eda9c1975b298ff","url":"blog/wppconnect/v1.18.1/index.html"},{"revision":"b08433768b5cb34fb1e1a0b5f5e6b641","url":"blog/wppconnect/v1.19.0/index.html"},{"revision":"7a67c82cdc5c453ac261230000fce3d9","url":"blog/wppconnect/v1.19.1/index.html"},{"revision":"ea89e368043c9cd9e290ee0260f816b6","url":"blog/wppconnect/v1.19.2/index.html"},{"revision":"43f119741b54cd009056355965358bbd","url":"blog/wppconnect/v1.20.0/index.html"},{"revision":"5fee250e599d018e437eab80e91197ab","url":"docs/api/index.html"},{"revision":"39a53bcdf83e350cbca4c3f17709b9b0","url":"docs/api/wa-js/classes/ev.EventEmitter/index.html"},{"revision":"0b56c068c4cf2be24d888eddaf7817e3","url":"docs/api/wa-js/classes/util.WPPError/index.html"},{"revision":"1af49275e46c9add53066941370dd0f9","url":"docs/api/wa-js/classes/whatsapp.AggReactionsCollection/index.html"},{"revision":"e9f21de6d1943ab42b20b428b7cb05af","url":"docs/api/wa-js/classes/whatsapp.AggReactionsModel/index.html"},{"revision":"2835d6ef18bc495c8d88eb560a4ed185","url":"docs/api/wa-js/classes/whatsapp.AttachMediaModel/index.html"},{"revision":"7d659a7a694ccc386596f9fad5176ea0","url":"docs/api/wa-js/classes/whatsapp.BaseCollection/index.html"},{"revision":"b9110bb42562275b6e98e4dbb3c69cec","url":"docs/api/wa-js/classes/whatsapp.BlocklistCollection/index.html"},{"revision":"c17fb20cf06e224425d31767e997e18d","url":"docs/api/wa-js/classes/whatsapp.BlocklistModel/index.html"},{"revision":"d396bd20d1190db3ac81a09545ea7ba3","url":"docs/api/wa-js/classes/whatsapp.BusinessCategoriesResultCollection/index.html"},{"revision":"b74c8fd8e9b99be2bed39ebc51b86d01","url":"docs/api/wa-js/classes/whatsapp.BusinessCategoriesResultModel/index.html"},{"revision":"1a608ef98521f32b45117e4706d51eb3","url":"docs/api/wa-js/classes/whatsapp.BusinessProfileCollection/index.html"},{"revision":"829d62135770cdb8219b4b0c6780d40e","url":"docs/api/wa-js/classes/whatsapp.BusinessProfileModel/index.html"},{"revision":"a21c2776a3b9765a44b545d34a3a6888","url":"docs/api/wa-js/classes/whatsapp.ButtonCollection/index.html"},{"revision":"42784d1ccba65d38a99d5b0fc7e11559","url":"docs/api/wa-js/classes/whatsapp.CallCollection/index.html"},{"revision":"5b4074246bafbfb6d4e7f6b22ee502a3","url":"docs/api/wa-js/classes/whatsapp.CallModel/index.html"},{"revision":"29b6abd122e9c72bbee557fe8064d5b7","url":"docs/api/wa-js/classes/whatsapp.CallParticipantModel/index.html"},{"revision":"fbcc25d4f4783f636e8719c024a74f70","url":"docs/api/wa-js/classes/whatsapp.CartCollection/index.html"},{"revision":"2218a9003c18b9689b82849d41fe8b44","url":"docs/api/wa-js/classes/whatsapp.CartItemCollection/index.html"},{"revision":"2188730c88c665291ed6d501b645675f","url":"docs/api/wa-js/classes/whatsapp.CartItemModel/index.html"},{"revision":"0d0ddae7bd209b2397511334f3eecf32","url":"docs/api/wa-js/classes/whatsapp.CartModel/index.html"},{"revision":"9d991baa56da33c96f53e6bbe39c1940","url":"docs/api/wa-js/classes/whatsapp.CatalogCollection/index.html"},{"revision":"912eac86a2d6339b555e54ebbafa26ca","url":"docs/api/wa-js/classes/whatsapp.CatalogModel/index.html"},{"revision":"b33a53052ba871290d3980899ffca136","url":"docs/api/wa-js/classes/whatsapp.ChatCollection/index.html"},{"revision":"041d5959060333e97d3bdaba0d4f8b1f","url":"docs/api/wa-js/classes/whatsapp.ChatModel/index.html"},{"revision":"c371ac612edfecbe8511980560a19a91","url":"docs/api/wa-js/classes/whatsapp.ChatPreferenceModel/index.html"},{"revision":"caeff78ff184c123bad131ed1fcb04d8","url":"docs/api/wa-js/classes/whatsapp.ChatstateCollection/index.html"},{"revision":"caf855559ef098c60115dd29cb8cdf35","url":"docs/api/wa-js/classes/whatsapp.ChatstateModel/index.html"},{"revision":"4045ed43826715b1f9b0399e6c191772","url":"docs/api/wa-js/classes/whatsapp.ClockClass/index.html"},{"revision":"b2ee26ddafaa1c9d1b1908c5b8a9c01c","url":"docs/api/wa-js/classes/whatsapp.CmdClass/index.html"},{"revision":"938788ae2eb7e0b819305426df491748","url":"docs/api/wa-js/classes/whatsapp.Collection/index.html"},{"revision":"bc5e046d5bd1384ff960062cc416c05e","url":"docs/api/wa-js/classes/whatsapp.ConnModel/index.html"},{"revision":"1a8774eb1d3934e6f92cc0268776055e","url":"docs/api/wa-js/classes/whatsapp.ContactCollection/index.html"},{"revision":"a3c7777b3109966498f82733530e4acd","url":"docs/api/wa-js/classes/whatsapp.ContactModel/index.html"},{"revision":"6c3a01b508a5ebb4676814c8387e5060","url":"docs/api/wa-js/classes/whatsapp.ConversionTupleModel/index.html"},{"revision":"de6e642299e43fa4ffc9fa5c1ffb8b41","url":"docs/api/wa-js/classes/whatsapp.EmojiVariantCollection/index.html"},{"revision":"5cea2444f242eb87c7fb3b0975762743","url":"docs/api/wa-js/classes/whatsapp.EmojiVariantModel/index.html"},{"revision":"f41a9d324f789987682a65b78c05a6e9","url":"docs/api/wa-js/classes/whatsapp.EventEmitter/index.html"},{"revision":"68f25562433bf65980f89f1ea68a6822","url":"docs/api/wa-js/classes/whatsapp.GroupMetadataCollection/index.html"},{"revision":"b511754439cc2eb4ae3349e68b36d2bc","url":"docs/api/wa-js/classes/whatsapp.GroupMetadataModel/index.html"},{"revision":"6ca0f78f1643fd5f7794e4a21391a4dd","url":"docs/api/wa-js/classes/whatsapp.LabelCollection/index.html"},{"revision":"9665996b89887621c48d07591232ce75","url":"docs/api/wa-js/classes/whatsapp.LabelItemCollection/index.html"},{"revision":"e5b287bf6a699d80cd46743c2586ffbc","url":"docs/api/wa-js/classes/whatsapp.LabelItemModel/index.html"},{"revision":"c301d4e89aef55ce8fd2152445b5298c","url":"docs/api/wa-js/classes/whatsapp.LabelModel/index.html"},{"revision":"365f9a02d2538cefd9ea5645b12ce0fb","url":"docs/api/wa-js/classes/whatsapp.LiveLocationCollection/index.html"},{"revision":"649615e45449659884f2c0e8ac3230da","url":"docs/api/wa-js/classes/whatsapp.LiveLocationModel/index.html"},{"revision":"f338ee3755c4663da38e1f6488d0faac","url":"docs/api/wa-js/classes/whatsapp.LiveLocationParticipantModel/index.html"},{"revision":"4d9b2a07bf0391728d95f91e6e87e6a0","url":"docs/api/wa-js/classes/whatsapp.MediaBlobCacheImpl/index.html"},{"revision":"8b9bff1ebfdf05d94fa5e53ce4b7f4b0","url":"docs/api/wa-js/classes/whatsapp.MediaDataModel/index.html"},{"revision":"d2543c2676da0c639890aaade83cfaf4","url":"docs/api/wa-js/classes/whatsapp.MediaEntry/index.html"},{"revision":"cbf7e252bb9b42eecfc7c7e1a207cbcf","url":"docs/api/wa-js/classes/whatsapp.MediaObject/index.html"},{"revision":"f324cc4eb270d6eaf54654636575cc36","url":"docs/api/wa-js/classes/whatsapp.MediaPrep.MediaPrep/index.html"},{"revision":"b47218a465ecc93519a3e7e8baed4aa3","url":"docs/api/wa-js/classes/whatsapp.Model/index.html"},{"revision":"d95c09e508bfb1b6f634c7bd915eb70d","url":"docs/api/wa-js/classes/whatsapp.ModelChatBase/index.html"},{"revision":"32d00bb642ecb1a3784c94d38b62b797","url":"docs/api/wa-js/classes/whatsapp.MsgButtonReplyMsgModel/index.html"},{"revision":"2adb88d313954f0c9cf4d2ff5348319c","url":"docs/api/wa-js/classes/whatsapp.MsgCollection/index.html"},{"revision":"e1a568d5cfe772cfab3a1a07f275c103","url":"docs/api/wa-js/classes/whatsapp.MsgInfoCollection/index.html"},{"revision":"58439c78193b5b4f162b10479c115c98","url":"docs/api/wa-js/classes/whatsapp.MsgInfoModel/index.html"},{"revision":"ec240fdc584a429cf06e3cb690c07e9e","url":"docs/api/wa-js/classes/whatsapp.MsgKey/index.html"},{"revision":"bdbe0811f51eb5b7caec6b2bb0981108","url":"docs/api/wa-js/classes/whatsapp.MsgLoad/index.html"},{"revision":"f572ab675dd456c144a9ae573388eeec","url":"docs/api/wa-js/classes/whatsapp.MsgLoadState/index.html"},{"revision":"098c9cd48829f5d61d8217b1f057939d","url":"docs/api/wa-js/classes/whatsapp.MsgModel/index.html"},{"revision":"a1ef343d8eac46eb3a3b5822ab8a17d2","url":"docs/api/wa-js/classes/whatsapp.MuteCollection/index.html"},{"revision":"a20b8da268e136b5b184115bdb118187","url":"docs/api/wa-js/classes/whatsapp.MuteModel/index.html"},{"revision":"d8ac5d737a4b89ce99f1e0e9835fbca9","url":"docs/api/wa-js/classes/whatsapp.OpaqueData/index.html"},{"revision":"0e47a1c7639db2670a5300efa43c6b08","url":"docs/api/wa-js/classes/whatsapp.OpaqueDataBase/index.html"},{"revision":"3db59448d42cf8dab0d1ac03d0013a4a","url":"docs/api/wa-js/classes/whatsapp.OrderCollection/index.html"},{"revision":"775c30b962926d4a7b67f5134e1338d1","url":"docs/api/wa-js/classes/whatsapp.OrderItemCollection/index.html"},{"revision":"9ae09dcfae9b80ddf83fd2e4aab407f1","url":"docs/api/wa-js/classes/whatsapp.OrderItemModel/index.html"},{"revision":"a1561588b8ed0cf37b85ea9b1e139fa8","url":"docs/api/wa-js/classes/whatsapp.OrderModel/index.html"},{"revision":"e275d9b7a4f5e38116c78f33dd409edd","url":"docs/api/wa-js/classes/whatsapp.ParticipantCollection/index.html"},{"revision":"2cf4571b9230735623ef656a8c35afcc","url":"docs/api/wa-js/classes/whatsapp.ParticipantModel/index.html"},{"revision":"4039e85115abd4783318d0ebd915d2dc","url":"docs/api/wa-js/classes/whatsapp.PresenceCollection/index.html"},{"revision":"acafce8d482f5c27e815545ade6ed69d","url":"docs/api/wa-js/classes/whatsapp.PresenceModel/index.html"},{"revision":"3c743b511533f2898b659d0c6f7edd9a","url":"docs/api/wa-js/classes/whatsapp.ProductCollCollection/index.html"},{"revision":"68a4b090043ef5ecf550f372d1c07882","url":"docs/api/wa-js/classes/whatsapp.ProductCollection/index.html"},{"revision":"4518859a6e8567d4c23d3699c3b9801b","url":"docs/api/wa-js/classes/whatsapp.ProductCollModel/index.html"},{"revision":"71da7d7243880ba96138fd655d90945c","url":"docs/api/wa-js/classes/whatsapp.ProductImageCollection/index.html"},{"revision":"7f484fca926a9ae19a47f2546f8e5d30","url":"docs/api/wa-js/classes/whatsapp.ProductImageModel/index.html"},{"revision":"fbd3f7077fdbccb1cba56f681f3369b9","url":"docs/api/wa-js/classes/whatsapp.ProductMessageListCollection/index.html"},{"revision":"36f4733669a386cd86753e119e35b1a6","url":"docs/api/wa-js/classes/whatsapp.ProductMessageListModel/index.html"},{"revision":"68bbede2161ed22b3873d044f2ceea2a","url":"docs/api/wa-js/classes/whatsapp.ProductModel/index.html"},{"revision":"1853ccd0c86f2ab077dbef9e1816f2e4","url":"docs/api/wa-js/classes/whatsapp.ProfilePicThumbCollection/index.html"},{"revision":"5d210b337112d2713c6df60312f34f85","url":"docs/api/wa-js/classes/whatsapp.ProfilePicThumbModel/index.html"},{"revision":"8ad1579d50ba3f0edeeece247b44c183","url":"docs/api/wa-js/classes/whatsapp.QuickReplyCollection/index.html"},{"revision":"acca67a643fbd1aa29ea266556c4c172","url":"docs/api/wa-js/classes/whatsapp.QuickReplyModel/index.html"},{"revision":"6cb314154935672cbd515790654f582e","url":"docs/api/wa-js/classes/whatsapp.ReactionsCollection/index.html"},{"revision":"15088f2d05ef4990491f5ff53589e1c9","url":"docs/api/wa-js/classes/whatsapp.ReactionsModel/index.html"},{"revision":"d7822100c26d23151f19b13fb61d96c4","url":"docs/api/wa-js/classes/whatsapp.ReactionsSendersCollection/index.html"},{"revision":"777996d2ec7ec3c3add12a5fdfd67f30","url":"docs/api/wa-js/classes/whatsapp.ReactionsSendersModel/index.html"},{"revision":"816250b09cb6f76cdfaa2e0db337b8cf","url":"docs/api/wa-js/classes/whatsapp.RecentEmojiCollection/index.html"},{"revision":"2fa759a1691a88f98b5a019308480103","url":"docs/api/wa-js/classes/whatsapp.RecentEmojiModel/index.html"},{"revision":"f951723635c3aa5e01e544321529b400","url":"docs/api/wa-js/classes/whatsapp.RecentStickerCollection/index.html"},{"revision":"ac554b1e92be2559925532ef69c4ecd2","url":"docs/api/wa-js/classes/whatsapp.RecentStickerModel/index.html"},{"revision":"807d17436ac823882bc80ccd6bd0ca04","url":"docs/api/wa-js/classes/whatsapp.ReplyButtonModel/index.html"},{"revision":"177e0d3fc5ba1f50850752de91396acf","url":"docs/api/wa-js/classes/whatsapp.SocketModel/index.html"},{"revision":"281e0db2acc30965d6f40c613c9d0a93","url":"docs/api/wa-js/classes/whatsapp.StarredMsgCollection/index.html"},{"revision":"532e6e03e9d4662f79f4dea9d101f6ef","url":"docs/api/wa-js/classes/whatsapp.StarredStickerCollection/index.html"},{"revision":"7302ef57f2b9615dc7d8ef3f17123508","url":"docs/api/wa-js/classes/whatsapp.StatusCollection/index.html"},{"revision":"61e0470ccc5f049d3622d22e1a18bbac","url":"docs/api/wa-js/classes/whatsapp.StatusModel/index.html"},{"revision":"a54f784ae669ebf5c4872ce10e95add1","url":"docs/api/wa-js/classes/whatsapp.StatusV3Collection/index.html"},{"revision":"ea62719ade39f6eb5226a952ac99cfa9","url":"docs/api/wa-js/classes/whatsapp.StatusV3Model/index.html"},{"revision":"14532e81896bb9ae7ac89b14ff157218","url":"docs/api/wa-js/classes/whatsapp.StickerCollection/index.html"},{"revision":"f9483bec2161914b417aba91cff8947f","url":"docs/api/wa-js/classes/whatsapp.StickerModel/index.html"},{"revision":"2fd43fcc51bfad214a56967f2bfd9463","url":"docs/api/wa-js/classes/whatsapp.StickerPackCollection/index.html"},{"revision":"e681b1d0d1aba2981fc17ad313e28587","url":"docs/api/wa-js/classes/whatsapp.StickerPackModel/index.html"},{"revision":"b616579842c58610ed49147a53bb8807","url":"docs/api/wa-js/classes/whatsapp.StickerSearchCollection/index.html"},{"revision":"1ccc9870fc3968a7c9b30b65042945ef","url":"docs/api/wa-js/classes/whatsapp.StreamModel/index.html"},{"revision":"1ec393bdd84dfc3b0213aeb781f5e2f8","url":"docs/api/wa-js/classes/whatsapp.TemplateButtonCollection/index.html"},{"revision":"2e7c0033fa5ccd6fca490449c9f44141","url":"docs/api/wa-js/classes/whatsapp.TemplateButtonModel/index.html"},{"revision":"5d81a84131e2f541f701e47f8e903af6","url":"docs/api/wa-js/classes/whatsapp.UnreadMentionModel/index.html"},{"revision":"24c767f96f53b2e557287b242e1ca41b","url":"docs/api/wa-js/classes/whatsapp.WapClass/index.html"},{"revision":"f7e422f855f3409e09f60f32ea46e338","url":"docs/api/wa-js/classes/whatsapp.WebCallModel/index.html"},{"revision":"2e9b12ada66c80290a4231ce219e95d1","url":"docs/api/wa-js/classes/whatsapp.Wid/index.html"},{"revision":"fb69f4ecf370a26d4752ed5ac4fd659d","url":"docs/api/wa-js/enums/group.GroupProperty/index.html"},{"revision":"6599fbb5cab42a24d352cc8cb89f7071","url":"docs/api/wa-js/enums/whatsapp.enums.ACK_STRING/index.html"},{"revision":"f6018b840a77e9c03c61e62ec569e1f1","url":"docs/api/wa-js/enums/whatsapp.enums.ACK/index.html"},{"revision":"720895fec70279549a61fb123d6559df","url":"docs/api/wa-js/enums/whatsapp.enums.CALL_STATES/index.html"},{"revision":"478d722afa872c6422b71b5b73088afd","url":"docs/api/wa-js/enums/whatsapp.enums.EDIT_ATTR/index.html"},{"revision":"5e625e17d1f229c0d199df30476b5cfb","url":"docs/api/wa-js/enums/whatsapp.enums.GROUP_SETTING_TYPE/index.html"},{"revision":"c9f68b25b0208c515c3bce8470e1bd2a","url":"docs/api/wa-js/enums/whatsapp.enums.LogoutReason/index.html"},{"revision":"78d6e83178bec92cb072a71af188a83e","url":"docs/api/wa-js/enums/whatsapp.enums.MSG_TYPE/index.html"},{"revision":"1172a51de9eadd5730ef2bae9477183c","url":"docs/api/wa-js/enums/whatsapp.enums.OUTWARD_TYPES/index.html"},{"revision":"e6b6d78101f6bb6fd750296c1f24955d","url":"docs/api/wa-js/enums/whatsapp.enums.SendMsgResult/index.html"},{"revision":"83fc60527fb4bfd8e0b719553e67d17a","url":"docs/api/wa-js/index.html"},{"revision":"62dc035baff9818b05cad9df0600bf76","url":"docs/api/wa-js/interfaces/blocklist.EventTypes/index.html"},{"revision":"4508a869f361187c311986a2166f7ed9","url":"docs/api/wa-js/interfaces/chat.AudioMessageOptions/index.html"},{"revision":"fd55fe24cecabaa676d724ef3ba8a71b","url":"docs/api/wa-js/interfaces/chat.AutoDetectMessageOptions/index.html"},{"revision":"b3bc8a456b6f4d7ef2dcd7a922c29321","url":"docs/api/wa-js/interfaces/chat.ChatListOptions/index.html"},{"revision":"fb6bddafbcc5526ed0895347c7e8d097","url":"docs/api/wa-js/interfaces/chat.DeleteMessageReturn/index.html"},{"revision":"542eedca61a33648f7ca188d344ed58d","url":"docs/api/wa-js/interfaces/chat.DocumentMessageOptions/index.html"},{"revision":"358561f2175fbd5c06cfc36700ffd29e","url":"docs/api/wa-js/interfaces/chat.EventTypes/index.html"},{"revision":"20102f85ea514b287278a0a587624373","url":"docs/api/wa-js/interfaces/chat.FileMessageOptions/index.html"},{"revision":"057a66367a04a054d474be299fb534ab","url":"docs/api/wa-js/interfaces/chat.GetMessagesOptions/index.html"},{"revision":"f473abc1897d8010a96a0b05a08f41d1","url":"docs/api/wa-js/interfaces/chat.ImageMessageOptions/index.html"},{"revision":"0a18fdbf8c81c51318da85a6bada7148","url":"docs/api/wa-js/interfaces/chat.LinkPreviewOptions/index.html"},{"revision":"44309798c3717395afe10d94a047dc02","url":"docs/api/wa-js/interfaces/chat.ListMessageOptions/index.html"},{"revision":"57e1b0d9f69e760c7382020b5463f4c8","url":"docs/api/wa-js/interfaces/chat.LocationMessageOptions/index.html"},{"revision":"dae25109815a272e53ade8fc501fd3b6","url":"docs/api/wa-js/interfaces/chat.MessageButtonsOptions/index.html"},{"revision":"55b2e9cca1ec7cb047b593c59d634be0","url":"docs/api/wa-js/interfaces/chat.SendMessageOptions/index.html"},{"revision":"4c51c201e17fa4dcf7b3730937832bf8","url":"docs/api/wa-js/interfaces/chat.SendMessageReturn/index.html"},{"revision":"8876a4cfc381af5edc6cb9f58dfe6357","url":"docs/api/wa-js/interfaces/chat.StarMessageReturn/index.html"},{"revision":"9c21da87a58df9cd5c87c66f735dba91","url":"docs/api/wa-js/interfaces/chat.StickerMessageOptions/index.html"},{"revision":"63535e908b450ab2fa13454db507eefc","url":"docs/api/wa-js/interfaces/chat.VCardContact/index.html"},{"revision":"8f426febad40ed81d73cbea686ea9d93","url":"docs/api/wa-js/interfaces/chat.VideoMessageOptions/index.html"},{"revision":"caa229e206ffb5c91511b4e56fa95933","url":"docs/api/wa-js/interfaces/config.Config/index.html"},{"revision":"33869dac9779e49103bbc793e2a25f5b","url":"docs/api/wa-js/interfaces/conn.AuthCodeMultiDevice/index.html"},{"revision":"e5f5f69accff6889acefc43583372de7","url":"docs/api/wa-js/interfaces/conn.AuthCodeSingleDevice/index.html"},{"revision":"e31ccddc25d5b644e42e57912d7357ea","url":"docs/api/wa-js/interfaces/conn.EventTypes/index.html"},{"revision":"b9ac0d26624a58fabfaec5d190241fe9","url":"docs/api/wa-js/interfaces/contact.ContactListOptions/index.html"},{"revision":"63be853b6d9f6e5defa87c6617313c79","url":"docs/api/wa-js/interfaces/contact.EventTypes/index.html"},{"revision":"e3f8337dcaaeb3f9bc0877713d38a378","url":"docs/api/wa-js/interfaces/ev.BlocklistEventTypes/index.html"},{"revision":"8ae6c4db59dbf3a80941aff5cc229a22","url":"docs/api/wa-js/interfaces/ev.CallEventTypes/index.html"},{"revision":"4106f67bb31af842268945240817c59a","url":"docs/api/wa-js/interfaces/ev.ChatEventTypes/index.html"},{"revision":"441692a735e93ce7b77504e23dc36532","url":"docs/api/wa-js/interfaces/ev.ConnEventTypes/index.html"},{"revision":"2d4155115cc2059206c61adc44142eb0","url":"docs/api/wa-js/interfaces/ev.GroupEventTypes/index.html"},{"revision":"db6c506889e5f292aefab50a8e81bda6","url":"docs/api/wa-js/interfaces/ev.StatusEventTypes/index.html"},{"revision":"b0d874b85ffd241bc088c4716cd28359","url":"docs/api/wa-js/interfaces/ev.WebpackEvents/index.html"},{"revision":"22bdc18a5c010419bdd2661674087a71","url":"docs/api/wa-js/interfaces/group.EventTypes/index.html"},{"revision":"f2a323d93c21808ae0352ee0194aa2bc","url":"docs/api/wa-js/interfaces/labels.AddOrRemoveLabelsOptions/index.html"},{"revision":"a59fe66ef3cf795a89d384ada4605807","url":"docs/api/wa-js/interfaces/labels.DeleteLabelReturn/index.html"},{"revision":"6209825d824acc19af57eb57683e2fed","url":"docs/api/wa-js/interfaces/labels.EventTypes/index.html"},{"revision":"61d04e6dd11a32d2e39641de315b6e7d","url":"docs/api/wa-js/interfaces/labels.Label/index.html"},{"revision":"4d30d59158a65178f56b68f56926c03c","url":"docs/api/wa-js/interfaces/profile.EventTypes/index.html"},{"revision":"6904744a785d273cf99aa5a42e930b29","url":"docs/api/wa-js/interfaces/status.EventTypes/index.html"},{"revision":"78c15448dc8eafdefeeebcd5065aef27","url":"docs/api/wa-js/interfaces/status.SendStatusOptions/index.html"},{"revision":"040bc3a61733c90817a8c5fdd945f268","url":"docs/api/wa-js/interfaces/status.TextStatusOptions/index.html"},{"revision":"ae4ccdc6c5ffd78ed03f3231aba06cfc","url":"docs/api/wa-js/interfaces/whatsapp.functions.GroupActionChange/index.html"},{"revision":"150ed86bb49b6d0562c8a846ad18269c","url":"docs/api/wa-js/interfaces/whatsapp.functions.LinkPreviewResult/index.html"},{"revision":"76b8522d010655b3b23fcc678e32b7e7","url":"docs/api/wa-js/interfaces/whatsapp.functions.MsgFindQueryParams/index.html"},{"revision":"a7b96427389d08c4cf60c76711a7b5dd","url":"docs/api/wa-js/interfaces/whatsapp.functions.QueryGroupInviteResult/index.html"},{"revision":"7e1f7a4fb7b2377ad09bce291e2b194c","url":"docs/api/wa-js/interfaces/whatsapp.functions.ReactionData/index.html"},{"revision":"a499e92e046ebebf4518dc86c766d2bf","url":"docs/api/wa-js/interfaces/whatsapp.functions.SimpleAckData/index.html"},{"revision":"48063bcca23143af6ff9cdb0fc168d83","url":"docs/api/wa-js/interfaces/whatsapp.functions.ThumbnailData/index.html"},{"revision":"d875860669f2cd1c0ebcc7187adff02f","url":"docs/api/wa-js/interfaces/whatsapp.ModelOptions/index.html"},{"revision":"0dd94d46cd979e156086fc8edc755c17","url":"docs/api/wa-js/interfaces/whatsapp.PropsChatBase/index.html"},{"revision":"bdd3048342e1ff0a649d928181ffbded","url":"docs/api/wa-js/interfaces/whatsapp.SessionChatBase/index.html"},{"revision":"30a4a8e6ecf46c6a3befc9e17b76e586","url":"docs/api/wa-js/interfaces/whatsapp.VCardData/index.html"},{"revision":"a26e90fd624b3c9bb0837a4d1a7aa85f","url":"docs/api/wa-js/modules/index.html"},{"revision":"10ee484695b0bdae93316433ca3cce49","url":"docs/api/wa-js/namespaces/blocklist/index.html"},{"revision":"04d2d880e62b331ca44c9f9938de504c","url":"docs/api/wa-js/namespaces/call/index.html"},{"revision":"c0ae26e5dea727517f36851431976e93","url":"docs/api/wa-js/namespaces/catalog/index.html"},{"revision":"11eaed32589d544caed7eb95cc833d79","url":"docs/api/wa-js/namespaces/chat/index.html"},{"revision":"53f031daaf1891bb6c5540aae5201330","url":"docs/api/wa-js/namespaces/config/index.html"},{"revision":"b28b3fcb2f147ad15462c792092c0c1e","url":"docs/api/wa-js/namespaces/conn/index.html"},{"revision":"a58ee4c25e68e1e0e6432ab5ffdceaaa","url":"docs/api/wa-js/namespaces/contact/index.html"},{"revision":"21ef2680decca0b38b48d8982d2e3a6d","url":"docs/api/wa-js/namespaces/ev/index.html"},{"revision":"722db9e8fdb9cd57c269645511435ff2","url":"docs/api/wa-js/namespaces/group/index.html"},{"revision":"b32d8d7a83be767f3349572dcac3ac9d","url":"docs/api/wa-js/namespaces/labels/index.html"},{"revision":"0c1953f5836d61101b4a9cd1961a631f","url":"docs/api/wa-js/namespaces/profile/index.html"},{"revision":"b84e737e591315cc3842cd4d493b98b2","url":"docs/api/wa-js/namespaces/status/index.html"},{"revision":"99e1386482e32d51e7cdecc0ea0bf056","url":"docs/api/wa-js/namespaces/util/index.html"},{"revision":"d0dae7d05a0824b1f017fcce1c760a48","url":"docs/api/wa-js/namespaces/webpack/index.html"},{"revision":"681e2193e194c858112e9e39e5c2e2ea","url":"docs/api/wa-js/namespaces/whatsapp.Base64/index.html"},{"revision":"636cb6753d203b0c1e5bad81d9d0a757","url":"docs/api/wa-js/namespaces/whatsapp.Browser/index.html"},{"revision":"8ae543fdf7e338be7662340341d975f0","url":"docs/api/wa-js/namespaces/whatsapp.ChatPresence/index.html"},{"revision":"23e5967125159f64859571c0d33fdfff","url":"docs/api/wa-js/namespaces/whatsapp.contants/index.html"},{"revision":"d293e2e8f5d4be4d0f6bbe588624f6fa","url":"docs/api/wa-js/namespaces/whatsapp.enums/index.html"},{"revision":"5c6a838fa3d4a00df2ae33060f4ddd1b","url":"docs/api/wa-js/namespaces/whatsapp.functions/index.html"},{"revision":"e2a540230dc2149e0486d3ab4eac1750","url":"docs/api/wa-js/namespaces/whatsapp.ImageUtils/index.html"},{"revision":"69c24a6b9978e057d96dcfd275e04de8","url":"docs/api/wa-js/namespaces/whatsapp.MediaObjectUtil/index.html"},{"revision":"a7f19906bb3272324c1144cbf1f76b26","url":"docs/api/wa-js/namespaces/whatsapp.MediaPrep/index.html"},{"revision":"3e252ee524dc692f51136a59d8731666","url":"docs/api/wa-js/namespaces/whatsapp.MediaUtils/index.html"},{"revision":"e4202dc88ddb664703368ec8a0608b1e","url":"docs/api/wa-js/namespaces/whatsapp.multidevice.adv/index.html"},{"revision":"15d2a9f37440aabc02ed35b6f120a8d3","url":"docs/api/wa-js/namespaces/whatsapp.multidevice/index.html"},{"revision":"9062b2f8c99f2235dd5436fe667fd1e8","url":"docs/api/wa-js/namespaces/whatsapp.UserPrefs/index.html"},{"revision":"50a8ff9be1246477b79105748b9e1163","url":"docs/api/wa-js/namespaces/whatsapp.VCard/index.html"},{"revision":"edda8f98e3aa0b74bc547a1cf62e4acb","url":"docs/api/wa-js/namespaces/whatsapp.WidFactory/index.html"},{"revision":"846826d15623d020fd1eb78cd680c69a","url":"docs/api/wa-js/namespaces/whatsapp/index.html"},{"revision":"78d74598582ef51d558b678a81f47fd4","url":"docs/api/wa-version/index.html"},{"revision":"ba4f9a7238cc23d97be83b2ebaee8681","url":"docs/api/wa-version/interfaces/WaVersionInfo/index.html"},{"revision":"2f5a7eb167e0c7e79683001111d723c9","url":"docs/api/wa-version/modules/index.html"},{"revision":"a241aa9b724f7ce04ef5c5c0efb797fb","url":"docs/api/wa-version/namespaces/constants/index.html"},{"revision":"40ab08b7293778c4aa5f2f105c2664bb","url":"docs/tutorial/basics/basic-functions/index.html"},{"revision":"71d23310f8913d4cd1d9c572e4da2c8c","url":"docs/tutorial/basics/configuring-logger/index.html"},{"revision":"ae63d56da4f7c3d7dd6ab265613c615a","url":"docs/tutorial/basics/creating-client/index.html"},{"revision":"985dafe745368baddfe527ac62e254d3","url":"docs/tutorial/basics/installation/index.html"},{"revision":"57e2045613cb58d382b31bc3fa3067bc","url":"docs/tutorial/basics/receiving-messages/index.html"},{"revision":"4431bf2331c87b4b4349a3248247d75b","url":"docs/tutorial/intro/index.html"},{"revision":"ed3eca6d476a5ee9545ce21de4cde6bd","url":"google30fb78658b6dbb6c.html"},{"revision":"236163aec9bdc815dc7486650e3a8c79","url":"googlef129bd5eb80b346c.html"},{"revision":"24d75c0946f954e27faaf487e0ee300d","url":"index.html"},{"revision":"505a0b65c31974e1c9b6bb9090ba9247","url":"manifest.json"},{"revision":"57bd8aa7e628881839cae3d8547bdb44","url":"search/index.html"},{"revision":"3e777dbbf33de2f2307ed59a81da42e7","url":"swagger/wppconnect-server/index.html"},{"revision":"d5276598b995907e13bc9419a89c64dc","url":"assets/images/boy-image-0ee58a6a9928587b8fae998188e26499.png"},{"revision":"d252db525dec5ed7407e2ca790fd49a5","url":"assets/images/business-3d-businessman-and-coffee-21259a47e7f41b5d7fe3eff42509fbb8.png"},{"revision":"4c3f82723fbc7ee72758a4d53e34b89c","url":"assets/images/business-3d-businessman-walking-acd0f81b4613be936a0e402466460490.png"},{"revision":"dd519d95d291878f83ef846333183526","url":"assets/images/image-notebook-hero-ea9f03181f11bece389462f4476e17b8.png"},{"revision":"1e103cfd112d8ec6782f3e1ad5fb6fb6","url":"assets/images/notebook-docker-3160c9c7479aea8e72257f7af617e572.png"},{"revision":"5829be7f1aaa4d1a6d38dda1c632a470","url":"assets/images/notebook-future-9c1f820c143db2abd666a2b07a902e48.png"},{"revision":"9f9678d96e975c9fd879be582a973d58","url":"assets/images/smile-emoji-eb8aa4d0bed16bfefd8a57101895544f.png"},{"revision":"52e48d52adbca7edd2d023ba3f04d8a1","url":"assets/images/wppconnect-banner-d5a99fa83ce99a35a67fa1004c1ee4a0.jpeg"},{"revision":"e609198ea391bad23d85884c64481f9c","url":"favicon.ico"},{"revision":"30ec2602a913e570b715053795c8078e","url":"img/android-icon-144x144.png"},{"revision":"ec7b33d4c9bc6e8a8b5f740d67d71a7a","url":"img/android-icon-192x192.png"},{"revision":"9a534d8e3bd45268c994d165b3f59a7c","url":"img/android-icon-36x36.png"},{"revision":"74d0206179a7d08fc9f711bb3f8f1c11","url":"img/android-icon-48x48.png"},{"revision":"d05b61a8831fddd218185065f1a1f991","url":"img/android-icon-72x72.png"},{"revision":"28277bcd3ea9f611ff96e5afa59b03ec","url":"img/android-icon-96x96.png"},{"revision":"109148575aadfebcdc4dc9cb0ab51ef8","url":"img/apple-icon-114x114.png"},{"revision":"8b23f85688f098b90d34c7ebd9f5f7b7","url":"img/apple-icon-120x120.png"},{"revision":"30ec2602a913e570b715053795c8078e","url":"img/apple-icon-144x144.png"},{"revision":"551d03badd5871022dda2cfc45e8ced2","url":"img/apple-icon-152x152.png"},{"revision":"c86314052d596b72169ebf9ea2cdd256","url":"img/apple-icon-180x180.png"},{"revision":"3e4dd9973aeeba9e9440d462c4e125ba","url":"img/apple-icon-57x57.png"},{"revision":"0d87b2ec452ae85b66bbd313f9263cb6","url":"img/apple-icon-60x60.png"},{"revision":"d05b61a8831fddd218185065f1a1f991","url":"img/apple-icon-72x72.png"},{"revision":"08610e53f8b51629558e466ebfa7f4d2","url":"img/apple-icon-76x76.png"},{"revision":"ebbcca8bce3df96c60c6e6dd7951b67f","url":"img/apple-icon-precomposed.png"},{"revision":"ebbcca8bce3df96c60c6e6dd7951b67f","url":"img/apple-icon.png"},{"revision":"75c05a5f20c84753138bd0c846e9ef3d","url":"img/favicon-16x16.png"},{"revision":"5543eec2de64f2a67c741012ab0431e0","url":"img/favicon-32x32.png"},{"revision":"28277bcd3ea9f611ff96e5afa59b03ec","url":"img/favicon-96x96.png"},{"revision":"e609198ea391bad23d85884c64481f9c","url":"img/favicon.ico"},{"revision":"a9346a9fce91c5298f9e0f143c89ff01","url":"img/logo192.png"},{"revision":"7bdf6227323a01a73d4e1d26b75a97a3","url":"img/logo512.png"},{"revision":"30ec2602a913e570b715053795c8078e","url":"img/ms-icon-144x144.png"},{"revision":"65d04280c602bf71bf2166b39e6d0097","url":"img/ms-icon-150x150.png"},{"revision":"775fdb86a60b944051becf7554b61113","url":"img/ms-icon-310x310.png"},{"revision":"49ceef4cd6b8d94e45db35db84ce7fa6","url":"img/ms-icon-70x70.png"},{"revision":"a6b83d7b4c3cf36cb21eb7a9721716dd","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"b64ae8e3c10e5ff2ec85a653cfe6edf8","url":"img/undraw_docusaurus_react.svg"},{"revision":"8fa6e79a15c385d7b2dc4bb761a2e9e3","url":"img/undraw_docusaurus_tree.svg"},{"revision":"52e48d52adbca7edd2d023ba3f04d8a1","url":"img/wppconnect-banner.jpeg"}];
    const controller = new workbox_precaching__WEBPACK_IMPORTED_MODULE_0__.PrecacheController({
        // Safer to turn this true?
        fallbackToNetwork: true,
    });
    if (params.offlineMode) {
        controller.addToCacheList(precacheManifest);
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: addToCacheList', { precacheManifest });
        }
    }
    await runSWCustomCode(params);
    self.addEventListener('install', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: install event', { event });
        }
        event.waitUntil(controller.install(event));
    });
    self.addEventListener('activate', (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: activate event', { event });
        }
        event.waitUntil(controller.activate(event));
    });
    self.addEventListener('fetch', async (event) => {
        if (params.offlineMode) {
            const requestURL = event.request.url;
            const possibleURLs = getPossibleURLs(requestURL);
            for (const possibleURL of possibleURLs) {
                const cacheKey = controller.getCacheKeyForURL(possibleURL);
                if (cacheKey) {
                    const cachedResponse = caches.match(cacheKey);
                    if (params.debug) {
                        console.log('[Docusaurus-PWA][SW]: serving cached asset', {
                            requestURL,
                            possibleURL,
                            possibleURLs,
                            cacheKey,
                            cachedResponse,
                        });
                    }
                    event.respondWith(cachedResponse);
                    break;
                }
            }
        }
    });
    self.addEventListener('message', async (event) => {
        if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: message event', { event });
        }
        const type = event.data?.type;
        if (type === 'SKIP_WAITING') {
            // lib def bug, see https://github.com/microsoft/TypeScript/issues/14877
            self.skipWaiting();
        }
    });
})();

})();

/******/ })()
;
//# sourceMappingURL=sw.js.map