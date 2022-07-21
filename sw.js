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
    self['workbox:core:6.5.2'] && _();
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
            response = await handler.fetch(new Request(request, {
                integrity: integrityInRequest || integrityInManifest,
            }));
            // It's only "safe" to repair the cache if we're using SRI to guarantee
            // that the response matches the precache manifest's expectations,
            // and there's either a) no integrity property in the incoming request
            // or b) there is an integrity, and it matches the precache manifest.
            // See https://github.com/GoogleChrome/workbox/issues/2858
            if (integrityInManifest && noIntegrityConflict) {
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
    self['workbox:precaching:6.5.2'] && _();
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
    self['workbox:routing:6.5.2'] && _();
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
    self['workbox:strategies:6.5.2'] && _();
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
    const precacheManifest = [{"revision":"00a26eb166768a664f816a71b9dc391c","url":"404.html"},{"revision":"92c6ef858c745f310eb4c7df5761d957","url":"assets/css/styles.6eb29808.css"},{"revision":"958c2cc75fc390f15b9899aef3c10e2b","url":"assets/js/00172073.c007879f.js"},{"revision":"0db70c3e55d6117acd359be3d5c0aa83","url":"assets/js/01a85c17.87c4c386.js"},{"revision":"9a79aae1bba95c75cef70854874ffbd1","url":"assets/js/025d59ef.bb88c93d.js"},{"revision":"ae207807ea839fcf00879f3944121033","url":"assets/js/02733c6c.b94297da.js"},{"revision":"a0137927e92b7623be1ae2c173a91c6e","url":"assets/js/039dd2c7.285119ef.js"},{"revision":"286b54836739aa06454fc84b6ae2ff0a","url":"assets/js/03c710bc.9e77c4f2.js"},{"revision":"388ed68505598c4281a9769510bcdbf4","url":"assets/js/046488a7.09f558c4.js"},{"revision":"5d43e35211cb75e69c367d92cbdba458","url":"assets/js/053ae94d.45d553e0.js"},{"revision":"d2c32c1611769363088db05cef44aa73","url":"assets/js/06790a8b.836dfc6d.js"},{"revision":"ceda3ace262a684208c8bf0771d75564","url":"assets/js/06e3d6d2.30cc12f1.js"},{"revision":"bab0c93bed3e8bfb8b6c8fb4f4bae1f4","url":"assets/js/0745e1ff.2e704a4c.js"},{"revision":"d4a733109551f80856f61e18f296119a","url":"assets/js/085e67ff.4e058b39.js"},{"revision":"0f3563e1d39b735d64ae2d0e6f795fb4","url":"assets/js/0869cb23.8102c8a3.js"},{"revision":"fc83b5e988dbe02fc4caab41bb98af2d","url":"assets/js/08c64aeb.2a6d732d.js"},{"revision":"67fe7d87e42f89a87f14ed8e3d7abd0a","url":"assets/js/098573c7.5b2cddf8.js"},{"revision":"75ee8fe40ccd84ce38adacf9e4740149","url":"assets/js/09bfb330.eb1a3946.js"},{"revision":"4d76308e231f1abddffa85cbf4bc4c4c","url":"assets/js/0cbf5789.c9f0fe8b.js"},{"revision":"82d0869334a195f7776f3640f5d80856","url":"assets/js/0db6b6f3.4db96c8a.js"},{"revision":"b63ae5f7336fce1c4cbce8158fe0e785","url":"assets/js/0dd2f718.5209cb18.js"},{"revision":"5ff8380aba9e70f7b41a6f8c1c6144ea","url":"assets/js/0e500ae3.1ddf0c93.js"},{"revision":"5b584dfb0c4c171f6daa19548ca9dca9","url":"assets/js/0eb05062.c1ff71ee.js"},{"revision":"c7fc16805caa7400ea7db116ba6d59b3","url":"assets/js/0ef49e63.5de4227b.js"},{"revision":"aa35a81b91557f1b0ad6ac2a4956effc","url":"assets/js/0fc9e51b.ba134eb4.js"},{"revision":"eb301788f426176a14706c9e48c37a7f","url":"assets/js/10b6779e.ba35d748.js"},{"revision":"728d113c5fbaccf3c28f6e45c7784e82","url":"assets/js/13b7bfa6.d928ba87.js"},{"revision":"79f9382cbdf2e0a71a1b9379b2dc27c1","url":"assets/js/13d86c27.887716f6.js"},{"revision":"a8600210adcfa04090dcecb34d60fc9f","url":"assets/js/13e6ac9a.06ab623a.js"},{"revision":"4a1bffe3b02c88d4b0626d903f25a87e","url":"assets/js/14eaf3dd.45597014.js"},{"revision":"e89a888e2cb02aeeb786cb07fdd3e463","url":"assets/js/1534a0cc.9f17ccac.js"},{"revision":"ededb6d4a039a50f1a300cee3644de9e","url":"assets/js/16e8c96b.ca985657.js"},{"revision":"8744ddad8b0e383d73534d07100bfa07","url":"assets/js/17896441.1cc09ad2.js"},{"revision":"ad122e4a97763860b9c4d54f1660ed87","url":"assets/js/17a04ce2.e73004fc.js"},{"revision":"eb887ec77a35ca43db083965fc139e6b","url":"assets/js/17d28164.c71a1523.js"},{"revision":"4ae4ca019eab72e90fe0342cc2137116","url":"assets/js/18d47402.a225cdc3.js"},{"revision":"0343029594df8b93573f3c4d8e97575b","url":"assets/js/1a4e3797.c4224d7c.js"},{"revision":"c0c31a026eb4ac24bdfa10d49840b52d","url":"assets/js/1be78505.fb2c1593.js"},{"revision":"e7a9092ef1d8dad02ac77e6daa789d34","url":"assets/js/1c7d93d5.e61ce62a.js"},{"revision":"f7fde1213db40d0597c48be375dd9926","url":"assets/js/1cfb3d52.18e5dea6.js"},{"revision":"0278ed6f4ec17d533e24a1616ee293e2","url":"assets/js/1d88e44d.bc0adac8.js"},{"revision":"c8217108119fc0a6d31cf5ddbd83c23b","url":"assets/js/1da34892.3e9773c6.js"},{"revision":"973bafab15143d74e2d3e23ef02ff18d","url":"assets/js/1df93b7f.6dc8766a.js"},{"revision":"cc7b5c0c9c5764fa2b9e168cb45496e4","url":"assets/js/1e1076f2.6e4dc5ea.js"},{"revision":"4654eebaa39c8827cfa6ab2f390e8089","url":"assets/js/1ecc37b4.1c1f4f05.js"},{"revision":"9a4c8daeb032db264559827f4bf20075","url":"assets/js/1f4ab3e5.f475f7f2.js"},{"revision":"22fab18b857ce6b5f6032675bc298724","url":"assets/js/1f6fefb1.ab502cc2.js"},{"revision":"961e1af99d30bc29e78facb5653d76fa","url":"assets/js/1fd3b633.77444da7.js"},{"revision":"775995f74b2de17fb0c573e0fb2ee899","url":"assets/js/2010ae57.8fbcda21.js"},{"revision":"ec1a372586da4716e5937e6604967492","url":"assets/js/2047aa8f.857b3bcb.js"},{"revision":"2d4470216941729c6500deb02400fd7f","url":"assets/js/20af6d28.f2e684f0.js"},{"revision":"5ac7489762730651bde5275e4df86797","url":"assets/js/2125.e4b6fb27.js"},{"revision":"b648c12b542b6e202afa5fc7c5c8bdc2","url":"assets/js/21821312.995f460c.js"},{"revision":"aebd081db0073c3e8ab21c6942672305","url":"assets/js/22df419e.feb55921.js"},{"revision":"edfa717991f403744702ed7e021d56b9","url":"assets/js/230.5e66593a.js"},{"revision":"efda1bacf316fd784ee3fd34ba88dfd8","url":"assets/js/241f2452.8b0a5235.js"},{"revision":"a5010302e908038e0dc4c22314cdc682","url":"assets/js/242b04c1.6d889353.js"},{"revision":"fdcf83238d3e8ec74f6f2378ea977d32","url":"assets/js/252f9594.2a02a58e.js"},{"revision":"f6ef80d193013ed7893976a115a31622","url":"assets/js/27432403.2e1099b7.js"},{"revision":"4df5819132ef60f55599e9f89844d7b6","url":"assets/js/2803e6ad.5af41218.js"},{"revision":"48b3674f3e5a982e21d3eda8d1f9620f","url":"assets/js/29ff3bf2.bd0f495d.js"},{"revision":"8604c49583611138bc46bf6df3fb40fd","url":"assets/js/2b09ff95.5fcb2d9e.js"},{"revision":"2a092392d173839e991a140bdf755356","url":"assets/js/2c1c3924.45511e72.js"},{"revision":"25d6c86f2d22012e96b1f365dea9a7c2","url":"assets/js/2c8d0f78.eaff0384.js"},{"revision":"938400573c1fa8a5c132c869ac337fee","url":"assets/js/2cabe19e.c08f7819.js"},{"revision":"7c2c10644ee07da92b79036aaaf2971a","url":"assets/js/2dcc784b.b75f91ad.js"},{"revision":"ecb81a25035c4c29c6c50dd0f67fd0d7","url":"assets/js/2e1ea7b0.0fb861ef.js"},{"revision":"fdeec7fb0f2315abfd36174edbd70d94","url":"assets/js/2e638813.9e5c199b.js"},{"revision":"43a3a0edb9be763919cc7665e8cd1e99","url":"assets/js/2e854b47.f2883ab2.js"},{"revision":"4731e88f981409df78c020b018bf121b","url":"assets/js/2f2b5bf0.0e24363b.js"},{"revision":"6e3ee1457df6b7f9624b5bea39a8331f","url":"assets/js/2f8ded00.1952b3a1.js"},{"revision":"60ef98ba724ea914023ad1723e167d10","url":"assets/js/30379573.19f1ec01.js"},{"revision":"6f04017f3888a4ef96e3c29933ae87d3","url":"assets/js/30a24c52.cffa3366.js"},{"revision":"77da5adcd4b5e2e07257ee49e387029f","url":"assets/js/3103b090.ba962b08.js"},{"revision":"8a524e54eac0e29748c4a6688a8644a5","url":"assets/js/32dcba7f.903ecfa0.js"},{"revision":"aafca8be0f1625aab85921ddbe62b20e","url":"assets/js/337c5016.60d08b64.js"},{"revision":"852253261bffee1656aa8d854bd294b9","url":"assets/js/3527.c08825b0.js"},{"revision":"2a64c97d46ad5891934ef6bcc3fbee84","url":"assets/js/355c046e.4ac6b38c.js"},{"revision":"fca27aedb983e2bee5656d69f4995b30","url":"assets/js/362355b9.220bad0f.js"},{"revision":"3a2028d271d205ce493c87282ef48407","url":"assets/js/36282669.d76121c9.js"},{"revision":"80a845690b2e20b3137edf004ec53432","url":"assets/js/366dbc8e.af017875.js"},{"revision":"f9432f3ce09595aa4ba4c33a9c2a84ed","url":"assets/js/388b0277.3324ae2d.js"},{"revision":"6abc61d433f515a6f17feab7ac3ca49f","url":"assets/js/39567e86.e332ce90.js"},{"revision":"37384a5f4349f0f5923ced84b9f4efe4","url":"assets/js/3c0faf67.2e93f812.js"},{"revision":"25d6399ef926a9acfab87bcdff200bcf","url":"assets/js/3d586560.7263093b.js"},{"revision":"071eb85e5481b178803c6b7c37838f90","url":"assets/js/3dd774a7.3da86102.js"},{"revision":"3ae04172c8eb7b2ccb6b60b2fccbd05d","url":"assets/js/3eebcea2.eab4ea5f.js"},{"revision":"40fed963f3303c2430400489574ba602","url":"assets/js/3fe44cac.fce4e272.js"},{"revision":"602cdad71fa1b9025f7a31e565863386","url":"assets/js/4167803b.92c70a21.js"},{"revision":"5e6c8a0060c086b068532dda2f961826","url":"assets/js/41f86a93.23425e07.js"},{"revision":"91232fac98731f91b146612a6185210c","url":"assets/js/43096ccf.49939384.js"},{"revision":"47805483d4620f52150c3271b4aad79f","url":"assets/js/44823fa9.9a6d2808.js"},{"revision":"ee8cf87a2de25a7731ff7a4489973f96","url":"assets/js/454b0f72.ad2f8913.js"},{"revision":"faebb8ab488ed1b2f172d810ef0c3211","url":"assets/js/46dc0b0e.6bbcc7db.js"},{"revision":"b964255b34f9a6044de47fa893abbf72","url":"assets/js/4794f43e.e7e533b3.js"},{"revision":"2420964c49af51098f6e9c5fd61ecbef","url":"assets/js/47a6c6ab.7d80ada8.js"},{"revision":"582a3b955ac099134a8eaa1aeb59a461","url":"assets/js/485a8cc8.fb02c1d5.js"},{"revision":"4da9b374361264ea3b1579a606fd53bc","url":"assets/js/4880b420.818ca761.js"},{"revision":"2e222ec1baef5e995e75faab2c18a735","url":"assets/js/4972.0274acb5.js"},{"revision":"0d34119c1fae2b8b5a189abe95f99ad3","url":"assets/js/497e9810.a7b13da2.js"},{"revision":"ef5138ab8d4ace99310612036cc7b565","url":"assets/js/4a765ec0.b549cf4a.js"},{"revision":"fa5cebb5f1d6a33652aa525d2eeb82ad","url":"assets/js/4ae7c48b.f7b80c31.js"},{"revision":"ea23591e0fab1afe43750d773b5dccf5","url":"assets/js/4cede956.2ea9c785.js"},{"revision":"c078994b05694745fedf4c8f72a839f8","url":"assets/js/4d6e2ffd.fa2f35d9.js"},{"revision":"d303de895daca8b2e7077e0affd1e4ed","url":"assets/js/4da77be0.0de30bb4.js"},{"revision":"58f4a30fe5cebb2a66b25b3ed96dea8c","url":"assets/js/4e22dfac.8f5b7bcb.js"},{"revision":"bd27cd0d80b9dedd315a4364c5a655ee","url":"assets/js/4e7859bf.096885e5.js"},{"revision":"ee37e1e04b7c65372dcda3828b1b3e0e","url":"assets/js/4f8ef998.dbf0a520.js"},{"revision":"8f3d91b5d9e70822e0928a177021da4c","url":"assets/js/4fd5a9e1.04815db4.js"},{"revision":"c37b50a48b68418b6f0a87848e970d32","url":"assets/js/503aa524.3a2b0b26.js"},{"revision":"63cbf9430760da151911ac8889994308","url":"assets/js/50796e2a.6d4f28b7.js"},{"revision":"7e676c3b5a0a38a92b520359e322f35c","url":"assets/js/50ccd330.5d6cc573.js"},{"revision":"4d3633f11ed710c2036d51426fda13d3","url":"assets/js/5131.87933049.js"},{"revision":"dfcd928a54aab523d90a9b1efece3525","url":"assets/js/51a82071.7ebda348.js"},{"revision":"0966732498189083c25138a83f3b3fd0","url":"assets/js/52540353.2b7b00da.js"},{"revision":"cba50e40e726b9f0eb7e0e234ddbb08c","url":"assets/js/5283.1e636339.js"},{"revision":"a2de0340e4e8bf223b117eed6c5f0e93","url":"assets/js/54638a79.7698021f.js"},{"revision":"1a2da62e90bec980bcb8242adf31dd8c","url":"assets/js/551083d7.cbeaf590.js"},{"revision":"7e89931106d290b144c55af96503af07","url":"assets/js/5525.184b0f4d.js"},{"revision":"3484ac844953d2e573e5f0b9deae27ce","url":"assets/js/56594b00.07e0aab0.js"},{"revision":"8944daa5f6f635e70e57332a8dc74a3f","url":"assets/js/589235c8.55bbba19.js"},{"revision":"da3ffcd885777f0bf9d2591d546faf46","url":"assets/js/595442a6.70e4ada4.js"},{"revision":"3435d62508985261a14cdc2172d2122a","url":"assets/js/5c4b22df.9be6c84c.js"},{"revision":"ed7ba253cfdf1e6d50da31a99ae8f2af","url":"assets/js/5c5f0a59.9d51c289.js"},{"revision":"c19c490a4c2bc6f80b06fe2dcf37541b","url":"assets/js/5ce4fa04.adb06fe9.js"},{"revision":"681a31515e5fe9f140fa5209eb373e1b","url":"assets/js/5e855279.8174b44e.js"},{"revision":"1076b2d122b796f745d23e619afe4d96","url":"assets/js/5e8c322a.b5c0cf57.js"},{"revision":"61494ccb0a042e4b14788e59159abae8","url":"assets/js/5f3af9ad.3d2e70a4.js"},{"revision":"61f89d01f12eba02dba14f47d62514ac","url":"assets/js/5fa57016.30926284.js"},{"revision":"6aca1166a24b2f8cdbd8bee438087737","url":"assets/js/5fed7236.c3710d81.js"},{"revision":"a90b79c732f48fde15de1cd9bfecbc8f","url":"assets/js/6048.5f45473f.js"},{"revision":"e57930641711990f627cfc1df32958d1","url":"assets/js/604b4414.a289df95.js"},{"revision":"54b28751734104eb31dbf246b5dd071c","url":"assets/js/6050a84c.5ea38169.js"},{"revision":"7ee2d02f1b82b82860b645dd415911e3","url":"assets/js/608ae6a4.12bb01e8.js"},{"revision":"fe4852d744e7e06f9d7b40ffd903b372","url":"assets/js/60f53af6.50b09c77.js"},{"revision":"edf06cfb6528cb26ab0b557d1535e199","url":"assets/js/610834a4.623d5acd.js"},{"revision":"d34dae6cd0e4457486fb8144dab3d166","url":"assets/js/6178ffef.2d24db89.js"},{"revision":"caa00b82f56444dd2aefc19249227c46","url":"assets/js/63c9ca0e.f3dafc7c.js"},{"revision":"6af4284e81b177e94a8b769ec2546853","url":"assets/js/6427fb77.c0cc6d11.js"},{"revision":"60776425ec97a772984cbe6927efd60d","url":"assets/js/65007785.1d7760a7.js"},{"revision":"bc62d1b2d5aca952966bdcb188614a49","url":"assets/js/6593d481.941e34c5.js"},{"revision":"193f8c6bf89eb546f9b2e5da23d4fc6e","url":"assets/js/65ac6523.7be24eee.js"},{"revision":"d3f27156d0a50182c559bb7e47a6eeab","url":"assets/js/65b87958.4a7c4437.js"},{"revision":"65694304082191fd8858dc57b7641bd6","url":"assets/js/662a8d47.fdd9757a.js"},{"revision":"4bf7705df10e068506ac1c04fb98ebd9","url":"assets/js/66406991.bf3fe87b.js"},{"revision":"aa3b45b58974117d4899ddad4d9e5db7","url":"assets/js/68122b44.3c8eb1c5.js"},{"revision":"9899fbec4bdc466f6e5f5f4375d806a2","url":"assets/js/6875c492.0d9d2dea.js"},{"revision":"b35da10910a2ccd6af651c8e4638b279","url":"assets/js/6925ce22.c9c6a271.js"},{"revision":"fc69915eb29502834783c96192857b22","url":"assets/js/69b4bdac.9e7fc73a.js"},{"revision":"8e9f81e86114508e16a945ea1a3a132f","url":"assets/js/6bce7362.3cf0751b.js"},{"revision":"52127db1eab5ae08de2d45d5dc80317f","url":"assets/js/6c456125.48f63d25.js"},{"revision":"8b01687dc0dc0942d67cabc9dcd25009","url":"assets/js/6c601b0f.f58a6fce.js"},{"revision":"83a8b3143ddd54fa21e921f19280a251","url":"assets/js/6ce81239.83805533.js"},{"revision":"e2be0a74fe68e36855653ab4f7938103","url":"assets/js/6d4f0d81.df661233.js"},{"revision":"cabafe48622ff150b66ae73405bcf555","url":"assets/js/6d61591a.a4e3d23a.js"},{"revision":"8d8edeaf15425b1969a1fe4976ff2674","url":"assets/js/6e576eaf.40fc38de.js"},{"revision":"8b8e0cf4966cb8498af035ca4545c562","url":"assets/js/6f033260.e17ad412.js"},{"revision":"48decd6efe08fc491c54c214b8e7e7f3","url":"assets/js/7036.10e1c232.js"},{"revision":"7599a7796966928de39923d18f960482","url":"assets/js/7201d838.f74ff816.js"},{"revision":"20f815874acdbf59b83621ee158d29de","url":"assets/js/72933df8.2aafbe3f.js"},{"revision":"e958bf9744163003212b7738ae105334","url":"assets/js/731e4fc5.e19cc60d.js"},{"revision":"57525e498aaa44562969e61e7f224abd","url":"assets/js/73c2c7ac.d2cfdf0b.js"},{"revision":"d4ca9c8d0f35f87e5f9a5b3c425f6bac","url":"assets/js/7496195e.4705d505.js"},{"revision":"6ed4f468770ee1d13dc2dc6b747fb156","url":"assets/js/76189c01.49312267.js"},{"revision":"8b51dc9f69151be0a1e2710cf73f52fb","url":"assets/js/774d5825.f41f1581.js"},{"revision":"e7cfa68bdfeca631bb8882d709838784","url":"assets/js/77bc0ffc.24852062.js"},{"revision":"44778c53d32879905369c91507ec630a","url":"assets/js/77caf1fa.3b62ead0.js"},{"revision":"0c533952a6681fec5cbe523cf83a1d6f","url":"assets/js/780fcf45.12d7644b.js"},{"revision":"b7b7141fe731804ef668f6c8ffb91cdf","url":"assets/js/787015b9.2bd3c7d6.js"},{"revision":"b5357e6e16b380412f44ca71a7969e2d","url":"assets/js/791fdca8.43d9ffbc.js"},{"revision":"f7efd9f84d4a1dca3d4a607830f096e5","url":"assets/js/79be306d.eae16741.js"},{"revision":"3a1fe2d002d5421d9ef76d1023687a18","url":"assets/js/7bc1b8cb.c53a4b7b.js"},{"revision":"0bfe3a69e6dc490e75087e764b752ad2","url":"assets/js/7c0f2c3f.9b0831a4.js"},{"revision":"9cc632d178d70df0f9e7b286c30d4cc8","url":"assets/js/7ca6b6be.d5bad98c.js"},{"revision":"feafca54003d6ef072ae0952d819ff7d","url":"assets/js/7d149f5a.b4302da9.js"},{"revision":"2105859b0cc68d6bfce3ed8eb8b80a9b","url":"assets/js/7d9726a8.63ea6077.js"},{"revision":"8b81810e02408a4bf52e253a407e068e","url":"assets/js/7d97355e.f496334e.js"},{"revision":"6d0f689cc9274e80e0b5ac98d83236f9","url":"assets/js/7ddfed32.f1fbfc5c.js"},{"revision":"c2f82d317ad68571e765826aba7d9bc8","url":"assets/js/7f9b9f83.5821e985.js"},{"revision":"02a0d5220c1ad2eaa91e4dabe4650f78","url":"assets/js/8006f921.9756ea23.js"},{"revision":"17d82ac096e6e5ec55477e61faf03894","url":"assets/js/814f3328.b35b2fd3.js"},{"revision":"6b2229d88a2f919e0fa30a07745072c9","url":"assets/js/8289c30d.9c902354.js"},{"revision":"d0e16b442a5fcfcfa222ca67bb2605f5","url":"assets/js/82e80ffa.0a96ccf9.js"},{"revision":"efee4d259c87c214befd34f5624cf2fa","url":"assets/js/8329d12e.5f65fead.js"},{"revision":"59fc2037e3f5c1e037feba6001786642","url":"assets/js/8332fdcb.6fbd8caf.js"},{"revision":"c1d36d04efff0bb620477a6b0ee39013","url":"assets/js/83d2b88b.acef2199.js"},{"revision":"491ac5559bdcb57968630ffe36fbd335","url":"assets/js/8443.aee5c98e.js"},{"revision":"fac67d1c4a74c476d629766635458ca4","url":"assets/js/84e6cea8.f6c06b3c.js"},{"revision":"2ff92199937eaef417582cda9b6f94b8","url":"assets/js/8613e2de.abe651d2.js"},{"revision":"803d76a6c2086222a65210ae8149daac","url":"assets/js/863c8d78.b60c8ba0.js"},{"revision":"70102184e59946b56c8e1d3387bb726d","url":"assets/js/8677e416.17fde1f9.js"},{"revision":"b0418d8cdf6a796e754e36102ab14b4e","url":"assets/js/86c7bef2.e0ed8de5.js"},{"revision":"5a6513339eaa4fada518933a90d34865","url":"assets/js/887bd5e0.90573747.js"},{"revision":"ec07f3123764630733ee95f640a5cb3e","url":"assets/js/8943fa10.8e9f811e.js"},{"revision":"1046ea64e8110e72211e46a2131296c8","url":"assets/js/894ec14d.de157a18.js"},{"revision":"3984b3ff3aab45e5de548e7ca92dfd22","url":"assets/js/89e35390.3a9d1b2e.js"},{"revision":"563a8837ed452ad82a9fbb5be29a559b","url":"assets/js/8a3ff3cf.6e6b9195.js"},{"revision":"8847dead30c0dd1419bc3aa9816a5be3","url":"assets/js/8a81c7c2.b6a2fc0b.js"},{"revision":"09fd765cb7343baddb40bf6954d40816","url":"assets/js/8e823d8f.17bf2f9c.js"},{"revision":"0a04500fd9da231cbd5cbaa63a71bfbb","url":"assets/js/8eb4e46b.a9bd7846.js"},{"revision":"f9b50e795ad08a27fdfd50ca079bda80","url":"assets/js/8f5c6a11.3bc5476f.js"},{"revision":"83da36f12886f943942a3b2882312b8a","url":"assets/js/8fe83f1f.78f5f3d6.js"},{"revision":"f3137631afeda67e6dc460b6dbd9abc6","url":"assets/js/9178d290.5eaccf77.js"},{"revision":"d9301e1796b9f6448b4708023db65432","url":"assets/js/91bb3ae9.f1587309.js"},{"revision":"7537efb6e2fb10b1022e5dc7212e2074","url":"assets/js/9268b7cd.0207ecb9.js"},{"revision":"89b32a833f02027e28d8986322500c83","url":"assets/js/92999a1c.b07e7d62.js"},{"revision":"a6c47ef0be648e44346c0bcbecb17ebc","url":"assets/js/92b884ae.69b494ef.js"},{"revision":"64751a4e89dd837e7e9d704d08c8c098","url":"assets/js/933aa149.eb546034.js"},{"revision":"962437c34f80771425d5218a11f18a74","url":"assets/js/935f2afb.fd0aaeb0.js"},{"revision":"7f420b942180e65a25690a23c52bf065","url":"assets/js/93bfdf5c.535325c8.js"},{"revision":"8ae18ec3c6122368d015382d9e436999","url":"assets/js/94a8cb5b.778552f8.js"},{"revision":"a44c6accdc79933d5d888f2d3ddcd6ef","url":"assets/js/94feb75b.634d6410.js"},{"revision":"c25abace9a4c458c737ea581399d9738","url":"assets/js/959bcd83.ebc3187c.js"},{"revision":"2036e0a4165850fe0b78ffbc6c5eacdc","url":"assets/js/9609e992.768af71e.js"},{"revision":"05b2c2c2a433884cf5baba594b73932d","url":"assets/js/977306bf.ef12bc7f.js"},{"revision":"0901251ff259d8c20803d430823de92b","url":"assets/js/984d2cf8.59db9d30.js"},{"revision":"993a56fb98042750b73ebccc321ed65e","url":"assets/js/98eb4454.644f720e.js"},{"revision":"58b6015c5bc6ece12c81555f65b4ce04","url":"assets/js/9ad67e14.5bdc6463.js"},{"revision":"f3bd16c0c15a450e9f42b5d0e3bfdb57","url":"assets/js/9bc0385d.242c6a6a.js"},{"revision":"e9cc3cfb1c2628fefcf505a947fe3fb1","url":"assets/js/9bfeb2fa.9fa95f14.js"},{"revision":"8c53fb565839b1cfc05075bc7d8dba74","url":"assets/js/9cacecbe.6c8e5f34.js"},{"revision":"1fe61878c6a37178de4886828e4ac646","url":"assets/js/9ce24bf0.22510bdc.js"},{"revision":"117a2b47490772c1ef3c5eea4424bf98","url":"assets/js/9dc53d77.0f5049cc.js"},{"revision":"147dcebf3ca3dbd26db6fdbe56bf9593","url":"assets/js/9e4087bc.c87fcb2b.js"},{"revision":"d2d717ceca28d2d832470a71a52efe94","url":"assets/js/9e81bb00.ea05f585.js"},{"revision":"83acedef290d805ac24fba977e0e98e9","url":"assets/js/9f1744f9.2e73a0a5.js"},{"revision":"88c0a7556ed5f589ed045a7fc9bd20d0","url":"assets/js/a1b4e2ba.30b0b49a.js"},{"revision":"77777be7325d647f3826f0109cbb6129","url":"assets/js/a2466a13.f4b50e39.js"},{"revision":"2a6f5c00c9781996537c0e9884f70c09","url":"assets/js/a3d640fa.66337662.js"},{"revision":"800238c154101f7998ee53d78d9f2ff1","url":"assets/js/a53e793b.561c9cfd.js"},{"revision":"f868561e9cbaeb839ff43deb2d8a86c1","url":"assets/js/a68a231f.9ab63cf2.js"},{"revision":"36e58f30bf0f0cb8617d2cdad1f6c360","url":"assets/js/a6aa9e1f.344107ba.js"},{"revision":"ef594a003a67f07eda55d213016092df","url":"assets/js/a6b73347.164b1494.js"},{"revision":"154c1d60492ae8c80542d3202f972865","url":"assets/js/a7023ddc.6f93a2cc.js"},{"revision":"632a1a5b60f63ba8c0e3d4082e232d47","url":"assets/js/a80da1cf.fc4bcd42.js"},{"revision":"9a74767e783221deae8035255b14dc67","url":"assets/js/a85a7c6c.8e957139.js"},{"revision":"6de1efb35e88561e7f594e928f20319c","url":"assets/js/a88a9220.05e8db06.js"},{"revision":"9e62445718412e261593f6f9df9135d5","url":"assets/js/a9122d62.751d0df7.js"},{"revision":"6b6a313e1dc9df0138117123cb1e6529","url":"assets/js/a9b32d86.dff29bb5.js"},{"revision":"889400a02127579846472edcab4715a0","url":"assets/js/aa8cfd05.32bb2d64.js"},{"revision":"0d87b856df499acac7dd1217d443543d","url":"assets/js/ab0797d9.45c3c49c.js"},{"revision":"548e361ccfb6c5891330be186bd382b7","url":"assets/js/ac28c0a5.fd7f1834.js"},{"revision":"39bcab245f8b72a250dbaf21ead12e4c","url":"assets/js/ac5aaebd.a734a43a.js"},{"revision":"a525ab35ad5cb48252b1c96645585bf9","url":"assets/js/ad738a0e.64ea34a9.js"},{"revision":"6a635e4cbf3c33f21445d47463438ad7","url":"assets/js/ae6096b3.7b2a3f2a.js"},{"revision":"30cc7fcf803ae9be97d4c5d7cf3ecfbf","url":"assets/js/af40e190.945876c8.js"},{"revision":"40b6287d519a36cf2f5cc6646bc83ccb","url":"assets/js/af7203f2.46d8771b.js"},{"revision":"25911d3d8e74bfcc10b92cb84d35cda4","url":"assets/js/af9ecc53.b8073b2d.js"},{"revision":"1ac4556132799b8d889a134b924e686c","url":"assets/js/afbc055c.a2b14b40.js"},{"revision":"c238dd3b3cd96ca522f51d1f0dd19754","url":"assets/js/b045c544.14a89343.js"},{"revision":"f834ebf8e1a535d3ae27755b9bb38485","url":"assets/js/b06d16d9.4eca2db3.js"},{"revision":"d0f77bfc81046b5033bef5232f81dc62","url":"assets/js/b120072e.03adba17.js"},{"revision":"5d45b61970b6482da118f87e4e8e8fd0","url":"assets/js/b294dbf2.743dc7bf.js"},{"revision":"c4c9055feb8de50e9499301500d5981b","url":"assets/js/b2b675dd.66e07975.js"},{"revision":"7291e000f2ca807cfcfeef7ba940c51a","url":"assets/js/b2f554cd.d24caa68.js"},{"revision":"2b2d2c23cedfde2efc4d868a1be6a6a3","url":"assets/js/b3aeb698.2d5a6900.js"},{"revision":"6fe6e11e45e5d43be06f485db8821917","url":"assets/js/b41937ce.354e71f6.js"},{"revision":"48c625f202ca33760c4f39334db4f08c","url":"assets/js/b507effc.97a38f4b.js"},{"revision":"f31c9b30621455df2369376203627613","url":"assets/js/b5922a77.22522cd3.js"},{"revision":"b0bd360cf9daf0ab06158220b50fbbea","url":"assets/js/b6a6b6a8.6361a3af.js"},{"revision":"70ad33df6eff634afc6f10b12c8c25b1","url":"assets/js/b749f6ec.48e300d7.js"},{"revision":"939dc31ec2af16463dad72841de8cad4","url":"assets/js/b7d7bb96.95d4709d.js"},{"revision":"614cd1853842fe1c0d21f571d4d6dbe6","url":"assets/js/b8b1e67c.f3ea025e.js"},{"revision":"27e1045934753174292a3086bc369b6e","url":"assets/js/b8d223ff.bd649b52.js"},{"revision":"aadf0f574b37dabbb4241bb30f936cec","url":"assets/js/b8f78f32.aae3de85.js"},{"revision":"a68e70f124ac7d05155bdc2e059217ac","url":"assets/js/b953ccfa.d89878dd.js"},{"revision":"0fa76a8d3b0ead944c78d9d392fba023","url":"assets/js/bae5ebf4.49f277fd.js"},{"revision":"ff23b8eb10b21642aaaf54d407bcfd6c","url":"assets/js/bc18cd3f.f1e30c5b.js"},{"revision":"e3d2a3bef7666499239845ec4075c8aa","url":"assets/js/bc3c9d56.4327ac90.js"},{"revision":"cfb364898c771451233c351c77cc71ca","url":"assets/js/bd523924.2a9c00f0.js"},{"revision":"44539faf57323d9380e64a3d327cc076","url":"assets/js/be3295fa.1c9f9986.js"},{"revision":"cee858950ad8a521328562771bf29e91","url":"assets/js/beea6c26.e78d6af5.js"},{"revision":"a81c29e9e4a8782174a522084b70fbc5","url":"assets/js/bef17a8a.bddc9f0f.js"},{"revision":"0d019daf55c6a8a98fc38460c8db73e3","url":"assets/js/c041151e.0f183615.js"},{"revision":"2e29f4857b091cbc3599f407a832e1c4","url":"assets/js/c0e92f41.c1578113.js"},{"revision":"cca9bbbf7ac999b57387ddcd1bb6d2c8","url":"assets/js/c29f0c30.9a0ea835.js"},{"revision":"2c9efa1f5ef9aaa42c4377e07af8f235","url":"assets/js/c320b3d1.b70c4c07.js"},{"revision":"a316fde54835ce8ab3f12383d799f6ad","url":"assets/js/c32946b0.2cfedeb0.js"},{"revision":"ffff51ada6f9113e66ece216a5cdde74","url":"assets/js/c39b0fe3.37369d98.js"},{"revision":"01fde32a0cda68129249fe0162337344","url":"assets/js/c5d3f16a.b2d5757e.js"},{"revision":"b3bc983d9aaa3dcf61f015c410c384b5","url":"assets/js/c5dc997e.4c8cb326.js"},{"revision":"12fdd5ac3b7eb90e98134c2e0b0b52e1","url":"assets/js/c5fba11c.5b3fa208.js"},{"revision":"1a7155a57ea21ce8390bde0325f67fe9","url":"assets/js/c649d63a.37a87a48.js"},{"revision":"9b075ac6665ee125e0565ecbfc81d3f6","url":"assets/js/c7788412.217dfec4.js"},{"revision":"1ada22f2decdfe82eb08b133d0ab4b8f","url":"assets/js/c7d25af9.6170ac2d.js"},{"revision":"1b63b4b8917a7bd97f6910501f374396","url":"assets/js/c7d9c84c.aa49e9cb.js"},{"revision":"828040e0756e19e843bd0ec43e5d06f3","url":"assets/js/c863390a.6b4ae955.js"},{"revision":"bb59d839d1577ece23d32eaa5ac2c8f0","url":"assets/js/c926bcff.b2ad17a1.js"},{"revision":"e3e3271802a2e4ef245a4143a223c6b3","url":"assets/js/c9a1127c.48b59c90.js"},{"revision":"1e5a23cda4da6e06d7f01edbea1b6494","url":"assets/js/c9a3880a.b2b0e88d.js"},{"revision":"46a3f5ce531b737689b8b4a7c730778f","url":"assets/js/ca84acd0.2969889f.js"},{"revision":"26e194adea84aeb7e6c84d386f74118e","url":"assets/js/ca89c0b3.d8b6dbdf.js"},{"revision":"f80ceb8ad98e01403ae24f8cd609de7d","url":"assets/js/cb42e102.535df5fb.js"},{"revision":"a82e6743e5011636e94e331141f7bfd7","url":"assets/js/cc5d2bcd.bb40c5fd.js"},{"revision":"429999cece326e060995ee3d9132e479","url":"assets/js/ccc49370.a170ae27.js"},{"revision":"4062c3db10ce952599c7f819fd62f189","url":"assets/js/cdc3b41d.f6c71b68.js"},{"revision":"1eef5f83c12ac597347e0c21ae29292d","url":"assets/js/cfd070c8.f9abe55c.js"},{"revision":"e480fc1fe0fae2a98c9d6b33b7c89bdb","url":"assets/js/d241f030.78652b6c.js"},{"revision":"040a2dca6e2c36d6d365a0e82a087911","url":"assets/js/d3671536.532823e5.js"},{"revision":"7d26b84b7103d67fd287da01f80860b4","url":"assets/js/d387dcd1.5f9d4e71.js"},{"revision":"95cd32c533f1802329b8ae1c8c0fc508","url":"assets/js/d45002a0.52c80d83.js"},{"revision":"677dbde8519da42443b4bd53bf5211c8","url":"assets/js/d4f36fce.4ff06b8b.js"},{"revision":"b801b05643cab64a3bc4845915cb25c0","url":"assets/js/d50e724c.552b0b4f.js"},{"revision":"060432969d6131d68093325e8c737235","url":"assets/js/d67fa14e.9fa05598.js"},{"revision":"21fb657f441250368896bf15d04d0b1a","url":"assets/js/d6bc24fc.58756376.js"},{"revision":"3ddeaa5e358e1eabe4f7e8926eb1f3ea","url":"assets/js/d96a4c69.2ba37c95.js"},{"revision":"a3e48356a6e1e488b4447d3104b5174c","url":"assets/js/d9785db0.76d507cd.js"},{"revision":"c60d835b7930112e008f5b4429b8b1e6","url":"assets/js/dbe19f32.6c6d0075.js"},{"revision":"80c7f99344ae7ef82e3fe176a2a9d12b","url":"assets/js/dbf9bc40.683f7406.js"},{"revision":"6ec3210f37e6afc0d775bdfb125ede3b","url":"assets/js/dceffdc1.22794bce.js"},{"revision":"5e27df7e1d3d66802735d03f6533601f","url":"assets/js/dcf2a602.f998d86f.js"},{"revision":"c67f89c550b4f083c47a6fcc455804c3","url":"assets/js/dd3410d4.e4512945.js"},{"revision":"e9454399c928e00a8ffa8d5756608d08","url":"assets/js/dda55354.d5a7914b.js"},{"revision":"a0474fd2c5212a8f219abc634ffe5b45","url":"assets/js/dfd40ac7.8dc6eef0.js"},{"revision":"6d6fe9c59e81df4431cd00b66899d344","url":"assets/js/e06ad6e5.8df64ce6.js"},{"revision":"7adad65a7f72a4ecb915de6f54deba34","url":"assets/js/e1980b35.997705bc.js"},{"revision":"a1706ef4e34329c730f44c288afe74ee","url":"assets/js/e30b83be.5ef3e1d2.js"},{"revision":"1defdbb697cce31ae908211e22c578f1","url":"assets/js/e3419b10.cd20c1c1.js"},{"revision":"1f355ddf6aea38b43c80bd8110412e8d","url":"assets/js/e3939e2c.a6f71df7.js"},{"revision":"785aa573bd1147d4b01b24b292dd3be5","url":"assets/js/e4eebc9d.a05552f5.js"},{"revision":"afea41ac6accccf5ca69c6eda3ffc765","url":"assets/js/e5d5c863.bd06b58d.js"},{"revision":"fd1ed3bfce4b1c5e9d7249abaffb482e","url":"assets/js/e6c44b2b.45f3c5f6.js"},{"revision":"4a8c94d0756f6f5f759a13eb349443d1","url":"assets/js/e6d5bf97.ee9b826f.js"},{"revision":"a22e71f3c3a3d8ccb45aee84dad8e8ae","url":"assets/js/e6e13968.cbb72443.js"},{"revision":"2f740f5e2666466bd09f28e9731d303a","url":"assets/js/e6e8ac82.627e573a.js"},{"revision":"d57f94ce0a5d639cb4042ed756ffb893","url":"assets/js/e7a1b3f5.bd7b8863.js"},{"revision":"f46f61a4be249241aa2f144504504301","url":"assets/js/e7f96876.af6dce21.js"},{"revision":"ef32fdd9790f0bb4672aeda4c9fbadbb","url":"assets/js/e8691aac.360d4ec8.js"},{"revision":"65394760fd05869ce53ad293ee6d620a","url":"assets/js/e9087c4b.454f6dd9.js"},{"revision":"af8ad2bf1a4c831f093f7547152b838c","url":"assets/js/e967e667.873695b6.js"},{"revision":"f5e9bfadd928ee972ec7fbc738ecf360","url":"assets/js/e9e85417.850892ea.js"},{"revision":"00e6cfd8de6827f08183557e57b36432","url":"assets/js/ea8727a6.743ac4a2.js"},{"revision":"067acea912cc58d9de412d03629d5c96","url":"assets/js/ebc84fc0.89071533.js"},{"revision":"af48e685d0cf2e82660d9eb2014aa131","url":"assets/js/ed3d142d.e73c3f22.js"},{"revision":"177323f2a53b6edb8151455c19b9b521","url":"assets/js/ed5af355.58d2642f.js"},{"revision":"bc28b8459ca71da2823bc6b8a589a783","url":"assets/js/edb997da.f6ea8728.js"},{"revision":"6b5ca36d3bf491d57222deee5a2a1d9c","url":"assets/js/edc2676b.801dcd23.js"},{"revision":"aeff6066ed6c5f1138d58a85af5e881d","url":"assets/js/edccb071.e90b6c57.js"},{"revision":"77ec9e072306af1f9897b193f04d87ee","url":"assets/js/ee2f8d5c.2203e660.js"},{"revision":"62034c8be92e7fbbb61afda18203b962","url":"assets/js/f0ad3fbb.9eaf4f76.js"},{"revision":"9a3c5e019a2904447fd62b5311c1aca5","url":"assets/js/f0e80be9.2a2369f5.js"},{"revision":"e457c9fe1b7943c62835e75f800b031c","url":"assets/js/f0e8ae24.19b10b55.js"},{"revision":"e3a4be9680a320c37c0849f03b984a96","url":"assets/js/f13b58c7.b3fcf94a.js"},{"revision":"7389a588c9d0c2abda01e8c86d2ca1f0","url":"assets/js/f1797540.40443877.js"},{"revision":"c74a82e0f43e0663b5f191f7bc2e291d","url":"assets/js/f249cd2a.3cfe8d22.js"},{"revision":"562464b482cec07f47adba6e68a170de","url":"assets/js/f351da26.5cdd2b83.js"},{"revision":"c2aedb3f8aeec082d1b765215625c44f","url":"assets/js/f38e142f.41555447.js"},{"revision":"3a43e1adc270f8b30b067d0f7e800176","url":"assets/js/f44540ba.4ed694a9.js"},{"revision":"e2e4028207888bbf06dda57d3851e389","url":"assets/js/f4d07f69.31d85204.js"},{"revision":"b4ebbe27eb05477b2e95edddf19204fb","url":"assets/js/f755490c.65b5c855.js"},{"revision":"004be13ab52c62b0e68525760b192669","url":"assets/js/f8004d8c.6179b173.js"},{"revision":"553e31fd617a79325651360a50cd1b34","url":"assets/js/f83aa087.857cd6c2.js"},{"revision":"d25d19b689be6aedf4a1a61c995b04ef","url":"assets/js/f95e0328.84e4d51a.js"},{"revision":"e0c5da65b387e3591a7a52930dc34ded","url":"assets/js/f9a1e4f8.0b90a138.js"},{"revision":"98e5b551f4a6dd2b499a03e1d12a6f49","url":"assets/js/f9c86808.03d3c810.js"},{"revision":"fe105b55a337b3f0b1c6916d65c50edf","url":"assets/js/f9d6d432.6ed15131.js"},{"revision":"3709cced984b219b9e97cd73a2f11444","url":"assets/js/fa6367a7.4bd1817b.js"},{"revision":"7f1e7c99ae48d7d8a0b68068e477519b","url":"assets/js/fb4b29e8.5f8d61fa.js"},{"revision":"f7fd7ad41cfb661a442697b01dc5ae71","url":"assets/js/fce5fff2.cd395404.js"},{"revision":"a5fa969071fcdb7be41159640211d2f9","url":"assets/js/fde7a9cf.61f4f0e2.js"},{"revision":"2d3a60537eb61e9d7bfcdf69932513f7","url":"assets/js/fedf8153.a5974d64.js"},{"revision":"1c5549ca6b2e68b7104f76f1b5eb49a0","url":"assets/js/feefb48c.c6e090ac.js"},{"revision":"24956aff7801f9b5842254a8da19840a","url":"assets/js/ffc9929f.625f24e4.js"},{"revision":"9cf46639c1250b10d7c9751b722efea2","url":"assets/js/main.2fc7226a.js"},{"revision":"bd6b5d435e5b23417fc5b65f80abcfb2","url":"assets/js/runtime~main.e4f71d9d.js"},{"revision":"a7424111251594255a24755c96a9f317","url":"blog/archive/index.html"},{"revision":"41363c6f2de5c42649b06ef6adba245d","url":"blog/index.html"},{"revision":"344ad737e937dd4099354b4ccad120ea","url":"blog/new-site/index.html"},{"revision":"bdf7b6c3f6594b31752f20b5bc488af3","url":"blog/page/2/index.html"},{"revision":"0fa686e8a0a591f635953e2a9c131659","url":"blog/page/3/index.html"},{"revision":"baddca0a32d769c90c5717f0d6dbff42","url":"blog/page/4/index.html"},{"revision":"fd00f53ac4cc593f744a37c39e7874b4","url":"blog/server-cli/v1.1.3/index.html"},{"revision":"1b60a50c15a1704df4187a1454c26d52","url":"blog/server-cli/v1.1.4/index.html"},{"revision":"45aedb4f84ca957628f8490ae751ddda","url":"blog/server-cli/v1.2.0/index.html"},{"revision":"8cc026fd8aa0d5c4a91705bd5af80b70","url":"blog/server-cli/v1.3.0/index.html"},{"revision":"d7c059c46a9e9e44607417497251f46e","url":"blog/server-cli/v1.3.1/index.html"},{"revision":"69b015fb833024673fb781f14fd0e9b4","url":"blog/tags/browser/index.html"},{"revision":"16aa69e68d83f58e7a741024b44d8fa2","url":"blog/tags/browser/page/2/index.html"},{"revision":"b45eb02adc78e0bb3dbe904c01f2651e","url":"blog/tags/cli/index.html"},{"revision":"519d072ebdb65b63f61991300686f70d","url":"blog/tags/docusaurus/index.html"},{"revision":"e82815ca675dad088deafc4c52a9606c","url":"blog/tags/hello/index.html"},{"revision":"f21e101ed2fe94169e29ba42c244f781","url":"blog/tags/index.html"},{"revision":"8667819e184050386b8fe519d8e63149","url":"blog/tags/javascript/index.html"},{"revision":"c26b5011632fd5aa67b19792f07293d3","url":"blog/tags/javascript/page/2/index.html"},{"revision":"6ae84f1022ac4f1fa4cb4c39a4505069","url":"blog/tags/javascript/page/3/index.html"},{"revision":"c93efa1d482936005cd5e77de7048e8b","url":"blog/tags/javascript/page/4/index.html"},{"revision":"9808e6cab281b54f59eb181886e7c5fd","url":"blog/tags/lib/index.html"},{"revision":"b051ff0bfc66d48399006fb21072813d","url":"blog/tags/nodejs/index.html"},{"revision":"2e9f9ab3b87a2cee7d0e709e68aa6b3c","url":"blog/tags/nodejs/page/2/index.html"},{"revision":"96fc6b58771705614a273c3b402e6ea9","url":"blog/tags/nodejs/page/3/index.html"},{"revision":"460c04d8e1a402d5f81decd7fd7589d3","url":"blog/tags/server/index.html"},{"revision":"23088f2cb98f959e9160ed44dd69fbbf","url":"blog/tags/server/page/2/index.html"},{"revision":"a46555c1f6caa7aec0b0154fe26c4ec4","url":"blog/tags/wa-js/index.html"},{"revision":"5a5be7245a3d7457bcbc28deb2086d38","url":"blog/tags/wa-js/page/2/index.html"},{"revision":"d3ec789b5d296d1b9eae6a5116a96c79","url":"blog/tags/wppconnect/index.html"},{"revision":"51743c65dd0997e8c4ffb27f3d4aecda","url":"blog/tags/wppconnect/page/2/index.html"},{"revision":"8637ca57604cdb969828356d3958f8d9","url":"blog/tags/wppconnect/page/3/index.html"},{"revision":"60dd9e3531fd9bba096183f2be69d002","url":"blog/tags/wppconnect/page/4/index.html"},{"revision":"209a4c5e5decb1b395656aed59384f4c","url":"blog/wa-js/v2.4.1/index.html"},{"revision":"69090927c9d0f36583c503827a632beb","url":"blog/wa-js/v2.5.0/index.html"},{"revision":"50126554a37f48c84faa5f6566defe34","url":"blog/wa-js/v2.5.1/index.html"},{"revision":"45fa7e93097885ab01808901af50b51a","url":"blog/wa-js/v2.6.0/index.html"},{"revision":"11d3f82cfd7cd8e1372e43e13c318990","url":"blog/wa-js/v2.7.0/index.html"},{"revision":"b38eaffe4a7393d1a916de74b557bf90","url":"blog/wa-js/v2.7.1/index.html"},{"revision":"9d3eb72d0f378af97de448c65b2d47e6","url":"blog/wa-js/v2.7.2/index.html"},{"revision":"c2927918c86a856072432596c63cc2ef","url":"blog/wa-js/v2.7.3/index.html"},{"revision":"c39a9c40cccc550038ae2e75b1430bba","url":"blog/wa-js/v2.8.0/index.html"},{"revision":"03e7f3a55c84d0a3203ca859d573f22a","url":"blog/wa-js/v2.8.1/index.html"},{"revision":"ddc32426f8167a4a19e01d784a8b26d6","url":"blog/wa-js/v2.8.2/index.html"},{"revision":"3975fd715862f507b22d6611e5884b83","url":"blog/wppconnect-server/v1.2.0/index.html"},{"revision":"3c924718f9870b959b8409a69956354c","url":"blog/wppconnect-server/v1.3.0/index.html"},{"revision":"72df5c83616bcee5205400ade39a2b61","url":"blog/wppconnect-server/v1.3.1/index.html"},{"revision":"29933ca879c08b34fbb76ccfb0fae53d","url":"blog/wppconnect-server/v1.3.2/index.html"},{"revision":"b36a135c750aede75cd98c42a37c75f7","url":"blog/wppconnect-server/v1.3.3/index.html"},{"revision":"429b97c111cae119a3e78cf9053b1dfd","url":"blog/wppconnect-server/v1.3.4/index.html"},{"revision":"a637b308a971e542542363cd9ace3a52","url":"blog/wppconnect-server/v1.4.0/index.html"},{"revision":"679361393d13cf4a7552b07c7cf48fdb","url":"blog/wppconnect-server/v1.5.0/index.html"},{"revision":"9008ffc56be86db4332e711fbde125cf","url":"blog/wppconnect-server/v1.6.0/index.html"},{"revision":"c7a3547b5ead1b81c66c6f74401a37e2","url":"blog/wppconnect/v1.13.3/index.html"},{"revision":"03f9de4f1e48fc842e2a136bf91ad021","url":"blog/wppconnect/v1.14.0/index.html"},{"revision":"cefc263dc012b4af2908b2c5f942e49c","url":"blog/wppconnect/v1.14.1/index.html"},{"revision":"c35fc12586514c9335a8940d246259f1","url":"blog/wppconnect/v1.14.2/index.html"},{"revision":"3c314ad55875836956104490126116d3","url":"blog/wppconnect/v1.14.3/index.html"},{"revision":"2017530dda9c7812ae2d0c9403927e16","url":"blog/wppconnect/v1.14.4/index.html"},{"revision":"c7cb439c912dfe55160ac076d571fe09","url":"blog/wppconnect/v1.14.5/index.html"},{"revision":"4d02eef94b84abf972307c4c74bd2af8","url":"blog/wppconnect/v1.15.0/index.html"},{"revision":"81cccbac21f13aa9cd0c432aae022f86","url":"docs/api/index.html"},{"revision":"6e86aef4b2212cfb433bcea3c373d870","url":"docs/api/wa-js/classes/ev.EventEmitter/index.html"},{"revision":"8026d43d46eca73f4b376dfe6074552c","url":"docs/api/wa-js/classes/util.WPPError/index.html"},{"revision":"75b587ba369796d9d23cd8b49c938564","url":"docs/api/wa-js/classes/whatsapp.AggReactionsCollection/index.html"},{"revision":"967a00fea1c1b7dd1730b8e92fa34323","url":"docs/api/wa-js/classes/whatsapp.AggReactionsModel/index.html"},{"revision":"7139f7bcfc2ee8559e7faed1067f8e9f","url":"docs/api/wa-js/classes/whatsapp.AttachMediaModel/index.html"},{"revision":"c20ec6d4e3c8e81815fc7464031de16f","url":"docs/api/wa-js/classes/whatsapp.BaseCollection/index.html"},{"revision":"a6bbec282acda57289d66a490cea22a0","url":"docs/api/wa-js/classes/whatsapp.BlocklistCollection/index.html"},{"revision":"b98e435f57af37a26d016eb0686f8ecd","url":"docs/api/wa-js/classes/whatsapp.BlocklistModel/index.html"},{"revision":"3bbee83f33e98a3f7a12b19f34977366","url":"docs/api/wa-js/classes/whatsapp.BusinessCategoriesResultCollection/index.html"},{"revision":"666b342c42b3553bb51219256f04cc62","url":"docs/api/wa-js/classes/whatsapp.BusinessCategoriesResultModel/index.html"},{"revision":"3d17e7aecbfba83ce72cf2afb0ab475d","url":"docs/api/wa-js/classes/whatsapp.BusinessProfileCollection/index.html"},{"revision":"b1dedf1b3035a89113ed3877043a935b","url":"docs/api/wa-js/classes/whatsapp.BusinessProfileModel/index.html"},{"revision":"f20f3a7c7da04b05b74df16b010f978b","url":"docs/api/wa-js/classes/whatsapp.ButtonCollection/index.html"},{"revision":"b6a0fcf13f283917517c78512de515a9","url":"docs/api/wa-js/classes/whatsapp.CallCollection/index.html"},{"revision":"e9b93aa84ed5096f12ba264bd835333a","url":"docs/api/wa-js/classes/whatsapp.CallModel/index.html"},{"revision":"9a45983503f65e800ecd705951212896","url":"docs/api/wa-js/classes/whatsapp.CallParticipantModel/index.html"},{"revision":"f9620c3cad3caef34c1a21937b13382a","url":"docs/api/wa-js/classes/whatsapp.CartCollection/index.html"},{"revision":"61625aeac7a6a2d772803fcebf555e06","url":"docs/api/wa-js/classes/whatsapp.CartItemCollection/index.html"},{"revision":"e031063c4e1f2a20bfea1bb73d68d173","url":"docs/api/wa-js/classes/whatsapp.CartItemModel/index.html"},{"revision":"d7d323808dabfb4aca9626d80fdbd185","url":"docs/api/wa-js/classes/whatsapp.CartModel/index.html"},{"revision":"69a90959729b79154904c4a3f735b751","url":"docs/api/wa-js/classes/whatsapp.CatalogCollection/index.html"},{"revision":"7cc1fe72957706f21094380e0a183051","url":"docs/api/wa-js/classes/whatsapp.CatalogModel/index.html"},{"revision":"5b2d4b1a866729872a31ff0620388710","url":"docs/api/wa-js/classes/whatsapp.ChatCollection/index.html"},{"revision":"33cb13bad0e05cdacef7e96d8311b6dc","url":"docs/api/wa-js/classes/whatsapp.ChatModel/index.html"},{"revision":"991981ddf598b6f6ab047fa0c728cee3","url":"docs/api/wa-js/classes/whatsapp.ChatPreferenceModel/index.html"},{"revision":"c796d288e25007c7a6e1ff0b614352c5","url":"docs/api/wa-js/classes/whatsapp.ChatstateCollection/index.html"},{"revision":"5475ef257a02fa1abda332c7b82486db","url":"docs/api/wa-js/classes/whatsapp.ChatstateModel/index.html"},{"revision":"4d498a6af91db3c4181d07c5bf6c9236","url":"docs/api/wa-js/classes/whatsapp.ClockClass/index.html"},{"revision":"c4ca060c01dc9a56df53f5992b43be5b","url":"docs/api/wa-js/classes/whatsapp.CmdClass/index.html"},{"revision":"c109a5724d7fcbebe143a88a00365f42","url":"docs/api/wa-js/classes/whatsapp.Collection/index.html"},{"revision":"05ce616416e59c27a7464329f6cf45c3","url":"docs/api/wa-js/classes/whatsapp.ConnModel/index.html"},{"revision":"b80dc5cc0b9a6cc1c6cce613e9471edc","url":"docs/api/wa-js/classes/whatsapp.ContactCollection/index.html"},{"revision":"30bca4adaf6cc2d0019e3b0ade2dd6e2","url":"docs/api/wa-js/classes/whatsapp.ContactModel/index.html"},{"revision":"a082e8c287bd3c85ca8a41b215115e98","url":"docs/api/wa-js/classes/whatsapp.ConversionTupleModel/index.html"},{"revision":"dcf3e41ebc89c07a49d7769a8e718261","url":"docs/api/wa-js/classes/whatsapp.EmojiVariantCollection/index.html"},{"revision":"5f730295fb8fb35c798c80ea2e43a1c8","url":"docs/api/wa-js/classes/whatsapp.EmojiVariantModel/index.html"},{"revision":"32965ca3fc6b95936f09d64d05da2390","url":"docs/api/wa-js/classes/whatsapp.EventEmitter/index.html"},{"revision":"b48fd485dddf1439341b9466652ee81e","url":"docs/api/wa-js/classes/whatsapp.GroupMetadataCollection/index.html"},{"revision":"c1b285165f5787a06474fdfb41617ca1","url":"docs/api/wa-js/classes/whatsapp.GroupMetadataModel/index.html"},{"revision":"a6b91ba63f54709661b45ab7b8d3e8f2","url":"docs/api/wa-js/classes/whatsapp.LabelCollection/index.html"},{"revision":"5fceab40f1d23091798c7ad33a8a6755","url":"docs/api/wa-js/classes/whatsapp.LabelItemCollection/index.html"},{"revision":"76d647e96a680a321140c6942c58a268","url":"docs/api/wa-js/classes/whatsapp.LabelItemModel/index.html"},{"revision":"52e017ba0f412e2f7aeab533c6011be2","url":"docs/api/wa-js/classes/whatsapp.LabelModel/index.html"},{"revision":"49c4d1ffd057ddd344cb69a84e5a19e0","url":"docs/api/wa-js/classes/whatsapp.LiveLocationCollection/index.html"},{"revision":"5a0b4eecd13f9fdae89cdcc16005e043","url":"docs/api/wa-js/classes/whatsapp.LiveLocationModel/index.html"},{"revision":"b8643bb6cf97a70c7712d4f2a8e1a5a1","url":"docs/api/wa-js/classes/whatsapp.LiveLocationParticipantModel/index.html"},{"revision":"9b9a2caa28b63885bad607bcfc902cac","url":"docs/api/wa-js/classes/whatsapp.MediaBlobCacheImpl/index.html"},{"revision":"3d2fc5cf058176eb027ee2fb496c5add","url":"docs/api/wa-js/classes/whatsapp.MediaDataModel/index.html"},{"revision":"ebb53fdedf5ca0c1f50f355904f78c3a","url":"docs/api/wa-js/classes/whatsapp.MediaEntry/index.html"},{"revision":"059a3950ac2c713f90d56535d331232e","url":"docs/api/wa-js/classes/whatsapp.MediaObject/index.html"},{"revision":"fb9c0b1f73bce32961196530b707ad3e","url":"docs/api/wa-js/classes/whatsapp.MediaPrep.MediaPrep/index.html"},{"revision":"69fe34148669291d3dd4466b2c7606e6","url":"docs/api/wa-js/classes/whatsapp.Model/index.html"},{"revision":"212196d190d0f50e0b2a89ac6abd89f5","url":"docs/api/wa-js/classes/whatsapp.ModelChatBase/index.html"},{"revision":"95702aba71f57f8290d2d617b8e1193b","url":"docs/api/wa-js/classes/whatsapp.MsgButtonReplyMsgModel/index.html"},{"revision":"069790e5e15464753494bd4529947266","url":"docs/api/wa-js/classes/whatsapp.MsgCollection/index.html"},{"revision":"cdb9b6881f8b172daed550c2fc916b6e","url":"docs/api/wa-js/classes/whatsapp.MsgInfoCollection/index.html"},{"revision":"1f37441ef873ec07005eac7e0cb2b7a4","url":"docs/api/wa-js/classes/whatsapp.MsgInfoModel/index.html"},{"revision":"9a871a6641fd097e6ad574e1d33c9e51","url":"docs/api/wa-js/classes/whatsapp.MsgKey/index.html"},{"revision":"0f66f44f9eb84c1f900518d0c4e234fc","url":"docs/api/wa-js/classes/whatsapp.MsgLoad/index.html"},{"revision":"6b9591f42a026673076e9b9165b08402","url":"docs/api/wa-js/classes/whatsapp.MsgLoadState/index.html"},{"revision":"69fbbdf10db6dde356abf8cd2b1a0495","url":"docs/api/wa-js/classes/whatsapp.MsgModel/index.html"},{"revision":"29214b73f6eb3a152ae722854b1c65b0","url":"docs/api/wa-js/classes/whatsapp.MuteCollection/index.html"},{"revision":"1413182633c9cc91cc0f052331fa12b9","url":"docs/api/wa-js/classes/whatsapp.MuteModel/index.html"},{"revision":"9cd3de016998db87cc8e68bc43278676","url":"docs/api/wa-js/classes/whatsapp.OpaqueData/index.html"},{"revision":"061260b070dc6165bc39f5f2e48f6307","url":"docs/api/wa-js/classes/whatsapp.OpaqueDataBase/index.html"},{"revision":"293dad91d9b1840b61411f8e5c338a0b","url":"docs/api/wa-js/classes/whatsapp.OrderCollection/index.html"},{"revision":"e99bdefd3c40e926d9767cc3fa62bbe0","url":"docs/api/wa-js/classes/whatsapp.OrderItemCollection/index.html"},{"revision":"6f30d2464962db8fbfefebb874a17d31","url":"docs/api/wa-js/classes/whatsapp.OrderItemModel/index.html"},{"revision":"3c8f0b48f5a1c9619e845422184103b0","url":"docs/api/wa-js/classes/whatsapp.OrderModel/index.html"},{"revision":"c5f5afb6c1fc9b9704dd9c7ce06b0181","url":"docs/api/wa-js/classes/whatsapp.ParticipantCollection/index.html"},{"revision":"589485b181875246505f56a628b593d3","url":"docs/api/wa-js/classes/whatsapp.ParticipantModel/index.html"},{"revision":"de8c91a909eac90bc606cb1e26203a6b","url":"docs/api/wa-js/classes/whatsapp.PresenceCollection/index.html"},{"revision":"171815df13ddef0995bf3ebe946b49e2","url":"docs/api/wa-js/classes/whatsapp.PresenceModel/index.html"},{"revision":"263a7b36271bc66f6e32fd300b7f1403","url":"docs/api/wa-js/classes/whatsapp.ProductCollCollection/index.html"},{"revision":"aeb41c9e26d90ade165e4e1c43fa1439","url":"docs/api/wa-js/classes/whatsapp.ProductCollection/index.html"},{"revision":"d4f3cf38e95c04bcf4b99d5c76177f33","url":"docs/api/wa-js/classes/whatsapp.ProductCollModel/index.html"},{"revision":"6441bff014c2537d5eaed08f5d0653e7","url":"docs/api/wa-js/classes/whatsapp.ProductImageCollection/index.html"},{"revision":"77605e6e349149c8ef80575f3ab34ea8","url":"docs/api/wa-js/classes/whatsapp.ProductImageModel/index.html"},{"revision":"b5586b78052d83ab19379bd3214d1470","url":"docs/api/wa-js/classes/whatsapp.ProductMessageListCollection/index.html"},{"revision":"9d138d6e10b178647065ee399c4d0cb5","url":"docs/api/wa-js/classes/whatsapp.ProductMessageListModel/index.html"},{"revision":"f3685e6dc9ebd5e091a6cd57b8f2f438","url":"docs/api/wa-js/classes/whatsapp.ProductModel/index.html"},{"revision":"21892162daf22dd75c967be42ea9aabb","url":"docs/api/wa-js/classes/whatsapp.ProfilePicThumbCollection/index.html"},{"revision":"a4610d6f41b59e59f8a0695d6d2bba00","url":"docs/api/wa-js/classes/whatsapp.ProfilePicThumbModel/index.html"},{"revision":"7f999f9e721638f444813154d82e38b6","url":"docs/api/wa-js/classes/whatsapp.QuickReplyCollection/index.html"},{"revision":"6f205f0f9687b1341b1baddaf89609a6","url":"docs/api/wa-js/classes/whatsapp.QuickReplyModel/index.html"},{"revision":"0169e589e1ee8eb12502b267c74f9d39","url":"docs/api/wa-js/classes/whatsapp.ReactionsCollection/index.html"},{"revision":"97003c7134a9702f4d863c9d7dd69f61","url":"docs/api/wa-js/classes/whatsapp.ReactionsModel/index.html"},{"revision":"61b891f9a9a31b25a29d97f1116fcc8e","url":"docs/api/wa-js/classes/whatsapp.ReactionsSendersCollection/index.html"},{"revision":"67435126144ad794e4056908ccab6d23","url":"docs/api/wa-js/classes/whatsapp.ReactionsSendersModel/index.html"},{"revision":"bfbadc307c41b230d395319415c07c63","url":"docs/api/wa-js/classes/whatsapp.RecentEmojiCollection/index.html"},{"revision":"40c8fec65c7332a9ece837703ebaf91e","url":"docs/api/wa-js/classes/whatsapp.RecentEmojiModel/index.html"},{"revision":"e93cc9956b784aa741a7282f1287ca14","url":"docs/api/wa-js/classes/whatsapp.RecentStickerCollection/index.html"},{"revision":"4ceca0adb108a925a1b369261a2eb80a","url":"docs/api/wa-js/classes/whatsapp.RecentStickerModel/index.html"},{"revision":"9ad84a6da72796c0dfbe30b9b86be0d2","url":"docs/api/wa-js/classes/whatsapp.ReplyButtonModel/index.html"},{"revision":"3d237c82160b5cd25cb00429483fba8c","url":"docs/api/wa-js/classes/whatsapp.SocketModel/index.html"},{"revision":"eab13872cbd3bd10665b95b95327d9cc","url":"docs/api/wa-js/classes/whatsapp.StarredMsgCollection/index.html"},{"revision":"410e116442d7db76ea6c0d4015f117f9","url":"docs/api/wa-js/classes/whatsapp.StarredStickerCollection/index.html"},{"revision":"0d082fddd6bc1e64e2c91f50f1250095","url":"docs/api/wa-js/classes/whatsapp.StatusCollection/index.html"},{"revision":"bd1b6de2ae03ca0c12ebc52a3a7eeb40","url":"docs/api/wa-js/classes/whatsapp.StatusModel/index.html"},{"revision":"bcd5e63fdbe95a02530d6cafcc5b87e4","url":"docs/api/wa-js/classes/whatsapp.StatusV3Collection/index.html"},{"revision":"ffa4990e9d5e2821b32ad15c5af67ee6","url":"docs/api/wa-js/classes/whatsapp.StatusV3Model/index.html"},{"revision":"c7734b3909696f1237c8a96cb093f760","url":"docs/api/wa-js/classes/whatsapp.StickerCollection/index.html"},{"revision":"57d5e05885eac8d6614ccb50ae5ff56b","url":"docs/api/wa-js/classes/whatsapp.StickerModel/index.html"},{"revision":"418dc3968cbdf65c75abad83db2d353f","url":"docs/api/wa-js/classes/whatsapp.StickerPackCollection/index.html"},{"revision":"bb3ae1661fa531052e25058079d57d5c","url":"docs/api/wa-js/classes/whatsapp.StickerPackModel/index.html"},{"revision":"57503f44979bed9437533e76f02442d8","url":"docs/api/wa-js/classes/whatsapp.StickerSearchCollection/index.html"},{"revision":"7b90ac3c691a5da1a4883b688cb902da","url":"docs/api/wa-js/classes/whatsapp.StreamModel/index.html"},{"revision":"4fc57ef72c84f1cd3ffad15256780b02","url":"docs/api/wa-js/classes/whatsapp.TemplateButtonCollection/index.html"},{"revision":"65ca98f226b64173172377fcfcfd5d71","url":"docs/api/wa-js/classes/whatsapp.TemplateButtonModel/index.html"},{"revision":"16aeb00098704552530bc47aa775f9c1","url":"docs/api/wa-js/classes/whatsapp.UnreadMentionModel/index.html"},{"revision":"eb8514e117e9dfa89a8aa0744c690c8c","url":"docs/api/wa-js/classes/whatsapp.WapClass/index.html"},{"revision":"d0dbf5bce1fdf81c511a26bdecb38563","url":"docs/api/wa-js/classes/whatsapp.WebCallModel/index.html"},{"revision":"d89288ba0f7e09ea1493375b186199be","url":"docs/api/wa-js/classes/whatsapp.Wid/index.html"},{"revision":"21e6c05f55f39a24471773043590ee01","url":"docs/api/wa-js/enums/group.GroupProperty/index.html"},{"revision":"9fb8c55854c2da06824db4e78bce7f16","url":"docs/api/wa-js/enums/whatsapp.enums.ACK_STRING/index.html"},{"revision":"59bd62b1497856f708768bb9c4db0a08","url":"docs/api/wa-js/enums/whatsapp.enums.ACK/index.html"},{"revision":"c4f719848d1846dd78f9ffebd818f42a","url":"docs/api/wa-js/enums/whatsapp.enums.CALL_STATES/index.html"},{"revision":"99810c55c8cefd1205e1ff352ac338c3","url":"docs/api/wa-js/enums/whatsapp.enums.EDIT_ATTR/index.html"},{"revision":"450c7f2e3d1371d5bd190d3e322d4910","url":"docs/api/wa-js/enums/whatsapp.enums.GROUP_SETTING_TYPE/index.html"},{"revision":"3338a40595ca6ab8dd8d2d2ca572c2d3","url":"docs/api/wa-js/enums/whatsapp.enums.LogoutReason/index.html"},{"revision":"477d5bb0035a773ec7425d35dd79ea8e","url":"docs/api/wa-js/enums/whatsapp.enums.MSG_TYPE/index.html"},{"revision":"d8ce89f44dabafb4327ff59471189b5c","url":"docs/api/wa-js/enums/whatsapp.enums.OUTWARD_TYPES/index.html"},{"revision":"079663cebc058a210c65972dd4cbf8ab","url":"docs/api/wa-js/enums/whatsapp.enums.SendMsgResult/index.html"},{"revision":"f1d747dc348f7e1b394a3ba74afa8b8d","url":"docs/api/wa-js/index.html"},{"revision":"7ec23c9d5b68094d03dd5abe8ad2948b","url":"docs/api/wa-js/interfaces/blocklist.EventTypes/index.html"},{"revision":"089c901da70a565e9d47bb11648a7915","url":"docs/api/wa-js/interfaces/chat.AudioMessageOptions/index.html"},{"revision":"c6db9f72abca19913446785a958fd9fb","url":"docs/api/wa-js/interfaces/chat.AutoDetectMessageOptions/index.html"},{"revision":"061d5d70096645d983b5b4ea76cdf682","url":"docs/api/wa-js/interfaces/chat.ChatListOptions/index.html"},{"revision":"2a1fa628a402c175ff99745a2d084e89","url":"docs/api/wa-js/interfaces/chat.DeleteMessageReturn/index.html"},{"revision":"641c0510a20944e402530bae571cbdac","url":"docs/api/wa-js/interfaces/chat.DocumentMessageOptions/index.html"},{"revision":"e496ff4cd49a9d4bb1f12b9b5c32f9ba","url":"docs/api/wa-js/interfaces/chat.EventTypes/index.html"},{"revision":"91fa419d33fce7447689f46c51ae43c2","url":"docs/api/wa-js/interfaces/chat.FileMessageOptions/index.html"},{"revision":"62e1874852e9aaf7d1b2640515d948c6","url":"docs/api/wa-js/interfaces/chat.GetMessagesOptions/index.html"},{"revision":"3e003e87432661522658ee837c0332d3","url":"docs/api/wa-js/interfaces/chat.ImageMessageOptions/index.html"},{"revision":"5971a278b444863a4eb1610d14115843","url":"docs/api/wa-js/interfaces/chat.LinkPreviewOptions/index.html"},{"revision":"3b68ff33064a74e072ed809548abf60d","url":"docs/api/wa-js/interfaces/chat.ListMessageOptions/index.html"},{"revision":"cf606b1444f76081fbe6dc9c1d4d6704","url":"docs/api/wa-js/interfaces/chat.LocationMessageOptions/index.html"},{"revision":"1836a49f4ee68d9c07d90f6eeef2385b","url":"docs/api/wa-js/interfaces/chat.MessageButtonsOptions/index.html"},{"revision":"9762533b85a0bf880b6751961d4ca2c0","url":"docs/api/wa-js/interfaces/chat.SendMessageOptions/index.html"},{"revision":"7de8fe9961563a0e0fb86d4e1261183b","url":"docs/api/wa-js/interfaces/chat.SendMessageReturn/index.html"},{"revision":"85f7f4b14b628c0b8ad321ac34426664","url":"docs/api/wa-js/interfaces/chat.StarMessageReturn/index.html"},{"revision":"10091b07f3c22a3c119d98e72d41ec7c","url":"docs/api/wa-js/interfaces/chat.StickerMessageOptions/index.html"},{"revision":"155969df95797fd5df296ae183fc8d16","url":"docs/api/wa-js/interfaces/chat.VCardContact/index.html"},{"revision":"7f8dd52b0745c5b27b9b76065eb465e0","url":"docs/api/wa-js/interfaces/chat.VideoMessageOptions/index.html"},{"revision":"6a2e1bc9b49830995d82ee4286d46f4e","url":"docs/api/wa-js/interfaces/config.Config/index.html"},{"revision":"737877b622f627ef1b2c4a493badf797","url":"docs/api/wa-js/interfaces/conn.AuthCodeMultiDevice/index.html"},{"revision":"8352e9eaaa4e34bdeeef2d24ea12f079","url":"docs/api/wa-js/interfaces/conn.AuthCodeSingleDevice/index.html"},{"revision":"efcb7a94e382696a421e757b32337d75","url":"docs/api/wa-js/interfaces/conn.EventTypes/index.html"},{"revision":"ec278af0a30db9a02c9f7e17b129bf45","url":"docs/api/wa-js/interfaces/contact.ContactListOptions/index.html"},{"revision":"ad8bbe01ba33db013f261054ee796697","url":"docs/api/wa-js/interfaces/contact.EventTypes/index.html"},{"revision":"a093551485bf8ec298e866d7d8224ff1","url":"docs/api/wa-js/interfaces/ev.BlocklistEventTypes/index.html"},{"revision":"dbf9e1b343c3ce09d3d9bac750b3df72","url":"docs/api/wa-js/interfaces/ev.CallEventTypes/index.html"},{"revision":"13d61c35220811a1c8a30788985088fa","url":"docs/api/wa-js/interfaces/ev.ChatEventTypes/index.html"},{"revision":"a9940df7770916166898b4a314e6fd82","url":"docs/api/wa-js/interfaces/ev.ConnEventTypes/index.html"},{"revision":"906ebe24a0542bb0da49d40d9d309cec","url":"docs/api/wa-js/interfaces/ev.StatusEventTypes/index.html"},{"revision":"de1c611da55a2472be792819350e8a64","url":"docs/api/wa-js/interfaces/ev.WebpackEvents/index.html"},{"revision":"8d10a01ef70be19735316d86b2a22008","url":"docs/api/wa-js/interfaces/group.EventTypes/index.html"},{"revision":"3f63f85259c4eb5b5fccb1c1514c46f6","url":"docs/api/wa-js/interfaces/labels.AddOrRemoveLabelsOptions/index.html"},{"revision":"4ad0fdce4321ab880690871784cefca6","url":"docs/api/wa-js/interfaces/labels.DeleteLabelReturn/index.html"},{"revision":"2da2da4d7a39ac5451b5f965a5c1ad1d","url":"docs/api/wa-js/interfaces/labels.EventTypes/index.html"},{"revision":"90d45453ae4a17c23ef314c2949f0988","url":"docs/api/wa-js/interfaces/labels.Label/index.html"},{"revision":"dada485fbd41c1ae7d33aa71ba6c0ed8","url":"docs/api/wa-js/interfaces/profile.EventTypes/index.html"},{"revision":"fba6ed478ca624ad0524663616175775","url":"docs/api/wa-js/interfaces/status.EventTypes/index.html"},{"revision":"00c196bdfb6cb6ad8c6304fbca0ae4df","url":"docs/api/wa-js/interfaces/status.SendStatusOptions/index.html"},{"revision":"2cc7406c1e965a60de4aea8a4ec346ea","url":"docs/api/wa-js/interfaces/status.TextStatusOptions/index.html"},{"revision":"f991be13ae873d6dbe78e84c233f1bae","url":"docs/api/wa-js/interfaces/whatsapp.functions.LinkPreviewResult/index.html"},{"revision":"101e122fe72b735e7899c746c16f1c80","url":"docs/api/wa-js/interfaces/whatsapp.functions.MsgFindQueryParams/index.html"},{"revision":"d876fcbfae0bc84dc51b1afcde886b0c","url":"docs/api/wa-js/interfaces/whatsapp.functions.QueryGroupInviteResult/index.html"},{"revision":"b515b6afb6d2ec64f1c42c5204515164","url":"docs/api/wa-js/interfaces/whatsapp.functions.ReactionData/index.html"},{"revision":"92b21eba8ec93d6854a2847bdf55711c","url":"docs/api/wa-js/interfaces/whatsapp.functions.SimpleAckData/index.html"},{"revision":"fb15335bc9c52ae164a149c5dbf606ad","url":"docs/api/wa-js/interfaces/whatsapp.functions.ThumbnailData/index.html"},{"revision":"61a248d16ab13c6026928b79ade19b02","url":"docs/api/wa-js/interfaces/whatsapp.ModelOptions/index.html"},{"revision":"f65202a960290278ef0cba0abe633c13","url":"docs/api/wa-js/interfaces/whatsapp.PropsChatBase/index.html"},{"revision":"d2bab948ac4461d194568fbfae612dab","url":"docs/api/wa-js/interfaces/whatsapp.SessionChatBase/index.html"},{"revision":"4a3343008a2ea7139aaac9c92443eb9c","url":"docs/api/wa-js/interfaces/whatsapp.VCardData/index.html"},{"revision":"8d55c55d36089997a6ad8ee2c984d496","url":"docs/api/wa-js/modules/index.html"},{"revision":"eb5c6ebe8b0b7742d96ea5c144f7e7b4","url":"docs/api/wa-js/namespaces/blocklist/index.html"},{"revision":"d397ea3e11830652dcd7ea5f5fd43ab3","url":"docs/api/wa-js/namespaces/call/index.html"},{"revision":"46ef20d1980e072f4d7c4c30a57946df","url":"docs/api/wa-js/namespaces/catalog/index.html"},{"revision":"cdf6ce3fe1074de477ebf90e7642d42d","url":"docs/api/wa-js/namespaces/chat/index.html"},{"revision":"e78d27bd8490b7252cc3d95b4ed5670e","url":"docs/api/wa-js/namespaces/config/index.html"},{"revision":"fcefb370f9a7a0613e60713abf90bc30","url":"docs/api/wa-js/namespaces/conn/index.html"},{"revision":"652e91548ef35b7fce3c78dd7cdcbc64","url":"docs/api/wa-js/namespaces/contact/index.html"},{"revision":"2454a773776b21882fc5cdd0fb515d48","url":"docs/api/wa-js/namespaces/ev/index.html"},{"revision":"3dc1db5b4b2725de357419907001a677","url":"docs/api/wa-js/namespaces/group/index.html"},{"revision":"a7c3d238caf96943e4b32afc7f17d574","url":"docs/api/wa-js/namespaces/labels/index.html"},{"revision":"f25f0df5fafb73e0eb3722c30ffcd48a","url":"docs/api/wa-js/namespaces/profile/index.html"},{"revision":"dcc0cbca1482a1de7358a0f5dfdcaf62","url":"docs/api/wa-js/namespaces/status/index.html"},{"revision":"0cc9a8625f81c08ea7cb515da50111e6","url":"docs/api/wa-js/namespaces/util/index.html"},{"revision":"cc508b0ec5ffbddfbd57d9f49e753617","url":"docs/api/wa-js/namespaces/webpack/index.html"},{"revision":"8b94e684ee45e1430c5e75510c75587e","url":"docs/api/wa-js/namespaces/whatsapp.Base64/index.html"},{"revision":"21c739814dcad43bd131476a2222f4eb","url":"docs/api/wa-js/namespaces/whatsapp.Browser/index.html"},{"revision":"d656a0191d06af4ed572f8b5c08caa65","url":"docs/api/wa-js/namespaces/whatsapp.ChatPresence/index.html"},{"revision":"17e083aa86487e8a00bdc479e6c7ee2a","url":"docs/api/wa-js/namespaces/whatsapp.enums/index.html"},{"revision":"5a8f722d43c0aa1dd9dacddaab89ff6b","url":"docs/api/wa-js/namespaces/whatsapp.functions/index.html"},{"revision":"4f76bf9340bdafe3a5cb65842c78cbcd","url":"docs/api/wa-js/namespaces/whatsapp.ImageUtils/index.html"},{"revision":"889081abc3ae8d02bfe41c8db4c1b51a","url":"docs/api/wa-js/namespaces/whatsapp.MediaObjectUtil/index.html"},{"revision":"1c586155c1d173f2186c762df4359d97","url":"docs/api/wa-js/namespaces/whatsapp.MediaPrep/index.html"},{"revision":"877590b2430b4ad78ee406125ec9723e","url":"docs/api/wa-js/namespaces/whatsapp.MediaUtils/index.html"},{"revision":"f56dc84de2e5f91c94c29bbb1b5c527d","url":"docs/api/wa-js/namespaces/whatsapp.multidevice.adv/index.html"},{"revision":"849a79999f7270cffb399098be363401","url":"docs/api/wa-js/namespaces/whatsapp.multidevice/index.html"},{"revision":"be142c7091dd0d4099601a2293c8c3ce","url":"docs/api/wa-js/namespaces/whatsapp.UserPrefs/index.html"},{"revision":"f49216714915fb94ad66eb6d19c9767b","url":"docs/api/wa-js/namespaces/whatsapp.VCard/index.html"},{"revision":"b3ed8b3e842c617bdccc2d9442fe68f0","url":"docs/api/wa-js/namespaces/whatsapp.WidFactory/index.html"},{"revision":"58cd4ebc5710d51697fd2fe12dbacf95","url":"docs/api/wa-js/namespaces/whatsapp/index.html"},{"revision":"564dd0bc79fb3ca1468f96bf964a3c26","url":"docs/api/wa-version/index.html"},{"revision":"0c96a7e70561d0b781a870b915a0c52f","url":"docs/api/wa-version/interfaces/WaVersionInfo/index.html"},{"revision":"a8374613cee951da00d938e3821ed053","url":"docs/api/wa-version/modules/index.html"},{"revision":"611b4ea6be1873f7a21a21ea756693af","url":"docs/api/wa-version/namespaces/constants/index.html"},{"revision":"8bf885b76baaa448fa4d9f0afe311e62","url":"docs/tutorial/basics/basic-functions/index.html"},{"revision":"6d21fbde540569002bc2e2b84c99c70b","url":"docs/tutorial/basics/configuring-logger/index.html"},{"revision":"7efcb639c7ce5529754e5ff01298e9ab","url":"docs/tutorial/basics/creating-client/index.html"},{"revision":"20b46a7c4ba978672030f6305e14cb75","url":"docs/tutorial/basics/installation/index.html"},{"revision":"252f47030ae990824934873fd92b88c6","url":"docs/tutorial/basics/receiving-messages/index.html"},{"revision":"f8070de5b1d809631911699226d6b22a","url":"docs/tutorial/intro/index.html"},{"revision":"ed3eca6d476a5ee9545ce21de4cde6bd","url":"google30fb78658b6dbb6c.html"},{"revision":"236163aec9bdc815dc7486650e3a8c79","url":"googlef129bd5eb80b346c.html"},{"revision":"3c62d61ef752bc38f23a19f050585388","url":"index.html"},{"revision":"505a0b65c31974e1c9b6bb9090ba9247","url":"manifest.json"},{"revision":"d2a973f815dada979f7011cb908d7110","url":"search/index.html"},{"revision":"9a92e61a332bb46b0944ffba42cc1e39","url":"swagger/wppconnect-server/index.html"},{"revision":"d5276598b995907e13bc9419a89c64dc","url":"assets/images/boy-image-0ee58a6a9928587b8fae998188e26499.png"},{"revision":"d252db525dec5ed7407e2ca790fd49a5","url":"assets/images/business-3d-businessman-and-coffee-21259a47e7f41b5d7fe3eff42509fbb8.png"},{"revision":"4c3f82723fbc7ee72758a4d53e34b89c","url":"assets/images/business-3d-businessman-walking-acd0f81b4613be936a0e402466460490.png"},{"revision":"dd519d95d291878f83ef846333183526","url":"assets/images/image-notebook-hero-ea9f03181f11bece389462f4476e17b8.png"},{"revision":"1e103cfd112d8ec6782f3e1ad5fb6fb6","url":"assets/images/notebook-docker-3160c9c7479aea8e72257f7af617e572.png"},{"revision":"5829be7f1aaa4d1a6d38dda1c632a470","url":"assets/images/notebook-future-9c1f820c143db2abd666a2b07a902e48.png"},{"revision":"9f9678d96e975c9fd879be582a973d58","url":"assets/images/smile-emoji-eb8aa4d0bed16bfefd8a57101895544f.png"},{"revision":"52e48d52adbca7edd2d023ba3f04d8a1","url":"assets/images/wppconnect-banner-d5a99fa83ce99a35a67fa1004c1ee4a0.jpeg"},{"revision":"e609198ea391bad23d85884c64481f9c","url":"favicon.ico"},{"revision":"30ec2602a913e570b715053795c8078e","url":"img/android-icon-144x144.png"},{"revision":"ec7b33d4c9bc6e8a8b5f740d67d71a7a","url":"img/android-icon-192x192.png"},{"revision":"9a534d8e3bd45268c994d165b3f59a7c","url":"img/android-icon-36x36.png"},{"revision":"74d0206179a7d08fc9f711bb3f8f1c11","url":"img/android-icon-48x48.png"},{"revision":"d05b61a8831fddd218185065f1a1f991","url":"img/android-icon-72x72.png"},{"revision":"28277bcd3ea9f611ff96e5afa59b03ec","url":"img/android-icon-96x96.png"},{"revision":"109148575aadfebcdc4dc9cb0ab51ef8","url":"img/apple-icon-114x114.png"},{"revision":"8b23f85688f098b90d34c7ebd9f5f7b7","url":"img/apple-icon-120x120.png"},{"revision":"30ec2602a913e570b715053795c8078e","url":"img/apple-icon-144x144.png"},{"revision":"551d03badd5871022dda2cfc45e8ced2","url":"img/apple-icon-152x152.png"},{"revision":"c86314052d596b72169ebf9ea2cdd256","url":"img/apple-icon-180x180.png"},{"revision":"3e4dd9973aeeba9e9440d462c4e125ba","url":"img/apple-icon-57x57.png"},{"revision":"0d87b2ec452ae85b66bbd313f9263cb6","url":"img/apple-icon-60x60.png"},{"revision":"d05b61a8831fddd218185065f1a1f991","url":"img/apple-icon-72x72.png"},{"revision":"08610e53f8b51629558e466ebfa7f4d2","url":"img/apple-icon-76x76.png"},{"revision":"ebbcca8bce3df96c60c6e6dd7951b67f","url":"img/apple-icon-precomposed.png"},{"revision":"ebbcca8bce3df96c60c6e6dd7951b67f","url":"img/apple-icon.png"},{"revision":"75c05a5f20c84753138bd0c846e9ef3d","url":"img/favicon-16x16.png"},{"revision":"5543eec2de64f2a67c741012ab0431e0","url":"img/favicon-32x32.png"},{"revision":"28277bcd3ea9f611ff96e5afa59b03ec","url":"img/favicon-96x96.png"},{"revision":"e609198ea391bad23d85884c64481f9c","url":"img/favicon.ico"},{"revision":"a9346a9fce91c5298f9e0f143c89ff01","url":"img/logo192.png"},{"revision":"7bdf6227323a01a73d4e1d26b75a97a3","url":"img/logo512.png"},{"revision":"30ec2602a913e570b715053795c8078e","url":"img/ms-icon-144x144.png"},{"revision":"65d04280c602bf71bf2166b39e6d0097","url":"img/ms-icon-150x150.png"},{"revision":"775fdb86a60b944051becf7554b61113","url":"img/ms-icon-310x310.png"},{"revision":"49ceef4cd6b8d94e45db35db84ce7fa6","url":"img/ms-icon-70x70.png"},{"revision":"a6b83d7b4c3cf36cb21eb7a9721716dd","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"b64ae8e3c10e5ff2ec85a653cfe6edf8","url":"img/undraw_docusaurus_react.svg"},{"revision":"8fa6e79a15c385d7b2dc4bb761a2e9e3","url":"img/undraw_docusaurus_tree.svg"},{"revision":"52e48d52adbca7edd2d023ba3f04d8a1","url":"img/wppconnect-banner.jpeg"}];
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