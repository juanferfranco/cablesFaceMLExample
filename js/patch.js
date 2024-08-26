var CABLES;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ core)
});

// NAMESPACE OBJECT: ./src/core/base64.js
var base64_namespaceObject = {};
__webpack_require__.r(base64_namespaceObject);
__webpack_require__.d(base64_namespaceObject, {
  b64decTypedArray: () => (b64decTypedArray),
  b64encTypesArray: () => (b64encTypesArray),
  base64Chars: () => (base64Chars),
  base64lookup: () => (base64lookup)
});

// NAMESPACE OBJECT: ./src/core/utils.js
var utils_namespaceObject = {};
__webpack_require__.r(utils_namespaceObject);
__webpack_require__.d(utils_namespaceObject, {
  UTILS: () => (UTILS),
  ajax: () => (ajax),
  ajaxSync: () => (ajaxSync),
  basename: () => (basename),
  cacheBust: () => (cacheBust),
  clamp: () => (clamp),
  cleanJson: () => (cleanJson),
  copyArray: () => (copyArray),
  filename: () => (filename),
  generateUUID: () => (generateUUID),
  getShortOpName: () => (getShortOpName),
  keyCodeToName: () => (keyCodeToName),
  logStack: () => (logStack),
  map: () => (map),
  prefixedHash: () => (prefixedHash),
  request: () => (request),
  shortId: () => (shortId),
  shuffleArray: () => (shuffleArray),
  simpleId: () => (simpleId),
  smoothStep: () => (smoothStep),
  smootherStep: () => (smootherStep),
  uuid: () => (uuid)
});

// NAMESPACE OBJECT: ./src/core/anim.js
var anim_namespaceObject = {};
__webpack_require__.r(anim_namespaceObject);
__webpack_require__.d(anim_namespaceObject, {
  ANIM: () => (ANIM),
  Anim: () => (Anim)
});

;// CONCATENATED MODULE: ./src/core/base64.js
const base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

// Use a lookup table to find the index.
const _base64lookup = new Uint8Array(256);
for (let i = 0; i < base64Chars.length; i++) _base64lookup[base64Chars.charCodeAt(i)] = i;

const base64lookup = _base64lookup;

const b64encTypesArray = function (arraybuffer)
{
    if (arraybuffer.buffer) arraybuffer = arraybuffer.buffer;
    let bytes = new Uint8Array(arraybuffer),
        i,
        len = bytes.length,
        base64 = "";

    for (i = 0; i < len; i += 3)
    {
        base64 += base64Chars[bytes[i] >> 2];
        base64 += base64Chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
        base64 += base64Chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
        base64 += base64Chars[bytes[i + 2] & 63];
    }

    if (len % 3 === 2) base64 = base64.substring(0, base64.length - 1) + "=";
    else if (len % 3 === 1) base64 = base64.substring(0, base64.length - 2) + "==";

    return base64;
};

const b64decTypedArray = function (base64)
{
    let bufferLength = base64.length * 0.75,
        len = base64.length,
        i,
        p = 0,
        encoded1,
        encoded2,
        encoded3,
        encoded4;

    if (base64[base64.length - 1] === "=")
    {
        bufferLength--;
        if (base64[base64.length - 2] === "=") bufferLength--;
    }

    let arraybuffer = new ArrayBuffer(bufferLength),
        bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i += 4)
    {
        encoded1 = base64lookup[base64.charCodeAt(i)];
        encoded2 = base64lookup[base64.charCodeAt(i + 1)];
        encoded3 = base64lookup[base64.charCodeAt(i + 2)];
        encoded4 = base64lookup[base64.charCodeAt(i + 3)];

        bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
        bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
        bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arraybuffer;
};

;// CONCATENATED MODULE: ./src/core/constants.js
const CONSTANTS = {
    "ANIM": {
        "EASINGS": [
            "linear",
            "absolute",
            "smoothstep",
            "smootherstep",
            "Cubic In",
            "Cubic Out",
            "Cubic In Out",
            "Expo In",
            "Expo Out",
            "Expo In Out",
            "Sin In",
            "Sin Out",
            "Sin In Out",
            "Quart In",
            "Quart Out",
            "Quart In Out",
            "Quint In",
            "Quint Out",
            "Quint In Out",
            "Back In",
            "Back Out",
            "Back In Out",
            "Elastic In",
            "Elastic Out",
            "Bounce In",
            "Bounce Out",
        ],
        "EASING_LINEAR": 0,
        "EASING_ABSOLUTE": 1,
        "EASING_SMOOTHSTEP": 2,
        "EASING_SMOOTHERSTEP": 3,
        "EASING_CUBICSPLINE": 4,

        "EASING_CUBIC_IN": 5,
        "EASING_CUBIC_OUT": 6,
        "EASING_CUBIC_INOUT": 7,

        "EASING_EXPO_IN": 8,
        "EASING_EXPO_OUT": 9,
        "EASING_EXPO_INOUT": 10,

        "EASING_SIN_IN": 11,
        "EASING_SIN_OUT": 12,
        "EASING_SIN_INOUT": 13,

        "EASING_BACK_IN": 14,
        "EASING_BACK_OUT": 15,
        "EASING_BACK_INOUT": 16,

        "EASING_ELASTIC_IN": 17,
        "EASING_ELASTIC_OUT": 18,

        "EASING_BOUNCE_IN": 19,
        "EASING_BOUNCE_OUT": 21,

        "EASING_QUART_IN": 22,
        "EASING_QUART_OUT": 23,
        "EASING_QUART_INOUT": 24,

        "EASING_QUINT_IN": 25,
        "EASING_QUINT_OUT": 26,
        "EASING_QUINT_INOUT": 27,
    },

    "OP": {
        "OP_PORT_TYPE_VALUE": 0,
        "OP_PORT_TYPE_NUMBER": 0,
        "OP_PORT_TYPE_FUNCTION": 1,
        "OP_PORT_TYPE_TRIGGER": 1,
        "OP_PORT_TYPE_OBJECT": 2,
        "OP_PORT_TYPE_TEXTURE": 2,
        "OP_PORT_TYPE_ARRAY": 3,
        "OP_PORT_TYPE_DYNAMIC": 4,
        "OP_PORT_TYPE_STRING": 5,

        "OP_VERSION_PREFIX": "_v",
    },

    "PORT": {
        "PORT_DIR_IN": 0,
        "PORT_DIR_OUT": 1,
    },

    "PACO": {
        "PACO_CLEAR": 0,
        "PACO_VALUECHANGE": 1,
        "PACO_OP_DELETE": 2,
        "PACO_UNLINK": 3,
        "PACO_LINK": 4,
        "PACO_LOAD": 5,
        "PACO_OP_CREATE": 6,
        "PACO_OP_ENABLE": 7,
        "PACO_OP_DISABLE": 8,
        "PACO_UIATTRIBS": 9,
        "PACO_VARIABLES": 10,
        "PACO_TRIGGERS": 11,
        "PACO_PORT_SETVARIABLE": 12,
        "PACO_PORT_SETANIMATED": 13,
        "PACO_PORT_ANIM_UPDATED": 14,
        "PACO_DESERIALIZE": 15

    },
};

;// CONCATENATED MODULE: ./src/core/utils.js

/**
 * @namespace external:CABLES#Utils
 */



const UTILS = {};
/**
 * Merge two Float32Arrays.
 * @function float32Concat
 * @memberof Utils
 * @param {Float32Array} first Left-hand side array
 * @param {Float32Array} second Right-hand side array
 * @return {Float32Array}
 * @static
 */
UTILS.float32Concat = function (first, second)
{
    if (!(first instanceof Float32Array)) first = new Float32Array(first);
    if (!(second instanceof Float32Array)) second = new Float32Array(second);

    const result = new Float32Array(first.length + second.length);

    result.set(first);
    result.set(second, first.length);

    return result;
};

/**
 * get op shortname: only last part of fullname and without version
 * @function getShortOpName
 * @memberof CABLES
 * @param {string} fullname full op name
 * @static
 */
const getShortOpName = function (fullname)
{
    let name = fullname.split(".")[fullname.split(".").length - 1];

    if (name.contains(CONSTANTS.OP.OP_VERSION_PREFIX))
    {
        const n = name.split(CONSTANTS.OP.OP_VERSION_PREFIX)[1];
        name = name.substring(0, name.length - (CONSTANTS.OP.OP_VERSION_PREFIX + n).length);
    }
    return name;
};

/**
 * randomize order of an array
 * @function shuffleArray
 * @memberof Utils
 * @param {Array|Float32Array} array {Array} original
 * @return {Array|Float32Array} shuffled array
 * @static
 */
const shuffleArray = function (array)
{
    for (let i = array.length - 1; i > 0; i--)
    {
        const j = Math.floor(Math.seededRandom() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};


/**
 * generate a short "relativly unique" id
 * @function shortId
 * @memberof Utils
 * @return {String} generated ID
 * @static
 */

const _shortIds = {};
const _shortId = function ()
{
    let str = Math.random().toString(36).substr(2, 9);

    if (_shortIds.hasOwnProperty(str)) str = _shortId();
    _shortIds[str] = true;
    return str;
};
const shortId = _shortId;


/**
 * generate a UUID
 * @function uuid
 * @memberof Utils
 * @return {String} generated UUID
 * @static
 */
const _uuid = function ()
{
    let d = new Date().getTime();
    const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) =>
    {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
};
const uuid = _uuid;
const generateUUID = _uuid;



function cleanJson(obj)
{
    for (const i in obj)
    {
        if (obj[i] && typeof objValue === "object" && obj[i].constructor === Object) obj[i] = cleanJson(obj[i]);

        if (obj[i] === null || obj[i] === undefined) delete obj[i];
        else if (Array.isArray(obj[i]) && obj[i].length == 0) delete obj[i];
    }

    return obj;
}


/**
 * @see http://stackoverflow.com/q/7616461/940217
 * @memberof Utils
 * @param str
 * @param prefix
 * @return {string}
 */
const _prefixedHash = function (str, prefix = "id")
{
    let hash = 0;
    if (Array.prototype.reduce)
    {
        hash = str.split("").reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0);
    }
    else
    {
        if (str.length > 0)
        {
            for (let i = 0; i < str.length; i++)
            {
                let character = str.charCodeAt(i);
                hash = ((hash << 5) - hash) + character;
                hash &= hash; // Convert to 32bit integer
            }
        }
    }
    return prefix + "" + hash;
};
const prefixedHash = _prefixedHash;

/**
 * generate a simple ID
 * @function simpleId
 * @memberof Utils
 * @return {Number} new id
 * @static
 */
let simpleIdCounter = 0;
const simpleId = function ()
{
    simpleIdCounter++;
    return simpleIdCounter;
};

/**
 * smoothStep a value
 * @function smoothStep
 * @memberof Utils
 * @function
 * @param {Number} perc value value to be smoothed [0-1]
 * @return {Number} smoothed value
 * @static
 */
const smoothStep = function (perc)
{
    const x = Math.max(0, Math.min(1, (perc - 0) / (1 - 0)));
    perc = x * x * (3 - 2 * x); // smoothstep
    return perc;
};

/**
 * smootherstep a value
 * @function smootherStep
 * @memberof Utils
 * @param {Number} perc value to be smoothed [0-1]
 * @return {Number} smoothed value
 * @static
 */
const smootherStep = function (perc)
{
    const x = Math.max(0, Math.min(1, (perc - 0) / (1 - 0)));
    perc = x * x * x * (x * (x * 6 - 15) + 10); // smootherstep
    return perc;
};


/**
 * clamp number / make sure its between min/max
 * @function clamp
 * @memberof Utils
 * @param {Number} value value to be mapped
 * @param {Number} min minimum value
 * @param {Number} max maximum value
 * @static
 */
const clamp = function (value, min, max)
{
    return Math.min(Math.max(value, min), max);
};

/**
 * map a value in a range to a value in another range
 * @function map
 * @memberof Utils
 * @param {Number} x value to be mapped
 * @param {Number} _oldMin old range minimum value
 * @param {Number} _oldMax old range maximum value
 * @param {Number} _newMin new range minimum value
 * @param {Number} _newMax new range maximum value
 * @param {Number} _easing
 * @return {Number} mapped value
 * @static
 */
const map = function (x, _oldMin, _oldMax, _newMin, _newMax, _easing)
{
    if (x >= _oldMax) return _newMax;
    if (x <= _oldMin) return _newMin;

    let reverseInput = false;
    const oldMin = Math.min(_oldMin, _oldMax);
    const oldMax = Math.max(_oldMin, _oldMax);
    if (oldMin != _oldMin) reverseInput = true;

    let reverseOutput = false;
    const newMin = Math.min(_newMin, _newMax);
    const newMax = Math.max(_newMin, _newMax);
    if (newMin != _newMin) reverseOutput = true;

    let portion = 0;
    let r = 0;

    if (reverseInput) portion = ((oldMax - x) * (newMax - newMin)) / (oldMax - oldMin);
    else portion = ((x - oldMin) * (newMax - newMin)) / (oldMax - oldMin);

    if (reverseOutput) r = newMax - portion;
    else r = portion + newMin;

    if (!_easing) return r;
    if (_easing == 1)
    {
        // smoothstep
        x = Math.max(0, Math.min(1, (r - _newMin) / (_newMax - _newMin)));
        return _newMin + x * x * (3 - 2 * x) * (_newMax - _newMin);
    }
    if (_easing == 2)
    {
        // smootherstep
        x = Math.max(0, Math.min(1, (r - _newMin) / (_newMax - _newMin)));
        return _newMin + x * x * x * (x * (x * 6 - 15) + 10) * (_newMax - _newMin);
    }

    return r;
};

/**
 * @namespace Math
 */
/**
 * set random seed for seededRandom()
 * @memberof Math
 * @type Number
 * @static
 */
Math.randomSeed = 1;


Math.setRandomSeed = function (seed)
{
    // https://github.com/cables-gl/cables_docs/issues/622
    Math.randomSeed = seed * 50728129;
    if (seed != 0)
    {
        Math.randomSeed = Math.seededRandom() * 17624813;
        Math.randomSeed = Math.seededRandom() * 9737333;
    }
};


/**
 * generate a seeded random number
 * @function seededRandom
 * @memberof Math
 * @param {Number} max minimum possible random number
 * @param {Number} min maximum possible random number
 * @return {Number} random value
 * @static
 */
Math.seededRandom = function (max, min)
{
    if (Math.randomSeed === 0) Math.randomSeed = Math.random() * 999;
    max = max || 1;
    min = min || 0;

    Math.randomSeed = (Math.randomSeed * 9301 + 49297) % 233280;
    const rnd = Math.randomSeed / 233280.0;

    return min + rnd * (max - min);
};


// ----------------------------------------------------------------

/**
 * returns true if parameter is a number
 * @function isNumeric
 * @memberof Utils
 * @param {Any} n value The value to check.
 * @return {Boolean}
 * @static
 */
UTILS.isNumeric = function (n)
{
    return !isNaN(parseFloat(n)) && isFinite(n);
};

/**
 * returns true if parameter is array
 * @function isArray
 * @param {Any} v value Value to check
 * @memberof Utils
 * @return {Boolean}
 * @static
 */
UTILS.isArray = function (v)
{
    return Object.prototype.toString.call(v) === "[object Array]";
};

/**
 * @namespace String
 */

/**
 * append a linebreak to a string
 * @function endl
 * @memberof String
 * @return {String} string with newline break appended ('\n')
 */
String.prototype.endl = function ()
{
    return this + "\n";
};

/**
 * return true if string starts with prefix
 * @function startsWith
 * @memberof String
 * @param {String} prefix The prefix to check.
 * @return {Boolean}
 */
String.prototype.startsWith = function (prefix)
{
    return this.indexOf(prefix) === 0;
};

/**
 * return true if string ends with suffix
 * @function endsWith
 * @memberof String
 * @param {String} suffix
 * @return {Boolean}
 */
String.prototype.endsWith = String.prototype.endsWith || function (suffix)
{
    return this.match(suffix + "$") == suffix;
};

/**
 * return true if string contains string
 * @function contains
 * @memberof String
 * @param {String} searchStr
 * @return {Boolean}
 */
String.prototype.contains = String.prototype.contains || function (searchStr)
{
    return this.indexOf(searchStr) > -1;
};



// ----------------------------------------------------------------

/**
 * append a unique/random parameter to a url, so the browser is forced to reload the file, even if its cached
 * @function cacheBust
 * @static
 * @memberof Utils
 * @param {String} url The url to append the cachebuster parameter to.
 * @return {String} url with cachebuster parameter
 */
const cacheBust = function (url = "")
{
    if (!url) return "";
    if (url.startsWith("data:")) return;
    if (url.contains("?")) url += "&";
    else url += "?";
    return url + "cache=" + CABLES.uuid();
};

/**
 * copy the content of an array
 * @function copyArray
 * @static
 * @memberof Utils
 * @param {Array} src sourceArray
 * @param {Array} dst optional
 * @return {Array} dst
 */
const copyArray = function (src, dst)
{
    if (!src) return null;
    dst = dst || [];
    dst.length = src.length;
    for (let i = 0; i < src.length; i++)
    {
        dst[i] = src[i];
    }

    return dst;
};


/**
 * return the filename part of a url without extension
 * @function basename
 * @static
 * @memberof Utils
 * @param {String} url
 * @return {String} just the filename
 */
const basename = function (url)
{
    let name = CABLES.filename(url);

    const parts2 = name.split(".");
    name = parts2[0];

    return name;
};

/**
 * output a stacktrace to the console
 * @function logStack
 * @static
 * @memberof Utils
 */
const logStack = function ()
{
    console.log("logstack", (new Error()).stack);
};

/**
 * return the filename part of a url
 * @function filename
 * @static
 * @memberof Utils
 * @param {String} url
 * @return {String} just the filename
 */
const filename = function (url)
{
    let name = "";
    if (!url) return "";

    if (url.startsWith("data:") && url.contains(":"))
    {
        const parts = url.split(",");
        return parts[0];
    }

    let parts = (url + "").split("/");
    if (parts.length > 0)
    {
        const str = parts[parts.length - 1];
        let parts2 = str.split("?");
        name = parts2[0];
    }

    return name || "";
};


const ajaxSync = function (url, cb, method, post, contenttype)
{
    request({
        "url": url,
        "cb": cb,
        "method": method,
        "data": post,
        "contenttype": contenttype,
        "sync": true,
    });
};

/**
 * make an ajax request
 * @static
 * @function ajax
 * @param url
 * @param cb
 * @param method
 * @param post
 * @param contenttype
 * @param jsonP
 * @param headers
 * @param options
 */
const ajax = function (url, cb, method, post, contenttype, jsonP, headers = {}, options = {})
{
    const requestOptions = {
        "url": url,
        "cb": cb,
        "method": method,
        "data": post,
        "contenttype": contenttype,
        "sync": false,
        "jsonP": jsonP,
        "headers": headers,
    };
    if (options && options.credentials) requestOptions.credentials = options.credentials;
    request(requestOptions);
};

const request = function (options)
{
    if (!options.hasOwnProperty("asynch")) options.asynch = true;

    let xhr;
    try
    {
        xhr = new XMLHttpRequest();
    }
    catch (e) {}

    xhr.onreadystatechange = function ()
    {
        if (xhr.readyState != 4) return;

        if (options.cb)
        {
            if (xhr.status == 200 || xhr.status == 0) options.cb(false, xhr.responseText, xhr);
            else options.cb(true, xhr.responseText, xhr);
        }
    };

    try
    {
        xhr.open(options.method ? options.method.toUpperCase() : "GET", options.url, !options.sync);
    }
    catch (e)
    {
        if (options.cb && e) options.cb(true, e.msg, xhr);
    }

    if (typeof options.headers === "object")
    {
        if (options.headers)
        {
            const keys = Object.keys(options.headers);
            for (let i = 0; i < keys.length; i++)
            {
                const name = keys[i];
                const value = options.headers[name];
                xhr.setRequestHeader(name, value);
            }
        }
    }

    if (options.credentials && options.credentials !== "omit")
    {
        xhr.withCredentials = true;
    }

    try
    {
        if (!options.post && !options.data)
        {
            xhr.send();
        }
        else
        {
            xhr.setRequestHeader(
                "Content-type",
                options.contenttype ? options.contenttype : "application/x-www-form-urlencoded",
            );
            xhr.send(options.data || options.post);
        }
    }
    catch (e)
    {
        if (options.cb) options.cb(true, e.msg, xhr);
    }
};


const keyCodeToName = function (keyCode)
{
    if (!keyCode && keyCode !== 0) return "Unidentified";
    const keys = {
        "8": "Backspace",
        "9": "Tab",
        "12": "Clear",
        "13": "Enter",
        "16": "Shift",
        "17": "Control",
        "18": "Alt",
        "19": "Pause",
        "20": "CapsLock",
        "27": "Escape",
        "32": "Space",
        "33": "PageUp",
        "34": "PageDown",
        "35": "End",
        "36": "Home",
        "37": "ArrowLeft",
        "38": "ArrowUp",
        "39": "ArrowRight",
        "40": "ArrowDown",
        "45": "Insert",
        "46": "Delete",
        "112": "F1",
        "113": "F2",
        "114": "F3",
        "115": "F4",
        "116": "F5",
        "117": "F6",
        "118": "F7",
        "119": "F8",
        "120": "F9",
        "121": "F10",
        "122": "F11",
        "123": "F12",
        "144": "NumLock",
        "145": "ScrollLock",
        "224": "Meta"
    };
    if (keys[keyCode])
    {
        return keys[keyCode];
    }
    else
    {
        return String.fromCharCode(keyCode);
    }
};
// ----------------------------------------------------------------

window.performance = window.performance || {
    "offset": Date.now(),
    "now": function now()
    {
        return Date.now() - this.offset;
    },
};



;// CONCATENATED MODULE: ../shared/client/src/logger.js
/* eslint-disable no-console */

class Logger
{
    constructor(initiator)
    {
        this.initiator = initiator;
    }

    stack(t)
    {
        console.info("[" + this.initiator + "] ", t);
        console.log((new Error()).stack);
    }

    groupCollapsed(t)
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments)) || !CABLES.logSilent) console.log("[" + this.initiator + "]", ...arguments);

        console.groupCollapsed("[" + this.initiator + "] " + t);
    }

    table(t)
    {
        console.table(t);
    }

    groupEnd()
    {
        console.groupEnd();
    }

    error()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 2 }, ...arguments)) || !CABLES.logSilent)
            console.error("[" + this.initiator + "]", ...arguments);
    }

    errorGui()
    {
        if (CABLES.UI) CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 2 }, ...arguments);
    }

    warn()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 1 }, ...arguments)) || !CABLES.logSilent)
            console.warn("[" + this.initiator + "]", ...arguments);
    }

    verbose()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments)) || !CABLES.logSilent)
            console.log("[" + this.initiator + "]", ...arguments);
    }

    info()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments)) || !CABLES.logSilent)
            console.info("[" + this.initiator + "]", ...arguments);
    }

    log()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments)) || !CABLES.logSilent)
            console.log("[" + this.initiator + "]", ...arguments);
    }

    logGui()
    {
        if (CABLES.UI) CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments);
    }

    userInteraction(text)
    {
        // this.log({ "initiator": "userinteraction", "text": text });
    }
}

;// CONCATENATED MODULE: ./src/core/anim_key.js


const Key = function (obj)
{
    this.time = 0.0;
    this.value = 0.0;
    // this.ui = null;
    this.onChange = null;
    this._easing = 0;
    // this.bezTangIn = 0;
    // this.bezTangOut = 0;
    // this.bezTime = 0.5;
    // this.bezValue = 0;
    // this.bezTimeIn = -0.5;
    // this.bezValueIn = 0;

    this.cb = null;
    this.cbTriggered = false;

    // const bezierAnim = null;
    // this._updateBezier = false;

    this.setEasing(CONSTANTS.ANIM.EASING_LINEAR);
    this.set(obj);
};

Key.cubicSpline = function (perc, key1, key2)
{
    let
        previousPoint = key1.value,
        previousTangent = key1.bezTangOut,
        nextPoint = key2.value,
        nextTangent = key2.bezTangIn;
    let t = perc;
    let t2 = t * t;
    let t3 = t2 * t;

    return (2 * t3 - 3 * t2 + 1) * previousPoint + (t3 - 2 * t2 + t) * previousTangent + (-2 * t3 + 3 * t2) * nextPoint + (t3 - t2) * nextTangent;
};

Key.easeCubicSpline = function (perc, key2)
{
    return Key.cubicSpline(perc, this, key2);
};


Key.linear = function (perc, key1, key2)
{
    return parseFloat(key1.value) + parseFloat(key2.value - key1.value) * perc;
};

Key.easeLinear = function (perc, key2)
{
    return Key.linear(perc, this, key2);
};

Key.easeAbsolute = function (perc, key2)
{
    return this.value;
};

const easeExpoIn = function (t)
{
    return (t = 2 ** (10 * (t - 1)));
};

Key.easeExpoIn = function (t, key2)
{
    t = easeExpoIn(t);
    return Key.linear(t, this, key2);
};

const easeExpoOut = function (t)
{
    t = -(2 ** (-10 * t)) + 1;
    return t;
};

Key.easeExpoOut = function (t, key2)
{
    t = easeExpoOut(t);
    return Key.linear(t, this, key2);
};

const easeExpoInOut = function (t)
{
    t *= 2;
    if (t < 1)
    {
        t = 0.5 * 2 ** (10 * (t - 1));
    }
    else
    {
        t--;
        t = 0.5 * (-(2 ** (-10 * t)) + 2);
    }
    return t;
};

Key.easeExpoInOut = function (t, key2)
{
    t = easeExpoInOut(t);
    return Key.linear(t, this, key2);
};

Key.easeSinIn = function (t, key2)
{
    t = -1 * Math.cos((t * Math.PI) / 2) + 1;
    return Key.linear(t, this, key2);
};

Key.easeSinOut = function (t, key2)
{
    t = Math.sin((t * Math.PI) / 2);
    return Key.linear(t, this, key2);
};

Key.easeSinInOut = function (t, key2)
{
    t = -0.5 * (Math.cos(Math.PI * t) - 1.0);
    return Key.linear(t, this, key2);
};

const easeCubicIn = function (t)
{
    t = t * t * t;
    return t;
};

Key.easeCubicIn = function (t, key2)
{
    t = easeCubicIn(t);
    return Key.linear(t, this, key2);
};


// b 0
// c 1/2 or 1
// d always 1
// easeOutCubic: function (x, t, b, c, d) {
//     return c*((t=t/d-1)*t*t + 1) + b;

Key.easeInQuint = function (t, key2)
{
    t = t * t * t * t * t;
    return Key.linear(t, this, key2);
};
Key.easeOutQuint = function (t, key2)
{
    t = (t -= 1) * t * t * t * t + 1;
    return Key.linear(t, this, key2);
};
Key.easeInOutQuint = function (t, key2)
{
    if ((t /= 0.5) < 1) t = 0.5 * t * t * t * t * t;
    else t = 0.5 * ((t -= 2) * t * t * t * t + 2);
    return Key.linear(t, this, key2);
};

Key.easeInQuart = function (t, key2)
{
    t = t * t * t * t;
    return Key.linear(t, this, key2);
};

Key.easeOutQuart = function (t, key2)
{
    // return -c * ((t=t/d-1)*t*t*t - 1) + b;
    t = -1 * ((t -= 1) * t * t * t - 1);
    return Key.linear(t, this, key2);
};

Key.easeInOutQuart = function (t, key2)
{
    if ((t /= 0.5) < 1) t = 0.5 * t * t * t * t;
    else t = -0.5 * ((t -= 2) * t * t * t - 2);
    return Key.linear(t, this, key2);
};

Key.bounce = function (t)
{
    if ((t /= 1) < 1 / 2.75) t = 7.5625 * t * t;
    else if (t < 2 / 2.75) t = 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
    else if (t < 2.5 / 2.75) t = 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
    else t = 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
    return t;
};

Key.easeInBounce = function (t, key2)
{
    return Key.linear(Key.bounce(t), this, key2);
    // return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d);
};

Key.easeOutBounce = function (t, key2)
{
    return Key.linear(Key.bounce(t), this, key2);
};

Key.easeInElastic = function (t, key2)
{
    let s = 1.70158;
    let p = 0;
    let a = 1;

    const b = 0;
    const d = 1;
    const c = 1;

    if (t === 0) t = b;
    else if ((t /= d) == 1) t = b + c;
    else
    {
        if (!p) p = d * 0.3;
        if (a < Math.abs(c))
        {
            a = c;
            s = p / 4;
        }
        else s = (p / (2 * Math.PI)) * Math.asin(c / a);
        t = -(a * 2 ** (10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b;
    }

    return Key.linear(t, this, key2);
};


Key.easeOutElastic = function (t, key2)
{
    let s = 1.70158;
    let p = 0;
    let a = 1;

    const b = 0;
    const d = 1;
    const c = 1;

    if (t === 0) t = b;
    else if ((t /= d) == 1) t = b + c;
    else
    {
        if (!p) p = d * 0.3;
        if (a < Math.abs(c))
        {
            a = c;
            s = p / 4;
        }
        else s = (p / (2 * Math.PI)) * Math.asin(c / a);
        t = a * 2 ** (-10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) + c + b;
    }

    return Key.linear(t, this, key2);
};

Key.easeInBack = function (t, key2)
{
    const s = 1.70158;
    t = t * t * ((s + 1) * t - s);

    return Key.linear(t, this, key2);
};

Key.easeOutBack = function (t, key2)
{
    const s = 1.70158;
    t = (t = t / 1 - 1) * t * ((s + 1) * t + s) + 1;

    return Key.linear(t, this, key2);
};

Key.easeInOutBack = function (t, key2)
{
    let s = 1.70158;
    const c = 1 / 2;
    if ((t /= 1 / 2) < 1) t = c * (t * t * (((s *= 1.525) + 1) * t - s));
    else t = c * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);

    return Key.linear(t, this, key2);
};

const easeCubicOut = function (t)
{
    t--;
    t = t * t * t + 1;
    return t;
};

Key.easeCubicOut = function (t, key2)
{
    t = easeCubicOut(t);
    return Key.linear(t, this, key2);
};

const easeCubicInOut = function (t)
{
    t *= 2;
    if (t < 1) t = 0.5 * t * t * t;
    else
    {
        t -= 2;
        t = 0.5 * (t * t * t + 2);
    }
    return t;
};

Key.easeCubicInOut = function (t, key2)
{
    t = easeCubicInOut(t);
    return Key.linear(t, this, key2);
};

Key.easeSmoothStep = function (perc, key2)
{
    // var x = Math.max(0, Math.min(1, (perc-0)/(1-0)));
    const x = Math.max(0, Math.min(1, perc));
    perc = x * x * (3 - 2 * x); // smoothstep
    return Key.linear(perc, this, key2);
};

Key.easeSmootherStep = function (perc, key2)
{
    const x = Math.max(0, Math.min(1, (perc - 0) / (1 - 0)));
    perc = x * x * x * (x * (x * 6 - 15) + 10); // smootherstep
    return Key.linear(perc, this, key2);
};

Key.prototype.setEasing = function (e)
{
    this._easing = e;

    if (this._easing == CONSTANTS.ANIM.EASING_LINEAR) this.ease = Key.easeLinear;
    else if (this._easing == CONSTANTS.ANIM.EASING_ABSOLUTE) this.ease = Key.easeAbsolute;
    else if (this._easing == CONSTANTS.ANIM.EASING_SMOOTHSTEP) this.ease = Key.easeSmoothStep;
    else if (this._easing == CONSTANTS.ANIM.EASING_SMOOTHERSTEP) this.ease = Key.easeSmootherStep;
    else if (this._easing == CONSTANTS.ANIM.EASING_CUBIC_IN) this.ease = Key.easeCubicIn;
    else if (this._easing == CONSTANTS.ANIM.EASING_CUBIC_OUT) this.ease = Key.easeCubicOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_CUBIC_INOUT) this.ease = Key.easeCubicInOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_EXPO_IN) this.ease = Key.easeExpoIn;
    else if (this._easing == CONSTANTS.ANIM.EASING_EXPO_OUT) this.ease = Key.easeExpoOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_EXPO_INOUT) this.ease = Key.easeExpoInOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_SIN_IN) this.ease = Key.easeSinIn;
    else if (this._easing == CONSTANTS.ANIM.EASING_SIN_OUT) this.ease = Key.easeSinOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_SIN_INOUT) this.ease = Key.easeSinInOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_BACK_OUT) this.ease = Key.easeOutBack;
    else if (this._easing == CONSTANTS.ANIM.EASING_BACK_IN) this.ease = Key.easeInBack;
    else if (this._easing == CONSTANTS.ANIM.EASING_BACK_INOUT) this.ease = Key.easeInOutBack;
    else if (this._easing == CONSTANTS.ANIM.EASING_ELASTIC_IN) this.ease = Key.easeInElastic;
    else if (this._easing == CONSTANTS.ANIM.EASING_ELASTIC_OUT) this.ease = Key.easeOutElastic;
    else if (this._easing == CONSTANTS.ANIM.EASING_ELASTIC_INOUT) this.ease = Key.easeElasticInOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_BOUNCE_IN) this.ease = Key.easeInBounce;
    else if (this._easing == CONSTANTS.ANIM.EASING_BOUNCE_OUT) this.ease = Key.easeOutBounce;
    else if (this._easing == CONSTANTS.ANIM.EASING_QUART_OUT) this.ease = Key.easeOutQuart;
    else if (this._easing == CONSTANTS.ANIM.EASING_QUART_IN) this.ease = Key.easeInQuart;
    else if (this._easing == CONSTANTS.ANIM.EASING_QUART_INOUT) this.ease = Key.easeInOutQuart;
    else if (this._easing == CONSTANTS.ANIM.EASING_QUINT_OUT) this.ease = Key.easeOutQuint;
    else if (this._easing == CONSTANTS.ANIM.EASING_QUINT_IN) this.ease = Key.easeInQuint;
    else if (this._easing == CONSTANTS.ANIM.EASING_QUINT_INOUT) this.ease = Key.easeInOutQuint;
    else if (this._easing == CONSTANTS.ANIM.EASING_CUBICSPLINE)
    {
        // this._updateBezier = true;
        this.ease = Key.easeCubicSpline;
    }
    else
    {
        this._easing = CONSTANTS.ANIM.EASING_LINEAR;
        this.ease = Key.easeLinear;
    }
};

Key.prototype.trigger = function ()
{
    this.cb();
    this.cbTriggered = true;
};

Key.prototype.setValue = function (v)
{
    this.value = v;
    // this._updateBezier = true;
    if (this.onChange !== null) this.onChange();
};

Key.prototype.set = function (obj)
{
    if (obj)
    {
        if (obj.e) this.setEasing(obj.e);
        if (obj.cb)
        {
            this.cb = obj.cb;
            this.cbTriggered = false;
        }

        if (obj.b)
        {
            // this.bezTime = obj.b[0];
            // this.bezValue = obj.b[1];
            // this.bezTimeIn = obj.b[2];
            // this.bezValueIn = obj.b[3];
            // this._updateBezier = true;
        }

        if (obj.hasOwnProperty("t")) this.time = obj.t;
        if (obj.hasOwnProperty("time")) this.time = obj.time;
        if (obj.hasOwnProperty("v")) this.value = obj.v;
        else if (obj.hasOwnProperty("value")) this.value = obj.value;
    }
    if (this.onChange !== null) this.onChange();
};

Key.prototype.getSerialized = function ()
{
    const obj = {};
    obj.t = this.time;
    obj.v = this.value;
    obj.e = this._easing;
    // if (this._easing == CONSTANTS.ANIM.EASING_CUBICSPLINE) obj.b = [this.bezTime, this.bezValue, this.bezTimeIn, this.bezValueIn];

    return obj;
};

Key.prototype.getEasing = function ()
{
    return this._easing;
};



;// CONCATENATED MODULE: ./src/core/eventtarget.js


const EventTarget = function ()
{
    this._log = new Logger("eventtarget");
    this._eventCallbacks = {};
    this._logName = "";
    this._logEvents = false;
    this._listeners = {};

    this.addEventListener = this.on = function (which, cb, idPrefix)
    {
        const event =
        {
            "id": (idPrefix || "") + CABLES.simpleId(),
            "name": which,
            "cb": cb,
        };
        if (!this._eventCallbacks[which]) this._eventCallbacks[which] = [event];
        else this._eventCallbacks[which].push(event);

        this._listeners[event.id] = event;

        return event.id;
    };

    this.hasEventListener = function (which, cb)
    {
        if (which && !cb)
        {
            // check by id
            if (this._listeners[which]) return true;
            else return false;
        }
        else
        {
            this._log.warn("old eventtarget function haseventlistener!");
            if (which && cb)
            {
                if (this._eventCallbacks[which])
                {
                    const idx = this._eventCallbacks[which].indexOf(cb);
                    if (idx == -1) return false;
                    return true;
                }
            }
        }
    };

    this.hasListenerForEventName = function (eventName)
    {
        return this._eventCallbacks[eventName] && this._eventCallbacks[eventName].length > 0;
    };

    this.removeEventListener = this.off = function (which, cb)
    {
        if (which === null || which === undefined) return;

        if (!cb) // new style, remove by id, not by name/callback
        {
            const event = this._listeners[which];
            if (!event)
            {
                this._log.log("could not find event...");
                return;
            }

            let found = true;
            while (found)
            {
                found = false;
                let index = -1;
                for (let i = 0; i < this._eventCallbacks[event.name].length; i++)
                {
                    if (this._eventCallbacks[event.name][i].id.startsWith(which)) // this._eventCallbacks[event.name][i].id == which ||
                    {
                        found = true;
                        index = i;
                    }
                }

                if (index !== -1)
                {
                    this._eventCallbacks[event.name].splice(index, 1);
                    delete this._listeners[which];
                }
            }

            return;
        }

        this._log.info("[eventtaget] ", "old function signature: removeEventListener! use listener id");
        this._log.log((new Error()).stack);

        let index = null;
        for (let i = 0; i < this._eventCallbacks[which].length; i++)
            if (this._eventCallbacks[which][i].cb == cb)
                index = i;

        if (index !== null)
        {
            delete this._eventCallbacks[index];
        }
        else this._log.warn("removeEventListener not found " + which);
    };

    this.logEvents = function (enabled, name)
    {
        this._logEvents = enabled;
        this._logName = name;
    };

    this.emitEvent = function (which, param1, param2, param3, param4, param5, param6)
    {
        if (this._logEvents) this._log.log("[event] ", this._logName, which, this._eventCallbacks);

        if (this._eventCallbacks[which])
        {
            for (let i = 0; i < this._eventCallbacks[which].length; i++)
            {
                if (this._eventCallbacks[which][i])
                {
                    this._eventCallbacks[which][i].cb(param1, param2, param3, param4, param5, param6);
                }
            }
        }
        else
        {
            if (this._logEvents) this._log.log("[event] has no event callback", which, this._eventCallbacks);
        }
    };
};



;// CONCATENATED MODULE: ./src/core/anim.js





/**
 * Keyframed interpolated animation.
 *
 * Available Easings:
 * <code>
 * CONSTANTS.ANIM.EASING_LINEAR
 * CONSTANTS.ANIM.EASING_ABSOLUTE
 * CONSTANTS.ANIM.EASING_SMOOTHSTEP
 * CONSTANTS.ANIM.EASING_SMOOTHERSTEP
 * CONSTANTS.ANIM.EASING_CUBICSPLINE

 * CONSTANTS.ANIM.EASING_CUBIC_IN
 * CONSTANTS.ANIM.EASING_CUBIC_OUT
 * CONSTANTS.ANIM.EASING_CUBIC_INOUT

 * CONSTANTS.ANIM.EASING_EXPO_IN
 * CONSTANTS.ANIM.EASING_EXPO_OUT
 * CONSTANTS.ANIM.EASING_EXPO_INOUT

 * CONSTANTS.ANIM.EASING_SIN_IN
 * CONSTANTS.ANIM.EASING_SIN_OUT
 * CONSTANTS.ANIM.EASING_SIN_INOUT

 * CONSTANTS.ANIM.EASING_BACK_IN
 * CONSTANTS.ANIM.EASING_BACK_OUT
 * CONSTANTS.ANIM.EASING_BACK_INOUT

 * CONSTANTS.ANIM.EASING_ELASTIC_IN
 * CONSTANTS.ANIM.EASING_ELASTIC_OUT

 * CONSTANTS.ANIM.EASING_BOUNCE_IN
 * CONSTANTS.ANIM.EASING_BOUNCE_OUT

 * CONSTANTS.ANIM.EASING_QUART_IN
 * CONSTANTS.ANIM.EASING_QUART_OUT
 * CONSTANTS.ANIM.EASING_QUART_INOUT

 * CONSTANTS.ANIM.EASING_QUINT_IN
 * CONSTANTS.ANIM.EASING_QUINT_OUT
 * CONSTANTS.ANIM.EASING_QUINT_INOUT
 * </code>
 * @class
 * @param cfg
 * @example
 * var anim=new CABLES.Anim();
 * anim.setValue(0,0);  // set value 0 at 0 seconds
 * anim.setValue(10,1); // set value 1 at 10 seconds
 * anim.getValue(5);    // get value at 5 seconds - this returns 0.5
 */

const Anim = function (cfg)
{
    EventTarget.apply(this);

    cfg = cfg || {};
    this.keys = [];
    this.onChange = null;
    this.stayInTimeline = false;
    this.loop = false;
    this._log = new Logger("Anim");
    this._lastKeyIndex = 0;
    this._cachedIndex = 0;
    this.name = cfg.name || null;

    /**
     * @member defaultEasing
     * @memberof Anim
     * @instance
     * @type {Number}
     */
    this.defaultEasing = cfg.defaultEasing || CONSTANTS.ANIM.EASING_LINEAR;
    this.onLooped = null;

    this._timesLooped = 0;
    this._needsSort = false;
};

Anim.prototype.forceChangeCallback = function ()
{
    if (this.onChange !== null) this.onChange();
    this.emitEvent("onChange", this);
};

Anim.prototype.getLoop = function ()
{
    return this.loop;
};

Anim.prototype.setLoop = function (target)
{
    this.loop = target;
    this.emitEvent("onChange", this);
};

/**
 * returns true if animation has ended at @time
 * checks if last key time is < time
 * @param {Number} time
 * @returns {Boolean}
 * @memberof Anim
 * @instance
 * @function
 */
Anim.prototype.hasEnded = function (time)
{
    if (this.keys.length === 0) return true;
    if (this.keys[this._lastKeyIndex].time <= time) return true;
    return false;
};

Anim.prototype.isRising = function (time)
{
    if (this.hasEnded(time)) return false;
    const ki = this.getKeyIndex(time);
    if (this.keys[ki].value < this.keys[ki + 1].value) return true;
    return false;
};

/**
 * remove all keys from animation before time
 * @param {Number} time
 * @memberof Anim
 * @instance
 * @function
 */
Anim.prototype.clearBefore = function (time)
{
    const v = this.getValue(time);
    const ki = this.getKeyIndex(time);

    this.setValue(time, v);

    if (ki > 1) this.keys.splice(0, ki);
    this._updateLastIndex();
};
/**
 * remove all keys from animation
 * @param {Number} [time=0] set a new key at time with the old value at time
 * @memberof Anim
 * @instance
 * @function
 */
Anim.prototype.clear = function (time)
{
    let v = 0;
    if (time) v = this.getValue(time);
    this.keys.length = 0;
    this._updateLastIndex();
    if (time) this.setValue(time, v);
    if (this.onChange !== null) this.onChange();
    this.emitEvent("onChange", this);
};

Anim.prototype.sortKeys = function ()
{
    this.keys.sort((a, b) => { return parseFloat(a.time) - parseFloat(b.time); });
    this._updateLastIndex();
    this._needsSort = false;
    if (this.keys.length % 1000 == 0)console.log(this.name, this.keys.length);
};

Anim.prototype.getLength = function ()
{
    if (this.keys.length === 0) return 0;
    return this.keys[this.keys.length - 1].time;
};

Anim.prototype.getKeyIndex = function (time)
{
    let index = 0;
    let start = 0;
    if (this._cachedIndex && this.keys.length > this._cachedIndex && time >= this.keys[this._cachedIndex].time) start = this._cachedIndex;
    for (let i = start; i < this.keys.length; i++)
    {
        if (time >= this.keys[i].time) index = i;
        if (this.keys[i].time > time)
        {
            if (time != 0) this._cachedIndex = index;
            return index;
        }
    }

    return index;
};

/**
 * set value at time
 * @function setValue
 * @memberof Anim
 * @instance
 * @param {Number} time
 * @param {Number} value
 * @param {Function} cb callback
 */
Anim.prototype.setValue = function (time, value, cb)
{
    let found = null;

    if (this.keys.length == 0 || time <= this.keys[this.keys.length - 1].time)
        for (let i = 0; i < this.keys.length; i++)
            if (this.keys[i].time == time)
            {
                found = this.keys[i];
                this.keys[i].setValue(value);
                this.keys[i].cb = cb;
                break;
            }

    if (!found)
    {
        found = new Key(
            {
                "time": time,
                "value": value,
                "e": this.defaultEasing,
                "cb": cb,
            });
        this.keys.push(found);

        // if (this.keys.length % 1000 == 0)console.log(this.name, this.keys.length);
        this._updateLastIndex();
    }

    if (this.onChange) this.onChange();
    this.emitEvent("onChange", this);
    this._needsSort = true;
    return found;
};

Anim.prototype.setKeyEasing = function (index, e)
{
    if (this.keys[index])
    {
        this.keys[index].setEasing(e);
        this.emitEvent("onChange", this);
    }
};

Anim.prototype.getSerialized = function ()
{
    const obj = {};
    obj.keys = [];
    obj.loop = this.loop;

    for (let i = 0; i < this.keys.length; i++)
        obj.keys.push(this.keys[i].getSerialized());

    return obj;
};

Anim.prototype.getKey = function (time)
{
    const index = this.getKeyIndex(time);
    return this.keys[index];
};

Anim.prototype.getNextKey = function (time)
{
    let index = this.getKeyIndex(time) + 1;
    if (index >= this.keys.length) index = this.keys.length - 1;

    return this.keys[index];
};

Anim.prototype.isFinished = function (time)
{
    if (this.keys.length <= 0) return true;
    return time > this.keys[this.keys.length - 1].time;
};

Anim.prototype.isStarted = function (time)
{
    if (this.keys.length <= 0) return false;
    return time >= this.keys[0].time;
};

/**
 * get value at time
 * @function getValue
 * @memberof Anim
 * @instance
 * @param {Number} [time] time
 * @returns {Number} interpolated value at time
 */
Anim.prototype.getValue = function (time)
{
    if (this.keys.length === 0)
    {
        return 0;
    }
    if (this._needsSort) this.sortKeys();

    if (!this.loop && time > this.keys[this._lastKeyIndex].time)
    {
        if (this.keys[this._lastKeyIndex].cb && !this.keys[this._lastKeyIndex].cbTriggered) this.keys[this._lastKeyIndex].trigger();

        return this.keys[this._lastKeyIndex].value;
    }

    if (time < this.keys[0].time)
    {
        // if (this.name)console.log("A");

        return this.keys[0].value;
    }

    if (this.loop && time > this.keys[this._lastKeyIndex].time)
    {
        const currentLoop = time / this.keys[this._lastKeyIndex].time;
        if (currentLoop > this._timesLooped)
        {
            this._timesLooped++;
            if (this.onLooped) this.onLooped();
        }
        time = (time - this.keys[0].time) % (this.keys[this._lastKeyIndex].time - this.keys[0].time);
        time += this.keys[0].time;
    }

    const index = this.getKeyIndex(time);
    if (index >= this._lastKeyIndex)
    {
        if (this.keys[this._lastKeyIndex].cb && !this.keys[this._lastKeyIndex].cbTriggered) this.keys[this._lastKeyIndex].trigger();

        return this.keys[this._lastKeyIndex].value;
    }


    const index2 = index + 1;
    const key1 = this.keys[index];
    const key2 = this.keys[index2];

    if (key1.cb && !key1.cbTriggered) key1.trigger();

    if (!key2) return -1;

    const perc = (time - key1.time) / (key2.time - key1.time);

    if (!key1.ease) this.log._warn("has no ease", key1, key2);

    return key1.ease(perc, key2);
};

Anim.prototype._updateLastIndex = function ()
{
    this._lastKeyIndex = this.keys.length - 1;
};

Anim.prototype.addKey = function (k)
{
    if (k.time === undefined)
    {
        this.log.warn("key time undefined, ignoring!");
    }
    else
    {
        this.keys.push(k);
        if (this.onChange !== null) this.onChange();
        this.emitEvent("onChange", this);
    }
    this._updateLastIndex();
};

Anim.prototype.easingFromString = function (str)
{
    if (str == "linear") return CONSTANTS.ANIM.EASING_LINEAR;
    if (str == "absolute") return CONSTANTS.ANIM.EASING_ABSOLUTE;
    if (str == "smoothstep") return CONSTANTS.ANIM.EASING_SMOOTHSTEP;
    if (str == "smootherstep") return CONSTANTS.ANIM.EASING_SMOOTHERSTEP;

    if (str == "Cubic In") return CONSTANTS.ANIM.EASING_CUBIC_IN;
    if (str == "Cubic Out") return CONSTANTS.ANIM.EASING_CUBIC_OUT;
    if (str == "Cubic In Out") return CONSTANTS.ANIM.EASING_CUBIC_INOUT;

    if (str == "Expo In") return CONSTANTS.ANIM.EASING_EXPO_IN;
    if (str == "Expo Out") return CONSTANTS.ANIM.EASING_EXPO_OUT;
    if (str == "Expo In Out") return CONSTANTS.ANIM.EASING_EXPO_INOUT;

    if (str == "Sin In") return CONSTANTS.ANIM.EASING_SIN_IN;
    if (str == "Sin Out") return CONSTANTS.ANIM.EASING_SIN_OUT;
    if (str == "Sin In Out") return CONSTANTS.ANIM.EASING_SIN_INOUT;

    if (str == "Back In") return CONSTANTS.ANIM.EASING_BACK_IN;
    if (str == "Back Out") return CONSTANTS.ANIM.EASING_BACK_OUT;
    if (str == "Back In Out") return CONSTANTS.ANIM.EASING_BACK_INOUT;

    if (str == "Elastic In") return CONSTANTS.ANIM.EASING_ELASTIC_IN;
    if (str == "Elastic Out") return CONSTANTS.ANIM.EASING_ELASTIC_OUT;

    if (str == "Bounce In") return CONSTANTS.ANIM.EASING_BOUNCE_IN;
    if (str == "Bounce Out") return CONSTANTS.ANIM.EASING_BOUNCE_OUT;

    if (str == "Quart Out") return CONSTANTS.ANIM.EASING_QUART_OUT;
    if (str == "Quart In") return CONSTANTS.ANIM.EASING_QUART_IN;
    if (str == "Quart In Out") return CONSTANTS.ANIM.EASING_QUART_INOUT;

    if (str == "Quint Out") return CONSTANTS.ANIM.EASING_QUINT_OUT;
    if (str == "Quint In") return CONSTANTS.ANIM.EASING_QUINT_IN;
    if (str == "Quint In Out") return CONSTANTS.ANIM.EASING_QUINT_INOUT;
};

Anim.prototype.createPort = function (op, title, cb)
{
    const port = op.inDropDown(title, CONSTANTS.ANIM.EASINGS, "Cubic Out");

    // const port = op.addInPort(
    //     new Port(op, title, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
    //         "display": "dropdown",
    //         "values": CONSTANTS.ANIM.EASINGS,
    //     }),
    // );

    port.set("linear");
    port.defaultValue = "linear";

    port.onChange = function ()
    {
        this.defaultEasing = this.easingFromString(port.get());
        this.emitEvent("onChangeDefaultEasing", this);

        if (cb) cb();
    }.bind(this);

    return port;
};

// ------------------------------

Anim.slerpQuaternion = function (time, q, animx, animy, animz, animw)
{
    if (!Anim.slerpQuaternion.q1)
    {
        Anim.slerpQuaternion.q1 = quat.create();
        Anim.slerpQuaternion.q2 = quat.create();
    }

    const i1 = animx.getKeyIndex(time);
    let i2 = i1 + 1;
    if (i2 >= animx.keys.length) i2 = animx.keys.length - 1;

    if (i1 == i2)
    {
        quat.set(q, animx.keys[i1].value, animy.keys[i1].value, animz.keys[i1].value, animw.keys[i1].value);
    }
    else
    {
        const key1Time = animx.keys[i1].time;
        const key2Time = animx.keys[i2].time;
        const perc = (time - key1Time) / (key2Time - key1Time);

        quat.set(Anim.slerpQuaternion.q1, animx.keys[i1].value, animy.keys[i1].value, animz.keys[i1].value, animw.keys[i1].value);

        quat.set(Anim.slerpQuaternion.q2, animx.keys[i2].value, animy.keys[i2].value, animz.keys[i2].value, animw.keys[i2].value);

        quat.slerp(q, Anim.slerpQuaternion.q1, Anim.slerpQuaternion.q2, perc);
    }
    return q;
};

const ANIM = { "Key": Key };




;// CONCATENATED MODULE: ./src/core/core_link.js



/**
 * @namespace external:CABLES#Link
 * @param {Object} scene The patch object
 * @description a link is a connection between two ops/ports -> one input and one output port
 * @hideconstructor
 * @class
 */
const Link = function (scene)
{
    EventTarget.apply(this);

    this.id = CABLES.simpleId();
    this.portIn = null;
    this.portOut = null;
    this.scene = scene; // todo: make private and rename to patch
    this.activityCounter = 0;
    this.ignoreInSerialize = false;
};

Link.prototype.setValue = function (v)
{
    if (v === undefined) this._setValue();
    else this.portIn.set(v);
};

Link.prototype.activity = function ()
{
    this.activityCounter++;
    // if(Date.now()-this.lastTime>100)
    // {
    //     // this.lastTime=Date.now();
    //     // this.changesPerSecond=this.changesCounter*10;
    //     this.changesCounter=0;
    // }
};

Link.prototype._setValue = function ()
{
    if (!this.portOut)
    {
        this.remove();
        return;
    }
    const v = this.portOut.get();

    if (v == v) // NaN is the only JavaScript value that is treated as unequal to itself
    {
        if (this.portIn.type != CONSTANTS.OP.OP_PORT_TYPE_FUNCTION) this.activity();

        if (this.portIn.get() !== v)
        {
            this.portIn.set(v);
        }
        else
        {
            if (this.portIn.changeAlways) this.portIn.set(v);
            if (this.portOut.forceRefChange) this.portIn.forceChange();
        }
    }
};

/**
 * @function getOtherPort
 * @memberof Link
 * @instance
 * @param {Port} p port
 * @description returns the port of the link, which is not port
 */
Link.prototype.getOtherPort = function (p)
{
    if (p == this.portIn) return this.portOut;
    return this.portIn;
};

/**
 * @function remove
 * @memberof Link
 * @instance
 * @description unlink/remove this link from all ports
 */
Link.prototype.remove = function ()
{
    if (this.portIn) this.portIn.removeLink(this);
    if (this.portOut) this.portOut.removeLink(this);
    if (this.scene)
    {
        this.scene.emitEvent("onUnLink", this.portIn, this.portOut, this);
    }

    if (this.portIn && (this.portIn.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT || this.portIn.type == CONSTANTS.OP.OP_PORT_TYPE_ARRAY))
    {
        this.portIn.set(null);
        if (this.portIn.links.length > 0) this.portIn.set(this.portIn.links[0].getOtherPort(this.portIn).get());
    }

    if (this.portIn) this.portIn.op._checkLinksNeededToWork();
    if (this.portOut) this.portOut.op._checkLinksNeededToWork();

    this.portIn = null;
    this.portOut = null;
    this.scene = null;
};

/**
 * @function link
 * @memberof Link
 * @instance
 * @description link those two ports
 * @param {Port} p1 port1
 * @param {Port} p2 port2
 */
Link.prototype.link = function (p1, p2)
{
    if (!Link.canLink(p1, p2))
    {
        console.warn("[core_link] cannot link ports!", p1, p2);
        return false;
    }

    if (p1.direction == CONSTANTS.PORT.PORT_DIR_IN)
    {
        this.portIn = p1;
        this.portOut = p2;
    }
    else
    {
        this.portIn = p2;
        this.portOut = p1;
    }

    p1.addLink(this);
    p2.addLink(this);

    this.setValue();

    if (p1.onLink) p1.onLink(this);
    if (p2.onLink) p2.onLink(this);

    p1.op._checkLinksNeededToWork();
    p2.op._checkLinksNeededToWork();
};

Link.prototype.getSerialized = function ()
{
    const obj = {};

    obj.portIn = this.portIn.getName();
    obj.portOut = this.portOut.getName();
    obj.objIn = this.portIn.op.id;
    obj.objOut = this.portOut.op.id;

    return obj;
};

// --------------------------------------------

/**
 * @function canLinkText
 * @memberof Link
 * @instance
 * @description return a text message with human readable reason if ports can not be linked, or can be
 * @param {Port} p1 port1
 * @param {Port} p2 port2
 */
Link.canLinkText = function (p1, p2)
{
    if (p1.direction == p2.direction)
    {
        let txt = "(out)";
        if (p2.direction == CONSTANTS.PORT.PORT_DIR_IN) txt = "(in)";
        return "can not link: same direction " + txt;
    }
    if (p1.op == p2.op) return "can not link: same op";
    if (p1.type != CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC && p2.type != CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC)
    {
        if (p1.type != p2.type) return "can not link: different type";
    }

    if (CABLES.UI && p1.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT && p2.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT)
    {
        if (p1.uiAttribs.objType && p2.uiAttribs.objType)
            if (p1.uiAttribs.objType != p2.uiAttribs.objType)
                return "incompatible objects";
    }


    if (!p1) return "can not link: port 1 invalid";
    if (!p2) return "can not link: port 2 invalid";

    if (p1.direction == CONSTANTS.PORT.PORT_DIR_IN && p1.isAnimated()) return "can not link: is animated";
    if (p2.direction == CONSTANTS.PORT.PORT_DIR_IN && p2.isAnimated()) return "can not link: is animated";

    // if(p1.direction==CABLES.CONSTANTS.PORT.PORT_DIR_IN && p1.links.length>0)return 'input port already busy';
    // if(p2.direction==CABLES.CONSTANTS.PORT.PORT_DIR_IN && p2.links.length>0)return 'input port already busy';
    if (p1.isLinkedTo(p2)) return "ports already linked";

    if ((p1.canLink && !p1.canLink(p2)) || (p2.canLink && !p2.canLink(p1))) return "Incompatible";

    return "can link";
};

/**
 * @function canLink
 * @memberof Link
 * @instance
 * @description return true if ports can be linked
 * @param {Port} p1 port1
 * @param {Port} p2 port2
 * @returns {Boolean}
 */
Link.canLink = function (p1, p2)
{
    if (!p1) return false;
    if (!p2) return false;
    if (p1.direction == CONSTANTS.PORT.PORT_DIR_IN && p1.isAnimated()) return false;
    if (p2.direction == CONSTANTS.PORT.PORT_DIR_IN && p2.isAnimated()) return false;

    if (p1.isHidden() || p2.isHidden()) return false;

    if (p1.isLinkedTo(p2)) return false;

    if (p1.direction == p2.direction) return false;

    if (CABLES.UI && p1.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT && p2.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT)
    {
        if (p1.uiAttribs.objType && p2.uiAttribs.objType)
        {
            if (p1.uiAttribs.objType.indexOf("sg_") == 0 && p2.uiAttribs.objType.indexOf("sg_") == 0) return true;
            if (p1.uiAttribs.objType != p2.uiAttribs.objType)
                return false;
        }
    }

    if (p1.type != p2.type && (p1.type != CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC && p2.type != CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC)) return false;
    if (p1.type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC || p2.type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC) return true;

    if (p1.op == p2.op) return false;

    if (p1.canLink && !p1.canLink(p2)) return false;
    if (p2.canLink && !p2.canLink(p1)) return false;

    return true;
};



;// CONCATENATED MODULE: ./src/core/core_port.js







/**
 * data is coming into and out of ops through input and output ports
 * @namespace external:CABLES#Port
 * @class
 * @hideconstructor
 * @param ___op
 * @param name
 * @param type
 * @param uiAttribs
 * @example
 * const myPort=op.inString("String Port");
 */
const Port = function (___op, name, type, uiAttribs)
{
    EventTarget.apply(this);

    this.data = {}; // UNUSED, DEPRECATED, only left in for backwards compatibility with userops
    this._log = new Logger("core_port");
    /**
     * @type {Number}
     * @name direction
     * @instance
     * @memberof Port
     * @description direction of port (input(0) or output(1))
     */
    this.direction = CONSTANTS.PORT.PORT_DIR_IN;
    this.id = String(CABLES.simpleId());
    this._op = ___op;

    /**
     * @type {Array<Link>}
     * @name links
     * @instance
     * @memberof Port
     * @description links of port
     */
    this.links = [];
    this.value = 0.0;
    this.name = name;
    this.type = type || CONSTANTS.OP.OP_PORT_TYPE_VALUE;
    this.uiAttribs = uiAttribs || {};
    this.anim = null;
    this._oldAnimVal = -5711;
    this.defaultValue = null;


    this._uiActiveState = true;
    this.ignoreValueSerialize = false;
    this.onLinkChanged = null;
    this.crashed = false;

    this._valueBeforeLink = null;
    this._lastAnimFrame = -1;
    this._animated = false;

    this.onValueChanged = null;
    this.onTriggered = null;
    this.onUiActiveStateChange = null;
    this.changeAlways = false;
    this.forceRefChange = false;

    this._useVariableName = null;

    this.activityCounter = 0;
    this.apf = 0;
    this.activityCounterStartFrame = 0;

    this._tempLastUiValue = null;

    Object.defineProperty(this, "title", {
        get()
        {
            return this.uiAttribs.title || this.name;
        } });

    Object.defineProperty(this, "parent", {
        get()
        {
            this._log.stack("use port.op, not .parent");
            return this._op;
        } });

    Object.defineProperty(this, "op", {
        get()
        {
            return this._op;
        } });

    Object.defineProperty(this, "val", {
        get()
        {
            this._log.warn("val getter deprecated!", this);
            this._log.stack("val getter deprecated");
            return this.get();
        },
        set(v)
        {
            this._log.warn("val setter deprecated!", this);
            this._log.stack("val setter deprecated");
            this.setValue(v);
        }
    });
};


/**
 * copy over a uiattrib from an external connected port to another port
 * @function copyLinkedUiAttrib
 * @memberof Port
 * @param {string} which attrib name
 * @param {Port} port source port
 * @instance
 * @example

inArray.onLinkChanged=()=>
{
    if(inArray) inArray.copyLinkedUiAttrib("stride", outArray);
};

 */
Port.prototype.copyLinkedUiAttrib = function (which, port)
{
    if (!CABLES.UI) return;
    if (!this.isLinked()) return;

    const attr = {};
    attr[which] = this.links[0].getOtherPort(this).getUiAttrib(which);
    port.setUiAttribs(attr);
};


// TODO make extend class for ports, like for ops only for ui
Port.prototype.getValueForDisplay = function ()
{
    let str = this.value;

    if (typeof this.value === "string" || this.value instanceof String)
    {
        if (str.length > 1000)
        {
            str = str.substring(0, 999);
            str += "...";
        }
        if (this.uiAttribs && (this.uiAttribs.display == "boolnum"))
        {
            str += " - ";

            if (!this.value) str += "false";
            else str += "true";
        }

        str = str.replace(/[\u00A0-\u9999<>\&]/g, function (i)
        {
            return "&#" + i.charCodeAt(0) + ";";
        });


        if (str.length > 100) str = str.substring(0, 100);
    }
    else
    {
        str = this.value;
    }
    return str;
};

/**
 * change listener for input value ports, overwrite to react to changes
 * @function onChange
 * @memberof Port
 * @instance
 * @example
 * const myPort=op.inString("MyPort");
 * myPort.onChange=function()
 * {
 *   console.log("was changed to: ",myPort.get());
 * }
 *
 */
Port.prototype.onAnimToggle = function () {};
Port.prototype._onAnimToggle = function ()
{
    this.onAnimToggle();
};


/**
 * @function remove
 * @memberof Port
 * @instance
 * @description remove port
 */
Port.prototype.remove = function ()
{
    // this.setUiAttribs({ "hidePort": true });
    this.removeLinks();
    this._op.removePort(this);
};

/**
 * set ui attributes
 * @function setUiAttribs
 * @memberof Port
 * @instance
 * @param {Object} newAttribs
 * <pre>
 * title - overwrite title of port (by default this is portname)
 * greyout - port paramater will appear greyed out, can not be
 * hidePort - port will be hidden from op
 * hideParam - port params will be hidden from parameter panel
 * showIndex - only for dropdowns - show value index (e.g. `0 - normal` )
 * editorSyntax - set syntax highlighting theme for editor port
 * ignoreObjTypeErrors - do not auto check object types
 * </pre>
 * @example
 * myPort.setUiAttribs({greyout:true});
 */
Port.prototype.setUiAttribs = function (newAttribs)
{
    let changed = false;
    if (!this.uiAttribs) this.uiAttribs = {};

    for (const p in newAttribs)
    {
        if (newAttribs[p] === undefined)
        {
            // delete newAttribs[p];
            delete this.uiAttribs[p];
            continue;
        }
        if (this.uiAttribs[p] != newAttribs[p]) changed = true;
        this.uiAttribs[p] = newAttribs[p];

        if (p == "group" && this.indexPort) this.indexPort.setUiAttribs({ "group": newAttribs[p] });
    }

    if (newAttribs.hasOwnProperty("expose")) this._op.patch.emitEvent("subpatchExpose", this._op.uiAttribs.subPatch);

    if (changed) this.emitEvent("onUiAttrChange", newAttribs, this);
};

/**
 * get ui attributes
 * @function getUiAttribs
 * @memberof Port
 * @example
 * myPort.getUiAttribs();
 */
Port.prototype.getUiAttribs = function ()
{
    return this.uiAttribs;
};

/**
 * get ui attribute
 * @function getUiAttrib
 * @memberof Port
 * @instance
 * @param {String} attribName
 * <pre>
 * attribName - return value of the ui-attribute, or null on unknown attribute
 * </pre>
 * @example
 * myPort.setUiAttribs("values");
 */
Port.prototype.getUiAttrib = function (attribName)
{
    if (!this.uiAttribs || !this.uiAttribs.hasOwnProperty(attribName))
    {
        return null;
    }
    return this.uiAttribs[attribName];
};

/**
 * @function get
 * @memberof Port
 * @instance
 * @description get value of port
 */
Port.prototype.get = function ()
{
    if (this._animated && this._lastAnimFrame != this._op.patch.getFrameNum())
    {
        this._lastAnimFrame = this._op.patch.getFrameNum();
        this.value = this.anim.getValue(this._op.patch.timer.getTime());

        this._oldAnimVal = this.value;
        this.forceChange();
    }

    return this.value;
};

Port.prototype.setRef = function (v)
{
    this.forceRefChange = true;
    this.set(v);
};

/**
 * @function setValue
 * @memberof Port
 * @instance
 * @description set value of port / will send value to all linked ports (only for output ports)
 */
Port.prototype.set = Port.prototype.setValue = function (v)
{
    if (v === undefined) v = null;

    if (this._op.enabled && !this.crashed)
    {
        if (v !== this.value || this.changeAlways || this.type == CONSTANTS.OP.OP_PORT_TYPE_TEXTURE || this.type == CONSTANTS.OP.OP_PORT_TYPE_ARRAY)
        {
            if (this._animated)
            {
                this.anim.setValue(this._op.patch.timer.getTime(), v);
            }
            else
            {
                try
                {
                    this.value = v;
                    this.forceChange();
                }
                catch (ex)
                {
                    this.crashed = true;

                    this.setValue = function (_v) {};
                    this.onTriggered = function () {};

                    this._log.error("exception in ", this._op);
                    this._log.error(ex);

                    this._op.patch.emitEvent("exception", ex, this._op);
                }

                if (this._op && this._op.patch && this._op.patch.isEditorMode() && this.type == CONSTANTS.OP.OP_PORT_TYPE_TEXTURE) gui.texturePreview().updateTexturePort(this);
            }

            if (this.direction == CONSTANTS.PORT.PORT_DIR_OUT) for (let i = 0; i < this.links.length; ++i) this.links[i].setValue();
        }
    }
};

Port.prototype.updateAnim = function ()
{
    if (this._animated)
    {
        this.value = this.get();

        if (this._oldAnimVal != this.value || this.changeAlways)
        {
            this._oldAnimVal = this.value;
            this.forceChange();
        }
        this._oldAnimVal = this.value;
    }
};

Port.prototype.forceChange = function ()
{
    if (this.onValueChanged || this.onChange)
    {
        // very temporary: deprecated warning!!!!!!!!!
        // if(params.length>0) this._log.warn('TOM: port has onchange params!',this._op.objName,this.name);
    }
    this._activity();
    this.emitEvent("change", this.value, this);

    // try
    // {
    if (this.onChange) this.onChange(this, this.value);
    else if (this.onValueChanged) this.onValueChanged(this, this.value); // deprecated
    // }
    // catch (e)
    // {
    //     console.log(e);
    // }
};

/**
 * @function getTypeString
 * @memberof Port
 * @instance
 * @description get port type as string, e.g. "Function","Value"...
 * @return {String} type
 */
Port.prototype.getTypeString = function ()
{
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_VALUE) return "Number";
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_FUNCTION) return "Trigger";
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT) return "Object";
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC) return "Dynamic";
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_ARRAY) return "Array";
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_STRING) return "String";
    return "Unknown";
};

Port.prototype.deSerializeSettings = function (objPort)
{
    if (!objPort) return;
    if (objPort.animated) this.setAnimated(objPort.animated);
    if (objPort.useVariable) this.setVariableName(objPort.useVariable);
    if (objPort.title) this.setUiAttribs({ "title": objPort.title });
    if (objPort.expose) this.setUiAttribs({ "expose": true });
    if (objPort.order) this.setUiAttribs({ "order": objPort.order });

    if (objPort.multiPortManual) this.setUiAttribs({ "multiPortManual": objPort.multiPortManual });
    if (objPort.multiPortNum) this.setUiAttribs({ "multiPortNum": objPort.multiPortNum });

    if (objPort.anim)
    {
        if (!this.anim) this.anim = new Anim({ "name": "port " + this.name });
        this._op._hasAnimPort = true;
        this.anim.addEventListener("onChange", () =>
        {
            this._op.patch.emitEvent("portAnimUpdated", this._op, this, this.anim);
        });
        if (objPort.anim.loop) this.anim.loop = objPort.anim.loop;
        for (const ani in objPort.anim.keys)
        {
            this.anim.keys.push(new ANIM.Key(objPort.anim.keys[ani]));
        }
        this.anim.sortKeys();
    }
};


Port.prototype.setInitialValue = function (v)
{
    if (this.op.preservedPortLinks[this.name])
    {
        for (let i = 0; i < this.op.preservedPortLinks[this.name].length; i++)
        {
            const lobj = this.op.preservedPortLinks[this.name][i];
            this.op.patch._addLink(
                lobj.objIn,
                lobj.objOut,
                lobj.portIn,
                lobj.portOut);
        }
    }


    if (this.op.preservedPortValues && this.op.preservedPortValues.hasOwnProperty(this.name) && this.op.preservedPortValues[this.name] !== undefined)
    {
        this.set(this.op.preservedPortValues[this.name]);
    }
    else
    if (v !== undefined) this.set(v);
    if (v !== undefined) this.defaultValue = v;
};




Port.prototype.getSerialized = function ()
{
    let obj = { "name": this.getName() };


    if (!this.ignoreValueSerialize && this.links.length === 0)
    {
        if (this.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT && this.value && this.value.tex) {}
        else obj.value = this.value;
    }
    if (this._useVariableName) obj.useVariable = this._useVariableName;
    if (this._animated) obj.animated = true;
    if (this.anim) obj.anim = this.anim.getSerialized();
    if (this.uiAttribs.multiPortNum) obj.multiPortNum = this.uiAttribs.multiPortNum;
    if (this.uiAttribs.multiPortManual) obj.multiPortManual = this.uiAttribs.multiPortManual;

    if (this.uiAttribs.display == "file") obj.display = this.uiAttribs.display;
    if (this.uiAttribs.expose)
    {
        obj.expose = true;
        if (this.uiAttribs.hasOwnProperty("order")) obj.order = this.uiAttribs.order;
    }
    if (this.uiAttribs.title) obj.title = this.uiAttribs.title;
    if ((this.preserveLinks || this.direction == CONSTANTS.PORT.PORT_DIR_OUT) && this.links.length > 0)
    {
        obj.links = [];
        for (const i in this.links)
        {
            if (!this.links[i].ignoreInSerialize && (this.links[i].portIn && this.links[i].portOut)) obj.links.push(this.links[i].getSerialized());
        }
    }

    if (this.direction == CONSTANTS.PORT.PORT_DIR_IN && this.links.length > 0)
    {
        for (const i in this.links)
        {
            if (!this.links[i].portIn || !this.links[i].portOut) continue;

            const otherp = this.links[i].getOtherPort(this);
            // check if functions exist, are defined in core_extend_ops code in ui
            if (otherp.op.isInBlueprint2 && this.op.isInBlueprint2)
            {
                if (otherp.op.isInBlueprint2() && !this.op.isInBlueprint2())
                {
                    obj.links = obj.links || [];
                    obj.links.push(this.links[i].getSerialized());
                }
            }
        }
    }

    if (obj.links && obj.links.length == 0) delete obj.links;
    if (this.type === CONSTANTS.OP.OP_PORT_TYPE_FUNCTION) delete obj.value;
    if (this.type === CONSTANTS.OP.OP_PORT_TYPE_FUNCTION && this.links.length == 0) obj = null;
    if (obj && Object.keys(obj).length == 1 && obj.name)obj = null; // obj is null if there is no real information other than name

    // console.log(obj);
    cleanJson(obj);

    return obj;
};

Port.prototype.shouldLink = function ()
{
    return true;
};

/**
 * @function removeLinks
 * @memberof Port
 * @instance
 * @description remove all links from port
 */
Port.prototype.removeLinks = function ()
{
    let count = 0;
    while (this.links.length > 0)
    {
        count++;
        if (count > 5000)
        {
            this._log.warn("could not delete links... / infinite loop");
            this.links.length = 0;
            break;
        }
        this.links[0].remove();
    }
};

/**
 * @function removeLink
 * @memberof Port
 * @instance
 * @description remove all link from port
 * @param {CABLES.Link} link
 */
Port.prototype.removeLink = function (link)
{
    for (const i in this.links)
        if (this.links[i] == link)
            this.links.splice(i, 1);

    if (this.direction == CONSTANTS.PORT.PORT_DIR_IN)
    {
        if (this.type == CONSTANTS.OP.OP_PORT_TYPE_VALUE) this.setValue(this._valueBeforeLink || 0);
        else this.setValue(this._valueBeforeLink || null);
    }

    if (CABLES.UI && this._op.checkLinkTimeWarnings) this._op.checkLinkTimeWarnings();

    if (this.onLinkChanged) this.onLinkChanged();
    this.emitEvent("onLinkChanged");
    this.emitEvent("onLinkRemoved");
    this._op.emitEvent("onLinkChanged");
};

/**
 * @function getName
 * @memberof Port
 * @instance
 * @description return port name
 */
Port.prototype.getName = function ()
{
    return this.name;
};

/**
 * @function getTitle
 * @memberof Port
 * @instance
 * @description return port name or title
 */
Port.prototype.getTitle = function ()
{
    if (this.uiAttribs.title) return this.uiAttribs.title;
    return this.name;
};

Port.prototype.addLink = function (l)
{
    this._valueBeforeLink = this.value;
    this.links.push(l);
    if (CABLES.UI && this._op.checkLinkTimeWarnings) this._op.checkLinkTimeWarnings();

    if (this.onLinkChanged) this.onLinkChanged();
    this.emitEvent("onLinkChanged");
    this._op.emitEvent("onLinkChanged");
};

/**
 * @function getLinkTo
 * @memberof Port
 * @instance
 * @param {Port} p2 otherPort
 * @description return link, which is linked to otherPort
 */
Port.prototype.getLinkTo = function (p2)
{
    for (const i in this.links) if (this.links[i].portIn == p2 || this.links[i].portOut == p2) return this.links[i];
};

/**
 * @function removeLinkTo
 * @memberof Port
 * @instance
 * @param {Port} p2 otherPort
 * @description removes link, which is linked to otherPort
 */
Port.prototype.removeLinkTo = function (p2)
{
    for (const i in this.links)
    {
        if (this.links[i].portIn == p2 || this.links[i].portOut == p2)
        {
            this.links[i].remove();
            if (CABLES.UI && this._op.checkLinkTimeWarnings) this._op.checkLinkTimeWarnings();

            if (this.onLinkChanged) this.onLinkChanged();
            this.emitEvent("onLinkChanged");
            this.emitEvent("onLinkRemoved");
            return;
        }
    }
};

/**
 * @function isLinkedTo
 * @memberof Port
 * @instance
 * @param {Port} p2 otherPort
 * @description returns true if port is linked to otherPort
 */
Port.prototype.isLinkedTo = function (p2)
{
    for (const i in this.links) if (this.links[i].portIn == p2 || this.links[i].portOut == p2) return true;

    return false;
};

Port.prototype._activity = function ()
{
    this.activityCounter++;
};

/**
 * @function trigger
 * @memberof Port
 * @instance
 * @description trigger the linked port (usually invoked on an output function port)
 */
Port.prototype.trigger = function ()
{
    const linksLength = this.links.length;

    this._activity();
    if (linksLength === 0) return;
    if (!this._op.enabled) return;

    let portTriggered = null;
    try
    {
        for (let i = 0; i < linksLength; ++i)
        {
            if (this.links[i].portIn)
            {
                portTriggered = this.links[i].portIn;

                portTriggered.op.patch.pushTriggerStack(portTriggered);
                portTriggered._onTriggered();

                portTriggered.op.patch.popTriggerStack();
            }
            if (this.links[i]) this.links[i].activity();
        }
    }
    catch (ex)
    {
        portTriggered.op.enabled = false;

        if (this._op.patch.isEditorMode())
        {
            // this._op.patch.emitEvent("exception", ex, portTriggered.op);
            // this._op.patch.emitEvent("opcrash", portTriggered);
            // console.log("crash", portTriggered.op.objName);

            if (portTriggered.op.onError) portTriggered.op.onError(ex);
        }
        this._log.error("exception in port: " + portTriggered.op.name, portTriggered.op);
        this._log.error(ex);
    }
};

Port.prototype.call = function ()
{
    this._log.warn("call deprecated - use trigger() ");
    this.trigger();
};

Port.prototype.execute = function ()
{
    this._log.warn("### execute port: " + this.getName(), this.goals.length);
};

Port.prototype.setVariableName = function (n)
{
    this._useVariableName = n;


    this._op.patch.on("variableRename", (oldname, newname) =>
    {
        if (oldname != this._useVariableName) return;
        this._useVariableName = newname;
    });
};

Port.prototype.getVariableName = function ()
{
    return this._useVariableName;
};

Port.prototype.setVariable = function (v)
{
    this.setAnimated(false);
    const attr = { "useVariable": false };

    if (this._variableIn && this._varChangeListenerId)
    {
        this._variableIn.off(this._varChangeListenerId);
        this._variableIn = null;
    }

    if (v)
    {
        this._variableIn = this._op.patch.getVar(v);

        if (!this._variableIn)
        {
            this._log.warn("PORT VAR NOT FOUND!!!", v);
        }
        else
        {
            if (this.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT)
            {
                this._varChangeListenerId = this._variableIn.on("change", () => { this.set(null); this.set(this._variableIn.getValue()); });
            }
            else
            {
                this._varChangeListenerId = this._variableIn.on("change", this.set.bind(this));
            }
            this.set(this._variableIn.getValue());
        }
        this._useVariableName = v;
        attr.useVariable = true;
        attr.variableName = this._useVariableName;
    }
    else
    {
        attr.variableName = this._useVariableName = null;
        attr.useVariable = false;
    }

    this.setUiAttribs(attr);
    this._op.patch.emitEvent("portSetVariable", this._op, this, v);
};

Port.prototype._handleNoTriggerOpAnimUpdates = function (a)
{
    let hasTriggerPort = false;
    for (let i = 0; i < this._op.portsIn.length; i++)
    {
        if (this._op.portsIn.type == CONSTANTS.OP.OP_PORT_TYPE_FUNCTION)
        {
            hasTriggerPort = true;
            break;
        }
    }

    if (!hasTriggerPort)
    {
        if (a) this._notriggerAnimUpdate = this._op.patch.on("onRenderFrame",
            () =>
            {
                this.updateAnim();
            });
        else this._op.patch.removeEventListener(this._notriggerAnimUpdate);
    }
};

Port.prototype.setAnimated = function (a)
{
    if (this._animated != a)
    {
        this._animated = a;
        this._op._hasAnimPort = true;

        if (this._animated && !this.anim)
        {
            this.anim = new Anim({ "name": "port " + this.name });
            this.anim.addEventListener("onChange", () =>
            {
                this._op.patch.emitEvent("portAnimUpdated", this._op, this, this.anim);
            });
        }
        this._onAnimToggle();
    }

    this._handleNoTriggerOpAnimUpdates(a);
    if (!a)
    {
        this.anim = null;
    }

    this.setUiAttribs({ "isAnimated": this._animated });
};

Port.prototype.toggleAnim = function ()
{
    this._animated = !this._animated;
    if (this._animated && !this.anim)
    {
        this.anim = new Anim({ "name": "port " + this.name });
        this.anim.addEventListener("onChange", () =>
        {
            this._op.patch.emitEvent("portAnimUpdated", this._op, this, this.anim);
        });
    }
    this.setAnimated(this._animated);
    this._onAnimToggle();
    this.setUiAttribs({ "isAnimated": this._animated });
};

/**
 * <pre>
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_VALUE = 0;
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_FUNCTION = 1;
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_OBJECT = 2;
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_TEXTURE = 2;
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_ARRAY = 3;
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC = 4;
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_STRING = 5;
 * </pre>
 * @function getType
 * @memberof Port
 * @instance
 * @return {Number} type of port
 */
Port.prototype.getType = function ()
{
    return this.type;
};

/**
 * @function isLinked
 * @memberof Port
 * @instance
 * @return {Boolean} true if port is linked
 */
Port.prototype.isLinked = function ()
{
    return this.links.length > 0 || this._animated || this._useVariableName != null;
};

Port.prototype.isBoundToVar = function ()
{
    const b = this._useVariableName != null;
    this.uiAttribs.boundToVar = b;
    return b;
};
/**
 * @function isAnimated
 * @memberof Port
 * @instance
 * @return {Boolean} true if port is animated
 */
Port.prototype.isAnimated = function ()
{
    return this._animated;
};

/**
 * @function isHidden
 * @memberof Port
 * @instance
 * @return {Boolean} true if port is hidden
 */
Port.prototype.isHidden = function ()
{
    return this.uiAttribs.hidePort;
};

/**
 * @function onTriggered
 * @memberof Port
 * @instance
 * @param {function} a onTriggeredCallback
 * @description set callback, which will be executed when port was triggered (usually output port)
 */
Port.prototype._onTriggered = function (a)
{
    this._activity();
    this._op.updateAnims();
    if (this._op.enabled && this.onTriggered) this.onTriggered(a);

    if (this._op.enabled) this.emitEvent("trigger");
};

Port.prototype._onSetProfiling = function (v)
{
    this._op.patch.profiler.add("port", this);
    this.setValue(v);
    this._op.patch.profiler.add("port", null);
};

Port.prototype._onTriggeredProfiling = function ()
{
    if (this._op.enabled && this.onTriggered)
    {
        this._op.patch.profiler.add("port", this);
        this.onTriggered();
        this._op.patch.profiler.add("port", null);
    }
};



Port.prototype.getUiActiveState = function ()
{
    return this._uiActiveState;
};

Port.prototype.setUiActiveState = function (onoff)
{
    this._uiActiveState = onoff;
    if (this.onUiActiveStateChange) this.onUiActiveStateChange();
};

/**
 * @deprecated
 * @param {function} cb
 */
Port.prototype.onValueChange = function (cb)
{
    this.onChange = cb;
};

/**
 * @deprecated
 */
Port.prototype.hidePort = function () {};


/**
 * Returns the port type string, e.g. "value" based on the port type number
 * @function portTypeNumberToString
 * @instance
 * @memberof Port
 * @param {Number} type - The port type number
 * @returns {String} - The port type as string
 */
Port.portTypeNumberToString = function (type)
{
    if (type == CONSTANTS.OP.OP_PORT_TYPE_VALUE) return "value";
    if (type == CONSTANTS.OP.OP_PORT_TYPE_FUNCTION) return "function";
    if (type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT) return "object";
    if (type == CONSTANTS.OP.OP_PORT_TYPE_ARRAY) return "array";
    if (type == CONSTANTS.OP.OP_PORT_TYPE_STRING) return "string";
    if (type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC) return "dynamic";
    return "unknown";
};



;// CONCATENATED MODULE: ./src/core/core_port_switch.js




class SwitchPort extends Port
{
    constructor(__parent, name, type, uiAttribs, indexPort)
    {
        super(__parent, name, type, uiAttribs);

        this.get = () =>
        {
            let s = super.get();

            if (CABLES.UI)
            {
                if (
                    s === "" ||
                    s === null ||
                    s === undefined ||
                    (uiAttribs.values && uiAttribs.values.indexOf(String(s)) === -1)
                )
                {
                    this.op.setUiError("invalidswitch", "Invalid Value [" + this.name + "]: \"" + s + "\"", 1);
                }
                else this.op.setUiError("invalidswitch", null);
            }

            if (s === null || s === undefined)s = "";

            return s;
        };

        this.indexPort = indexPort;
        this.indexPort.set = (value) =>
        {
            const values = uiAttribs.values;

            if (!values)
            {
                // console.log("switch port has no values", this);
                return;
            }

            let intValue = Math.floor(value);

            intValue = Math.min(intValue, values.length - 1);
            intValue = Math.max(intValue, 0);

            this.indexPort.setValue(intValue);
            this.set(values[intValue]);

            if (this.op.patch.isEditorMode() && performance.now() - (this.lastTime || 0) > 100 && window.gui && gui.patchView.isCurrentOp(this.op))
            {
                gui.opParams.show(this.op);
                this.lastTime = performance.now();
            }
        };
    }

    setUiAttribs(attribs)
    {
        const hidePort = attribs.hidePort;
        attribs.hidePort = true;
        super.setUiAttribs(attribs);
        if (typeof hidePort !== "undefined")
        {
            this.indexPort.setUiAttribs({ hidePort });
        }
    }
}



;// CONCATENATED MODULE: ./src/core/core_port_select.js




class ValueSelectPort extends SwitchPort
{
    setUiAttribs(newAttribs)
    {
        // never unhide valuePort when indexPort is linked
        if (this.indexPort.isLinked())
        {
            for (const p in newAttribs)
            {
                if (p == "greyout" && !newAttribs[p]) newAttribs[p] = "true";
            }
        }
        super.setUiAttribs(newAttribs);
    }
}





;// CONCATENATED MODULE: ./src/core/core_port_multi.js



const MIN_NUM_PORTS = 2;

class MultiPort extends Port
{
    constructor(__parent, name, type, dir, uiAttribs, uiAttribsPorts)
    {
        super(__parent, name, CONSTANTS.OP.OP_PORT_TYPE_ARRAY, uiAttribs);

        this.setUiAttribs({ "multiPort": true, "group": this.name, "order": -1 });
        this.ports = [];
        this.direction = dir;
        this._uiAttribsPorts = uiAttribsPorts;

        // console.log("uiattribs", uiAttribs);

        const updateArray = () =>
        {
            const arr = [];

            let ll = 1;
            if (this.uiAttribs.multiPortManual)ll = 0;

            for (let i = 0; i < this.ports.length - ll; i++)
                arr[i] = this.ports[i];

            this.setRef(arr);
        };

        const updateUi = () =>
        {
            let grey = !this.uiAttribs.multiPortManual || undefined;

            if (this.direction == CONSTANTS.PORT.PORT_DIR_OUT)grey = false;

            for (let i = 0; i < this.ports.length; i++)
            {
                let lp; // undefined to remove/not set it
                // let opacity;// undefined to remove/not set it
                // let grey;// undefined to remove/not set it
                let addPort = false;
                let title;
                let o = {};


                // console.log("this.op.preservedPortTitles", this.op.preservedPortTitles, this.op.preservedPortTitles[po.name], po.name);
                if (this.op.preservedPortTitles && this.op.preservedPortTitles[this.ports[i].name]) title = this.op.preservedPortTitles[this.ports[i].name];


                // if (!this.uiAttribs.multiPortManual)grey = true;
                if (i == 0) lp = this.ports.length;

                if (!this.uiAttribs.multiPortManual)
                    if (i == this.ports.length - 1)
                    {
                        title = "add port";
                        addPort = true;
                        grey = true;
                    }

                for (const attin in this._uiAttribsPorts)
                {
                    o[attin] = this._uiAttribsPorts[attin];
                }

                o.addPort = addPort;
                o.longPort = lp;
                o.title = title;
                o.greyout = grey;
                o.group = this.name;

                this.ports[i].setUiAttribs(o);
            }
        };

        this.removeInvalidPorts = () =>
        {
            for (let i = 0; i < this.ports.length; i++)
            {
                if (!this.ports[i]) this.ports.splice(i, 1);
            }

            if (!this.uiAttribs.multiPortManual)
            {
                if (this.ports.length > MIN_NUM_PORTS)

                    for (let i = this.ports.length - 1; i > 1; i--)
                    {
                        if (!this.ports[i].isLinked()) this.uiAttribs.multiPortNum = i;
                        else break;
                    }
            }

            updateArray();
        };

        this.countPorts = () =>
        {
            if (CABLES.UI && !gui.isRemoteClient && gui.patchView && gui.patchView.patchRenderer && gui.patchView.patchRenderer.isDraggingPort())
            {
                clearTimeout(this.retryTo);
                this.retryTo = setTimeout(this.countPorts.bind(this));
                return;
            }
            this.retryTo = null;

            let redo = false;
            this.removeListeners();
            this.removeInvalidPorts();

            for (let i = 0; i < this.ports.length; i++)
            {
                if (this.ports[i] && this.ports[i].links.length > 1)
                {
                    const po = this.ports[i + 1];
                    const otherPort = this.ports[i].links[0].getOtherPort(this.ports[i]);

                    if (!po || !otherPort)
                    {
                        this._log.warn("no port found?", po.name);
                    }
                    else
                    {
                        this.ports[i].links[0].remove();
                        this.op.patch.link(this.op, po.name, otherPort.op, otherPort.name);
                        redo = true;
                    }
                    break;
                }
            }

            if (!this.uiAttribs.multiPortManual)
            {
                let foundHole = true;
                while (foundHole)
                {
                    // console.log("search holes...");
                    foundHole = false;

                    for (let i = this.ports.length - 1; i > 1; i--)
                    {
                        if (this.ports[i] && this.ports[i].links.length > 0 && this.ports[i - 1].links.length == 0)
                        {
                            // console.log("found hole!");

                            // found hole
                            const otherPort = this.ports[i].links[0].getOtherPort(this.ports[i]);
                            this.ports[i].links[0].remove();

                            const po = this.ports[i - 1];

                            if (po && this.ports[i])
                            {
                                // console.log("move ", this.ports[i].name, "to", po.name);
                                this.op.patch.link(this.op, po.name, otherPort.op, otherPort.name);
                                foundHole = true;
                                redo = true;
                                break;
                            }
                        }
                    }


                    // this.checkNum();
                }

                // this.removeInvalidPorts();
            }


            if (!this.uiAttribs.multiPortManual) // if auto
            {
                while (this.ports.length > MIN_NUM_PORTS && !this.ports[this.ports.length - 1].isLinked() && !this.ports[this.ports.length - 2].isLinked())
                {
                    let i = this.ports.length - 1;
                    if (!this.ports[i].isLinked() && this.ports[i - 1] && !this.ports[i - 1].isLinked())
                    {
                        this.ports[i].setUiAttribs({ "removed": true });
                        this.ports[i].remove();
                        // this.ports[i] = null;
                        this.ports.splice(i, 1);
                    }
                }
            }

            this.removeInvalidPorts();

            if (!this.uiAttribs.multiPortManual && this.ports.length > 0 && this.ports[this.ports.length - 1].isLinked()) this.newPort();

            updateArray();
            updateUi();

            if (redo) this.countPorts();
            else this.addListeners();
        };

        this.removeListeners = () =>
        {
            for (let i = 0; i < this.ports.length; i++)
            {
                const po = this.ports[i];
                po.multiPortChangeListener = po.off(po.multiPortChangeListener);
                po.multiLinkChangeListener = po.off(po.multiLinkChangeListener);
            }
        };

        this.addListeners = () =>
        {
            for (let i = 0; i < this.ports.length; i++)
            {
                const po = this.ports[i];
                const idx = i;

                if (po.multiPortChangeListener)po.multiPortChangeListener = po.off(po.multiPortChangeListener);
                po.multiPortChangeListener = po.on("change", updateArray.bind(this));


                if (po.multiPortTriggerListener)po.multiPortTriggerListener = po.off(po.multiPortTriggerListener);
                po.multiPortTriggerListener = po.on("trigger", () => { this._onTriggered(idx); });


                // if (po.multiPortTriggerListener)po.multiPortTriggerListener = po.off(po.multiPortTriggerListener);
                // po.multiPortTriggerListener = po.on("trigger", this.trigger());

                if (po.multiLinkChangeListener)po.multiLinkChangeListener = po.off(po.multiLinkChangeListener);
                po.multiLinkChangeListener = po.on("onLinkChanged", () =>
                {
                    this.countPorts();
                    this.emitEvent("onLinkChanged");
                });

                if (po.multiLinkRemoveListener)po.multiLinkRemoveListener = po.off(po.multiLinkRemoveListener);
                po.multiLinkRemoveListener = po.on("onLinkRemoved", () =>
                {
                    // this.removeInvalidPorts();
                    // this.checkNum();
                    // this.countPorts();
                    updateUi();
                    this.emitEvent("onLinkChanged");
                    // this.countPorts.bind(this);
                });
            }
        };

        this.newPort = () =>
        {
            const attrs = {};
            // if (type == CABLES.OP_PORT_TYPE_STRING) attrs.type = "string";
            attrs.type = type;
            const po = new Port(this.op, name + "_" + this.ports.length, type, attrs);

            po.direction = dir;
            this.ports.push(po);
            // console.log("CONSTANTS.PORT_DIR_OUT", CONSTANTS.PORT.PORT_DIR_OUT, this.direction);
            if (this.direction == CONSTANTS.PORT.PORT_DIR_OUT) this.op.addOutPort(po);
            else this.op.addInPort(po);

            if (type == CONSTANTS.OP.OP_PORT_TYPE_NUMBER) po.setInitialValue(0);
            else if (type == CONSTANTS.OP.OP_PORT_TYPE_STRING) po.setInitialValue("");

            this.addListeners();

            updateUi();
            updateArray();
            this.emitEvent("onLinkChanged");
            // console.log("this.op.preservedPortTitles", this.op.preservedPortTitles, this.op.preservedPortTitles[po.name], po.name);
            if (this.op.preservedPortTitles && this.op.preservedPortTitles[po.name]) po.setUiAttribs({ "title": this.op.preservedPortTitles[po.name] });

            return po;
        };

        this.initPorts = () =>
        {
            for (let i = 0; i < MIN_NUM_PORTS; i++) this.newPort();
            updateArray();
            updateUi();
        };

        this.checkNum = () =>
        {
            this.uiAttribs.multiPortNum = Math.max(MIN_NUM_PORTS, this.uiAttribs.multiPortNum);

            while (this.ports.length < this.uiAttribs.multiPortNum) this.newPort();
            while (this.ports.length > this.uiAttribs.multiPortNum) if (this.ports[this.ports.length - 1]) this.ports.pop().remove();

            this.removeInvalidPorts();
        };

        this.incDec = (incDir) =>
        {
            this.uiAttribs.multiPortNum = this.uiAttribs.multiPortNum || MIN_NUM_PORTS;
            // console.log("this.uiAttribs.multiPortNum", this.uiAttribs.multiPortNum, this.uiAttribs.multiPortNum + incDir);
            this.setUiAttribs({ "multiPortNum": this.uiAttribs.multiPortNum + incDir });
            this.checkNum();

            updateUi();
        };

        this.toggleManual = () =>
        {
            this.setUiAttribs({ "multiPortManual": !this.uiAttribs.multiPortManual });
            this.op.refreshParams();
        };

        this.on("onUiAttrChange", (attribs) =>
        {
            if (attribs.hasOwnProperty("multiPortManual"))
            {
                updateUi();
                this.removeInvalidPorts();
                this.checkNum();
                this.countPorts();
                updateUi();
            }
        });


        this.on("onUiAttrChange", this.checkNum.bind(this));
        this.checkNum();
        this.countPorts();
        this.removeInvalidPorts();
        updateUi();
    }
}





;// CONCATENATED MODULE: ./src/core/core_op.js









/**
 * op the class of all operators
 * @namespace external:CABLES#Op
 * @hideconstructor
 */

/**
 * @type {Object}
 * @name attachments
 * @instance
 * @memberof Op
 * @description access file attachments as String values
 * @example
 * // set shader source to attached files (files are called shader.vert / shader.frag)
 * shader.setSource(attachments.shader_vert,attachments.shader_frag);
 */

const Ops = {};

const Op = function ()
{
    EventTarget.apply(this);

    this._log = new Logger("core_op");
    this.data = {}; // UNUSED, DEPRECATED, only left in for backwards compatibility with userops
    this.storage = {}; // op-specific data to be included in export
    this.__objName = "";
    this.portsOut = [];
    this.portsIn = [];
    this.portsInData = []; // original loaded patch data
    this.opId = ""; // unique op id
    this.uiAttribs = {};
    this.enabled = true;
    this.patch = arguments[0];
    this._name = arguments[1];
    this.preservedPortTitles = {};
    this.preservedPortValues = {};
    this.preservedPortLinks = {};

    this._linkTimeRules = {
        "needsLinkedToWork": [],
        "needsParentOp": null
    };

    this.shouldWork = {};
    this.hasUiErrors = false;
    this._uiErrors = {};
    this._hasAnimPort = false;

    if (arguments[1])
    {
        this._shortOpName = CABLES.getShortOpName(arguments[1]);
        this.getTitle();
    }

    this.id = arguments[2] || shortId(); // instance id
    this.onAddPort = null;
    this.onCreate = null;
    this.onResize = null;
    this.onLoaded = null;
    this.onDelete = null;
    this.onError = null;

    this._instances = null;

    /**
     * overwrite this to prerender shader and meshes / will be called by op `loadingStatus`
     * @function preRender
     * @memberof Op
     * @instance
     */
    this.preRender = null;

    /**
     * overwrite this to initialize your op
     * @function init
     * @memberof Op
     * @instance
     */
    this.init = null;

    Object.defineProperty(this, "name", {
        get() { return this.getTitle(); },
        set(v)
        {
            this.setTitle(v);
        }
    });

    Object.defineProperty(this, "_objName", { set(on)
    {
        this.__objName = on; this._log = new Logger("op " + on);
    } });

    Object.defineProperty(this, "objName", { get() { return this.__objName; } });
    Object.defineProperty(this, "shortName", { get() { return this._shortOpName; } });

    if (this.initUi) this.initUi();
};

{
    Op.prototype.clearUiAttrib = function (name)
    {
        const obj = {};
        // obj.name = null;
        this.uiAttrib(obj);
    };

    Op.prototype.checkMainloopExists = function ()
    {
        if (!CABLES.UI) return;
        if (!this.patch.cgl.mainloopOp) this.setUiError("nomainloop", "patch should have a mainloop to use this op");
        else this.setUiError("nomainloop", null);
    };

    Op.prototype.getTitle = function ()
    {
        if (!this.uiAttribs) return "nouiattribs" + this._name;

        // if ((this.uiAttribs.title === undefined || this.uiAttribs.title === "") && this.objName.indexOf("Ops.Ui.") == -1)
        //     this.uiAttribs.title = this._shortOpName;

        return this.uiAttribs.title || this._shortOpName;
    };

    Op.prototype.setTitle = function (title)
    {
        // this._log.log("settitle", title);
        // this._log.log(
        //     (new Error()).stack
        // );

        if (title != this.getTitle()) this.uiAttr({ "title": title });
    };

    Op.prototype.setStorage = function (newAttribs)
    {
        if (!newAttribs) return;
        this.storage = this.storage || {};

        let changed = false;
        for (const p in newAttribs)
        {
            if (this.storage[p] != newAttribs[p]) changed = true;
            this.storage[p] = newAttribs[p];
        }

        if (changed) this.emitEvent("onStorageChange", newAttribs);
    };

    Op.prototype.isSubPatchOp = function ()
    {
        if (this.storage) return (this.storage.subPatchVer || 0);
    };

    const _setUiAttrib = function (newAttribs)
    {
        if (!newAttribs) return;

        if (newAttribs.error || newAttribs.warning || newAttribs.hint)
        {
            this._log.warn("old ui error/warning attribute in " + this._name + ", use op.setUiError !", newAttribs);
        }


        if (typeof newAttribs != "object") this._log.error("op.uiAttrib attribs are not of type object");
        if (!this.uiAttribs) this.uiAttribs = {};

        let changed = false;
        let emitMove = false;
        if (
            CABLES.UI &&
            newAttribs.hasOwnProperty("translate") &&
            (
                !this.uiAttribs.translate ||
                this.uiAttribs.translate.x != newAttribs.translate.x ||
                this.uiAttribs.translate.y != newAttribs.translate.y
            )) emitMove = true;


        if (newAttribs.hasOwnProperty("title") && newAttribs.title != this.uiAttribs.title)
        {
            // const doEmitEvent = newAttribs.title != this.getTitle();
            this.uiAttribs.title = newAttribs.title;
            // if (doEmitEvent) this.emitEvent("onTitleChange", newAttribs.title);
            changed = true;
            // this.setTitle(newAttribs.title);
        }

        if (newAttribs.hasOwnProperty("disabled")) this.setEnabled(!newAttribs.disabled);

        for (const p in newAttribs)
        {
            if (this.uiAttribs[p] != newAttribs[p]) changed = true;
            this.uiAttribs[p] = newAttribs[p];
        }


        if (this.uiAttribs.hasOwnProperty("selected") && this.uiAttribs.selected == false) delete this.uiAttribs.selected;


        if (changed)
        {
            this.emitEvent("onUiAttribsChange", newAttribs);
            this.patch.emitEvent("onUiAttribsChange", this, newAttribs);
        }


        if (emitMove) this.emitEvent("move");
    };
    /**
     * setUiAttrib
     * possible values:
     * <pre>
     * warning - warning message - showing up in op parameter panel
     * error - error message - showing up in op parameter panel
     * extendTitle - op title extension, e.g. [ + ]
     * </pre>
     * @function setUiAttrib
     * @param {Object} newAttribs, e.g. {"attrib":value}
     * @memberof Op
     * @instance
     * @example
     * op.setUiAttrib({"extendTitle":str});
     */
    Op.prototype.setUiAttribs = Op.prototype.setUiAttrib = Op.prototype.uiAttr = _setUiAttrib;

    Op.prototype.getName = function ()
    {
        if (this.uiAttribs.name) return this.uiAttribs.name;
        return this._name;
    };

    Op.prototype.addOutPort = function (p)
    {
        p.direction = CONSTANTS.PORT.PORT_DIR_OUT;
        p._op = this;
        this.portsOut.push(p);
        this.emitEvent("onPortAdd", p);
        return p;
    };

    Op.prototype.hasDynamicPort = function ()
    {
        let i = 0;
        for (i = 0; i < this.portsIn.length; i++)
        {
            if (this.portsIn[i].type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC) return true;
            if (this.portsIn[i].getName() == "dyn") return true;
        }
        for (i = 0; i < this.portsOut.length; i++)
        {
            if (this.portsOut[i].type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC) return true;
            if (this.portsOut[i].getName() == "dyn") return true;
        }

        return false;
    };

    Op.prototype.addInPort = function (p)
    {
        if (!(p instanceof Port)) throw new Error("parameter is not a port!");

        p.direction = CONSTANTS.PORT.PORT_DIR_IN;
        p._op = this;

        this.portsIn.push(p);
        this.emitEvent("onPortAdd", p);

        return p;
    };

    /**
     * create a trigger input port
     * @function inTrigger
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     *
     */
    Op.prototype.inFunction = Op.prototype.inTrigger = function (name, v)
    {
        const p = this.addInPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_FUNCTION));
        if (v !== undefined) p.set(v);
        return p;
    };

    /**
     * create multiple UI trigger buttons
     * @function inTriggerButton
     * @memberof Op
     * @instance
     * @param {String} name
     * @param {Array} names
     * @return {Port} created port
     */
    Op.prototype.inFunctionButton = Op.prototype.inTriggerButton = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_FUNCTION, {
                "display": "button"
            })
        );
        if (v !== undefined) p.set(v);
        return p;
    };

    Op.prototype.inFunctionButton = Op.prototype.inUiTriggerButtons = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_FUNCTION, {
                "display": "buttons"
            })
        );
        if (v !== undefined) p.set(v);
        return p;
    };



    /**
     * create a number value input port
     * @function inFloat
     * @memberof Op
     * @instance
     * @param {String} name
     * @param {Number} value
     * @return {Port} created port
     */
    Op.prototype.inValueFloat = Op.prototype.inValue = Op.prototype.inFloat = function (name, v)
    {
        const p = this.addInPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE));

        p.setInitialValue(v);

        return p;
    };

    /**
     * create a boolean input port, displayed as a checkbox
     * @function inBool
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {Boolean} value
     * @return {Port} created port
     */
    Op.prototype.inValueBool = Op.prototype.inBool = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_NUMBER, {
                "display": "bool"
            })
        );

        if (v === true)v = 1;
        if (v === false)v = 0;
        p.setInitialValue(v);

        return p;
    };


    Op.prototype.inMultiPort = function (name, type)
    {
        const p = new MultiPort(
            this,
            name,
            type,
            CONSTANTS.PORT.PORT_DIR_IN,
            {
                "addPort": true,
                "hidePort": true
            }
        );
        p.ignoreValueSerialize = true;

        this.addInPort(p);
        p.initPorts();

        return p;
    };

    Op.prototype.outMultiPort = function (name, type, uiAttribsPort = {})
    {
        const p = new MultiPort(
            this,
            name,
            type,
            CONSTANTS.PORT.PORT_DIR_OUT,
            {
                "display": "multiport",
                "hidePort": true
            },
            uiAttribsPort
        );
        p.ignoreValueSerialize = true;

        this.addOutPort(p);
        p.initPorts();

        return p;
    };



    Op.prototype.inValueString = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "type": "string"
            })
        );
        p.value = "";

        p.setInitialValue(v);
        return p;
    };

    /**
     * create a String value input port
     * @function inString
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {String} value default value
     * @return {Port} created port
     */
    Op.prototype.inString = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
                "type": "string"
            })
        );
        v = v || "";
        // p.value = v;

        p.setInitialValue(v);
        return p;
    };

    /**
     * create a String value input port displayed as TextArea
     * @function inValueText
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {String} value default value
     * @return {Port} created port
     */
    Op.prototype.inValueText = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "type": "string",
                "display": "text"
            })
        );
        p.value = "";

        p.setInitialValue(v);
        // if (v !== undefined)
        // {
        //     p.set(v);
        //     p.defaultValue = v;
        // }
        return p;
    };

    Op.prototype.inTextarea = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
                "type": "string",
                "display": "text"
            })
        );
        p.value = "";
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    /**
     * create a String value input port displayed as editor
     * @function inStringEditor
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {String} value default value
     * @return {Port} created port
     */
    // new string
    Op.prototype.inStringEditor = function (name, v, syntax, hideFormatButton = true)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
                "type": "string",
                "display": "editor",
                "editShortcut": true,
                "editorSyntax": syntax,
                "hideFormatButton": hideFormatButton
            }));

        p.value = "";
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    // old
    Op.prototype.inValueEditor = function (name, v, syntax, hideFormatButton = true)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_NUMBER, {
                "type": "string",
                "display": "editor",
                "editorSyntax": syntax,
                "hideFormatButton": hideFormatButton
            })
        );
        p.value = "";
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    /**
     * create a string select box
     * @function inDropDown
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {Array} values
     * @param {String} value default value
     * @return {Port} created port
     */
    Op.prototype.inValueSelect = Op.prototype.inDropDown = function (name, values, v, noindex)
    {
        let p = null;
        if (!noindex)
        {
            const indexPort = new Port(this, name + " index", CONSTANTS.OP.OP_PORT_TYPE_NUMBER, {
                "increment": "integer",
                "hideParam": true
            });
            const n = this.addInPort(indexPort);

            if (values) for (let i = 0; i < values.length; i++) values[i] = String(values[i]);

            const valuePort = new ValueSelectPort(
                this,
                name,
                CONSTANTS.OP.OP_PORT_TYPE_NUMBER,
                {
                    "display": "dropdown",
                    "hidePort": true,
                    "type": "string",
                    "values": values
                },
                n
            );

            valuePort.indexPort = indexPort;

            valuePort.on("change", (val, thePort) =>
            {
                if (!thePort.indexPort.isLinked() && thePort.uiAttribs.values)
                {
                    const idx = thePort.uiAttribs.values.indexOf(val);
                    if (idx > -1) thePort.indexPort.set(idx);
                }
            });

            indexPort.onLinkChanged = function ()
            {
                valuePort.setUiAttribs({ "greyout": indexPort.isLinked() });
            };

            p = this.addInPort(valuePort);

            if (v !== undefined)
            {
                p.set(v);
                const index = values.findIndex((item) => { return item == v; });
                n.setValue(index);
                p.defaultValue = v;
                n.defaultValue = index;
            }
        }
        else
        {
            const valuePort = new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "display": "dropdown",
                "hidePort": true,
                "type": "string",
                values
            });

            p = this.addInPort(valuePort);
        }

        return p;
    };

    /**
     * create a string switch box
     * @function inSwitch
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {Array} values
     * @param {String} value default value
     * @return {Port} created port
     */
    Op.prototype.inSwitch = function (name, values, v, noindex)
    {
        let p = null;
        if (!noindex)
        {
            if (!v)v = values[0];
            const indexPort = new Port(this, name + " index", CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "increment": "integer",
                "values": values,
                "hideParam": true
            });
            const n = this.addInPort(indexPort);

            if (values) for (let i = 0; i < values.length; i++) values[i] = String(values[i]);

            const switchPort = new SwitchPort(
                this,
                name,
                CONSTANTS.OP.OP_PORT_TYPE_STRING,
                {
                    "display": "switch",
                    "hidePort": true,
                    "type": "string",
                    "values": values
                },
                n
            );

            switchPort.indexPort = indexPort;

            switchPort.on("change", (val, thePort) =>
            {
                if (!thePort.indexPort.isLinked() && thePort.uiAttribs.values)
                {
                    const idx = thePort.uiAttribs.values.indexOf(val);
                    if (idx > -1) thePort.indexPort.set(idx);
                }
            });

            indexPort.onLinkChanged = function ()
            {
                switchPort.setUiAttribs({ "greyout": indexPort.isLinked() });
            };
            p = this.addInPort(switchPort);

            if (v !== undefined)
            {
                p.set(v);
                const index = values.findIndex((item) => { return item == v; });
                n.setValue(index);
                p.defaultValue = v;
                n.defaultValue = index;
            }
        }
        else
        {
            const switchPort = new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
                "display": "switch",
                "hidePort": true,
                "type": "string",
                "values": values
            });
            p = this.addInPort(switchPort);
        }

        return p;
    };

    /**
     * create a integer input port
     * @function inInt
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {number} value default value
     * @return {Port} created port
     */
    Op.prototype.inValueInt = Op.prototype.inInt = function (name, v)
    {
        // old
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "increment": "integer"
            })
        );
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    /**
     * create a file/URL input port
     * @function inURL
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.inFile = function (name, filter, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "display": "file",
                "type": "string",
                "filter": filter
            })
        );
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    Op.prototype.inUrl = function (name, filter, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
                "display": "file",
                "type": "string",
                "filter": filter
            })
        );
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    /**
     * create a texture input port
     * @function inTexture
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.inTexture = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_OBJECT, {
                "display": "texture",
                "objType": "texture",
                "preview": true
            })
        );
        p.ignoreValueSerialize = true;
        if (v !== undefined) p.set(v);
        return p;
    };


    /**
     * create a object input port
     * @function inObject
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.inObject = function (name, v, objType)
    {
        const p = this.addInPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_OBJECT, { "objType": objType }));
        p.ignoreValueSerialize = true;

        if (v !== undefined) p.set(v);
        return p;
    };

    Op.prototype.inGradient = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "display": "gradient"
                // "hidePort": true
            })
        );
        if (v !== undefined) p.set(v);
        return p;
    };


    Op.prototype.getPortVisibleIndex = function (p)
    {
        let ports = this.portsIn;
        if (p.direction == CONSTANTS.PORT_DIR_OUT)ports = this.portsOut;

        let index = 0;
        for (let i = 0; i < ports.length; i++)
        {
            if (ports[i].uiAttribs.hidePort) continue;
            index++;
            if (ports[i] == p) return index;
        }
    };

    /**
     * create a array input port
     * @function inArray
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.inArray = function (name, v, stride)
    {
        if (!stride && CABLES.UTILS.isNumeric(v))stride = v;

        const p = this.addInPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_ARRAY, { "stride": stride }));

        if (v !== undefined && (Array.isArray(v) || v == null)) p.set(v);

        // if (v !== undefined) p.set(v);
        return p;
    };

    /**
     * create a value slider input port
     * @function inFloatSlider
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {number} defaultvalue
     * @param {number} min
     * @param {number} max
     * @return {Port} created port
     */
    Op.prototype.inValueSlider = Op.prototype.inFloatSlider = function (name, v, min, max)
    {
        const uiattribs = { "display": "range" };

        if (min != undefined && max != undefined)
        {
            uiattribs.min = min;
            uiattribs.max = max;
        }

        const p = this.addInPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, uiattribs));
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    /**
     * create output trigger port
     * @function outTrigger
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outFunction = Op.prototype.outTrigger = function (name, v)
    {
        // old
        const p = this.addOutPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_FUNCTION));
        if (v !== undefined) p.set(v);
        return p;
    };

    /**
     * create output value port
     * @function outNumber
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {number} default value
     * @return {Port} created port
     */
    Op.prototype.outValue = Op.prototype.outNumber = function (name, v)
    {
        // old
        const p = this.addOutPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE));
        if (v !== undefined) p.set(v);
        return p;
    };

    /**
     * deprecated create output boolean port
     * @deprecated
     * @function outBool
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outValueBool = Op.prototype.outBool = function (name, v)
    {
        // old: use outBoolNum
        const p = this.addOutPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "display": "bool"
            })
        );
        if (v !== undefined) p.set(v);
        else p.set(0);
        return p;
    };

    /**
     * create output boolean port,value will be converted to 0 or 1
     * @function outBoolNum
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outBoolNum = function (name, v)
    {
        const p = this.addOutPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "display": "boolnum"
            })
        );

        p.set = function (b)
        {
            this.setValue(b ? 1 : 0);
            // this._log.log("bool set", b, this.get());
        }.bind(p);

        if (v !== undefined) p.set(v);
        else p.set(0);
        return p;
    };

    /**
     * create output string port
     * @function outString
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outValueString = function (name, v)
    {
        const p = this.addOutPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "type": "string"
            })
        );
        if (v !== undefined) p.set(v);
        return p;
    };
    Op.prototype.outString = function (name, v)
    {
        const p = this.addOutPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
                "type": "string"
            })
        );
        if (v !== undefined) p.set(v);
        else p.set("");
        return p;
    };

    /**
     * create output object port
     * @function outObject
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outObject = function (name, v, objType)
    {
        const p = this.addOutPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_OBJECT, { "objType": objType || null }));
        p.set(v || null);
        p.ignoreValueSerialize = true;
        return p;
    };

    /**
     * create output array port
     * @function outArray
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outArray = function (name, v, stride)
    {
        if (!stride && CABLES.UTILS.isNumeric(v))stride = v;
        const p = this.addOutPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_ARRAY, { "stride": stride }));
        if (v !== undefined && (Array.isArray(v) || v == null)) p.set(v);

        p.ignoreValueSerialize = true;
        return p;
    };

    /**
     * create output texture port
     * @function outTexture
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outTexture = function (name, v)
    {
        const p = this.addOutPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_OBJECT, {
                "preview": true,
                "objType": "texture",
                "display": "texture"
            })
        );
        if (v !== undefined) p.set(v || CGL.Texture.getEmptyTexture(this.patch.cgl));

        p.ignoreValueSerialize = true;
        return p;
    };

    Op.prototype.inDynamic = function (name, filter, options, v)
    {
        const p = new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC, options);

        p.shouldLink = function (p1, p2)
        {
            if (filter && UTILS.isArray(filter))
            {
                for (let i = 0; i < filter.length; i++)
                {
                    if (p1 == this && p2.type === filter[i]) return true;
                    if (p2 == this && p1.type === filter[i]) return true;
                }
                return false; // types do not match
            }
            return true; // no filter set
        };

        this.addInPort(p);
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    Op.prototype.removeLinks = function ()
    {
        for (let i = 0; i < this.portsIn.length; i++) this.portsIn[i].removeLinks();
        for (let i = 0; i < this.portsOut.length; i++) this.portsOut[i].removeLinks();
    };

    Op.prototype.getSerialized = function ()
    {
        const opObj = {};

        if (this.opId) opObj.opId = this.opId;
        if (this.patch.storeObjNames) opObj.objName = this.objName;

        opObj.id = this.id;
        opObj.uiAttribs = JSON.parse(JSON.stringify(this.uiAttribs)) || {};

        if (this.storage && Object.keys(this.storage).length > 0) opObj.storage = JSON.parse(JSON.stringify(this.storage));
        if (this.uiAttribs.hasOwnProperty("working") && this.uiAttribs.working == true) delete this.uiAttribs.working;
        if (opObj.uiAttribs.hasOwnProperty("uierrors")) delete opObj.uiAttribs.uierrors;

        if (opObj.uiAttribs.title === "") delete opObj.uiAttribs.title;
        if (opObj.uiAttribs.color === null) delete opObj.uiAttribs.color;
        if (opObj.uiAttribs.comment === null) delete opObj.uiAttribs.comment;

        if (opObj.uiAttribs.title == this._shortOpName ||
            (this.uiAttribs.title || "").toLowerCase() == this._shortOpName.toLowerCase()) delete opObj.uiAttribs.title;

        opObj.portsIn = [];
        opObj.portsOut = [];

        for (let i = 0; i < this.portsIn.length; i++)
        {
            const s = this.portsIn[i].getSerialized();
            if (s) opObj.portsIn.push(s);
        }

        for (let i = 0; i < this.portsOut.length; i++)
        {
            const s = this.portsOut[i].getSerialized();
            if (s) opObj.portsOut.push(s);
        }

        if (opObj.portsIn.length == 0) delete opObj.portsIn;
        if (opObj.portsOut.length == 0) delete opObj.portsOut;
        cleanJson(opObj);

        return opObj;
    };

    Op.prototype.getFirstOutPortByType = function (type)
    {
        for (const ipo in this.portsOut) if (this.portsOut[ipo].type == type) return this.portsOut[ipo];
    };

    Op.prototype.getFirstInPortByType = function (type)
    {
        for (const ipo in this.portsIn) if (this.portsIn[ipo].type == type) return this.portsIn[ipo];
    };

    /**
     * return port by the name portName
     * @function getPort
     * @instance
     * @memberof Op
     * @param {String} portName
     * @return {Port}
     */
    Op.prototype.getPort = Op.prototype.getPortByName = function (name, lowerCase)
    {
        if (lowerCase)
        {
            for (let ipi = 0; ipi < this.portsIn.length; ipi++)
                if (this.portsIn[ipi].getName().toLowerCase() == name || this.portsIn[ipi].id.toLowerCase() == name)
                    return this.portsIn[ipi];

            for (let ipo = 0; ipo < this.portsOut.length; ipo++)
                if (this.portsOut[ipo].getName().toLowerCase() == name || this.portsOut[ipo].id.toLowerCase() == name)
                    return this.portsOut[ipo];
        }
        else
        {
            for (let ipi = 0; ipi < this.portsIn.length; ipi++)
                if (this.portsIn[ipi].getName() == name || this.portsIn[ipi].id == name)
                    return this.portsIn[ipi];

            for (let ipo = 0; ipo < this.portsOut.length; ipo++)
                if (this.portsOut[ipo].getName() == name || this.portsOut[ipo].id == name)
                    return this.portsOut[ipo];
        }
    };


    /**
     * return port by the name id
     * @function getPortById
     * @instance
     * @memberof Op
     * @param {String} id
     * @return {Port}
     */
    Op.prototype.getPortById = function (id)
    {
        for (let ipi = 0; ipi < this.portsIn.length; ipi++) if (this.portsIn[ipi].id == id) return this.portsIn[ipi];
        for (let ipo = 0; ipo < this.portsOut.length; ipo++) if (this.portsOut[ipo].id == id) return this.portsOut[ipo];
    };

    Op.prototype.updateAnims = function ()
    {
        if (this._hasAnimPort)
            for (let i = 0; i < this.portsIn.length; i++) this.portsIn[i].updateAnim();
    };

    Op.prototype.log = function ()
    {
        this._log.log(...arguments);
    };

    Op.prototype.error = Op.prototype.logError = function ()
    {
        // if (!this)
        // {
        //     this._log.error("no this...!!!");
        //     debugger;
        //     return;
        // }
        // const initiator = "op " + this.objName;
        // if (CABLES.UI && !CABLES.UI.logFilter.filterLog({ "initiator": initiator, "opInstId": this.id, "level": 2 }, ...arguments)) return;

        // // if (this.patch.silent) return;
        // const args = ["[op " + CABLES.getShortOpName(this.objName) + "]"];
        // args.push.apply(args, arguments);
        // Function.prototype.apply.apply(this._log.error, [console, args]);// eslint-disable-line
        // if (window.gui) window.gui.emitEvent("opLogEvent", this.objName, "error", arguments);
        this._log.error(...arguments);
    };

    Op.prototype.warn = Op.prototype.logWarn = function ()
    {
        this._log.warn(...arguments);

        // const initiator = "op " + this.objName;
        // if (CABLES.UI && !CABLES.UI.logFilter.filterLog({ "initiator": initiator, "opInstId": this.id, "level": 1 }, ...arguments)) return;

        // // if (this.patch.silent) return;
        // const args = ["[op " + CABLES.getShortOpName(this.objName) + "]"];
        // args.push.apply(args, arguments);
        // Function.prototype.apply.apply(this._log.warn, [console, args]);// eslint-disable-line
    };

    Op.prototype.verbose = Op.prototype.logVerbose = function ()
    {
        // const initiator = "op " + CABLES.getShortOpName(this.objName);
        // if (CABLES.UI && !CABLES.UI.logFilter.filterLog({ "initiator": initiator, "opInstId": this.id, "level": 0 }, ...arguments)) return;

        // if (!CABLES.UI && this.patch.silent) return;

        // const args = ["[" + initiator + "]"];
        // args.push.apply(args, arguments);
        // Function.prototype.apply.apply(this._log.info, [console, args]);// eslint-disable-line
        this._log.verbose(...arguments);
    };


    Op.prototype.profile = function (enable)
    {
        for (let ipi = 0; ipi < this.portsIn.length; ipi++)
        {
            this.portsIn[ipi]._onTriggered = this.portsIn[ipi]._onTriggeredProfiling;
            this.portsIn[ipi].set = this.portsIn[ipi]._onSetProfiling;
        }
    };

    Op.prototype.findParent = function (objName)
    {
        for (let ipi = 0; ipi < this.portsIn.length; ipi++)
        {
            if (this.portsIn[ipi].isLinked())
            {
                if (this.portsIn[ipi].links[0].portOut.parent.objName == objName)
                    return this.portsIn[ipi].links[0].portOut.parent;

                let found = null;
                found = this.portsIn[ipi].links[0].portOut.parent.findParent(objName);
                if (found) return found;
            }
        }
        return null;
    };


    // todo: check instancing stuff?
    Op.prototype.cleanUp = function ()
    {
        if (this._instances)
        {
            for (let i = 0; i < this._instances.length; i++)
            {
                if (this._instances[i].onDelete) this._instances[i].onDelete();
            }


            this._instances.length = 0;
        }
        for (let i = 0; i < this.portsIn.length; i++)
        {
            this.portsIn[i].setAnimated(false);
        }

        if (this.onAnimFrame) this.patch.removeOnAnimFrame(this);
    };

    // todo: check instancing stuff?
    Op.prototype.instanced = function (triggerPort)
    {
        this._log.log("instanced", this.patch.instancing.numCycles());
        if (this.patch.instancing.numCycles() === 0) return false;


        let i = 0;
        let ipi = 0;
        if (!this._instances || this._instances.length != this.patch.instancing.numCycles())
        {
            if (!this._instances) this._instances = [];
            this._.log("creating instances of ", this.objName, this.patch.instancing.numCycles(), this._instances.length);
            this._instances.length = this.patch.instancing.numCycles();

            for (i = 0; i < this._instances.length; i++)
            {
                this._instances[i] = this.patch.createOp(this.objName, true);
                this._instances[i].instanced = function ()
                {
                    return false;
                };
                this._instances[i].uiAttr(this.uiAttribs);

                for (let ipo = 0; ipo < this.portsOut.length; ipo++)
                {
                    if (this.portsOut[ipo].type == CONSTANTS.OP.OP_PORT_TYPE_FUNCTION)
                    {
                        this._instances[i].getPortByName(this.portsOut[ipo].name).trigger = this.portsOut[ipo].trigger.bind(this.portsOut[ipo]);
                    }
                }
            }

            for (ipi = 0; ipi < this.portsIn.length; ipi++)
            {
                this.portsIn[ipi].onChange = null;
                this.portsIn[ipi].onValueChanged = null;
            }
        }

        const theTriggerPort = null;
        for (ipi = 0; ipi < this.portsIn.length; ipi++)
        {
            if (
                this.portsIn[ipi].type == CONSTANTS.OP.OP_PORT_TYPE_VALUE ||
                this.portsIn[ipi].type == CONSTANTS.OP.OP_PORT_TYPE_ARRAY
            )
            {
                this._instances[this.patch.instancing.index()].portsIn[ipi].set(this.portsIn[ipi].get());
            }
            if (this.portsIn[ipi].type == CONSTANTS.OP.OP_PORT_TYPE_FUNCTION)
            {
                // if(this._instances[ this.patch.instancing.index() ].portsIn[ipi].name==triggerPort.name)
                // theTriggerPort=this._instances[ this.patch.instancing.index() ].portsIn[ipi];
            }
        }

        if (theTriggerPort) theTriggerPort.onTriggered();

        for (ipi = 0; ipi < this.portsOut.length; ipi++)
        {
            if (this.portsOut[ipi].type == CONSTANTS.OP.OP_PORT_TYPE_VALUE)
            {
                this.portsOut[ipi].set(this._instances[this.patch.instancing.index()].portsOut[ipi].get());
            }
        }

        return true;
    };

    // todo: check instancing stuff?
    Op.prototype.initInstancable = function ()
    {
        //         if(this.isInstanced)
        //         {
        //             this._log.log('cancel instancing');
        //             return;
        //         }
        //         this._instances=[];
        //         for(var ipi=0;ipi<this.portsIn.length;ipi++)
        //         {
        //             if(this.portsIn[ipi].type==CONSTANTS.OP.OP_PORT_TYPE_VALUE)
        //             {
        //
        //             }
        //             if(this.portsIn[ipi].type==CONSTANTS.OP.OP_PORT_TYPE_FUNCTION)
        //             {
        //                 // var piIndex=ipi;
        //                 this.portsIn[ipi].onTriggered=function(piIndex)
        //                 {
        //
        //                     var i=0;
        // // this._log.log('trigger',this._instances.length);
        //
        //                 }.bind(this,ipi );
        //
        //             }
        // };
        // this._instances=null;
    };

    Op.prototype.setValues = function (obj)
    {
        for (const i in obj)
        {
            const port = this.getPortByName(i);
            if (port) port.set(obj[i]);
            else this._log.warn("op.setValues: port not found:", i);
        }
    };

    /**
     * return true if op has this error message id
     * @function hasUiError
     * @instance
     * @memberof Op
     * @param {id} error id
     * @returns {Boolean} - has id
     */
    Op.prototype.hasUiError = function (id)
    {
        return this._uiErrors.hasOwnProperty(id) && this._uiErrors[id];
    };

    /**
     * show op error message - set message to null to remove error message
     * @function setUiError
     * @instance
     * @memberof Op
     * @param {id} error id
     * @param {txt} text message
     * @param {level} level
     */
    Op.prototype.setUiError = function (id, txt, level)
    {
        // overwritten in ui: core_extend_op
    };

    // todo: remove
    Op.prototype.setError = function (id, txt)
    {
        this._log.warn("old error message op.error() - use op.setUiError()");
    };


    /**
     * enable/disable op
     * @function
     * @instance
     * @memberof Op
     * @param {boolean}
     */
    Op.prototype.setEnabled = function (b)
    {
        this.enabled = b;
        this.emitEvent("onEnabledChange", b);
    };

    /**
     * organize ports into a group
     * @function
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {Array} ports
     */
    Op.prototype.setPortGroup = function (name, ports)
    {
        for (let i = 0; i < ports.length; i++)
        {
            if (ports[i])
                if (ports[i].setUiAttribs) ports[i].setUiAttribs({ "group": name });
                else
                {
                    this._log.error("setPortGroup: invalid port!");
                }
        }
    };

    /**
     * visually indicate ports that they are coordinate inputs
     * @function
     * @instance
     * @memberof Op
     * @param {Port} portX
     * @param {Port} portY
     * @param {Port} portZ
     */
    Op.prototype.setUiAxisPorts = function (px, py, pz)
    {
        if (px) px.setUiAttribs({ "axis": "X" });
        if (py) py.setUiAttribs({ "axis": "Y" });
        if (pz) pz.setUiAttribs({ "axis": "Z" });
    };

    /**
     * remove port from op
     * @function removePort
     * @instance
     * @memberof Op
     * @param {Port} port to remove
     */
    Op.prototype.removePort = function (port)
    {
        for (let ipi = 0; ipi < this.portsIn.length; ipi++)
        {
            if (this.portsIn[ipi] == port)
            {
                this.portsIn.splice(ipi, 1);
                this.emitEvent("onUiAttribsChange", {});
                this.emitEvent("onPortRemoved", {});
                return;
            }
        }
        for (let ipi = 0; ipi < this.portsOut.length; ipi++)
        {
            if (this.portsOut[ipi] == port)
            {
                this.portsOut.splice(ipi, 1);
                this.emitEvent("onUiAttribsChange", {});
                this.emitEvent("onPortRemoved", {});
                return;
            }
        }
    };

    Op.prototype._checkLinksNeededToWork = function () {};

    /**
     * show a warning of this op is not a child of parentOpName
     * @function
     * @instance
     * @memberof Op
     * @param {String} parentOpName
     */
    Op.prototype.toWorkNeedsParent = function (parentOpName)
    {
        if (!this.patch.isEditorMode()) return;

        this._linkTimeRules.needsParentOp = parentOpName;
    };

    // /**
    //  * show a warning of this op is a child of parentOpName
    //  * @function
    //  * @instance
    //  * @memberof Op
    //  * @param {String} parentOpName
    //  */
    Op.prototype.toWorkShouldNotBeChild = function (parentOpName, type)
    {
        if (!this.patch.isEditorMode()) return;
        this._linkTimeRules.forbiddenParent = parentOpName;
        if (type != undefined) this._linkTimeRules.forbiddenParentType = type;
    };


    /**
     * show a small X to indicate op is not working when given ports are not linked
     * @function
     * @instance
     * @memberof Op
     * @param {Port} port1
     * @param {Port} port2
     * @param {Port} port3
     */
    Op.prototype.toWorkPortsNeedToBeLinked = function ()
    {
        if (!this.patch.isEditorMode()) return;
        for (let i = 0; i < arguments.length; i++)
            if (this._linkTimeRules.needsLinkedToWork.indexOf(arguments[i]) == -1) this._linkTimeRules.needsLinkedToWork.push(arguments[i]);
    };
    Op.prototype.toWorkPortsNeedToBeLinkedReset = function ()
    {
        if (!this.patch.isEditorMode()) return;
        this._linkTimeRules.needsLinkedToWork.length = 0;
        if (this.checkLinkTimeWarnings) this.checkLinkTimeWarnings();
    };

    Op.prototype.initVarPorts = function ()
    {
        for (let i = 0; i < this.portsIn.length; i++)
        {
            if (this.portsIn[i].getVariableName()) this.portsIn[i].setVariable(this.portsIn[i].getVariableName());
        }
    };

    /**
     * refresh op parameters, if current op is selected
     * @function
     * @instance
     * @memberof Op
     */
    Op.prototype.refreshParams = function ()
    {
        if (this.patch && this.patch.isEditorMode() && this.isCurrentUiOp())
        {
            gui.opParams.show(this);
        }
    };

    /**
     * Returns true if op is selected and parameter are shown in the editor, can only return true if in editor/ui
     * @function isCurrentUiOp
     * @instance
     * @memberof Op
     * @returns {Boolean} - is current ui op
     */
    Op.prototype.isCurrentUiOp = function ()
    {
        if (this.patch.isEditorMode()) return gui.patchView.isCurrentOp(this);
    };

    /**
     * Implement to render 2d canvas based graphics from in an op
     * @function renderVizLayer
     * @instance
     * @memberof Op
     * @param {ctx} context of canvas 2d
     * @param {Object} layer info
     * @param {number} layer.x x position on canvas
     * @param {number} layer.y y position on canvas
     * @param {number} layer.width width of canvas
     * @param {number} layer.height height of canvas
     * @param {number} layer.scale current scaling of patchfield view
     */
    Op.prototype.renderVizLayer = null; // optionaly defined in op instance
}



;// CONCATENATED MODULE: ./src/core/loadingstatus.js




/**
 * LoadingStatus class, manages asynchronous loading jobs
 *
 * @namespace external:CABLES#LoadingStatus
 * @hideconstructor
 * @class
 * @param patch
 */
const LoadingStatus = function (patch)
{
    EventTarget.apply(this);

    this._log = new Logger("LoadingStatus");
    this._loadingAssets = {};
    this._cbFinished = [];
    this._assetTasks = [];
    this._percent = 0;
    this._count = 0;
    this._countFinished = 0;
    this._order = 0;
    this._startTime = 0;
    this._patch = patch;
    this._wasFinishedPrinted = false;
    this._loadingAssetTaskCb = false;
};

LoadingStatus.prototype.setOnFinishedLoading = function (cb)
{
    this._cbFinished.push(cb);
};

LoadingStatus.prototype.getNumAssets = function ()
{
    return this._countFinished;
};

LoadingStatus.prototype.getProgress = function ()
{
    return this._percent;
};

LoadingStatus.prototype.checkStatus = function ()
{
    this._countFinished = 0;
    this._count = 0;

    for (const i in this._loadingAssets)
    {
        this._count++;
        if (!this._loadingAssets[i].finished)
        {
            this._countFinished++;
        }
    }

    this._percent = (this._count - this._countFinished) / this._count;

    if (this._countFinished === 0)
    {
        for (let j = 0; j < this._cbFinished.length; j++)
        {
            if (this._cbFinished[j])
            {
                const cb = this._cbFinished[j];
                setTimeout(() => { cb(this._patch); this.emitEvent("finishedAll"); }, 100);
            }
        }

        if (!this._wasFinishedPrinted)
        {
            this._wasFinishedPrinted = true;
            this.print();
        }
        this.emitEvent("finishedAll");
    }
};

LoadingStatus.prototype.getList = function ()
{
    let arr = [];
    for (const i in this._loadingAssets)
    {
        arr.push(this._loadingAssets[i]);
    }

    return arr;
};


LoadingStatus.prototype.getListJobs = function ()
{
    let arr = [];
    for (const i in this._loadingAssets)
    {
        if (!this._loadingAssets[i].finished)arr.push(this._loadingAssets[i].name);
    }

    return arr;
};

LoadingStatus.prototype.print = function ()
{
    if (this._patch.config.silent) return;

    const rows = [];

    for (const i in this._loadingAssets)
    {
        rows.push([
            this._loadingAssets[i].order,
            this._loadingAssets[i].type,
            this._loadingAssets[i].name,
            (this._loadingAssets[i].timeEnd - this._loadingAssets[i].timeStart) / 1000 + "s",
        ]);
    }

    this._log.groupCollapsed("finished loading " + this._order + " assets in " + (Date.now() - this._startTime) / 1000 + "s");
    this._log.table(rows);
    this._log.groupEnd();
};

LoadingStatus.prototype.finished = function (id)
{
    const l = this._loadingAssets[id];
    if (l)
    {
        if (l.finished) this._log.warn("loading job was already finished", l);

        if (l.op) l.op.setUiAttribs({ "loading": false });
        l.finished = true;
        l.timeEnd = Date.now();
    }

    this.checkStatus();
    this.emitEvent("finishedTask");
    return null;
};

LoadingStatus.prototype._startAssetTasks = function ()
{
    for (let i = 0; i < this._assetTasks.length; i++) this._assetTasks[i]();
    this._assetTasks.length = 0;
};

/**
 * delay an asset loading task, mainly to wait for ui to be finished loading and showing, and only then start loading assets
 * @function addAssetLoadingTask
 * @instance
 * @memberof LoadingStatus
 * @param {function} cb callback
 */
LoadingStatus.prototype.addAssetLoadingTask = function (cb)
{
    if (this._patch.isEditorMode() && !CABLES.UI.loaded)
    {
        this._assetTasks.push(cb);

        if (!this._loadingAssetTaskCb)window.gui.addEventListener("uiloaded", this._startAssetTasks.bind(this));
        this._loadingAssetTaskCb = true;
    }
    else
    {
        cb();
    }
    this.emitEvent("addAssetTask");
};

LoadingStatus.prototype.existByName = function (name)
{
    for (let i in this._loadingAssets)
    {
        if (this._loadingAssets[i].name == name && !this._loadingAssets[i].finished)
            return true;
    }
};

LoadingStatus.prototype.start = function (type, name, op)
{
    if (this._startTime == 0) this._startTime = Date.now();
    const id = generateUUID();

    name = name || "unknown";
    if (name.length > 100)name = name.substring(0, 100);


    if (op)op.setUiAttribs({ "loading": true });

    this._loadingAssets[id] = {
        "id": id,
        "op": op,
        "type": type,
        "name": name,
        "finished": false,
        "timeStart": Date.now(),
        "order": this._order,
    };
    this._order++;

    this.emitEvent("startTask");

    return id;
};



;// CONCATENATED MODULE: ./src/core/instancing.js
// todo: needs to be removed...

const Instancing = function ()
{
    this._loops = [];
    this._indizes = [];
    this._index = 0;
};

Instancing.prototype.pushLoop = function (maxNum)
{
    this._loops.push(Math.abs(Math.floor(maxNum)));
    this._indizes.push(this._index);
};

Instancing.prototype.popLoop = function ()
{
    this._loops.pop();
    // this._index--;
    this._index = this._indizes.pop();
    if (this._loops.length === 0) this._index = 0;
};

Instancing.prototype.numLoops = function ()
{
    return this._loops.length;
};

Instancing.prototype.numCycles = function ()
{
    if (this._loops.length === 0) return 0;
    let num = this._loops[0];
    for (let i = 1; i < this._loops.length; i++) num *= this._loops[i];

    return num;
};

Instancing.prototype.inLoop = function ()
{
    return this._loops.length > 0;
};

Instancing.prototype.increment = function ()
{
    this._index++;
};

Instancing.prototype.index = function ()
{
    return this._index;
};



;// CONCATENATED MODULE: ./src/core/timer.js


/** @namespace CABLES */

const internalNow = function ()
{
    return window.performance.now();
};

/**
 * current time in milliseconds
 * @memberof CABLES
 * @function now
 * @static
 */
const now = function ()
{
    return internalNow();
};

// ----------------------------

/**
 * Measuring time
 * @namespace external:CABLES#Timer
 * @hideconstructor
 * @class
 */
const Timer = function ()
{
    EventTarget.apply(this);

    this._timeStart = internalNow();
    this._timeOffset = 0;

    this._currentTime = 0;
    this._lastTime = 0;
    this._paused = true;
    this._delay = 0;
    this.overwriteTime = -1;
};


Timer.prototype._internalNow = function ()
{
    if (this._ts) return this._ts;
    return internalNow();
};

Timer.prototype._getTime = function ()
{
    this._lastTime = (this._internalNow() - this._timeStart) / 1000;
    return this._lastTime + this._timeOffset;
};

Timer.prototype.setDelay = function (d)
{
    this._delay = d;
    this.emitEvent("timeChange");
};

/**
 * @function
 * @memberof Timer
 * @instance
 * @description returns true if timer is playing
 * @return {Boolean} value
 */
Timer.prototype.isPlaying = function ()
{
    return !this._paused;
};

/**
 * @function
 * @memberof Timer
 * @instance
 * @param ts
 * @description update timer
 * @return {Number} time
 */
Timer.prototype.update = function (ts)
{
    if (ts) this._ts = ts;
    if (this._paused) return;
    this._currentTime = this._getTime();

    return this._currentTime;
};

/**
 * @function
 * @memberof Timer
 * @instance
 * @return {Number} time in milliseconds
 */
Timer.prototype.getMillis = function ()
{
    return this.get() * 1000;
};

/**
 * @function
 * @memberof Timer
 * @instance
 * @return {Number} value time in seconds
 */
Timer.prototype.get = Timer.prototype.getTime = function ()
{
    if (this.overwriteTime >= 0) return this.overwriteTime - this._delay;
    return this._currentTime - this._delay;
};

/**
 * toggle between play/pause state
 * @function
 * @memberof Timer
 * @instance
 */
Timer.prototype.togglePlay = function ()
{
    if (this._paused) this.play();
    else this.pause();
};

/**
 * set current time
 * @function
 * @memberof Timer
 * @instance
 * @param {Number} t
 */
Timer.prototype.setTime = function (t)
{
    if (isNaN(t) || t < 0) t = 0;
    this._timeStart = this._internalNow();
    this._timeOffset = t;
    this._currentTime = t;
    this.emitEvent("timeChange");
};

Timer.prototype.setOffset = function (val)
{
    if (this._currentTime + val < 0)
    {
        this._timeStart = this._internalNow();
        this._timeOffset = 0;
        this._currentTime = 0;
    }
    else
    {
        this._timeOffset += val;
        this._currentTime = this._lastTime + this._timeOffset;
    }
    this.emitEvent("timeChange");
};

/**
 * (re)starts the timer
 * @function
 * @memberof Timer
 * @instance
 */
Timer.prototype.play = function ()
{
    this._timeStart = this._internalNow();
    this._paused = false;
    this.emitEvent("playPause");
};

/**
 * pauses the timer
 * @function
 * @memberof Timer
 * @instance
 */
Timer.prototype.pause = function ()
{
    this._timeOffset = this._currentTime;
    this._paused = true;
    this.emitEvent("playPause");
};



;// CONCATENATED MODULE: ./src/core/core_profiler.js


class Profiler
{
    constructor(patch)
    {
        this.startFrame = patch.getFrameNum();
        this.items = {};
        this.currentId = null;
        this.currentStart = 0;
        this._patch = patch;
    }

    getItems()
    {
        return this.items;
    }

    clear()
    {
        if (this.paused) return;
        this.items = {};
    }

    togglePause()
    {
        this.paused = !this.paused;
        if (!this.paused)
        {
            this.items = {};
            this.currentStart = performance.now();
        }
    }

    add(type, object)
    {
        if (this.paused) return;

        if (this.currentId !== null)
        {
            if (!object || object.id != this.currentId)
            {
                if (this.items[this.currentId])
                {
                    this.items[this.currentId].timeUsed += performance.now() - this.currentStart;

                    if (!this.items[this.currentId].peakTime || now() - this.items[this.currentId].peakTime > 5000)
                    {
                        this.items[this.currentId].peak = 0;
                        this.items[this.currentId].peakTime = now();
                    }
                    this.items[this.currentId].peak = Math.max(this.items[this.currentId].peak, performance.now() - this.currentStart);
                }
            }
        }

        if (object !== null)
        {
            if (!this.items[object.id])
            {
                this.items[object.id] = {
                    "numTriggers": 0,
                    "timeUsed": 0,
                };
            }

            if (this.items[object.id].lastFrame != this._patch.getFrameNum()) this.items[object.id].numTriggers = 0;

            this.items[object.id].lastFrame = this._patch.getFrameNum();
            this.items[object.id].numTriggers++;
            this.items[object.id].opid = object.op.id;
            this.items[object.id].title = object.op.name + "." + object.name;
            this.items[object.id].subPatch = object.op.uiAttribs.subPatch;

            this.currentId = object.id;
            this.currentStart = performance.now();
        }
        else
        {
            this.currentId = null;
        }
    }

    print()
    {
        console.log("--------");
        for (const i in this.items)
        {
            console.log(this.items[i].title + ": " + this.items[i].numTriggers + " / " + this.items[i].timeUsed);
        }
    }
}



;// CONCATENATED MODULE: ./src/core/cgl/constants.js
const SHADER = {
    // default attributes
    "SHADERVAR_VERTEX_POSITION": "vPosition",
    "SHADERVAR_VERTEX_NUMBER": "attrVertIndex",
    "SHADERVAR_VERTEX_NORMAL": "attrVertNormal",
    "SHADERVAR_VERTEX_TEXCOORD": "attrTexCoord",
    "SHADERVAR_INSTANCE_MMATRIX": "instMat",
    "SHADERVAR_VERTEX_COLOR": "attrVertColor",

    "SHADERVAR_INSTANCE_INDEX": "instanceIndex",

    // default uniforms
    "SHADERVAR_UNI_PROJMAT": "projMatrix",
    "SHADERVAR_UNI_VIEWMAT": "viewMatrix",
    "SHADERVAR_UNI_MODELMAT": "modelMatrix",
    "SHADERVAR_UNI_NORMALMAT": "normalMatrix",
    "SHADERVAR_UNI_INVVIEWMAT": "inverseViewMatrix",
    "SHADERVAR_UNI_INVPROJMAT": "invProjMatrix",
    "SHADERVAR_UNI_MATERIALID": "materialId",
    "SHADERVAR_UNI_OBJECTID": "objectId",

    "SHADERVAR_UNI_VIEWPOS": "camPos",
};


const BLEND_MODES = {
    "BLEND_NONE": 0,
    "BLEND_NORMAL": 1,
    "BLEND_ADD": 2,
    "BLEND_SUB": 3,
    "BLEND_MUL": 4,
};





const RAD2DEG = 180.0 / Math.PI;
const DEG2RAD = Math.PI / 180.0;

const constants_CONSTANTS = {
    "MATH": {
        "DEG2RAD": DEG2RAD,
        "RAD2DEG": RAD2DEG,
    },
    "SHADER": SHADER,
    "BLEND_MODES": BLEND_MODES,
};




;// CONCATENATED MODULE: ./src/core/cg/cg_uniform.js



class CgUniform
{
    constructor(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName)
    {
        this._log = new Logger("cg_uniform");
        this._type = __type;
        this._name = __name;
        this._shader = __shader;
        this._value = 0.00001;
        this._oldValue = null;
        this._port = null;
        this._structName = _structName;
        this._structUniformName = _structUniformName;
        this._propertyName = _propertyName;

        this._shader._addUniform(this);
        this.needsUpdate = true;
        this.shaderType = null;
        this.comment = null;

        if (__type == "f")
        {
            this.set = this.setValue = this.setValueF.bind(this);
            this.updateValue = this.updateValueF.bind(this);
        }
        else if (__type == "f[]")
        {
            this.set = this.setValue = this.setValueArrayF.bind(this);
            this.updateValue = this.updateValueArrayF.bind(this);
        }
        else if (__type == "2f[]")
        {
            this.set = this.setValue = this.setValueArray2F.bind(this);
            this.updateValue = this.updateValueArray2F.bind(this);
        }
        else if (__type == "3f[]")
        {
            this.set = this.setValue = this.setValueArray3F.bind(this);
            this.updateValue = this.updateValueArray3F.bind(this);
        }
        else if (__type == "4f[]")
        {
            this.set = this.setValue = this.setValueArray4F.bind(this);
            this.updateValue = this.updateValueArray4F.bind(this);
        }
        else if (__type == "i")
        {
            this.set = this.setValue = this.setValueI.bind(this);
            this.updateValue = this.updateValueI.bind(this);
        }
        else if (__type == "2i")
        {
            this.set = this.setValue = this.setValue2I.bind(this);
            this.updateValue = this.updateValue2I.bind(this);
        }
        else if (__type == "3i")
        {
            this.set = this.setValue = this.setValue3I.bind(this);
            this.updateValue = this.updateValue3I.bind(this);
        }
        else if (__type == "4i")
        {
            this.set = this.setValue = this.setValue4I.bind(this);
            this.updateValue = this.updateValue4I.bind(this);
        }
        else if (__type == "b")
        {
            this.set = this.setValue = this.setValueBool.bind(this);
            this.updateValue = this.updateValueBool.bind(this);
        }
        else if (__type == "4f")
        {
            this.set = this.setValue = this.setValue4F.bind(this);
            this.updateValue = this.updateValue4F.bind(this);
        }
        else if (__type == "3f")
        {
            this.set = this.setValue = this.setValue3F.bind(this);
            this.updateValue = this.updateValue3F.bind(this);
        }
        else if (__type == "2f")
        {
            this.set = this.setValue = this.setValue2F.bind(this);
            this.updateValue = this.updateValue2F.bind(this);
        }
        else if (__type == "t")
        {
            this.set = this.setValue = this.setValueT.bind(this);
            this.updateValue = this.updateValueT.bind(this);
        }
        else if (__type == "tc")
        {
            this.set = this.setValue = this.setValueT.bind(this);
            this.updateValue = this.updateValueT.bind(this);
        }
        else if (__type == "t[]")
        {
            this.set = this.setValue = this.setValueArrayT.bind(this);
            this.updateValue = this.updateValueArrayT.bind(this);
        }
        else if (__type == "m4" || __type == "m4[]")
        {
            this.set = this.setValue = this.setValueM4.bind(this);
            this.updateValue = this.updateValueM4.bind(this);
        }
        else throw new Error("Unknown uniform type");

        if (typeof _value == "object" && _value instanceof Port)
        {
            this._port = _value;
            this._value = this._port.get();


            if (_port2 && _port3 && _port4)
            {
                if (!(_port2 instanceof Port) || !(_port3 instanceof Port) || !(_port4 instanceof Port))
                {
                    this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ", this._name);
                }

                this._value = [0, 0, 0, 0];
                this._port2 = _port2;
                this._port3 = _port3;
                this._port4 = _port4;

                this._port.on("change", this.updateFromPort4f.bind(this));
                this._port2.on("change", this.updateFromPort4f.bind(this));
                this._port3.on("change", this.updateFromPort4f.bind(this));
                this._port4.on("change", this.updateFromPort4f.bind(this));

                // this._port.onChange = this._port2.onChange = this._port3.onChange = this._port4.onChange = this.updateFromPort4f.bind(this);
                this.updateFromPort4f();
            }
            else if (_port2 && _port3)
            {
                if (!(_port2 instanceof Port) || !(_port3 instanceof Port))
                {
                    this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ", this._name);
                }

                this._value = [0, 0, 0];
                this._port2 = _port2;
                this._port3 = _port3;
                // this._port.onChange = this._port2.onChange = this._port3.onChange = this.updateFromPort3f.bind(this);
                this._port.on("change", this.updateFromPort3f.bind(this));
                this._port2.on("change", this.updateFromPort3f.bind(this));
                this._port3.on("change", this.updateFromPort3f.bind(this));

                this.updateFromPort3f();
            }
            else if (_port2)
            {
                if (!(_port2 instanceof Port))
                {
                    this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ", this._name);
                }

                this._value = [0, 0];
                this._port2 = _port2;
                // this._port.onChange = this._port2.onChange = this.updateFromPort2f.bind(this);
                this._port.on("change", this.updateFromPort2f.bind(this));
                this._port2.on("change", this.updateFromPort2f.bind(this));

                this.updateFromPort2f();
            }
            else
            {
                // this._port.on = this.updateFromPort.bind(this);
                this._port.on("change", this.updateFromPort.bind(this));
            }
        }
        else this._value = _value;

        this.setValue(this._value);
        this.needsUpdate = true;
    }


    getType()
    {
        return this._type;
    }

    getName()
    {
        return this._name;
    }

    getValue()
    {
        return this._value;
    }

    getShaderType()
    {
        return this.shaderType;
    }

    isStructMember()
    {
        return !!this._structName;
    }


    updateFromPort4f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this._value[2] = this._port3.get();
        this._value[3] = this._port4.get();
        this.setValue(this._value);
    }

    updateFromPort3f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this._value[2] = this._port3.get();
        this.setValue(this._value);
    }

    updateFromPort2f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this.setValue(this._value);
    }

    updateFromPort()
    {
        this.setValue(this._port.get());
    }
}

/* harmony default export */ const cg_uniform = (CgUniform);

;// CONCATENATED MODULE: ./src/core/cgl/cgl_shader_uniform.js




/**
 * Shader uniforms
 *
 * types:
 * <pre>
 * f    - float
 * 2f   - vec2
 * 3f   - vec3
 * 4f   - vec4
 * i    - integer
 * t    - texture
 * m4   - mat4, 4x4 float matrix
 * f[]  - array of floats
 * 2f[] - array of float vec2
 * 3f[] - array of float vec3
 * 4f[] - array of float vec4
 * </pre>
 *
 * @namespace external:CGL
 * @class
 * @param {Shader} shader
 * @param {String} [type=f]
 * @param {String} name
 * @param {Number|Port} value  can be a Number,Matrix or Port
 * @example
 * // bind float uniform called myfloat and initialize with value 1.0
 * const unir=new CGL.Uniform(shader,'f','myfloat',1.0);
 * unir.setValue(1.0);
 *
 * // bind float uniform called myfloat and automatically set it to input port value
 * const myPort=op.inFloat("input");
 * const pv=new CGL.Uniform(shader,'f','myfloat',myPort);
 *
 */


// export const Uniform(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName)

class Uniform extends cg_uniform
{
    constructor(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName)
    {
        super(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName);
        this._loc = -1;
        this._cgl = __shader._cgl;
    }

    get name()
    {
        return this._name;
    }

    copy(newShader)
    {
        const uni = new Uniform(newShader, this._type, this._name, this._value, this._port2, this._port3, this._port4, this._structUniformName, this._structName, this._propertyName);
        uni.shaderType = this.shaderType;
        return uni;
    }

    /**
     * returns type as glsl type string. e.g. 'f' returns 'float'
     * @function getGlslTypeString
     * @memberof Uniform
     * @instance
     * @return {string} type as string
     */
    getGlslTypeString()
    {
        return Uniform.glslTypeString(this._type);
    }

    _isValidLoc()
    {
        return this._loc != -1;// && this._loc != null;
    }

    resetLoc()
    {
        this._loc = -1;
        this.needsUpdate = true;
    }

    bindTextures() {}

    getLoc()
    {
        return this._loc;
    }

    updateFromPort4f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this._value[2] = this._port3.get();
        this._value[3] = this._port4.get();
        this.setValue(this._value);
    }

    updateFromPort3f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this._value[2] = this._port3.get();
        this.setValue(this._value);
    }

    updateFromPort2f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this.setValue(this._value);
    }

    updateFromPort()
    {
        this.setValue(this._port.get());
    }

    updateValueF()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        this._shader.getCgl().gl.uniform1f(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueF(v)
    {
        if (v != this._value)
        {
            this.needsUpdate = true;
            this._value = v;
        }
    }

    updateValueI()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        this._shader.getCgl().gl.uniform1i(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    updateValue2I()
    {
        if (!this._value) return;

        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        this._shader.getCgl().gl.uniform2i(this._loc, this._value[0], this._value[1]);

        this.needsUpdate = false;
        this._cgl.profileData.profileUniformCount++;
    }

    updateValue3I()
    {
        if (!this._value) return;
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        this._shader.getCgl().gl.uniform3i(this._loc, this._value[0], this._value[1], this._value[2]);
        this.needsUpdate = false;
        this._cgl.profileData.profileUniformCount++;
    }

    updateValue4I()
    {
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }
        this._shader.getCgl().gl.uniform4i(this._loc, this._value[0], this._value[1], this._value[2], this._value[3]);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueI(v)
    {
        if (v != this._value)
        {
            this.needsUpdate = true;
            this._value = v;
        }
    }

    setValue2I(v)
    {
        if (!v) return;
        if (!this._oldValue)
        {
            this._oldValue = [v[0] - 1, 1];
            this.needsUpdate = true;
        }
        else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1])
        {
            this._oldValue[0] = v[0];
            this._oldValue[1] = v[1];
            this.needsUpdate = true;
        }

        this._value = v;
    }

    setValue3I(v)
    {
        if (!v) return;
        if (!this._oldValue)
        {
            this._oldValue = [v[0] - 1, 1, 2];
            this.needsUpdate = true;
        }
        else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1] || v[2] != this._oldValue[2])
        {
            this._oldValue[0] = v[0];
            this._oldValue[1] = v[1];
            this._oldValue[2] = v[2];
            this.needsUpdate = true;
        }

        this._value = v;
    }

    setValue4I(v)
    {
        this.needsUpdate = true;
        this._value = v || vec4.create();
    }

    updateValueBool()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;
        this._shader.getCgl().gl.uniform1i(this._loc, this._value ? 1 : 0);

        this._cgl.profileData.profileUniformCount++;
    }

    setValueBool(v)
    {
        if (v != this._value)
        {
            this.needsUpdate = true;
            this._value = v;
        }
    }

    setValueArray4F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValueArray4F()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        if (!this._value) return;
        this._shader.getCgl().gl.uniform4fv(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueArray3F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValueArray3F()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        if (!this._value) return;
        this._shader.getCgl().gl.uniform3fv(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueArray2F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValueArray2F()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        if (!this._value) return;
        this._shader.getCgl().gl.uniform2fv(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueArrayF(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValueArrayF()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        if (!this._value) return;
        this._shader.getCgl().gl.uniform1fv(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueArrayT(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }


    updateValue3F()
    {
        if (!this._value) return;
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        this._shader.getCgl().gl.uniform3f(this._loc, this._value[0], this._value[1], this._value[2]);
        this.needsUpdate = false;
        this._cgl.profileData.profileUniformCount++;
    }

    setValue3F(v)
    {
        if (!v) return;
        if (!this._oldValue)
        {
            this._oldValue = [v[0] - 1, 1, 2];
            this.needsUpdate = true;
        }
        else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1] || v[2] != this._oldValue[2])
        {
            this._oldValue[0] = v[0];
            this._oldValue[1] = v[1];
            this._oldValue[2] = v[2];
            this.needsUpdate = true;
        }

        this._value = v;
    }

    updateValue2F()
    {
        if (!this._value) return;

        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        this._shader.getCgl().gl.uniform2f(this._loc, this._value[0], this._value[1]);
        this.needsUpdate = false;
        this._cgl.profileData.profileUniformCount++;
    }

    setValue2F(v)
    {
        if (!v) return;
        if (!this._oldValue)
        {
            this._oldValue = [v[0] - 1, 1];
            this.needsUpdate = true;
        }
        else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1])
        {
            this._oldValue[0] = v[0];
            this._oldValue[1] = v[1];
            this.needsUpdate = true;
        }
        this._value = v;
    }

    updateValue4F()
    {
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        if (!this._value)
        {
            this._log.warn("no value for uniform", this._name, this);
            this._value = [0, 0, 0, 0];
        }

        this.needsUpdate = false;
        this._shader.getCgl().gl.uniform4f(this._loc, this._value[0], this._value[1], this._value[2], this._value[3]);
        this._cgl.profileData.profileUniformCount++;
    }

    setValue4F(v)
    {
        if (typeof this.value == "number") this.value = vec4.create(); // this should not be needed, but somehow it crashes with some shadermods

        if (!v) return;
        if (!this._oldValue)
        {
            this._oldValue = [v[0] - 1, 1, 2, 3];
            this.needsUpdate = true;
        }
        else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1] || v[2] != this._oldValue[2] || v[3] != this._oldValue[3])
        {
            this._oldValue[0] = v[0];
            this._oldValue[1] = v[1];
            this._oldValue[2] = v[2];
            this.needsUpdate = true;
        }

        this._value = v;
    }

    updateValueM4()
    {
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }
        if (!this._value || this._value.length % 16 != 0) return console.log("this.name", this._name, this._value);

        this._shader.getCgl().gl.uniformMatrix4fv(this._loc, false, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueM4(v)
    {
        this.needsUpdate = true;
        this._value = v || mat4.create();
    }

    updateValueArrayT()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        if (!this._value) return;
        this._shader.getCgl().gl.uniform1iv(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    updateValueT()
    {
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        this._cgl.profileData.profileUniformCount++;
        this._shader.getCgl().gl.uniform1i(this._loc, this._value);
        this.needsUpdate = false;
    }

    setValueT(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }
}


Uniform.glslTypeString = (t) =>
{
    if (t == "f") return "float";
    if (t == "b") return "bool";
    if (t == "i") return "int";
    if (t == "2i") return "ivec2";
    if (t == "2f") return "vec2";
    if (t == "3f") return "vec3";
    if (t == "4f") return "vec4";
    if (t == "m4") return "mat4";

    if (t == "t") return "sampler2D";
    if (t == "tc") return "samplerCube";

    if (t == "3f[]") return null; // ignore this for now...
    if (t == "m4[]") return null; // ignore this for now...
    if (t == "f[]") return null; // ignore this for now...

    console.warn("[CGL UNIFORM] unknown glsl type string ", t);
};


/**
 * @function setValue
 * @memberof Uniform
 * @instance
 * @param {Number|Array|Matrix|Texture} value
 */



;// CONCATENATED MODULE: ./src/core/cgl/cgl_texture.js





const DEFAULT_TEXTURE_SIZE = 8;

/**
 * A Texture
 * @namespace external:CGL
 * @class
 * @param {Context} __cgl cgl
 * @param {Object} options
 * @hideconstructor
 * @example
 * // generate a 256x256 pixel texture of random colors
 * const size=256;
 * const data = new Uint8Array(size*size*4);
 *
 * for(var x=0;x<size*size*4;x++) data[ x*4+3]=255;
 *
 * const tex=new CGL.Texture(cgl);
 * tex.initFromData(data,size,size,CGL.Texture.FILTER_NEAREST,CGL.Texture.WRAP_REPEAT);
 */
const Texture = function (__cgl, options = {})
{
    if (!__cgl) throw new Error("no cgl");
    this._log = new Logger("cgl_texture");
    this._cgl = __cgl;
    this.pixelFormat = options.pixelFormat || Texture.PFORMATSTR_RGBA8UB;
    this.tex = this._cgl.gl.createTexture();
    this.id = CABLES.uuid();
    this.width = 0;
    this.height = 0;
    this.loading = false;
    this.flip = true;
    this.flipped = false;
    this.shadowMap = false;
    this.deleted = false;
    this.image = null;
    this.anisotropic = 0;
    this.filter = Texture.FILTER_NEAREST;
    this.wrap = Texture.WRAP_CLAMP_TO_EDGE;
    this.texTarget = this._cgl.gl.TEXTURE_2D;
    if (options && options.type) this.texTarget = options.type;
    this.textureType = Texture.TYPE_DEFAULT;
    this.unpackAlpha = true;
    this._fromData = true;
    this.name = "unknown";

    this._glDataType = -1;
    this._glInternalFormat = -1;
    this._glDataFormat = -1;


    if (options)
    {
        this.name = options.name || this.name;
        if (options.isDepthTexture)
        {
            this.textureType = Texture.TYPE_DEPTH;
        }
        if (options.isFloatingPointTexture === true) this.textureType = Texture.TYPE_FLOAT;

        if ("textureType" in options) this.textureType = options.textureType;
        if ("filter" in options) this.filter = options.filter;
        if ("wrap" in options) this.wrap = options.wrap;
        if ("unpackAlpha" in options) this.unpackAlpha = options.unpackAlpha;
        if ("flip" in options) this.flip = options.flip;
        if ("shadowMap" in options) this.shadowMap = options.shadowMap;
        if ("anisotropic" in options) this.anisotropic = options.anisotropic;
    }
    else
    {
        options = {};
    }

    if (!options.pixelFormat && options.isFloatingPointTexture) this.pixelFormat = Texture.PFORMATSTR_RGBA32F;

    if (this.textureType == Texture.TYPE_DEPTH) this.pixelFormat = Texture.PFORMATSTR_DEPTH;



    if (!options.width) options.width = DEFAULT_TEXTURE_SIZE;
    if (!options.height) options.height = DEFAULT_TEXTURE_SIZE;

    this._cgl.profileData.profileTextureNew++;


    this.setFormat(Texture.setUpGlPixelFormat(this._cgl, this.pixelFormat));
    this._cgl.profileData.addHeavyEvent("texture created", this.name, options.width + "x" + options.height);

    this.setSize(options.width, options.height);
    this.getInfoOneLine();
};

Texture.prototype.isFloatingPoint = function ()
{
    return Texture.isPixelFormatFloat(this.pixelFormat);
};

/**
 * returns true if otherTexture has same options (width/height/filter/wrap etc)
 * @function compareSettings
 * @memberof Texture
 * @instance
 * @param {Texture} tex otherTexture
 * @returns {Boolean}
 */
Texture.prototype.compareSettings = function (tex)
{
    // if (!tex) { this._log.warn("compare: no tex"); return false; }
    // if (tex.width != this.width) this._log.warn("tex.width not equal", tex.width, this.width);
    // if (tex.height != this.height) this._log.warn("tex.height not equal", tex.height, this.height);
    // if (tex.filter != this.filter) this._log.warn("tex.filter not equal");
    // if (tex.wrap != this.wrap) this._log.warn("tex.wrap not equal");
    // if (tex.textureType != this.textureType) this._log.warn("tex.textureType not equal");
    // if (tex.unpackAlpha != this.unpackAlpha) this._log.warn("tex.unpackAlpha not equal");
    // if (tex.anisotropic != this.anisotropic) this._log.warn("tex.anisotropic not equal");
    // if (tex.shadowMap != this.shadowMap) this._log.warn("tex.shadowMap not equal");
    // if (tex.texTarget != this.texTarget) this._log.warn("tex.texTarget not equal");
    // if (tex.flip != this.flip) this._log.warn("tex.flip not equal");

    if (!tex) return false;
    return (
        tex.width == this.width &&
        tex.height == this.height &&
        tex.filter == this.filter &&
        tex.wrap == this.wrap &&
        tex.textureType == this.textureType &&
        tex.unpackAlpha == this.unpackAlpha &&
        tex.anisotropic == this.anisotropic &&
        tex.shadowMap == this.shadowMap &&
        tex.texTarget == this.texTarget &&
        tex.flip == this.flip
    );
};

/**
 * returns a new texture with the same settings (does not copy texture itself)
 * @function clone
 * @memberof Texture
 * @instance
 * @returns {Texture}
 */
Texture.prototype.clone = function ()
{
    const newTex = new Texture(this._cgl, {
        "name": this.name,
        "filter": this.filter,
        "anisotropic": this.anisotropic,
        "wrap": this.wrap,
        "textureType": this.textureType,
        "pixelFormat": this.pixelFormat,
        "unpackAlpha": this.unpackAlpha,
        "flip": this.flip,
        "width": this.width,
        "height": this.height,
    });

    this._cgl.profileData.addHeavyEvent("texture created", this.name, this.width + "x" + this.height);

    if (!this.compareSettings(newTex))
    {
        this._log.error("Cloned texture settings do not compare!");
        this._log.error(this);
        this._log.error(newTex);
    }

    return newTex;
};


Texture.prototype.setFormat = function (o)
{
    this.pixelFormat = o.pixelFormat;
    this._glDataFormat = o.glDataFormat;
    this._glInternalFormat = o.glInternalFormat;
    this._glDataType = o.glDataType;
};


Texture.setUpGlPixelFormat = function (cgl, pixelFormatStr)
{
    const o = {};

    if (!pixelFormatStr)
    {
        cgl._log.error("no pixelformatstr!");
        cgl._log.log(new Error());
        pixelFormatStr = Texture.PFORMATSTR_RGBA8UB;
    }

    o.pixelFormatBase = pixelFormatStr;
    o.pixelFormat = pixelFormatStr;
    o.glDataType = cgl.gl.UNSIGNED_BYTE;
    o.glInternalFormat = cgl.gl.RGBA8;
    o.glDataFormat = cgl.gl.RGBA;

    let floatDatatype = cgl.gl.FLOAT;

    if (cgl.glUseHalfFloatTex)
    {
        if (pixelFormatStr == Texture.PFORMATSTR_RGBA32F) pixelFormatStr = Texture.PFORMATSTR_RGBA16F;
        if (pixelFormatStr == Texture.PFORMATSTR_RG32F) pixelFormatStr = Texture.PFORMATSTR_RG16F;
        if (pixelFormatStr == Texture.PFORMATSTR_R32F) pixelFormatStr = Texture.PFORMATSTR_R16F;
    }

    if (pixelFormatStr.contains("16bit"))
    {
        if (cgl.glVersion == 2)
        {
            // cgl.enableExtension("OES_texture_half_float");
            const hasExt = cgl.enableExtension("EXT_color_buffer_half_float");

            if (!hasExt)
            {
                console.warn("no 16bit extension, fallback to 32bit", pixelFormatStr);
                // fallback to 32 bit?
                if (pixelFormatStr == Texture.PFORMATSTR_RGBA16F) pixelFormatStr = Texture.PFORMATSTR_RGBA32F;
                if (pixelFormatStr == Texture.PFORMATSTR_RGB16F) pixelFormatStr = Texture.PFORMATSTR_RGB32F;
                if (pixelFormatStr == Texture.PFORMATSTR_RG16F) pixelFormatStr = Texture.PFORMATSTR_RG32F;
                if (pixelFormatStr == Texture.PFORMATSTR_R16F) pixelFormatStr = Texture.PFORMATSTR_R32F;
            }
            else
            {
                floatDatatype = cgl.gl.HALF_FLOAT;
            }
        }
    }

    if (cgl.glVersion == 1)
    {
        o.glInternalFormat = cgl.gl.RGBA;

        if (pixelFormatStr == Texture.PFORMATSTR_RGBA16F || pixelFormatStr == Texture.PFORMATSTR_RG16F || pixelFormatStr == Texture.PFORMATSTR_R16F)
        {
            const ext = cgl.enableExtension("OES_texture_half_float");
            if (!ext) throw new Error("no half float texture extension");

            floatDatatype = ext.HALF_FLOAT_OES;
        }
    }


    if (pixelFormatStr == Texture.PFORMATSTR_RGBA8UB)
    {
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RGB565)
    {
        o.glInternalFormat = cgl.gl.RGB565;
        o.glDataFormat = cgl.gl.RGB;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_R8UB)
    {
        o.glInternalFormat = cgl.gl.R8;
        o.glDataFormat = cgl.gl.RED;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RG8UB)
    {
        o.glInternalFormat = cgl.gl.RG8;
        o.glDataFormat = cgl.gl.RG;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RGB8UB)
    {
        o.glInternalFormat = cgl.gl.RGB8;
        o.glDataFormat = cgl.gl.RGB;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_SRGBA8)
    {
        o.glInternalFormat = cgl.gl.SRGB8_ALPHA8;
    }

    else if (pixelFormatStr == Texture.PFORMATSTR_R32F)
    {
        o.glInternalFormat = cgl.gl.R32F;
        o.glDataFormat = cgl.gl.RED;
        o.glDataType = floatDatatype;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_R16F)
    {
        o.glInternalFormat = cgl.gl.R16F;
        o.glDataType = floatDatatype;
        o.glDataFormat = cgl.gl.RED;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RG16F)
    {
        o.glInternalFormat = cgl.gl.RG16F;
        o.glDataType = floatDatatype;
        o.glDataFormat = cgl.gl.RG;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RGBA16F)
    {
        if (cgl.glVersion == 1) o.glInternalFormat = cgl.gl.RGBA;
        else o.glInternalFormat = cgl.gl.RGBA16F;
        o.glDataType = floatDatatype;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_R11FG11FB10F)
    {
        o.glInternalFormat = cgl.gl.R11F_G11F_B10F;
        o.glDataType = floatDatatype;
        o.glDataFormat = cgl.gl.RGB;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RGBA32F)
    {
        if (cgl.glVersion == 1) o.glInternalFormat = cgl.gl.RGBA;
        else o.glInternalFormat = cgl.gl.RGBA32F;
        o.glDataType = floatDatatype;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_DEPTH)
    {
        if (cgl.glVersion == 1)
        {
            o.glInternalFormat = cgl.gl.DEPTH_COMPONENT;
            o.glDataType = cgl.gl.UNSIGNED_SHORT;
            o.glDataFormat = cgl.gl.DEPTH_COMPONENT;
        }
        else
        {
            o.glInternalFormat = cgl.gl.DEPTH_COMPONENT32F;
            o.glDataType = cgl.gl.FLOAT;
            o.glDataFormat = cgl.gl.DEPTH_COMPONENT;
        }
    }
    else
    {
        console.log("unknown pixelformat ", pixelFormatStr);
    }

    /// //////

    if (pixelFormatStr.contains("32bit") || pixelFormatStr == Texture.PFORMATSTR_R11FG11FB10F)
    {
        if (cgl.glVersion == 2) cgl.enableExtension("EXT_color_buffer_float");
        if (cgl.glVersion == 2) cgl.enableExtension("EXT_float_blend");

        cgl.enableExtension("OES_texture_float_linear"); // yes, i am sure, this is a webgl 1 and 2 ext
    }


    o.numColorChannels = 1;
    if (pixelFormatStr.startsWith("R"))o.numColorChannels = 1;
    if (pixelFormatStr.startsWith("RG"))o.numColorChannels = 2;
    if (pixelFormatStr.startsWith("RGB"))o.numColorChannels = 3;
    if (pixelFormatStr.startsWith("RGBA"))o.numColorChannels = 4;


    // console.log(pixelFormatStr, this.name);

    if (!o.glDataType || !o.glInternalFormat || !o.glDataFormat) console.log("pixelformat wrong ?!", pixelFormatStr, o.glDataType, o.glInternalFormat, o.glDataFormat, this);

    return o;
};

/**
 * set pixel size of texture
 * @function setSize
 * @memberof Texture
 * @instance
 * @param {Number} w width
 * @param {Number} h height
 */
Texture.prototype.setSize = function (w, h)
{
    if (this._cgl.aborted) return;
    if (w != w || w <= 0 || !w) w = DEFAULT_TEXTURE_SIZE;
    if (h != h || h <= 0 || !h) h = DEFAULT_TEXTURE_SIZE;

    if (w > this._cgl.maxTexSize || h > this._cgl.maxTexSize) this._log.error("texture size too big! " + w + "x" + h + " / max: " + this._cgl.maxTexSize);

    w = Math.min(w, this._cgl.maxTexSize);
    h = Math.min(h, this._cgl.maxTexSize);

    w = Math.floor(w);
    h = Math.floor(h);
    if (this.width == w && this.height == h) return;

    w = this._cgl.checkTextureSize(w);
    h = this._cgl.checkTextureSize(h);

    this.width = w;
    this.height = h;
    this.deleted = false;

    this.setFormat(Texture.setUpGlPixelFormat(this._cgl, this.pixelFormat));

    this.shortInfoString = this.getInfoOneLine();// w + "x" + h + "";

    this._cgl.gl.bindTexture(this.texTarget, this.tex);
    this._cgl.profileData.profileTextureResize++;

    const uarr = null;

    this._cgl.gl.texImage2D(this.texTarget, 0, this._glInternalFormat, w, h, 0, this._glDataFormat, this._glDataType, uarr);

    this._setFilter();

    this.updateMipMap();

    this._cgl.gl.bindTexture(this.texTarget, null);
};


/**
 * @function initFromData
 * @memberof Texture
 * @instance
 * @description create texturem from rgb data
 * @param {Array<Number>} data rgb color array [r,g,b,a,r,g,b,a,...]
 * @param {Number} w width
 * @param {Number} h height
 * @param {Number} filter
 * @param {Number} wrap
 */
Texture.prototype.initFromData = function (data, w, h, filter, wrap)
{
    this.filter = filter;
    this.wrap = wrap;
    if (filter == undefined) this.filter = Texture.FILTER_LINEAR;
    if (wrap == undefined) this.wrap = Texture.WRAP_CLAMP_TO_EDGE;
    this.width = w;
    this.height = h;
    this._fromData = true;
    this.deleted = false;

    if (this.height > this._cgl.maxTexSize || this.width > this._cgl.maxTexSize)
    {
        const t = CGL.Texture.getTempTexture(this._cgl);
        this.width = t.width;
        this.height = t.height;
        this.tex = t.tex;
        this._log.error("[cgl_texture] texture size to big!!!", this.width, this.height, this._cgl.maxTexSize);
        return;
    }

    if (this.flip) this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, this.flip);

    this._cgl.gl.bindTexture(this.texTarget, this.tex);

    this.setFormat(Texture.setUpGlPixelFormat(this._cgl, this.pixelFormat));

    this._cgl.gl.texImage2D(this.texTarget, 0, this._glInternalFormat, w, h, 0, this._glDataFormat, this._glDataType, data);

    this._setFilter();
    this.updateMipMap();

    if (this.flip) this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, false);
    this._cgl.gl.bindTexture(this.texTarget, null);
};

Texture.prototype.updateMipMap = function ()
{
    if ((this._cgl.glVersion == 2 || this.isPowerOfTwo()) && this.filter == Texture.FILTER_MIPMAP)
    {
        this._cgl.gl.generateMipmap(this.texTarget);
        this._cgl.profileData.profileGenMipMap++;
    }
};

/**
 * set texture data from an image/canvas object
 * @function initTexture
 * @memberof Texture
 * @instance
 * @param {Object} img image
 * @param {Number} filter
 */
Texture.prototype.initTexture = function (img, filter)
{
    this._cgl.printError("before initTexture");
    this._cgl.checkFrameStarted("texture inittexture");
    this._fromData = false;

    this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.unpackAlpha);
    if (img.width || img.videoWidth) this.width = img.videoWidth || img.width;
    if (img.height || img.videoHeight) this.height = img.videoHeight || img.height;

    if (filter !== undefined) this.filter = filter; // todo: can we remove this filter param?

    if (img.height > this._cgl.maxTexSize || img.width > this._cgl.maxTexSize)
    {
        const t = CGL.Texture.getTempTexture(this._cgl);
        this.width = t.width;
        this.height = t.height;
        this.tex = t.tex;
        this._log.error("[cgl_texture] texture size to big!!!", img.width, img.height, this._cgl.maxTexSize);
        return;
    }


    // console.log("loaded texture", img.width, img.height);

    this._cgl.gl.bindTexture(this.texTarget, this.tex);

    this.deleted = false;
    this.flipped = !this.flip;
    if (this.flipped) this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, this.flipped);


    this.setFormat(Texture.setUpGlPixelFormat(this._cgl, this.pixelFormat));

    this._cgl.gl.texImage2D(this.texTarget, 0, this._glInternalFormat, this._glDataFormat, this._glDataType, img);
    // this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, this._cgl.gl.RGBA, this._cgl.gl.UNSIGNED_BYTE, img);

    // if (this._cgl.printError("[cgl_texture] init " + this.name));

    this._setFilter();
    this.updateMipMap();

    // if (this._cgl.printError("[cgl_texture] init2"));

    this._cgl.gl.bindTexture(this.texTarget, null);
    this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
    if (this.flipped) this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, false);

    this.getInfoOneLine();
    this._cgl.printError("initTexture");
};

/**
 * delete texture. use this when texture is no longer needed
 * @function delete
 * @memberof Texture
 * @instance
 */
Texture.prototype.dispose =
Texture.prototype.delete = function ()
{
    if (this.loading)
    {
        // cant delete texture when still loading
        // setTimeout(this.delete.bind(this), 50);
        return;
    }

    this.deleted = true;
    this.width = 0;
    this.height = 0;
    this._cgl.profileData.profileTextureDelete++;
    this._cgl.gl.deleteTexture(this.tex);
    this.image = null;

    this.tex = null;
};

/**
 * @function isPowerOfTwo
 * @memberof Texture
 * @instance
 * @description return true if texture width and height are both power of two
 * @return {Boolean}
 */
Texture.prototype.isPowerOfTwo = function ()
{
    return Texture.isPowerOfTwo(this.width) && Texture.isPowerOfTwo(this.height);
};

Texture.prototype.printInfo = function ()
{
    console.log(this.getInfo());
};

Texture.prototype.getInfoReadable = function ()
{
    const info = this.getInfo();
    let html = "";

    info.name = info.name.substr(0, info.name.indexOf("?rnd="));

    for (const i in info)
    {
        html += "* " + i + ":  **" + info[i] + "**\n";
    }

    return html;
};

Texture.prototype.getInfoOneLine = function ()
{
    let txt = "" + this.width + "x" + this.height;
    txt += " ";
    // if (this.textureType === CGL.Texture.TYPE_FLOAT) txt += " 32bit"; else txt += " 8bit";
    // if (this.textureType === CGL.Texture.TYPE_FLOAT) txt += " 32bit"; else txt += " 8bit";
    txt += this.pixelFormat;

    if (this.filter === CGL.Texture.FILTER_NEAREST) txt += " nearest";
    if (this.filter === CGL.Texture.FILTER_LINEAR) txt += " linear";
    if (this.filter === CGL.Texture.FILTER_MIPMAP) txt += " mipmap";

    if (this.wrap === CGL.Texture.WRAP_CLAMP_TO_EDGE) txt += " clamp";
    if (this.wrap === CGL.Texture.WRAP_REPEAT) txt += " repeat";
    if (this.wrap === CGL.Texture.WRAP_MIRRORED_REPEAT) txt += " repeatmir";

    this.shortInfoString = txt;

    return txt;
};

Texture.prototype.getInfoOneLineShort = function ()
{
    let txt = "" + this.width + "x" + this.height;
    // if (this.textureType === CGL.Texture.TYPE_FLOAT) txt += " 32bit"; else txt += " 8bit";
    txt += " ";
    txt += this.pixelFormat;

    this.shortInfoString = txt;

    return txt;
};


Texture.prototype.getInfo = function ()
{
    return Texture.getTexInfo(this);
};


Texture.prototype._setFilter = function ()
{
    this._cgl.printError("before _setFilter");

    if (!this._fromData)
    {
        this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.unpackAlpha);
    }

    if (this.shadowMap)
    {
        this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D, this._cgl.gl.TEXTURE_COMPARE_MODE, this._cgl.gl.COMPARE_REF_TO_TEXTURE);
        this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D, this._cgl.gl.TEXTURE_COMPARE_FUNC, this._cgl.gl.LEQUAL);
    }

    if (this.textureType == Texture.TYPE_FLOAT && this.filter == Texture.FILTER_MIPMAP)
    {
        this.filter = Texture.FILTER_LINEAR;
        this._log.stack("texture: HDR and mipmap filtering at the same time is not possible");
    }

    if (this._cgl.glVersion == 1 && !this.isPowerOfTwo())
    {
        this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.NEAREST);
        this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.NEAREST);

        this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.CLAMP_TO_EDGE);
        this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.CLAMP_TO_EDGE);

        this.filter = Texture.FILTER_NEAREST;
        this.wrap = Texture.WRAP_CLAMP_TO_EDGE;
    }
    else
    {
        if (this.wrap == Texture.WRAP_CLAMP_TO_EDGE)
        {
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.CLAMP_TO_EDGE);
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.CLAMP_TO_EDGE);
        }
        else if (this.wrap == Texture.WRAP_REPEAT)
        {
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.REPEAT);
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.REPEAT);
        }
        else if (this.wrap == Texture.WRAP_MIRRORED_REPEAT)
        {
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.MIRRORED_REPEAT);
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.MIRRORED_REPEAT);
        }

        if (this.filter == Texture.FILTER_NEAREST)
        {
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.NEAREST);
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.NEAREST);
        }
        else if (this.filter == Texture.FILTER_LINEAR)
        {
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.LINEAR);
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.LINEAR);
        }
        else if (this.filter == Texture.FILTER_MIPMAP)
        {
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.LINEAR);
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.LINEAR_MIPMAP_LINEAR);
        }
        else
        {
            this._log.log("unknown texture filter!", this.filter);
            throw new Error("unknown texture filter!" + this.filter);
        }

        if (this.anisotropic)
        {
            const ext = this._cgl.enableExtension("EXT_texture_filter_anisotropic");



            if (this._cgl.maxAnisotropic)
            {
                const aniso = Math.min(this._cgl.maxAnisotropic, this.anisotropic);
                this._cgl.gl.texParameterf(this._cgl.gl.TEXTURE_2D, ext.TEXTURE_MAX_ANISOTROPY_EXT, aniso);
            }
        }
    }
    this.getInfoOneLine();
    this._cgl.printError("_setFilter");
};


/**
 * @function load
 * @static
 * @memberof Texture
 * @description load an image from an url
 * @param {Context} cgl
 * @param {String} url
 * @param {Function} finishedCallback
 * @param {Object} settings
 * @return {Texture}
 */
Texture.load = function (cgl, url, finishedCallback, settings)
{
    if (!url) return finishedCallback({ "error": true });
    let loadingId = null;
    if (!cgl.patch.loading.existByName(url)) loadingId = cgl.patch.loading.start("cgl.texture", url);

    const texture = new Texture(cgl);
    texture.name = url;

    // texture.pixelFormat = Texture.PFORMATSTR_;

    // if (cgl.patch.isEditorMode()) gui.jobs().start({ "id": "loadtexture" + loadingId, "title": "loading texture " + CABLES.basename(url) });

    texture.image = new Image();
    texture.image.crossOrigin = "anonymous";
    texture.loading = true;

    if (settings && settings.hasOwnProperty("filter")) texture.filter = settings.filter;
    if (settings && settings.hasOwnProperty("flip")) texture.flip = settings.flip;
    if (settings && settings.hasOwnProperty("wrap")) texture.wrap = settings.wrap;
    if (settings && settings.hasOwnProperty("anisotropic")) texture.anisotropic = settings.anisotropic;
    if (settings && settings.hasOwnProperty("unpackAlpha")) texture.unpackAlpha = settings.unpackAlpha;
    if (settings && settings.hasOwnProperty("pixelFormat")) texture.pixelFormat = settings.pixelFormat;

    texture.image.onabort = texture.image.onerror = (e) =>
    {
        console.warn("[cgl.texture.load] error loading texture", url, e);
        texture.loading = false;
        if (loadingId) cgl.patch.loading.finished(loadingId);
        const error = { "error": true };
        if (finishedCallback) finishedCallback(error, texture);
        // if (cgl.patch.isEditorMode()) gui.jobs().finish("loadtexture" + loadingId);
    };

    texture.image.onload = function (e)
    {
        cgl.addNextFrameOnceCallback(() =>
        {
            texture.initTexture(texture.image);
            if (loadingId) cgl.patch.loading.finished(loadingId);
            texture.loading = false;
            // if (cgl.patch.isEditorMode()) gui.jobs().finish("loadtexture" + loadingId);

            if (finishedCallback) finishedCallback(null, texture);
        });
    };
    texture.image.src = url;

    return texture;
};

/**
 * @static
 * @function getTempTexture
 * @memberof Texture
 * @description returns the default temporary texture (grey diagonal stipes)
 * @param {Context} cgl
 * @return {Texture}
 */
Texture.getTempTexture = function (cgl)
{
    if (!cgl) console.error("[getTempTexture] no cgl!");
    if (!cgl.tempTexture) cgl.tempTexture = Texture.getTemporaryTexture(cgl, 256, Texture.FILTER_LINEAR, Texture.REPEAT);
    return cgl.tempTexture;
};

/**
 * @static
 * @function getErrorTexture
 * @memberof Texture
 * @description returns the default temporary texture (grey diagonal stipes)
 * @param {Context} cgl
 * @return {Texture}
 */
Texture.getErrorTexture = function (cgl)
{
    if (!cgl) console.error("[getTempTexture] no cgl!");
    if (!cgl.errorTexture) cgl.errorTexture = Texture.getTemporaryTexture(cgl, 256, Texture.FILTER_LINEAR, Texture.REPEAT, 1, 0.2, 0.2);
    return cgl.errorTexture;
};


/**
 * @function getEmptyTexture
 * @memberof Texture
 * @instance
 * @param cgl
 * @param fp
 * @description returns a reference to a small empty (transparent) texture
 * @return {Texture}
 */
Texture.getEmptyTexture = function (cgl, fp)
{
    if (fp) return Texture.getEmptyTextureFloat(cgl);
    if (!cgl) console.error("[getEmptyTexture] no cgl!");
    if (cgl.tempTextureEmpty) return cgl.tempTextureEmpty;

    cgl.tempTextureEmpty = new Texture(cgl, { "name": "emptyTexture" });
    const data = new Uint8Array(8 * 8 * 4).fill(0);
    for (let i = 0; i < 8 * 8 * 4; i += 4) data[i + 3] = 0;

    cgl.tempTextureEmpty.initFromData(data, 8, 8, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);

    return cgl.tempTextureEmpty;
};

/**
 * @function getEmptyTextureFloat
 * @memberof Texture
 * @instance
 * @param cgl
 * @description returns a reference to a small empty (transparent) 32bit texture
 * @return {Texture}
 */
Texture.getEmptyTextureFloat = function (cgl)
{
    if (!cgl) console.error("[getEmptyTextureFloat] no cgl!");
    if (cgl.tempTextureEmptyFloat) return cgl.tempTextureEmptyFloat;

    cgl.tempTextureEmptyFloat = new Texture(cgl, { "name": "emptyTexture", "isFloatingPointTexture": true });
    const data = new Float32Array(8 * 8 * 4).fill(1);
    for (let i = 0; i < 8 * 8 * 4; i += 4) data[i + 3] = 0;

    cgl.tempTextureEmptyFloat.initFromData(data, 8, 8, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);

    return cgl.tempTextureEmptyFloat;
};


/**
 * @function getRandomTexture
 * @memberof Texture
 * @static
 * @param cgl
 * @description returns a reference to a random texture
 * @return {Texture}
 */
Texture.getRandomTexture = function (cgl)
{
    if (!cgl) console.error("[getRandomTexture] no cgl!");
    if (cgl.randomTexture) return cgl.randomTexture;

    const size = 256;
    const data = new Uint8Array(size * size * 4);

    for (let x = 0; x < size * size; x++)
    {
        data[x * 4 + 0] = Math.random() * 255;
        data[x * 4 + 1] = Math.random() * 255;
        data[x * 4 + 2] = Math.random() * 255;
        data[x * 4 + 3] = 255;
    }

    cgl.randomTexture = new Texture(cgl);
    cgl.randomTexture.initFromData(data, size, size, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);

    return cgl.randomTexture;
};

/**
 * @function getRandomFloatTexture
 * @memberof Texture
 * @static
 * @param cgl
 * @description returns a reference to a texture containing random numbers between -1 and 1
 * @return {Texture}
 */
Texture.getRandomFloatTexture = function (cgl)
{
    if (!cgl) console.error("[getRandomTexture] no cgl!");
    if (cgl.getRandomFloatTexture) return cgl.getRandomFloatTexture;

    const size = 256;
    const data = new Float32Array(size * size * 4);

    for (let x = 0; x < size * size; x++)
    {
        data[x * 4 + 0] = (Math.random() - 0.5) * 2.0;
        data[x * 4 + 1] = (Math.random() - 0.5) * 2.0;
        data[x * 4 + 2] = (Math.random() - 0.5) * 2.0;
        data[x * 4 + 3] = 1;
    }

    cgl.getRandomFloatTexture = new Texture(cgl, { "isFloatingPointTexture": true });
    cgl.getRandomFloatTexture.initFromData(data, size, size, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);

    return cgl.getRandomFloatTexture;
};

/**
 * @function getBlackTexture
 * @memberof Texture
 * @static
 * @param cgl
 * @description returns a reference to a black texture
 * @return {Texture}
 */
Texture.getBlackTexture = function (cgl)
{
    if (!cgl) this._log.error("[getBlackTexture] no cgl!");
    if (cgl.blackTexture) return cgl.blackTexture;

    const size = 8;
    const data = new Uint8Array(size * size * 4);

    for (let x = 0; x < size * size; x++)
    {
        data[x * 4 + 0] = data[x * 4 + 1] = data[x * 4 + 2] = 0;
        data[x * 4 + 3] = 255;
    }

    cgl.blackTexture = new Texture(cgl);
    cgl.blackTexture.initFromData(data, size, size, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);

    return cgl.blackTexture;
};


/**
 * @function getEmptyCubemapTexture
 * @memberof Texture
 * @static
 * @param cgl
 * @description returns an empty cubemap texture with rgba = [0, 0, 0, 0]
 * @return {Texture}
 */
Texture.getEmptyCubemapTexture = function (cgl)
{
    const faces = [
        cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_X,
        cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
        cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
        cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
        cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
        cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Z
    ];

    const tex = cgl.gl.createTexture();
    const target = cgl.gl.TEXTURE_CUBE_MAP;
    const filter = Texture.FILTER_NEAREST;
    const wrap = Texture.WRAP_CLAMP_TO_EDGE;
    const width = 8;
    const height = 8;

    cgl.profileData.profileTextureNew++;


    cgl.gl.bindTexture(target, tex);
    cgl.profileData.profileTextureResize++;

    for (let i = 0; i < 6; i += 1)
    {
        const data = new Uint8Array(8 * 8 * 4);

        cgl.gl.texImage2D(faces[i], 0, cgl.gl.RGBA, 8, 8, 0, cgl.gl.RGBA, cgl.gl.UNSIGNED_BYTE, data);
        cgl.gl.texParameteri(target, cgl.gl.TEXTURE_MAG_FILTER, cgl.gl.NEAREST);
        cgl.gl.texParameteri(target, cgl.gl.TEXTURE_MIN_FILTER, cgl.gl.NEAREST);

        cgl.gl.texParameteri(target, cgl.gl.TEXTURE_WRAP_S, cgl.gl.CLAMP_TO_EDGE);
        cgl.gl.texParameteri(target, cgl.gl.TEXTURE_WRAP_T, cgl.gl.CLAMP_TO_EDGE);
    }


    cgl.gl.bindTexture(target, null);

    return {
        "id": CABLES.uuid(),
        "tex": tex,
        "cubemap": tex,
        "width": width,
        "height": height,
        "filter": filter,
        "wrap": wrap,
        "unpackAlpha": true,
        "flip": true,
        "_fromData": true,
        "name": "emptyCubemapTexture",
        "anisotropic": 0,
    };
};

/**
 * @static
 * @function getTempGradientTexture
 * @memberof Texture
 * @description returns a gradient texture from black to white
 * @param {Context} cgl
 * @return {Texture}
 */
Texture.getTempGradientTexture = function (cgl)
{
    if (!cgl) console.error("[getTempGradientTexture] no cgl!");

    if (cgl.tempTextureGradient) return cgl.tempTextureGradient;
    const temptex = new Texture(cgl);
    const size = 256;
    const data = new Uint8Array(size * size * 4); // .fill(0);

    for (let y = 0; y < size; y++)
    {
        for (let x = 0; x < size; x++)
        {
            data[(x + y * size) * 4 + 0] = data[(x + y * size) * 4 + 1] = data[(x + y * size) * 4 + 2] = 255 - y;
            data[(x + y * size) * 4 + 3] = 255;
        }
    }

    temptex.initFromData(data, size, size, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);
    cgl.tempTextureGradient = temptex;
    return temptex;
};

Texture.getTemporaryTexture = function (cgl, size, filter, wrap, r, g, b)
{
    if (r === undefined)r = 1;
    if (g === undefined)g = 1;
    if (b === undefined)b = 1;
    const temptex = new Texture(cgl);
    const arr = [];
    for (let y = 0; y < size; y++)
    {
        for (let x = 0; x < size; x++)
        {
            if ((x + y) % 64 < 32)
            {
                arr.push((200 + (y / size) * 25 + (x / size) * 25) * r);
                arr.push((200 + (y / size) * 25 + (x / size) * 25) * g);
                arr.push((200 + (y / size) * 25 + (x / size) * 25) * b);
            }
            else
            {
                arr.push((40 + (y / size) * 25 + (x / size) * 25) * r);
                arr.push((40 + (y / size) * 25 + (x / size) * 25) * g);
                arr.push((40 + (y / size) * 25 + (x / size) * 25) * b);
            }
            arr.push(255);
        }
    }

    const data = new Uint8Array(arr);
    temptex.initFromData(data, size, size, filter, wrap);

    return temptex;
};

/**
 * @static
 * @function createFromImage
 * @memberof Texture
 * @description create texturem from image data (e.g. image or canvas)
 * @param {Context} cgl
 * @param {Object} img image
 * @param {Object} options
 */
Texture.createFromImage = function (cgl, img, options)
{
    options = options || {};
    const texture = new Texture(cgl, options);
    texture.flip = false;
    texture.image = img;
    texture.width = img.videoWidth || img.width || 8;
    texture.height = img.videoHeight || img.height || 8;
    if (options.hasOwnProperty("wrap"))texture.wrap = options.wrap;

    texture.initTexture(img, options.filter);

    return texture;
};

// deprecated!
Texture.fromImage = function (cgl, img, filter, wrap)
{
    console.error("deprecated texture from image...");

    const texture = new Texture(cgl);
    texture.flip = false;
    if (filter) texture.filter = filter;
    if (wrap) texture.wrap = wrap;
    texture.image = img;
    texture.initTexture(img);
    return texture;
};

/**
 * @static
 * @function isPowerOfTwo
 * @memberof Texture
 * @description returns true if x is power of two
 * @param {Number} x
 * @return {Boolean}
 */
Texture.isPowerOfTwo = function (x)
{
    return x == 1 || x == 2 || x == 4 || x == 8 || x == 16 || x == 32 || x == 64 || x == 128 || x == 256 || x == 512 || x == 1024 || x == 2048 || x == 4096 || x == 8192 || x == 16384;
};

Texture.getTexInfo = function (tex)
{
    const obj = {};

    obj.name = tex.name;
    obj["power of two"] = tex.isPowerOfTwo();
    obj.size = tex.width + " x " + tex.height;

    let targetString = tex.texTarget;
    if (tex.texTarget == tex._cgl.gl.TEXTURE_2D) targetString = "TEXTURE_2D";
    obj.target = targetString;

    obj.unpackAlpha = tex.unpackAlpha;

    if (tex.cubemap)obj.cubemap = true;

    if (tex.textureType == Texture.TYPE_FLOAT) obj.textureType = "TYPE_FLOAT";
    if (tex.textureType == Texture.TYPE_HALF_FLOAT) obj.textureType = "TYPE_HALF_FLOAT";
    else if (tex.textureType == Texture.TYPE_DEPTH) obj.textureType = "TYPE_DEPTH";
    else if (tex.textureType == Texture.TYPE_DEFAULT) obj.textureType = "TYPE_DEFAULT";
    else obj.textureType = "UNKNOWN " + this.textureType;

    if (tex.wrap == Texture.WRAP_CLAMP_TO_EDGE) obj.wrap = "CLAMP_TO_EDGE";
    else if (tex.wrap == Texture.WRAP_REPEAT) obj.wrap = "WRAP_REPEAT";
    else if (tex.wrap == Texture.WRAP_MIRRORED_REPEAT) obj.wrap = "WRAP_MIRRORED_REPEAT";
    else obj.wrap = "UNKNOWN";

    if (tex.filter == Texture.FILTER_NEAREST) obj.filter = "FILTER_NEAREST";
    else if (tex.filter == Texture.FILTER_LINEAR) obj.filter = "FILTER_LINEAR";
    else if (tex.filter == Texture.FILTER_MIPMAP) obj.filter = "FILTER_MIPMAP";
    else obj.filter = "UNKNOWN";

    obj.pixelFormat = tex.pixelFormat || "unknown";

    return obj;
};


Texture.FILTER_NEAREST = 0;
Texture.FILTER_LINEAR = 1;
Texture.FILTER_MIPMAP = 2;

Texture.WRAP_REPEAT = 0;
Texture.WRAP_MIRRORED_REPEAT = 1;
Texture.WRAP_CLAMP_TO_EDGE = 2;

Texture.TYPE_DEFAULT = 0;
Texture.TYPE_DEPTH = 1;
Texture.TYPE_FLOAT = 2;


Texture.PFORMATSTR_RGB565 = "RGB 5/6/5bit ubyte";

Texture.PFORMATSTR_R8UB = "R 8bit ubyte";
Texture.PFORMATSTR_RG8UB = "RG 8bit ubyte";
Texture.PFORMATSTR_RGB8UB = "RGB 8bit ubyte";
Texture.PFORMATSTR_RGBA8UB = "RGBA 8bit ubyte";

Texture.PFORMATSTR_SRGBA8 = "SRGBA 8bit ubyte";

Texture.PFORMATSTR_R11FG11FB10F = "RGB 11/11/10bit float";

Texture.PFORMATSTR_R16F = "R 16bit float";
Texture.PFORMATSTR_RG16F = "RG 16bit float";
Texture.PFORMATSTR_RGB16F = "RGB 16bit float";
Texture.PFORMATSTR_RGBA16F = "RGBA 16bit float";


Texture.PFORMATSTR_R32F = "R 32bit float";
Texture.PFORMATSTR_RG32F = "RG 32bit float";
Texture.PFORMATSTR_RGB32F = "RGB 32bit float";
Texture.PFORMATSTR_RGBA32F = "RGBA 32bit float";

Texture.PFORMATSTR_DEPTH = "DEPTH";


Texture.PIXELFORMATS = [

    Texture.PFORMATSTR_RGB565,

    Texture.PFORMATSTR_R8UB,
    Texture.PFORMATSTR_RG8UB,
    Texture.PFORMATSTR_RGB8UB,
    Texture.PFORMATSTR_RGBA8UB,

    Texture.PFORMATSTR_SRGBA8,

    Texture.PFORMATSTR_R11FG11FB10F,
    Texture.PFORMATSTR_R16F,
    Texture.PFORMATSTR_RG16F,
    Texture.PFORMATSTR_RGBA16F,

    Texture.PFORMATSTR_R32F,
    Texture.PFORMATSTR_RGBA32F

];

Texture.isPixelFormatFloat =
    (pxlfrmt) =>
    {
        return (pxlfrmt || "").contains("float");
    };

Texture.isPixelFormatHalfFloat =
    (pxlfrmt) =>
    {
        return (pxlfrmt || "").contains("float") && (pxlfrmt || "").contains("16bit");
    };






;// CONCATENATED MODULE: ./src/core/cg/cg_boundingbox.js


/**
 * bounding box
 *
 * @namespace external:CGL
 * @param {Geometry} geometry or bounding box
 */
class BoundingBox
{
    constructor(geom)
    {
        this._init();
        this._first = true;
        this._wireMesh = null;

        if (geom) this.apply(geom);
    }

    _init()
    {
        this._max = [-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE];
        this._min = [Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE];
        this._center = [0, 0, 0];
        this._size = [0, 0, 0];
        this._maxAxis = 0.0;
        this._first = true;
    }

    /**
     * get biggest number of maxX,maxY,maxZ
     * @type {Number}
     */
    get maxAxis() { return this._maxAxis || 1; }

    /**
     * size of bounding box
     * @type {vec3}
     */
    get size() { return this._size; }

    /**
     * center of bounding box
     * @type {vec3}
     */
    get center() { return this._center; }

    /**
     * center x
     * @type {Number}
     */
    get x() { return this._center[0]; }

    /**
     * center y
     * @type {Number}
     */
    get y() { return this._center[1]; }

    /**
     * center z
     * @type {Number}
     */
    get z() { return this._center[2]; }


    /**
     * minimum x
     * @type {Number}
     */
    get minX() { return this._min[0]; }

    /**
     * minimum y
     * @type {Number}
     */
    get minY() { return this._min[1]; }

    /**
     * minimum z
     * @type {Number}
     */
    get minZ() { return this._min[2]; }

    /**
     * maximum x
     * @type {Number}
     */
    get maxX() { return this._max[0]; }

    /**
     * maximum y
     * @type {Number}
     */
    get maxY() { return this._max[1]; }

    /**
     * maximum z
     * @type {Number}
     */
    get maxZ() { return this._max[2]; }


    apply(geom, mat)
    {
        if (!geom)
        {
            // console.warn("[boundingbox] no geom/vertices", geom);
            return;
        }

        if (geom instanceof BoundingBox)
        {
            const bb = geom;

            this.applyPos(bb.maxX, bb.maxY, bb.maxZ);
            this.applyPos(bb.minX, bb.minY, bb.minZ);
        }
        else
        {
            for (let i = 0; i < geom.vertices.length; i += 3)
                // if (geom.vertices[i] == geom.vertices[i] || geom.vertices[i] != null)
                // {
            // if(mat)
            // {
                this.applyPos(geom.vertices[i], geom.vertices[i + 1], geom.vertices[i + 2]);
            // }
            // else
            // {
            //     this.applyPos(geom.vertices[i + 0],geom.vertices[i + 1],geom.vertices[i + 2]);
            // }
                // }
        }
        this.calcCenterSize();
    }

    /**
     * returns a copy of the bounding box
     * @function copy
     * @memberof BoundingBox
     * @instance
     */
    copy()
    {
        return new BoundingBox(this);
    }

    get changed()
    {
        return !(this._max[0] == -Number.MAX_VALUE && this._max[1] == -Number.MAX_VALUE && this._max[2] == -Number.MAX_VALUE);
    }

    applyPos(x, y, z)
    {
        if (x == Number.MAX_VALUE || x == -Number.MAX_VALUE ||
            y == Number.MAX_VALUE || y == -Number.MAX_VALUE ||
            z == Number.MAX_VALUE || z == -Number.MAX_VALUE) return;

        if (!CABLES.UTILS.isNumeric(x) || !CABLES.UTILS.isNumeric(y) || !CABLES.UTILS.isNumeric(z)) return;

        if (this._first)
        {
            this._max[0] = x;
            this._max[1] = y;
            this._max[2] = z;

            this._min[0] = x;
            this._min[1] = y;
            this._min[2] = z;
            this._first = false;
            return;
        }

        this._max[0] = Math.max(this._max[0], x);
        this._max[1] = Math.max(this._max[1], y);
        this._max[2] = Math.max(this._max[2], z);

        this._min[0] = Math.min(this._min[0], x);
        this._min[1] = Math.min(this._min[1], y);
        this._min[2] = Math.min(this._min[2], z);
    }

    calcCenterSize()
    {
        if (this._first) return;
        // this._size[0]=Math.abs(this._min[0])+Math.abs(this._max[0]);
        // this._size[1]=Math.abs(this._min[1])+Math.abs(this._max[1]);
        // this._size[2]=Math.abs(this._min[2])+Math.abs(this._max[2]);
        this._size[0] = this._max[0] - this._min[0];
        this._size[1] = this._max[1] - this._min[1];
        this._size[2] = this._max[2] - this._min[2];

        this._center[0] = (this._min[0] + this._max[0]) / 2;
        this._center[1] = (this._min[1] + this._max[1]) / 2;
        this._center[2] = (this._min[2] + this._max[2]) / 2;

        this._maxAxis = Math.max(this._size[2], Math.max(this._size[0], this._size[1]));
    }

    mulMat4(m)
    {
        if (this._first)
        {
            this._max[0] = 0;
            this._max[1] = 0;
            this._max[2] = 0;

            this._min[0] = 0;
            this._min[1] = 0;
            this._min[2] = 0;
            this._first = false;
        }
        vec3.transformMat4(this._max, this._max, m);
        vec3.transformMat4(this._min, this._min, m);
        this.calcCenterSize();
    }

    render(cgl, shader, op)
    {
        if (!this._wireMesh) this._wireMesh = new CGL.WireCube(cgl);

        cgl.pushModelMatrix();
        mat4.translate(cgl.mMatrix, cgl.mMatrix, this._center);

        if (CABLES.UI && op)
        {
            CABLES.UI.OverlayMeshes.drawCube(op, this._size[0] / 2, this._size[1] / 2, this._size[2] / 2);
        }

        cgl.popModelMatrix();
    }
}

;// CONCATENATED MODULE: ./src/core/cg/cg_geom.js
// import { vec2, vec3 } from "gl-matrix";





/**
 * a geometry contains all information about a mesh, vertices, texturecoordinates etc. etc.
 * @namespace external:CGL#Geometry
 * @param {String} name
 * @class
 * @example
 * // create a triangle with all attributes
 * const geom=new Geometry("triangle"),
 *
 * geom.vertices = [
 *      0.0,           sizeH.get(),  0.0,
 *     -sizeW.get(),  -sizeH.get(),  0.0,
 *      sizeW.get(),  -sizeH.get(),  0.0 ];
 *
 * geom.vertexNormals = [
 *      0.0,  0.0,  1.0,
 *      0.0,  0.0,  1.0,
 *      0.0,  0.0,  1.0 ];
 *
 * geom.tangents = [
 *     1,0,0,
 *     1,0,0,
 *     1,0,0 ];
 *
 * geom.biTangents = [
 *     0,1,0,
 *     0,1,0,
 *     0,1,0 ];
 *
 * geom.texCoords = [
 *      0.5,  0.0,
 *      1.0,  1.0,
 *      0.0,  1.0, ];
 *
 * geom.verticesIndices = [
 *     0, 1, 2 ];
 *
 */
const Geometry = function (name)
{
    this.name = name || "unknown";
    this._log = new Logger("cgl_geometry");

    this.faceVertCount = 3;
    this.glPrimitive = null;
    this._attributes = {};

    this._vertices = [];
    this.verticesIndices = [];

    this.isGeometry = true;

    this.morphTargets = [];

    Object.defineProperty(this, "vertices", {
        get()
        {
            return this._vertices;
        },
        set(v)
        {
            this.setVertices(v);
        },
    });

    Object.defineProperty(this, "texCoords", {
        get()
        {
            const att = this.getAttribute("texCoords");
            if (!att) return [];
            return att.data;
        },
        set(v)
        {
            this.setAttribute("texCoords", v, 2);
        },
    });

    Object.defineProperty(this, "vertexNormals", {
        get()
        {
            const att = this.getAttribute("vertexNormals");
            if (!att) return [];
            return att.data;
        },
        set(v)
        {
            this.setAttribute("vertexNormals", v, 3);
        },
    });

    Object.defineProperty(this, "tangents", {
        get()
        {
            const att = this.getAttribute("tangents");
            if (!att) return [];
            return att.data;
        },
        set(v)
        {
            this.setAttribute("tangents", v, 3);
        },
    });

    Object.defineProperty(this, "biTangents", {
        get()
        {
            const att = this.getAttribute("biTangents");
            if (!att) return [];
            return att.data;
        },
        set(v)
        {
            this.setAttribute("biTangents", v, 3);
        },
    });

    Object.defineProperty(this, "vertexColors", {
        get()
        {
            const att = this.getAttribute("vertexColors");
            if (!att) return [];
            return att.data;
        },
        set(v)
        {
            this.setAttribute("vertexColors", v, 4);
        },
    });
};

/**
 * @function clear
 * @memberof Geometry
 * @instance
 * @description clear all buffers/set them to length 0
 */
Geometry.prototype.clear = function ()
{
    this._vertices = new Float32Array([]);
    this.verticesIndices = [];
    this.texCoords = new Float32Array([]);
    this.vertexNormals = new Float32Array([]);
    this.tangents = [];
    this.biTangents = [];
    this._attributes = {};
};



/**
 * @function getAttributes
   @memberof Geometry
 * @instance
 * @return {Array<Object>} returns array of attribute objects
 */
Geometry.prototype.getAttributes = function ()
{
    return this._attributes;
};

/**
 * @function getAttribute
 * @memberof Geometry
 * @instance
 * @param {String} name
 * @return {Object}
 */
Geometry.prototype.getAttribute = function (name)
{
    for (const i in this._attributes)
    {
        if (this._attributes[i].name == name) return this._attributes[i];
    }
    return null;
};

/**
 * @function setAttribute
 * @description create an attribute
 * @memberof Geometry
 * @instance
 * @param {String} name
 * @param {Array} arr
 * @param {Number} itemSize
 */
Geometry.prototype.setAttribute = function (name, arr, itemSize)
{
    let attrType = "";
    if (!itemSize || itemSize > 4)
    {
        console.log("itemsize wrong?", itemSize, name);
        this._log.stack("itemsize");

        itemSize = 3;
    }

    if (itemSize == 1) attrType = "float";
    else if (itemSize == 2) attrType = "vec2";
    else if (itemSize == 3) attrType = "vec3";
    else if (itemSize == 4) attrType = "vec4";


    const attr = {
        "name": name,
        "data": arr,
        "itemSize": itemSize,
        "type": attrType,
    };

    this._attributes[name] = attr;
};

Geometry.prototype.copyAttribute = function (name, newgeom)
{
    const attr = this.getAttribute(name);
    newgeom.setAttribute(name, new Float32Array(attr.data), attr.itemSize);
};


/**
 * @function setVertices
 * @memberof Geometry
 * @instance
 * @description set vertices
 * @param {Array|Float32Array} arr [x,y,z,x,y,z,...]
 */
Geometry.prototype.setVertices = function (arr)
{
    if (arr instanceof Float32Array) this._vertices = arr;
    else this._vertices = new Float32Array(arr);
};

/**
 * @function setTexCoords
 * @memberof Geometry
 * @instance
 * @description set texcoords
 * @param {Array|Float32Array} arr [u,v,u,v,...]
 */
Geometry.prototype.setTexCoords = function (arr)
{
    if (arr instanceof Float32Array) this.texCoords = arr;
    else this.texCoords = new Float32Array(arr);
};

// Geometry.prototype.testIndices = function ()
// {
//     var foundError = false;
//     for (var i = 0; i < this.verticesIndices.length; i++)
//     {
//         if (this.verticesIndices[i * 3 + 0] >= this._vertices.length / 3 || this.verticesIndices[i * 3 + 1] >= this._vertices.length / 3 || this.verticesIndices[i * 3 + 2] >= this._vertices.length / 3)
//         {
//             foundError = true;
//             console.log("index error!");
//         }
//     }
// };

// deprecated
Geometry.prototype.calcNormals = function (smooth)
{
    const options = { "smooth": smooth };


    this.calculateNormals(options);
};

/**
 * @function flipNormals
 * @memberof Geometry
 * @param x
 * @param y
 * @param z
 * @description flip normals
 */
Geometry.prototype.flipNormals = function (x, y, z)
{
    let vec = vec3.create();

    if (x == undefined)x = 1;
    if (y == undefined)y = 1;
    if (z == undefined)z = 1;


    for (let i = 0; i < this.vertexNormals.length; i += 3)
    {
        vec3.set(vec,
            this.vertexNormals[i + 0],
            this.vertexNormals[i + 1],
            this.vertexNormals[i + 2]);

        vec[0] *= -x;
        vec[1] *= -y;
        vec[2] *= -z;

        vec3.normalize(vec, vec);

        this.vertexNormals[i + 0] = vec[0];
        this.vertexNormals[i + 1] = vec[1];
        this.vertexNormals[i + 2] = vec[2];
    }
};

Geometry.prototype.getNumTriangles = function ()
{
    if (this.verticesIndices && this.verticesIndices.length) return this.verticesIndices.length / 3;
    return this.vertices.length / 3;
};


/**
 * @function flipVertDir
 * @memberof Geometry
 * @description flip order of vertices in geom faces
 */
Geometry.prototype.flipVertDir = function ()
{
    const newInd = [];
    newInd.length = this.verticesIndices.length;
    for (let i = 0; i < this.verticesIndices.length; i += 3)
    {
        newInd[i] = this.verticesIndices[i + 2];
        newInd[i + 1] = this.verticesIndices[i + 1];
        newInd[i + 2] = this.verticesIndices[i];
    }
    this.verticesIndices = newInd;
};


Geometry.prototype.setPointVertices = function (verts)
{
    if (verts.length % 3 !== 0)
    {
        this._log.error("SetPointVertices: Array must be multiple of three.");
        return;
    }

    if (!(verts instanceof Float32Array)) this.vertices = new Float32Array(verts);
    else this.vertices = verts;

    if (!(this.texCoords instanceof Float32Array)) this.texCoords = new Float32Array((verts.length / 3) * 2);

    // this.texCoords.length=verts.length/3*2;
    this.verticesIndices.length = verts.length / 3;
    // this.verticesIndices=[];

    for (let i = 0; i < verts.length / 3; i++)
    {
        this.verticesIndices[i] = i;
        this.texCoords[i * 2] = 0;
        this.texCoords[i * 2 + 1] = 0;
    }
};

/**
 * merge a different geometry into the this geometry
 * @function merge
 * @param {Geometry} geom
 * @memberof Geometry
 * @instance
 */
Geometry.prototype.merge = function (geom)
{
    if (!geom) return;

    if (this.isIndexed() != geom.isIndexed())
    {
        if (this.isIndexed())
        {
            this.unIndex(false, true);
        }
        if (geom.isIndexed())
        {
            const g = geom.copy();
            g.unIndex(false, true);
            geom = g;
        }
    }

    const oldIndizesLength = this.verticesIndices.length;
    const vertLength = this._vertices.length / 3;

    this.verticesIndices.length += geom.verticesIndices.length;
    for (let i = 0; i < geom.verticesIndices.length; i++)
        this.verticesIndices[oldIndizesLength + i] = geom.verticesIndices[i] + vertLength;

    this.vertices = UTILS.float32Concat(this._vertices, geom.vertices);
    this.texCoords = UTILS.float32Concat(this.texCoords, geom.texCoords);
    this.vertexNormals = UTILS.float32Concat(this.vertexNormals, geom.vertexNormals);
    this.tangents = UTILS.float32Concat(this.tangents, geom.tangents);
    this.biTangents = UTILS.float32Concat(this.biTangents, geom.biTangents);
};

/**
 *   a copy of the geometry
 * @function copy
 * @memberof Geometry
 * @instance
 */
Geometry.prototype.copy = function ()
{
    const geom = new Geometry(this.name + " copy");
    geom.faceVertCount = this.faceVertCount;
    geom.glPrimitive = this.glPrimitive;

    geom.setVertices(this._vertices.slice(0));

    if (this.verticesIndices)
    {
        geom.verticesIndices.length = this.verticesIndices.length;
        for (let i = 0; i < this.verticesIndices.length; i++) geom.verticesIndices[i] = this.verticesIndices[i];
    }

    for (let i in this._attributes) this.copyAttribute(i, geom);

    geom.morphTargets.length = this.morphTargets.length;
    for (let i = 0; i < this.morphTargets.length; i++) geom.morphTargets[i] = this.morphTargets[i];

    return geom;
};

/**
 * Calculaten normals
 * @function calculateNormals
 * @memberof Geometry
 * @param options
 * @instance
 */
Geometry.prototype.calculateNormals = function (options)
{
    // todo: should check angle of normals to get edges    https://community.khronos.org/t/calculating-accurate-vertex-normals/28152
    options = options || {};
    if (options.smooth === false) this.unIndex();

    const u = vec3.create();
    const v = vec3.create();
    const n = vec3.create();

    function calcNormal(triangle)
    {
        vec3.subtract(u, triangle[0], triangle[1]);
        vec3.subtract(v, triangle[0], triangle[2]);
        vec3.cross(n, u, v);
        vec3.normalize(n, n);

        if (options && options.forceZUp)
        {
            if (n[2] < 0)
            {
                n[0] *= -1;
                n[1] *= -1;
                n[2] *= -1;
            }
        }
        return n;
    }

    this.getVertexVec = function (which)
    {
        const vec = [0, 0, 0];
        vec[0] = this.vertices[which * 3 + 0];
        vec[1] = this.vertices[which * 3 + 1];
        vec[2] = this.vertices[which * 3 + 2];
        return vec;
    };

    if (!(this.vertexNormals instanceof Float32Array) || this.vertexNormals.length != this.vertices.length) this.vertexNormals = new Float32Array(this.vertices.length);

    for (let i = 0; i < this.vertices.length; i++)
    {
        this.vertexNormals[i] = 0;
    }

    if (!this.isIndexed())
    {
        const norms = [];
        for (let i = 0; i < this.vertices.length; i += 9)
        {
            const triangle = [[this.vertices[i + 0], this.vertices[i + 1], this.vertices[i + 2]], [this.vertices[i + 3], this.vertices[i + 4], this.vertices[i + 5]], [this.vertices[i + 6], this.vertices[i + 7], this.vertices[i + 8]]];
            const nn = calcNormal(triangle);
            norms.push(nn[0], nn[1], nn[2], nn[0], nn[1], nn[2], nn[0], nn[1], nn[2]);
        }
        this.vertexNormals = norms;
    }
    else
    {
        const faceNormals = [];

        faceNormals.length = Math.floor(this.verticesIndices.length / 3);

        for (let i = 0; i < this.verticesIndices.length; i += 3)
        {
            const triangle = [this.getVertexVec(this.verticesIndices[i + 0]), this.getVertexVec(this.verticesIndices[i + 1]), this.getVertexVec(this.verticesIndices[i + 2])];

            faceNormals[i / 3] = calcNormal(triangle);

            this.vertexNormals[this.verticesIndices[i + 0] * 3 + 0] += faceNormals[i / 3][0];
            this.vertexNormals[this.verticesIndices[i + 0] * 3 + 1] += faceNormals[i / 3][1];
            this.vertexNormals[this.verticesIndices[i + 0] * 3 + 2] += faceNormals[i / 3][2];

            this.vertexNormals[this.verticesIndices[i + 1] * 3 + 0] += faceNormals[i / 3][0];
            this.vertexNormals[this.verticesIndices[i + 1] * 3 + 1] += faceNormals[i / 3][1];
            this.vertexNormals[this.verticesIndices[i + 1] * 3 + 2] += faceNormals[i / 3][2];

            this.vertexNormals[this.verticesIndices[i + 2] * 3 + 0] += faceNormals[i / 3][0];
            this.vertexNormals[this.verticesIndices[i + 2] * 3 + 1] += faceNormals[i / 3][1];
            this.vertexNormals[this.verticesIndices[i + 2] * 3 + 2] += faceNormals[i / 3][2];
        }


        for (let i = 0; i < this.verticesIndices.length; i += 3) // faces
        {
            for (let k = 0; k < 3; k++) // triangles
            {
                const vv = [this.vertexNormals[this.verticesIndices[i + k] * 3 + 0], this.vertexNormals[this.verticesIndices[i + k] * 3 + 1], this.vertexNormals[this.verticesIndices[i + k] * 3 + 2]];
                vec3.normalize(vv, vv);
                this.vertexNormals[this.verticesIndices[i + k] * 3 + 0] = vv[0];
                this.vertexNormals[this.verticesIndices[i + k] * 3 + 1] = vv[1];
                this.vertexNormals[this.verticesIndices[i + k] * 3 + 2] = vv[2];
            }
        }
    }
};

/**
 * Calculates tangents & bitangents with the help of uv-coordinates. Adapted from
 * Lengyel, Eric. “Computing Tangent Space Basis Vectors for an Arbitrary Mesh”.
 * Terathon Software 3D Graphics Library.
 * https://fenix.tecnico.ulisboa.pt/downloadFile/845043405449073/Tangent%20Space%20Calculation.pdf
 *
 * @function calcTangentsBitangents
 * @memberof Geometry
 * @instance
 */
Geometry.prototype.calcTangentsBitangents = function ()
{
    if (!this.vertices.length)
    {
        // this._log.error("Cannot calculate tangents/bitangents without vertices.");
        return;
    }
    if (!this.vertexNormals.length)
    {
        // this._log.error("Cannot calculate tangents/bitangents without normals.");
        return;
    }
    if (!this.texCoords.length)
    {
        // console.warn("No texcoords. Replacing with default values [0, 0].");
        const texCoordLength = (this.vertices.length / 3) * 2;
        this.texCoords = new Float32Array(texCoordLength);
        for (let i = 0; i < texCoordLength; i += 1) this.texCoords[i] = 0;
    }
    if (!this.verticesIndices || !this.verticesIndices.length)
    {
        // this._log.error("Cannot calculate tangents/bitangents without vertex indices.");
        return;
    }
    // this code assumes that we have three indices per triangle
    if (this.verticesIndices.length % 3 !== 0)
    {
        this._log.error("Vertex indices mismatch!");
        return;
    }

    const triangleCount = this.verticesIndices.length / 3;
    const vertexCount = this.vertices.length / 3;

    this.tangents = new Float32Array(this.vertexNormals.length);
    this.biTangents = new Float32Array(this.vertexNormals.length);

    // temporary buffers
    const tempVertices = [];
    tempVertices.length = vertexCount * 2;
    const v1 = vec3.create();
    const v2 = vec3.create();
    const v3 = vec3.create();

    const w1 = vec2.create();
    const w2 = vec2.create();
    const w3 = vec2.create();

    const sdir = vec3.create();
    const tdir = vec3.create();

    // for details on calculation, see article referenced above
    for (let tri = 0; tri < triangleCount; tri += 1)
    {
        // indices of the three vertices for a triangle
        const i1 = this.verticesIndices[tri * 3];
        const i2 = this.verticesIndices[tri * 3 + 1];
        const i3 = this.verticesIndices[tri * 3 + 2];

        // vertex position as vec3
        vec3.set(v1, this.vertices[i1 * 3], this.vertices[i1 * 3 + 1], this.vertices[i1 * 3 + 2]);
        vec3.set(v2, this.vertices[i2 * 3], this.vertices[i2 * 3 + 1], this.vertices[i2 * 3 + 2]);
        vec3.set(v3, this.vertices[i3 * 3], this.vertices[i3 * 3 + 1], this.vertices[i3 * 3 + 2]);

        // texture coordinate as vec2
        vec2.set(w1, this.texCoords[i1 * 2], this.texCoords[i1 * 2 + 1]);
        vec2.set(w2, this.texCoords[i2 * 2], this.texCoords[i2 * 2 + 1]);
        vec2.set(w3, this.texCoords[i3 * 2], this.texCoords[i3 * 2 + 1]);

        const x1 = v2[0] - v1[0];
        const x2 = v3[0] - v1[0];
        const y1 = v2[1] - v1[1];
        const y2 = v3[1] - v1[1];
        const z1 = v2[2] - v1[2];
        const z2 = v3[2] - v1[2];

        const s1 = w2[0] - w1[0];
        const s2 = w3[0] - w1[0];
        const t1 = w2[1] - w1[1];
        const t2 = w3[1] - w1[1];

        const r = 1.0 / (s1 * t2 - s2 * t1);

        vec3.set(sdir, (t2 * x1 - t1 * x2) * r, (t2 * y1 - t1 * y2) * r, (t2 * z1 - t1 * z2) * r);
        vec3.set(tdir, (s1 * x2 - s2 * x1) * r, (s1 * y2 - s2 * y1) * r, (s1 * z2 - s2 * z1) * r);

        tempVertices[i1] = sdir;
        tempVertices[i2] = sdir;
        tempVertices[i3] = sdir;

        tempVertices[i1 + vertexCount] = tdir;
        tempVertices[i2 + vertexCount] = tdir;
        tempVertices[i3 + vertexCount] = tdir;
    }

    const normal = vec3.create();
    const tempVert = vec3.create();
    const tan = vec3.create();
    const bitan = vec3.create();
    const temp1 = vec3.create();
    const temp2 = vec3.create();
    const crossPd = vec3.create();
    const normalized = vec3.create();

    for (let vert = 0; vert < vertexCount; vert += 1)
    {
        // NOTE: some meshes don't have index 0 - n in their indexbuffer, if this is the case, skip calculation of this vertex
        if (!tempVertices[vert]) continue;

        vec3.set(normal, this.vertexNormals[vert * 3], this.vertexNormals[vert * 3 + 1], this.vertexNormals[vert * 3 + 2]);
        vec3.set(tempVert, tempVertices[vert][0], tempVertices[vert][1], tempVertices[vert][2]);

        // Gram-Schmidt orthagonalize
        const _dp = vec3.dot(normal, tempVert);
        vec3.scale(temp1, normal, _dp);
        vec3.subtract(temp2, tempVert, temp1);

        vec3.normalize(normalized, temp2);
        vec3.cross(crossPd, normal, tempVert);

        // const intermDot = vec3.dot(crossPd, tempVertices[vert + vertexCount]);
        const w = 1.0;// intermDot < 0.0 ? -1.0 : 1.0;

        vec3.scale(tan, normalized, 1 / w);
        vec3.cross(bitan, normal, tan);

        this.tangents[vert * 3 + 0] = tan[0];
        this.tangents[vert * 3 + 1] = tan[1];
        this.tangents[vert * 3 + 2] = tan[2];
        this.biTangents[vert * 3 + 0] = bitan[0];
        this.biTangents[vert * 3 + 1] = bitan[1];
        this.biTangents[vert * 3 + 2] = bitan[2];
    }
};

Geometry.prototype.isIndexed = function ()
{
    if (this._vertices.length == 0) return true;
    return this.verticesIndices.length != 0;
};

/**
 * @function unIndex
 * @memberof Geometry
 * @instance
 * @description remove all vertex indizes, vertices array will contain 3*XYZ for every triangle
 * @param {boolean} reIndex
 * @param {boolean} dontCalcNormals
 */
Geometry.prototype.unIndex = function (reIndex, dontCalcNormals)
{
    const newVerts = [];
    const newIndizes = [];
    let count = 0;

    for (let j in this._attributes)
    {
        const attr = this._attributes[j];
        let na = [];

        for (let i = 0; i < this.verticesIndices.length; i += 3)
        {
            for (let s = 0; s < 3; s++)
            {
                if (attr.itemSize == 3)
                    na.push(
                        attr.data[this.verticesIndices[i + s] * 3 + 0],
                        attr.data[this.verticesIndices[i + s] * 3 + 1],
                        attr.data[this.verticesIndices[i + s] * 3 + 2]);
                else if (attr.itemSize == 4)
                    na.push(
                        attr.data[this.verticesIndices[i + s] * 4 + 0],
                        attr.data[this.verticesIndices[i + s] * 4 + 1],
                        attr.data[this.verticesIndices[i + s] * 4 + 2],
                        attr.data[this.verticesIndices[i + s] * 4 + 3]);
                else if (attr.itemSize == 2)
                    na.push(
                        attr.data[this.verticesIndices[i + s] * 2 + 0],
                        attr.data[this.verticesIndices[i + s] * 2 + 1]);
                else if (attr.itemSize == 1)
                    na.push(
                        attr.data[this.verticesIndices[i + s]]);
                else console.log("unknown attr", attr);
            }
        }
        this.setAttribute(attr.name, na, attr.itemSize);
    }

    for (let i = 0; i < this.verticesIndices.length; i += 3)
    {
        newVerts.push(
            this.vertices[this.verticesIndices[i + 0] * 3 + 0],
            this.vertices[this.verticesIndices[i + 0] * 3 + 1],
            this.vertices[this.verticesIndices[i + 0] * 3 + 2]);

        newIndizes.push(count);
        count++;

        newVerts.push(
            this.vertices[this.verticesIndices[i + 1] * 3 + 0],
            this.vertices[this.verticesIndices[i + 1] * 3 + 1],
            this.vertices[this.verticesIndices[i + 1] * 3 + 2]);

        newIndizes.push(count);
        count++;

        newVerts.push(
            this.vertices[this.verticesIndices[i + 2] * 3 + 0],
            this.vertices[this.verticesIndices[i + 2] * 3 + 1],
            this.vertices[this.verticesIndices[i + 2] * 3 + 2]);

        newIndizes.push(count);
        count++;
    }

    this.vertices = newVerts;

    this.verticesIndices = [];
    if (reIndex) this.verticesIndices = newIndizes;

    if (!dontCalcNormals) this.calculateNormals();
};

Geometry.prototype.calcBarycentric = function ()
{
    let barycentrics = [];
    barycentrics.length = this.vertices.length;
    for (let i = 0; i < this.vertices.length; i++) barycentrics[i] = 0;

    let count = 0;
    for (let i = 0; i < this.vertices.length; i += 3)
    {
        barycentrics[i + count] = 1;
        count++;
        if (count == 3) count = 0;
    }

    this.setAttribute("attrBarycentric", barycentrics, 3);
};

Geometry.prototype.getBounds = function ()
{
    return new BoundingBox(this);
};

Geometry.prototype.center = function (x, y, z)
{
    if (x === undefined)
    {
        x = true;
        y = true;
        z = true;
    }

    let i = 0;
    const bounds = this.getBounds();
    const offset = [bounds.minX + (bounds.maxX - bounds.minX) / 2, bounds.minY + (bounds.maxY - bounds.minY) / 2, bounds.minZ + (bounds.maxZ - bounds.minZ) / 2];

    for (i = 0; i < this.vertices.length; i += 3)
    {
        if (this.vertices[i + 0] == this.vertices[i + 0])
        {
            if (x) this.vertices[i + 0] -= offset[0];
            if (y) this.vertices[i + 1] -= offset[1];
            if (z) this.vertices[i + 2] -= offset[2];
        }
    }

    return offset;
};

Geometry.prototype.mapTexCoords2d = function ()
{
    const bounds = this.getBounds();
    const num = this.vertices.length / 3;

    this.texCoords = new Float32Array(num * 2);

    for (let i = 0; i < num; i++)
    {
        const vertX = this.vertices[i * 3 + 0];
        const vertY = this.vertices[i * 3 + 1];
        this.texCoords[i * 2 + 0] = vertX / (bounds.maxX - bounds.minX) + 0.5;
        this.texCoords[i * 2 + 1] = 1.0 - vertY / (bounds.maxY - bounds.minY) + 0.5;
    }
};


Geometry.prototype.getInfoOneLine = function ()
{
    let txt = "";
    if (this.faceVertCount == 3 && this.verticesIndices)txt += this.verticesIndices.length / 3;
    else txt += 0;

    txt += " tris ";

    if (this.vertices)txt += this.vertices.length / 3;
    else txt += 0;

    txt += " verts";

    return txt;
};

Geometry.prototype.getInfo = function ()
{
    const info = {};

    if (this.faceVertCount == 3 && this.verticesIndices)info.numFaces = this.verticesIndices.length / 3;
    else info.numFaces = 0;

    if (this.verticesIndices && this.verticesIndices.length)info.indices = this.verticesIndices.length;

    if (this.vertices)info.numVerts = this.vertices.length / 3;
    else info.numVerts = 0;

    if (this.vertexNormals) info.numNormals = this.vertexNormals.length / 3;
    else info.numNormals = 0;

    if (this.texCoords) info.numTexCoords = this.texCoords.length / 2;
    else info.numTexCoords = 0;

    if (this.tangents) info.numTangents = this.tangents.length / 3;
    else info.numTangents = 0;

    if (this.biTangents) info.numBiTangents = this.biTangents.length / 3;
    else info.numBiTangents = 0;

    if (this.biTangents) info.numBiTangents = this.biTangents.length / 3;
    else info.numBiTangents = 0;

    if (this.vertexColors) info.numVertexColors = this.vertexColors.length / 4;
    else info.numVertexColors = 0;

    if (this.getAttributes()) info.numAttribs = Object.keys(this.getAttributes()).length;
    else info.numAttribs = 0;

    info.isIndexed = this.isIndexed();

    return info;
};

// -----------------

// TODO : move this into "old" circle op
Geometry.buildFromFaces = function (arr, name, optimize)
{
    const vertices = [];
    const verticesIndices = [];

    for (let i = 0; i < arr.length; i += 3)
    {
        const a = arr[i + 0];
        const b = arr[i + 1];
        const c = arr[i + 2];
        const face = [-1, -1, -1];

        if (optimize)
            for (let iv = 0; iv < vertices.length; iv += 3)
            {
                if (vertices[iv + 0] == a[0] && vertices[iv + 1] == a[1] && vertices[iv + 2] == a[2]) face[0] = iv / 3;
                if (vertices[iv + 0] == b[0] && vertices[iv + 1] == b[1] && vertices[iv + 2] == b[2]) face[1] = iv / 3;
                if (vertices[iv + 0] == c[0] && vertices[iv + 1] == c[1] && vertices[iv + 2] == c[2]) face[2] = iv / 3;
            }

        if (face[0] == -1)
        {
            vertices.push(a[0], a[1], a[2]);
            face[0] = (vertices.length - 1) / 3;
        }

        if (face[1] == -1)
        {
            vertices.push(b[0], b[1], b[2]);
            face[1] = (vertices.length - 1) / 3;
        }

        if (face[2] == -1)
        {
            vertices.push(c[0], c[1], c[2]);
            face[2] = (vertices.length - 1) / 3;
        }

        verticesIndices.push(parseInt(face[0], 10));
        verticesIndices.push(parseInt(face[1], 10));
        verticesIndices.push(parseInt(face[2], 10));
    }

    const geom = new Geometry(name);
    geom.name = name;
    geom.vertices = vertices;
    geom.verticesIndices = verticesIndices;

    return geom;
};

// TODO: not needed anymore ?! move to deprecated ops?
Geometry.json2geom = function (jsonMesh)
{
    const geom = new Geometry("jsonMeshGeom");
    geom.verticesIndices = [];

    geom.vertices = jsonMesh.vertices || [];
    geom.vertexNormals = jsonMesh.normals || [];
    geom.vertexColors = jsonMesh.colors || [];
    geom.tangents = jsonMesh.tangents || [];
    geom.biTangents = jsonMesh.bitangents || [];
    if (jsonMesh.texturecoords) geom.setTexCoords(jsonMesh.texturecoords[0]);

    if (jsonMesh.vertices_b64)geom.vertices = new Float32Array(b64decTypedArray(jsonMesh.vertices_b64));
    if (jsonMesh.normals_b64) geom.vertexNormals = new Float32Array(b64decTypedArray(jsonMesh.normals_b64));
    if (jsonMesh.tangents_b64) geom.tangents = new Float32Array(b64decTypedArray(jsonMesh.tangents_b64));
    if (jsonMesh.bitangents_b64) geom.biTangents = new Float32Array(b64decTypedArray(jsonMesh.bitangents_b64));
    if (jsonMesh.texturecoords_b64) geom.setTexCoords(new Float32Array(b64decTypedArray(jsonMesh.texturecoords_b64[0])));

    if (jsonMesh.faces_b64)
    {
        geom.verticesIndices = new Uint32Array(b64decTypedArray(jsonMesh.faces_b64));
    }
    else
    {
        geom.verticesIndices.length = jsonMesh.faces.length * 3;
        for (let i = 0; i < jsonMesh.faces.length; i++)
        {
            geom.verticesIndices[i * 3] = jsonMesh.faces[i][0];
            geom.verticesIndices[i * 3 + 1] = jsonMesh.faces[i][1];
            geom.verticesIndices[i * 3 + 2] = jsonMesh.faces[i][2];
        }
    }

    return geom;
};




;// CONCATENATED MODULE: ./src/core/cgl/cgl_mesh_feedback.js
// view-source:http://toji.github.io/webgl2-particles-2/

function extendMeshWithFeedback(Mesh)
{
    Mesh.prototype.hasFeedbacks = function ()
    {
        return this._feedBacks.length > 0;
    };

    Mesh.prototype.removeFeedbacks = function (shader)
    {
        if (!this._feedbacks) return;
        this._feedbacks.length = 0;
        this._feedBacksChanged = true;
    };

    Mesh.prototype.setAttributeFeedback = function () {};

    Mesh.prototype.setFeedback = function (attrib, nameOut, initialArr)
    {
        let fb = { nameOut, };
        let found = false;
        this.unBindFeedbacks();

        for (let i = 0; i < this._feedBacks.length; i++)
        {
            if (this._feedBacks[i].nameOut == nameOut)
            {
                fb = this._feedBacks[i];

                found = true;
            }
        }

        if (!found) this._feedBacksChanged = true;

        fb.initialArr = initialArr;
        fb.attrib = attrib;

        // console.log("setfeedback");

        if (fb.outBuffer) this._cgl.gl.deleteBuffer(fb.outBuffer);
        // if(fb.attrib.buffer)this._cgl.gl.deleteBuffer(fb.attrib.buffer);
        fb.outBuffer = this._cgl.gl.createBuffer();
        this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, fb.outBuffer);
        this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, fb.initialArr, this._cgl.gl.STATIC_DRAW);

        this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, fb.attrib.buffer);
        this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, fb.initialArr, this._cgl.gl.STATIC_DRAW);

        if (!found) this._feedBacks.push(fb);

        // console.log('initialArr',initialArr.length/3);
        // console.log('vertices',fb.attrib.numItems);
        // console.log('vertices',this._bufVertexAttrib.numItems);

        return fb;
    };

    Mesh.prototype.bindFeedback = function (attrib)
    {
        if (!this._feedBacks || this._feedBacks.length === 0) return;
        if (this._transformFeedBackLoc == -1) this._transformFeedBackLoc = this._cgl.gl.createTransformFeedback();

        this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, this._transformFeedBackLoc);

        let found = false;

        for (let i = 0; i < this._feedBacks.length; i++)
        {
            const fb = this._feedBacks[i];

            if (fb.attrib == attrib)
            {
                found = true;
                // this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, fb.attrib.buffer);
                //
                // this._cgl.gl.vertexAttribPointer(
                //     fb.attrib.loc,
                //     fb.attrib.itemSize,
                //     fb.attrib.type,
                //     false,
                //     fb.attrib.itemSize*4, 0);

                this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER, i, fb.outBuffer);
            }
        }

        if (!found)
        {
            // console.log("ARTTRIB NOT FOUND",attrib.name);
        }
    };

    Mesh.prototype.drawFeedbacks = function (shader, prim)
    {
        let i = 0;

        if (this._feedBacksChanged)
        {
            const names = [];
            this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, this._transformFeedBackLoc);

            for (i = 0; i < this._feedBacks.length; i++) names.push(this._feedBacks[i].nameOut);
            shader.setFeedbackNames(names);

            console.log("feedbacknames", names);

            shader.compile();
            this._feedBacksChanged = false;
            this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, null);
            console.log("changed finished");
            return;
        }

        //
        // for( i=0;i<this._feedBacks.length;i++)
        // {
        //     var fb=this._feedBacks[i];
        //
        //     this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER, i, fb.outBuffer);
        // }

        // draw
        this._cgl.gl.beginTransformFeedback(this.glPrimitive);
        this._cgl.gl.drawArrays(prim, 0, this._feedBacks[0].attrib.numItems);

        // unbind
        this._cgl.gl.endTransformFeedback();

        this.unBindFeedbacks();

        this.feedBacksSwapBuffers();
    };

    Mesh.prototype.unBindFeedbacks = function ()
    {
        for (let i = 0; i < this._feedBacks.length; i++)
        {
            // this._cgl.gl.disableVertexAttribArray(this._feedBacks[i].attrib.loc);
            this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER, i, null);
        }

        this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, null);
    };

    Mesh.prototype.feedBacksSwapBuffers = function ()
    {
        for (let i = 0; i < this._feedBacks.length; i++)
        {
            const t = this._feedBacks[i].attrib.buffer;
            this._feedBacks[i].attrib.buffer = this._feedBacks[i].outBuffer;
            this._feedBacks[i].outBuffer = t;
        }
    };
}

;// CONCATENATED MODULE: ./src/core/cgl/cgl_mesh.js





const MESH = {};
MESH.lastMesh = null;

/**
 * webgl renderable 3d object
 * @class
 * @namespace external:CGL
 * @hideconstructor
 * @param {Context} _cgl cgl
 * @param {Geometry} __geom geometry
 * @param {Number} _options glPrimitive
 * @example
 * const cgl=this._cgl
 * const mesh=new CGL.Mesh(cgl, geometry);
 *
 * function render()
 * {
 *   mesh.render(cgl.getShader());
 * }
 */
const Mesh = function (_cgl, __geom, _options)
{
    this._cgl = _cgl;

    let options = _options || {};
    if (CABLES.UTILS.isNumeric(options))options = { "glPrimitive": _options }; // old constructor fallback...
    this._log = new Logger("cgl_mesh");
    this._bufVertexAttrib = null;
    this._bufVerticesIndizes = this._cgl.gl.createBuffer();
    this._indexType = this._cgl.gl.UNSIGNED_SHORT;
    this._attributes = [];
    this._attribLocs = {};
    this._geom = null;
    this._lastShader = null;
    this._numInstances = 0;
    this._glPrimitive = options.glPrimitive;

    this.opId = options.opId || "";
    this._preWireframeGeom = null;
    this.addVertexNumbers = false;
    this._name = "unknown";

    this.feedBackAttributes = [];
    this.setGeom(__geom);

    this._feedBacks = [];
    this._feedBacksChanged = false;
    this._transformFeedBackLoc = -1;
    this._lastAttrUpdate = 0;

    this.memFreed = false;

    this._cgl.profileData.addHeavyEvent("mesh constructed", this._name);

    this._queryExt = null;

    Object.defineProperty(this, "numInstances", {
        get()
        {
            return this._numInstances;
        },
        set(v)
        {
            this.setNumInstances(v);
        },
    });
};

Mesh.prototype.freeMem = function ()
{
    this.memFreed = true;

    for (let i = 0; i < this._attributes.length; i++)
    {
        this._attributes[i].floatArray = null;
    }
};

/**
 * @function updateVertices
 * @memberof Mesh
 * @instance
 * @description update vertices only from a geometry
 * @param {Geometry} geom
 */
Mesh.prototype.updateVertices = function (geom)
{
    this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_POSITION, geom.vertices, 3);
    this._numVerts = geom.vertices.length / 3;
};

Mesh.prototype.setAttributePointer = function (attrName, name, stride, offset)
{
    for (let i = 0; i < this._attributes.length; i++)
    {
        if (this._attributes[i].name == attrName)
        {
            if (!this._attributes[i].pointer) this._attributes[i].pointer = [];

            this._attributes[i].pointer.push(
                {
                    "loc": -1,
                    "name": name,
                    "stride": stride,
                    "offset": offset,
                    "instanced": attrName == constants_CONSTANTS.SHADER.SHADERVAR_INSTANCE_MMATRIX,
                }
            );
        }
    }
};

Mesh.prototype.getAttribute = function (name)
{
    for (let i = 0; i < this._attributes.length; i++) if (this._attributes[i].name == name) return this._attributes[i];
};

Mesh.prototype.setAttributeRange = function (attr, array, start, end)
{
    if (!attr) return;
    if (!start && !end) return;

    if (!attr.name)
    {
        this._log.stack("no attrname?!");
    }

    this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, attr.buffer);
    this._cgl.profileData.profileMeshAttributes += (end - start) || 0;

    this._cgl.profileData.profileSingleMeshAttribute[this._name] = this._cgl.profileData.profileSingleMeshAttribute[this._name] || 0;
    this._cgl.profileData.profileSingleMeshAttribute[this._name] += (end - start) || 0;

    if (attr.numItems < array.length / attr.itemSize)
    {
        this._resizeAttr(array, attr);
    }

    if (end > array.length)
    {
        if (CABLES.platform.isDevEnv())
            this._log.log(this._cgl.canvas.id + " " + attr.name + " buffersubdata out of bounds ?", array.length, end, start, attr);
        // end = array.length - 1;
        return;
    }

    if (this._cgl.glVersion == 1) this._cgl.gl.bufferSubData(this._cgl.gl.ARRAY_BUFFER, 0, array); // probably slow/ maybe create and array with only changed size ??
    else this._cgl.gl.bufferSubData(this._cgl.gl.ARRAY_BUFFER, start * 4, array, start, (end - start));
};

Mesh.prototype._resizeAttr = function (array, attr)
{
    if (attr.buffer)
        this._cgl.gl.deleteBuffer(attr.buffer);

    attr.buffer = this._cgl.gl.createBuffer();
    this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, attr.buffer);
    this._bufferArray(array, attr);
    attr.numItems = array.length / attr.itemSize;// numItems;
};


Mesh.prototype._bufferArray = function (array, attr)
{
    let floatArray = attr.floatArray || null;
    if (!array) return;


    if (this._cgl.debugOneFrame)
    {
        console.log("_bufferArray", array.length, attr.name); // eslint-disable-line
    }

    if (!(array instanceof Float32Array))
    {
        if (attr && floatArray && floatArray.length == array.length)
        {
            floatArray.set(array);
            // floatArray = floatArray;
        }
        else
        {
            floatArray = new Float32Array(array);

            if (this._cgl.debugOneFrame)
            {
                console.log("_bufferArray create new float32array", array.length, attr.name); // eslint-disable-line
            }

            if (array.length > 10000)
            {
                this._cgl.profileData.profileNonTypedAttrib++;
                this._cgl.profileData.profileNonTypedAttribNames = "(" + this._name + ":" + attr.name + ")";
            }
        }
    }
    else floatArray = array;

    attr.arrayLength = floatArray.length;
    attr.floatArray = null;// floatArray;

    this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, floatArray, this._cgl.gl.DYNAMIC_DRAW);
};

/**
 * @function setAttribute
 * @description update attribute
 * @memberof Mesh
 * @instance
 * @param {String} attribute name
 * @param {Array} data
 * @param {Number} itemSize
 * @param {Object} options
 */
Mesh.prototype.addAttribute = Mesh.prototype.updateAttribute = Mesh.prototype.setAttribute = function (name, array, itemSize, options)
{
    if (!array)
    {
        this._log.error("mesh addAttribute - no array given! " + name);
        throw new Error();
    }
    let cb = null;
    let instanced = false;
    let i = 0;
    const numItems = array.length / itemSize;

    this._cgl.profileData.profileMeshAttributes += numItems || 0;

    if (typeof options == "function")
    {
        cb = options;
    }

    if (typeof options == "object")
    {
        if (options.cb) cb = options.cb;
        if (options.instanced) instanced = options.instanced;
    }

    if (name == constants_CONSTANTS.SHADER.SHADERVAR_INSTANCE_MMATRIX) instanced = true;


    for (i = 0; i < this._attributes.length; i++)
    {
        const attr = this._attributes[i];
        if (attr.name == name)
        {
            if (attr.numItems === numItems)
            {
            }
            else
            {
                // this._log.log("wrong buffer size", this._geom.name, attr.name, attr.numItems, numItems);
                this._resizeAttr(array, attr);
            }

            this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, attr.buffer);
            this._bufferArray(array, attr);

            return attr;
        }
    }

    // create new buffer...

    const buffer = this._cgl.gl.createBuffer();

    this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, buffer);
    // this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, floatArray, this._cgl.gl.DYNAMIC_DRAW);

    let type = this._cgl.gl.FLOAT;
    if (options && options.type) type = options.type;
    const attr = {
        "buffer": buffer,
        "name": name,
        "cb": cb,
        "itemSize": itemSize,
        "numItems": numItems,
        "startItem": 0,
        "instanced": instanced,
        "type": type
    };

    this._bufferArray(array, attr);

    if (name == constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_POSITION) this._bufVertexAttrib = attr;
    this._attributes.push(attr);
    this._attribLocs = {};

    return attr;
};

Mesh.prototype.getAttributes = function ()
{
    return this._attributes;
};

/**
 * @function updateTexCoords
 * @description update texture coordinates only from a geometry
 * @memberof Mesh
 * @instance
 * @param {Geometry} geom
 */
Mesh.prototype.updateTexCoords = function (geom)
{
    if (geom.texCoords && geom.texCoords.length > 0)
    {
        this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_TEXCOORD, geom.texCoords, 2);
    }
    else
    {
        const tcBuff = new Float32Array(Math.round((geom.vertices.length / 3) * 2));
        this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_TEXCOORD, tcBuff, 2);
    }
};


/**
 * @function updateNormals
 * @description update normals only from a geometry
 * @memberof Mesh
 * @instance
 * @param {Geometry} geom
 */
Mesh.prototype.updateNormals = function (geom)
{
    if (geom.vertexNormals && geom.vertexNormals.length > 0)
    {
        this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_NORMAL, geom.vertexNormals, 3);
    }
    else
    {
        const tcBuff = new Float32Array(Math.round((geom.vertices.length)));
        this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_NORMAL, tcBuff, 3);
    }
};


Mesh.prototype._setVertexNumbers = function (arr)
{
    if (!this._verticesNumbers || this._verticesNumbers.length != this._numVerts || arr)
    {
        if (arr) this._verticesNumbers = arr;
        else
        {
            this._verticesNumbers = new Float32Array(this._numVerts);
            for (let i = 0; i < this._numVerts; i++) this._verticesNumbers[i] = i;
        }

        this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_NUMBER, this._verticesNumbers, 1, (attr, geom, shader) =>
        {
            if (!shader.uniformNumVertices) shader.uniformNumVertices = new Uniform(shader, "f", "numVertices", this._numVerts);
            shader.uniformNumVertices.setValue(this._numVerts);

            // console.log("this._numVerts", this._numVerts, attr, shader.uniformNumVertices);
        });
    }
};

/**
 * @function setVertexIndices
 * @description update vertex indices / faces
 * @memberof Mesh
 * @instance
 * @param {array} vertIndices
 */
Mesh.prototype.setVertexIndices = function (vertIndices)
{
    if (!this._bufVerticesIndizes)
    {
        this._log.warn("no bufVerticesIndizes: " + this._name);
        return;
    }
    if (vertIndices.length > 0)
    {
        if (vertIndices instanceof Float32Array) this._log.warn("vertIndices float32Array: " + this._name);

        for (let i = 0; i < vertIndices.length; i++)
        {
            if (vertIndices[i] >= this._numVerts)
            {
                this._log.warn("invalid index in " + this._name, i, vertIndices[i]);
                return;
            }
        }

        this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this._bufVerticesIndizes);

        // todo cache this ?
        // if(!this.vertIndicesTyped || this.vertIndicesTyped.length!=this._geom.verticesIndices.length)

        if (vertIndices.length > 65535)
        {
            this.vertIndicesTyped = new Uint32Array(vertIndices);
            this._indexType = this._cgl.gl.UNSIGNED_INT;
        }
        else
        if (vertIndices instanceof Uint32Array)
        {
            this.vertIndicesTyped = vertIndices;
            this._indexType = this._cgl.gl.UNSIGNED_INT;
        }
        else
        if (!(vertIndices instanceof Uint16Array))
        {
            this.vertIndicesTyped = new Uint16Array(vertIndices);
            this._indexType = this._cgl.gl.UNSIGNED_SHORT;
        }
        else this.vertIndicesTyped = vertIndices;

        this._cgl.gl.bufferData(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this.vertIndicesTyped, this._cgl.gl.DYNAMIC_DRAW);
        this._bufVerticesIndizes.itemSize = 1;
        this._bufVerticesIndizes.numItems = vertIndices.length;
    }
    else this._bufVerticesIndizes.numItems = 0;
};

/**
 * @function setGeom
 * @memberof Mesh
 * @instance
 * @description set geometry for mesh
 * @param {Geometry} geom
 * @param {boolean} removeRef
 */
Mesh.prototype.setGeom = function (geom, removeRef)
{
    this._geom = geom;
    if (geom.glPrimitive != null) this._glPrimitive = geom.glPrimitive;
    if (this._geom && this._geom.name) this._name = "mesh " + this._geom.name;

    MESH.lastMesh = null;
    this._cgl.profileData.profileMeshSetGeom++;

    this._disposeAttributes();

    this.updateVertices(this._geom);
    this.setVertexIndices(this._geom.verticesIndices);

    if (this.addVertexNumbers) this._setVertexNumbers();

    const geomAttribs = this._geom.getAttributes();

    const attribAssoc = {
        "texCoords": constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_TEXCOORD,
        "vertexNormals": constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_NORMAL,
        "vertexColors": constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_COLOR,
        "tangents": "attrTangent",
        "biTangents": "attrBiTangent",
    };

    for (const index in geomAttribs)
        if (geomAttribs[index].data && geomAttribs[index].data.length)
            this.setAttribute(attribAssoc[index] || index, geomAttribs[index].data, geomAttribs[index].itemSize);


    if (removeRef)
    {
        this._geom = null;
    }
};

Mesh.prototype._preBind = function (shader)
{
    for (let i = 0; i < this._attributes.length; i++)
        if (this._attributes[i].cb)
            this._attributes[i].cb(this._attributes[i], this._geom, shader);
};

Mesh.prototype._checkAttrLengths = function ()
{
    if (this.memFreed) return;
    // check length
    for (let i = 0; i < this._attributes.length; i++)
    {
        if (this._attributes[i].arrayLength / this._attributes[i].itemSize < this._attributes[0].arrayLength / this._attributes[0].itemSize)
        {
            let name = "unknown";
            if (this._geom)name = this._geom.name;
            // this._log.warn(
            //     name + ": " + this._attributes[i].name +
            //     " wrong attr length. is:", this._attributes[i].arrayLength / this._attributes[i].itemSize,
            //     " should be:", this._attributes[0].arrayLength / this._attributes[0].itemSize,
            // );
        }
    }
};

Mesh.prototype._bind = function (shader)
{
    if (!shader.isValid()) return;

    let attrLocs = [];
    if (this._attribLocs[shader.id]) attrLocs = this._attribLocs[shader.id];
    else this._attribLocs[shader.id] = attrLocs;

    this._lastShader = shader;
    if (shader.lastCompile > this._lastAttrUpdate || attrLocs.length != this._attributes.length)
    {
        this._lastAttrUpdate = shader.lastCompile;
        for (let i = 0; i < this._attributes.length; i++) attrLocs[i] = -1;
    }

    for (let i = 0; i < this._attributes.length; i++)
    {
        const attribute = this._attributes[i];
        if (attrLocs[i] == -1)
        {
            if (attribute._attrLocationLastShaderTime != shader.lastCompile)
            {
                attribute._attrLocationLastShaderTime = shader.lastCompile;
                attrLocs[i] = this._cgl.glGetAttribLocation(shader.getProgram(), attribute.name);
                // this._log.log('attribloc',attribute.name,attrLocs[i]);
                this._cgl.profileData.profileAttrLoc++;
            }
        }

        if (attrLocs[i] != -1)
        {
            this._cgl.gl.enableVertexAttribArray(attrLocs[i]);
            this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, attribute.buffer);

            if (attribute.instanced)
            {
                // todo: easier way to fill mat4 attribs...
                if (attribute.itemSize <= 4)
                {
                    if (!attribute.itemSize || attribute.itemSize == 0) this._log.warn("instanced attrib itemsize error", this._geom.name, attribute);

                    this._cgl.gl.vertexAttribPointer(attrLocs[i], attribute.itemSize, attribute.type, false, attribute.itemSize * 4, 0);
                    this._cgl.gl.vertexAttribDivisor(attrLocs[i], 1);
                }
                else if (attribute.itemSize == 16)
                {
                    const stride = 16 * 4;

                    this._cgl.gl.vertexAttribPointer(attrLocs[i], 4, attribute.type, false, stride, 0);
                    this._cgl.gl.enableVertexAttribArray(attrLocs[i] + 1);
                    this._cgl.gl.vertexAttribPointer(attrLocs[i] + 1, 4, attribute.type, false, stride, 4 * 4 * 1);
                    this._cgl.gl.enableVertexAttribArray(attrLocs[i] + 2);
                    this._cgl.gl.vertexAttribPointer(attrLocs[i] + 2, 4, attribute.type, false, stride, 4 * 4 * 2);
                    this._cgl.gl.enableVertexAttribArray(attrLocs[i] + 3);
                    this._cgl.gl.vertexAttribPointer(attrLocs[i] + 3, 4, attribute.type, false, stride, 4 * 4 * 3);

                    this._cgl.gl.vertexAttribDivisor(attrLocs[i], 1);
                    this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 1, 1);
                    this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 2, 1);
                    this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 3, 1);
                }
                else
                {
                    this._log.warn("unknown instance attrib size", attribute.name);
                }
            }
            else
            {
                if (!attribute.itemSize || attribute.itemSize == 0) this._log.warn("attrib itemsize error", this._name, attribute);
                this._cgl.gl.vertexAttribPointer(attrLocs[i], attribute.itemSize, attribute.type, false, attribute.itemSize * 4, 0);

                if (attribute.pointer)
                {
                    for (let ip = 0; ip < attribute.pointer.length; ip++)
                    {
                        const pointer = attribute.pointer[ip];

                        if (pointer.loc == -1)
                            pointer.loc = this._cgl.glGetAttribLocation(shader.getProgram(), pointer.name);

                        this._cgl.profileData.profileAttrLoc++;

                        this._cgl.gl.enableVertexAttribArray(pointer.loc);
                        this._cgl.gl.vertexAttribPointer(pointer.loc, attribute.itemSize, attribute.type, false, pointer.stride, pointer.offset);
                    }
                }
                this.bindFeedback(attribute);
            }
        }
    }

    if (this._bufVerticesIndizes && this._bufVerticesIndizes.numItems !== 0) this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this._bufVerticesIndizes);
};

Mesh.prototype.unBind = function ()
{
    const shader = this._lastShader;
    this._lastShader = null;
    if (!shader) return;

    let attrLocs = [];
    if (this._attribLocs[shader.id]) attrLocs = this._attribLocs[shader.id];
    else this._attribLocs[shader.id] = attrLocs;

    MESH.lastMesh = null;

    for (let i = 0; i < this._attributes.length; i++)
    {
        if (this._attributes[i].instanced)
        {
            // todo: easier way to fill mat4 attribs...
            if (this._attributes[i].itemSize <= 4)
            {
                if (attrLocs[i] != -1) this._cgl.gl.vertexAttribDivisor(attrLocs[i], 0);
                if (attrLocs[i] >= 0) this._cgl.gl.disableVertexAttribArray(attrLocs[i]);
            }
            else
            {
                this._cgl.gl.vertexAttribDivisor(attrLocs[i], 0);
                this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 1, 0);
                this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 2, 0);
                this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 3, 0);
                this._cgl.gl.disableVertexAttribArray(attrLocs[i] + 1);
                this._cgl.gl.disableVertexAttribArray(attrLocs[i] + 2);
                this._cgl.gl.disableVertexAttribArray(attrLocs[i] + 3);
            }
        }

        if (attrLocs[i] != -1) this._cgl.gl.disableVertexAttribArray(attrLocs[i]);
    }
};

Mesh.prototype.meshChanged = function ()
{
    return this._cgl.lastMesh && this._cgl.lastMesh != this;
};

Mesh.prototype.printDebug = function (shader)
{
    console.log("--attributes");
    for (let i = 0; i < this._attributes.length; i++)
    {
        console.log("attribute " + i + " " + this._attributes[i].name);
    }
};

Mesh.prototype.setNumVertices = function (num)
{
    this._bufVertexAttrib.numItems = num;
};

Mesh.prototype.getNumVertices = function ()
{
    return this._bufVertexAttrib.numItems;
};


/**
 * @function render
 * @memberof Mesh
 * @instance
 * @description draw mesh to screen
 * @param {Shader} shader
 */
Mesh.prototype.render = function (shader)
{
    // TODO: enable/disablevertex only if the mesh has changed... think drawing 10000x the same mesh

    if (!shader || !shader.isValid() || this._cgl.aborted) return;

    this._checkAttrLengths();

    if (this._geom)
    {
        if (this._preWireframeGeom && !shader.wireframe && !this._geom.isIndexed())
        {
            this.setGeom(this._preWireframeGeom);
            this._preWireframeGeom = null;
            // console.log("remove prewireframe geom");
        }

        if (shader.wireframe)
        {
            let changed = false;

            if (this._geom.isIndexed())
            {
                if (!this._preWireframeGeom)
                {
                    this._preWireframeGeom = this._geom;
                    this._geom = this._geom.copy();
                }

                this._geom.unIndex();
                changed = true;
            }

            if (!this._geom.getAttribute("attrBarycentric"))
            {
                if (!this._preWireframeGeom)
                {
                    this._preWireframeGeom = this._geom;
                    this._geom = this._geom.copy();
                }
                changed = true;

                this._geom.calcBarycentric();
            }
            if (changed) this.setGeom(this._geom);
        }
        // if (shader.wireframe)
        // console.log(shader.wireframe, this._geom.isIndexed());
    }

    let needsBind = false;
    if (MESH.lastMesh != this)
    {
        if (MESH.lastMesh) MESH.lastMesh.unBind();
        needsBind = true;
    }


    // var needsBind=false;
    // {
    //     needsBind=true;
    // }
    if (needsBind) this._preBind(shader);

    if (!shader.bind()) return;

    // if(needsBind)
    this._bind(shader);
    if (this.addVertexNumbers) this._setVertexNumbers();

    MESH.lastMesh = this;

    let prim = this._cgl.gl.TRIANGLES;
    if (this._glPrimitive !== undefined) prim = this._glPrimitive;
    if (shader.glPrimitive !== null) prim = shader.glPrimitive;

    let elementDiv = 1;
    let doQuery = this._cgl.profileData.doProfileGlQuery;
    let queryStarted = false;
    if (doQuery)
    {
        let id = this._name + " - " + shader.getName() + " #" + shader.id;
        if (this._numInstances) id += " instanced " + this._numInstances + "x";

        let queryProfilerData = this._cgl.profileData.glQueryData[id];

        if (!queryProfilerData) queryProfilerData = { "id": id, "num": 0 };

        if (shader.opId)queryProfilerData.shaderOp = shader.opId;
        if (this.opId)queryProfilerData.meshOp = this.opId;

        this._cgl.profileData.glQueryData[id] = queryProfilerData;

        if (!this._queryExt && this._queryExt !== false) this._queryExt = this._cgl.enableExtension("EXT_disjoint_timer_query_webgl2") || false;
        if (this._queryExt)
        {
            if (queryProfilerData._drawQuery)
            {
                const available = this._cgl.gl.getQueryParameter(queryProfilerData._drawQuery, this._cgl.gl.QUERY_RESULT_AVAILABLE);
                if (available)
                {
                    const elapsedNanos = this._cgl.gl.getQueryParameter(queryProfilerData._drawQuery, this._cgl.gl.QUERY_RESULT);
                    const currentTimeGPU = elapsedNanos / 1000000;

                    queryProfilerData._times = queryProfilerData._times || 0;
                    queryProfilerData._times += currentTimeGPU;
                    queryProfilerData._numcount++;
                    queryProfilerData.when = performance.now();
                    queryProfilerData._drawQuery = null;
                    queryProfilerData.queryStarted = false;
                }
            }

            if (!queryProfilerData.queryStarted)
            {
                queryProfilerData._drawQuery = this._cgl.gl.createQuery();
                this._cgl.gl.beginQuery(this._queryExt.TIME_ELAPSED_EXT, queryProfilerData._drawQuery);
                queryStarted = queryProfilerData.queryStarted = true;
            }
        }
    }


    if (this.hasFeedbacks())
    {
        this.drawFeedbacks(shader, prim);
    }
    else if (!this._bufVerticesIndizes || this._bufVerticesIndizes.numItems === 0)
    {
        // for (let i = 0; i < this._attributes.length; i++)
        // {
        //     if (this._attributes[i].arrayLength / this._attributes[i].itemSize != this._bufVertexAttrib.floatArray.length / 3)
        //     {
        //         this._log.warn("attrib buffer length wrong! ", this._attributes[i].name, this._attributes[i].arrayLength / this._attributes[i].itemSize, this._bufVertexAttrib.floatArray.length / 3, this._attributes[i].itemSize);
        //         // this._log.log(this);
        //         // debugger;
        //         return;
        //     }
        // }


        if (prim == this._cgl.gl.TRIANGLES)elementDiv = 3;
        if (this._numInstances === 0) this._cgl.gl.drawArrays(prim, this._bufVertexAttrib.startItem, this._bufVertexAttrib.numItems - this._bufVertexAttrib.startItem);
        else this._cgl.gl.drawArraysInstanced(prim, this._bufVertexAttrib.startItem, this._bufVertexAttrib.numItems, this._numInstances);
    }
    else
    {
        if (prim == this._cgl.gl.TRIANGLES)elementDiv = 3;
        if (this._numInstances === 0)
        {
            // console.log("la", this._bufVerticesIndizes.numItems);

            this._cgl.gl.drawElements(prim, this._bufVerticesIndizes.numItems, this._indexType, 0);
        }
        else
        {
            this._cgl.gl.drawElementsInstanced(prim, this._bufVerticesIndizes.numItems, this._indexType, 0, this._numInstances);
        }
    }

    if (this._cgl.debugOneFrame && this._cgl.gl.getError() != this._cgl.gl.NO_ERROR)
    {
        this._log.error("mesh draw gl error");
        this._log.error("mesh", this);
        this._log.error("shader", shader);

        const attribNames = [];
        for (let i = 0; i < this._cgl.gl.getProgramParameter(shader.getProgram(), this._cgl.gl.ACTIVE_ATTRIBUTES); i++)
        {
            const name = this._cgl.gl.getActiveAttrib(shader.getProgram(), i).name;
            this._log.error("attrib ", name);
        }
    }

    this._cgl.profileData.profileMeshNumElements += (this._bufVertexAttrib.numItems / elementDiv) * (this._numInstances || 1);
    this._cgl.profileData.profileMeshDraw++;

    if (doQuery && queryStarted)
    {
        this._cgl.gl.endQuery(this._queryExt.TIME_ELAPSED_EXT);
    }

    this._cgl.printError("mesh render " + this._name);

    this.unBind();
};

Mesh.prototype.setNumInstances = function (n)
{
    n = Math.max(0, n);
    if (this._numInstances != n)
    {
        this._numInstances = n;
        const indexArr = new Float32Array(n);
        for (let i = 0; i < n; i++) indexArr[i] = i;
        this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_INSTANCE_INDEX, indexArr, 1, { "instanced": true });
    }
};

Mesh.prototype._disposeAttributes = function ()
{
    if (!this._attributes) return;

    for (let i = 0; i < this._attributes.length; i++)
    {
        if (this._attributes[i].buffer)
        {
            this._cgl.gl.deleteBuffer(this._attributes[i].buffer);
            this._attributes[i].buffer = null;
        }
    }
    this._attributes.length = 0;
};

Mesh.prototype.dispose = function ()
{
    if (this._bufVertexAttrib && this._bufVertexAttrib.buffer) this._cgl.gl.deleteBuffer(this._bufVertexAttrib.buffer);
    if (this._bufVerticesIndizes) this._cgl.gl.deleteBuffer(this._bufVerticesIndizes);
    this._bufVerticesIndizes = null;

    this._disposeAttributes();
};

extendMeshWithFeedback(Mesh);



;// CONCATENATED MODULE: ./src/core/cgl/cgl_simplerect.js




const MESHES = {};

MESHES.getSimpleRect = function (cgl, name)
{
    const geom = new Geometry(name);

    geom.vertices = [1.0, 1.0, 0.0, -1.0, 1.0, 0.0, 1.0, -1.0, 0.0, -1.0, -1.0, 0.0];
    geom.texCoords = [1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0];
    geom.verticesIndices = [0, 1, 2, 2, 1, 3];
    geom.vertexNormals = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];

    return new Mesh(cgl, geom);
};


MESHES.getSimpleCube = function (cgl, name)
{
    const geom = new Geometry(name);
    geom.vertices = [-1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1, 1, -1, 1, 1, -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, 1, -1, 1, 1, -1, 1, -1];
    geom.setTexCoords([0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0,]);
    geom.verticesIndices = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
    geom.vertexNormals = new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0]);
    geom.tangents = new Float32Array([0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]);
    geom.biTangents = new Float32Array([-1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1]);

    return new Mesh(cgl, geom);
};




;// CONCATENATED MODULE: ./src/core/cgl/cgl_textureeffect.js




const TextureEffect = function (cgl, options)
{
    this._cgl = cgl;
    this._log = new Logger("cgl_TextureEffect");

    if (!cgl.TextureEffectMesh) this.createMesh();

    this._textureSource = null;
    this._options = options;
    this.name = options.name || "unknown";

    // TODO: do we still need the options ?
    // var opts=options ||
    //     {
    //         isFloatingPointTexture:false,
    //         filter:CGL.Texture.FILTER_LINEAR
    //     };
    // if(options && options.fp)opts.isFloatingPointTexture=true;

    this.imgCompVer = 0;
    this.aspectRatio = 1;
    this._textureTarget = null; // new CGL.Texture(this._cgl,opts);
    this._frameBuf = this._cgl.gl.createFramebuffer();
    this._frameBuf2 = this._cgl.gl.createFramebuffer();
    this._renderbuffer = this._cgl.gl.createRenderbuffer();
    this._renderbuffer2 = this._cgl.gl.createRenderbuffer();
    this.switched = false;
    this.depth = false;
};

TextureEffect.prototype.dispose = function ()
{
    if (this._renderbuffer) this._cgl.gl.deleteRenderbuffer(this._renderbuffer);
    if (this._frameBuf) this._cgl.gl.deleteFramebuffer(this._frameBuf);
    if (this._renderbuffer2) this._cgl.gl.deleteRenderbuffer(this._renderbuffer2);
    if (this._frameBuf2) this._cgl.gl.deleteFramebuffer(this._frameBuf2);
};

TextureEffect.prototype.getWidth = function ()
{
    return this._textureSource.width;
};

TextureEffect.prototype.getHeight = function ()
{
    return this._textureSource.height;
};

TextureEffect.prototype.setSourceTexture = function (tex)
{
    if (tex === null)
    {
        this._textureSource = new Texture(this._cgl);
        this._textureSource.setSize(16, 16);
    }
    else
    {
        this._textureSource = tex;
    }

    if (!this._textureSource.compareSettings(this._textureTarget))
    {
        if (this._textureTarget) this._textureTarget.delete();

        this._textureTarget = this._textureSource.clone();

        this._cgl.profileData.profileEffectBuffercreate++;

        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf);

        this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._renderbuffer);

        // if(tex.textureType==CGL.Texture.TYPE_FLOAT) this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.RGBA32F, this._textureSource.width,this._textureSource.height);
        // else this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.RGBA8, this._textureSource.width,this._textureSource.height);

        if (this.depth) this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.DEPTH_COMPONENT16, this._textureSource.width, this._textureSource.height);
        this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureTarget.tex, 0);
        if (this.depth) this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._renderbuffer);

        // this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureTarget.tex, 0);

        this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null);
        this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null);
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);

        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf2);

        this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._renderbuffer2);

        // if(tex.textureType==CGL.Texture.TYPE_FLOAT) this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.RGBA32F, this._textureSource.width,this._textureSource.height);
        // else this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.RGBA8, this._textureSource.width,this._textureSource.height);

        if (this.depth) this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.DEPTH_COMPONENT16, this._textureSource.width, this._textureSource.height);
        this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureSource.tex, 0);

        if (this.depth) this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._renderbuffer2);

        // this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureSource.tex, 0);

        this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null);
        this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null);
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);
    }

    this.aspectRatio = this._textureSource.width / this._textureSource.height;
};
TextureEffect.prototype.continueEffect = function ()
{
    this._cgl.pushDepthTest(false);
    this._cgl.pushModelMatrix();
    this._cgl.pushPMatrix();
    // todo why two pushs?



    this._cgl.pushViewPort(0, 0, this.getCurrentTargetTexture().width, this.getCurrentTargetTexture().height);



    mat4.perspective(this._cgl.pMatrix, 45, this.getCurrentTargetTexture().width / this.getCurrentTargetTexture().height, 0.1, 1100.0); // todo: why?

    this._cgl.pushPMatrix();
    mat4.identity(this._cgl.pMatrix);

    this._cgl.pushViewMatrix();
    mat4.identity(this._cgl.vMatrix);

    this._cgl.pushModelMatrix();
    mat4.identity(this._cgl.mMatrix);
};


TextureEffect.prototype.startEffect = function (bgTex)
{
    if (!this._textureTarget)
    {
        this._log.warn("effect has no target");
        return;
    }

    this.switched = false;

    this.continueEffect();

    if (bgTex)
    {
        this._bgTex = bgTex;
    }
    this._countEffects = 0;
};

TextureEffect.prototype.endEffect = function ()
{
    this._cgl.popDepthTest();
    this._cgl.popModelMatrix();

    this._cgl.popPMatrix();
    this._cgl.popModelMatrix();
    this._cgl.popViewMatrix();

    this._cgl.popPMatrix();
    this._cgl.popViewPort();
};

TextureEffect.prototype.bind = function ()
{
    if (this._textureSource === null)
    {
        this._log.warn("no base texture set!");
        return;
    }

    if (!this.switched)
    {
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf);
        this._cgl.pushGlFrameBuffer(this._frameBuf);
    }
    else
    {
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf2);
        this._cgl.pushGlFrameBuffer(this._frameBuf2);
    }
};

TextureEffect.prototype.finish = function ()
{
    if (this._textureSource === null)
    {
        this._log.warn("no base texture set!");
        return;
    }

    this._cgl.TextureEffectMesh.render(this._cgl.getShader());

    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.popGlFrameBuffer());

    this._cgl.profileData.profileTextureEffect++;

    if (this._textureTarget.filter == Texture.FILTER_MIPMAP)
    {
        if (!this.switched)
        {
            this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._textureTarget.tex);
            this._textureTarget.updateMipMap();
        }
        else
        {
            this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._textureSource.tex);
            this._textureSource.updateMipMap();
        }

        this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null);
    }

    this.switched = !this.switched;
    this._countEffects++;
};

TextureEffect.prototype.getCurrentTargetTexture = function ()
{
    if (this.switched) return this._textureSource;
    return this._textureTarget;
};

TextureEffect.prototype.getCurrentSourceTexture = function ()
{
    if (this._countEffects == 0 && this._bgTex) return this._bgTex;

    if (this.switched) return this._textureTarget;
    return this._textureSource;
};

TextureEffect.prototype.delete = function ()
{
    if (this._textureTarget) this._textureTarget.delete();
    if (this._textureSource) this._textureSource.delete();
    this._cgl.gl.deleteRenderbuffer(this._renderbuffer);
    this._cgl.gl.deleteFramebuffer(this._frameBuf);
};

TextureEffect.prototype.createMesh = function ()
{
    this._cgl.TextureEffectMesh = MESHES.getSimpleRect(this._cgl, "texEffectRect");
};

// ---------------------------------------------------------------------------------

TextureEffect.checkOpNotInTextureEffect = function (op)
{
    if (!op.patch.cgl) return true;
    if (op.uiAttribs.error && !op.patch.cgl.currentTextureEffect)
    {
        op.setUiError("textureeffect", null);
        return true;
    }
    if (!op.patch.cgl.currentTextureEffect) return true;

    if (op.patch.cgl.currentTextureEffect && !op.uiAttribs.error)
    {
        op.setUiError("textureeffect", "This op can not be a child of a ImageCompose/texture effect! imagecompose should only have textureeffect childs.", 0);
        return false;
    }

    if (op.patch.cgl.currentTextureEffect) return false;
    return true;
};

TextureEffect.checkOpInEffect = function (op, minver)
{
    minver = minver || 0;

    if (op.patch.cgl.currentTextureEffect)
    {
        if (op.uiAttribs.uierrors && op.patch.cgl.currentTextureEffect.imgCompVer >= minver)
        {
            op.setUiError("texeffect", null);
            return true;
        }

        if (minver && op.patch.cgl.currentTextureEffect.imgCompVer < minver)
        {
            op.setUiError("texeffect", "This op must be a child of an ImageCompose op with version >=" + minver + " <span class=\"button-small\" onclick=\"gui.patchView.downGradeOp('" + op.id + "','" + op.name + "')\">Downgrade</span> to previous version", 1);
        }
    }

    if (op.patch.cgl.currentTextureEffect) return true;

    if (!op.patch.cgl.currentTextureEffect && (!op.uiAttribs.uierrors || op.uiAttribs.uierrors.length == 0))
    {
        op.setUiError("texeffect", "This op must be a child of an ImageCompose op! More infos <a href=\"https://docs.cables.gl/image_composition/image_composition.html\" target=\"_blank\">here</a>. ", 1);
        return false;
    }

    if (!op.patch.cgl.currentTextureEffect) return false;
    return true;
};

TextureEffect.getBlendCode = function (ver)
{
    let src = "".endl()
        + "vec3 _blend(vec3 base,vec3 blend)".endl()
        + "{".endl()
        + "   vec3 colNew=blend;".endl()
        + "   #ifdef BM_MULTIPLY".endl()
        + "       colNew=base*blend;".endl()
        + "   #endif".endl()
        + "   #ifdef BM_MULTIPLY_INV".endl()
        + "       colNew=base* vec3(1.0)-blend;".endl()
        + "   #endif".endl()
        + "   #ifdef BM_AVERAGE".endl()
        + "       colNew=((base + blend) / 2.0);".endl()
        + "   #endif".endl()
        + "   #ifdef BM_ADD".endl()
        + "       colNew=min(base + blend, vec3(1.0));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_SUBTRACT_ONE".endl()
        + "       colNew=max(base + blend - vec3(1.0), vec3(0.0));".endl()
        + "   #endif".endl()

        + "   #ifdef BM_SUBTRACT".endl()
        + "       colNew=base - blend;".endl()
        + "   #endif".endl()

        + "   #ifdef BM_DIFFERENCE".endl()
        + "       colNew=abs(base - blend);".endl()
        + "   #endif".endl()
        + "   #ifdef BM_NEGATION".endl()
        + "       colNew=(vec3(1.0) - abs(vec3(1.0) - base - blend));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_EXCLUSION".endl()
        + "       colNew=(base + blend - 2.0 * base * blend);".endl()
        + "   #endif".endl()
        + "   #ifdef BM_LIGHTEN".endl()
        + "       colNew=max(blend, base);".endl()
        + "   #endif".endl()
        + "   #ifdef BM_DARKEN".endl()
        + "       colNew=min(blend, base);".endl()
        + "   #endif".endl()
        + "   #ifdef BM_OVERLAY".endl()
        + "      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))"
            // .endl()+'       #define BlendOverlay(base, blend)       Blend(base, blend, BlendOverlayf)'
            //    .endl()+'      colNew=Blend(base, blend, BlendOverlayf);'
            .endl()
        + "      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_SCREEN".endl()
        + "      #define BlendScreenf(base, blend)       (1.0 - ((1.0 - base) * (1.0 - blend)))"
            // .endl()+'       #define BlendScreen(base, blend)        Blend(base, blend, BlendScreenf)'
            // .endl()+'      colNew=Blend(base, blend, BlendScreenf);'
            .endl()
        + "      colNew=vec3(BlendScreenf(base.r, blend.r),BlendScreenf(base.g, blend.g),BlendScreenf(base.b, blend.b));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_SOFTLIGHT".endl()
        + "      #define BlendSoftLightf(base, blend)    ((blend < 0.5) ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend)))"
            // .endl()+'       #define BlendSoftLight(base, blend)     Blend(base, blend, BlendSoftLightf)'
            //    .endl()+'      colNew=Blend(base, blend, BlendSoftLightf);'
            .endl()
        + "      colNew=vec3(BlendSoftLightf(base.r, blend.r),BlendSoftLightf(base.g, blend.g),BlendSoftLightf(base.b, blend.b));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_HARDLIGHT".endl()
        + "      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))"
            // .endl()+'       #define BlendOverlay(base, blend)       Blend(base, blend, BlendOverlayf)'
            // .endl()+'      colNew=Blend(blend, base, BlendOverlayf);'
            .endl()
        + "      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_COLORDODGE".endl()
        + "      #define BlendColorDodgef(base, blend)   ((blend == 1.0) ? blend : min(base / (1.0 - blend), 1.0))"
            // .endl()+'      colNew=Blend(base, blend, BlendColorDodgef);'
            .endl()
        + "      colNew=vec3(BlendColorDodgef(base.r, blend.r),BlendColorDodgef(base.g, blend.g),BlendColorDodgef(base.b, blend.b));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_COLORBURN".endl()
        + "      #define BlendColorBurnf(base, blend)    ((blend == 0.0) ? blend : max((1.0 - ((1.0 - base) / blend)), 0.0))"
            // .endl()+'      colNew=Blend(base, blend, BlendColorBurnf);'
            .endl()
        + "      colNew=vec3(BlendColorBurnf(base.r, blend.r),BlendColorBurnf(base.g, blend.g),BlendColorBurnf(base.b, blend.b));".endl()
        + "   #endif".endl()










        + "   return colNew;".endl()
        + "}".endl();

    if (!ver)
        src += "vec4 cgl_blend(vec4 oldColor,vec4 newColor,float amount)".endl()
                + "{".endl()
                    + "vec4 col=vec4( _blend(oldColor.rgb,newColor.rgb) ,1.0);".endl()
                    + "col=vec4( mix( col.rgb, oldColor.rgb ,1.0-oldColor.a*amount),1.0);".endl()
                    + "return col;".endl()
                + "}".endl();

    if (ver >= 3)
        src += "vec4 cgl_blendPixel(vec4 base,vec4 col,float amount)".endl() +
                "{".endl() +

                "#ifdef BM_MATH_ADD".endl() +
                "   return vec4(base.rgb+col.rgb*amount,1.0);".endl() +
                "#endif".endl() +

                "#ifdef BM_MATH_SUB".endl() +
                "   return vec4(base.rgb-col.rgb*amount,1.0);".endl() +
                "#endif".endl() +

                "#ifdef BM_MATH_MUL".endl() +
                "   return vec4(base.rgb*col.rgb*amount,1.0);".endl() +
                "#endif".endl() +

                "#ifdef BM_MATH_DIV".endl() +
                "   return vec4(base.rgb/col.rgb*amount,1.0);".endl() +
                "#endif".endl() +


                    "#ifndef BM_MATH".endl() +
                        "vec3 colNew=_blend(base.rgb,col.rgb);".endl() +

                        "float newA=clamp(base.a+(col.a*amount),0.,1.);".endl() +

                        "#ifdef BM_ALPHAMASKED".endl() +
                            "newA=base.a;".endl() +
                        "#endif".endl() +

                        "return vec4(".endl() +
                            "mix(colNew,base.rgb,1.0-(amount*col.a)),".endl() +
                            "newA);".endl() +

                    "#endif".endl() +
    "}".endl();

    return src;
};

TextureEffect.onChangeBlendSelect = function (shader, blendName, maskAlpha = false)
{
    blendName = String(blendName);
    shader.toggleDefine("BM_NORMAL", blendName == "normal");
    shader.toggleDefine("BM_MULTIPLY", blendName == "multiply");
    shader.toggleDefine("BM_MULTIPLY_INV", blendName == "multiply invert");
    shader.toggleDefine("BM_AVERAGE", blendName == "average");
    shader.toggleDefine("BM_ADD", blendName == "add");
    shader.toggleDefine("BM_SUBTRACT_ONE", blendName == "subtract one");
    shader.toggleDefine("BM_SUBTRACT", blendName == "subtract");
    shader.toggleDefine("BM_DIFFERENCE", blendName == "difference");
    shader.toggleDefine("BM_NEGATION", blendName == "negation");
    shader.toggleDefine("BM_EXCLUSION", blendName == "exclusion");
    shader.toggleDefine("BM_LIGHTEN", blendName == "lighten");
    shader.toggleDefine("BM_DARKEN", blendName == "darken");
    shader.toggleDefine("BM_OVERLAY", blendName == "overlay");
    shader.toggleDefine("BM_SCREEN", blendName == "screen");
    shader.toggleDefine("BM_SOFTLIGHT", blendName == "softlight");
    shader.toggleDefine("BM_HARDLIGHT", blendName == "hardlight");
    shader.toggleDefine("BM_COLORDODGE", blendName == "color dodge");
    shader.toggleDefine("BM_COLORBURN", blendName == "color burn");

    shader.toggleDefine("BM_MATH_ADD", blendName == "Math Add");
    shader.toggleDefine("BM_MATH_SUB", blendName == "Math Subtract");
    shader.toggleDefine("BM_MATH_MUL", blendName == "Math Multiply");
    shader.toggleDefine("BM_MATH_DIV", blendName == "Math Divide");

    shader.toggleDefine("BM_MATH", blendName.indexOf("Math ") == 0);


    shader.toggleDefine("BM_ALPHAMASKED", maskAlpha);
};

TextureEffect.AddBlendSelect = function (op, name, defaultMode)
{
    const p = op.inValueSelect(name || "Blend Mode", [
        "normal", "lighten", "darken", "multiply", "multiply invert", "average", "add", "subtract", "difference", "negation", "exclusion", "overlay", "screen", "color dodge", "color burn", "softlight", "hardlight", "subtract one",
        "Math Add",
        "Math Subtract",
        "Math Multiply",
        "Math Divide",

    ], defaultMode || "normal");
    return p;
};

TextureEffect.AddBlendAlphaMask = function (op, name, defaultMode)
{
    const p = op.inSwitch(name || "Alpha Mask", ["Off", "On"], defaultMode || "Off");
    return p;
};

TextureEffect.setupBlending = function (op, shader, blendPort, amountPort, alphaMaskPort)
{
    const onChange = () =>
    {
        let maskAlpha = false;
        if (alphaMaskPort) maskAlpha = alphaMaskPort.get() == "On";
        TextureEffect.onChangeBlendSelect(shader, blendPort.get(), maskAlpha);

        let str = blendPort.get();
        if (str == "normal") str = null;
        else if (str == "multiply") str = "mul";
        else if (str == "multiply invert") str = "mulinv";
        else if (str == "lighten") str = "light";
        else if (str == "darken") str = "darken";
        else if (str == "average") str = "avg";
        else if (str == "subtract one") str = "sub one";
        else if (str == "subtract") str = "sub";
        else if (str == "difference") str = "diff";
        else if (str == "negation") str = "neg";
        else if (str == "exclusion") str = "exc";
        else if (str == "overlay") str = "ovl";
        else if (str == "color dodge") str = "dodge";
        else if (str == "color burn") str = "burn";
        else if (str == "softlight") str = "soft";
        else if (str == "hardlight") str = "hard";
        else if (str == "Math Add") str = "+";
        else if (str == "Math Subtract") str = "-";
        else if (str == "Math Multiply") str = "*";
        else if (str == "Math Divide") str = "/";

        op.setUiAttrib({ "extendTitle": str });
    };
    op.setPortGroup("Blending", [blendPort, amountPort, alphaMaskPort]);

    let maskAlpha = false;

    blendPort.onChange = onChange;
    if (alphaMaskPort)
    {
        alphaMaskPort.onChange = onChange;
        maskAlpha = alphaMaskPort.get() == "On";
    }

    TextureEffect.onChangeBlendSelect(shader, blendPort.get(), maskAlpha);
};



;// CONCATENATED MODULE: ./src/core/cgl/cgl_shader_lib.js




const ShaderLibMods = {
    "CGL.BLENDMODES": function ()
    {
        this.name = "blendmodes";
        this.srcHeadFrag = TextureEffect.getBlendCode();
    },
    "CGL.BLENDMODES3": function ()
    {
        this.name = "blendmodes3";
        this.srcHeadFrag = TextureEffect.getBlendCode(3);
    },

    "CGL.LUMINANCE": function ()
    {
        this.name = "luminance";
        this.srcHeadFrag = "".endl()
            + "float cgl_luminance(vec3 c)".endl()
            + "{".endl()
            + "    return dot(vec3(0.2126,0.7152,0.0722),c);".endl()
            + "}".endl();
    },


    // quite good random numbers, but somehow don't work in ANGLE
    "CGL.RANDOM_OLD": function ()
    {
        this.name = "randomNumber";
        this.srcHeadFrag = "".endl()
            + "float cgl_random(vec2 co)".endl()
            + "{".endl()
            + "    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 432758.5453);".endl()
            + "}".endl()
            + "vec3 cgl_random3(vec2 co)".endl()
            + "{".endl()
            + "    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));".endl()
            + "}";
    },


    // low quality generative ranodm numbers
    "CGL.RANDOM_LOW": function ()
    {
        this.name = "randomNumber";
        this.srcHeadFrag = "".endl()
            + "float cgl_random(vec2 co)".endl()
            + "{".endl()
            + "    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 358.5453);".endl()
            + "}".endl()
            + "vec3 cgl_random3(vec2 co)".endl()
            + "{".endl()
            + "    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));".endl()
            + "}";
    },

    // texture based random numbers
    "CGL.RANDOM_TEX": function ()
    {
        this.name = "randomNumbertex";
        this.srcHeadFrag = "".endl()
            + "UNI sampler2D CGLRNDTEX;".endl()
            + "float cgl_random(vec2 co)".endl()
            + "{".endl()
            + "    return texture(CGLRNDTEX,co*5711.0).r;".endl()
            + "}".endl()
            + "vec3 cgl_random3(vec2 co)".endl()
            + "{".endl()
            + "    return texture(CGLRNDTEX,co*5711.0).rgb;".endl()
            + "}";

        this.initUniforms = function (shader)
        {
            return [new Uniform(shader, "t", "CGLRNDTEX", 7)];
        };

        this.onBind = function (cgl, shader)
        {
            Texture.getRandomTexture(cgl);
            cgl.setTexture(7, Texture.getRandomTexture(cgl).tex);
        };
    },
};



;// CONCATENATED MODULE: ./src/core/cgl/cgl_utils.js
/** @namespace CGL */

/**
 * multiply to get radians from degree, e.g. `360 * CGL.DEG2RAD`
 * @const {Number}
 * @memberof CGL
 * @static
 */
const cgl_utils_DEG2RAD = Math.PI / 180.0;

/**
 * to get degrees from radians, e.g. `3.14 * CGL.RAD2DEG`
 * @const {number}
 * @memberof CGL
 */
const cgl_utils_RAD2DEG = 180.0 / Math.PI;

const onLoadingAssetsFinished = null; // deprecated / remove later

/**
 * get normalized mouse wheel delta (including browser specific adjustment)
 * @function getWheelDelta
 * @static
 * @memberof CGL
 * @param {MouseEvent} event
 * @return {Number} normalized delta
 */
const isWindows = window.navigator.userAgent.contains("Windows");
const getWheelDelta_ = function (event)
{
    let normalized;
    if (event.wheelDelta)
    {
        // chrome
        normalized = (event.wheelDelta % 120) - 0 == -0 ? event.wheelDelta / 120 : event.wheelDelta / 30;
        normalized *= -1.5;
        if (isWindows) normalized *= 2;
    }
    else
    {
        // firefox
        let d = event.deltaY;
        if (event.shiftKey) d = event.deltaX;
        const rawAmmount = d || event.detail;
        normalized = -(rawAmmount % 3 ? rawAmmount * 10 : rawAmmount / 3);
        normalized *= -3;
    }

    if (normalized > 20) normalized = 20;
    if (normalized < -20) normalized = -20;

    return normalized;
};

const getWheelSpeed = getWheelDelta_;
const getWheelDelta = getWheelDelta_;

// from https://github.com/lodash/lodash/blob/master/escape.js

const htmlEscapes = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
};

/** Used to match HTML entities and HTML characters. */
const reUnescapedHtml = /[&<>"']/g;
const reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

/*  eslint-disable */
const escapeHTML = function(string)
{
    return string && reHasUnescapedHtml.test(string) ?
        string.replace(reUnescapedHtml, function(chr) { return htmlEscapes[chr]; })
        : string || "";
}
/* eslint-enable */

;// CONCATENATED MODULE: ./src/core/cgl/cgl_shader_default_glsl.vert
/* harmony default export */ const cgl_shader_default_glsl = ("{{MODULES_HEAD}}\nIN vec3 vPosition; //!@\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\nIN vec3 attrTangent,attrBiTangent;\n\nIN float attrVertIndex;\n\nOUT vec2 texCoord;\nOUT vec3 norm;\nUNI mat4 projMatrix;\nUNI mat4 viewMatrix;\nUNI mat4 modelMatrix;\n\nvoid main()\n{\n    texCoord=attrTexCoord;\n    norm=attrVertNormal;\n    vec4 pos=vec4(vPosition,  1.0);\n    vec3 tangent=attrTangent;\n    vec3 bitangent=attrBiTangent;\n    mat4 mMatrix=modelMatrix;\n    gl_PointSize=10.0;\n\n    {{MODULE_VERTEX_POSITION}}\n\n    mat4 modelViewMatrix=viewMatrix*mMatrix;\n    {{MODULE_VERTEX_MOVELVIEW}}\n\n    gl_Position = projMatrix * modelViewMatrix * pos;\n}\n");
;// CONCATENATED MODULE: ./src/core/cgl/cgl_shader.js





// import { CGL } from "./index.js";



// ---------------------------------------------------------------------------


/*

proposal default shader variable names:

attrVertex - currently: vPosition
attrVertexIndex - currently: attrVertIndex
attrTexCoord
attrInstMat - currently: instMat
attrVertColor
attrTangent
attrBiTangent

uProjMatrix - currently: projMatrix
uModelMatrix - currently: modelMatrix
uNormalMatrix - currently: normalMatrix
uCamPosition - currently: camPos

*/


// ---------------------------------------------------------------------------

let materialIdCounter = 0;

/**
 * @class
 * @namespace external:CGL
 * @hideconstructor
 * @param _cgl
 * @param _name
 * @param _op
 * @example
 * var shader=new CGL.Shader(cgl,'MinimalMaterial');
 * shader.setSource(attachments.shader_vert,attachments.shader_frag);
 */
const Shader = function (_cgl, _name, _op)
{
    if (!_cgl) throw new Error("shader constructed without cgl " + _name);

    this._log = new Logger("cgl_shader");
    this._cgl = _cgl;

    if (!_name) this._log.stack("no shader name given");
    this._name = _name || "unknown";

    if (_op) this.opId = _op.id;
    this.glslVersion = 0;
    if (_cgl.glVersion > 1) this.glslVersion = 300;

    this._materialId = ++materialIdCounter;

    this.id = simpleId();
    this._isValid = true;
    this._program = null;
    this._uniforms = [];
    this._drawBuffers = [true];
    this._defines = [];
    this._needsRecompile = true;
    this._compileReason = "initial";

    this.ignoreMissingUniforms = false;
    this._projMatrixUniform = null;
    this._mvMatrixUniform = null;
    this._mMatrixUniform = null;
    this._vMatrixUniform = null;
    this._camPosUniform = null;
    this._normalMatrixUniform = null;
    this._inverseViewMatrixUniform = null;
    this._fromUserInteraction = false;

    this._attrVertexPos = -1;
    this.precision = _cgl.patch.config.glslPrecision || "highp";

    this._pMatrixState = -1;
    this._vMatrixState = -1;

    this._countMissingUniforms = 0;
    this._modGroupCount = 0; // not needed anymore...
    this._feedBackNames = [];
    this._attributes = [];

    this.glPrimitive = null;
    this.offScreenPass = false;
    this._extensions = [];
    this.srcVert = this.getDefaultVertexShader();
    this.srcFrag = this.getDefaultFragmentShader();
    this.lastCompile = 0;

    this._moduleNames = [];
    this._modules = [];
    this._moduleNumId = 0;

    this._libs = [];
    this._structNames = [];
    this._structUniformNames = [];
    this._textureStackUni = [];
    this._textureStackTex = [];
    this._textureStackType = [];
    this._textureStackTexCgl = [];

    this._tempNormalMatrix = mat4.create();
    this._tempCamPosMatrix = mat4.create();
    this._tempInverseViewMatrix = mat4.create();
    this._tempInverseProjMatrix = mat4.create();

    this.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG", "MODULE_VERTEX_MOVELVIEW"]);
};

Shader.prototype.isValid = function ()
{
    return this._isValid;
};

Shader.prototype.getCgl = function ()
{
    return this._cgl;
};

Shader.prototype.getName = function ()
{
    return this._name;
};

/**
 * enable an extension for the shader
 * @function enableExtension
 * @memberof Shader
 * @instance
 * @param name extension name
 */
Shader.prototype.enableExtension = function (name)
{
    this.setWhyCompile("enable extension " + name);
    this._needsRecompile = true;
    this._extensions.push(name);
};

Shader.prototype.getAttrVertexPos = function ()
{
    return this._attrVertexPos;
};

Shader.prototype.hasTextureUniforms = function ()
{
    for (let i = 0; i < this._uniforms.length; i++)
        if (this._uniforms[i].getType() == "t") return true;
    return false;
};

Shader.prototype.setWhyCompile = function (why)
{
    this._compileReason = why;
};

/**
 * copy all uniform values from another shader
 * @function copyUniforms
 * @memberof Shader
 * @instance
 * @param origShader uniform values will be copied from this shader
 */
Shader.prototype.copyUniformValues = function (origShader)
{
    // console.log(origShader._uniforms);
    for (let i = 0; i < origShader._uniforms.length; i++)
    {
        if (!this._uniforms[i])
        {
            this._log.log("unknown uniform?!");
            continue;
        }

        // this._log.log(origShader._uniforms[i].getName());
        // this.getUniform(origShader._uniforms[i].)
        // this._uniforms[i].set(origShader._uniforms[i].getValue());


        // if (origShader._uniforms[i].getName().contains("pathPoints"))
        //     console.log("copyUniformValues", origShader._uniforms[i].getName(), origShader._uniforms[i].getValue());

        this.getUniform(origShader._uniforms[i].getName()).set(origShader._uniforms[i].getValue());
    }

    this.popTextures();
    for (let i = 0; i < origShader._textureStackUni.length; i++)
    {
        this._textureStackUni[i] = origShader._textureStackUni[i];
        this._textureStackTex[i] = origShader._textureStackTex[i];
        this._textureStackType[i] = origShader._textureStackType[i];
        this._textureStackTexCgl[i] = origShader._textureStackTexCgl[i];
    }

    // this._textureStackUni = [];
    // this._textureStackTex = [];
    // this._textureStackType = [];
    // this._textureStackTexCgl = [];
};

/**
 * copy current shader
 * @function copy
 * @memberof Shader
 * @instance
 * @returns newShader
 */
Shader.prototype.copy = function ()
{
    const shader = new Shader(this._cgl, this._name + " copy");
    shader.setSource(this.srcVert, this.srcFrag);

    shader._modules = JSON.parse(JSON.stringify(this._modules));
    shader._defines = JSON.parse(JSON.stringify(this._defines));

    shader._modGroupCount = this._modGroupCount;
    shader._moduleNames = this._moduleNames;
    shader.glPrimitive = this.glPrimitive;
    shader.offScreenPass = this.offScreenPass;
    shader._extensions = this._extensions;
    shader.wireframe = this.wireframe;
    shader._attributes = this._attributes;

    for (let i = 0; i < this._uniforms.length; i++)
    {
        const u = this._uniforms[i].copy(shader);
        u.resetLoc();
    }

    this.setWhyCompile("copy");
    shader._needsRecompile = true;
    return shader;
};


/**
 * set shader source code
 * @function setSource
 * @memberof Shader
 * @instance
 * @param {String} srcVert
 * @param {String} srcFrag
 */
Shader.prototype.setSource = function (srcVert, srcFrag, fromUserInteraction)
{
    this._fromUserInteraction = fromUserInteraction;
    this.srcVert = srcVert;
    this.srcFrag = srcFrag;
    this.setWhyCompile("Source changed");
    this._needsRecompile = true;
    this._isValid = true;
};

Shader.prototype._addLibs = function (src)
{
    for (const id in ShaderLibMods)
    {
        if (src.contains(id))
        {
            const lib = new ShaderLibMods[id]();
            src = src.replace("{{" + id + "}}", lib.srcHeadFrag);
            this._libs.push(lib);
            if (lib.initUniforms)lib.initUniforms(this);
        }
    }

    return src;
};

Shader.prototype.createStructUniforms = function ()
{
    // * create structs
    let structStrFrag = "";
    let structStrVert = ""; // TODO: not used yet

    this._structNames = [];
    // * reset the arrays holding the value each recompile so we don't skip structs
    // * key value mapping so the same struct can be added twice (two times the same modifier)
    this._injectedStringsFrag = {};
    this._injectedStringsVert = {};

    this._structUniformNamesIndicesFrag = [];
    this._structUniformNamesIndicesVert = [];

    for (let i = 0; i < this._uniforms.length; i++)
    {
        // * only add uniforms to struct that are a member of a struct
        if (this._uniforms[i].isStructMember())
        {
            const injectionString = "{{INJECTION_POINT_STRUCT_" + this._uniforms[i]._structName + "}}";

            // * check if struct is not already part of shader
            if (!this._structNames.includes(this._uniforms[i]._structName))
            {
                // * create struct definition with placeholder string to inject
                const structDefinition = "struct "
                    + this._uniforms[i]._structName + " {".endl()
                    + injectionString
                    + "};".endl().endl();

                if (this._uniforms[i].getShaderType() === "both" || this._uniforms[i].getShaderType() === "frag")
                    structStrFrag = structStrFrag.concat(structDefinition);

                if (this._uniforms[i].getShaderType() === "both" || this._uniforms[i].getShaderType() === "vert")
                    structStrVert = structStrVert.concat(structDefinition);

                this._structNames.push(this._uniforms[i]._structName);
                this._injectedStringsFrag[this._uniforms[i]._structName] = [];
                this._injectedStringsVert[this._uniforms[i]._structName] = [];
            }

            // * create member & comment
            let comment = "";
            if (this._uniforms[i].comment) comment = " // " + this._uniforms[i].comment;

            let stringToInsert = "";
            if (this._uniforms[i].getGlslTypeString() == undefined)stringToInsert += "//";
            stringToInsert += "  " + this._uniforms[i].getGlslTypeString()
                    + " " + this._uniforms[i]._propertyName + ";"
                    + comment;

            if (this._uniforms[i].getShaderType() === "both")
            {
                // * inject member before {injectionString}
                if (
                    !this._injectedStringsFrag[this._uniforms[i]._structName].contains(stringToInsert)
                && !this._injectedStringsVert[this._uniforms[i]._structName].contains(stringToInsert))
                {
                    const insertionIndexFrag = structStrFrag.lastIndexOf(injectionString);
                    const insertionIndexVert = structStrVert.lastIndexOf(injectionString);

                    structStrFrag =
                        structStrFrag.slice(0, insertionIndexFrag)
                        + stringToInsert + structStrFrag.slice(insertionIndexFrag - 1);

                    structStrVert =
                        structStrVert.slice(0, insertionIndexVert)
                        + stringToInsert + structStrVert.slice(insertionIndexVert - 1);

                    this._injectedStringsFrag[this._uniforms[i]._structName].push(stringToInsert);
                    this._injectedStringsVert[this._uniforms[i]._structName].push(stringToInsert);
                }

                if (!this._structUniformNamesIndicesFrag.includes(i)) this._structUniformNamesIndicesFrag.push(i);
                if (!this._structUniformNamesIndicesVert.includes(i)) this._structUniformNamesIndicesVert.push(i);
            }
            else if (this._uniforms[i].getShaderType() === "frag")
            {
                // * inject member before {injectionString}
                if (!this._injectedStringsFrag[this._uniforms[i]._structName].includes(stringToInsert)) //
                {
                    const insertionIndexFrag = structStrFrag.lastIndexOf(injectionString);

                    structStrFrag =
                        structStrFrag.slice(0, insertionIndexFrag)
                        + stringToInsert + structStrFrag.slice(insertionIndexFrag - 1);

                    this._injectedStringsFrag[this._uniforms[i]._structName].push(stringToInsert);
                }

                if (!this._structUniformNamesIndicesFrag.includes(i)) this._structUniformNamesIndicesFrag.push(i);
            }
            else if (this._uniforms[i].getShaderType() === "vert")
            {
                // * inject member before {injectionString}
                if (!this._injectedStringsVert[this._uniforms[i]._structName].includes(stringToInsert))
                {
                    const insertionIndexVert = structStrVert.lastIndexOf(injectionString);

                    structStrVert =
                        structStrVert.slice(0, insertionIndexVert)
                        + stringToInsert + structStrVert.slice(insertionIndexVert - 1);

                    this._injectedStringsVert[this._uniforms[i]._structName].push(stringToInsert);
                }

                if (!this._structUniformNamesIndicesVert.includes(i)) this._structUniformNamesIndicesVert.push(i);
            }
        }
    }

    // * dedupe injected uni declarations
    this._uniDeclarationsFrag = [];
    this._uniDeclarationsVert = [];

    // * remove struct injection points and add uniform in fragment
    for (let i = 0; i < this._structUniformNamesIndicesFrag.length; i += 1)
    {
        const index = this._structUniformNamesIndicesFrag[i];
        const uniDeclarationString = "UNI " + this._uniforms[index]._structName + " " + this._uniforms[index]._structUniformName + ";".endl();

        if (!this._uniDeclarationsFrag.includes(uniDeclarationString))
        {
            const injectionString = "{{INJECTION_POINT_STRUCT_" + this._uniforms[index]._structName + "}}";

            structStrFrag = structStrFrag.replace(injectionString, "");
            structStrFrag += uniDeclarationString;

            this._uniDeclarationsFrag.push(uniDeclarationString);
        }
    }

    // * remove struct injection points and add uniform in vertex
    for (let i = 0; i < this._structUniformNamesIndicesVert.length; i += 1)
    {
        const index = this._structUniformNamesIndicesVert[i];
        const uniDeclarationString = "UNI " + this._uniforms[index]._structName + " " + this._uniforms[index]._structUniformName + ";".endl();

        if (!this._uniDeclarationsVert.includes(uniDeclarationString))
        {
            const injectionString = "{{INJECTION_POINT_STRUCT_" + this._uniforms[index]._structName + "}}";

            structStrVert = structStrVert.replace(injectionString, "");
            structStrVert += uniDeclarationString;
            this._uniDeclarationsVert.push(uniDeclarationString);
        }
    }

    return [structStrVert, structStrFrag];
};

Shader.prototype._getAttrSrc = function (attr, firstLevel)
{
    const r = {};
    if (attr.name && attr.type)
    {
        r.srcHeadVert = "";
        if (!firstLevel) r.srcHeadVert += "#ifndef ATTRIB_" + attr.name.endl();
        r.srcHeadVert += "#define ATTRIB_" + attr.name.endl();
        r.srcHeadVert += "IN " + attr.type + " " + attr.name + ";".endl();
        if (!firstLevel) r.srcHeadVert += "#endif".endl();

        if (attr.nameFrag)
        {
            r.srcHeadVert += "";
            if (!firstLevel) r.srcHeadVert += "#ifndef ATTRIB_" + attr.nameFrag.endl();
            r.srcHeadVert += "#define ATTRIB_" + attr.nameFrag.endl();
            r.srcHeadVert += "OUT " + attr.type + " " + attr.nameFrag + ";".endl();
            if (!firstLevel) r.srcHeadVert += "#endif".endl();

            r.srcVert = "".endl() + attr.nameFrag + "=" + attr.name + ";";

            r.srcHeadFrag = "";
            if (!firstLevel) r.srcHeadFrag += "#ifndef ATTRIB_" + attr.nameFrag.endl();
            r.srcHeadFrag += "#define ATTRIB_" + attr.nameFrag.endl();
            r.srcHeadFrag += "IN " + attr.type + " " + attr.nameFrag + ";".endl();
            if (!firstLevel) r.srcHeadFrag += "#endif".endl();
        }
    }
    return r;
};

Shader.prototype.compile = function ()
{
    if (this._cgl.aborted) return;
    const startTime = performance.now();



    this._cgl.profileData.profileShaderCompiles++;
    this._cgl.profileData.profileShaderCompileName = this._name + " [" + this._compileReason + "]";

    let extensionString = "";
    if (this._extensions)
        for (let i = 0; i < this._extensions.length; i++)
            extensionString += "#extension " + this._extensions[i] + " : enable".endl();

    let definesStr = "";
    if (this._defines.length) definesStr = "\n// cgl generated".endl();
    for (let i = 0; i < this._defines.length; i++)
        definesStr += "#define " + this._defines[i][0] + " " + this._defines[i][1] + "".endl();

    const structStrings = this.createStructUniforms();
    this._cgl.profileData.addHeavyEvent("shader compile", this._name + " [" + this._compileReason + "]");
    this._compileReason = "";



    if (this._uniforms)
    {
        // * we create an array of the uniform names to check our indices & an array to save them
        const uniNames = this._uniforms.map((uni) => { return uni._name; });
        const indicesToRemove = [];

        // * we go through our uniforms and check if the same name is contained somewhere further in the array
        // * if so, we add the current index to be removed later
        for (let i = 0; i < this._uniforms.length; i++)
        {
            const uni = this._uniforms[i];
            const nextIndex = uniNames.indexOf(uni._name, i + 1);
            if (nextIndex > -1) indicesToRemove.push(i);
        }

        // * after that, we go through the uniforms backwards (so we keep the order) and remove the indices
        // * also, we reset the locations of all the other valid uniforms
        for (let j = this._uniforms.length - 1; j >= 0; j -= 1)
        {
            if (indicesToRemove.includes(j)) this._uniforms.splice(j, 1);
            else this._uniforms[j].resetLoc();
        }
    }

    this._cgl.printError("uniform resets");

    if (this.hasTextureUniforms()) definesStr += "#define HAS_TEXTURES".endl();

    let vs = "";
    let fs = "";

    if (!this.srcFrag)
    {
        this._log.warn("[cgl shader] has no fragment source!", this._name, this);
        this.srcVert = this.getDefaultVertexShader();
        this.srcFrag = this.getDefaultFragmentShader();
        // return;
    }

    if (this.glslVersion == 300)
    {
        vs = "#version 300 es"
            .endl() + "// "
            .endl() + "// vertex shader " + this._name
            .endl() + "// "
            .endl() + "precision " + this.precision + " float;"
            .endl() + "precision " + this.precision + " sampler2D;"
            .endl() + ""
            .endl() + "#define WEBGL2"
            .endl() + "#define texture2D texture"
            .endl() + "#define UNI uniform"
            .endl() + "#define IN in"
            .endl() + "#define OUT out"
            .endl();

        fs = "#version 300 es"
            .endl() + "// "
            .endl() + "// fragment shader " + this._name
            .endl() + "// "
            .endl() + "precision " + this.precision + " float;"
            .endl() + "precision " + this.precision + " sampler2D;"
            .endl() + ""
            .endl() + "#define WEBGL2"
            .endl() + "#define texture2D texture"
            .endl() + "#define IN in"
            .endl() + "#define OUT out"
            .endl() + "#define UNI uniform"
            .endl() + "{{DRAWBUFFER}}"

            .endl();
    }
    else
    {
        fs = ""
            .endl() + "// "
            .endl() + "// fragment shader " + this._name
            .endl() + "// "
            .endl() + "#define WEBGL1"
            .endl() + "#define texture texture2D"
            .endl() + "#define outColor gl_FragColor"
            .endl() + "#define IN varying"
            .endl() + "#define UNI uniform"
            .endl();

        vs = ""
            .endl() + "// "
            .endl() + "// vertex shader " + this._name
            .endl() + "// "
            .endl() + "#define WEBGL1"
            .endl() + "#define texture texture2D"
            .endl() + "#define OUT varying"
            .endl() + "#define IN attribute"
            .endl() + "#define UNI uniform"
            .endl();
    }

    let uniformsStrVert = "\n// cgl generated".endl();
    let uniformsStrFrag = "\n// cgl generated".endl();


    fs += "\n// active mods: --------------- ";
    vs += "\n// active mods: --------------- ";

    let foundModsFrag = false;
    let foundModsVert = false;
    for (let i = 0; i < this._moduleNames.length; i++)
    {
        for (let j = 0; j < this._modules.length; j++)
        {
            if (this._modules[j].name == this._moduleNames[i])
            {
                if (this._modules[j].srcBodyFrag || this._modules[j].srcHeadFrag)
                {
                    foundModsFrag = true;
                    fs += "\n// " + i + "." + j + ". " + this._modules[j].title + " (" + this._modules[j].name + ")";
                }
                if (this._modules[j].srcBodyVert || this._modules[j].srcHeadVert)
                {
                    vs += "\n// " + i + "." + j + ". " + this._modules[j].title + " (" + this._modules[j].name + ")";
                    foundModsVert = true;
                }
            }
        }
    }
    if (!foundModsVert)fs += "\n// no mods used...";
    if (!foundModsFrag)fs += "\n// no mods used...";
    fs += "\n";
    vs += "\n";

    for (let i = 0; i < this._uniforms.length; i++)
    {
        if (this._uniforms[i].shaderType && !this._uniforms[i].isStructMember())
        {
            let uniStr = "";
            if (!this._uniforms[i].getGlslTypeString())uniStr += "// ";
            uniStr += "UNI " + this._uniforms[i].getGlslTypeString() + " " + this._uniforms[i].getName();
            let comment = "";
            if (this._uniforms[i].comment) comment = " // " + this._uniforms[i].comment;

            if (this._uniforms[i].shaderType == "vert" || this._uniforms[i].shaderType == "both")
                if (!this.srcVert.contains(uniStr) && !this.srcVert.contains("uniform " + this._uniforms[i].getGlslTypeString() + " " + this._uniforms[i].getName()))
                    uniformsStrVert += uniStr + ";" + comment.endl();

            if (this._uniforms[i].shaderType == "frag" || this._uniforms[i].shaderType == "both")
                if (!this.srcFrag.contains(uniStr) && !this.srcFrag.contains("uniform " + this._uniforms[i].getGlslTypeString() + " " + this._uniforms[i].getName()))
                    uniformsStrFrag += uniStr + ";" + comment.endl();
        }
    }


    let countUniFrag = 0;
    let countUniVert = 0;
    for (let i = 0; i < this._uniforms.length; i++)
    {
        if (this._uniforms[i].shaderType && !this._uniforms[i].isStructMember())
        {
            if (this._uniforms[i].shaderType == "vert" || this._uniforms[i].shaderType == "both") countUniVert++;
            if (this._uniforms[i].shaderType == "frag" || this._uniforms[i].shaderType == "both") countUniFrag++;
        }
    }
    if (countUniFrag >= this._cgl.maxUniformsFrag) this._log.warn("[cgl_shader] num uniforms frag: " + countUniFrag + " / " + this._cgl.maxUniformsFrag);
    if (countUniVert >= this._cgl.maxUniformsVert) this._log.warn("[cgl_shader] num uniforms vert: " + countUniVert + " / " + this._cgl.maxUniformsVert);


    if (!fs.contains("precision")) fs = "precision " + this.precision + " float;".endl() + fs;
    if (!vs.contains("precision")) vs = "precision " + this.precision + " float;".endl() + vs;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    {
        fs += "#define MOBILE".endl();
        vs += "#define MOBILE".endl();
    }
    vs = extensionString + vs + definesStr + structStrings[0] + uniformsStrVert + "\n// -- \n" + this.srcVert;
    fs = extensionString + fs + definesStr + structStrings[1] + uniformsStrFrag + "\n// -- \n" + this.srcFrag;


    let srcHeadVert = "";
    let srcHeadFrag = "";

    this._modules.sort(function (a, b)
    {
        return a.group - b.group;
    });

    this._modules.sort(function (a, b)
    {
        return a.priority || 0 - b.priority || 0;
    });


    let addedAttribs = false;

    for (let i = 0; i < this._moduleNames.length; i++)
    {
        let srcVert = "";
        let srcFrag = "";

        if (!addedAttribs)
        {
            addedAttribs = true;

            for (let k = 0; k < this._attributes.length; k++)
            {
                const r = this._getAttrSrc(this._attributes[k], true);
                if (r.srcHeadVert)srcHeadVert += r.srcHeadVert;
                if (r.srcVert)srcVert += r.srcVert;
                if (r.srcHeadFrag)srcHeadFrag += r.srcHeadFrag;
            }
        }

        for (let j = 0; j < this._modules.length; j++)
        {
            const mod = this._modules[j];
            if (mod.name == this._moduleNames[i])
            {
                srcHeadVert += "\n//---- MOD: group:" + mod.group + ": idx:" + j + " - prfx:" + mod.prefix + " - " + mod.title + " ------\n";
                srcHeadFrag += "\n//---- MOD: group:" + mod.group + ": idx:" + j + " - prfx:" + mod.prefix + " - " + mod.title + " ------\n";

                srcVert += "\n\n//---- MOD: " + mod.title + " / " + mod.priority + " ------\n";
                srcFrag += "\n\n//---- MOD: " + mod.title + " / " + mod.priority + " ------\n";

                if (mod.attributes)
                    for (let k = 0; k < mod.attributes.length; k++)
                    {
                        const r = this._getAttrSrc(mod.attributes[k], false);
                        if (r.srcHeadVert)srcHeadVert += r.srcHeadVert;
                        if (r.srcVert)srcVert += r.srcVert;
                        if (r.srcHeadFrag)srcHeadFrag += r.srcHeadFrag;
                    }

                srcHeadVert += mod.srcHeadVert || "";
                srcHeadFrag += mod.srcHeadFrag || "";
                srcVert += mod.srcBodyVert || "";
                srcFrag += mod.srcBodyFrag || "";

                srcHeadVert += "\n//---- end mod ------\n";
                srcHeadFrag += "\n//---- end mod ------\n";

                srcVert += "\n//---- end mod ------\n";
                srcFrag += "\n//---- end mod ------\n";

                srcVert = srcVert.replace(/{{mod}}/g, mod.prefix);
                srcFrag = srcFrag.replace(/{{mod}}/g, mod.prefix);
                srcHeadVert = srcHeadVert.replace(/{{mod}}/g, mod.prefix);
                srcHeadFrag = srcHeadFrag.replace(/{{mod}}/g, mod.prefix);

                srcVert = srcVert.replace(/MOD_/g, mod.prefix);
                srcFrag = srcFrag.replace(/MOD_/g, mod.prefix);
                srcHeadVert = srcHeadVert.replace(/MOD_/g, mod.prefix);
                srcHeadFrag = srcHeadFrag.replace(/MOD_/g, mod.prefix);
            }
        }


        vs = vs.replace("{{" + this._moduleNames[i] + "}}", srcVert);
        fs = fs.replace("{{" + this._moduleNames[i] + "}}", srcFrag);
    }
    vs = vs.replace("{{MODULES_HEAD}}", srcHeadVert);
    fs = fs.replace("{{MODULES_HEAD}}", srcHeadFrag);


    vs = this._addLibs(vs);
    fs = this._addLibs(fs);


    // SETUP draw buffers / multi texture render targets

    let drawBufferStr = "";
    for (let i = 0; i < 16; i++)
        if (fs.contains("outColor" + i)) this._drawBuffers[i] = true;

    if (this._drawBuffers.length == 1)
    {
        drawBufferStr = "out vec4 outColor;".endl();
        drawBufferStr += "#define gl_FragColor outColor".endl();
    }
    else
    {
        drawBufferStr += "#define MULTI_COLORTARGETS".endl();
        drawBufferStr += "vec4 outColor;".endl();

        let count = 0;
        for (let i = 0; i < this._drawBuffers.length; i++)
        {
            if (count == 0) drawBufferStr += "#define gl_FragColor outColor" + i + "".endl();
            drawBufferStr += "layout(location = " + i + ") out vec4 outColor" + i + ";".endl();
            count++;
        }
    }

    fs = fs.replace("{{DRAWBUFFER}}", drawBufferStr);
    // //////


    if (!this._program)
    {
        this._program = this._createProgram(vs, fs);
    }
    else
    {
        // this.vshader=createShader(vs, gl.VERTEX_SHADER, this.vshader );
        // this.fshader=createShader(fs, gl.FRAGMENT_SHADER, this.fshader );
        // linkProgram(program);
        this._program = this._createProgram(vs, fs);

        this._projMatrixUniform = null;

        for (let i = 0; i < this._uniforms.length; i++) this._uniforms[i].resetLoc();
    }

    this.finalShaderFrag = fs;
    this.finalShaderVert = vs;


    MESH.lastMesh = null;
    MESH.lastShader = null;

    this._countMissingUniforms = 0;
    this._needsRecompile = false;
    this.lastCompile = now();

    // this._cgl.printError("shader compile");

    this._cgl.profileData.shaderCompileTime += performance.now() - startTime;
};

Shader.hasChanged = function ()
{
    return this._needsRecompile;
};


Shader.prototype.bind = function ()
{
    if (!this._isValid || this._cgl.aborted) return;

    MESH.lastShader = this;

    if (!this._program || this._needsRecompile) this.compile();
    if (!this._isValid) return;

    if (!this._projMatrixUniform && !this.ignoreMissingUniforms)
    {
        this._countMissingUniforms++;
        // if (this._countMissingUniforms == 10)console.log("stopping getlocation of missing uniforms...", this._name);
        if (this._countMissingUniforms < 10)
        {
            this._projMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_PROJMAT);
            this._attrVertexPos = this._cgl.glGetAttribLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_POSITION);
            this._mvMatrixUniform = this._cgl.gl.getUniformLocation(this._program, "mvMatrix");
            this._vMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_VIEWMAT);
            this._mMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_MODELMAT);
            this._camPosUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_VIEWPOS);
            this._normalMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_NORMALMAT);
            this._inverseViewMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_INVVIEWMAT);
            this._inverseProjMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_INVPROJMAT);
            this._materialIdUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_MATERIALID);
            this._objectIdUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_OBJECTID);

            for (let i = 0; i < this._uniforms.length; i++) this._uniforms[i].needsUpdate = true;
        }
    }


    if (this._cgl.currentProgram != this._program)
    {
        this._cgl.profileData.profileShaderBinds++;
        this._cgl.gl.useProgram(this._program);
        this._cgl.currentProgram = this._program;
    }

    for (let i = 0; i < this._uniforms.length; i++)
        if (this._uniforms[i].needsUpdate) this._uniforms[i].updateValue();

    if (this._pMatrixState != this._cgl.getProjectionMatrixStateCount())
    {
        this._pMatrixState = this._cgl.getProjectionMatrixStateCount();
        this._cgl.gl.uniformMatrix4fv(this._projMatrixUniform, false, this._cgl.pMatrix);
        this._cgl.profileData.profileMVPMatrixCount++;
    }

    if (this._objectIdUniform)
        this._cgl.gl.uniform1f(this._objectIdUniform, ++this._cgl.frameStore.objectIdCounter);

    if (this._materialIdUniform)
        this._cgl.gl.uniform1f(this._materialIdUniform, this._materialId);

    if (this._vMatrixUniform)
    {
        if (this._vMatrixState != this._cgl.getViewMatrixStateCount())
        {
            this._cgl.gl.uniformMatrix4fv(this._vMatrixUniform, false, this._cgl.vMatrix);
            this._cgl.profileData.profileMVPMatrixCount++;
            this._vMatrixState = this._cgl.getViewMatrixStateCount();

            if (this._inverseViewMatrixUniform)
            {
                mat4.invert(this._tempInverseViewMatrix, this._cgl.vMatrix);
                this._cgl.gl.uniformMatrix4fv(this._inverseViewMatrixUniform, false, this._tempInverseViewMatrix);
                this._cgl.profileData.profileMVPMatrixCount++;
            }
            if (this._inverseProjMatrixUniform)
            {
                mat4.invert(this._tempInverseProjMatrix, this._cgl.pMatrix);
                this._cgl.gl.uniformMatrix4fv(this._inverseProjMatrixUniform, false, this._tempInverseProjMatrix);
                this._cgl.profileData.profileMVPMatrixCount++;
            }
        }
        this._cgl.gl.uniformMatrix4fv(this._mMatrixUniform, false, this._cgl.mMatrix);
        this._cgl.profileData.profileMVPMatrixCount++;

        if (this._camPosUniform)
        {
            mat4.invert(this._tempCamPosMatrix, this._cgl.vMatrix);
            this._cgl.gl.uniform3f(this._camPosUniform, this._tempCamPosMatrix[12], this._tempCamPosMatrix[13], this._tempCamPosMatrix[14]);
            this._cgl.profileData.profileMVPMatrixCount++;
        }
    }
    else
    {
        // mvmatrix deprecated....
        const tempmv = mat4.create();

        mat4.mul(tempmv, this._cgl.vMatrix, this._cgl.mMatrix);
        this._cgl.gl.uniformMatrix4fv(this._mvMatrixUniform, false, tempmv);
        this._cgl.profileData.profileMVPMatrixCount++;
    }

    if (this._normalMatrixUniform)
    {
        // mat4.mul(this._tempNormalMatrix, this._cgl.vMatrix, this._cgl.mMatrix);
        mat4.invert(this._tempNormalMatrix, this._cgl.mMatrix);
        mat4.transpose(this._tempNormalMatrix, this._tempNormalMatrix);

        this._cgl.gl.uniformMatrix4fv(this._normalMatrixUniform, false, this._tempNormalMatrix);
        this._cgl.profileData.profileMVPMatrixCount++;
    }

    for (let i = 0; i < this._libs.length; i++)
    {
        if (this._libs[i].onBind) this._libs[i].onBind.bind(this._libs[i])(this._cgl, this);
    }

    this._bindTextures();

    return this._isValid;
};

Shader.prototype.unBind = function ()
{
};

/**
 * easily enable/disable a define without a value
 * @function toggleDefine
 * @memberof Shader
 * @instance
 * @param {name} name
 * @param {any} enabled value or port
 */
Shader.prototype.toggleDefine = function (name, enabled)
{
    if (enabled && typeof (enabled) == "object" && enabled.addEventListener) // port
    {
        if (enabled.changeListener)enabled.removeEventListener(enabled.changeListener);

        enabled.onToggleDefine = (v) =>
        {
            this.toggleDefine(name, v);
        };

        enabled.changeListener = enabled.on("change", enabled.onToggleDefine);
        enabled = enabled.get();
    }

    if (enabled) this.define(name);
    else this.removeDefine(name);
};

/**
 * add a define to a shader, e.g.  #define DO_THIS_THAT 1
 * @function define
 * @memberof Shader
 * @instance
 * @param {String} name
 * @param {Any} value (can be empty)
 */
Shader.prototype.define = function (name, value)
{
    if (value === null || value === undefined) value = "";

    if (typeof (value) == "object") // port
    {
        value.removeEventListener("change", value.onDefineChange);
        value.onDefineChange = (v) =>
        {
            this.define(name, v);
        };
        value.on("change", value.onDefineChange);

        value = value.get();
    }


    for (let i = 0; i < this._defines.length; i++)
    {
        if (this._defines[i][0] == name && this._defines[i][1] == value) return;
        if (this._defines[i][0] == name)
        {
            this._defines[i][1] = value;
            this.setWhyCompile("define " + name + " " + value);

            this._needsRecompile = true;
            return;
        }
    }
    this.setWhyCompile("define " + name + " " + value);
    this._needsRecompile = true;
    this._defines.push([name, value]);
};

Shader.prototype.getDefines = function ()
{
    return this._defines;
};

Shader.prototype.getDefine = function (name)
{
    for (let i = 0; i < this._defines.length; i++)
        if (this._defines[i][0] == name) return this._defines[i][1];
    return null;
};

/**
 * return true if shader has define
 * @function hasDefine
 * @memberof Shader
 * @instance
 * @param {String} name
 * @return {Boolean}
 */
Shader.prototype.hasDefine = function (name)
{
    for (let i = 0; i < this._defines.length; i++)
        if (this._defines[i][0] == name) return true;
};

/**
 * remove a define from a shader
 * @param {name} name
 * @function removeDefine
 * @memberof Shader
 * @instance
 */
Shader.prototype.removeDefine = function (name)
{
    for (let i = 0; i < this._defines.length; i++)
    {
        if (this._defines[i][0] == name)
        {
            this._defines.splice(i, 1);
            this._needsRecompile = true;

            this.setWhyCompile("define removed:" + name);

            return;
        }
    }
};

/**
 * remove a module from shader
 * @function removeModule
 * @memberof Shader
 * @instance
 * @param {shaderModule} mod the module to be removed
 */
Shader.prototype.removeModule = function (mod)
{
    for (let i = 0; i < this._modules.length; i++)
    {
        if (mod && mod.id)
        {
            if (this._modules[i].id == mod.id || !this._modules[i])
            {
                let found = true;
                while (found)
                {
                    found = false;
                    for (let j = 0; j < this._uniforms.length; j++)
                    {
                        if (this._uniforms[j].getName().startsWith(mod.prefix))
                        {
                            this._uniforms.splice(j, 1);
                            found = true;
                            continue;
                        }
                    }
                }

                this._needsRecompile = true;
                this.setWhyCompile("remove module " + mod.title);
                this._modules.splice(i, 1);
                break;
            }
        }
    }
};


Shader.prototype.getNumModules = function ()
{
    return this._modules.length;
};


Shader.prototype.getCurrentModules = function () { return this._modules; };


/**
 * add a module
 * @function addModule
 * @memberof Shader
 * @instance
 * @param {shaderModule} mod the module to be added
 * @param {shaderModule} [sibling] sibling module, new module will share the same group
 */
Shader.prototype.addModule = function (mod, sibling)
{
    if (this.hasModule(mod.id)) return;
    if (!mod.id) mod.id = CABLES.simpleId();
    if (!mod.numId) mod.numId = this._moduleNumId;
    if (!mod.num)mod.num = this._modules.length;
    if (sibling && !sibling.group) sibling.group = simpleId();

    if (!mod.group)
        if (sibling) mod.group = sibling.group;
        else mod.group = simpleId();

    mod.prefix = "mod" + mod.group + "_";
    this._modules.push(mod);

    this._needsRecompile = true;
    this.setWhyCompile("add module " + mod.title);
    this._moduleNumId++;

    return mod;
};

Shader.prototype.hasModule = function (modId)
{
    for (let i = 0; i < this._modules.length; i++)
    {
        if (this._modules[i].id == modId) return true;
    }
    return false;
};

Shader.prototype.setModules = function (names)
{
    this._moduleNames = names;
};

Shader.prototype.dispose = function ()
{
    this._cgl.gl.deleteProgram(this._program);
};

Shader.prototype.needsRecompile = function ()
{
    return this._needsRecompile;
};

Shader.prototype.setDrawBuffers = function (arr)
{
    console.log("useless drawbuffers...?!");
    // if (this._drawBuffers.length !== arr.length)
    // {
    //     this._drawBuffers = arr;
    //     this._needsRecompile = true;
    //     this.setWhyCompile("setDrawBuffers");
    //     return;
    // }
    // for (let i = 0; i < arr.length; i++)
    // {
    //     if (arr[i] !== this._drawBuffers[i])
    //     {
    //         this._drawBuffers = arr;
    //         this._needsRecompile = true;
    //         this.setWhyCompile("setDrawBuffers");
    //         return;
    //     }
    // }
};

Shader.prototype.getUniforms = function ()
{
    return this._uniforms;
};

Shader.prototype.getUniform = function (name)
{
    for (let i = 0; i < this._uniforms.length; i++)
        if (this._uniforms[i].getName() == name)
            return this._uniforms[i];
    return null;
};

Shader.prototype.removeAllUniforms = function ()
{
    this._uniforms = [];
    // for (let i = 0; i < this._uniforms.length; i++)
    //     this.removeUniform(this._uniforms[i].name);
};

Shader.prototype.removeUniform = function (name)
{
    for (let i = 0; i < this._uniforms.length; i++)
    {
        if (this._uniforms[i].getName() == name)
        {
            this._uniforms.splice(i, 1);
        }
    }
    this._needsRecompile = true;
    this.setWhyCompile("remove uniform " + name);
};


Shader.prototype._addUniform = function (uni)
{
    this._uniforms.push(uni);
    this.setWhyCompile("add uniform " + name);
    this._needsRecompile = true;
};

/**
 * add a uniform to the fragment shader
 * @param {String} type ['f','t', etc]
 * @param {String} name
 * @param {any} valueOrPort value or port
 * @param p2
 * @param p3
 * @param p4
 * @memberof Shader
 * @instance
 * @function addUniformFrag
 * @returns {CGL.Uniform}
 */
Shader.prototype.addUniformFrag = function (type, name, valueOrPort, p2, p3, p4)
{
    const uni = new CGL.Uniform(this, type, name, valueOrPort, p2, p3, p4);
    uni.shaderType = "frag";
    return uni;
};

/**
 * add a uniform to the vertex shader
 * @param {String} type ['f','t', etc]
 * @param {String} name
 * @param {any} valueOrPort value or port
 * @param p2
 * @param p3
 * @param p4
 * @memberof Shader
 * @instance
 * @function addUniformVert
 * @returns {CGL.Uniform}
 */
Shader.prototype.addUniformVert = function (type, name, valueOrPort, p2, p3, p4)
{
    const uni = new CGL.Uniform(this, type, name, valueOrPort, p2, p3, p4);
    uni.shaderType = "vert";
    return uni;
};
/**
 * add a uniform to both shaders
 * @param {String} type ['f','t', etc]
 * @param {String} name
 * @param {any} valueOrPort value or port
 * @param p2
 * @param p3
 * @param p4
 * @memberof Shader
 * @instance
 * @function addUniformBoth
 * @returns {CGL.Uniform}
 */
Shader.prototype.addUniformBoth = function (type, name, valueOrPort, p2, p3, p4)
{
    const uni = new CGL.Uniform(this, type, name, valueOrPort, p2, p3, p4);
    uni.shaderType = "both";
    return uni;
};

/**
 * add a struct & its uniforms to the fragment shader
 * @param {String} structName name of the struct, i.e.: LightStruct
 * @param {String} uniformName name of the struct uniform in the shader, i.e.: lightUni
 * @param {Array} members array of objects containing the struct members. see example for structure

 * @memberof Shader
 * @instance
 * @function addUniformStructFrag
 * @returns {Object}
 * @example
 * const shader = new CGL.Shader(cgl, 'MinimalMaterial');
 * shader.setSource(attachments.shader_vert, attachments.shader_frag);
 * shader.addUniformStructFrag("Light", "uniformLight", [
 * { "type": "3f", "name": "position", "v1": null },
 * { "type": "4f", "name": "color", "v1": inR, v2: inG, v3: inB, v4: inAlpha }
 * ]);
 */
Shader.prototype.addUniformStructFrag = function (structName, uniformName, members)
{
    const uniforms = {};

    if (!members) return uniforms;

    for (let i = 0; i < members.length; i += 1)
    {
        const member = members[i];
        if (!this.hasUniform(uniformName + "." + member.name))
        {
            const uni = new CGL.Uniform(this, member.type, uniformName + "." + member.name, member.v1, member.v2, member.v3, member.v4, uniformName, structName, member.name);
            uni.shaderType = "frag";
            uniforms[uniformName + "." + member.name] = uni;
        }
    }

    return uniforms;
};

/**
 * add a struct & its uniforms to the vertex shader
 * @param {String} structName name of the struct, i.e.: LightStruct
 * @param {String} uniformName name of the struct uniform in the shader, i.e.: lightUni
 * @param {Array} members array of objects containing the struct members. see example for structure

 * @memberof Shader
 * @instance
 * @function addUniformStructVert
 * @returns {CGL.Uniform}
 * @example
 * const shader = new CGL.Shader(cgl, 'MinimalMaterial');
 * shader.setSource(attachments.shader_vert, attachments.shader_frag);
 * shader.addUniformStructVert("Light", "uniformLight", [
 * { "type": "3f", "name": "position", "v1": null },
 * { "type": "4f", "name": "color", "v1": inR, v2: inG, v3: inB, v4: inAlpha }
 * ]);
 */
Shader.prototype.addUniformStructVert = function (structName, uniformName, members)
{
    const uniforms = {};

    if (!members) return uniforms;

    for (let i = 0; i < members.length; i += 1)
    {
        const member = members[i];
        if (!this.hasUniform(uniformName + "." + member.name))
        {
            const uni = new CGL.Uniform(this, member.type, uniformName + "." + member.name, member.v1, member.v2, member.v3, member.v4, uniformName, structName, member.name);
            uni.shaderType = "vert";
            uniforms[uniformName + "." + member.name] = uni;
        }
    }

    return uniforms;
};

/**
 * add a struct & its uniforms to the both shaders. PLEASE NOTE: it is not possible to add the same struct to both shaders when it contains ANY integer members.
 * @param {String} structName name of the struct, i.e.: LightStruct
 * @param {String} uniformName name of the struct uniform in the shader, i.e.: lightUni
 * @param {Array} members array of objects containing the struct members. see example for structure

 * @memberof Shader
 * @instance
 * @function addUniformStructBoth
 * @returns {Object}
 * @example
 * const shader = new CGL.Shader(cgl, 'MinimalMaterial');
 * shader.setSource(attachments.shader_vert, attachments.shader_frag);
 * shader.addUniformStructBoth("Light", "uniformLight", [
 * { "type": "3f", "name": "position", "v1": null },
 * { "type": "4f", "name": "color", "v1": inR, v2: inG, v3: inB, v4: inAlpha }
 * ]);
 */
Shader.prototype.addUniformStructBoth = function (structName, uniformName, members)
{
    const uniforms = {};

    if (!members) return uniforms;

    for (let i = 0; i < members.length; i += 1)
    {
        const member = members[i];
        if ((member.type === "2i" || member.type === "i" || member.type === "3i"))
            this._log.error("Adding an integer struct member to both shaders can potentially error. Please use different structs for each shader. Error occured in struct:", structName, " with member:", member.name, " of type:", member.type, ".");
        if (!this.hasUniform(uniformName + "." + member.name))
        {
            const uni = new CGL.Uniform(this, member.type, uniformName + "." + member.name, member.v1, member.v2, member.v3, member.v4, uniformName, structName, member.name);
            uni.shaderType = "both";
            uniforms[uniformName + "." + member.name] = uni;
        }
    }

    return uniforms;
};

Shader.prototype.hasUniform = function (name)
{
    for (let i = 0; i < this._uniforms.length; i++)
    {
        if (this._uniforms[i].getName() == name) return true;
    }
    return false;
};

Shader.prototype._createProgram = function (vstr, fstr)
{
    this._cgl.printError("before _createprogram");

    const program = this._cgl.gl.createProgram();

    this.vshader = Shader.createShader(this._cgl, vstr, this._cgl.gl.VERTEX_SHADER, this);
    this.fshader = Shader.createShader(this._cgl, fstr, this._cgl.gl.FRAGMENT_SHADER, this);


    if (this.vshader && this.fshader)
    {
        this._cgl.gl.attachShader(program, this.vshader);
        this._cgl.gl.attachShader(program, this.fshader);

        this._linkProgram(program, vstr, fstr);
    }
    else
    {
        this._isValid = false;
        this._cgl.printError("shader _createProgram");
        this._log.error("could not link shaderprogram");
        return null;
    }

    this._cgl.printError("shader _createProgram");
    return program;
};

Shader.prototype.hasErrors = function ()
{
    return this._hasErrors;
};

Shader.prototype._linkProgram = function (program, vstr, fstr)
{
    this._cgl.printError("before _linkprogram");

    if (this._feedBackNames.length > 0)
    {
        this._cgl.gl.transformFeedbackVaryings(program, this._feedBackNames, this._cgl.gl.SEPARATE_ATTRIBS);
        // INTERLEAVED_ATTRIBS
        // SEPARATE_ATTRIBS
    }

    this._cgl.gl.linkProgram(program);
    this._cgl.printError("gl.linkprogram");
    this._isValid = true;

    this._hasErrors = false;

    if (this._cgl.patch.config.glValidateShader !== false)
    {
        this._cgl.gl.validateProgram(program);

        if (!this._cgl.gl.getProgramParameter(program, this._cgl.gl.VALIDATE_STATUS))
        {
            // validation failed
            console.log("shaderprogram validation failed...");
            console.log(this._name + " programinfo: ", this._cgl.gl.getProgramInfoLog(program));
        }

        if (!this._cgl.gl.getProgramParameter(program, this._cgl.gl.LINK_STATUS))
        {
            this._hasErrors = true;

            const infoLogFrag = this._cgl.gl.getShaderInfoLog(this.fshader);
            const infoLogVert = this._cgl.gl.getShaderInfoLog(this.vshader);

            if (infoLogFrag) this._log.warn(this._cgl.gl.getShaderInfoLog(this.fshader));
            if (infoLogVert) this._log.warn(this._cgl.gl.getShaderInfoLog(this.vshader));

            this._log.error(this._name + " shader linking fail...");

            console.log(this._name + " programinfo: ", this._cgl.gl.getProgramInfoLog(program));
            console.log(this);
            this._isValid = false;

            this._name = "errorshader";
            this.setSource(Shader.getDefaultVertexShader(), Shader.getErrorFragmentShader());
            this._cgl.printError("shader link err");
        }
    }
};

Shader.prototype.getProgram = function ()
{
    return this._program;
};

Shader.prototype.setFeedbackNames = function (names)
{
    this.setWhyCompile("setFeedbackNames");
    this._needsRecompile = true;
    this._feedBackNames = names;
};

Shader.prototype.getDefaultVertexShader = Shader.getDefaultVertexShader = function ()
{
    return cgl_shader_default_glsl;
};

Shader.prototype.getDefaultFragmentShader = Shader.getDefaultFragmentShader = function (r, g, b)
{
    if (r == undefined)
    {
        r = 0.5;
        g = 0.5;
        b = 0.5;
    }
    return ""
        .endl() + "IN vec2 texCoord;"
        .endl() + "{{MODULES_HEAD}}"
        .endl() + "void main()"
        .endl() + "{"
        .endl() + "    vec4 col=vec4(" + r + "," + g + "," + b + ",1.0);"
        .endl() + "    {{MODULE_COLOR}}"
        .endl() + "    outColor = col;"
        .endl() + "}";
};

/**
  * adds attribute definition to shader header without colliding with other shader modules...
 * when attrFrag is defined, vertex shader will output this attribute to the fragment shader
 * @function
 * @memberof Shader
 * @instance
 * @param {Object} attr {type:x,name:x,[nameFrag:x]}
 * @return {Object}
 */
Shader.prototype.addAttribute = function (attr)
{
    for (let i = 0; i < this._attributes.length; i++)
    {
        if (this._attributes[i].name == attr.name && this._attributes[i].nameFrag == attr.nameFrag) return;
    }
    this._attributes.push(attr);
    this._needsRecompile = true;
    this.setWhyCompile("addAttribute");
};

Shader.prototype.bindTextures =
Shader.prototype._bindTextures = function ()
{
    if (this._textureStackTex.length > this._cgl.maxTextureUnits)
    {
        this._log.warn("[shader._bindTextures] too many textures bound", this._textureStackTex.length + "/" + this._cgl.maxTextureUnits);
    }

    // for (let i = this._textureStackTex.length + 1; i < this._cgl.maxTextureUnits; i++) this._cgl.setTexture(i, null);

    for (let i = 0; i < this._textureStackTex.length; i++)
    {
        // console.log(this._textureStackTex.length, i);
        if (!this._textureStackTex[i] && !this._textureStackTexCgl[i])
        {
            this._log.warn("no texture for pushtexture", this._name);
        }
        else
        {
            let t = this._textureStackTex[i];
            if (this._textureStackTexCgl[i])
            {
                t = this._textureStackTexCgl[i].tex || CGL.Texture.getEmptyTexture(this._cgl).tex;
            }

            let bindOk = true;

            if (!this._textureStackUni[i])
            {
                // throw(new Error('no uniform given to texturestack'));
                this._log.warn("no uniform for pushtexture", this._name);
                bindOk = this._cgl.setTexture(i, t, this._textureStackType[i]);
            }
            else
            {
                this._textureStackUni[i].setValue(i);
                bindOk = this._cgl.setTexture(i, t, this._textureStackType[i]);

                // console.log(bindOk, i, t, this._textureStackType[i]);
            }
            if (!bindOk) console.warn("tex bind failed", this.getName(), this._textureStackUni[i]);
        }
    }
};

Shader.prototype.setUniformTexture = function (uni, tex)
{
    tex = tex || CGL.Texture.getTempTexture(this._cgl);
    for (let i = 0; i < this._textureStackUni.length; i++)
        if (this._textureStackUni[i] == uni)
        {
            const old = this._textureStackTex[i] || this._textureStackTexCgl[i];
            if (tex.hasOwnProperty("tex"))
            {
                this._textureStackTexCgl[i] = tex;
                this._textureStackTex[i] = null;
            }
            else
            {
                this._textureStackTexCgl[i] = null;
                this._textureStackTex[i] = tex;
            }

            // this._textureStackTex[i] = tex;
            // this._cgl.setTexture(i, tex, this._textureStackType[i]);
            return old;
        }
    return null;
};

/**
 * push a texture on the stack. those textures will be bound when binding the shader. texture slots are automatically set
 * @param {uniform} uniform texture uniform
 * @param {texture} t texture
 * @param {type} type texture type, can be ignored when TEXTURE_2D
 * @function pushTexture
 * @memberof Shader
 * @instance
 */
Shader.prototype.pushTexture = function (uniform, t, type)
{
    if (!uniform)
    {
        console.log("no uniform given to texturestack", uniform);
        return;
    }
    if (!t)
    {
        console.log("no tex...");
        return;
    }
    if (!t.hasOwnProperty("tex") && !(t instanceof WebGLTexture))
    {
        this._log.warn(new Error("invalid texture").stack);

        this._log.warn("[cgl_shader] invalid texture...", t);
        return;
    }

    this._textureStackUni.push(uniform);

    if (t.hasOwnProperty("tex"))
    {
        this._textureStackTexCgl.push(t);
        this._textureStackTex.push(null);
    }
    else
    {
        this._textureStackTexCgl.push(null);
        this._textureStackTex.push(t);
    }

    this._textureStackType.push(type);
};

/**
 * pop last texture
 * @function popTexture
 * @memberof Shader
 * @instance
 */
Shader.prototype.popTexture = function ()
{
    this._textureStackUni.pop();
    this._textureStackTex.pop();
    this._textureStackTexCgl.pop();
    this._textureStackType.pop();
};

/**
 * pop all textures
 * @function popTextures
 * @memberof Shader
 * @instance
 */
Shader.prototype.popTextures = function ()
{
    this._textureStackTex.length =
    this._textureStackTexCgl.length =
    this._textureStackType.length =
    this._textureStackUni.length = 0;
};

Shader.prototype.getMaterialId = function ()
{
    return this._materialId;
};

Shader.prototype.getInfo = function ()
{
    const info = {};
    info.name = this._name;
    // info.modules = JSON.parse(JSON.stringify(this._modules));
    // info.defines = JSON.parse(JSON.stringify(this._defines));
    info.defines = this.getDefines();
    info.hasErrors = this.hasErrors();

    return info;
};

// --------------------------

Shader.getErrorFragmentShader = function ()
{
    return ""
        .endl() + "void main()"
        .endl() + "{"
        .endl() + "   float g=mod((gl_FragCoord.y+gl_FragCoord.x),50.0)/50.0;"
        .endl() + "   g= step(0.1,g);"
        .endl() + "   outColor = vec4( g+0.5, 0.0, 0.0, 1.0);"
        .endl() + "}";
};

Shader.createShader = function (cgl, str, type, cglShader)
{
    if (cgl.aborted) return;

    // cgl.printError("[Shader.createShader] ", cglShader._name);

    function getBadLines(infoLog)
    {
        const basLines = [];
        const lines = infoLog.split("\n");
        for (const i in lines)
        {
            const divide = lines[i].split(":");
            if (parseInt(divide[2], 10)) basLines.push(parseInt(divide[2], 10));
        }
        return basLines;
    }


    const shader = cgl.gl.createShader(type);
    cgl.gl.shaderSource(shader, str);
    cgl.gl.compileShader(shader);

    if (!cgl.gl.getShaderParameter(shader, cgl.gl.COMPILE_STATUS))
    {
        let infoLog = cgl.gl.getShaderInfoLog(shader);
        if (!infoLog)
        {
            console.warn("empty shader info log", this._name);
            return;
        }


        const badLines = getBadLines(infoLog);
        let htmlWarning = "<pre style=\"margin-bottom:0px;\"><code class=\"shaderErrorCode language-glsl\" style=\"padding-bottom:0px;max-height: initial;max-width: initial;\">";
        const lines = str.match(/^.*((\r\n|\n|\r)|$)/gm);

        if (!cgl.aborted && infoLog)
        {
            if (type == cgl.gl.VERTEX_SHADER) console.log("VERTEX_SHADER");
            if (type == cgl.gl.FRAGMENT_SHADER) console.log("FRAGMENT_SHADER");

            for (const i in lines)
            {
                const j = parseInt(i, 10) + 1;
                const line = j + ": " + lines[i];

                let isBadLine = false;
                for (const bj in badLines)
                    if (badLines[bj] == j) isBadLine = true;

                if (isBadLine)
                {
                    htmlWarning += "</code></pre>";
                    htmlWarning += "<pre style=\"margin:0\"><code class=\"language-glsl\" style=\"background-color:#660000;padding-top:0px;padding-bottom:0px\">";

                    cglShader._log.log("bad line: `" + line + "`");
                }
                htmlWarning += escapeHTML(line);

                if (isBadLine)
                {
                    htmlWarning += "</code></pre>";
                    htmlWarning += "<pre style=\"margin:0\"><code class=\"language-glsl\" style=\";padding-top:0px;padding-bottom:0px\">";
                }
            }
        }

        infoLog = infoLog.replace(/\n/g, "<br/>");
        if (cgl.patch.isEditorMode())console.log("Shader error ", cglShader._name, infoLog, this);

        htmlWarning = infoLog + "<br/>" + htmlWarning + "<br/><br/>";
        htmlWarning += "</code></pre>";

        if (this._fromUserInteraction)
        {
            // console.log("todo show modal?");
            // cgl.patch.emitEvent("criticalError", { "title": "Shader error " + cglShader._name, "text": htmlWarning, "exception": { "message": infoLog } });
        }

        cglShader.setSource(Shader.getDefaultVertexShader(), Shader.getErrorFragmentShader());
    }
    else
    {
        // console.log(name+' shader compiled...');
    }
    // cgl.printError("shader create2");
    return shader;
};




;// CONCATENATED MODULE: ./src/core/cgl/cgl_profiledata.js
class ProfileData
{
    constructor(cgl)
    {
        this._cgl = cgl;
        this._lastTime = 0;
        this.pause = false;
        this.profileUniformCount = 0;
        this.profileShaderBinds = 0;
        this.profileUniformCount = 0;
        this.profileShaderCompiles = 0;
        this.profileVideosPlaying = 0;
        this.profileMVPMatrixCount = 0;
        this.profileEffectBuffercreate = 0;
        this.profileShaderGetUniform = 0;
        this.profileFrameBuffercreate = 0;
        this.profileMeshSetGeom = 0;
        this.profileTextureNew = 0;
        this.profileGenMipMap = 0;
        this.profileOnAnimFrameOps = 0;

        this.profileFencedPixelRead = 0;
        this.profileMainloopMs = 0;
        this.profileMeshDraw = 0;
        this.profileTextureEffect = 0;
        this.profileTexPreviews = 0;
        this.shaderCompileTime = 0;
        this.profileMeshNumElements = 0;
        this.profileMeshAttributes = 0;
        this.profileSingleMeshAttribute = [];
        this.heavyEvents = [];

        this.doProfileGlQuery = false;
        this.glQueryData = {};
    }

    clear()
    {
        this.profileSingleMeshAttribute = {};
        this.profileMeshAttributes = 0;
        this.profileUniformCount = 0;
        this.profileShaderGetUniform = 0;
        this.profileShaderCompiles = 0;
        this.profileShaderBinds = 0;
        this.profileTextureResize = 0;
        this.profileFrameBuffercreate = 0;
        this.profileEffectBuffercreate = 0;
        this.profileTextureDelete = 0;
        this.profileMeshSetGeom = 0;
        this.profileVideosPlaying = 0;
        this.profileMVPMatrixCount = 0;
        this.profileNonTypedAttrib = 0;
        this.profileNonTypedAttribNames = "";
        this.profileTextureNew = 0;
        this.profileGenMipMap = 0;
        this.profileFramebuffer = 0;
        this.profileMeshDraw = 0;
        this.profileTextureEffect = 0;
        this.profileTexPreviews = 0;
        this.profileMeshNumElements = 0;
        this.profileFencedPixelRead = 0;
    }

    clearGlQuery()
    {
        for (let i in this.glQueryData)
        {
            if (!this.glQueryData[i].lastClear || performance.now() - this.glQueryData[i].lastClear > 1000)
            {
                this.glQueryData[i].time = this.glQueryData[i]._times / this.glQueryData[i]._numcount;
                this.glQueryData[i].num = this.glQueryData[i]._numcount;

                this.glQueryData[i]._times = 0;
                this.glQueryData[i]._numcount = 0;
                this.glQueryData[i].lastClear = performance.now();
            }
        }
    }

    addHeavyEvent(event, name, info)
    {
        const e = { "event": event, "name": name, "info": info, "date": performance.now() };
        this.heavyEvents.push(e);
        this._cgl.emitEvent("heavyEvent", e);
    }
}




;// CONCATENATED MODULE: ../shared/client/src/helper.js
/**
 * Shared helper methods for cables uis
 */
class Helper
{
    constructor()
    {
        this._simpleIdCounter = 0;
    }


    /**
     * generate a random v4 uuid
     *
     * @return {string}
     */
    uuid()
    {
        let d = new Date().getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) =>
        {
            const r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
        });
    }

    /**
     * checks value for !isNan and isFinite
     *
     * @param n
     * @return {boolean}
     */
    isNumeric(n)
    {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    /**
     * generate a simple ID using an internal counter
     *
     * @return {Number} new id
     * @static
     */
    simpleId()
    {
        this._simpleIdCounter++;
        return this._simpleIdCounter;
    }

    deletePropertyByPath(obj, path)
    {
        if (!obj || !path)
        {
            return;
        }

        if (typeof path === "string")
        {
            path = path.split(".");
        }

        for (let i = 0; i < path.length - 1; i++)
        {
            obj = obj[path[i]];

            if (typeof obj === "undefined")
            {
                return;
            }
        }

        delete obj[path.pop()];
    }
}
/* harmony default export */ const helper = (new Helper());

;// CONCATENATED MODULE: ../shared/client/src/eventtarget.js



/**
 * add eventlistener functionality to classes
 */
class Events
{
    constructor()
    {
        this._log = new Logger("eventtarget");
        this._eventCallbacks = {};
        this._logName = "";
        this._logEvents = false;
        this._listeners = {};

        this.on = this.addEventListener;
        this.off = this.removeEventListener;
    }

    /**
     * add event listener
     * @param which event name
     * @param cb callback
     * @param {string} idPrefix prefix for id, default empty
     * @return {string} event id
     */
    addEventListener(which, cb, idPrefix = "")
    {
        const event =
            {
                "id": (idPrefix || "") + helper.simpleId(),
                "name": which,
                "cb": cb,
            };
        if (!this._eventCallbacks[which]) this._eventCallbacks[which] = [event];
        else this._eventCallbacks[which].push(event);

        this._listeners[event.id] = event;

        return event.id;
    }

    /**
     * check event listener registration
     * @param id event id
     * @param cb callback - deprecated
     * @return {boolean}
     */
    hasEventListener(id, cb = null)
    {
        if (id && !cb)
        {
            // check by id
            return !!this._listeners[id];
        }
        else
        {
            this._log.warn("old eventtarget function haseventlistener!");
            if (id && cb)
            {
                if (this._eventCallbacks[id])
                {
                    const idx = this._eventCallbacks[id].indexOf(cb);
                    return idx !== -1;
                }
            }
        }
    }

    /**
     * check event listener by name
     * @param eventName event name
     * @return {boolean}
     */
    hasListenerForEventName(eventName)
    {
        return this._eventCallbacks[eventName] && this._eventCallbacks[eventName].length > 0;
    }

    /**
     * rempve event listener registration
     * @param id event id
     * @param cb callback - deprecated
     * @return
     */
    removeEventListener(id, cb = null)
    {
        if (id === null || id === undefined) return;

        if (!cb) // new style, remove by id, not by name/callback
        {
            const event = this._listeners[id];
            if (!event)
            {
                this._log.log("could not find event...");
                return;
            }

            let found = true;
            while (found)
            {
                found = false;
                let index = -1;
                for (let i = 0; i < this._eventCallbacks[event.name].length; i++)
                {
                    if (this._eventCallbacks[event.name][i].id.indexOf(id) === 0) // this._eventCallbacks[event.name][i].id == which ||
                    {
                        found = true;
                        index = i;
                    }
                }

                if (index !== -1)
                {
                    this._eventCallbacks[event.name].splice(index, 1);
                    delete this._listeners[id];
                }
            }

            return;
        }

        this._log.info("[eventtaget] ", "old function signature: removeEventListener! use listener id");
        this._log.log((new Error()).stack);

        let index = null;
        for (let i = 0; i < this._eventCallbacks[id].length; i++)
            if (this._eventCallbacks[id][i].cb === cb)
                index = i;

        if (index !== null)
        {
            delete this._eventCallbacks[index];
        }
        else this._log.warn("removeEventListener not found " + id);
    }

    /**
     * enable/disable logging of events for the class
     *
     * @param {boolean} enabled
     * @param {string} logName
     */
    logEvents(enabled, logName)
    {
        this._logEvents = enabled;
        this._logName = logName;
    }

    /**
     * emit event
     *
     * @param {string} which event name
     * @param {*} param1
     * @param {*} param2
     * @param {*} param3
     * @param {*} param4
     * @param {*} param5
     * @param {*} param6
     */
    emitEvent(which, param1 = null, param2 = null, param3 = null, param4 = null, param5 = null, param6 = null)
    {
        if (this._logEvents) this._log.log("[event] ", this._logName, which, this._eventCallbacks);

        if (this._eventCallbacks[which])
        {
            for (let i = 0; i < this._eventCallbacks[which].length; i++)
            {
                if (this._eventCallbacks[which][i])
                {
                    this._eventCallbacks[which][i].cb(param1, param2, param3, param4, param5, param6);
                }
            }
        }
        else
        {
            if (this._logEvents) this._log.log("[event] has no event callback", which, this._eventCallbacks);
        }
    }
}


;// CONCATENATED MODULE: ./src/core/cg/cg_canvas.js
class CgCanvas
{
    constructor(options)
    {
        if (!options)
        {
            console.error("CgCanvas no options");
        }
        else
        {
            this._canvasEle = options.canvasEle;
        }

        if (!options.cg)console.error("CgCanvas options has no cg");
        if (!options.canvasEle)console.error("CgCanvas options has no canvasEle");

        this._cg = options.cg;
        this.pixelDensity = 1;
        this.canvasWidth = this.canvasEle.clientWidth;
        this.canvasHeight = this.canvasEle.clientHeight;

        this._oldWidthRp = -1;
        this._oldHeightRp = -1;

        this.setSize(this.canvasWidth, this.canvasHeight);
    }

    get canvasEle() { return this._canvasEle; }


    setSize(w, h, ignorestyle)
    {
        if (this._oldWidthRp != w * this.pixelDensity || this._oldHeightRp != h * this.pixelDensity)
        {
            this._oldWidthRp = this.canvasEle.width = w * this.pixelDensity;
            this._oldHeightRp = this.canvasEle.height = h * this.pixelDensity;

            if (!ignorestyle)
            {
                this.canvasEle.style.width = w + "px";
                this.canvasEle.style.height = h + "px";
            }

            this.updateSize();

            this._cg.emitEvent("resize");
        }
    }

    updateSize()
    {
        this.canvasEle.width = this.canvasWidth = this.canvasEle.clientWidth * this.pixelDensity;
        this.canvasEle.height = this.canvasHeight = this.canvasEle.clientHeight * this.pixelDensity;
    }

    dispose()
    {
        this._canvasEle.remove();
        this._canvasEle = null;
    }
}



;// CONCATENATED MODULE: ./src/core/cg/cg_matrixstack.js

const MatrixStack = function ()
{
    this._arr = [mat4.create()];
    this._index = 0;
    this.stateCounter = 0;
};

MatrixStack.prototype.push = function (m)
{
    this._index++;
    this.stateCounter++;

    if (this._index == this._arr.length)
    {
        const copy = mat4.create();
        this._arr.push(copy);
    }

    mat4.copy(this._arr[this._index], m || this._arr[this._index - 1]);

    return this._arr[this._index];
};

MatrixStack.prototype.pop = function ()
{
    this.stateCounter++;

    this._index--;
    if (this._index < 0) this._index = 0;

    return this._arr[this._index];
};

MatrixStack.prototype.length = function ()
{
    return this._index;
};



;// CONCATENATED MODULE: ./src/core/cg/cg_state.js





// const CGState ()
class CGState extends Events
{
    constructor(_patch)
    {
        super();
        // this.canvas = null;

        this.fpsCounter = new CABLES.CG.FpsCounter();
        this._identView = vec3.create();
        this._ident = vec3.create();
        vec3.set(this._identView, 0, 0, -2);
        vec3.set(this._ident, 0, 0, 0);

        this.patch = _patch;

        this.DEPTH_COMPARE_FUNC_NEVER = 0;
        this.DEPTH_COMPARE_FUNC_LESS = 1;
        this.DEPTH_COMPARE_FUNC_EQUAL = 2;
        this.DEPTH_COMPARE_FUNC_LESSEQUAL = 3;
        this.DEPTH_COMPARE_FUNC_GREATER = 4;
        this.DEPTH_COMPARE_FUNC_NOTEQUAL = 5;
        this.DEPTH_COMPARE_FUNC_GREATEREQUAL = 6;
        this.DEPTH_COMPARE_FUNC_ALWAYS = 7;


        /**
         * Current projection matrix
         * @memberof Context
         * @instance
         * @type {mat4}
         */
        this.pMatrix = mat4.create();

        /**
         * Current model matrix
         * @memberof Context
         * @instance
         * @type {mat4}
         */
        this.mMatrix = mat4.create();

        /**
         * Current view matrix
         * @memberof Context
         * @instance
         * @type {mat4}
         */
        this.vMatrix = mat4.create();
        this._textureslots = [];

        this._pMatrixStack = new MatrixStack();
        this._mMatrixStack = new MatrixStack();
        this._vMatrixStack = new MatrixStack();

        this.canvasScale = 1;

        mat4.identity(this.mMatrix);
        mat4.identity(this.vMatrix);


        window.matchMedia("screen and (min-resolution: 2dppx)")
            .addEventListener("change", (e) =>
            {
                this.emitEvent("resize");
            });
    }

    get canvasWidth()
    {
        return this.cgCanvas.canvasWidth;
    }

    get canvasHeight()
    {
        return this.cgCanvas.canvasHeight;
    }

    set pixelDensity(p)
    {
        if (this.cgCanvas.pixelDensity != p)
        {
            this.cgCanvas.pixelDensity = p;
            this.cgCanvas.updateSize();
            this.emitEvent("resize");
        }
    }

    get pixelDensity()
    {
        return this.cgCanvas.pixelDensity;
    }


    getGApiName()
    {
        return ["WebGL", "WebGPU"][this.gApi];
    }

    get canvas()
    {
        return this.cgCanvas.canvasEle;
    }



    setCanvas(canvEle)
    {
        if (this.cgCanvas && canvEle == this.cgCanvas.canvasEle) return;
        if (typeof canvEle === "string") canvEle = document.getElementById(canvEle);

        this.cgCanvas = new CgCanvas({ "canvasEle": canvEle, "cg": this });

        canvEle.parentElement.classList.add("cablesContainer");
        if (this._setCanvas) this._setCanvas(canvEle);

        this.updateSize();
    }

    updateSize()
    {
        this.cgCanvas.updateSize();
    }

    setSize(w, h, ignorestyle)
    {
        this.cgCanvas.setSize(w, h, ignorestyle);
    }

    _resizeToWindowSize()
    {
        this.setSize(window.innerWidth, window.innerHeight);
        this.updateSize();
    }

    _resizeToParentSize()
    {
        const p = this.canvas.parentElement;
        if (!p)
        {
            this._log.error("cables: can not resize to container element");
            return;
        }
        this.setSize(p.clientWidth, p.clientHeight);

        this.updateSize();
    }

    setAutoResize(parent)
    {
        window.removeEventListener("resize", this._resizeToWindowSize.bind(this));
        window.removeEventListener("resize", this._resizeToParentSize.bind(this));

        if (parent == "window")
        {
            window.addEventListener("resize", this._resizeToWindowSize.bind(this));
            window.addEventListener("orientationchange", this._resizeToWindowSize.bind(this));
            this._resizeToWindowSize();
        }
        if (parent == "parent")
        {
            window.addEventListener("resize", this._resizeToParentSize.bind(this));
            this._resizeToParentSize();
        }
    }

    /**
     * push a matrix to the projection matrix stack
     * @function pushPMatrix
     * @memberof Context
     * @instance
     */
    pushPMatrix()
    {
        this.pMatrix = this._pMatrixStack.push(this.pMatrix);
    }

    /**
      * pop projection matrix stack
      * @function popPMatrix
      * @memberof Context
      * @instance
      * @returns {mat4} current projectionmatrix
      */
    popPMatrix()
    {
        this.pMatrix = this._pMatrixStack.pop();
        return this.pMatrix;
    }

    getProjectionMatrixStateCount()
    {
        return this._pMatrixStack.stateCounter;
    }

    /**
      * push a matrix to the model matrix stack
      * @function pushModelMatrix
      * @memberof Context
      * @instance
      * @example
      * // see source code of translate op:
      * cgl.pushModelMatrix();
      * mat4.translate(cgl.mMatrix,cgl.mMatrix, vec);
      * trigger.trigger();
      * cgl.popModelMatrix();
      */
    pushModelMatrix()
    {
        this.mMatrix = this._mMatrixStack.push(this.mMatrix);
    }

    /**
      * pop model matrix stack
      * @function popModelMatrix
      * @memberof Context
      * @instance
      * @returns {mat4} current modelmatrix
      */
    popModelMatrix()
    {
        // todo: DEPRECATE
        // if (this._mMatrixStack.length === 0) throw "Invalid modelview popMatrix!";
        this.mMatrix = this._mMatrixStack.pop();
        return this.mMatrix;
    }

    /**
      * get model matrix
      * @function modelMatrix
      * @memberof Context
      * @instance
      * @returns {mat4} current modelmatrix
      */
    modelMatrix()
    {
        return this.mMatrix;
    }


    /**
     * push a matrix to the view matrix stack
     * @function pushviewMatrix
     * @memberof Context
     * @instance
     */
    pushViewMatrix()
    {
        this.vMatrix = this._vMatrixStack.push(this.vMatrix);
    }

    /**
      * pop view matrix stack
      * @function popViewMatrix
      * @memberof Context
      * @instance
      * @returns {mat4} current viewmatrix
      * @function
      */
    popViewMatrix()
    {
        this.vMatrix = this._vMatrixStack.pop();
    }

    getViewMatrixStateCount()
    {
        return this._vMatrixStack.stateCounter;
    }

    _startMatrixStacks(identTranslate, identTranslateView)
    {
        identTranslate = identTranslate || this._ident;
        identTranslateView = identTranslateView || this._identView;

        mat4.perspective(this.pMatrix, 45, this.canvasWidth / this.canvasHeight, 0.1, 1000.0);

        mat4.identity(this.mMatrix);
        mat4.identity(this.vMatrix);
        mat4.translate(this.mMatrix, this.mMatrix, identTranslate);
        mat4.translate(this.vMatrix, this.vMatrix, identTranslateView);

        this.pushPMatrix();
        this.pushModelMatrix();
        this.pushViewMatrix();
    }

    _endMatrixStacks()
    {
        this.popViewMatrix();
        this.popModelMatrix();
        this.popPMatrix();
    }

    dispose()
    {
        this.aborted = true;
        if (this.cgCanvas) this.cgCanvas.dispose();
        if (this._dispose) this._dispose();
    }
}





;// CONCATENATED MODULE: ./src/core/cg/sg_fpscounter.js


class FpsCounter extends Events
{
    constructor()
    {
        super();
        this._timeStartFrame = 0;
        this._timeStartSecond = 0;
        this._fpsCounter = 0;
        this._msCounter = 0;
        this._frameCount = 0;

        this.stats = { "ms": 0, "fps": 0 };
    }

    get frameCount()
    {
        return this._frameCount;
    }

    startFrame()
    {
        this._timeStartFrame = CABLES.now();
    }

    endFrame()
    {
        this._frameCount++;
        this._fpsCounter++;

        const timeFrame = CABLES.now() - this._timeStartFrame;
        this._msCounter += timeFrame;

        if (CABLES.now() - this._timeStartSecond > 1000)
        {
            this.endSecond();
        }
    }

    endSecond()
    {
        this.stats.fps = this._fpsCounter;
        this.stats.ms = Math.round(this._msCounter / this._fpsCounter * 100) / 100;

        this.emitEvent("performance", this.stats);

        // reset
        this._fpsCounter = 0;
        this._msCounter = 0;
        this._timeStartSecond = CABLES.now();
    }
}

;// CONCATENATED MODULE: ./src/core/cg/cg_constants.js





const CG = {

    "GAPI_WEBGL": 0,
    "GAPI_WEBGPU": 1,

    "DEPTH_COMPARE_NEVER": 0,
    "DEPTH_COMPARE_LESS": 1,
    "DEPTH_COMPARE_EQUAL": 2,
    "DEPTH_COMPARE_LESSEQUAL": 3,
    "DEPTH_COMPARE_GREATER": 4,
    "DEPTH_COMPARE_NOTEQUAL": 5,
    "DEPTH_COMPARE_GREATEREQUAL": 6,
    "DEPTH_COMPARE_ALWAYS": 7,

    "CULL_NONE": 0,
    "CULL_BACK": 1,
    "CULL_FRONT": 2,
    "CULL_BOTH": 3,


    "Geometry": Geometry,
    "BoundingBox": BoundingBox,
    "FpsCounter": FpsCounter,

    "CgCanvas": CgCanvas
};




;// CONCATENATED MODULE: ./src/core/cgl/cgl_state.js








/**
 * cables gl context/state manager
 * @class
 * @namespace external:CGL
 * @hideconstructor
 */
// const Context(_patch)
class Context extends CGState
{
    constructor(_patch)
    {
        super(_patch);
        // EventTarget.apply(this);
        // CGState.apply(this);

        this.gApi = CG.GAPI_WEBGL;
        this.aborted = false;

        this.pushMvMatrix = this.pushModelMatrix; // deprecated and wrong... still used??
        this.popMvMatrix = this.popmMatrix = this.popModelMatrix;// deprecated and wrong... still used??

        this.profileData = new ProfileData(this);
        this._log = new Logger("cgl_context");
        this._viewPort = [0, 0, 0, 0];
        this.glVersion = 0;
        this.glUseHalfFloatTex = false;
        this.clearCanvasTransparent = true;
        this.clearCanvasDepth = true;
        this.debugOneFrame = false;
        this.checkGlErrors = false; // true is slow // false should be default...
        this.maxTextureUnits = 0;
        this.maxVaryingVectors = 0;
        this.currentProgram = null;
        this._hadStackError = false;
        this.glSlowRenderer = false;
        this._isSafariCrap = false;

        this.temporaryTexture = null;
        this.frameStore = {};
        this._onetimeCallbacks = [];
        this.gl = null;

        this._cursor = "auto";
        this._currentCursor = "";

        this._viewPortStack = [];
        this._glFrameBufferStack = [];
        this._frameBufferStack = [];
        this._shaderStack = [];
        this._stackDepthTest = [];
        this.mainloopOp = null;

        this._simpleShader = new Shader(this, "simpleshader");
        this._simpleShader.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG", "MODULE_VERTEX_MOVELVIEW"]);
        this._simpleShader.setSource(Shader.getDefaultVertexShader(), Shader.getDefaultFragmentShader());

        this._currentShader = this._simpleShader;


        this._oldCanvasWidth = -1;
        this._oldCanvasHeight = -1;
        this._enabledExtensions = {};
    }

    // set pixelDensity(p)
    // {
    //     this._pixelDensity = p;
    // }

    // get pixelDensity()
    // {
    //     return this._pixelDensity;
    // }



    get viewPort()
    {
        if (this._viewPortStack.length > 3)
        {
            const l = this._viewPortStack.length;

            return [
                this._viewPortStack[l - 4],
                this._viewPortStack[l - 3],
                this._viewPortStack[l - 2],
                this._viewPortStack[l - 1]
            ];
        }
        else
        {
            // workaround pre viewport stack times / or+and initial value...

            return this._viewPort;
        }
    }



    get mvMatrix() // deprecate
    {
        return this.mMatrix;
    }

    set mvMatrix(m) // deprecate
    {
        this.mMatrix = m;
    }


    exitError(msgId, msg)
    {
        console.log(msgId, msg);
        this.patch.exitError(msgId, msg);
        this.aborted = true;
    }


    _setCanvas(canv)
    {
        if (!canv)
        {
            this._log.stack("_setCanvas undef");
        }

        if (!this.patch.config.canvas) this.patch.config.canvas = {};
        if (!this.patch.config.canvas.hasOwnProperty("preserveDrawingBuffer")) this.patch.config.canvas.preserveDrawingBuffer = false;
        if (!this.patch.config.canvas.hasOwnProperty("premultipliedAlpha")) this.patch.config.canvas.premultipliedAlpha = false;
        if (!this.patch.config.canvas.hasOwnProperty("alpha")) this.patch.config.canvas.alpha = false;

        this.patch.config.canvas.stencil = true;

        if (this.patch.config.hasOwnProperty("clearCanvasColor")) this.clearCanvasTransparent = this.patch.config.clearCanvasColor;
        if (this.patch.config.hasOwnProperty("clearCanvasDepth")) this.clearCanvasDepth = this.patch.config.clearCanvasDepth;

        // safari stuff..........
        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (navigator.userAgent.match(/iPhone/i)))
        {
            this._isSafariCrap = true;
            this.glUseHalfFloatTex = true;
        }

        if (!this.patch.config.canvas.forceWebGl1) this.gl = canv.getContext("webgl2", this.patch.config.canvas);


        if (!this.gl || this.gl.isContextLost())
        {
            this.aborted = true;
            this.exitError("NO_WEBGL", "sorry, could not initialize WebGL. Please check if your Browser supports WebGL or try to restart your browser.");
            return;
        }

        if (this.gl.getParameter(this.gl.VERSION) != "WebGL 1.0")
        {
            this.glVersion = 2;
        }
        else
        {
            this.gl = canv.getContext("webgl", this.patch.config.canvas) || canv.getContext("experimental-webgl", this.patch.config.canvas);
            this.glVersion = 1;

            // safari
            // if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (navigator.userAgent.match(/iPhone/i)))
            // {
            //     this.glUseHalfFloatTex = true;
            // }

            // ios
            if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream)
            {
                if (!this.patch.config.canvas.hasOwnProperty("powerPreference")) this.patch.config.canvas.powerPreference = "high-performance";
            }

            this.enableExtension("OES_standard_derivatives");
            // this.enableExtension("GL_OES_standard_derivatives");
            const instancingExt = this.enableExtension("ANGLE_instanced_arrays") || this.gl;
            if (instancingExt.vertexAttribDivisorANGLE)
            {
                this.gl.vertexAttribDivisor = instancingExt.vertexAttribDivisorANGLE.bind(instancingExt);
                this.gl.drawElementsInstanced = instancingExt.drawElementsInstancedANGLE.bind(instancingExt);
            }
        }

        const dbgRenderInfo = this.enableExtension("WEBGL_debug_renderer_info");
        if (dbgRenderInfo)
        {
            this.glRenderer = this.gl.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL);
            if (this.glRenderer === "Google SwiftShader") this.glSlowRenderer = true;
        }

        this.canvas.addEventListener("webglcontextlost", (event) =>
        {
            if (this.aborted) return this._log.warn("[cgl_state] aborted context lost... can be ignored...");
            this._log.error("canvas lost...", event);
            this.emitEvent("webglcontextlost");
            this.aborted = true;
        });


        this.maxAnisotropic = 0;
        if (this.enableExtension("EXT_texture_filter_anisotropic"))
            this.maxAnisotropic = this.gl.getParameter(this.enableExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT);


        this.maxVaryingVectors = this.gl.getParameter(this.gl.MAX_VARYING_VECTORS);
        this.maxTextureUnits = this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS);
        this.maxTexSize = this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE);
        this.maxUniformsFrag = this.gl.getParameter(this.gl.MAX_FRAGMENT_UNIFORM_VECTORS);
        this.maxUniformsVert = this.gl.getParameter(this.gl.MAX_VERTEX_UNIFORM_VECTORS);
        this.maxSamples = 0;
        if (this.gl.MAX_SAMPLES) this.maxSamples = this.gl.getParameter(this.gl.MAX_SAMPLES);

        if (this.glVersion == 1)
        {
            this.enableExtension("OES_standard_derivatives");
            const instancingExt = this.enableExtension("ANGLE_instanced_arrays") || this.gl;

            if (instancingExt.vertexAttribDivisorANGLE)
            {
                this.gl.vertexAttribDivisor = instancingExt.vertexAttribDivisorANGLE.bind(instancingExt);
                this.gl.drawElementsInstanced = instancingExt.drawElementsInstancedANGLE.bind(instancingExt);
            }
        }

        this.DEPTH_FUNCS = [
            this.gl.NEVER,
            this.gl.ALWAYS,
            this.gl.LESS,
            this.gl.LEQUAL,
            this.gl.GREATER,
            this.gl.GEQUAL,
            this.gl.EQUAL,
            this.gl.NOTEQUAL
        ];
        this.CULL_MODES = [
            null,
            this.gl.BACK,
            this.gl.FRONT,
            this.gl.FRONT_AND_BACK
        ];
    }

    getInfo()
    {
        return {
            "glVersion": this.glVersion,
            "glRenderer": this.glRenderer,
            "glUseHalfFloatTex": this.glUseHalfFloatTex,
            "maxVaryingVectors": this.maxVaryingVectors,
            "maxTextureUnits": this.maxTextureUnits,
            "maxTexSize": this.maxTexSize,
            "maxUniformsFrag": this.maxUniformsFrag,
            "maxUniformsVert": this.maxUniformsVert,
            "maxSamples": this.maxSamples
        };
    }





    /**
     * @function popViewPort
     * @memberof Context
     * @instance
     * @description pop viewPort stack
     */


    popViewPort()
    {
        this._viewPortStack.pop();
        this._viewPortStack.pop();
        this._viewPortStack.pop();
        this._viewPortStack.pop();

        if (this._viewPortStack.length == 0)
        {
            this.setViewPort(0, 0, this.canvasWidth, this.canvasHeight);
            // this.gl.viewport(this._viewPort[0], this._viewPort[1], this._viewPort[2], this._viewPort[3]);
            // this.setViewPort(this._viewPort[0], this._viewPort[1], this._viewPort[2], this._viewPort[3]);
        }
        else
        {
            // this.viewPort = [this._viewPortStack[this._viewPort.length - 4], this._viewPortStack[this._viewPort.length - 3], this._viewPortStack[this._viewPort.length - 2], this._viewPortStack[this._viewPort.length - 1]];
            // this.gl.viewport(this._viewPortStack[this._viewPort.length - 4], this._viewPortStack[this._viewPort.length - 3], this._viewPortStack[this._viewPort.length - 2], this._viewPortStack[this._viewPort.length - 1]);
            this.setViewPort(this._viewPortStack[this._viewPort.length - 4], this._viewPortStack[this._viewPort.length - 3], this._viewPortStack[this._viewPort.length - 2], this._viewPortStack[this._viewPort.length - 1]);
        }
    }

    /**
     * @function pushViewPort
     * @memberof Context
     * @instance
     * @description push a new viewport onto stack
     * @param {Number} x
     * @param {Number} y
     * @param {Number} w
     * @param {Number} h
     */

    pushViewPort(x, y, w, h)
    {
        this._viewPortStack.push(x, y, w, h);
        this.setViewPort(x, y, w, h);
    }


    // old
    getViewPort()
    {
        return this._viewPort;
    }

    // old
    resetViewPort()
    {
        this.gl.viewport(this._viewPort[0], this._viewPort[1], this._viewPort[2], this._viewPort[3]);
    }

    // old
    setViewPort(x, y, w, h)
    {
        this._viewPort[0] = Math.round(x);
        this._viewPort[1] = Math.round(y);
        this._viewPort[2] = Math.round(w);
        this._viewPort[3] = Math.round(h);
        this.gl.viewport(this._viewPort[0], this._viewPort[1], this._viewPort[2], this._viewPort[3]);
    }


    screenShot(cb, doScreenshotClearAlpha, mimeType, quality)
    {
        if (doScreenshotClearAlpha)
        {
            this.gl.clearColor(1, 1, 1, 1);
            this.gl.colorMask(false, false, false, true);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
            this.gl.colorMask(true, true, true, true);
        }

        if (this.canvas && this.canvas.toBlob)
        {
            this.canvas.toBlob((blob) =>
            {
                if (cb) cb(blob);
                else this._log.log("no screenshot callback...");
            }, mimeType, quality);
        }
    }

    endFrame()
    {
        if (this.patch.isEditorMode()) CABLES.GL_MARKER.drawMarkerLayer(this);

        this.setPreviousShader();

        if (this._vMatrixStack.length() > 0) this.logStackError("view matrix stack length !=0 at end of rendering...");
        if (this._mMatrixStack.length() > 0) this.logStackError("mvmatrix stack length !=0 at end of rendering...");
        if (this._pMatrixStack.length() > 0) this.logStackError("pmatrix stack length !=0 at end of rendering...");
        if (this._glFrameBufferStack.length > 0) this.logStackError("glFrameBuffer stack length !=0 at end of rendering...");
        if (this._stackDepthTest.length > 0) this.logStackError("depthtest stack length !=0 at end of rendering...");
        if (this._stackDepthWrite.length > 0) this.logStackError("depthwrite stack length !=0 at end of rendering...");
        if (this._stackDepthFunc.length > 0) this.logStackError("depthfunc stack length !=0 at end of rendering...");
        if (this._stackBlend.length > 0) this.logStackError("blend stack length !=0 at end of rendering...");
        if (this._stackBlendMode.length > 0) this.logStackError("blendMode stack length !=0 at end of rendering...");
        if (this._shaderStack.length > 0) this.logStackError("this._shaderStack length !=0 at end of rendering...");
        if (this._stackCullFace.length > 0) this.logStackError("this._stackCullFace length !=0 at end of rendering...");
        if (this._stackCullFaceFacing.length > 0) this.logStackError("this._stackCullFaceFacing length !=0 at end of rendering...");
        if (this._viewPortStack.length > 0) this.logStackError("viewport stack length !=0 at end of rendering...");

        this._frameStarted = false;

        if (this._oldCanvasWidth != this.canvasWidth || this._oldCanvasHeight != this.canvasHeight)
        {
            this._oldCanvasWidth = this.canvasWidth;
            this._oldCanvasHeight = this.canvasHeight;
            this.emitEvent("resize");
        }

        if (this._cursor != this._currentCursor)
        {
            this._currentCursor = this.canvas.style.cursor = this._cursor;
        }

        this.emitEvent("endframe");

        this.fpsCounter.endFrame();
    }

    logStackError(str)
    {
        if (!this._hadStackError)
        {
            this._hadStackError = true;
            this._log.warn("[" + this.canvas.id + "]: ", str);
        }
    }

    // shader stack
    getShader()
    {
        if (this._currentShader) if (!this.frameStore || ((this.frameStore.renderOffscreen === true) == this._currentShader.offScreenPass) === true) return this._currentShader;

        for (let i = this._shaderStack.length - 1; i >= 0; i--) if (this._shaderStack[i]) if (this.frameStore.renderOffscreen == this._shaderStack[i].offScreenPass) return this._shaderStack[i];
    }

    getDefaultShader()
    {
        return this._simpleShader;
    }

    /**
     * push a shader to the shader stack
     * @function pushShader
     * @memberof Context
     * @instance
     * @param {Object} shader
     * @function
     */

    pushShader(shader)
    {
        if (this.frameStore.forceShaderMods)
        {
            for (let i = 0; i < this.frameStore.forceShaderMods.length; i++)
            {
                // if (!currentShader.forcedMod && currentShader != this.frameStore.forceShaderMods[i])
                // {
                //     currentShader.forcedMod = this.frameStore.forceShaderMods[i];
                shader = this.frameStore.forceShaderMods[i].bind(shader, false);
                // }
                // return currentShader;
                // if (this.frameStore.forceShaderMods[i].currentShader() && shader != this.frameStore.forceShaderMods[i].currentShader().shader)
            }
        }

        this._shaderStack.push(shader);
        this._currentShader = shader;
    }


    /**
     * pop current used shader from shader stack
     * @function popShader
     * @memberof Context
     * @instance
     * @function
     */
    setPreviousShader()
    {
        if (this.frameStore.forceShaderMods)
        {
            for (let i = 0; i < this.frameStore.forceShaderMods.length; i++)
            {
                // const a =
                this.frameStore.forceShaderMods[i].unbind(false);
                // if (a) return;
                // this.popShader();
            }
        }

        if (this._shaderStack.length === 0) throw new Error("Invalid shader stack pop!");
        this._shaderStack.pop();
        this._currentShader = this._shaderStack[this._shaderStack.length - 1];
    }

    /**
     * push a framebuffer to the framebuffer stack
     * @function pushGlFrameBuffer
     * @memberof Context
     * @instance
     * @param {Object} fb framebuffer
     * @function
     */
    pushGlFrameBuffer(fb)
    {
        this._glFrameBufferStack.push(fb);
    }

    /**
     * pop framebuffer stack
     * @function popGlFrameBuffer
     * @memberof Context
     * @instance
     * @returns {Object} current framebuffer or null
     */
    popGlFrameBuffer()
    {
        if (this._glFrameBufferStack.length == 0) return null;
        this._glFrameBufferStack.pop();
        return this._glFrameBufferStack[this._glFrameBufferStack.length - 1];
    }

    /**
     * get current framebuffer
     * @function getCurrentFrameBuffer
     * @memberof Context
     * @instance
     * @returns {Object} current framebuffer or null
     */
    getCurrentGlFrameBuffer()
    {
        if (this._glFrameBufferStack.length === 0) return null;
        return this._glFrameBufferStack[this._glFrameBufferStack.length - 1];
    }

    /**
     * push a framebuffer to the framebuffer stack
     * @function pushGlFrameBuffer
     * @memberof Context
     * @instance
     * @param {Framebuffer} fb framebuffer
     */
    pushFrameBuffer(fb)
    {
        this._frameBufferStack.push(fb);
    }

    /**
     * pop framebuffer stack
     * @function popFrameBuffer
     * @memberof Context
     * @instance
     * @returns {Framebuffer} current framebuffer or null
     */
    popFrameBuffer()
    {
        if (this._frameBufferStack.length == 0) return null;
        this._frameBufferStack.pop();
        return this._frameBufferStack[this._frameBufferStack.length - 1];
    }

    /**
     * get current framebuffer
     * @function getCurrentFrameBuffer
     * @memberof Context
     * @instance
     * @returns {Framebuffer} current framebuffer or null
     */
    getCurrentFrameBuffer()
    {
        if (this._frameBufferStack.length === 0) return null;
        return this._frameBufferStack[this._frameBufferStack.length - 1];
    }


    renderStart(cgl, identTranslate, identTranslateView)
    {
        this.fpsCounter.startFrame();
        this.pushDepthTest(true);
        this.pushDepthWrite(true);
        this.pushDepthFunc(cgl.gl.LEQUAL);
        this.pushCullFaceFacing(cgl.gl.BACK);
        this.pushCullFace(false);

        // if (this.clearCanvasTransparent)
        // {
        //     cgl.gl.clearColor(0, 0, 0, 0);
        //     cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT);
        // }
        // if (this.clearCanvasDepth) cgl.gl.clear(cgl.gl.DEPTH_BUFFER_BIT);

        cgl.setViewPort(0, 0, cgl.canvasWidth, cgl.canvasHeight);

        this._startMatrixStacks(identTranslate, identTranslateView);

        cgl.pushBlendMode(constants_CONSTANTS.BLEND_MODES.BLEND_NORMAL, false);

        for (let i = 0; i < this._textureslots.length; i++) this._textureslots[i] = null;

        this.pushShader(this._simpleShader);

        this._frameStarted = true;

        if (this._onetimeCallbacks.length > 0)
        {
            for (let i = 0; i < this._onetimeCallbacks.length; i++) this._onetimeCallbacks[i]();
            this._onetimeCallbacks.length = 0;
        }

        for (let i = 0; i < this._textureslots.length; i++)
        {
            this.gl.activeTexture(this.gl.TEXTURE0 + i);
            this.gl.bindTexture(this.gl.TEXTURE_2D, null);
            this._textureslots[i] = null;
        }

        this.emitEvent("beginFrame");
    }

    renderEnd(cgl)
    {
        this._endMatrixStacks();

        this.popDepthTest();
        this.popDepthWrite();
        this.popDepthFunc();
        this.popCullFaceFacing();
        this.popCullFace();
        this.popBlend();
        this.popBlendMode();

        cgl.endFrame();

        this.emitEvent("endFrame");
    }

    getTexture(slot)
    {
        return this._textureslots[slot];
    }

    hasFrameStarted()
    {
        return this._frameStarted;
    }

    /**
     * log warning to console if the rendering of one frame has not been started / handy to check for async problems
     * @function checkFrameStarted
     * @memberof Context
     * @param string
     * @instance
     */
    checkFrameStarted(string)
    {
        if (!this._frameStarted)
        {
            this._log.warn("frame not started " + string);
            this.patch.printTriggerStack();
        }
    }


    setTexture(slot, t, type)
    {
        this.checkFrameStarted("cgl setTexture");

        if (t === null) t = CGL.Texture.getEmptyTexture(this).tex;

        if (this._textureslots[slot] != t)
        {
            this.gl.activeTexture(this.gl.TEXTURE0 + slot);
            this.gl.bindTexture(type || this.gl.TEXTURE_2D, t);
            this._textureslots[slot] = t;
        }


        return true;
    }

    fullScreen()
    {
        if (this.canvas.requestFullscreen) this.canvas.requestFullscreen();
        else if (this.canvas.mozRequestFullScreen) this.canvas.mozRequestFullScreen();
        else if (this.canvas.webkitRequestFullscreen) this.canvas.webkitRequestFullscreen();
        else if (this.canvas.msRequestFullscreen) this.canvas.msRequestFullscreen();
    }


    printError(str)
    {
        if (!this.checkGlErrors) return;
        let found = false;
        let error = this.gl.getError();

        if (error != this.gl.NO_ERROR)
        {
            let errStr = "";
            if (error == this.gl.OUT_OF_MEMORY) errStr = "OUT_OF_MEMORY";
            if (error == this.gl.INVALID_ENUM) errStr = "INVALID_ENUM";
            if (error == this.gl.INVALID_OPERATION) errStr = "INVALID_OPERATION";
            if (error == this.gl.INVALID_FRAMEBUFFER_OPERATION) errStr = "INVALID_FRAMEBUFFER_OPERATION";
            if (error == this.gl.INVALID_VALUE) errStr = "INVALID_VALUE";
            if (error == this.gl.CONTEXT_LOST_WEBGL)
            {
                this.aborted = true;
                errStr = "CONTEXT_LOST_WEBGL";
            }
            if (error == this.gl.NO_ERROR) errStr = "NO_ERROR";

            found = true;


            this._log.warn("gl error [" + this.canvas.id + "]: ", str, error, errStr);

            if (this.canvas.id.contains("glGuiCanvas"))
                if (!this._loggedGlError)
                {
                    this.patch.printTriggerStack();
                    this._log.stack("glerror");
                    this._loggedGlError = true;
                }
        }
        error = this.gl.getError();

        return found;
    }

    saveScreenshot(filename, cb, pw, ph, noclearalpha)
    {
        this.patch.renderOneFrame();

        let w = this.canvas.clientWidth * this.pixelDensity;
        let h = this.canvas.clientHeight * this.pixelDensity;

        if (pw)
        {
            this.canvas.width = pw;
            w = pw;
        }
        if (ph)
        {
            this.canvas.height = ph;
            h = ph;
        }

        function padLeft(nr, n, str)
        {
            return Array(n - String(nr).length + 1).join(str || "0") + nr;
        }

        const d = new Date();

        const dateStr = "".concat(String(d.getFullYear()) + String(d.getMonth() + 1) + String(d.getDate()), "_").concat(padLeft(d.getHours(), 2)).concat(padLeft(d.getMinutes(), 2)).concat(padLeft(d.getSeconds(), 2));

        if (!filename) filename = "cables_" + dateStr + ".png";
        else filename += ".png";

        this.patch.cgl.screenShot(function (blob)
        {
            this.canvas.width = w;
            this.canvas.height = h;

            if (blob)
            {
                const anchor = document.createElement("a");

                anchor.download = filename;
                anchor.href = URL.createObjectURL(blob);

                setTimeout(function ()
                {
                    anchor.click();
                    if (cb) cb(blob);
                }, 100);
            }
            else
            {
                this._log.log("screenshot: no blob");
            }
        }.bind(this), noclearalpha);
    }

    _dispose()
    {
        this._simpleShader.dispose();
        this.gl = null;
    }
}


Context.prototype.popShader = Context.prototype.setPreviousShader;
Context.prototype.setShader = Context.prototype.pushShader;

/**
 * execute the callback next frame, once
 * @function addNextFrameOnceCallback
 * @memberof Context
 * @instance
 * @param {function} cb
 */
Context.prototype.addNextFrameOnceCallback = function (cb)
{
    if (cb && this._onetimeCallbacks.indexOf(cb) == -1) this._onetimeCallbacks.push(cb);
};

// state depthtest

/**
 * push depth testing enabled state
 * @function pushDepthTest
 * @param {Boolean} enabled
 * @memberof Context
 * @instance
 */
Context.prototype._stackDepthTest = [];
Context.prototype.pushDepthTest = function (b)
{
    this._stackDepthTest.push(b);
    if (!b) this.gl.disable(this.gl.DEPTH_TEST);
    else this.gl.enable(this.gl.DEPTH_TEST);
};
/**
 * current state of depth testing
 * @function stateCullFace
 * @returns {Boolean} enabled
 * @memberof Context
 * @instance
 */
Context.prototype.stateDepthTest = function ()
{
    return this._stackDepthTest[this._stackDepthTest.length - 1];
};

/**
 * pop depth testing state
 * @function popCullFace
 * @memberof Context
 * @instance
 */
Context.prototype.popDepthTest = function ()
{
    this._stackDepthTest.pop();

    if (!this._stackDepthTest[this._stackDepthTest.length - 1]) this.gl.disable(this.gl.DEPTH_TEST);
    else this.gl.enable(this.gl.DEPTH_TEST);
};

// --------------------------------------
// state depthwrite

/**
 * push depth write enabled state
 * @function pushDepthTest
 * @param {Boolean} enabled
 * @memberof Context
 * @instance
 */
Context.prototype._stackDepthWrite = [];
Context.prototype.pushDepthWrite = function (b)
{
    b = b || false;
    this._stackDepthWrite.push(b);
    this.gl.depthMask(b);
};

/**
 * current state of depth writing
 * @function stateDepthWrite
 * @returns {Boolean} enabled
 * @memberof Context
 * @instance
 */
Context.prototype.stateDepthWrite = function ()
{
    return this._stackDepthWrite[this._stackDepthWrite.length - 1];
};

/**
 * pop depth writing state
 * @function popDepthWrite
 * @memberof Context
 * @instance
 */
Context.prototype.popDepthWrite = function ()
{
    this._stackDepthWrite.pop();
    this.gl.depthMask(this._stackDepthWrite[this._stackDepthWrite.length - 1] || false);
};


// --------------------------------------
// state CullFace

Context.prototype._stackCullFace = [];

/**
 * push face culling face enabled state
 * @function pushCullFace
 * @param {Boolean} b enabled
 * @memberof Context
 * @instance
 */
Context.prototype.pushCullFace = function (b)
{
    this._stackCullFace.push(b);

    if (b) this.gl.enable(this.gl.CULL_FACE);
    else this.gl.disable(this.gl.CULL_FACE);
};

/**
 * current state of face culling
 * @function stateCullFace
 * @returns {Boolean} enabled
 * @memberof Context
 * @instance
 */
Context.prototype.stateCullFace = function ()
{
    return this._stackCullFace[this._stackCullFace.length - 1];
};

/**
 * pop face culling enabled state
 * @function popCullFace
 * @memberof Context
 * @instance
 */
Context.prototype.popCullFace = function ()
{
    this._stackCullFace.pop();

    if (this._stackCullFace[this._stackCullFace.length - 1]) this.gl.enable(this.gl.CULL_FACE);
    else this.gl.disable(this.gl.CULL_FACE);
};


// --------------------------------------
// state CullFace Facing


/**
 * push face culling face side
 * @function pushCullFaceFacing
 * @param {Number} cgl.gl.FRONT_AND_BACK, cgl.gl.BACK or cgl.gl.FRONT
 * @memberof Context
 * @instance
 */
Context.prototype._stackCullFaceFacing = [];
Context.prototype.pushCullFaceFacing = function (b)
{
    this._stackCullFaceFacing.push(b);
    this.gl.cullFace(this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1]);
};

/**
 * current state of face culling side
 * @function stateCullFaceFacing
 * @returns {Boolean} enabled
 * @memberof Context
 * @instance
 */
Context.prototype.stateCullFaceFacing = function ()
{
    return this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1];
};

/**
 * pop face culling face side
 * @function popCullFaceFacing
 * @memberof Context
 * @instance
 */
Context.prototype.popCullFaceFacing = function ()
{
    this._stackCullFaceFacing.pop();
    if (this._stackCullFaceFacing.length > 0) this.gl.cullFace(this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1]);
};


// --------------------------------------
// state depthfunc

Context.prototype._stackDepthFunc = [];

/**
 * enable / disable depth testing
 * like `gl.depthFunc(boolean);`
 * @function pushDepthFunc
 * @memberof Context
 * @instance
 * @param {Boolean} f depthtesting
 */
Context.prototype.pushDepthFunc = function (f)
{
    this._stackDepthFunc.push(f);
    this.gl.depthFunc(f);
};

/**
 * current state of blend
 * @function stateDepthFunc
 * @memberof Context
 * @instance
 * @returns {Boolean} depth testing enabled/disabled
 */
Context.prototype.stateDepthFunc = function ()
{
    if (this._stackDepthFunc.length > 0) return this._stackDepthFunc[this._stackDepthFunc.length - 1];
    return false;
};

/**
 * pop depth testing and set the previous state
 * @function popDepthFunc
 * @memberof Context
 * @instance
 */
Context.prototype.popDepthFunc = function ()
{
    this._stackDepthFunc.pop();
    if (this._stackDepthFunc.length > 0) this.gl.depthFunc(this._stackDepthFunc[this._stackDepthFunc.length - 1]);
};

// --------------------------------------
// state blending

Context.prototype._stackBlend = [];

/**
 * enable / disable blend
 * like gl.enable(gl.BLEND); / gl.disable(gl.BLEND);
 * @function pushBlend
 * @memberof Context
 * @instance
 * @param {boolean} b blending
 */
Context.prototype.pushBlend = function (b)
{
    this._stackBlend.push(b);
    if (!b) this.gl.disable(this.gl.BLEND);
    else this.gl.enable(this.gl.BLEND);
};

/**
 * pop blend state and set the previous state
 * @function popBlend
 * @memberof Context
 * @instance
 */
Context.prototype.popBlend = function ()
{
    this._stackBlend.pop();

    if (!this._stackBlend[this._stackBlend.length - 1]) this.gl.disable(this.gl.BLEND);
    else this.gl.enable(this.gl.BLEND);
};

/**
 * current state of blend
 * @function stateBlend
 * @returns {boolean} blending enabled/disabled
 * @memberof Context
 * @instance
 */
Context.prototype.stateBlend = function ()
{
    return this._stackBlend[this._stackBlend.length - 1];
};

const BLENDS = {
    "BLEND_NONE": 0,
    "BLEND_NORMAL": 1,
    "BLEND_ADD": 2,
    "BLEND_SUB": 3,
    "BLEND_MUL": 4,
};

Context.prototype._stackBlendMode = [];
Context.prototype._stackBlendModePremul = [];

/**
 * push and switch to predefined blendmode (CONSTANTS.BLEND_MODES.BLEND_NONE,CONSTANTS.BLEND_MODES.BLEND_NORMAL,CONSTANTS.BLEND_MODES.BLEND_ADD,CONSTANTS.BLEND_MODES.BLEND_SUB,CONSTANTS.BLEND_MODES.BLEND_MUL)
 * @function pushBlendMode
 * @memberof Context
 * @instance
 * @param {Number} blendMode
 * @param {Boolean} premul premultiplied mode
 */
Context.prototype.pushBlendMode = function (blendMode, premul)
{
    this._stackBlendMode.push(blendMode);
    this._stackBlendModePremul.push(premul);

    const n = this._stackBlendMode.length - 1;

    this.pushBlend(this._stackBlendMode[n] !== constants_CONSTANTS.BLEND_MODES.BLEND_NONE);
    this._setBlendMode(this._stackBlendMode[n], this._stackBlendModePremul[n]);
};

/**
 * pop predefined blendmode / switch back to previous blendmode
 * @function popBlendMode
 * @memberof Context
 * @instance
 */
Context.prototype.popBlendMode = function ()
{
    this._stackBlendMode.pop();
    this._stackBlendModePremul.pop();

    const n = this._stackBlendMode.length - 1;

    this.popBlend(this._stackBlendMode[n] !== constants_CONSTANTS.BLEND_MODES.BLEND_NONE);

    if (n >= 0) this._setBlendMode(this._stackBlendMode[n], this._stackBlendModePremul[n]);
};


// --------------------------------------
// state stencil

Context.prototype._stackStencil = [];

/**
 * enable / disable stencil testing

* @function pushStencil
 * @memberof Context
 * @instance
 * @param {Boolean} b enable
 */
Context.prototype.pushStencil = function (b)
{
    this._stackStencil.push(b);
    if (!b) this.gl.disable(this.gl.STENCIL_TEST);
    else this.gl.enable(this.gl.STENCIL_TEST);
};

/**
 * pop stencil test state and set the previous state
 * @function popStencil
 * @memberof Context
 * @instance
 */
Context.prototype.popStencil = function ()
{
    this._stackStencil.pop();

    if (!this._stackStencil[this._stackStencil.length - 1]) this.gl.disable(this.gl.STENCIL_TEST);
    else this.gl.enable(this.gl.STENCIL_TEST);
};

// --------------------------------------


Context.prototype.glGetAttribLocation = function (prog, name)
{
    const l = this.gl.getAttribLocation(prog, name);
    // if (l == -1)
    // {
    //     this._log.warn("get attr loc -1 ", name);
    // }
    return l;
};


/**
 * should an op now draw helpermeshes
 * @function shouldDrawHelpers
 * @memberof Context
 * @param op
 * @instance
 */
Context.prototype.shouldDrawHelpers = function (op)
{
    if (this.frameStore.shadowPass) return false;
    if (!op.patch.isEditorMode()) return false;

    // const fb = this.getCurrentFrameBuffer();
    // if (fb && fb.getWidth)
    // {
    //     const fbshould = this.canvasWidth / this.canvasHeight == fb.getWidth() / fb.getHeight();
    //     if (!fbshould) return false;
    // }

    return gui.shouldDrawOverlay;// || (CABLES.UI.renderHelperCurrent && op.isCurrentUiOp());
};

Context.prototype._setBlendMode = function (blendMode, premul)
{
    const gl = this.gl;

    if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_NONE)
    {
        // this.gl.disable(this.gl.BLEND);
    }
    else if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_ADD)
    {
        if (premul)
        {
            gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
            gl.blendFuncSeparate(gl.ONE, gl.ONE, gl.ONE, gl.ONE);
        }
        else
        {
            gl.blendEquation(gl.FUNC_ADD);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
        }
    }
    else if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_SUB)
    {
        if (premul)
        {
            gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
            gl.blendFuncSeparate(gl.ZERO, gl.ZERO, gl.ONE_MINUS_SRC_COLOR, gl.ONE_MINUS_SRC_ALPHA);
        }
        else
        {
            gl.blendEquation(gl.FUNC_ADD);
            gl.blendFunc(gl.ZERO, gl.ONE_MINUS_SRC_COLOR);
        }
    }
    else if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_MUL)
    {
        if (premul)
        {
            gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
            gl.blendFuncSeparate(gl.ZERO, gl.SRC_COLOR, gl.ZERO, gl.SRC_ALPHA);
        }
        else
        {
            gl.blendEquation(gl.FUNC_ADD);
            gl.blendFunc(gl.ZERO, gl.SRC_COLOR);
        }
    }
    else if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_NORMAL)
    {
        if (premul)
        {
            gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
            gl.blendFuncSeparate(gl.ONE, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        }
        else
        {
            gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
            gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        }
    }
    else
    {
        this._log.log("setblendmode: unknown blendmode");
    }
};

Context.prototype.createMesh = function (geom, options)
{
    if (CABLES.UTILS.isNumeric(options))options = { "glPrimitive": options }; // old constructor fallback...
    return new CGL.Mesh(this, geom, options);
};


/**
 * set cursor
 * @function setCursor
 * @memberof Context
 * @instance
 * @param {String} str css cursor string
 */
Context.prototype.setCursor = function (str)
{
    this._cursor = str;
};

/**
 * enable a webgl extension
 * @function enableExtension
 * @memberof Context
 * @instance
 * @param {String} name extension name
 * @returns {Object} extension object or null
 */
Context.prototype.enableExtension = function (name)
{
    if (!this.gl) return null;

    if (this._enabledExtensions.hasOwnProperty(name))
        return this._enabledExtensions[name];

    const o = this.gl.getExtension(name);
    this._enabledExtensions[name] = o;

    if (!o)
        this._log.warn("[cgl_state] extension not available " + name);
    // else
        // this._log.log("enabled extension", name);

    return o;
};

Context.prototype.checkTextureSize = function (x)
{
    x = x || 1;
    x = Math.floor(x);
    x = Math.min(x, this.maxTexSize);
    x = Math.max(x, 1);
    return x;
};





;// CONCATENATED MODULE: ./src/core/core_variable.js


/**
 * @type {Object}
 * @name PatchVariable
 * @param {String} name
 * @param {String|Number} value
 * @memberof Patch
 * @constructor
 */
class PatchVariable extends Events
{
    constructor(name, val, type)
    {
        super();
        this._name = name;
        this.type = type;
        this.setValue(val);
    }

    /**
     * keeping this for backwards compatibility in older
     * exports before using eventtarget
     *
     * @param cb
     */
    addListener(cb)
    {
        this.on("change", cb, "var");
    }

    /**
     * @function Variable.getValue
     * @memberof PatchVariable
     * @returns {String|Number|Boolean}
     */
    getValue()
    {
        return this._v;
    }

    /**
     * @function getName
     * @memberof PatchVariable
     * @instance
     * @returns {String|Number|Boolean}
     * @function
     */
    getName()
    {
        return this._name;
    }

    /**
     * @function setValue
     * @memberof PatchVariable
     * @instance
     * @param v
     * @returns {String|Number|Boolean}
     * @function
     */
    setValue(v)
    {
        this._v = v;
        this.emitEvent("change", v, this);
    }
}

/* harmony default export */ const core_variable = (PatchVariable);

;// CONCATENATED MODULE: ./src/core/core_patch.js













/**
 * Patch class, contains all operators,values,links etc. manages loading and running of the whole patch
 *
 * see {@link PatchConfig}
 *
 * @namespace external:CABLES#Patch
 * @hideconstructor
 * @param {PatchConfig} cfg The configuration object.
 * @class
 * @example
 * CABLES.patch=new CABLES.Patch(
 * {
 *     patch:pStr,
 *     glCanvasId:'glcanvas',
 *     glCanvasResizeToWindow:true,
 *     canvas:{powerPreference:"high-performance"},
 *     prefixAssetPath:'/assets/',
 *     prefixJsPath:'/js/',
 *     onError:function(e){console.log(e);}
 *     glslPrecision:'highp'
 * });
 */

const Patch = function (cfg)
{
    EventTarget.apply(this);

    this._log = new Logger("core_patch");
    this.ops = [];
    this.settings = {};
    this.config = cfg ||
        {
            "glCanvasResizeToWindow": false,
            "prefixAssetPath": "",
            "prefixJsPath": "",
            "silent": true,
            "onError": null,
            "onFinishedLoading": null,
            "onFirstFrameRendered": null,
            "onPatchLoaded": null,
            "fpsLimit": 0,
        };
    this.timer = new Timer();
    this.freeTimer = new Timer();
    this.animFrameOps = [];
    this.animFrameCallbacks = [];
    this.gui = false;
    CABLES.logSilent = this.silent = true;
    this.profiler = null;
    this.aborted = false;
    this._crashedOps = [];
    this._renderOneFrame = false;
    this._animReq = null;
    this._opIdCache = {};
    this._triggerStack = [];
    this.storeObjNames = false; // remove after may release

    this.loading = new LoadingStatus(this);

    this._volumeListeners = [];
    this._paused = false;
    this._frameNum = 0;
    this.instancing = new Instancing();
    this.onOneFrameRendered = null;
    this.namedTriggers = {};

    this._origData = null;
    this._frameNext = 0;
    this._frameInterval = 0;
    this._lastFrameTime = 0;
    this._frameWasdelayed = true;
    this.frameStore = {};
    this.deSerialized = false;
    this.reqAnimTimeStamp = 0;

    this.cgCanvas = null;

    if (!(function () { return !this; }())) console.log("not in strict mode: core patch");

    this._isLocal = document.location.href.indexOf("file:") === 0;

    if (this.config.hasOwnProperty("silent")) this.silent = CABLES.logSilent = this.config.silent;
    if (!this.config.hasOwnProperty("doRequestAnimation")) this.config.doRequestAnimation = true;

    if (!this.config.prefixAssetPath) this.config.prefixAssetPath = "";
    if (!this.config.prefixJsPath) this.config.prefixJsPath = "";
    if (!this.config.masterVolume) this.config.masterVolume = 1.0;

    this._variables = {};
    this._variableListeners = [];
    this.vars = {};
    if (cfg && cfg.vars) this.vars = cfg.vars; // vars is old!

    this.cgl = new Context(this);
    this.cgp = null;

    this._subpatchOpCache = {};

    this.cgl.setCanvas(this.config.glCanvasId || this.config.glCanvas || "glcanvas");
    if (this.config.glCanvasResizeToWindow === true) this.cgl.setAutoResize("window");
    if (this.config.glCanvasResizeToParent === true) this.cgl.setAutoResize("parent");
    this.loading.setOnFinishedLoading(this.config.onFinishedLoading);

    if (this.cgl.aborted) this.aborted = true;
    if (this.cgl.silent) this.silent = true;

    this.freeTimer.play();
    this.exec();

    if (!this.aborted)
    {
        if (this.config.patch)
        {
            this.deSerialize(this.config.patch);
        }
        else if (this.config.patchFile)
        {
            ajax(
                this.config.patchFile,
                (err, _data) =>
                {
                    const data = JSON.parse(_data);
                    if (err)
                    {
                        const txt = "";
                        this._log.error("err", err);
                        this._log.error("data", data);
                        this._log.error("data", data.msg);
                        return;
                    }
                    this.deSerialize(data);
                }
            );
        }
        this.timer.play();
    }

    console.log("made with https://cables.gl"); // eslint-disable-line
};

Patch.prototype.isPlaying = function ()
{
    return !this._paused;
};

Patch.prototype.isRenderingOneFrame = function ()
{
    return this._renderOneFrame;
};


Patch.prototype.renderOneFrame = function ()
{
    this._paused = true;
    this._renderOneFrame = true;
    this.exec();
    this._renderOneFrame = false;
};

/**
 * current number of frames per second
 * @function getFPS
 * @memberof Patch
 * @instance
 * @return {Number} fps
 */
Patch.prototype.getFPS = function ()
{
    this._log.error("deprecated getfps");
    return 0;
};

/**
 * returns true if patch is opened in editor/gui mode
 * @function isEditorMode
 * @memberof Patch
 * @instance
 * @return {Boolean} editor mode
 */
Patch.prototype.isEditorMode = function ()
{
    return this.config.editorMode === true;
};

/**
 * pauses patch execution
 * @function pause
 * @memberof Patch
 * @instance
 */
Patch.prototype.pause = function ()
{
    cancelAnimationFrame(this._animReq);
    this.emitEvent("pause");
    this._animReq = null;
    this._paused = true;
    this.freeTimer.pause();
};

/**
 * resumes patch execution
 * @function resume
 * @memberof Patch
 * @instance
 */
Patch.prototype.resume = function ()
{
    if (this._paused)
    {
        cancelAnimationFrame(this._animReq);
        this._paused = false;
        this.freeTimer.play();
        this.emitEvent("resume");
        this.exec();
    }
};

/**
 * set volume [0-1]
 * @function setVolume
 * @param {Number} v volume
 * @memberof Patch
 * @instance
 */
Patch.prototype.setVolume = function (v)
{
    this.config.masterVolume = v;
    for (let i = 0; i < this._volumeListeners.length; i++) this._volumeListeners[i].onMasterVolumeChanged(v);
};


/**
 * get asset path
 * @function getAssetPath
 * @memberof Patch
 * @param patchId
 * @instance
 */
Patch.prototype.getAssetPath = function (patchId = null)
{
    if (this.isEditorMode())
    {
        let id = patchId || gui.project()._id;
        return "/assets/" + id + "/";
    }
    else if (document.location.href.indexOf("cables.gl") > 0 || document.location.href.indexOf("cables.local") > 0)
    {
        const parts = document.location.pathname.split("/");
        let id = patchId || parts[parts.length - 1];
        return "/assets/" + id + "/";
    }
    else if (this.config.hasOwnProperty("assetPath"))
    {
        return this.config.assetPath;
    }
    else
    {
        return "assets/";
    }
};

/**
 * get js path
 * @function getJsPath
 * @memberof Patch
 * @instance
 */
Patch.prototype.getJsPath = function ()
{
    if (this.config.hasOwnProperty("jsPath"))
    {
        return this.config.jsPath;
    }
    else
    {
        return "js/";
    }
};

/**
 * get url/filepath for a filename
 * this uses prefixAssetpath in exported patches
 * @function getFilePath
 * @memberof Patch
 * @instance
 * @param {String} filename
 * @return {String} url
 */
Patch.prototype.getFilePath = function (filename)
{
    if (!filename) return filename;
    filename = String(filename);
    if (filename.indexOf("https:") === 0 || filename.indexOf("http:") === 0) return filename;
    if (filename.indexOf("data:") === 0) return filename;
    if (filename.indexOf("file:") === 0) return filename;
    filename = filename.replace("//", "/");
    if (filename.startsWith(this.config.prefixAssetPath)) filename = filename.replace(this.config.prefixAssetPath, "");
    return this.config.prefixAssetPath + filename + (this.config.suffixAssetPath || "");
};

Patch.prototype.clear = function ()
{
    this.emitEvent("patchClearStart");
    this.cgl.TextureEffectMesh = null;
    this.animFrameOps.length = 0;
    this.timer = new Timer();
    while (this.ops.length > 0) this.deleteOp(this.ops[0].id);

    this._opIdCache = {};
    this.emitEvent("patchClearEnd");
};

Patch.getOpClass = function (objName)
{
    const parts = objName.split(".");
    let opObj = null;

    try
    {
        if (parts.length == 2) opObj = window[parts[0]][parts[1]];
        else if (parts.length == 3) opObj = window[parts[0]][parts[1]][parts[2]];
        else if (parts.length == 4) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]];
        else if (parts.length == 5) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]];
        else if (parts.length == 6) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]];
        else if (parts.length == 7) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]];
        else if (parts.length == 8) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]];
        else if (parts.length == 9) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]][parts[8]];
        else if (parts.length == 10) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]][parts[8]][parts[9]];
        return opObj;
    }
    catch (e)
    {
        return null;
    }
};

Patch.prototype.createOp = function (identifier, id, opName = null)
{
    let op = null;
    let objName = "";

    try
    {
        if (!identifier)
        {
            console.error("createop identifier false", identifier);
            console.log((new Error()).stack);
            return;
        }
        if (identifier.indexOf("Ops.") === -1)
        {
            // this should be a uuid, not a namespace
            // creating ops by id should be the default way from now on!
            const opId = identifier;



            if (CABLES.OPS[opId])
            {
                objName = CABLES.OPS[opId].objName;
                op = new CABLES.OPS[opId].f(this, objName, id, opId);
                op.opId = opId;
            }
            else
            {
                if (opName)
                {
                    identifier = opName;
                    this._log.warn("could not find op by id: " + opId);
                }
                else
                {
                    throw new Error("could not find op by id: " + opId, { "cause": "opId:" + opId });
                }
            }
        }

        if (!op)
        {
            // fallback: create by objname!
            objName = identifier;
            const parts = identifier.split(".");
            const opObj = Patch.getOpClass(objName);

            if (!opObj)
            {
                this.emitEvent("criticalError", { "title": "unknown op" + objName, "text": "unknown op: " + objName });

                this._log.error("unknown op: " + objName);
                throw new Error("unknown op: " + objName);
            }
            else
            {
                if (parts.length == 2) op = new window[parts[0]][parts[1]](this, objName, id);
                else if (parts.length == 3) op = new window[parts[0]][parts[1]][parts[2]](this, objName, id);
                else if (parts.length == 4) op = new window[parts[0]][parts[1]][parts[2]][parts[3]](this, objName, id);
                else if (parts.length == 5) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]](this, objName, id);
                else if (parts.length == 6) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]](this, objName, id);
                else if (parts.length == 7) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]](this, objName, id);
                else if (parts.length == 8) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]](this, objName, id);
                else if (parts.length == 9) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]][parts[8]](this, objName, id);
                else if (parts.length == 10) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]][parts[8]][parts[9]](this, objName, id);
                else console.log("parts.length", parts.length);
            }

            if (op)
            {
                op.opId = null;
                for (const i in CABLES.OPS)
                {
                    if (CABLES.OPS[i].objName == objName) op.opId = i;
                }
            }
        }
    }
    catch (e)
    {
        this._crashedOps.push(objName);

        this._log.error(e);
        this._log.error("[instancing error] " + objName, e);

        if (!this.isEditorMode())
        {
            this.exitError("INSTANCE_ERR", "Instancing Error: " + objName, e);
            throw new Error("instancing error 1" + objName);
        }
    }

    if (op)
    {
        op._objName = objName;
        op.patch = this;
    }
    else
    {
        this._log.log("no op was created!?", identifier, id);
    }
    return op;
};

/**
 * create a new op in patch
 * @function addOp
 * @memberof Patch
 * @instance
 * @param {string} opIdentifier uuid or name, e.g. Ops.Math.Sum
 * @param {Object} uiAttribs Attributes
 * @param {string} id
 * @param {boolean} fromDeserialize
 * @param {string} opName e.g. Ops.Math.Sum
 * @example
 * // add invisible op
 * patch.addOp('Ops.Math.Sum', { showUiAttribs: false });
 */
Patch.prototype.addOp = function (opIdentifier, uiAttribs, id, fromDeserialize, opName)
{
    const op = this.createOp(opIdentifier, id, opName);

    if (op)
    {
        uiAttribs = uiAttribs || {};
        if (uiAttribs.hasOwnProperty("errors")) delete uiAttribs.errors;
        if (uiAttribs.hasOwnProperty("error")) delete uiAttribs.error;
        uiAttribs.subPatch = uiAttribs.subPatch || 0;

        op.setUiAttribs(uiAttribs);
        if (op.onCreate) op.onCreate();

        if (op.hasOwnProperty("onAnimFrame")) this.addOnAnimFrame(op);
        if (op.hasOwnProperty("onMasterVolumeChanged")) this._volumeListeners.push(op);

        if (this._opIdCache[op.id])
        {
            this._log.warn("opid with id " + op.id + " already exists in patch!");
            this.deleteOp(op.id); // strange with subpatch ops: why is this needed, somehow ops get added twice ???.....
            // return;
        }

        this.ops.push(op);
        this._opIdCache[op.id] = op;

        if (this._subPatchCacheAdd) this._subPatchCacheAdd(uiAttribs.subPatch, op);
        this.emitEvent("onOpAdd", op, fromDeserialize);

        if (op.init) op.init();

        op.emitEvent("init", fromDeserialize);
    }
    else
    {
        this._log.error("addop: op could not be created: ", opIdentifier);
    }

    return op;
};

Patch.prototype.addOnAnimFrame = function (op)
{
    for (let i = 0; i < this.animFrameOps.length; i++) if (this.animFrameOps[i] == op) { return; }

    this.animFrameOps.push(op);
};

Patch.prototype.removeOnAnimFrame = function (op)
{
    for (let i = 0; i < this.animFrameOps.length; i++)
    {
        if (this.animFrameOps[i] == op)
        {
            this.animFrameOps.splice(i, 1);
            return;
        }
    }
};

Patch.prototype.addOnAnimFrameCallback = function (cb)
{
    this.animFrameCallbacks.push(cb);
};

Patch.prototype.removeOnAnimCallback = function (cb)
{
    for (let i = 0; i < this.animFrameCallbacks.length; i++)
    {
        if (this.animFrameCallbacks[i] == cb)
        {
            this.animFrameCallbacks.splice(i, 1);
            return;
        }
    }
};

Patch.prototype.deleteOp = function (opid, tryRelink, reloadingOp)
{
    let found = false;
    for (const i in this.ops)
    {
        if (this.ops[i].id == opid)
        {
            const op = this.ops[i];
            let reLinkP1 = null;
            let reLinkP2 = null;

            if (op)
            {
                found = true;
                if (tryRelink)
                {
                    if (op.portsIn.length > 0 && op.portsIn[0].isLinked() && (op.portsOut.length > 0 && op.portsOut[0].isLinked()))
                    {
                        if (op.portsIn[0].getType() == op.portsOut[0].getType() && op.portsIn[0].links[0])
                        {
                            reLinkP1 = op.portsIn[0].links[0].getOtherPort(op.portsIn[0]);
                            reLinkP2 = op.portsOut[0].links[0].getOtherPort(op.portsOut[0]);
                        }
                    }
                }

                const opToDelete = this.ops[i];
                opToDelete.removeLinks();

                if (this.onDelete)
                {
                    // todo: remove
                    this._log.warn("deprecated this.onDelete", this.onDelete);
                    this.onDelete(opToDelete);
                }

                this.ops.splice(i, 1);
                opToDelete.emitEvent("delete", opToDelete);
                this.emitEvent("onOpDelete", opToDelete, reloadingOp);

                if (this.clearSubPatchCache) this.clearSubPatchCache(opToDelete.uiAttribs.subPatch);

                if (opToDelete.onDelete) opToDelete.onDelete(reloadingOp);
                opToDelete.cleanUp();

                if (reLinkP1 !== null && reLinkP2 !== null)
                {
                    this.link(reLinkP1.op, reLinkP1.getName(), reLinkP2.op, reLinkP2.getName());
                }

                delete this._opIdCache[opid];
                break;
            }
        }
    }

    if (!found) this._log.warn("core patch deleteop: not found...", opid);
};

Patch.prototype.getFrameNum = function ()
{
    return this._frameNum;
};

Patch.prototype.emitOnAnimFrameEvent = function (time, delta)
{
    time = time || this.timer.getTime();

    for (let i = 0; i < this.animFrameCallbacks.length; ++i)
        if (this.animFrameCallbacks[i])
            this.animFrameCallbacks[i](time, this._frameNum, delta);

    for (let i = 0; i < this.animFrameOps.length; ++i)
        if (this.animFrameOps[i].onAnimFrame)
            this.animFrameOps[i].onAnimFrame(time, this._frameNum, delta);
};

Patch.prototype.renderFrame = function (timestamp)
{
    this.timer.update(this.reqAnimTimeStamp);
    this.freeTimer.update(this.reqAnimTimeStamp);
    const time = this.timer.getTime();
    const startTime = performance.now();
    this.cgl.frameStartTime = this.timer.getTime();

    const delta = timestamp - this.reqAnimTimeStamp || timestamp;

    this.emitOnAnimFrameEvent(null, delta);

    this.cgl.profileData.profileFrameDelta = delta;
    this.reqAnimTimeStamp = timestamp;
    this.cgl.profileData.profileOnAnimFrameOps = performance.now() - startTime;

    this.emitEvent("onRenderFrame", time);

    this._frameNum++;
    if (this._frameNum == 1)
    {
        if (this.config.onFirstFrameRendered) this.config.onFirstFrameRendered();
    }
};

Patch.prototype.exec = function (timestamp)
{
    if (!this._renderOneFrame && (this._paused || this.aborted)) return;
    this.emitEvent("reqAnimFrame");
    cancelAnimationFrame(this._animReq);

    this.config.fpsLimit = this.config.fpsLimit || 0;
    if (this.config.fpsLimit)
    {
        this._frameInterval = 1000 / this.config.fpsLimit;
    }

    const now = CABLES.now();
    const frameDelta = now - this._frameNext;

    if (this.isEditorMode())
    {
        if (!this._renderOneFrame)
        {
            if (now - this._lastFrameTime >= 500 && this._lastFrameTime !== 0 && !this._frameWasdelayed)
            {
                this._lastFrameTime = 0;
                setTimeout(this.exec.bind(this), 500);
                this.emitEvent("renderDelayStart");
                this._frameWasdelayed = true;
                return;
            }
        }
    }

    if (this._renderOneFrame || this.config.fpsLimit === 0 || frameDelta > this._frameInterval || this._frameWasdelayed)
    {
        this.renderFrame(timestamp);

        if (this._frameInterval) this._frameNext = now - (frameDelta % this._frameInterval);
    }

    if (this._frameWasdelayed)
    {
        this.emitEvent("renderDelayEnd");
        this._frameWasdelayed = false;
    }

    if (this._renderOneFrame)
    {
        if (this.onOneFrameRendered) this.onOneFrameRendered(); // todo remove everywhere and use propper event...
        this.emitEvent("renderedOneFrame");
        this._renderOneFrame = false;
    }


    if (this.config.doRequestAnimation) this._animReq = this.cgl.canvas.ownerDocument.defaultView.requestAnimationFrame(this.exec.bind(this));
};

/**
 * link two ops/ports
 * @function link
 * @memberof Patch
 * @instance
 * @param {Op} op1
 * @param {String} port1Name
 * @param {Op} op2
 * @param {String} port2Name
 * @param {boolean} lowerCase
 * @param {boolean} fromDeserialize
 */
Patch.prototype.link = function (op1, port1Name, op2, port2Name, lowerCase, fromDeserialize)
{
    if (!op1) return this._log.warn("link: op1 is null ");
    if (!op2) return this._log.warn("link: op2 is null");

    const port1 = op1.getPort(port1Name, lowerCase);
    const port2 = op2.getPort(port2Name, lowerCase);

    if (!port1) return op1._log.warn("port1 not found! " + port1Name + "(" + op1.objName + ")");
    if (!port2) return op1._log.warn("port2 not found! " + port2Name + " of " + op2.name + "(" + op2.objName + ")", op2);

    if (!port1.shouldLink(port1, port2) || !port2.shouldLink(port1, port2)) return false;

    if (Link.canLink(port1, port2))
    {
        const link = new Link(this);
        link.link(port1, port2);

        this.emitEvent("onLink", port1, port2, link, fromDeserialize);
        return link;
    }
};

Patch.prototype.serialize = function (options)
{
    const obj = {};

    options = options || {};
    obj.ops = [];
    obj.settings = this.settings;
    for (const i in this.ops)
    {
        const op = this.ops[i];
        obj.ops.push(op.getSerialized());
    }

    cleanJson(obj);

    if (options.asObject) return obj;
    return JSON.stringify(obj);
};

Patch.prototype.getOpsByRefId = function (refId)
{
    const perf = CABLES.UI.uiProfiler.start("[corepatchetend] getOpsByRefId");
    const refOps = [];
    const ops = gui.corePatch().ops;
    for (let i = 0; i < ops.length; i++)
        if (ops[i].storage && ops[i].storage.ref == refId) refOps.push(ops[i]);
    perf.finish();
    return refOps;
};


Patch.prototype.getOpById = function (opid)
{
    return this._opIdCache[opid];
};

Patch.prototype.getOpsByName = function (name)
{
    // TODO: is this still needed ? unclear behaviour....
    const arr = [];
    for (const i in this.ops)
        if (this.ops[i].name == name) arr.push(this.ops[i]);
    return arr;
};

Patch.prototype.getOpsByObjName = function (name)
{
    const arr = [];
    for (const i in this.ops)
        if (this.ops[i].objName == name) arr.push(this.ops[i]);
    return arr;
};

Patch.prototype.getOpsByOpId = function (opid)
{
    const arr = [];
    for (const i in this.ops)
        if (this.ops[i].opId == opid) arr.push(this.ops[i]);
    return arr;
};

Patch.prototype.loadLib = function (which)
{
    ajaxSync(
        "/ui/libs/" + which + ".js",
        (err, res) =>
        {
            const se = document.createElement("script");
            se.type = "text/javascript";
            se.text = res;
            document.getElementsByTagName("head")[0].appendChild(se);
        },
        "GET",
    );
    // open and send a synchronous request
    // xhrObj.open('GET', '/ui/libs/'+which+'.js', false);
    // xhrObj.send('');
    // add the returned content to a newly created script tag
};


Patch.prototype.getSubPatchOp = function (patchId, objName)
{
    for (const i in this.ops)
        if (this.ops[i].uiAttribs && this.ops[i].uiAttribs.subPatch == patchId && this.ops[i].objName == objName)
            return this.ops[i];

    return false;
};

Patch.prototype._addLink = function (opinid, opoutid, inName, outName)
{
    return this.link(this.getOpById(opinid), inName, this.getOpById(opoutid), outName, false, true);
};

Patch.prototype.deSerialize = function (obj, options)
{
    options = options || { "genIds": false, "createRef": false };
    if (this.aborted) return;
    const newOps = [];
    const loadingId = this.loading.start("core", "deserialize");

    this.namespace = obj.namespace || "";
    this.name = obj.name || "";

    if (typeof obj === "string") obj = JSON.parse(obj);

    this.settings = obj.settings;

    this.emitEvent("patchLoadStart");

    if (window.logStartup)logStartup("add " + obj.ops.length + " ops... ");

    const addedOps = [];

    // add ops...
    for (let iop = 0; iop < obj.ops.length; iop++)
    {
        const start = CABLES.now();
        const opData = obj.ops[iop];
        let op = null;

        try
        {
            if (opData.opId) op = this.addOp(opData.opId, opData.uiAttribs, opData.id, true, opData.objName);
            else op = this.addOp(opData.objName, opData.uiAttribs, opData.id, true);
        }
        catch (e)
        {
            this._log.error("[instancing error] op data:", opData, e);
            // throw new Error("could not create op by id: <b>" + (opData.objName || opData.opId) + "</b> (" + opData.id + ")");
        }

        if (op)
        {
            addedOps.push(op);
            if (options.genIds) op.id = shortId();
            op.portsInData = opData.portsIn;
            op._origData = JSON.parse(JSON.stringify(opData));
            op.storage = opData.storage;
            // if (opData.hasOwnProperty("disabled"))op.setEnabled(!opData.disabled);

            for (const ipi in opData.portsIn)
            {
                const objPort = opData.portsIn[ipi];
                if (objPort && objPort.hasOwnProperty("name"))
                {
                    const port = op.getPort(objPort.name);

                    if (port && (port.uiAttribs.display == "bool" || port.uiAttribs.type == "bool") && !isNaN(objPort.value)) objPort.value = objPort.value == true ? 1 : 0;
                    if (port && objPort.value !== undefined && port.type != CONSTANTS.OP.OP_PORT_TYPE_TEXTURE) port.set(objPort.value);

                    if (port)
                    {
                        port.deSerializeSettings(objPort);
                    }
                    else
                    {
                        // if (port.uiAttribs.hasOwnProperty("title"))
                        // {
                        //     op.preservedPortTitles = op.preservedPortTitles || {};
                        //     op.preservedPortTitles[port.name] = port.uiAttribs.title;
                        // }
                        op.preservedPortValues = op.preservedPortValues || {};
                        op.preservedPortValues[objPort.name] = objPort.value;
                    }
                }
            }

            for (const ipo in opData.portsOut)
            {
                const objPort = opData.portsOut[ipo];
                if (objPort && objPort.hasOwnProperty("name"))
                {
                    const port2 = op.getPort(objPort.name);

                    if (port2)
                    {
                        port2.deSerializeSettings(objPort);

                        if (port2.uiAttribs.hasOwnProperty("title"))
                        {
                            op.preservedPortTitles = op.preservedPortTitles || {};
                            op.preservedPortTitles[port2.name] = port2.uiAttribs.title;
                        }


                        if (port2.type != CONSTANTS.OP.OP_PORT_TYPE_TEXTURE && objPort.hasOwnProperty("value"))
                            port2.set(obj.ops[iop].portsOut[ipo].value);

                        if (objPort.expose) port2.setUiAttribs({ "expose": true });
                    }
                }
            }
            newOps.push(op);
        }

        const timeused = Math.round(100 * (CABLES.now() - start)) / 100;
        if (!this.silent && timeused > 5) console.log("long op init ", obj.ops[iop].objName, timeused);
    }
    if (window.logStartup)logStartup("add ops done");

    for (const i in this.ops)
    {
        if (this.ops[i].onLoadedValueSet)
        {
            this.ops[i].onLoadedValueSet(this.ops[i]._origData);
            this.ops[i].onLoadedValueSet = null;
            this.ops[i]._origData = null;
        }
        this.ops[i].emitEvent("loadedValueSet");
    }

    if (window.logStartup)logStartup("creating links");

    if (options.opsCreated)options.opsCreated(addedOps);
    // create links...
    if (obj.ops)
    {
        for (let iop = 0; iop < obj.ops.length; iop++)
        {
            if (obj.ops[iop].portsIn)
            {
                for (let ipi2 = 0; ipi2 < obj.ops[iop].portsIn.length; ipi2++)
                {
                    if (obj.ops[iop].portsIn[ipi2] && obj.ops[iop].portsIn[ipi2].links)
                    {
                        for (let ili = 0; ili < obj.ops[iop].portsIn[ipi2].links.length; ili++)
                        {
                            const l = this._addLink(
                                obj.ops[iop].portsIn[ipi2].links[ili].objIn,
                                obj.ops[iop].portsIn[ipi2].links[ili].objOut,
                                obj.ops[iop].portsIn[ipi2].links[ili].portIn,
                                obj.ops[iop].portsIn[ipi2].links[ili].portOut);

                            // const took = performance.now - startTime;
                            // if (took > 100)console.log(obj().ops[iop].portsIn[ipi2].links[ili].objIn, obj.ops[iop].portsIn[ipi2].links[ili].objOut, took);
                        }
                    }
                }
            }
            if (obj.ops[iop].portsOut)
                for (let ipi2 = 0; ipi2 < obj.ops[iop].portsOut.length; ipi2++)
                    if (obj.ops[iop].portsOut[ipi2] && obj.ops[iop].portsOut[ipi2].links)
                    {
                        for (let ili = 0; ili < obj.ops[iop].portsOut[ipi2].links.length; ili++)
                        {
                            if (obj.ops[iop].portsOut[ipi2].links[ili])
                            {
                                if (obj.ops[iop].portsOut[ipi2].links[ili].subOpRef)
                                {
                                    // lost link
                                    const outOp = this.getOpById(obj.ops[iop].portsOut[ipi2].links[ili].objOut);
                                    let dstOp = null;
                                    let theSubPatch = 0;

                                    for (let i = 0; i < this.ops.length; i++)
                                    {
                                        if (
                                            this.ops[i].storage &&
                                            this.ops[i].storage.ref == obj.ops[iop].portsOut[ipi2].links[ili].subOpRef &&
                                            outOp.uiAttribs.subPatch == this.ops[i].uiAttribs.subPatch
                                        )
                                        {
                                            theSubPatch = this.ops[i].patchId.get();
                                            break;
                                        }
                                    }

                                    for (let i = 0; i < this.ops.length; i++)
                                    {
                                        if (
                                            this.ops[i].storage &&
                                            this.ops[i].storage.ref == obj.ops[iop].portsOut[ipi2].links[ili].refOp &&
                                            this.ops[i].uiAttribs.subPatch == theSubPatch)
                                        {
                                            dstOp = this.ops[i];
                                            break;
                                        }
                                    }

                                    if (!dstOp) this._log.warn("could not find op for lost link");
                                    else
                                    {
                                        const l = this._addLink(
                                            dstOp.id,
                                            obj.ops[iop].portsOut[ipi2].links[ili].objOut,

                                            obj.ops[iop].portsOut[ipi2].links[ili].portIn,
                                            obj.ops[iop].portsOut[ipi2].links[ili].portOut);
                                    }
                                }
                                else
                                {
                                    const l = this._addLink(obj.ops[iop].portsOut[ipi2].links[ili].objIn, obj.ops[iop].portsOut[ipi2].links[ili].objOut, obj.ops[iop].portsOut[ipi2].links[ili].portIn, obj.ops[iop].portsOut[ipi2].links[ili].portOut);

                                    if (!l)
                                    {
                                        const op1 = this.getOpById(obj.ops[iop].portsOut[ipi2].links[ili].objIn);
                                        const op2 = this.getOpById(obj.ops[iop].portsOut[ipi2].links[ili].objOut);

                                        if (!op1)console.log("could not find link op1");
                                        if (!op2)console.log("could not find link op2");

                                        const p1Name = obj.ops[iop].portsOut[ipi2].links[ili].portIn;

                                        if (op1 && !op1.getPort(p1Name))
                                        {
                                            // console.log("PRESERVE port 1 not found", p1Name);

                                            op1.preservedPortLinks[p1Name] = op1.preservedPortLinks[p1Name] || [];
                                            op1.preservedPortLinks[p1Name].push(obj.ops[iop].portsOut[ipi2].links[ili]);
                                        }

                                        const p2Name = obj.ops[iop].portsOut[ipi2].links[ili].portOut;
                                        if (op2 && !op2.getPort(p2Name))
                                        {
                                            // console.log("PRESERVE port 2 not found", obj.ops[iop].portsOut[ipi2].links[ili].portOut);
                                            op2.preservedPortLinks[p1Name] = op2.preservedPortLinks[p1Name] || [];
                                            op2.preservedPortLinks[p1Name].push(obj.ops[iop].portsOut[ipi2].links[ili]);
                                        }
                                    }
                                }
                            }
                        }
                    }
        }
    }

    if (window.logStartup)logStartup("calling ops onloaded");

    for (const i in this.ops)
    {
        if (this.ops[i].onLoaded)
        {
            // TODO: deprecate!!!
            this.ops[i].onLoaded();
            this.ops[i].onLoaded = null;
        }
    }

    if (window.logStartup)logStartup("initializing ops...");
    for (const i in this.ops)
    {
        if (this.ops[i].init)
        {
            try
            {
                this.ops[i].init();
                this.ops[i].init = null;
            }
            catch (e)
            {
                console.error("op.init crash", e);
            }
        }
    }

    if (window.logStartup)logStartup("initializing vars...");

    if (this.config.variables)
        for (const varName in this.config.variables)
            this.setVarValue(varName, this.config.variables[varName]);

    if (window.logStartup)logStartup("initializing var ports");

    for (const i in this.ops)
    {
        this.ops[i].initVarPorts();
        delete this.ops[i].uiAttribs.pasted;
    }

    setTimeout(() => { this.loading.finished(loadingId); }, 100);

    if (this.config.onPatchLoaded) this.config.onPatchLoaded(this);

    this.deSerialized = true;
    this.emitEvent("patchLoadEnd", newOps, obj, options.genIds);
};

Patch.prototype.profile = function (enable)
{
    this.profiler = new Profiler(this);
    for (const i in this.ops)
    {
        this.ops[i].profile(enable);
    }
};

// ----------------------

/**
 * set variable value
 * @function setVariable
 * @memberof Patch
 * @instance
 * @param {String} name of variable
 * @param {Number|String|Boolean} val value
 */
Patch.prototype.setVariable = function (name, val)
{
    // if (this._variables.hasOwnProperty(name))
    if (this._variables[name] !== undefined)
    {
        this._variables[name].setValue(val);
    }
    else
    {
        this._log.warn("variable " + name + " not found!");
    }
};

Patch.prototype._sortVars = function ()
{
    if (!this.isEditorMode()) return;
    const ordered = {};
    Object.keys(this._variables).sort(
        (a, b) =>
        { return a.localeCompare(b, "en", { "sensitivity": "base" }); }
    ).forEach((key) =>
    {
        ordered[key] = this._variables[key];
    });
    this._variables = ordered;
};

/**
 * has variable
 * @function hasVariable
 * @memberof Patch
 * @instance
 * @param {String} name of variable
 */
Patch.prototype.hasVar = function (name)
{
    return this._variables[name] !== undefined;

    // return this._variables.hasOwnProperty(name);
};

// used internally
Patch.prototype.setVarValue = function (name, val, type)
{
    if (this.hasVar(name))
    {
        this._variables[name].setValue(val);
    }
    else
    {
        this._variables[name] = new core_variable(name, val, type);
        this._sortVars();
        this.emitEvent("variablesChanged");
    }
    return this._variables[name];
};
// old?
Patch.prototype.getVarValue = function (name, val)
{
    if (this._variables.hasOwnProperty(name)) return this._variables[name].getValue();
};

/**
 * @function getVar
 * @memberof Patch
 * @instance
 * @param {String} name
 * @return {Variable} variable
 */
Patch.prototype.getVar = function (name)
{
    if (this._variables.hasOwnProperty(name)) return this._variables[name];
};


Patch.prototype.deleteVar = function (name)
{
    for (let i = 0; i < this.ops.length; i++)
        for (let j = 0; j < this.ops[i].portsIn.length; j++)
            if (this.ops[i].portsIn[j].getVariableName() == name)
                this.ops[i].portsIn[j].setVariable(null);

    delete this._variables[name];
    this.emitEvent("variableDeleted", name);
    this.emitEvent("variablesChanged");
};

/**
 * @function getVars
 * @memberof Patch
 * @instance
 * @param t
 * @return {Array<Variable>} variables
 * @function
 */
Patch.prototype.getVars = function (t)
{
    if (t === undefined) return this._variables;

    const vars = [];
    if (t == CABLES.OP_PORT_TYPE_STRING) t = "string";
    if (t == CABLES.OP_PORT_TYPE_VALUE) t = "number";
    if (t == CABLES.OP_PORT_TYPE_ARRAY) t = "array";
    if (t == CABLES.OP_PORT_TYPE_OBJECT) t = "object";

    for (const i in this._variables)
    {
        if (!this._variables[i].type || this._variables[i].type == t) vars.push(this._variables[i]);
    }
    return vars;
};

/**
 * @function exitError
 * @memberof Patch
 * @instance
 * @param errorId
 * @param errorMessage
 * @param ex
 * @description cancel patch execution and quit showing an errormessage
 * @function
 */
Patch.prototype.exitError = function (errorId, errorMessage, ex)
{
    this.aborted = true;

    if (this && this.config && this.config.onError)
    {
        this.config.onError(errorId, errorMessage);
    }
    else
    {
        if (!this.isEditorMode())
        {
            const newDiv = document.createElement("div");

            const rect = this.cgl.canvas.getBoundingClientRect();

            newDiv.setAttribute("style", "position:absolute;border:5px solid red;padding:15px;background-color:black;color:white;font-family:monospace;");
            newDiv.style.top = rect.top + "px";
            newDiv.style.left = rect.left + "px";
            let str = "cables - An error occured:<br/>";
            str += "[" + errorId + "] - " + errorMessage;
            if (ex)str += "<br/>Exception: " + ex.message;
            newDiv.innerHTML = str;

            console.log(ex);
            const pe = this.cgl.canvas.parentElement;

            while (pe.hasChildNodes()) pe.removeChild(pe.lastChild);

            document.body.appendChild(newDiv);
        }
    }
};

/**
 * @function preRenderOps
 * @memberof Patch
 * @instance
 * @description invoke pre rendering of ops
 * @function
 */
Patch.prototype.preRenderOps = function ()
{
    this._log.log("prerendering...");

    for (let i = 0; i < this.ops.length; i++)
    {
        if (this.ops[i].preRender)
        {
            this.ops[i].preRender();
            this._log.log("prerender " + this.ops[i].objName);
        }
    }
};

/**
 * @function dispose
 * @memberof Patch
 * @instance
 * @description stop, dispose and cleanup patch
 */
Patch.prototype.dispose = function ()
{
    this.pause();
    this.clear();
    this.cgl.dispose();
};

Patch.prototype.pushTriggerStack = function (p)
{
    this._triggerStack.push(p);
};

Patch.prototype.popTriggerStack = function ()
{
    this._triggerStack.pop();
};

Patch.prototype.printTriggerStack = function ()
{
    if (this._triggerStack.length == 0)
    {
        // console.log("stack length", this._triggerStack.length); // eslint-disable-line
        return;
    }
    console.groupCollapsed( // eslint-disable-line
        "trigger port stack " + this._triggerStack[this._triggerStack.length - 1].op.objName + "." + this._triggerStack[this._triggerStack.length - 1].name,
    );

    const rows = [];
    for (let i = 0; i < this._triggerStack.length; i++)
    {
        rows.push(i + ". " + this._triggerStack[i].op.objName + " " + this._triggerStack[i].name);
    }

    console.table(rows); // eslint-disable-line
    console.groupEnd(); // eslint-disable-line
};

/**
 * returns document object of the patch could be != global document object when opening canvas ina popout window
 * @function getDocument
 * @memberof Patch
 * @instance
 * @return {Object} document
 */
Patch.prototype.getDocument = function ()
{
    return this.cgl.canvas.ownerDocument;
};

Patch.replaceOpIds = function (json, options)
{
    const opids = {};
    for (const i in json.ops)
    {
        opids[json.ops[i].id] = json.ops[i];
    }

    for (const j in json.ops)
    {
        for (const k in json.ops[j].portsOut)
        {
            const links = json.ops[j].portsOut[k].links;
            if (links)
            {
                let l = links.length;

                while (l--)
                {
                    if (links[l] && (!opids[links[l].objIn] || !opids[links[l].objOut]))
                    {
                        if (!options.doNotUnlinkLostLinks)
                        {
                            links.splice(l, 1);
                        }
                        else
                        {
                            if (options.fixLostLinks)
                            {
                                // console.log("lost link...?", links[l]);
                                const op = gui.corePatch().getOpById(links[l].objIn);
                                if (!op) console.log("op not found!");
                                else
                                {
                                    const outerOp = gui.patchView.getSubPatchOuterOp(op.uiAttribs.subPatch);
                                    if (outerOp)
                                    {
                                        op.storage = op.storage || {};
                                        op.storage.ref = op.storage.ref || CABLES.shortId();
                                        links[l].refOp = op.storage.ref;
                                        links[l].subOpRef = outerOp.storage.ref;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }



    for (const i in json.ops)
    {
        const op = json.ops[i];
        const oldId = op.id;
        let newId = CABLES.shortId();

        if (options.prefixHash) newId = prefixedHash(options.prefixHash + oldId);

        else if (options.prefixId) newId = options.prefixId + oldId;
        else if (options.refAsId) // when saving json
        {
            if (op.storage && op.storage.ref)
            {
                newId = op.storage.ref;
                delete op.storage.ref;
            }
            else
            {
                op.storage = op.storage || {};
                op.storage.ref = newId = CABLES.shortId();
            }
        }

        const newID = op.id = newId;

        if (options.oldIdAsRef) // when loading json
        {
            op.storage = op.storage || {};
            op.storage.ref = oldId;
        }

        for (const j in json.ops)
        {
            if (json.ops[j].portsIn)
                for (const k in json.ops[j].portsIn)
                {
                    if (json.ops[j].portsIn[k].links)
                    {
                        let l = json.ops[j].portsIn[k].links.length;

                        while (l--) if (json.ops[j].portsIn[k].links[l] === null) json.ops[j].portsIn[k].links.splice(l, 1);

                        for (l in json.ops[j].portsIn[k].links)
                        {
                            if (json.ops[j].portsIn[k].links[l].objIn === oldId) json.ops[j].portsIn[k].links[l].objIn = newID;
                            if (json.ops[j].portsIn[k].links[l].objOut === oldId) json.ops[j].portsIn[k].links[l].objOut = newID;
                        }
                    }
                }

            if (json.ops[j].portsOut)
                for (const k in json.ops[j].portsOut)
                {
                    if (json.ops[j].portsOut[k].links)
                    {
                        let l = json.ops[j].portsOut[k].links.length;

                        while (l--) if (json.ops[j].portsOut[k].links[l] === null) json.ops[j].portsOut[k].links.splice(l, 1);

                        for (l in json.ops[j].portsOut[k].links)
                        {
                            if (json.ops[j].portsOut[k].links[l].objIn === oldId) json.ops[j].portsOut[k].links[l].objIn = newID;
                            if (json.ops[j].portsOut[k].links[l].objOut === oldId) json.ops[j].portsOut[k].links[l].objOut = newID;
                        }
                    }
                }
        }
    }

    // set correct subpatch
    const subpatchIds = [];
    const fixedSubPatches = [];

    for (let i = 0; i < json.ops.length; i++)
    {
        // if (CABLES.Op.isSubPatchOpName(json.ops[i].objName))
        if (json.ops[i].storage && json.ops[i].storage.subPatchVer)
        {
            for (const k in json.ops[i].portsIn)
            {
                if (json.ops[i].portsIn[k].name === "patchId")
                {
                    let newId = shortId();

                    if (options.prefixHash) newId = prefixedHash(options.prefixHash + json.ops[i].portsIn[k].value);

                    const oldSubPatchId = json.ops[i].portsIn[k].value;
                    const newSubPatchId = json.ops[i].portsIn[k].value = newId;

                    subpatchIds.push(newSubPatchId);

                    for (let j = 0; j < json.ops.length; j++)
                    {
                        // op has no uiAttribs in export, we don't care about subpatches in export though
                        if (json.ops[j].uiAttribs)
                        {
                            if (json.ops[j].uiAttribs.subPatch === oldSubPatchId)
                            {
                                json.ops[j].uiAttribs.subPatch = newSubPatchId;
                                fixedSubPatches.push(json.ops[j].id);
                            }
                        }
                    }
                }
            }
        }
    }

    for (const kk in json.ops)
    {
        let found = false;
        for (let j = 0; j < fixedSubPatches.length; j++)
        {
            if (json.ops[kk].id === fixedSubPatches[j])
            {
                found = true;
                break;
            }
        }
        // op has no uiAttribs in export, we don't care about subpatches in export though
        if (!found && json.ops[kk].uiAttribs && options.parentSubPatchId != null)
            json.ops[kk].uiAttribs.subPatch = options.parentSubPatchId;
    }

    return json;
};

/**
 * remove an eventlistener
 * @instance
 * @function addEventListener
 * @param {String} name of event
 * @param {function} callback
 */

/**
 * remove an eventlistener
 * @instance
 * @function removeEventListener
 * @param {String} name of event
 * @param {function} callback
 */

/**
 * op added to patch event
 * @event onOpAdd
 *
 * @memberof Patch
 * @type {Object}
 * @property {Op} op new op
 */

/**
 * op deleted from patch
 * @event onOpDelete
 * @memberof Patch
 * @type {Object}
 * @property {Op} op that will be deleted
 */

/**
 * link event - two ports will be linked
 * @event onLink
 * @memberof Patch
 * @type {Object}
 * @property {Port} port1
 * @property {Port} port2
 */

/**
 * unlink event - a link was deleted
 * @event onUnLink
 * @memberof Patch
 * @type {Object}
 */

/**
 * variables has been changed / a variable has been added to the patch
 * @event variablesChanged
 * @memberof Patch
 * @type {Object}
 * @property {Port} port1
 * @property {Port} port2
 */

/**
 * configuration object for loading a patch
 * @typedef {Object} PatchConfig
 * @hideconstructor
 * @property {String} [prefixAssetPath=''] prefix for path to assets
 * @property {String} [assetPath=''] path to assets
 * @property {String} [jsPath=''] path to javascript files
 * @property {String} [glCanvasId='glcanvas'] dom element id of canvas element
 * @property {Function} [onError=null] called when an error occurs
 * @property {Function} [onFinishedLoading=null] called when patch finished loading all assets
 * @property {Function} [onFirstFrameRendered=null] called when patch rendered it's first frame
 * @property {Boolean} [glCanvasResizeToWindow=false] resize canvas automatically to window size
 * @property {Boolean} [doRequestAnimation=true] do requestAnimationFrame set to false if you want to trigger exec() from outside (only do if you know what you are doing)
 * @property {Boolean} [clearCanvasColor=true] clear canvas in transparent color every frame
 * @property {Boolean} [clearCanvasDepth=true] clear depth every frame
 * @property {Boolean} [glValidateShader=true] enable/disable validation of shaders *
 * @property {Boolean} [silent=false]
 * @property {Number} [fpsLimit=0] 0 for maximum possible frames per second
 * @property {String} [glslPrecision='mediump'] default precision for glsl shader
 *
 */

/* harmony default export */ const core_patch = (Patch);

;// CONCATENATED MODULE: ./src/core/embedding.js



const EMBED = {};

/**
 * add patch into html element (will create canvas and set size to fill containerElement)
 * @name CABLES.EMBED#addPatch
 * @param {object|string} _element containerElement dom element or id of element
 * @param {object} options patch options
 * @function
 */
EMBED.addPatch = function (_element, options)
{
    let el = _element;
    let id = generateUUID();
    if (typeof _element == "string")
    {
        id = _element;
        el = document.getElementById(id);

        if (!el)
        {
            console.error(id + " Polyshape Container Element not found!");
            return;
        }
    }

    const canvEl = document.createElement("canvas");
    canvEl.id = "glcanvas_" + id;
    canvEl.width = el.clientWidth;
    canvEl.height = el.clientHeight;

    window.addEventListener(
        "resize",
        function ()
        {
            this.setAttribute("width", el.clientWidth);
            this.height = el.clientHeight;
        }.bind(canvEl),
    );

    el.appendChild(canvEl);

    options = options || {};
    options.glCanvasId = canvEl.id;

    if (!options.onError)
    {
        options.onError = function (err)
        {
            console.error(err);
        };
    }

    CABLES.patch = new core_patch(options);
    return canvEl;
};



;// CONCATENATED MODULE: ./src/core/webaudio.js
/** @namespace WEBAUDIO */



const WEBAUDIO = {};

WEBAUDIO.toneJsInitialized = false;

/*
 * External JSDoc definitions
 */

/**
 * Part of the Web Audio API, the AudioBuffer interface represents a short audio asset residing in memory.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer}
 */

/**
 * Part of the Web Audio API, the AudioNode interface is a generic interface for representing an audio processing module.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioNode}
 */

/**
 * The AudioContext interface represents an audio-processing graph built from audio modules linked together
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext}
 */

/**
 * Checks if a global audio context has been created and creates
 * it if necessary. This audio context can be used for native Web Audio as well as Tone.js ops.
 * Associates the audio context with Tone.js if it is being used
 * @param {CABLES.Op} op - The operator which needs the Audio Context
 */
WEBAUDIO.createAudioContext = function (op)
{
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    if (window.AudioContext)
    {
        if (!window.audioContext)
        {
            window.audioContext = new AudioContext();
        }
        // check if tone.js lib is being used
        if (window.Tone && !WEBAUDIO.toneJsInitialized)
        {
            // set current audio context in tone.js
            Tone.setContext(window.audioContext);
            WEBAUDIO.toneJsInitialized = true;
        }
    }
    else
    {
        op.patch.config.onError("NO_WEBAUDIO", "Web Audio is not supported in this browser.");
        return;
    }
    return window.audioContext;
};

/**
 * Returns the audio context.
 * Before `createAudioContext` must have been called at least once.
 * It most cases you should use `createAudioContext`, which just returns the audio context
 * when it has been created already.
 */
WEBAUDIO.getAudioContext = function ()
{
    return window.audioContext;
};

/**
 * Creates an audio in port for the op with name `portName`
 * When disconnected it will disconnect the previous connected audio node
 * from the op's audio node.
 * @param {CABLES.Op} op - The operator to create the audio port in
 * @param {string} portName - The name of the port
 * @param {AudioNode} audioNode - The audionode incoming connections should connect to
 * @param {number} [inputChannelIndex=0] - If the audio node has multiple inputs, this is the index of the input channel to connect to
 * @returns {CABLES.Port|undefined} - The newly created audio in port or `undefined` if there was an error
 */
WEBAUDIO.createAudioInPort = function (op, portName, audioNode, inputChannelIndex)
{
    if (!op || !portName || !audioNode)
    {
        const msg = "ERROR: createAudioInPort needs three parameters, op, portName and audioNode";
        op.log(msg);
        throw new Error(msg);
        // return;
    }
    if (!inputChannelIndex)
    {
        inputChannelIndex = 0;
    }
    op.webAudio = op.webAudio || {};
    op.webAudio.audioInPorts = op.webAudio.audioInPorts || [];
    const port = op.inObject(portName);
    port.webAudio = {};
    port.webAudio.previousAudioInNode = null;
    port.webAudio.audioNode = audioNode;

    op.webAudio.audioInPorts[portName] = port;

    port.onChange = function ()
    {
        const audioInNode = port.get();
        // when port disconnected, disconnect audio nodes
        if (!audioInNode)
        {
            if (port.webAudio.previousAudioInNode)
            {
                try
                {
                    if (port.webAudio.previousAudioInNode.disconnect) port.webAudio.previousAudioInNode.disconnect(port.webAudio.audioNode, 0, inputChannelIndex);
                    op.setUiError("audioCtx", null);
                }
                catch (e)
                {
                    try
                    {
                        port.webAudio.previousAudioInNode.disconnect(port.webAudio.audioNode);
                    }
                    catch (er)
                    {
                        op.log(
                            "Disconnecting audio node with in/out port index, as well as without in/out-port-index did not work ",
                            e,
                        );
                        if (e.printStackTrace)
                        {
                            e.printStackTrace();
                        }
                        throw e;
                    }
                }
            }
        }
        else
        {
            try
            {
                if (audioInNode.connect)
                {
                    audioInNode.connect(port.webAudio.audioNode, 0, inputChannelIndex);
                    op.setUiError("audioCtx", null);
                }
                else op.setUiError("audioCtx", "The passed input is not an audio context. Please make sure you connect an audio context to the input.", 2);
            }
            catch (e)
            {
                op.log("Error: Failed to connect web audio node!", e);
                op.log("port.webAudio.audioNode", port.webAudio.audioNode);
                op.log("audioInNode: ", audioInNode);
                op.log("inputChannelIndex:", inputChannelIndex);
                op.log("audioInNode.connect: ", audioInNode.connect);
                throw e;
            }
        }
        port.webAudio.previousAudioInNode = audioInNode;
    };
    // TODO: Maybe add subtype to audio-node-object?
    return port;
};

/**
 * Sometimes it is necessary to replace a node of a port, if so all
 * connections to this node must be disconnected and connections to the new
 * node must be made.
 * Can be used for both Audio ports as well as AudioParam ports
 * if used with an AudioParam pass e.g. `synth.frequency` as newNode
 * @param {CABLES.Port} port - The port where the audio node needs to be replaced
 * @param oldNode
 * @param newNode
 */
WEBAUDIO.replaceNodeInPort = function (port, oldNode, newNode)
{
    const connectedNode = port.webAudio.previousAudioInNode;
    // check if connected
    if (connectedNode && connectedNode.disconnect)
    {
        try
        {
            connectedNode.disconnect(oldNode);
        }
        catch (e)
        {
            if (e.printStackTrace)
            {
                e.printStackTrace();
            }
            throw new Error("replaceNodeInPort: Could not disconnect old audio node. " + e.name + " " + e.message);
        }
        port.webAudio.audioNode = newNode;
        try
        {
            connectedNode.connect(newNode);
        }
        catch (e)
        {
            if (e.printStackTrace)
            {
                e.printStackTrace();
            }
            throw new Error("replaceNodeInPort: Could not connect to new node. " + e.name + " " + e.message);
        }
    }
};

/**
 * Creates an audio out port which takes care of (dis-)connecting on it’s own
 * @param {CABLES.op} op - The op to create an audio out port for
 * @param {string} portName - The name of the port to be created
 * @param {AudioNode} audioNode - The audio node to link to the port
 * @returns {(CABLES.Port|undefined)} - The newly created audio out port or `undefined` if there was an error
 */
WEBAUDIO.createAudioOutPort = function (op, portName, audioNode)
{
    if (!op || !portName || !audioNode)
    {
        const msg = "ERROR: createAudioOutPort needs three parameters, op, portName and audioNode";
        op.log(msg);
        throw new Error(msg);
    }

    const port = op.outObject(portName);
    // TODO: Maybe add subtype to audio-node-object?
    port.set(audioNode);
    return port;
};

/**
 * Creates an audio param in port for the op with name portName.
 * The port accepts other audio nodes as signals as well as values (numbers)
 * When the port is disconnected it will disconnect the previous connected audio node
 * from the op's audio node and restore the number value set before.
 * @param {CABLES.Op} op - The operator to create an audio param input port for
 * @param {string} portName - The name of the port to create
 * @param audioNode
 * @param options
 * @param defaultValue
 * @returns {(CABLES.Port|undefined)} - The newly created port, which takes care of (dis-)connecting on its own, or `undefined` if there was an error
 */
WEBAUDIO.createAudioParamInPort = function (op, portName, audioNode, options, defaultValue)
{
    if (!op || !portName || !audioNode)
    {
        op.log("ERROR: createAudioParamInPort needs three parameters, op, portName and audioNode");
        if (op && op.name) op.log("opname: ", op.name);
        op.log("portName", portName);
        op.log("audioNode: ", audioNode);
        return;
    }
    op.webAudio = op.webAudio || {};
    op.webAudio.audioInPorts = op.webAudio.audioInPorts || [];
    // var port = op.inObject(portName);
    const port = op.inDynamic(
        portName,
        [CONSTANTS.OP.OP_PORT_TYPE_VALUE, CONSTANTS.OP.OP_PORT_TYPE_OBJECT],
        options,
        defaultValue,
    );
    port.webAudio = {};
    port.webAudio.previousAudioInNode = null;
    port.webAudio.audioNode = audioNode;

    op.webAudio.audioInPorts[portName] = port;

    // port.onLinkChanged = function() {
    //   op.log("onLinkChanged");
    //   if(port.isLinked()) {
    //
    //       if(port.links[0].portOut.type === CABLES.CONSTANTS.OP.OP_PORT_TYPE_) { // value
    //
    //       } else if(port.links[0].portOut.type === CABLES.CONSTANTS.OP.OP_PORT_TYPE_OBJECT) { // object
    //
    //       }
    //   } else { // unlinked
    //
    //   }
    // };

    port.onChange = function ()
    {
        const audioInNode = port.get();
        const node = port.webAudio.audioNode;
        const audioCtx = WEBAUDIO.getAudioContext();

        if (audioInNode != undefined)
        {
            if (typeof audioInNode === "object" && audioInNode.connect)
            {
                try
                {
                    audioInNode.connect(node);
                }
                catch (e)
                {
                    op.log("Could not connect audio node: ", e);
                    if (e.printStackTrace)
                    {
                        e.printStackTrace();
                    }
                    throw e;
                }
                port.webAudio.previousAudioInNode = audioInNode;
            }
            else
            {
                // tone.js audio param
                if (node._param && node._param.minValue && node._param.maxValue)
                {
                    if (audioInNode >= node._param.minValue && audioInNode <= node._param.maxValue)
                    {
                        try
                        {
                            if (node.setValueAtTime)
                            {
                                node.setValueAtTime(audioInNode, audioCtx.currentTime);
                            }
                            else
                            {
                                node.value = audioInNode;
                            }
                        }
                        catch (e)
                        {
                            op.log("Possible AudioParam problem with tone.js op: ", e);
                            if (e.printStackTrace)
                            {
                                e.printStackTrace();
                            }
                            throw e;
                        }
                    }
                    else
                    {
                        op.log("Warning: The value for an audio parameter is out of range!");
                    }
                } // native Web Audio param
                else if (node.minValue && node.maxValue)
                {
                    if (audioInNode >= node.minValue && audioInNode <= node.maxValue)
                    {
                        try
                        {
                            if (node.setValueAtTime)
                            {
                                node.setValueAtTime(audioInNode, audioCtx.currentTime);
                            }
                            else
                            {
                                node.value = audioInNode;
                            }
                        }
                        catch (e)
                        {
                            op.log(
                                "AudioParam has minValue / maxValue defined, and value is in range, but setting the value failed! ",
                                e,
                            );
                            if (e.printStackTrace)
                            {
                                e.printStackTrace();
                            }
                            throw e;
                        }
                    }
                    else
                    {
                        op.log("Warning: The value for an audio parameter is out of range!");
                    }
                } // no min-max values, try anyway
                else
                {
                    try
                    {
                        if (node.setValueAtTime)
                        {
                            node.setValueAtTime(audioInNode, audioCtx.currentTime);
                        }
                        else
                        {
                            node.value = audioInNode;
                        }
                    }
                    catch (e)
                    {
                        op.log("Possible AudioParam problem (without minValue / maxValue): ", e);
                        if (e.printStackTrace)
                        {
                            e.printStackTrace();
                        }
                        throw e;
                    }
                }

                if (port.webAudio.previousAudioInNode && port.webAudio.previousAudioInNode.disconnect)
                {
                    try
                    {
                        port.webAudio.previousAudioInNode.disconnect(node);
                    }
                    catch (e)
                    {
                        op.log("Could not disconnect previous audio node: ", e);
                        throw e;
                    }
                    port.webAudio.previousAudioInNode = undefined;
                }
            }
        }
        else
        {
            // disconnected
            if (port.webAudio.previousAudioInNode)
            {
            }
        }
    };
    return port;
};


/**
 * Loads an audio file and updates the loading indicators when cables is run in the editor.
 * @param {CABLES.Patch} patch - The cables patch, when called from inside an op this is `op.patch`
 * @param {string} url - The url of the audio file to load
 * @param {function} onFinished - The callback to be called when the loading is finished, passes the AudioBuffer
 * @param {function} onError - The callback when there was an error loading the file, the rror message is passed
 * @param loadingTask
 * @see {@link https://developer.mozilla.org/de/docs/Web/API/AudioContext/decodeAudioData}
 */
WEBAUDIO.loadAudioFile = function (patch, url, onFinished, onError, loadingTask)
{
    const audioContext = WEBAUDIO.createAudioContext();

    if (!audioContext) onError(new Error("No Audiocontext"));

    let loadingId = null;
    if (loadingTask || loadingTask === undefined)
    {
        loadingId = patch.loading.start("audio", url);
        if (patch.isEditorMode()) gui.jobs().start({ "id": "loadaudio" + loadingId, "title": " loading audio (" + url + ")" });
    }
    const request = new XMLHttpRequest();

    if (!url) return;

    request.open("GET", url, true);
    request.responseType = "arraybuffer";

    request.onload = function ()
    {
        patch.loading.finished(loadingId);
        if (patch.isEditorMode()) gui.jobs().finish("loadaudio" + loadingId);

        audioContext.decodeAudioData(request.response, onFinished, onError).catch((e) =>
        {
            onError(e);
        });
    };
    request.send();
};

/**
 * Checks if the passed time is a valid time to be used in any of the Tone.js ops.
 * @param {(string|number)} t - The time to check
 * @returns {boolean} - True if time is valid, false if not
 */
WEBAUDIO.isValidToneTime = function (t)
{
    try
    {
        const time = new Tone.Time(t);
    }
    catch (e)
    {
        return false;
    }
    return true;
};

/**
 * Checks if the passed note is a valid note to be used with Tone.js
 * @param {string} note - The note to be checked, e.g. `"C4"`
 * @returns {boolean} - True if the note is a valid note, false otherwise
 */
WEBAUDIO.isValidToneNote = function (note)
{
    try
    {
        Tone.Frequency(note);
    }
    catch (e)
    {
        return false;
    }
    return true;
};



;// CONCATENATED MODULE: ./src/core/sessionvar.js
// todo: old... remove this from ops...

/**
 * todo: old... remove this from ops...
 *
 * @class
 */
const Variable = function ()
{
    let value = null;
    const changedCallbacks = [];

    this.onChanged = function (f)
    {
        changedCallbacks.push(f);
    };

    this.getValue = function ()
    {
        return value;
    };

    this.setValue = function (v)
    {
        value = v;
        this.emitChanged();
    };

    this.emitChanged = function ()
    {
        for (let i = 0; i < changedCallbacks.length; i++)
        {
            changedCallbacks[i]();
        }
    };
};



;// CONCATENATED MODULE: ./src/core/banchprofiler.js
class Branch
{
    constructor(name)
    {
        this.name = name;
        this.dur = 0;
        this._startTime = 0;
        this.childs = [];
    }

    start()
    {
        this._startTime = performance.now();
    }

    end()
    {
        this.dur = performance.now() - this._startTime;
    }

    push(name)
    {
        const b = new Branch(name);
        this.childs.push(b);
        b.start();
        return b;
    }

    print(level)
    {
        level = level || 0;

        let str = "";
        for (let i = 0; i < level; i++) str += "  ";

        for (let i = 0; i < this.childs.length; i++)
        {
            this.childs[i].print(level + 1);
        }
    }
}

// //////////////////////////////////////////

class BranchStack
{
    constructor()
    {
    }

    start()
    {
        this.root = new Branch("Root");
        this.root.start();

        this.current = this.root;
    }

    push(name)
    {
        if (!this.current) this.start();

        const prev = this.current;
        this.current = this.current.push(name);
        this.current.prev = prev;
        this.current.start();
        return this.current;
    }

    pop()
    {
        if (!this.current) return;
        this.current.end();
        this.current = this.current.prev;
    }

    finish()
    {
        this.current.end();
        this.root.print();
        this.current = null;
    }
}




;// CONCATENATED MODULE: ./src/core/cgp/cgp_uniform.js


class cgp_uniform_Uniform extends cg_uniform
{
    constructor(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName)
    {
        super(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName);
        this._loc = -1;
        this._cgl = __shader._cgl;
    }


    updateValueF() { }

    setValueF(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValue2F() { }

    setValue2F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValue3F() { }

    setValue3F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValue4F() { }

    setValue4F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    getSizeBytes()
    {
        if (this._type == "f") return 1 * 4;
        if (this._type == "i") return 1 * 4;
        if (this._type == "2i") return 2 * 4;
        if (this._type == "2f") return 2 * 4;
        if (this._type == "3f") return 3 * 4;
        if (this._type == "4f") return 4 * 4;
        if (this._type == "m4") return 4 * 4 * 4;

        this._log.warn("unknown type getSizeBytes");
        // if (this._type == "t") return "sampler2D";
        // if (this._type == "tc") return "samplerCube";
        // if (this._type == "b") return "bool";

        // if (t == "3f[]") return null; // ignore this for now...
        // if (t == "m4[]") return null; // ignore this for now...
        // if (t == "f[]") return null; // ignore this for now...
    }
}

;// CONCATENATED MODULE: ./src/core/cgp/cgp_shader.js




class cgp_shader_Shader
{
    constructor(_cgp, _name)
    {
        if (!_cgp) throw new Error("shader constructed without cgp " + _name);
        this._log = new Logger("cgp_shader");
        this._cgp = _cgp;
        this._name = _name;
        this._uniforms = [];

        if (!_name) this._log.stack("no shader name given");
        this._name = _name || "unknown";
        this.id = simpleId();
        this._isValid = true;
        this._compileReason = "";
        this.shaderModule = null;
        this._needsRecompile = true;

        this._src = "";
    }

    get isValid()
    {
        return this._isValid;
    }

    get uniforms()
    {
        return this._uniforms;
    }

    getName()
    {
        return this._name;
    }

    setWhyCompile(why)
    {
        this._compileReason = why;
    }

    setSource(src)
    {
        this._src = src;
        this.setWhyCompile("Source changed");
        this._needsRecompile = true;
    }

    compile()
    {
        this._isValid = true;
        console.log("compiling shader...", this._compileReason);
        this._cgp.pushErrorScope();
        this.shaderModule = this._cgp.device.createShaderModule({ "code": this._src });
        this._cgp.popErrorScope("cgp_shader " + this._name, this.error.bind(this));
        this._needsRecompile = false;
    }

    error(e)
    {
        this._isValid = false;
    }


    bind()
    {
        let sizes = {};
        for (let i = 0; i < this._uniforms.length; i++)
        {
            // console.log(this._uniforms[i]);
        }

        if (this._needsRecompile) this.compile();
    }

    /**
     * add a uniform to the fragment shader
     * @param {String} type ['f','t', etc]
     * @param {String} name
     * @param {any} valueOrPort value or port
     * @param p2
     * @param p3
     * @param p4
     * @memberof Shader
     * @instance
     * @function addUniformFrag
     * @returns {Uniform}
     */
    addUniformFrag(type, name, valueOrPort, p2, p3, p4)
    {
        const uni = new cgp_uniform_Uniform(this, type, name, valueOrPort, p2, p3, p4);
        uni.shaderType = "frag";
        return uni;
    }

    /**
     * add a uniform to the vertex shader
     * @param {String} type ['f','t', etc]
     * @param {String} name
     * @param {any} valueOrPort value or port
     * @param p2
     * @param p3
     * @param p4
     * @memberof Shader
     * @instance
     * @function addUniformVert
     * @returns {Uniform}
     */
    addUniformVert(type, name, valueOrPort, p2, p3, p4)
    {
        const uni = new cgp_uniform_Uniform(this, type, name, valueOrPort, p2, p3, p4);
        uni.shaderType = "vert";
        return uni;
    }

    /**
     * add a uniform to all shader programs
     * @param {String} type ['f','t', etc]
     * @param {String} name
     * @param {any} valueOrPort value or port
     * @param p2
     * @param p3
     * @param p4
     * @memberof Shader
     * @instance
     * @function addUniform
     * @returns {Uniform}
     */
    addUniform(type, name, valueOrPort, p2, p3, p4)
    {
        const uni = new cgp_uniform_Uniform(this, type, name, valueOrPort, p2, p3, p4);
        uni.shaderType = "both";
        return uni;
    }


    _addUniform(uni)
    {
        this._uniforms.push(uni);
        this.setWhyCompile("add uniform " + name);
        this._needsRecompile = true;
    }
}

;// CONCATENATED MODULE: ./src/core/cgp/cgl_shader_default.wgsl
/* harmony default export */ const cgl_shader_default = ("struct VSUniforms\n{\n    modelMatrix: mat4x4<f32>,\n    viewMatrix: mat4x4<f32>,\n    projMatrix: mat4x4<f32>,\n};\n\nstruct FSUniforms\n{\n    color:vec4<f32>\n};\n\n@group(0) @binding(0) var<uniform> vsUniforms: VSUniforms;\n@group(0) @binding(1) var<uniform> fsUniforms: FSUniforms;\n\nstruct MyVSInput\n{\n    @location(0) position: vec3<f32>,\n    @location(1) normal: vec3<f32>,\n    @location(2) texcoord: vec2<f32>,\n};\n\nstruct MyVSOutput\n{\n    @builtin(position) position: vec4<f32>,\n    @location(0) normal: vec3<f32>,\n    @location(1) texcoord: vec2<f32>,\n};\n\n@vertex\nfn myVSMain(v: MyVSInput) -> MyVSOutput\n{\n    var vsOut: MyVSOutput;\n    var pos =vec4<f32>(v.position, 1.0);\n\n    var mvMatrix=vsUniforms.viewMatrix * vsUniforms.modelMatrix;\n    vsOut.position = vsUniforms.projMatrix * mvMatrix * pos;\n\n    vsOut.normal = v.normal;\n    vsOut.texcoord = v.texcoord;\n    return vsOut;\n}\n\n@fragment\nfn myFSMain(v: MyVSOutput) -> @location(0) vec4<f32>\n{\n    return fsUniforms.color+vec4<f32>(.5,.5,.5,1.0);\n}\n\n");
;// CONCATENATED MODULE: ./src/core/cgp/cgp_state.js





// https://github.com/greggman/webgpu-utils
// https://developer.chrome.com/blog/from-webgl-to-webgpu/
// https://gpuweb.github.io/gpuweb/explainer/


/**
 * cables webgpu context/state manager
 * @class
 * @namespace external:CGP
 * @hideconstructor
 */
// const Context = function (_patch)
class WebGpuContext extends CGState
{
    constructor(_patch)
    {
        super();

        this.patch = _patch;

        this.gApi = CG.GAPI_WEBGPU;
        this._viewport = [0, 0, 256, 256];
        this._shaderStack = [];
        this._simpleShader = null;

        this._stackCullFaceFacing = [];
        this._stackDepthTest = [];
        this._stackCullFace = [];
        this._stackDepthFunc = [];
        this._stackDepthWrite = [];

        this.DEPTH_FUNCS = [
            "never",
            "always",
            "less",
            "less-equal",
            "greater",
            "greater-equal",
            "equal",
            "not-equal"
        ];

        this.CULL_MODES = [
            "none",
            "back",
            "front",
            "none" // both does not exist in webgpu
        ];
    }


    /// ////////////////////

    getViewPort()
    {
        return [0, 0, this.canvasWidth, this.canvasHeight];
    }

    renderStart(cgp, identTranslate, identTranslateView)
    {
        if (!this._simpleShader)
        {
            this._simpleShader = new cgp_shader_Shader(this, "simple default shader");
            this._simpleShader.setSource(cgl_shader_default);
            this._simpleShader.addUniformFrag("4f", "color", 1, 1, 0, 1);
        }

        this.fpsCounter.startFrame();

        this._startMatrixStacks(identTranslate, identTranslateView);
        this.setViewPort(0, 0, this.canvasWidth, this.canvasHeight);

        this.pushShader(this._simpleShader);
        this.pushDepthTest(true);
        this.pushDepthWrite(true);
        this.pushDepthFunc("less-equal");

        this.emitEvent("beginFrame");
    }

    renderEnd()
    {
        this._endMatrixStacks();

        this.popShader();
        this.popDepthFunc();
        this.popDepthWrite();
        this.popDepthTest();

        this.emitEvent("endFrame");
        this.fpsCounter.endFrame();
    }


    setViewPort(x, y, w, h)
    {
        this._viewport = [x, y, w, h];
    }

    /**
     * @function getViewPort
     * @memberof Context
     * @instance
     * @description get current gl viewport
     * @returns {Array} array [x,y,w,h]
     */
    getViewPort()
    {
        return this._viewPort;
    }


    createMesh(geom, glPrimitive)
    {
        return new CGP.Mesh(this, geom, glPrimitive);
    }

    getShader()
    {
        return {};
    }

    /**
     * push a shader to the shader stack
     * @function pushShader
     * @memberof Context
     * @instance
     * @param {Object} shader
     * @function
    */
    pushShader(shader)
    {
        this._shaderStack.push(shader);
        // currentShader = shader;
    }

    /**
     * pop current used shader from shader stack
     * @function popShader
     * @memberof Context
     * @instance
     * @function
     */
    popShader()
    {
        if (this._shaderStack.length === 0) throw new Error("Invalid shader stack pop!");
        this._shaderStack.pop();
        // currentShader = this._shaderStack[this._shaderStack.length - 1];
    }

    getShader()
    {
        return this._shaderStack[this._shaderStack.length - 1];
        // if (currentShader) if (!this.frameStore || ((this.frameStore.renderOffscreen === true) == currentShader.offScreenPass) === true) return currentShader;
        // for (let i = this._shaderStack.length - 1; i >= 0; i--) if (this._shaderStack[i]) if (this.frameStore.renderOffscreen == this._shaderStack[i].offScreenPass) return this._shaderStack[i];
    }

    pushErrorScope()
    {
        this.device.pushErrorScope("validation");
    }

    popErrorScope(name, cb)
    {
        this.device.popErrorScope().then((error) =>
        {
            if (error)
            {
                this.patch.emitEvent("criticalError", { "title": "WebGPU error \"" + name + "\"", "codeText": error.message });
                // if (this.patch.isEditorMode())console.log("WebGPU error " + this._name, error.message);

                console.warn("[cgp]", name, error.message, error, cb);
                if (cb)cb(error);
            }
        });
    }

    /**
     * push depth testing enabled state
     * @function pushDepthTest
     * @param {Boolean} b enabled
     * @memberof Context
     * @instance
     */
    pushDepthTest(b)
    {
        this._stackDepthTest.push(b);
    }

    /**
     * current state of depth testing
     * @function stateDepthTest
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateDepthTest()
    {
        return this._stackDepthTest[this._stackDepthTest.length - 1];
    }

    /**
     * pop depth testing state
     * @function popDepthTest
     * @memberof Context
     * @instance
     */
    popDepthTest()
    {
        this._stackDepthTest.pop();
    }

    // --------------------------------------
    // state depthwrite

    /**
     * push depth write enabled state
     * @function pushDepthWrite
     * @param {Boolean} b enabled
     * @memberof Context
     * @instance
     */
    pushDepthWrite(b)
    {
        b = b || false;
        this._stackDepthWrite.push(b);
    }

    /**
     * current state of depth writing
     * @function stateCullFace
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateDepthWrite()
    {
        return this._stackDepthWrite[this._stackDepthWrite.length - 1];
    }

    /**
     * pop depth writing state
     * @function popCullFace
     * @memberof Context
     * @instance
     */
    popDepthWrite()
    {
        this._stackDepthWrite.pop();
    }


    // --------------------------------------
    // state depthfunc


    /**
     * @function pushDepthFunc
     * @memberof Context
     * @instance
     * @param {string} f depth compare func
     */
    pushDepthFunc(f)
    {
        this._stackDepthFunc.push(f);
    }

    /**
     * @function stateDepthFunc
     * @memberof Context
     * @instance
     * @returns {string}
     */
    stateDepthFunc()
    {
        if (this._stackDepthFunc.length > 0) return this._stackDepthFunc[this._stackDepthFunc.length - 1];
        return false;
    }

    /**
     * pop depth compare func
     * @function popDepthFunc
     * @memberof Context
     * @instance
     */
    popDepthFunc()
    {
        this._stackDepthFunc.pop();
    }



    // --------------------------------------
    // state CullFace

    /**
     * push face culling face enabled state
     * @function pushCullFace
     * @param {Boolean} b enabled
     * @memberof Context
     * @instance
     */
    pushCullFace(b)
    {
        this._stackCullFace.push(b);
    }

    /**
     * current state of face culling
     * @function stateCullFace
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateCullFace()
    {
        return this._stackCullFace[this._stackCullFace.length - 1];
    }

    /**
 * pop face culling enabled state
 * @function popCullFace
 * @memberof Context
 * @instance
 */
    popCullFace()
    {
        this._stackCullFace.pop();
    }


    // --------------------------------------
    // state CullFace Facing


    /**
     * push face culling face side
     * @function pushCullFaceFacing
     * @memberof Context
     * @param b
     * @instance
     */

    pushCullFaceFacing(b)
    {
        this._stackCullFaceFacing.push(b);
    }

    /**
     * current state of face culling side
     * @function stateCullFaceFacing
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateCullFaceFacing()
    {
        return this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1];
    }

    /**
     * pop face culling face side
     * @function popCullFaceFacing
     * @memberof Context
     * @instance
     */
    popCullFaceFacing()
    {
        this._stackCullFaceFacing.pop();
    }
}


;// CONCATENATED MODULE: ./src/core/cgp/cgp_uniformbuffer.js
class UniformBuffer
{
    constructor(shader, shaderType)
    {
        this._shaderType = shaderType; // frag, vert...
        this._shader = shader;
        this._cgp = shader._cgp;

        this._gpuBuffer = null;
        this._values = null;

        this._sizeBytes = 0;
        this.update();
    }

    update()
    {
        this._sizeBytes = 0;

        for (let i = 0; i < this._shader.uniforms.length; i++)
        {
            const uni = this._shader.uniforms[i];

            if (this._shaderType == uni.shaderType)
                this._sizeBytes += uni.getSizeBytes();
        }

        this._gpuBuffer = this._cgp.device.createBuffer(
            {
                "size": this._sizeBytes,
                "usage": GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
            });


        this._values = new Float32Array(this._sizeBytes / 4);
        this.updateUniformValues();
    }

    updateUniformValues()
    {
        let count = 0;
        for (let i = 0; i < this._shader.uniforms.length; i++)
        {
            const uni = this._shader.uniforms[i];
            if (uni.shaderType == this._shaderType)
            {
                if (uni.getSizeBytes() / 4 > 1)
                {
                    for (let j = 0; j < uni.getValue().length; j++)
                    {
                        this._values[count] = uni.getValue()[j];
                        count++;
                    }
                }
                else
                {
                    this._values[count] = uni.getValue();
                    count++;
                }
            }
        }


        this._cgp.device.queue.writeBuffer(
            this._gpuBuffer,
            0,
            this._values.buffer,
            this._values.byteOffset,
            this._values.byteLength
        );
    }
}

;// CONCATENATED MODULE: ./src/core/cgp/cgp_pipeline.js



class Pipeline
{
    constructor(_cgp, _name)
    {
        if (!_cgp) throw new Error("Pipeline constructed without cgp " + _name);
        this._cgp = _cgp;
        this._isValid = true;

        this._pipeCfg = null;
        this._renderPipeline = null;

        this._fsUniformBuffer = null;
        this._vsUniformBuffer = null;

        this._old = {};


        this.DEPTH_COMPARE_FUNCS_STRINGS = [
            "never",
            "less",
            "equal",
            "lessequal",
            "greater",
            "notequal",
            "greaterequal",
            "always"];
    }

    get isValid() { return this._isValid; }

    setPipeline(shader, mesh)
    {
        if (!mesh || !shader)
        {
            console.log("pipeline unknown shader/mesh");
            return;
        }

        let needsRebuild =
            !this._renderPipeline ||
            !this._pipeCfg ||
            this._old.mesh != mesh ||
            this._old.shader != shader ||
            mesh.needsPipelineUpdate ||
            shader.needsPipelineUpdate;

        if (this._pipeCfg)
        {
            if (this._pipeCfg.depthStencil.depthWriteEnabled != this._cgp.stateDepthWrite())
            {
                needsRebuild = true;
                this._pipeCfg.depthStencil.depthWriteEnabled = this._cgp.stateDepthWrite();
            }

            if (this._cgp.stateDepthTest() === false)
            {
                if (this._pipeCfg.depthStencil.depthCompare != "never")
                {
                    this._pipeCfg.depthStencil.depthCompare = "never";
                    needsRebuild = true;
                }
            }
            else
            if (this._pipeCfg.depthStencil.depthCompare != this._cgp.stateDepthFunc())
            {
                needsRebuild = true;
                this._pipeCfg.depthStencil.depthCompare = this._cgp.stateDepthFunc();
            }


            if (this._cgp.stateCullFace() === false)
            {
                if (this._pipeCfg.primitive.cullMode != "none")
                {
                    needsRebuild = true;
                    this._pipeCfg.primitive.cullMode = "none";
                }
            }
            else
            {
                needsRebuild = true;
                this._pipeCfg.primitive.cullMode = this._cgp.stateCullFaceFacing();
            }
        }

        if (needsRebuild)
        {
            if (!this._pipeCfg || this._old.shader != shader) this._pipeCfg = this.getPiplelineObject(shader, mesh);

            this._old.shader = shader;
            this._old.mesh = mesh;


            // try
            // {
            this._renderPipeline = this._cgp.device.createRenderPipeline(this._pipeCfg);
            // }
            // catch (e)
            // {
            //     console.error(e.message);
            // }

            this._bindUniforms(shader);
        }

        if (this._renderPipeline && this._isValid)
        {
            mat4.copy(this._matModel, this._cgp.mMatrix);
            mat4.copy(this._matView, this._cgp.vMatrix);
            mat4.copy(this._matProj, this._cgp.pMatrix);

            this._cgp.device.queue.writeBuffer(
                this._vsUniformBuffer,
                0,
                this._vsUniformValues.buffer,
                this._vsUniformValues.byteOffset,
                this._vsUniformValues.byteLength
            );

            this._uniBufFrag.updateUniformValues();

            this._cgp.passEncoder.setPipeline(this._renderPipeline);
            this._cgp.passEncoder.setBindGroup(0, this._bindGroup);
            // this._pipeline = this._cgp.device.createRenderPipeline(this._pipeCfg);
        }
    }

    getPiplelineObject(shader, mesh)
    {
        const pipeCfg = {
            "layout": "auto",
            "vertex": {
                "module": shader.shaderModule,
                "entryPoint": "myVSMain",
                "buffers": [
                    // position
                    {
                        "arrayStride": 3 * 4, // 3 floats, 4 bytes each
                        "attributes": [
                            { "shaderLocation": 0, "offset": 0, "format": "float32x3" },
                        ],
                    },
                    // normals
                    {
                        "arrayStride": 3 * 4, // 3 floats, 4 bytes each
                        "attributes": [
                            { "shaderLocation": 1, "offset": 0, "format": "float32x3" },
                        ],
                    },
                    // texcoords
                    {
                        "arrayStride": 2 * 4, // 2 floats, 4 bytes each
                        "attributes": [
                            { "shaderLocation": 2, "offset": 0, "format": "float32x2", },
                        ],
                    },
                ],
            },
            "fragment": {
                "module": shader.shaderModule,
                "entryPoint": "myFSMain",
                "targets": [
                    { "format": this._cgp.presentationFormat },
                ],
            },
            "primitive": {
                "topology": "triangle-list",
                "cullMode": "back", // back/none/front

                // "point-list",
                // "line-list",
                // "line-strip",
                // "triangle-list",
                // "triangle-strip"
            },
            "depthStencil": {
                "depthWriteEnabled": true,
                "depthCompare": "less",
                "format": "depth24plus",
            },

        };

        return pipeCfg;
    }


    _bindUniforms(shader)
    {
        this._cgp.pushErrorScope();


        const counts = { };

        this._uniBufFrag = new UniformBuffer(shader, "frag");

        // for (let i = 0; i < shader.uniforms.length; i++)
        // {
        //     const uni = shader.uniforms[i];
        //     const type = uni.shaderType;
        //     counts[type] = counts[type] || 0;


        //     counts[type] += uni.getSizeBytes();
        // }
        // console.log(counts, counts.frag);


        const vUniformBufferSize = 3 * 16 * 4; // 2 mat4s * 16 floats per mat * 4 bytes per float
        // const fUniformBufferSize = counts.frag;// 2 * 3 * 4; // 1 vec3 * 3 floats per vec3 * 4 bytes per float

        this._vsUniformBuffer = this._cgp.device.createBuffer({
            "size": vUniformBufferSize,
            "usage": GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        });

        // this._fsUniformBuffer = this._cgp.device.createBuffer({
        //     "size": fUniformBufferSize,
        //     "usage": GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        // });

        // this._fsUniformValues = new Float32Array(counts.frag / 4);

        this._vsUniformValues = new Float32Array(vUniformBufferSize / 4);

        this._matModel = this._vsUniformValues.subarray(0, 16);
        this._matView = this._vsUniformValues.subarray(16, 32);
        this._matProj = this._vsUniformValues.subarray(32, 48);


        // this._fsUniformValues[1] = 1.0;
        // this._fsUniformValues[0] = 1.0;
        // const lightDirection = this._fsUniformValues.subarray(0, 3);

        // console.log("pipeline bindgrouplayout ", pipeline.getBindGroupLayout(0));

        this._bindGroup = this._cgp.device.createBindGroup(
            {
                "layout": this._renderPipeline.getBindGroupLayout(0),
                "entries": [
                    { "binding": 0, "resource": { "buffer": this._vsUniformBuffer } },
                    { "binding": 1, "resource": { "buffer": this._uniBufFrag._gpuBuffer } }
                    //   { binding: 2, resource: sampler },
                    //   { binding: 3, resource: tex.createView() },
                ],
            });

        this._cgp.device.queue.writeBuffer(
            this._vsUniformBuffer,
            0,
            this._vsUniformValues.buffer,
            this._vsUniformValues.byteOffset,
            this._vsUniformValues.byteLength
        );

        this._uniBufFrag.updateUniformValues();
        this._cgp.popErrorScope("cgp_pipeline end", (e) =>
        {
            this._isValid = false;
        });
    }
}

;// CONCATENATED MODULE: ./src/core/cgp/cgp_mesh.js



class cgp_mesh_Mesh
{
    constructor(_cgp, __geom)
    {
        this._log = new Logger("cgl_mesh");
        this._cgp = _cgp;
        this._geom = null;
        this.numIndex = 0;

        this._pipe = new Pipeline(this._cgp);

        this._numNonIndexed = 0;
        this._positionBuffer = null;
        this._bufVerticesIndizes = null;
        this._attributes = [];

        this._needsPipelineUpdate = false;

        if (__geom) this.setGeom(__geom);
    }

    _createBuffer(device, data, usage)
    {
        const buffer = device.createBuffer({
            "size": data.byteLength,
            "usage": usage,
            "mappedAtCreation": true,
        });
        const dst = new data.constructor(buffer.getMappedRange());
        dst.set(data);
        buffer.unmap();
        return buffer;
    }

    /**
     * @function setGeom
     * @memberof Mesh
     * @instance
     * @description set geometry for mesh
     * @param {Geometry} geom geometry
     * @param {boolean} removeRef
     */
    setGeom(geom, removeRef)
    {
        this._needsPipelineUpdate = true;
        this._geom = geom;
        this._disposeAttributes();

        this._positionBuffer = this._createBuffer(this._cgp.device, new Float32Array(geom.vertices), GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST);

        let vi = geom.verticesIndices;
        if (!geom.isIndexed()) vi = Array.from(Array(geom.vertices.length / 3).keys());
        this._numIndices = vi.length;
        this._indicesBuffer = this._createBuffer(this._cgp.device, new Uint32Array(vi), GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST);

        if (geom.texCoords && geom.texCoords.length) this.setAttribute("texCoords", geom.texCoords, 2);
        if (geom.vertexNormals && geom.vertexNormals.length) this.setAttribute("normals", geom.vertexNormals, 3);
    }


    _disposeAttributes()
    {
        this._needsPipelineUpdate = true;
        for (let i = 0; i < this._attributes.length; i++)
        {
            this._attributes[i].buffer.destroy();
        }
        this._attributes.length = 0;
    }

    dispose()
    {
        this._disposeAttributes();
    }

    /**
     * @function setAttribute
     * @description update attribute
     * @memberof Mesh
     * @instance
     * @param {String} name attribute name
     * @param {Array} array data
     * @param {Number} itemSize
     * @param {Object} options
     */
    setAttribute(name, array, itemSize, options)
    {
        if (!array)
        {
            this._log.error("mesh addAttribute - no array given! " + name);
            throw new Error();
        }

        for (let i = 0; i < this._attributes.length; i++)
        {
            const attr = this._attributes[i];
            if (attr.name == name)
            {
                // if (attr.numItems === numItems)
                // {
                // }
                // else
                // {
                //     // this._log.log("wrong buffer size", this._geom.name, attr.name, attr.numItems, numItems);
                //     this._resizeAttr(array, attr);
                // }
                // normalBuffer = this._createBuffer(this._cgp.device, new Float32Array(geom.vertexNormals), GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST);

                // this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, attr.buffer);
                // this._bufferArray(array, attr);

                return attr;
            }
        }

        const buffer = this._createBuffer(this._cgp.device, new Float32Array(array), GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST);

        const attr = {
            "buffer": buffer,
            "name": name,
            // "cb": cb,
            // "itemSize": itemSize,
            // "numItems": numItems,
            // "startItem": 0,
            // "instanced": instanced,
            // "type": type
        };
        this._attributes.push(attr);

        return attr;
    }

    // setPipeline()
    // {

    //     this._cgp.passEncoder.setPipeline(this._pipe.getPiplelineObject(this._cgp.getShader(),this));


    // }

    render()
    {
        if (!this._positionBuffer) return;

        // this.setPipeline();

        const shader = this._cgp.getShader();
        if (shader)shader.bind();

        if (!this._cgp.getShader() || !this._cgp.getShader().isValid)
        {
            return;
        }

        this._pipe.setPipeline(this._cgp.getShader(), this);

        if (!this._pipe.isValid)
        {
            return;
        }


        this._cgp.passEncoder.setVertexBuffer(0, this._positionBuffer);
        for (let i = 0; i < this._attributes.length; i++)
        {
            this._cgp.passEncoder.setVertexBuffer(i + 1, this._attributes[i].buffer);
        }

        this._cgp.passEncoder.setIndexBuffer(this._indicesBuffer, "uint32");

        if (this._numNonIndexed)
            this._cgp.passEncoder.draw(this._numIndices);
        else
            this._cgp.passEncoder.drawIndexed(this._numIndices);

        // if (shader)shader.unbind();
    }
}

;// CONCATENATED MODULE: ./src/core/cgp/cgp_texture.js


class cgp_texture_Texture
{
    constructor(_cgp, options)
    {
        if (!_cgp) throw new Error("no cgp");
        this._log = new Logger("cgp_texture");
        this._cgp = _cgp;
        this.id = CABLES.uuid();

        options = options || {};

        this.name = options.name || "unknown";
    }

    /**
     * set texture data from an image/canvas object
     * @function initTexture
     * @memberof Texture
     * @instance
     * @param {Object} img image
     * @param {Number} filter
     */
    initTexture(img, filter)
    {
        this.width = img.width;
        this.height = img.height;

        this.textureType = "rgba8unorm";

        const textureDescriptor = {
            // Unlike in WebGL, the size of our texture must be set at texture creation time.
            // This means we have to wait until the image is loaded to create the texture, since we won't
            // know the size until then.
            "size": { "width": img.width, "height": img.height },
            "format": this.textureType,
            "usage": GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        };
        const texture = this._cgp.device.createTexture(textureDescriptor);

        this._cgp.device.queue.copyExternalImageToTexture({ "source": img }, { "texture": texture }, textureDescriptor.size);

        return texture;
    }

    getInfo()
    {
        const tex = this;
        const obj = {};

        obj.name = tex.name;
        obj.size = tex.width + " x " + tex.height;

        obj.textureType = tex.textureType;

        return obj;
    }
}


/**
 * @function load
 * @static
 * @memberof Texture
 * @description load an image from an url
 * @param {Context} cgp
 * @param {String} url
 * @param {Function} onFinished
 * @param {Object} settings
 * @return {Texture}
 */
cgp_texture_Texture.load = function (cgp, url, onFinished, settings)
{
    fetch(url).then((response) =>
    {
        response.blob().then((blob) =>
        {
            createImageBitmap(blob).then((imgBitmap) =>
            {
                const texture = new cgp_texture_Texture(cgp, { "name": url });
                texture.initTexture(imgBitmap);
                if (onFinished)onFinished(texture);
                else console.log("Texture.load no onFinished callback");
            });
        });
    });
};

;// CONCATENATED MODULE: ./src/core/cgp/index.js






const cgp_CGP = {
    "Context": WebGpuContext,
    "Shader": cgp_shader_Shader,
    "Mesh": cgp_mesh_Mesh,
    "Pipeline": Pipeline,
    "Texture": cgp_texture_Texture,
};

window.CGP = cgp_CGP;




;// CONCATENATED MODULE: ./src/core/cgl/cgl_framebuffer.js



// todo: convert to prototyped...

/**
 * a framebuffer
 * @constructor
 * @class
 * @constructs Framebuffer
 * @param {Context} _cgl cgl
 * @param {Number} _w width
 * @param {Number} _h height
 * @param {Object} options
 */
const Framebuffer = function (_cgl, _w, _h, options)
{
    const cgl = _cgl;
    this._log = new Logger("Framebuffer");
    this.valid = true;

    let depthTextureExt = cgl.gl.DEPTH_TEXTURE;
    if (!depthTextureExt) depthTextureExt = cgl.enableExtension("WEBGL_depth_texture");
    if (!depthTextureExt) depthTextureExt = cgl.enableExtension("WEBKIT_WEBGL_depth_texture");
    if (!depthTextureExt) depthTextureExt = cgl.enableExtension("MOZ_WEBGL_depth_texture");

    if (!depthTextureExt)
    {
        cgl.exitError("NO_DEPTH_TEXTURE", "no depth texture support");
        // return;
    }

    let width = _w || 512;
    let height = _h || 512;

    options = options || {
        "isFloatingPointTexture": false,
    };

    if (!options.hasOwnProperty("clear")) options.clear = true;
    if (!options.hasOwnProperty("filter")) options.filter = Texture.FILTER_LINEAR;

    const texture = new Texture(cgl, {
        "isFloatingPointTexture": options.isFloatingPointTexture,
        "filter": options.filter,
        "wrap": options.wrap || Texture.CLAMP_TO_EDGE
    });

    let textureDepth = null;
    if (depthTextureExt)
    {
        textureDepth = new Texture(cgl, {
            "isDepthTexture": true,
        });
    }
    this._options = options;

    const frameBuf = cgl.gl.createFramebuffer();
    const depthBuffer = cgl.gl.createRenderbuffer();

    this.getWidth = function ()
    {
        return width;
    };
    this.getHeight = function ()
    {
        return height;
    };

    /**
     * get native gl framebuffer
     * @function getGlFrameBuffer
     * @memberof Framebuffer
     * @returns {Object} framebuffer
     */
    this.getGlFrameBuffer = function ()
    {
        return frameBuf;
    };

    /**
     * get depth renderbuffer
     * @function getDepthRenderBuffer
     * @memberof Framebuffer
     * @returns {Object} renderbuffer
     */
    this.getDepthRenderBuffer = function ()
    {
        return depthBuffer;
    };

    /**
     * get color texture
     * @function getTextureColor
     * @memberof Framebuffer
     * @returns {Texture} rgba texture
     */
    this.getTextureColor = function ()
    {
        return texture;
    };

    /**
     * get depth texture
     * @function getTextureDepth
     * @memberof Framebuffer
     * @returns {Texture} depth texture
     */
    this.getTextureDepth = function ()
    {
        return textureDepth;
    };

    this.setFilter = function (f)
    {
        texture.filter = f;
        texture.setSize(width, height);
    };

    this.setSize = function (w, h)
    {
        if (w < 2) w = 2;
        if (h < 2) h = 2;

        width = Math.ceil(w);
        height = Math.ceil(h);

        cgl.profileData.profileFrameBuffercreate++;

        cgl.gl.bindFramebuffer(cgl.gl.FRAMEBUFFER, frameBuf);
        cgl.gl.bindRenderbuffer(cgl.gl.RENDERBUFFER, depthBuffer);

        texture.setSize(width, height);
        if (textureDepth) textureDepth.setSize(width, height);

        // if(depthTextureExt) cgl.gl.renderbufferStorage(cgl.gl.RENDERBUFFER, cgl.gl.DEPTH_COMPONENT16, width,height);
        if (depthTextureExt) cgl.gl.renderbufferStorage(cgl.gl.RENDERBUFFER, cgl.gl.DEPTH_COMPONENT16, width, height);

        cgl.gl.framebufferTexture2D(cgl.gl.FRAMEBUFFER, cgl.gl.COLOR_ATTACHMENT0, cgl.gl.TEXTURE_2D, texture.tex, 0);

        if (depthTextureExt)
        {
            cgl.gl.framebufferRenderbuffer(cgl.gl.FRAMEBUFFER, cgl.gl.DEPTH_ATTACHMENT, cgl.gl.RENDERBUFFER, depthBuffer);
            cgl.gl.framebufferTexture2D(
                cgl.gl.FRAMEBUFFER,
                cgl.gl.DEPTH_ATTACHMENT, // safari needs DEPTH_ATTACHMENT NOT DEPTH_ATTACHMENT16
                // cgl.gl.DEPTH_COMPONENT16,
                cgl.gl.TEXTURE_2D,
                textureDepth.tex,
                0,
            );
        }

        if (!cgl.gl.isFramebuffer(frameBuf)) throw new Error("Invalid framebuffer");
        const status = cgl.gl.checkFramebufferStatus(cgl.gl.FRAMEBUFFER);

        switch (status)
        {
        case cgl.gl.FRAMEBUFFER_COMPLETE:
            break;
        case cgl.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
            this._log.warn("FRAMEBUFFER_INCOMPLETE_ATTACHMENT...", width, height, texture.tex, depthBuffer);
            this.valid = false;
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT");
        case cgl.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
            this._log.warn("FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
            this.valid = false;
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
        case cgl.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
            this._log.warn("FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
            this.valid = false;
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
        case cgl.gl.FRAMEBUFFER_UNSUPPORTED:
            this._log.warn("FRAMEBUFFER_UNSUPPORTED");
            this.valid = false;
            this._log.warn(width, height, options);

            throw new Error("Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED");
        case 0x8CDB:
            this._log.warn("Incomplete: FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER from ext. Or Safari/iOS undefined behaviour.");
            this.valid = false;
            break;
        default:
            this._log.warn("incomplete framebuffer", status);
            this.valid = false;
            throw new Error("Incomplete framebuffer: " + status);
        }

        cgl.gl.bindTexture(cgl.gl.TEXTURE_2D, null);
        cgl.gl.bindRenderbuffer(cgl.gl.RENDERBUFFER, null);
        cgl.gl.bindFramebuffer(cgl.gl.FRAMEBUFFER, null);
    };

    this.renderStart = function ()
    {
        cgl.pushModelMatrix();
        cgl.gl.bindFramebuffer(cgl.gl.FRAMEBUFFER, frameBuf);
        cgl.pushGlFrameBuffer(frameBuf);
        cgl.pushFrameBuffer(this);

        cgl.pushPMatrix();
        cgl.gl.viewport(0, 0, width, height);

        if (this._options.clear)
        {
            cgl.gl.clearColor(0, 0, 0, 0);
            cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT | cgl.gl.DEPTH_BUFFER_BIT);
        }
    };

    this.renderEnd = function ()
    {
        cgl.popPMatrix();
        cgl.gl.bindFramebuffer(cgl.gl.FRAMEBUFFER, cgl.popGlFrameBuffer());
        cgl.popFrameBuffer();

        cgl.popModelMatrix();
        cgl.resetViewPort();
    };


    this.delete = function ()
    {
        texture.delete();
        this.valid = false;
        if (textureDepth) textureDepth.delete();
        cgl.gl.deleteRenderbuffer(depthBuffer);
        cgl.gl.deleteFramebuffer(frameBuf);
    };

    this.dispose = this.delete;

    this.setSize(width, height);
};



;// CONCATENATED MODULE: ./src/core/cgl/cgl_framebuffer2.js
// * see framebuffer1






const Framebuffer2 = function (cgl, w, h, options)
{
    this._log = new Logger("cgl_framebuffer2");
    if (cgl.glVersion == 1) return this._log.error("framebuffer2 used on webgl1");
    this.Framebuffer2DrawTargetsDefault = null;
    this.Framebuffer2BlittingFramebuffer = null;
    this.Framebuffer2FinalFramebuffer = null;
    this._cgl = cgl;

    this._cgl.printError("before framebuffer2 constructor");

    this._width = 0;
    this._height = 0;
    this.valid = true;

    this._depthRenderbuffer = null;
    this._frameBuffer = null;
    this._textureFrameBuffer = null;
    this._colorRenderbuffers = [];
    this._drawTargetArray = [];
    this._disposed = false;

    if (!this.Framebuffer2BlittingFramebuffer) this.Framebuffer2BlittingFramebuffer = cgl.gl.createFramebuffer();
    if (!this.Framebuffer2FinalFramebuffer) this.Framebuffer2FinalFramebuffer = cgl.gl.createFramebuffer();

    if (!this.Framebuffer2DrawTargetsDefault) this.Framebuffer2DrawTargetsDefault = [cgl.gl.COLOR_ATTACHMENT0];

    this._options = options || {
        "isFloatingPointTexture": false,
    };

    // this._cgl.printError("fb2 before");

    this.name = this._options.name || "unknown";

    this._cgl.profileData.addHeavyEvent("framebuffer create", this.name);

    if (!this._options.hasOwnProperty("numRenderBuffers")) this._options.numRenderBuffers = 1;
    if (!this._options.hasOwnProperty("depth")) this._options.depth = true;
    if (!this._options.hasOwnProperty("clear")) this._options.clear = true;
    if (!this._options.hasOwnProperty("multisampling"))
    {
        this._options.multisampling = false;
        this._options.multisamplingSamples = 0;
    }

    if (this._options.multisamplingSamples)
    {
        if (this._cgl.glSlowRenderer) this._options.multisamplingSamples = 0;
        if (!this._cgl.gl.MAX_SAMPLES) this._options.multisamplingSamples = 0;
        else this._options.multisamplingSamples = Math.min(this._cgl.maxSamples, this._options.multisamplingSamples);
    }

    if (!this._options.hasOwnProperty("filter")) this._options.filter = Texture.FILTER_LINEAR;
    if (!this._options.hasOwnProperty("wrap")) this._options.wrap = Texture.WRAP_REPEAT;

    this._numRenderBuffers = this._options.numRenderBuffers;
    this._colorTextures = [];

    this.clearColors = [];
    for (let i = 0; i < this._numRenderBuffers; i++) this.clearColors.push([0, 0, 0, 1]);


    if (!options.pixelFormat)
    {
        if (options.isFloatingPointTexture) this._options.pixelFormat = Texture.PFORMATSTR_RGBA32F;
        else this._options.pixelFormat = Texture.PFORMATSTR_RGBA8UB;
    }


    for (let i = 0; i < this._numRenderBuffers; i++)
    {
        this._colorTextures[i] = new Texture(cgl, {
            "name": "fb2 " + this.name + " " + i,
            "isFloatingPointTexture": this._options.isFloatingPointTexture,
            "anisotropic": this._options.anisotropic || 0,
            "pixelFormat": this._options.pixelFormat,
            "filter": this._options.filter,
            "wrap": this._options.wrap,
        });
    }



    let fil = Texture.FILTER_NEAREST;
    if (this._options.shadowMap) fil = Texture.FILTER_LINEAR;

    const defaultTexSize = 512;

    if (this._options.depth)
    {
        this._textureDepth = new Texture(cgl,
            {
                "name": "fb2 depth " + this.name,
                "isDepthTexture": true,
                "filter": fil,
                "shadowMap": this._options.shadowMap || false,
                "width": w || defaultTexSize,
                "height": h || defaultTexSize,
            });
    }

    if (cgl.aborted) return;

    this.setSize(w || defaultTexSize, h || defaultTexSize);

    this._cgl.printError("framebuffer2 constructor");
};

Framebuffer2.prototype.getWidth = function ()
{
    return this._width;
};
Framebuffer2.prototype.getHeight = function ()
{
    return this._height;
};

Framebuffer2.prototype.getGlFrameBuffer = function ()
{
    return this._frameBuffer;
};

Framebuffer2.prototype.getDepthRenderBuffer = function ()
{
    return this._depthRenderbuffer;
};

Framebuffer2.prototype.getTextureColor = function ()
{
    return this._colorTextures[0];
};

Framebuffer2.prototype.getTextureColorNum = function (i)
{
    return this._colorTextures[i];
};

Framebuffer2.prototype.getTextureDepth = function ()
{
    return this._textureDepth;
};

Framebuffer2.prototype.setFilter = function (f)
{
    for (let i = 0; i < this._numRenderBuffers; i++)
    {
        this._colorTextures[i].filter = f;
        this._colorTextures[i].setSize(this._width, this._height);
    }
};

Framebuffer2.prototype.delete = Framebuffer2.prototype.dispose = function ()
{
    this._disposed = true;
    let i = 0;
    for (i = 0; i < this._numRenderBuffers; i++) this._colorTextures[i].delete();
    // this._texture.delete();
    if (this._textureDepth) this._textureDepth.delete();
    for (i = 0; i < this._numRenderBuffers; i++) this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[i]);
    this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer);
    this._cgl.gl.deleteFramebuffer(this._frameBuffer);
    this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer);
};

Framebuffer2.prototype.setSize = function (w, h)
{
    if (this._disposed) return this._log.warn("disposed framebuffer setsize...");
    this._cgl.profileData.addHeavyEvent("framebuffer resize", this.name);

    let i = 0;

    this._width = this._cgl.checkTextureSize(w);
    this._height = this._cgl.checkTextureSize(h);

    this._cgl.profileData.profileFrameBuffercreate++;

    if (this._frameBuffer)
    {
        for (i = 0; i < this._numRenderBuffers; i++) this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[i]);
        // this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffer);
        this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer);
        this._cgl.gl.deleteFramebuffer(this._frameBuffer);
        this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer);
    }

    this._frameBuffer = this._cgl.gl.createFramebuffer();
    this._textureFrameBuffer = this._cgl.gl.createFramebuffer();

    const depth = this._options.depth;

    for (i = 0; i < this._numRenderBuffers; i++)
    {
        this._colorTextures[i].setSize(this._width, this._height);
    }

    for (i = 0; i < this._numRenderBuffers; i++)
    {
        const renderBuffer = this._cgl.gl.createRenderbuffer();

        // color renderbuffer

        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer);
        this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, renderBuffer);

        const info = Texture.setUpGlPixelFormat(this._cgl, this._options.pixelFormat);
        let internFormat = info.glInternalFormat;

        // if (this._options.isFloatingPointTexture)
        // {
        if (CGL.Texture.isPixelFormatHalfFloat(info.pixelFormat))
        {
            if (!this._cgl.enableExtension("OES_texture_float_linear"))
            {
                this._options.filter = Texture.FILTER_NEAREST;
                this.setFilter(this._options.filter);
            }
        }
        else if (CGL.Texture.isPixelFormatFloat(info.pixelFormat))
        {
            if (!this._cgl.enableExtension("OES_texture_float_linear"))
            {
                this._log.warn("no linear pixelformat,using nearest");
                this._options.filter = Texture.FILTER_NEAREST;
                this.setFilter(this._options.filter);
            }
        }
        // else if (info.pixelFormat == Texture.PFORMATSTR_RGBA32F || info.pixelFormat == Texture.PFORMATSTR_R11FG11FB10F
        // else if (info.pixelFormat == Texture.PFORMATSTR_RGBA32F || info.pixelFormat == Texture.PFORMATSTR_R11FG11FB10F
        // else if (info.pixelFormat == Texture.PFORMATSTR_RG16F)
        // {
        //     const extcb = this._cgl.enableExtension("EXT_color_buffer_float");

        //     if (!this._cgl.enableExtension("OES_texture_float_linear"))
        //     {
        //         console.log("no linear pixelformat,switching to nearest");
        //         this._options.filter = Texture.FILTER_NEAREST;
        //         this.setFilter(this._options.filter);
        //     }
        // }
        // }

        if (this._options.multisampling && this._options.multisamplingSamples)
        {
            this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, internFormat, this._width, this._height);
        }
        else
        {
            this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, internFormat, this._width, this._height);
        }



        this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0 + i, this._cgl.gl.RENDERBUFFER, renderBuffer);
        this._colorRenderbuffers[i] = renderBuffer;
    }

    // this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this._textureFrameBuffer);
    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._textureFrameBuffer);

    for (i = 0; i < this._numRenderBuffers; i++)
    {
        this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0 + i, this._cgl.gl.TEXTURE_2D, this._colorTextures[i].tex, 0);
    }

    if (this._options.depth)
    {
        this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.TEXTURE_2D, this._textureDepth.tex, 0);
    }

    // depth renderbuffer

    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer);


    let depthType = this._cgl.gl.DEPTH_COMPONENT32F;

    if (this._cgl.glSlowRenderer) depthType = this._cgl.gl.DEPTH_COMPONENT16;
    if (depth)
    {
        this._textureDepth.setSize(this._width, this._height);
        this._depthRenderbuffer = this._cgl.gl.createRenderbuffer();

        this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer);
        if (this._options.isFloatingPointTexture)
        {
            if (this._options.multisampling) this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, depthType, this._width, this._height);
            else this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, depthType, this._width, this._height);
        }
        else if (this._options.multisampling)
        {
            this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, depthType, this._width, this._height);
            // this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,depthType, this._width, this._height);
        }
        else
        {
            this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, depthType, this._width, this._height);
        }

        this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer);
    }

    // this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);
    // this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._textureFrameBuffer);

    this._drawTargetArray.length = 0;
    for (i = 0; i < this._numRenderBuffers; i++) this._drawTargetArray.push(this._cgl.gl.COLOR_ATTACHMENT0 + i);

    // this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);


    if (!this._cgl.gl.isFramebuffer(this._textureFrameBuffer)) this._log.warn("invalid framebuffer");// throw new Error("Invalid framebuffer");
    const status = this._cgl.gl.checkFramebufferStatus(this._cgl.gl.FRAMEBUFFER);

    if (status != this._cgl.gl.FRAMEBUFFER_COMPLETE)
    {
        this._log.error("framebuffer incomplete: " + this.name, this);
        this._log.log("options", this._options);
        this._log.log("options pixelformat", this._options.pixelFormat);

        switch (status)
        {
        case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
            this._log.warn("FRAMEBUFFER_INCOMPLETE_ATTACHMENT...", this);
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT");
        case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
            this._log.warn("FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
        case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
            this._log.warn("FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
        case this._cgl.gl.FRAMEBUFFER_UNSUPPORTED:
            this._log.warn("FRAMEBUFFER_UNSUPPORTED");
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED");
        default:
            this.valid = false;
            this._log.warn("incomplete framebuffer", status, this._frameBuffer);
            this._cgl.printError();
            this._cgl.exitError("Framebuffer incomplete...");

            this._frameBuffer = null;
            // debugger;
            throw new Error("Incomplete framebuffer: " + status);

        // throw("Incomplete framebuffer: " + status);
        }
    }

    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);
    this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null);

    // this._cgl.printError("fb setsize");
};

Framebuffer2.prototype.renderStart = function ()
{
    if (this._disposed) return this._log.warn("disposed framebuffer renderStart...");
    this._cgl.checkFrameStarted("fb2 renderstart");
    this._cgl.pushModelMatrix(); // needed ??

    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer);
    this._cgl.pushGlFrameBuffer(this._frameBuffer);
    this._cgl.pushFrameBuffer(this);

    this._cgl.pushPMatrix();
    this._cgl.pushViewPort(0, 0, this._width, this._height);

    this._cgl.gl.drawBuffers(this._drawTargetArray);

    if (this._options.clear)
    {
        this._cgl.gl.clearColor(0, 0, 0, 0);
        this._cgl.gl.clear(this._cgl.gl.COLOR_BUFFER_BIT | this._cgl.gl.DEPTH_BUFFER_BIT);
    }
};

Framebuffer2.prototype.clear = function ()
{
    if (this._numRenderBuffers <= 1)
    {
        this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this._frameBuffer);
        this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this._textureFrameBuffer);
    }
    else this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer);

    this._cgl.gl.drawBuffers(this._drawTargetArray);

    for (let i = 0; i < this._numRenderBuffers; i++)
    {
        this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0 + i, this._cgl.gl.TEXTURE_2D, this._colorTextures[i].tex, 0);
        this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, i, this.clearColors[i]);
    }
    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);
};

Framebuffer2.prototype.renderEnd = function ()
{
    if (this._disposed) return this._log.warn("disposed framebuffer renderEnd...");
    this._cgl.popPMatrix();

    this._cgl.profileData.profileFramebuffer++;


    if (this._numRenderBuffers <= 1)
    {
        this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this._frameBuffer);
        this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this._textureFrameBuffer);

        this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, 0, [0.0, 0.0, 0.0, 1.0]);
        this._cgl.gl.blitFramebuffer(0, 0, this._width, this._height, 0, 0, this._width, this._height, this._cgl.gl.COLOR_BUFFER_BIT | this._cgl.gl.DEPTH_BUFFER_BIT, this._cgl.gl.NEAREST);
    }
    else
    {
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer);
        this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer);

        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2FinalFramebuffer);
        this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.TEXTURE_2D, this._textureDepth.tex, 0);

        for (let i = 0; i < this._numRenderBuffers; i++)
        {
            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer);
            this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.RENDERBUFFER, this._colorRenderbuffers[i]);


            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2FinalFramebuffer);
            this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._colorTextures[i].tex, 0);

            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);

            this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer);
            this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this.Framebuffer2FinalFramebuffer);

            // this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, i, [0.0, 0.0, 0.0, 1.0]);



            let flags = this._cgl.gl.COLOR_BUFFER_BIT;
            if (i == 0) flags |= this._cgl.gl.DEPTH_BUFFER_BIT;

            this._cgl.gl.blitFramebuffer(0, 0, this._width, this._height, 0, 0, this._width, this._height, flags, this._cgl.gl.NEAREST);
        }
    }

    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.popGlFrameBuffer());
    this._cgl.popFrameBuffer();

    this._cgl.popModelMatrix();
    // this._cgl.resetViewPort();
    this._cgl.popViewPort();


    if (this._colorTextures[0].filter == Texture.FILTER_MIPMAP)
    {
        for (let i = 0; i < this._numRenderBuffers; i++)
        {
            this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._colorTextures[i].tex);
            this._colorTextures[i].updateMipMap();
            this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null);
        }
    }
};



/// ///////

;// CONCATENATED MODULE: ./src/core/cgl/cgl_marker.js
const Marker = function (_cgl) // deprecated...
{
    this.draw = function (cgl, _size, depthTest) {};
};

const WirePoint = function (cgl) // deprecated...
{
    this.render = function (_cgl, _size) {};
};

const WireCube = function (cgl) // deprecated...
{
    this.render = function (_cgl, sizeX, sizeY, sizeZ) {};
};

;// CONCATENATED MODULE: ./src/core/cgl/cgl_unicolorshader.js


class UniColorShader
{
    constructor(_cgl)
    {
        this.shader = new CGL.Shader(_cgl, "markermaterial");

        const frag = ""
            .endl() + "void main()"
            .endl() + "{"
            .endl() + "    outColor = vec4(color.rgb,1.0);"
            .endl() + "}";


        const vert = ""
            .endl() + "IN vec3 vPosition;"
            .endl() + "UNI mat4 projMatrix;"
            .endl() + "UNI mat4 mvMatrix;"

            .endl() + "void main()"
            .endl() + "{"
            .endl() + "   gl_Position = projMatrix * mvMatrix * vec4(vPosition,1.0);"
            .endl() + "}";

        this.shader.setSource(vert, frag);
        this.coloruni = this.shader.addUniformFrag("4f", "color", [1, 0.777, 1, 1]);
    }

    setColor(r, g, b, a)
    {
        this.coloruni.set(r, g, b, a);
    }
}

;// CONCATENATED MODULE: ./src/core/cgl/index.js






















const cgl_CGL = {
    "Framebuffer": Framebuffer,
    "Framebuffer2": Framebuffer2,
    "Geometry": Geometry,
    "BoundingBox": BoundingBox,
    "Marker": Marker,
    "WirePoint": WirePoint,
    "WireCube": WireCube,
    "MatrixStack": MatrixStack,
    "Mesh": Mesh,
    "MESH": MESH,
    "ShaderLibMods": ShaderLibMods,
    "Shader": Shader,
    "Uniform": Uniform,
    "MESHES": MESHES,
    "Context": Context,
    "Texture": Texture,
    "TextureEffect": TextureEffect,
    "isWindows": isWindows,
    "getWheelSpeed": getWheelSpeed,
    "getWheelDelta": getWheelDelta,
    "onLoadingAssetsFinished": onLoadingAssetsFinished,
    "ProfileData": ProfileData,
    "UniColorShader": UniColorShader,
    ...constants_CONSTANTS.BLEND_MODES,
    ...constants_CONSTANTS.SHADER,
    ...constants_CONSTANTS.MATH,
    ...constants_CONSTANTS.BLEND_MODES,
};

window.CGL = cgl_CGL;





;// CONCATENATED MODULE: ./src/core/index.js




















window.CABLES = window.CABLES || {};

CABLES.CGL = cgl_CGL;
CABLES.CG = CG;
CABLES.CGP = cgp_CGP;
CABLES.EMBED = EMBED;
CABLES.Link = Link;
CABLES.Port = Port;
CABLES.Op = Op;
CABLES.Profiler = Profiler;
CABLES.Patch = core_patch;
CABLES.Instancing = Instancing;
CABLES.Timer = Timer;
CABLES.WEBAUDIO = WEBAUDIO;
CABLES.Variable = Variable;
CABLES.LoadingStatus = LoadingStatus;
CABLES.now = now;
CABLES.internalNow = internalNow;
CABLES.BranchStack = BranchStack;
CABLES.Branch = Branch;


CABLES = Object.assign(CABLES,
    base64_namespaceObject,
    utils_namespaceObject,
    anim_namespaceObject,
    CONSTANTS.PORT,
    CONSTANTS.PACO,
    CONSTANTS.ANIM,
    CONSTANTS.OP
);

/* harmony default export */ const core = (CABLES);

if (!(function () { return !this; }())) console.warn("not in strict mode: index core"); // eslint-disable-line

CABLES = __webpack_exports__["default"];
/******/ })()
;


var CABLES = CABLES || {}; CABLES.build = {"timestamp":1723710716430,"created":"2024-08-15T08:31:56.430Z","git":{"branch":"master","commit":"22a0542307b9bba8a1e76e6acb27443d5e25af98","date":"1723443356","message":"better log"}};
(()=>{"use strict";var t={d:(n,a)=>{for(var r in a)t.o(a,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:a[r]})},o:(t,n)=>Object.prototype.hasOwnProperty.call(t,n),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},n={};t.r(n),t.d(n,{ARRAY_TYPE:()=>f,EPSILON:()=>M,RANDOM:()=>l,equals:()=>d,setMatrixArrayType:()=>v,toRadian:()=>m});var a={};t.r(a),t.d(a,{LDU:()=>j,add:()=>z,adjoint:()=>S,clone:()=>y,copy:()=>p,create:()=>x,determinant:()=>R,equals:()=>Y,exactEquals:()=>Q,frob:()=>V,fromRotation:()=>D,fromScaling:()=>F,fromValues:()=>w,identity:()=>q,invert:()=>P,mul:()=>_,multiply:()=>T,multiplyScalar:()=>X,multiplyScalarAndAdd:()=>Z,rotate:()=>I,scale:()=>E,set:()=>g,str:()=>L,sub:()=>B,subtract:()=>O,transpose:()=>A});var r={};t.r(r),t.d(r,{add:()=>it,clone:()=>k,copy:()=>U,create:()=>N,determinant:()=>J,equals:()=>ft,exactEquals:()=>Mt,frob:()=>ot,fromRotation:()=>at,fromScaling:()=>rt,fromTranslation:()=>ut,fromValues:()=>C,identity:()=>W,invert:()=>H,mul:()=>lt,multiply:()=>K,multiplyScalar:()=>ct,multiplyScalarAndAdd:()=>st,rotate:()=>$,scale:()=>tt,set:()=>G,str:()=>et,sub:()=>vt,subtract:()=>ht,translate:()=>nt});var u={};t.r(u),t.d(u,{add:()=>Yt,adjoint:()=>At,clone:()=>dt,copy:()=>xt,create:()=>bt,determinant:()=>Pt,equals:()=>Nt,exactEquals:()=>Bt,frob:()=>Qt,fromMat2d:()=>Lt,fromMat4:()=>mt,fromQuat:()=>Vt,fromRotation:()=>Dt,fromScaling:()=>Ft,fromTranslation:()=>Et,fromValues:()=>yt,identity:()=>qt,invert:()=>gt,mul:()=>kt,multiply:()=>St,multiplyScalar:()=>Zt,multiplyScalarAndAdd:()=>_t,normalFromMat4:()=>jt,projection:()=>zt,rotate:()=>Tt,scale:()=>It,set:()=>pt,str:()=>Ot,sub:()=>Ut,subtract:()=>Xt,translate:()=>Rt,transpose:()=>wt});var e={};t.r(e),t.d(e,{add:()=>Ln,adjoint:()=>nn,clone:()=>Ct,copy:()=>Gt,create:()=>Wt,determinant:()=>an,equals:()=>Qn,exactEquals:()=>On,frob:()=>Fn,fromQuat:()=>An,fromQuat2:()=>xn,fromRotation:()=>ln,fromRotationTranslation:()=>dn,fromRotationTranslationScale:()=>wn,fromRotationTranslationScaleOrigin:()=>gn,fromScaling:()=>fn,fromTranslation:()=>Mn,fromValues:()=>Ht,fromXRotation:()=>vn,fromYRotation:()=>bn,fromZRotation:()=>mn,frustum:()=>Pn,getRotation:()=>qn,getScaling:()=>pn,getTranslation:()=>yn,identity:()=>Kt,invert:()=>tn,lookAt:()=>In,mul:()=>Yn,multiply:()=>rn,multiplyScalar:()=>jn,multiplyScalarAndAdd:()=>zn,ortho:()=>Tn,perspective:()=>Sn,perspectiveFromFieldOfView:()=>Rn,rotate:()=>on,rotateX:()=>hn,rotateY:()=>cn,rotateZ:()=>sn,scale:()=>en,set:()=>Jt,str:()=>Dn,sub:()=>Xn,subtract:()=>Vn,targetTo:()=>En,translate:()=>un,transpose:()=>$t});var o={};t.r(o),t.d(o,{add:()=>Wn,angle:()=>wa,bezier:()=>va,ceil:()=>Jn,clone:()=>_n,copy:()=>kn,create:()=>Zn,cross:()=>Ma,dist:()=>Da,distance:()=>ua,div:()=>Ea,divide:()=>Hn,dot:()=>sa,equals:()=>Sa,exactEquals:()=>Pa,floor:()=>Kn,forEach:()=>ja,fromValues:()=>Nn,hermite:()=>la,inverse:()=>ha,len:()=>La,length:()=>Bn,lerp:()=>fa,max:()=>ta,min:()=>$n,mul:()=>Ia,multiply:()=>Gn,negate:()=>ia,normalize:()=>ca,random:()=>ba,rotateX:()=>ya,rotateY:()=>pa,rotateZ:()=>qa,round:()=>na,scale:()=>aa,scaleAndAdd:()=>ra,set:()=>Un,sqrDist:()=>Fa,sqrLen:()=>Va,squaredDistance:()=>ea,squaredLength:()=>oa,str:()=>Aa,sub:()=>Ta,subtract:()=>Cn,transformMat3:()=>da,transformMat4:()=>ma,transformQuat:()=>xa,zero:()=>ga});var i={};t.r(i),t.d(i,{add:()=>Za,ceil:()=>ka,clone:()=>Oa,copy:()=>Ya,create:()=>za,cross:()=>or,dist:()=>xr,distance:()=>Ka,div:()=>dr,divide:()=>Na,dot:()=>er,equals:()=>vr,exactEquals:()=>lr,floor:()=>Ua,forEach:()=>wr,fromValues:()=>Qa,inverse:()=>rr,len:()=>pr,length:()=>tr,lerp:()=>ir,max:()=>Ca,min:()=>Wa,mul:()=>mr,multiply:()=>Ba,negate:()=>ar,normalize:()=>ur,random:()=>hr,round:()=>Ga,scale:()=>Ha,scaleAndAdd:()=>Ja,set:()=>Xa,sqrDist:()=>yr,sqrLen:()=>qr,squaredDistance:()=>$a,squaredLength:()=>nr,str:()=>fr,sub:()=>br,subtract:()=>_a,transformMat4:()=>cr,transformQuat:()=>sr,zero:()=>Mr});var h={};t.r(h),t.d(h,{add:()=>$r,calculateW:()=>Fr,clone:()=>Gr,conjugate:()=>Yr,copy:()=>Jr,create:()=>gr,dot:()=>au,equals:()=>su,exactEquals:()=>cu,exp:()=>Lr,fromEuler:()=>Zr,fromMat3:()=>Xr,fromValues:()=>Hr,getAngle:()=>Rr,getAxisAngle:()=>Sr,identity:()=>Ar,invert:()=>Qr,len:()=>eu,length:()=>uu,lerp:()=>ru,ln:()=>Vr,mul:()=>tu,multiply:()=>Tr,normalize:()=>hu,pow:()=>jr,random:()=>Or,rotateX:()=>Ir,rotateY:()=>Er,rotateZ:()=>Dr,rotationTo:()=>Mu,scale:()=>nu,set:()=>Kr,setAxes:()=>lu,setAxisAngle:()=>Pr,slerp:()=>zr,sqlerp:()=>fu,sqrLen:()=>iu,squaredLength:()=>ou,str:()=>_r});var c={};t.r(c),t.d(c,{add:()=>Ou,clone:()=>bu,conjugate:()=>Nu,copy:()=>wu,create:()=>vu,dot:()=>Zu,equals:()=>Ku,exactEquals:()=>Ju,fromMat4:()=>qu,fromRotation:()=>pu,fromRotationTranslation:()=>xu,fromRotationTranslationValues:()=>du,fromTranslation:()=>yu,fromValues:()=>mu,getDual:()=>Su,getReal:()=>Pu,getTranslation:()=>Iu,identity:()=>gu,invert:()=>Bu,len:()=>Uu,length:()=>ku,lerp:()=>_u,mul:()=>Yu,multiply:()=>Qu,normalize:()=>Gu,rotateAroundAxis:()=>zu,rotateByQuatAppend:()=>Vu,rotateByQuatPrepend:()=>ju,rotateX:()=>Du,rotateY:()=>Fu,rotateZ:()=>Lu,scale:()=>Xu,set:()=>Au,setDual:()=>Tu,setReal:()=>Ru,sqrLen:()=>Cu,squaredLength:()=>Wu,str:()=>Hu,translate:()=>Eu});var s={};t.r(s),t.d(s,{add:()=>ue,angle:()=>De,ceil:()=>he,clone:()=>te,copy:()=>ae,create:()=>$u,cross:()=>ge,dist:()=>Xe,distance:()=>be,div:()=>Ye,divide:()=>ie,dot:()=>we,equals:()=>je,exactEquals:()=>Ve,floor:()=>ce,forEach:()=>Be,fromValues:()=>ne,inverse:()=>pe,len:()=>ze,length:()=>de,lerp:()=>Ae,max:()=>Me,min:()=>se,mul:()=>Qe,multiply:()=>oe,negate:()=>ye,normalize:()=>qe,random:()=>Pe,rotate:()=>Ee,round:()=>fe,scale:()=>le,scaleAndAdd:()=>ve,set:()=>re,sqrDist:()=>Ze,sqrLen:()=>_e,squaredDistance:()=>me,squaredLength:()=>xe,str:()=>Le,sub:()=>Oe,subtract:()=>ee,transformMat2:()=>Se,transformMat2d:()=>Re,transformMat3:()=>Te,transformMat4:()=>Ie,zero:()=>Fe});var M=1e-6,f="undefined"!=typeof Float32Array?Float32Array:Array,l=Math.random;function v(t){f=t}var b=Math.PI/180;function m(t){return t*b}function d(t,n){return Math.abs(t-n)<=M*Math.max(1,Math.abs(t),Math.abs(n))}function x(){var t=new f(4);return f!=Float32Array&&(t[1]=0,t[2]=0),t[0]=1,t[3]=1,t}function y(t){var n=new f(4);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function p(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function q(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t}function w(t,n,a,r){var u=new f(4);return u[0]=t,u[1]=n,u[2]=a,u[3]=r,u}function g(t,n,a,r,u){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t}function A(t,n){if(t===n){var a=n[1];t[1]=n[2],t[2]=a}else t[0]=n[0],t[1]=n[2],t[2]=n[1],t[3]=n[3];return t}function P(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a*e-u*r;return o?(o=1/o,t[0]=e*o,t[1]=-r*o,t[2]=-u*o,t[3]=a*o,t):null}function S(t,n){var a=n[0];return t[0]=n[3],t[1]=-n[1],t[2]=-n[2],t[3]=a,t}function R(t){return t[0]*t[3]-t[2]*t[1]}function T(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1],c=a[2],s=a[3];return t[0]=r*i+e*h,t[1]=u*i+o*h,t[2]=r*c+e*s,t[3]=u*c+o*s,t}function I(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h+e*i,t[1]=u*h+o*i,t[2]=r*-i+e*h,t[3]=u*-i+o*h,t}function E(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1];return t[0]=r*i,t[1]=u*i,t[2]=e*h,t[3]=o*h,t}function D(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=-a,t[3]=r,t}function F(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t}function L(t){return"mat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function V(t){return Math.hypot(t[0],t[1],t[2],t[3])}function j(t,n,a,r){return t[2]=r[2]/r[0],a[0]=r[0],a[1]=r[1],a[3]=r[3]-t[2]*a[1],[t,n,a]}function z(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t}function O(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t}function Q(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function Y(t,n){var a=t[0],r=t[1],u=t[2],e=t[3],o=n[0],i=n[1],h=n[2],c=n[3];return Math.abs(a-o)<=M*Math.max(1,Math.abs(a),Math.abs(o))&&Math.abs(r-i)<=M*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(u-h)<=M*Math.max(1,Math.abs(u),Math.abs(h))&&Math.abs(e-c)<=M*Math.max(1,Math.abs(e),Math.abs(c))}function X(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t}function Z(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t}Math.hypot||(Math.hypot=function(){for(var t=0,n=arguments.length;n--;)t+=arguments[n]*arguments[n];return Math.sqrt(t)});var _=T,B=O;function N(){var t=new f(6);return f!=Float32Array&&(t[1]=0,t[2]=0,t[4]=0,t[5]=0),t[0]=1,t[3]=1,t}function k(t){var n=new f(6);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n}function U(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t}function W(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function C(t,n,a,r,u,e){var o=new f(6);return o[0]=t,o[1]=n,o[2]=a,o[3]=r,o[4]=u,o[5]=e,o}function G(t,n,a,r,u,e,o){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t}function H(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=a*e-r*u;return h?(h=1/h,t[0]=e*h,t[1]=-r*h,t[2]=-u*h,t[3]=a*h,t[4]=(u*i-e*o)*h,t[5]=(r*o-a*i)*h,t):null}function J(t){return t[0]*t[3]-t[1]*t[2]}function K(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=a[0],s=a[1],M=a[2],f=a[3],l=a[4],v=a[5];return t[0]=r*c+e*s,t[1]=u*c+o*s,t[2]=r*M+e*f,t[3]=u*M+o*f,t[4]=r*l+e*v+i,t[5]=u*l+o*v+h,t}function $(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=Math.sin(a),s=Math.cos(a);return t[0]=r*s+e*c,t[1]=u*s+o*c,t[2]=r*-c+e*s,t[3]=u*-c+o*s,t[4]=i,t[5]=h,t}function tt(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=a[0],s=a[1];return t[0]=r*c,t[1]=u*c,t[2]=e*s,t[3]=o*s,t[4]=i,t[5]=h,t}function nt(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=a[0],s=a[1];return t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=r*c+e*s+i,t[5]=u*c+o*s+h,t}function at(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=-a,t[3]=r,t[4]=0,t[5]=0,t}function rt(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t[4]=0,t[5]=0,t}function ut(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=n[0],t[5]=n[1],t}function et(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"}function ot(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],1)}function it(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t}function ht(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t}function ct(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t}function st(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t}function Mt(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]}function ft(t,n){var a=t[0],r=t[1],u=t[2],e=t[3],o=t[4],i=t[5],h=n[0],c=n[1],s=n[2],f=n[3],l=n[4],v=n[5];return Math.abs(a-h)<=M*Math.max(1,Math.abs(a),Math.abs(h))&&Math.abs(r-c)<=M*Math.max(1,Math.abs(r),Math.abs(c))&&Math.abs(u-s)<=M*Math.max(1,Math.abs(u),Math.abs(s))&&Math.abs(e-f)<=M*Math.max(1,Math.abs(e),Math.abs(f))&&Math.abs(o-l)<=M*Math.max(1,Math.abs(o),Math.abs(l))&&Math.abs(i-v)<=M*Math.max(1,Math.abs(i),Math.abs(v))}var lt=K,vt=ht;function bt(){var t=new f(9);return f!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function mt(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[4],t[4]=n[5],t[5]=n[6],t[6]=n[8],t[7]=n[9],t[8]=n[10],t}function dt(t){var n=new f(9);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n}function xt(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t}function yt(t,n,a,r,u,e,o,i,h){var c=new f(9);return c[0]=t,c[1]=n,c[2]=a,c[3]=r,c[4]=u,c[5]=e,c[6]=o,c[7]=i,c[8]=h,c}function pt(t,n,a,r,u,e,o,i,h,c){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t[6]=i,t[7]=h,t[8]=c,t}function qt(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function wt(t,n){if(t===n){var a=n[1],r=n[2],u=n[5];t[1]=n[3],t[2]=n[6],t[3]=a,t[5]=n[7],t[6]=r,t[7]=u}else t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8];return t}function gt(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=s*o-i*c,f=-s*e+i*h,l=c*e-o*h,v=a*M+r*f+u*l;return v?(v=1/v,t[0]=M*v,t[1]=(-s*r+u*c)*v,t[2]=(i*r-u*o)*v,t[3]=f*v,t[4]=(s*a-u*h)*v,t[5]=(-i*a+u*e)*v,t[6]=l*v,t[7]=(-c*a+r*h)*v,t[8]=(o*a-r*e)*v,t):null}function At(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8];return t[0]=o*s-i*c,t[1]=u*c-r*s,t[2]=r*i-u*o,t[3]=i*h-e*s,t[4]=a*s-u*h,t[5]=u*e-a*i,t[6]=e*c-o*h,t[7]=r*h-a*c,t[8]=a*o-r*e,t}function Pt(t){var n=t[0],a=t[1],r=t[2],u=t[3],e=t[4],o=t[5],i=t[6],h=t[7],c=t[8];return n*(c*e-o*h)+a*(-c*u+o*i)+r*(h*u-e*i)}function St(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=a[0],l=a[1],v=a[2],b=a[3],m=a[4],d=a[5],x=a[6],y=a[7],p=a[8];return t[0]=f*r+l*o+v*c,t[1]=f*u+l*i+v*s,t[2]=f*e+l*h+v*M,t[3]=b*r+m*o+d*c,t[4]=b*u+m*i+d*s,t[5]=b*e+m*h+d*M,t[6]=x*r+y*o+p*c,t[7]=x*u+y*i+p*s,t[8]=x*e+y*h+p*M,t}function Rt(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=a[0],l=a[1];return t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=i,t[5]=h,t[6]=f*r+l*o+c,t[7]=f*u+l*i+s,t[8]=f*e+l*h+M,t}function Tt(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=Math.sin(a),l=Math.cos(a);return t[0]=l*r+f*o,t[1]=l*u+f*i,t[2]=l*e+f*h,t[3]=l*o-f*r,t[4]=l*i-f*u,t[5]=l*h-f*e,t[6]=c,t[7]=s,t[8]=M,t}function It(t,n,a){var r=a[0],u=a[1];return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=u*n[3],t[4]=u*n[4],t[5]=u*n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t}function Et(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=n[0],t[7]=n[1],t[8]=1,t}function Dt(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=0,t[3]=-a,t[4]=r,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function Ft(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=n[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function Lt(t,n){return t[0]=n[0],t[1]=n[1],t[2]=0,t[3]=n[2],t[4]=n[3],t[5]=0,t[6]=n[4],t[7]=n[5],t[8]=1,t}function Vt(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a+a,i=r+r,h=u+u,c=a*o,s=r*o,M=r*i,f=u*o,l=u*i,v=u*h,b=e*o,m=e*i,d=e*h;return t[0]=1-M-v,t[3]=s-d,t[6]=f+m,t[1]=s+d,t[4]=1-c-v,t[7]=l-b,t[2]=f-m,t[5]=l+b,t[8]=1-c-M,t}function jt(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=n[9],f=n[10],l=n[11],v=n[12],b=n[13],m=n[14],d=n[15],x=a*i-r*o,y=a*h-u*o,p=a*c-e*o,q=r*h-u*i,w=r*c-e*i,g=u*c-e*h,A=s*b-M*v,P=s*m-f*v,S=s*d-l*v,R=M*m-f*b,T=M*d-l*b,I=f*d-l*m,E=x*I-y*T+p*R+q*S-w*P+g*A;return E?(E=1/E,t[0]=(i*I-h*T+c*R)*E,t[1]=(h*S-o*I-c*P)*E,t[2]=(o*T-i*S+c*A)*E,t[3]=(u*T-r*I-e*R)*E,t[4]=(a*I-u*S+e*P)*E,t[5]=(r*S-a*T-e*A)*E,t[6]=(b*g-m*w+d*q)*E,t[7]=(m*p-v*g-d*y)*E,t[8]=(v*w-b*p+d*x)*E,t):null}function zt(t,n,a){return t[0]=2/n,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/a,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t}function Ot(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"}function Qt(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8])}function Yt(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t[8]=n[8]+a[8],t}function Xt(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t[6]=n[6]-a[6],t[7]=n[7]-a[7],t[8]=n[8]-a[8],t}function Zt(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t[8]=n[8]*a,t}function _t(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t[6]=n[6]+a[6]*r,t[7]=n[7]+a[7]*r,t[8]=n[8]+a[8]*r,t}function Bt(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]}function Nt(t,n){var a=t[0],r=t[1],u=t[2],e=t[3],o=t[4],i=t[5],h=t[6],c=t[7],s=t[8],f=n[0],l=n[1],v=n[2],b=n[3],m=n[4],d=n[5],x=n[6],y=n[7],p=n[8];return Math.abs(a-f)<=M*Math.max(1,Math.abs(a),Math.abs(f))&&Math.abs(r-l)<=M*Math.max(1,Math.abs(r),Math.abs(l))&&Math.abs(u-v)<=M*Math.max(1,Math.abs(u),Math.abs(v))&&Math.abs(e-b)<=M*Math.max(1,Math.abs(e),Math.abs(b))&&Math.abs(o-m)<=M*Math.max(1,Math.abs(o),Math.abs(m))&&Math.abs(i-d)<=M*Math.max(1,Math.abs(i),Math.abs(d))&&Math.abs(h-x)<=M*Math.max(1,Math.abs(h),Math.abs(x))&&Math.abs(c-y)<=M*Math.max(1,Math.abs(c),Math.abs(y))&&Math.abs(s-p)<=M*Math.max(1,Math.abs(s),Math.abs(p))}var kt=St,Ut=Xt;function Wt(){var t=new f(16);return f!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function Ct(t){var n=new f(16);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}function Gt(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function Ht(t,n,a,r,u,e,o,i,h,c,s,M,l,v,b,m){var d=new f(16);return d[0]=t,d[1]=n,d[2]=a,d[3]=r,d[4]=u,d[5]=e,d[6]=o,d[7]=i,d[8]=h,d[9]=c,d[10]=s,d[11]=M,d[12]=l,d[13]=v,d[14]=b,d[15]=m,d}function Jt(t,n,a,r,u,e,o,i,h,c,s,M,f,l,v,b,m){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t[6]=i,t[7]=h,t[8]=c,t[9]=s,t[10]=M,t[11]=f,t[12]=l,t[13]=v,t[14]=b,t[15]=m,t}function Kt(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function $t(t,n){if(t===n){var a=n[1],r=n[2],u=n[3],e=n[6],o=n[7],i=n[11];t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=a,t[6]=n[9],t[7]=n[13],t[8]=r,t[9]=e,t[11]=n[14],t[12]=u,t[13]=o,t[14]=i}else t[0]=n[0],t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=n[1],t[5]=n[5],t[6]=n[9],t[7]=n[13],t[8]=n[2],t[9]=n[6],t[10]=n[10],t[11]=n[14],t[12]=n[3],t[13]=n[7],t[14]=n[11],t[15]=n[15];return t}function tn(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=n[9],f=n[10],l=n[11],v=n[12],b=n[13],m=n[14],d=n[15],x=a*i-r*o,y=a*h-u*o,p=a*c-e*o,q=r*h-u*i,w=r*c-e*i,g=u*c-e*h,A=s*b-M*v,P=s*m-f*v,S=s*d-l*v,R=M*m-f*b,T=M*d-l*b,I=f*d-l*m,E=x*I-y*T+p*R+q*S-w*P+g*A;return E?(E=1/E,t[0]=(i*I-h*T+c*R)*E,t[1]=(u*T-r*I-e*R)*E,t[2]=(b*g-m*w+d*q)*E,t[3]=(f*w-M*g-l*q)*E,t[4]=(h*S-o*I-c*P)*E,t[5]=(a*I-u*S+e*P)*E,t[6]=(m*p-v*g-d*y)*E,t[7]=(s*g-f*p+l*y)*E,t[8]=(o*T-i*S+c*A)*E,t[9]=(r*S-a*T-e*A)*E,t[10]=(v*w-b*p+d*x)*E,t[11]=(M*p-s*w-l*x)*E,t[12]=(i*P-o*R-h*A)*E,t[13]=(a*R-r*P+u*A)*E,t[14]=(b*y-v*q-m*x)*E,t[15]=(s*q-M*y+f*x)*E,t):null}function nn(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=n[9],f=n[10],l=n[11],v=n[12],b=n[13],m=n[14],d=n[15];return t[0]=i*(f*d-l*m)-M*(h*d-c*m)+b*(h*l-c*f),t[1]=-(r*(f*d-l*m)-M*(u*d-e*m)+b*(u*l-e*f)),t[2]=r*(h*d-c*m)-i*(u*d-e*m)+b*(u*c-e*h),t[3]=-(r*(h*l-c*f)-i*(u*l-e*f)+M*(u*c-e*h)),t[4]=-(o*(f*d-l*m)-s*(h*d-c*m)+v*(h*l-c*f)),t[5]=a*(f*d-l*m)-s*(u*d-e*m)+v*(u*l-e*f),t[6]=-(a*(h*d-c*m)-o*(u*d-e*m)+v*(u*c-e*h)),t[7]=a*(h*l-c*f)-o*(u*l-e*f)+s*(u*c-e*h),t[8]=o*(M*d-l*b)-s*(i*d-c*b)+v*(i*l-c*M),t[9]=-(a*(M*d-l*b)-s*(r*d-e*b)+v*(r*l-e*M)),t[10]=a*(i*d-c*b)-o*(r*d-e*b)+v*(r*c-e*i),t[11]=-(a*(i*l-c*M)-o*(r*l-e*M)+s*(r*c-e*i)),t[12]=-(o*(M*m-f*b)-s*(i*m-h*b)+v*(i*f-h*M)),t[13]=a*(M*m-f*b)-s*(r*m-u*b)+v*(r*f-u*M),t[14]=-(a*(i*m-h*b)-o*(r*m-u*b)+v*(r*h-u*i)),t[15]=a*(i*f-h*M)-o*(r*f-u*M)+s*(r*h-u*i),t}function an(t){var n=t[0],a=t[1],r=t[2],u=t[3],e=t[4],o=t[5],i=t[6],h=t[7],c=t[8],s=t[9],M=t[10],f=t[11],l=t[12],v=t[13],b=t[14],m=t[15];return(n*o-a*e)*(M*m-f*b)-(n*i-r*e)*(s*m-f*v)+(n*h-u*e)*(s*b-M*v)+(a*i-r*o)*(c*m-f*l)-(a*h-u*o)*(c*b-M*l)+(r*h-u*i)*(c*v-s*l)}function rn(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=n[9],l=n[10],v=n[11],b=n[12],m=n[13],d=n[14],x=n[15],y=a[0],p=a[1],q=a[2],w=a[3];return t[0]=y*r+p*i+q*M+w*b,t[1]=y*u+p*h+q*f+w*m,t[2]=y*e+p*c+q*l+w*d,t[3]=y*o+p*s+q*v+w*x,y=a[4],p=a[5],q=a[6],w=a[7],t[4]=y*r+p*i+q*M+w*b,t[5]=y*u+p*h+q*f+w*m,t[6]=y*e+p*c+q*l+w*d,t[7]=y*o+p*s+q*v+w*x,y=a[8],p=a[9],q=a[10],w=a[11],t[8]=y*r+p*i+q*M+w*b,t[9]=y*u+p*h+q*f+w*m,t[10]=y*e+p*c+q*l+w*d,t[11]=y*o+p*s+q*v+w*x,y=a[12],p=a[13],q=a[14],w=a[15],t[12]=y*r+p*i+q*M+w*b,t[13]=y*u+p*h+q*f+w*m,t[14]=y*e+p*c+q*l+w*d,t[15]=y*o+p*s+q*v+w*x,t}function un(t,n,a){var r,u,e,o,i,h,c,s,M,f,l,v,b=a[0],m=a[1],d=a[2];return n===t?(t[12]=n[0]*b+n[4]*m+n[8]*d+n[12],t[13]=n[1]*b+n[5]*m+n[9]*d+n[13],t[14]=n[2]*b+n[6]*m+n[10]*d+n[14],t[15]=n[3]*b+n[7]*m+n[11]*d+n[15]):(r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=n[9],l=n[10],v=n[11],t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=i,t[5]=h,t[6]=c,t[7]=s,t[8]=M,t[9]=f,t[10]=l,t[11]=v,t[12]=r*b+i*m+M*d+n[12],t[13]=u*b+h*m+f*d+n[13],t[14]=e*b+c*m+l*d+n[14],t[15]=o*b+s*m+v*d+n[15]),t}function en(t,n,a){var r=a[0],u=a[1],e=a[2];return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*u,t[5]=n[5]*u,t[6]=n[6]*u,t[7]=n[7]*u,t[8]=n[8]*e,t[9]=n[9]*e,t[10]=n[10]*e,t[11]=n[11]*e,t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function on(t,n,a,r){var u,e,o,i,h,c,s,f,l,v,b,m,d,x,y,p,q,w,g,A,P,S,R,T,I=r[0],E=r[1],D=r[2],F=Math.hypot(I,E,D);return F<M?null:(I*=F=1/F,E*=F,D*=F,u=Math.sin(a),o=1-(e=Math.cos(a)),i=n[0],h=n[1],c=n[2],s=n[3],f=n[4],l=n[5],v=n[6],b=n[7],m=n[8],d=n[9],x=n[10],y=n[11],p=I*I*o+e,q=E*I*o+D*u,w=D*I*o-E*u,g=I*E*o-D*u,A=E*E*o+e,P=D*E*o+I*u,S=I*D*o+E*u,R=E*D*o-I*u,T=D*D*o+e,t[0]=i*p+f*q+m*w,t[1]=h*p+l*q+d*w,t[2]=c*p+v*q+x*w,t[3]=s*p+b*q+y*w,t[4]=i*g+f*A+m*P,t[5]=h*g+l*A+d*P,t[6]=c*g+v*A+x*P,t[7]=s*g+b*A+y*P,t[8]=i*S+f*R+m*T,t[9]=h*S+l*R+d*T,t[10]=c*S+v*R+x*T,t[11]=s*S+b*R+y*T,n!==t&&(t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t)}function hn(t,n,a){var r=Math.sin(a),u=Math.cos(a),e=n[4],o=n[5],i=n[6],h=n[7],c=n[8],s=n[9],M=n[10],f=n[11];return n!==t&&(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[4]=e*u+c*r,t[5]=o*u+s*r,t[6]=i*u+M*r,t[7]=h*u+f*r,t[8]=c*u-e*r,t[9]=s*u-o*r,t[10]=M*u-i*r,t[11]=f*u-h*r,t}function cn(t,n,a){var r=Math.sin(a),u=Math.cos(a),e=n[0],o=n[1],i=n[2],h=n[3],c=n[8],s=n[9],M=n[10],f=n[11];return n!==t&&(t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=e*u-c*r,t[1]=o*u-s*r,t[2]=i*u-M*r,t[3]=h*u-f*r,t[8]=e*r+c*u,t[9]=o*r+s*u,t[10]=i*r+M*u,t[11]=h*r+f*u,t}function sn(t,n,a){var r=Math.sin(a),u=Math.cos(a),e=n[0],o=n[1],i=n[2],h=n[3],c=n[4],s=n[5],M=n[6],f=n[7];return n!==t&&(t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=e*u+c*r,t[1]=o*u+s*r,t[2]=i*u+M*r,t[3]=h*u+f*r,t[4]=c*u-e*r,t[5]=s*u-o*r,t[6]=M*u-i*r,t[7]=f*u-h*r,t}function Mn(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function fn(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function ln(t,n,a){var r,u,e,o=a[0],i=a[1],h=a[2],c=Math.hypot(o,i,h);return c<M?null:(o*=c=1/c,i*=c,h*=c,r=Math.sin(n),e=1-(u=Math.cos(n)),t[0]=o*o*e+u,t[1]=i*o*e+h*r,t[2]=h*o*e-i*r,t[3]=0,t[4]=o*i*e-h*r,t[5]=i*i*e+u,t[6]=h*i*e+o*r,t[7]=0,t[8]=o*h*e+i*r,t[9]=i*h*e-o*r,t[10]=h*h*e+u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}function vn(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=a,t[7]=0,t[8]=0,t[9]=-a,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function bn(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=0,t[2]=-a,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=a,t[9]=0,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function mn(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=0,t[3]=0,t[4]=-a,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function dn(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=r+r,h=u+u,c=e+e,s=r*i,M=r*h,f=r*c,l=u*h,v=u*c,b=e*c,m=o*i,d=o*h,x=o*c;return t[0]=1-(l+b),t[1]=M+x,t[2]=f-d,t[3]=0,t[4]=M-x,t[5]=1-(s+b),t[6]=v+m,t[7]=0,t[8]=f+d,t[9]=v-m,t[10]=1-(s+l),t[11]=0,t[12]=a[0],t[13]=a[1],t[14]=a[2],t[15]=1,t}function xn(t,n){var a=new f(3),r=-n[0],u=-n[1],e=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=r*r+u*u+e*e+o*o;return M>0?(a[0]=2*(i*o+s*r+h*e-c*u)/M,a[1]=2*(h*o+s*u+c*r-i*e)/M,a[2]=2*(c*o+s*e+i*u-h*r)/M):(a[0]=2*(i*o+s*r+h*e-c*u),a[1]=2*(h*o+s*u+c*r-i*e),a[2]=2*(c*o+s*e+i*u-h*r)),dn(t,n,a),t}function yn(t,n){return t[0]=n[12],t[1]=n[13],t[2]=n[14],t}function pn(t,n){var a=n[0],r=n[1],u=n[2],e=n[4],o=n[5],i=n[6],h=n[8],c=n[9],s=n[10];return t[0]=Math.hypot(a,r,u),t[1]=Math.hypot(e,o,i),t[2]=Math.hypot(h,c,s),t}function qn(t,n){var a=new f(3);pn(a,n);var r=1/a[0],u=1/a[1],e=1/a[2],o=n[0]*r,i=n[1]*u,h=n[2]*e,c=n[4]*r,s=n[5]*u,M=n[6]*e,l=n[8]*r,v=n[9]*u,b=n[10]*e,m=o+s+b,d=0;return m>0?(d=2*Math.sqrt(m+1),t[3]=.25*d,t[0]=(M-v)/d,t[1]=(l-h)/d,t[2]=(i-c)/d):o>s&&o>b?(d=2*Math.sqrt(1+o-s-b),t[3]=(M-v)/d,t[0]=.25*d,t[1]=(i+c)/d,t[2]=(l+h)/d):s>b?(d=2*Math.sqrt(1+s-o-b),t[3]=(l-h)/d,t[0]=(i+c)/d,t[1]=.25*d,t[2]=(M+v)/d):(d=2*Math.sqrt(1+b-o-s),t[3]=(i-c)/d,t[0]=(l+h)/d,t[1]=(M+v)/d,t[2]=.25*d),t}function wn(t,n,a,r){var u=n[0],e=n[1],o=n[2],i=n[3],h=u+u,c=e+e,s=o+o,M=u*h,f=u*c,l=u*s,v=e*c,b=e*s,m=o*s,d=i*h,x=i*c,y=i*s,p=r[0],q=r[1],w=r[2];return t[0]=(1-(v+m))*p,t[1]=(f+y)*p,t[2]=(l-x)*p,t[3]=0,t[4]=(f-y)*q,t[5]=(1-(M+m))*q,t[6]=(b+d)*q,t[7]=0,t[8]=(l+x)*w,t[9]=(b-d)*w,t[10]=(1-(M+v))*w,t[11]=0,t[12]=a[0],t[13]=a[1],t[14]=a[2],t[15]=1,t}function gn(t,n,a,r,u){var e=n[0],o=n[1],i=n[2],h=n[3],c=e+e,s=o+o,M=i+i,f=e*c,l=e*s,v=e*M,b=o*s,m=o*M,d=i*M,x=h*c,y=h*s,p=h*M,q=r[0],w=r[1],g=r[2],A=u[0],P=u[1],S=u[2],R=(1-(b+d))*q,T=(l+p)*q,I=(v-y)*q,E=(l-p)*w,D=(1-(f+d))*w,F=(m+x)*w,L=(v+y)*g,V=(m-x)*g,j=(1-(f+b))*g;return t[0]=R,t[1]=T,t[2]=I,t[3]=0,t[4]=E,t[5]=D,t[6]=F,t[7]=0,t[8]=L,t[9]=V,t[10]=j,t[11]=0,t[12]=a[0]+A-(R*A+E*P+L*S),t[13]=a[1]+P-(T*A+D*P+V*S),t[14]=a[2]+S-(I*A+F*P+j*S),t[15]=1,t}function An(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a+a,i=r+r,h=u+u,c=a*o,s=r*o,M=r*i,f=u*o,l=u*i,v=u*h,b=e*o,m=e*i,d=e*h;return t[0]=1-M-v,t[1]=s+d,t[2]=f-m,t[3]=0,t[4]=s-d,t[5]=1-c-v,t[6]=l+b,t[7]=0,t[8]=f+m,t[9]=l-b,t[10]=1-c-M,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Pn(t,n,a,r,u,e,o){var i=1/(a-n),h=1/(u-r),c=1/(e-o);return t[0]=2*e*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*e*h,t[6]=0,t[7]=0,t[8]=(a+n)*i,t[9]=(u+r)*h,t[10]=(o+e)*c,t[11]=-1,t[12]=0,t[13]=0,t[14]=o*e*2*c,t[15]=0,t}function Sn(t,n,a,r,u){var e,o=1/Math.tan(n/2);return t[0]=o/a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=u&&u!==1/0?(e=1/(r-u),t[10]=(u+r)*e,t[14]=2*u*r*e):(t[10]=-1,t[14]=-2*r),t}function Rn(t,n,a,r){var u=Math.tan(n.upDegrees*Math.PI/180),e=Math.tan(n.downDegrees*Math.PI/180),o=Math.tan(n.leftDegrees*Math.PI/180),i=Math.tan(n.rightDegrees*Math.PI/180),h=2/(o+i),c=2/(u+e);return t[0]=h,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=c,t[6]=0,t[7]=0,t[8]=-(o-i)*h*.5,t[9]=(u-e)*c*.5,t[10]=r/(a-r),t[11]=-1,t[12]=0,t[13]=0,t[14]=r*a/(a-r),t[15]=0,t}function Tn(t,n,a,r,u,e,o){var i=1/(n-a),h=1/(r-u),c=1/(e-o);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*h,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(n+a)*i,t[13]=(u+r)*h,t[14]=(o+e)*c,t[15]=1,t}function In(t,n,a,r){var u,e,o,i,h,c,s,f,l,v,b=n[0],m=n[1],d=n[2],x=r[0],y=r[1],p=r[2],q=a[0],w=a[1],g=a[2];return Math.abs(b-q)<M&&Math.abs(m-w)<M&&Math.abs(d-g)<M?Kt(t):(s=b-q,f=m-w,l=d-g,u=y*(l*=v=1/Math.hypot(s,f,l))-p*(f*=v),e=p*(s*=v)-x*l,o=x*f-y*s,(v=Math.hypot(u,e,o))?(u*=v=1/v,e*=v,o*=v):(u=0,e=0,o=0),i=f*o-l*e,h=l*u-s*o,c=s*e-f*u,(v=Math.hypot(i,h,c))?(i*=v=1/v,h*=v,c*=v):(i=0,h=0,c=0),t[0]=u,t[1]=i,t[2]=s,t[3]=0,t[4]=e,t[5]=h,t[6]=f,t[7]=0,t[8]=o,t[9]=c,t[10]=l,t[11]=0,t[12]=-(u*b+e*m+o*d),t[13]=-(i*b+h*m+c*d),t[14]=-(s*b+f*m+l*d),t[15]=1,t)}function En(t,n,a,r){var u=n[0],e=n[1],o=n[2],i=r[0],h=r[1],c=r[2],s=u-a[0],M=e-a[1],f=o-a[2],l=s*s+M*M+f*f;l>0&&(s*=l=1/Math.sqrt(l),M*=l,f*=l);var v=h*f-c*M,b=c*s-i*f,m=i*M-h*s;return(l=v*v+b*b+m*m)>0&&(v*=l=1/Math.sqrt(l),b*=l,m*=l),t[0]=v,t[1]=b,t[2]=m,t[3]=0,t[4]=M*m-f*b,t[5]=f*v-s*m,t[6]=s*b-M*v,t[7]=0,t[8]=s,t[9]=M,t[10]=f,t[11]=0,t[12]=u,t[13]=e,t[14]=o,t[15]=1,t}function Dn(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}function Fn(t){return Math.hypot(t[0],t[1],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])}function Ln(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t[8]=n[8]+a[8],t[9]=n[9]+a[9],t[10]=n[10]+a[10],t[11]=n[11]+a[11],t[12]=n[12]+a[12],t[13]=n[13]+a[13],t[14]=n[14]+a[14],t[15]=n[15]+a[15],t}function Vn(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t[6]=n[6]-a[6],t[7]=n[7]-a[7],t[8]=n[8]-a[8],t[9]=n[9]-a[9],t[10]=n[10]-a[10],t[11]=n[11]-a[11],t[12]=n[12]-a[12],t[13]=n[13]-a[13],t[14]=n[14]-a[14],t[15]=n[15]-a[15],t}function jn(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=n[11]*a,t[12]=n[12]*a,t[13]=n[13]*a,t[14]=n[14]*a,t[15]=n[15]*a,t}function zn(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t[6]=n[6]+a[6]*r,t[7]=n[7]+a[7]*r,t[8]=n[8]+a[8]*r,t[9]=n[9]+a[9]*r,t[10]=n[10]+a[10]*r,t[11]=n[11]+a[11]*r,t[12]=n[12]+a[12]*r,t[13]=n[13]+a[13]*r,t[14]=n[14]+a[14]*r,t[15]=n[15]+a[15]*r,t}function On(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]&&t[9]===n[9]&&t[10]===n[10]&&t[11]===n[11]&&t[12]===n[12]&&t[13]===n[13]&&t[14]===n[14]&&t[15]===n[15]}function Qn(t,n){var a=t[0],r=t[1],u=t[2],e=t[3],o=t[4],i=t[5],h=t[6],c=t[7],s=t[8],f=t[9],l=t[10],v=t[11],b=t[12],m=t[13],d=t[14],x=t[15],y=n[0],p=n[1],q=n[2],w=n[3],g=n[4],A=n[5],P=n[6],S=n[7],R=n[8],T=n[9],I=n[10],E=n[11],D=n[12],F=n[13],L=n[14],V=n[15];return Math.abs(a-y)<=M*Math.max(1,Math.abs(a),Math.abs(y))&&Math.abs(r-p)<=M*Math.max(1,Math.abs(r),Math.abs(p))&&Math.abs(u-q)<=M*Math.max(1,Math.abs(u),Math.abs(q))&&Math.abs(e-w)<=M*Math.max(1,Math.abs(e),Math.abs(w))&&Math.abs(o-g)<=M*Math.max(1,Math.abs(o),Math.abs(g))&&Math.abs(i-A)<=M*Math.max(1,Math.abs(i),Math.abs(A))&&Math.abs(h-P)<=M*Math.max(1,Math.abs(h),Math.abs(P))&&Math.abs(c-S)<=M*Math.max(1,Math.abs(c),Math.abs(S))&&Math.abs(s-R)<=M*Math.max(1,Math.abs(s),Math.abs(R))&&Math.abs(f-T)<=M*Math.max(1,Math.abs(f),Math.abs(T))&&Math.abs(l-I)<=M*Math.max(1,Math.abs(l),Math.abs(I))&&Math.abs(v-E)<=M*Math.max(1,Math.abs(v),Math.abs(E))&&Math.abs(b-D)<=M*Math.max(1,Math.abs(b),Math.abs(D))&&Math.abs(m-F)<=M*Math.max(1,Math.abs(m),Math.abs(F))&&Math.abs(d-L)<=M*Math.max(1,Math.abs(d),Math.abs(L))&&Math.abs(x-V)<=M*Math.max(1,Math.abs(x),Math.abs(V))}var Yn=rn,Xn=Vn;function Zn(){var t=new f(3);return f!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function _n(t){var n=new f(3);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n}function Bn(t){var n=t[0],a=t[1],r=t[2];return Math.hypot(n,a,r)}function Nn(t,n,a){var r=new f(3);return r[0]=t,r[1]=n,r[2]=a,r}function kn(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function Un(t,n,a,r){return t[0]=n,t[1]=a,t[2]=r,t}function Wn(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t}function Cn(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t}function Gn(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t[2]=n[2]*a[2],t}function Hn(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t[2]=n[2]/a[2],t}function Jn(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t}function Kn(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t}function $n(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t[2]=Math.min(n[2],a[2]),t}function ta(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t[2]=Math.max(n[2],a[2]),t}function na(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t}function aa(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t}function ra(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t}function ua(t,n){var a=n[0]-t[0],r=n[1]-t[1],u=n[2]-t[2];return Math.hypot(a,r,u)}function ea(t,n){var a=n[0]-t[0],r=n[1]-t[1],u=n[2]-t[2];return a*a+r*r+u*u}function oa(t){var n=t[0],a=t[1],r=t[2];return n*n+a*a+r*r}function ia(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t}function ha(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t}function ca(t,n){var a=n[0],r=n[1],u=n[2],e=a*a+r*r+u*u;return e>0&&(e=1/Math.sqrt(e)),t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t}function sa(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function Ma(t,n,a){var r=n[0],u=n[1],e=n[2],o=a[0],i=a[1],h=a[2];return t[0]=u*h-e*i,t[1]=e*o-r*h,t[2]=r*i-u*o,t}function fa(t,n,a,r){var u=n[0],e=n[1],o=n[2];return t[0]=u+r*(a[0]-u),t[1]=e+r*(a[1]-e),t[2]=o+r*(a[2]-o),t}function la(t,n,a,r,u,e){var o=e*e,i=o*(2*e-3)+1,h=o*(e-2)+e,c=o*(e-1),s=o*(3-2*e);return t[0]=n[0]*i+a[0]*h+r[0]*c+u[0]*s,t[1]=n[1]*i+a[1]*h+r[1]*c+u[1]*s,t[2]=n[2]*i+a[2]*h+r[2]*c+u[2]*s,t}function va(t,n,a,r,u,e){var o=1-e,i=o*o,h=e*e,c=i*o,s=3*e*i,M=3*h*o,f=h*e;return t[0]=n[0]*c+a[0]*s+r[0]*M+u[0]*f,t[1]=n[1]*c+a[1]*s+r[1]*M+u[1]*f,t[2]=n[2]*c+a[2]*s+r[2]*M+u[2]*f,t}function ba(t,n){n=n||1;var a=2*l()*Math.PI,r=2*l()-1,u=Math.sqrt(1-r*r)*n;return t[0]=Math.cos(a)*u,t[1]=Math.sin(a)*u,t[2]=r*n,t}function ma(t,n,a){var r=n[0],u=n[1],e=n[2],o=a[3]*r+a[7]*u+a[11]*e+a[15];return o=o||1,t[0]=(a[0]*r+a[4]*u+a[8]*e+a[12])/o,t[1]=(a[1]*r+a[5]*u+a[9]*e+a[13])/o,t[2]=(a[2]*r+a[6]*u+a[10]*e+a[14])/o,t}function da(t,n,a){var r=n[0],u=n[1],e=n[2];return t[0]=r*a[0]+u*a[3]+e*a[6],t[1]=r*a[1]+u*a[4]+e*a[7],t[2]=r*a[2]+u*a[5]+e*a[8],t}function xa(t,n,a){var r=a[0],u=a[1],e=a[2],o=a[3],i=n[0],h=n[1],c=n[2],s=u*c-e*h,M=e*i-r*c,f=r*h-u*i,l=u*f-e*M,v=e*s-r*f,b=r*M-u*s,m=2*o;return s*=m,M*=m,f*=m,l*=2,v*=2,b*=2,t[0]=i+s+l,t[1]=h+M+v,t[2]=c+f+b,t}function ya(t,n,a,r){var u=[],e=[];return u[0]=n[0]-a[0],u[1]=n[1]-a[1],u[2]=n[2]-a[2],e[0]=u[0],e[1]=u[1]*Math.cos(r)-u[2]*Math.sin(r),e[2]=u[1]*Math.sin(r)+u[2]*Math.cos(r),t[0]=e[0]+a[0],t[1]=e[1]+a[1],t[2]=e[2]+a[2],t}function pa(t,n,a,r){var u=[],e=[];return u[0]=n[0]-a[0],u[1]=n[1]-a[1],u[2]=n[2]-a[2],e[0]=u[2]*Math.sin(r)+u[0]*Math.cos(r),e[1]=u[1],e[2]=u[2]*Math.cos(r)-u[0]*Math.sin(r),t[0]=e[0]+a[0],t[1]=e[1]+a[1],t[2]=e[2]+a[2],t}function qa(t,n,a,r){var u=[],e=[];return u[0]=n[0]-a[0],u[1]=n[1]-a[1],u[2]=n[2]-a[2],e[0]=u[0]*Math.cos(r)-u[1]*Math.sin(r),e[1]=u[0]*Math.sin(r)+u[1]*Math.cos(r),e[2]=u[2],t[0]=e[0]+a[0],t[1]=e[1]+a[1],t[2]=e[2]+a[2],t}function wa(t,n){var a=Nn(t[0],t[1],t[2]),r=Nn(n[0],n[1],n[2]);ca(a,a),ca(r,r);var u=sa(a,r);return u>1?0:u<-1?Math.PI:Math.acos(u)}function ga(t){return t[0]=0,t[1]=0,t[2]=0,t}function Aa(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"}function Pa(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function Sa(t,n){var a=t[0],r=t[1],u=t[2],e=n[0],o=n[1],i=n[2];return Math.abs(a-e)<=M*Math.max(1,Math.abs(a),Math.abs(e))&&Math.abs(r-o)<=M*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(u-i)<=M*Math.max(1,Math.abs(u),Math.abs(i))}var Ra,Ta=Cn,Ia=Gn,Ea=Hn,Da=ua,Fa=ea,La=Bn,Va=oa,ja=(Ra=Zn(),function(t,n,a,r,u,e){var o,i;for(n||(n=3),a||(a=0),i=r?Math.min(r*n+a,t.length):t.length,o=a;o<i;o+=n)Ra[0]=t[o],Ra[1]=t[o+1],Ra[2]=t[o+2],u(Ra,Ra,e),t[o]=Ra[0],t[o+1]=Ra[1],t[o+2]=Ra[2];return t});function za(){var t=new f(4);return f!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function Oa(t){var n=new f(4);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function Qa(t,n,a,r){var u=new f(4);return u[0]=t,u[1]=n,u[2]=a,u[3]=r,u}function Ya(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function Xa(t,n,a,r,u){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t}function Za(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t}function _a(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t}function Ba(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t[2]=n[2]*a[2],t[3]=n[3]*a[3],t}function Na(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t[2]=n[2]/a[2],t[3]=n[3]/a[3],t}function ka(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t[3]=Math.ceil(n[3]),t}function Ua(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t[3]=Math.floor(n[3]),t}function Wa(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t[2]=Math.min(n[2],a[2]),t[3]=Math.min(n[3],a[3]),t}function Ca(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t[2]=Math.max(n[2],a[2]),t[3]=Math.max(n[3],a[3]),t}function Ga(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t[3]=Math.round(n[3]),t}function Ha(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t}function Ja(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t}function Ka(t,n){var a=n[0]-t[0],r=n[1]-t[1],u=n[2]-t[2],e=n[3]-t[3];return Math.hypot(a,r,u,e)}function $a(t,n){var a=n[0]-t[0],r=n[1]-t[1],u=n[2]-t[2],e=n[3]-t[3];return a*a+r*r+u*u+e*e}function tr(t){var n=t[0],a=t[1],r=t[2],u=t[3];return Math.hypot(n,a,r,u)}function nr(t){var n=t[0],a=t[1],r=t[2],u=t[3];return n*n+a*a+r*r+u*u}function ar(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t}function rr(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t}function ur(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a*a+r*r+u*u+e*e;return o>0&&(o=1/Math.sqrt(o)),t[0]=a*o,t[1]=r*o,t[2]=u*o,t[3]=e*o,t}function er(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]}function or(t,n,a,r){var u=a[0]*r[1]-a[1]*r[0],e=a[0]*r[2]-a[2]*r[0],o=a[0]*r[3]-a[3]*r[0],i=a[1]*r[2]-a[2]*r[1],h=a[1]*r[3]-a[3]*r[1],c=a[2]*r[3]-a[3]*r[2],s=n[0],M=n[1],f=n[2],l=n[3];return t[0]=M*c-f*h+l*i,t[1]=-s*c+f*o-l*e,t[2]=s*h-M*o+l*u,t[3]=-s*i+M*e-f*u,t}function ir(t,n,a,r){var u=n[0],e=n[1],o=n[2],i=n[3];return t[0]=u+r*(a[0]-u),t[1]=e+r*(a[1]-e),t[2]=o+r*(a[2]-o),t[3]=i+r*(a[3]-i),t}function hr(t,n){var a,r,u,e,o,i;n=n||1;do{o=(a=2*l()-1)*a+(r=2*l()-1)*r}while(o>=1);do{i=(u=2*l()-1)*u+(e=2*l()-1)*e}while(i>=1);var h=Math.sqrt((1-o)/i);return t[0]=n*a,t[1]=n*r,t[2]=n*u*h,t[3]=n*e*h,t}function cr(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3];return t[0]=a[0]*r+a[4]*u+a[8]*e+a[12]*o,t[1]=a[1]*r+a[5]*u+a[9]*e+a[13]*o,t[2]=a[2]*r+a[6]*u+a[10]*e+a[14]*o,t[3]=a[3]*r+a[7]*u+a[11]*e+a[15]*o,t}function sr(t,n,a){var r=n[0],u=n[1],e=n[2],o=a[0],i=a[1],h=a[2],c=a[3],s=c*r+i*e-h*u,M=c*u+h*r-o*e,f=c*e+o*u-i*r,l=-o*r-i*u-h*e;return t[0]=s*c+l*-o+M*-h-f*-i,t[1]=M*c+l*-i+f*-o-s*-h,t[2]=f*c+l*-h+s*-i-M*-o,t[3]=n[3],t}function Mr(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t}function fr(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function lr(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function vr(t,n){var a=t[0],r=t[1],u=t[2],e=t[3],o=n[0],i=n[1],h=n[2],c=n[3];return Math.abs(a-o)<=M*Math.max(1,Math.abs(a),Math.abs(o))&&Math.abs(r-i)<=M*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(u-h)<=M*Math.max(1,Math.abs(u),Math.abs(h))&&Math.abs(e-c)<=M*Math.max(1,Math.abs(e),Math.abs(c))}var br=_a,mr=Ba,dr=Na,xr=Ka,yr=$a,pr=tr,qr=nr,wr=function(){var t=za();return function(n,a,r,u,e,o){var i,h;for(a||(a=4),r||(r=0),h=u?Math.min(u*a+r,n.length):n.length,i=r;i<h;i+=a)t[0]=n[i],t[1]=n[i+1],t[2]=n[i+2],t[3]=n[i+3],e(t,t,o),n[i]=t[0],n[i+1]=t[1],n[i+2]=t[2],n[i+3]=t[3];return n}}();function gr(){var t=new f(4);return f!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function Ar(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function Pr(t,n,a){a*=.5;var r=Math.sin(a);return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=Math.cos(a),t}function Sr(t,n){var a=2*Math.acos(n[3]),r=Math.sin(a/2);return r>M?(t[0]=n[0]/r,t[1]=n[1]/r,t[2]=n[2]/r):(t[0]=1,t[1]=0,t[2]=0),a}function Rr(t,n){var a=au(t,n);return Math.acos(2*a*a-1)}function Tr(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1],c=a[2],s=a[3];return t[0]=r*s+o*i+u*c-e*h,t[1]=u*s+o*h+e*i-r*c,t[2]=e*s+o*c+r*h-u*i,t[3]=o*s-r*i-u*h-e*c,t}function Ir(t,n,a){a*=.5;var r=n[0],u=n[1],e=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h+o*i,t[1]=u*h+e*i,t[2]=e*h-u*i,t[3]=o*h-r*i,t}function Er(t,n,a){a*=.5;var r=n[0],u=n[1],e=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h-e*i,t[1]=u*h+o*i,t[2]=e*h+r*i,t[3]=o*h-u*i,t}function Dr(t,n,a){a*=.5;var r=n[0],u=n[1],e=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h+u*i,t[1]=u*h-r*i,t[2]=e*h+o*i,t[3]=o*h-e*i,t}function Fr(t,n){var a=n[0],r=n[1],u=n[2];return t[0]=a,t[1]=r,t[2]=u,t[3]=Math.sqrt(Math.abs(1-a*a-r*r-u*u)),t}function Lr(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=Math.sqrt(a*a+r*r+u*u),i=Math.exp(e),h=o>0?i*Math.sin(o)/o:0;return t[0]=a*h,t[1]=r*h,t[2]=u*h,t[3]=i*Math.cos(o),t}function Vr(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=Math.sqrt(a*a+r*r+u*u),i=o>0?Math.atan2(o,e)/o:0;return t[0]=a*i,t[1]=r*i,t[2]=u*i,t[3]=.5*Math.log(a*a+r*r+u*u+e*e),t}function jr(t,n,a){return Vr(t,n),nu(t,t,a),Lr(t,t),t}function zr(t,n,a,r){var u,e,o,i,h,c=n[0],s=n[1],f=n[2],l=n[3],v=a[0],b=a[1],m=a[2],d=a[3];return(e=c*v+s*b+f*m+l*d)<0&&(e=-e,v=-v,b=-b,m=-m,d=-d),1-e>M?(u=Math.acos(e),o=Math.sin(u),i=Math.sin((1-r)*u)/o,h=Math.sin(r*u)/o):(i=1-r,h=r),t[0]=i*c+h*v,t[1]=i*s+h*b,t[2]=i*f+h*m,t[3]=i*l+h*d,t}function Or(t){var n=l(),a=l(),r=l(),u=Math.sqrt(1-n),e=Math.sqrt(n);return t[0]=u*Math.sin(2*Math.PI*a),t[1]=u*Math.cos(2*Math.PI*a),t[2]=e*Math.sin(2*Math.PI*r),t[3]=e*Math.cos(2*Math.PI*r),t}function Qr(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a*a+r*r+u*u+e*e,i=o?1/o:0;return t[0]=-a*i,t[1]=-r*i,t[2]=-u*i,t[3]=e*i,t}function Yr(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t}function Xr(t,n){var a,r=n[0]+n[4]+n[8];if(r>0)a=Math.sqrt(r+1),t[3]=.5*a,a=.5/a,t[0]=(n[5]-n[7])*a,t[1]=(n[6]-n[2])*a,t[2]=(n[1]-n[3])*a;else{var u=0;n[4]>n[0]&&(u=1),n[8]>n[3*u+u]&&(u=2);var e=(u+1)%3,o=(u+2)%3;a=Math.sqrt(n[3*u+u]-n[3*e+e]-n[3*o+o]+1),t[u]=.5*a,a=.5/a,t[3]=(n[3*e+o]-n[3*o+e])*a,t[e]=(n[3*e+u]+n[3*u+e])*a,t[o]=(n[3*o+u]+n[3*u+o])*a}return t}function Zr(t,n,a,r){var u=.5*Math.PI/180;n*=u,a*=u,r*=u;var e=Math.sin(n),o=Math.cos(n),i=Math.sin(a),h=Math.cos(a),c=Math.sin(r),s=Math.cos(r);return t[0]=e*h*s-o*i*c,t[1]=o*i*s+e*h*c,t[2]=o*h*c-e*i*s,t[3]=o*h*s+e*i*c,t}function _r(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}var Br,Nr,kr,Ur,Wr,Cr,Gr=Oa,Hr=Qa,Jr=Ya,Kr=Xa,$r=Za,tu=Tr,nu=Ha,au=er,ru=ir,uu=tr,eu=uu,ou=nr,iu=ou,hu=ur,cu=lr,su=vr,Mu=(Br=Zn(),Nr=Nn(1,0,0),kr=Nn(0,1,0),function(t,n,a){var r=sa(n,a);return r<-.999999?(Ma(Br,Nr,n),La(Br)<1e-6&&Ma(Br,kr,n),ca(Br,Br),Pr(t,Br,Math.PI),t):r>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(Ma(Br,n,a),t[0]=Br[0],t[1]=Br[1],t[2]=Br[2],t[3]=1+r,hu(t,t))}),fu=(Ur=gr(),Wr=gr(),function(t,n,a,r,u,e){return zr(Ur,n,u,e),zr(Wr,a,r,e),zr(t,Ur,Wr,2*e*(1-e)),t}),lu=(Cr=bt(),function(t,n,a,r){return Cr[0]=a[0],Cr[3]=a[1],Cr[6]=a[2],Cr[1]=r[0],Cr[4]=r[1],Cr[7]=r[2],Cr[2]=-n[0],Cr[5]=-n[1],Cr[8]=-n[2],hu(t,Xr(t,Cr))});function vu(){var t=new f(8);return f!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0),t[3]=1,t}function bu(t){var n=new f(8);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n}function mu(t,n,a,r,u,e,o,i){var h=new f(8);return h[0]=t,h[1]=n,h[2]=a,h[3]=r,h[4]=u,h[5]=e,h[6]=o,h[7]=i,h}function du(t,n,a,r,u,e,o){var i=new f(8);i[0]=t,i[1]=n,i[2]=a,i[3]=r;var h=.5*u,c=.5*e,s=.5*o;return i[4]=h*r+c*a-s*n,i[5]=c*r+s*t-h*a,i[6]=s*r+h*n-c*t,i[7]=-h*t-c*n-s*a,i}function xu(t,n,a){var r=.5*a[0],u=.5*a[1],e=.5*a[2],o=n[0],i=n[1],h=n[2],c=n[3];return t[0]=o,t[1]=i,t[2]=h,t[3]=c,t[4]=r*c+u*h-e*i,t[5]=u*c+e*o-r*h,t[6]=e*c+r*i-u*o,t[7]=-r*o-u*i-e*h,t}function yu(t,n){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=.5*n[0],t[5]=.5*n[1],t[6]=.5*n[2],t[7]=0,t}function pu(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=0,t[5]=0,t[6]=0,t[7]=0,t}function qu(t,n){var a=gr();qn(a,n);var r=new f(3);return yn(r,n),xu(t,a,r),t}function wu(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t}function gu(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t}function Au(t,n,a,r,u,e,o,i,h){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t[6]=i,t[7]=h,t}var Pu=Jr;function Su(t,n){return t[0]=n[4],t[1]=n[5],t[2]=n[6],t[3]=n[7],t}var Ru=Jr;function Tu(t,n){return t[4]=n[0],t[5]=n[1],t[6]=n[2],t[7]=n[3],t}function Iu(t,n){var a=n[4],r=n[5],u=n[6],e=n[7],o=-n[0],i=-n[1],h=-n[2],c=n[3];return t[0]=2*(a*c+e*o+r*h-u*i),t[1]=2*(r*c+e*i+u*o-a*h),t[2]=2*(u*c+e*h+a*i-r*o),t}function Eu(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=.5*a[0],h=.5*a[1],c=.5*a[2],s=n[4],M=n[5],f=n[6],l=n[7];return t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=o*i+u*c-e*h+s,t[5]=o*h+e*i-r*c+M,t[6]=o*c+r*h-u*i+f,t[7]=-r*i-u*h-e*c+l,t}function Du(t,n,a){var r=-n[0],u=-n[1],e=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=i*o+s*r+h*e-c*u,f=h*o+s*u+c*r-i*e,l=c*o+s*e+i*u-h*r,v=s*o-i*r-h*u-c*e;return Ir(t,n,a),r=t[0],u=t[1],e=t[2],o=t[3],t[4]=M*o+v*r+f*e-l*u,t[5]=f*o+v*u+l*r-M*e,t[6]=l*o+v*e+M*u-f*r,t[7]=v*o-M*r-f*u-l*e,t}function Fu(t,n,a){var r=-n[0],u=-n[1],e=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=i*o+s*r+h*e-c*u,f=h*o+s*u+c*r-i*e,l=c*o+s*e+i*u-h*r,v=s*o-i*r-h*u-c*e;return Er(t,n,a),r=t[0],u=t[1],e=t[2],o=t[3],t[4]=M*o+v*r+f*e-l*u,t[5]=f*o+v*u+l*r-M*e,t[6]=l*o+v*e+M*u-f*r,t[7]=v*o-M*r-f*u-l*e,t}function Lu(t,n,a){var r=-n[0],u=-n[1],e=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=i*o+s*r+h*e-c*u,f=h*o+s*u+c*r-i*e,l=c*o+s*e+i*u-h*r,v=s*o-i*r-h*u-c*e;return Dr(t,n,a),r=t[0],u=t[1],e=t[2],o=t[3],t[4]=M*o+v*r+f*e-l*u,t[5]=f*o+v*u+l*r-M*e,t[6]=l*o+v*e+M*u-f*r,t[7]=v*o-M*r-f*u-l*e,t}function Vu(t,n,a){var r=a[0],u=a[1],e=a[2],o=a[3],i=n[0],h=n[1],c=n[2],s=n[3];return t[0]=i*o+s*r+h*e-c*u,t[1]=h*o+s*u+c*r-i*e,t[2]=c*o+s*e+i*u-h*r,t[3]=s*o-i*r-h*u-c*e,i=n[4],h=n[5],c=n[6],s=n[7],t[4]=i*o+s*r+h*e-c*u,t[5]=h*o+s*u+c*r-i*e,t[6]=c*o+s*e+i*u-h*r,t[7]=s*o-i*r-h*u-c*e,t}function ju(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1],c=a[2],s=a[3];return t[0]=r*s+o*i+u*c-e*h,t[1]=u*s+o*h+e*i-r*c,t[2]=e*s+o*c+r*h-u*i,t[3]=o*s-r*i-u*h-e*c,i=a[4],h=a[5],c=a[6],s=a[7],t[4]=r*s+o*i+u*c-e*h,t[5]=u*s+o*h+e*i-r*c,t[6]=e*s+o*c+r*h-u*i,t[7]=o*s-r*i-u*h-e*c,t}function zu(t,n,a,r){if(Math.abs(r)<M)return wu(t,n);var u=Math.hypot(a[0],a[1],a[2]);r*=.5;var e=Math.sin(r),o=e*a[0]/u,i=e*a[1]/u,h=e*a[2]/u,c=Math.cos(r),s=n[0],f=n[1],l=n[2],v=n[3];t[0]=s*c+v*o+f*h-l*i,t[1]=f*c+v*i+l*o-s*h,t[2]=l*c+v*h+s*i-f*o,t[3]=v*c-s*o-f*i-l*h;var b=n[4],m=n[5],d=n[6],x=n[7];return t[4]=b*c+x*o+m*h-d*i,t[5]=m*c+x*i+d*o-b*h,t[6]=d*c+x*h+b*i-m*o,t[7]=x*c-b*o-m*i-d*h,t}function Ou(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t}function Qu(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[4],h=a[5],c=a[6],s=a[7],M=n[4],f=n[5],l=n[6],v=n[7],b=a[0],m=a[1],d=a[2],x=a[3];return t[0]=r*x+o*b+u*d-e*m,t[1]=u*x+o*m+e*b-r*d,t[2]=e*x+o*d+r*m-u*b,t[3]=o*x-r*b-u*m-e*d,t[4]=r*s+o*i+u*c-e*h+M*x+v*b+f*d-l*m,t[5]=u*s+o*h+e*i-r*c+f*x+v*m+l*b-M*d,t[6]=e*s+o*c+r*h-u*i+l*x+v*d+M*m-f*b,t[7]=o*s-r*i-u*h-e*c+v*x-M*b-f*m-l*d,t}var Yu=Qu;function Xu(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t}var Zu=au;function _u(t,n,a,r){var u=1-r;return Zu(n,a)<0&&(r=-r),t[0]=n[0]*u+a[0]*r,t[1]=n[1]*u+a[1]*r,t[2]=n[2]*u+a[2]*r,t[3]=n[3]*u+a[3]*r,t[4]=n[4]*u+a[4]*r,t[5]=n[5]*u+a[5]*r,t[6]=n[6]*u+a[6]*r,t[7]=n[7]*u+a[7]*r,t}function Bu(t,n){var a=Wu(n);return t[0]=-n[0]/a,t[1]=-n[1]/a,t[2]=-n[2]/a,t[3]=n[3]/a,t[4]=-n[4]/a,t[5]=-n[5]/a,t[6]=-n[6]/a,t[7]=n[7]/a,t}function Nu(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t[4]=-n[4],t[5]=-n[5],t[6]=-n[6],t[7]=n[7],t}var ku=uu,Uu=ku,Wu=ou,Cu=Wu;function Gu(t,n){var a=Wu(n);if(a>0){a=Math.sqrt(a);var r=n[0]/a,u=n[1]/a,e=n[2]/a,o=n[3]/a,i=n[4],h=n[5],c=n[6],s=n[7],M=r*i+u*h+e*c+o*s;t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=(i-r*M)/a,t[5]=(h-u*M)/a,t[6]=(c-e*M)/a,t[7]=(s-o*M)/a}return t}function Hu(t){return"quat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+")"}function Ju(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]}function Ku(t,n){var a=t[0],r=t[1],u=t[2],e=t[3],o=t[4],i=t[5],h=t[6],c=t[7],s=n[0],f=n[1],l=n[2],v=n[3],b=n[4],m=n[5],d=n[6],x=n[7];return Math.abs(a-s)<=M*Math.max(1,Math.abs(a),Math.abs(s))&&Math.abs(r-f)<=M*Math.max(1,Math.abs(r),Math.abs(f))&&Math.abs(u-l)<=M*Math.max(1,Math.abs(u),Math.abs(l))&&Math.abs(e-v)<=M*Math.max(1,Math.abs(e),Math.abs(v))&&Math.abs(o-b)<=M*Math.max(1,Math.abs(o),Math.abs(b))&&Math.abs(i-m)<=M*Math.max(1,Math.abs(i),Math.abs(m))&&Math.abs(h-d)<=M*Math.max(1,Math.abs(h),Math.abs(d))&&Math.abs(c-x)<=M*Math.max(1,Math.abs(c),Math.abs(x))}function $u(){var t=new f(2);return f!=Float32Array&&(t[0]=0,t[1]=0),t}function te(t){var n=new f(2);return n[0]=t[0],n[1]=t[1],n}function ne(t,n){var a=new f(2);return a[0]=t,a[1]=n,a}function ae(t,n){return t[0]=n[0],t[1]=n[1],t}function re(t,n,a){return t[0]=n,t[1]=a,t}function ue(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t}function ee(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t}function oe(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t}function ie(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t}function he(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t}function ce(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t}function se(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t}function Me(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t}function fe(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t}function le(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t}function ve(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t}function be(t,n){var a=n[0]-t[0],r=n[1]-t[1];return Math.hypot(a,r)}function me(t,n){var a=n[0]-t[0],r=n[1]-t[1];return a*a+r*r}function de(t){var n=t[0],a=t[1];return Math.hypot(n,a)}function xe(t){var n=t[0],a=t[1];return n*n+a*a}function ye(t,n){return t[0]=-n[0],t[1]=-n[1],t}function pe(t,n){return t[0]=1/n[0],t[1]=1/n[1],t}function qe(t,n){var a=n[0],r=n[1],u=a*a+r*r;return u>0&&(u=1/Math.sqrt(u)),t[0]=n[0]*u,t[1]=n[1]*u,t}function we(t,n){return t[0]*n[0]+t[1]*n[1]}function ge(t,n,a){var r=n[0]*a[1]-n[1]*a[0];return t[0]=t[1]=0,t[2]=r,t}function Ae(t,n,a,r){var u=n[0],e=n[1];return t[0]=u+r*(a[0]-u),t[1]=e+r*(a[1]-e),t}function Pe(t,n){n=n||1;var a=2*l()*Math.PI;return t[0]=Math.cos(a)*n,t[1]=Math.sin(a)*n,t}function Se(t,n,a){var r=n[0],u=n[1];return t[0]=a[0]*r+a[2]*u,t[1]=a[1]*r+a[3]*u,t}function Re(t,n,a){var r=n[0],u=n[1];return t[0]=a[0]*r+a[2]*u+a[4],t[1]=a[1]*r+a[3]*u+a[5],t}function Te(t,n,a){var r=n[0],u=n[1];return t[0]=a[0]*r+a[3]*u+a[6],t[1]=a[1]*r+a[4]*u+a[7],t}function Ie(t,n,a){var r=n[0],u=n[1];return t[0]=a[0]*r+a[4]*u+a[12],t[1]=a[1]*r+a[5]*u+a[13],t}function Ee(t,n,a,r){var u=n[0]-a[0],e=n[1]-a[1],o=Math.sin(r),i=Math.cos(r);return t[0]=u*i-e*o+a[0],t[1]=u*o+e*i+a[1],t}function De(t,n){var a=t[0],r=t[1],u=n[0],e=n[1],o=a*a+r*r;o>0&&(o=1/Math.sqrt(o));var i=u*u+e*e;i>0&&(i=1/Math.sqrt(i));var h=(a*u+r*e)*o*i;return h>1?0:h<-1?Math.PI:Math.acos(h)}function Fe(t){return t[0]=0,t[1]=0,t}function Le(t){return"vec2("+t[0]+", "+t[1]+")"}function Ve(t,n){return t[0]===n[0]&&t[1]===n[1]}function je(t,n){var a=t[0],r=t[1],u=n[0],e=n[1];return Math.abs(a-u)<=M*Math.max(1,Math.abs(a),Math.abs(u))&&Math.abs(r-e)<=M*Math.max(1,Math.abs(r),Math.abs(e))}var ze=de,Oe=ee,Qe=oe,Ye=ie,Xe=be,Ze=me,_e=xe,Be=function(){var t=$u();return function(n,a,r,u,e,o){var i,h;for(a||(a=2),r||(r=0),h=u?Math.min(u*a+r,n.length):n.length,i=r;i<h;i+=a)t[0]=n[i],t[1]=n[i+1],e(t,t,o),n[i]=t[0],n[i+1]=t[1];return n}}();window.glMatrix=n,window.mat2=a,window.mat2d=r,window.mat3=u,window.mat4=e,window.quat=h,window.quat2=c,window.vec2=s,window.vec3=o,window.vec4=i})();
//# sourceMappingURL=libs.core.js.map
if(!CABLES.exportedPatches)CABLES.exportedPatches={};CABLES.exportedPatches["by9Tq4"]={_id:"62963c912d3e46a252e053eb",ops:[{id:"b595445e-b5ec-4129-aa4a-3b384882a7a6",uiAttribs:{},portsIn:[{name:"exe"},{name:"Clean up connections",value:0},{name:"exe 0",value:0},{name:"exe 1",value:0},{name:"exe 2",value:0},{name:"exe 3",value:0},{name:"exe 4",value:0},{name:"exe 5",value:0},{name:"exe 6",value:0},{name:"exe 7",value:0},{name:"exe 8",value:0},{name:"exe 9",value:0},{name:"exe 10",value:0},{name:"exe 11",value:0},{name:"exe 12",value:0},{name:"exe 13",value:0},{name:"exe 14",value:0}],portsOut:[{name:"trigger 0",value:0},{name:"trigger 1",links:[{portIn:"Render",portOut:"trigger 1",objIn:"fdd35631-88b0-4bc3-bf42-bae4ec0cf769",objOut:"b595445e-b5ec-4129-aa4a-3b384882a7a6"}]},{name:"trigger 2",value:0},{name:"trigger 3",value:0},{name:"trigger 4",links:[{portIn:"render",portOut:"trigger 4",objIn:"d0824ee9-c3e5-4509-ad72-fba3804a8726",objOut:"b595445e-b5ec-4129-aa4a-3b384882a7a6"}]},{name:"trigger 5",value:0},{name:"trigger 6",value:0},{name:"trigger 7",value:0},{name:"trigger 8",value:0},{name:"trigger 9",value:0},{name:"trigger 10",value:0},{name:"trigger 11",value:0},{name:"trigger 12",value:0},{name:"trigger 13",value:0},{name:"trigger 14",value:0},{name:"trigger 15",links:[{portIn:"render",portOut:"trigger 15",objIn:"6cb75ce0-2310-4b7c-be09-611f3f60b35f",objOut:"b595445e-b5ec-4129-aa4a-3b384882a7a6"}]}],objName:"Ops.Trigger.Sequence"},{id:"6cb75ce0-2310-4b7c-be09-611f3f60b35f",uiAttribs:{},portsIn:[{name:"render"},{name:"Scale index",value:0},{name:"Scale",value:"Fit"},{name:"Flip Y",value:false},{name:"Flip X",value:false},{name:"Texture"}],portsOut:[{name:"trigger",value:0}],objName:"Ops.Gl.Meshes.FullscreenRectangle"},{id:"d96977dc-8157-468c-a218-4c5ac931f461",uiAttribs:{},portsIn:[{name:"FPS Limit",value:0},{name:"Reduce FPS not focussed",value:false},{name:"Reduce FPS loading",value:false},{name:"Clear",value:true},{name:"ClearAlpha",value:true},{name:"Fullscreen Button",value:false},{name:"Active",value:true},{name:"Hires Displays",value:false},{name:"Pixel Unit index",value:0},{name:"Pixel Unit",value:"Display"}],portsOut:[{name:"trigger",links:[{portIn:"exe",portOut:"trigger",objIn:"b595445e-b5ec-4129-aa4a-3b384882a7a6",objOut:"d96977dc-8157-468c-a218-4c5ac931f461"}]},{name:"width",value:921},{name:"height",value:619}],objName:"Ops.Gl.MainLoop"},{id:"d0824ee9-c3e5-4509-ad72-fba3804a8726",uiAttribs:{},portsIn:[{name:"render"},{name:"use viewport size",value:false},{name:"texture width"},{name:"texture height"},{name:"Auto Aspect",value:true},{name:"filter index",value:1},{name:"filter",value:"linear"},{name:"Wrap index",value:1},{name:"Wrap",value:"Repeat"},{name:"MSAA index",value:0},{name:"MSAA",value:"4x"},{name:"HDR",value:false,title:"Pixelformat Float 32bit"},{name:"Depth",value:true},{name:"Clear",value:true}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"5487ee1d-56c0-41ff-855f-8a42350015f6",objOut:"d0824ee9-c3e5-4509-ad72-fba3804a8726"}]},{name:"texture",links:[{portIn:"Texture",portOut:"texture",objIn:"6cb75ce0-2310-4b7c-be09-611f3f60b35f",objOut:"d0824ee9-c3e5-4509-ad72-fba3804a8726"}]},{name:"textureDepth"}],objName:"Ops.Gl.RenderToTexture"},{id:"5487ee1d-56c0-41ff-855f-8a42350015f6",uiAttribs:{},portsIn:[{name:"render"},{name:"Scale index",value:0},{name:"Scale",value:"Stretch"},{name:"Flip Y",value:false},{name:"Flip X",value:false},{name:"Texture"}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"1615961a-df8a-48bc-b3a1-e2138ec9e0e1",objOut:"5487ee1d-56c0-41ff-855f-8a42350015f6"}]}],objName:"Ops.Gl.Meshes.FullscreenRectangle"},{id:"fdd35631-88b0-4bc3-bf42-bae4ec0cf769",uiAttribs:{},portsIn:[{name:"Render"},{name:"Active",value:true},{name:"Generate Texture",value:true},{name:"Webcam Input index",value:0},{name:"Webcam Input",value:"FaceTime HD Camera"},{name:"Requested Width",value:1280},{name:"Requested Height",value:720},{name:"Flip X",value:true},{name:"Flip Y",value:false},{name:"Show HTML Element",value:false},{name:"CSS",value:"z-index:99999;position:absolute;"},{name:"Element Flip X",value:false},{name:"Element Flip Y",value:false}],portsOut:[{name:"Next",value:0},{name:"Texture",links:[{portIn:"Texture",portOut:"Texture",objIn:"5487ee1d-56c0-41ff-855f-8a42350015f6",objOut:"fdd35631-88b0-4bc3-bf42-bae4ec0cf769"}]},{name:"Ratio",value:1.7777777777777777},{name:"Available",value:1},{name:"Size Width",links:[{portIn:"texture width",portOut:"Size Width",objIn:"d0824ee9-c3e5-4509-ad72-fba3804a8726",objOut:"fdd35631-88b0-4bc3-bf42-bae4ec0cf769"}]},{name:"Size Height",links:[{portIn:"texture height",portOut:"Size Height",objIn:"d0824ee9-c3e5-4509-ad72-fba3804a8726",objOut:"fdd35631-88b0-4bc3-bf42-bae4ec0cf769"}]},{name:"Error",value:""},{name:"HTML Element",links:[{portIn:"Element",portOut:"HTML Element",objIn:"d09bae6f-cf87-4ed4-af46-0e85d00073d9",objOut:"fdd35631-88b0-4bc3-bf42-bae4ec0cf769"}]},{name:"Available devices"},{name:"Active device",value:"FaceTime HD Camera"},{name:"Texture updated",value:0}],objName:"Ops.Gl.Textures.WebcamTexture_v3"},{id:"f36adb3a-0972-49cd-8ef1-f78bbd90c880",uiAttribs:{},portsIn:[{name:"exe"},{name:"Array",title:"Positions"},{name:"Num Points",value:0},{name:"Scramble Texcoords",value:true},{name:"Seed",value:0},{name:"Coordinates",value:0,title:"Texture Coordinates"},{name:"Point sizes",value:0},{name:"Vertex Colors",value:0}],portsOut:[{name:"Trigger out",links:[{portIn:"render",portOut:"Trigger out",objIn:"9e34b752-bfd3-4168-bf14-a8f065c1b7c2",objOut:"f36adb3a-0972-49cd-8ef1-f78bbd90c880"}]},{name:"Geometry"}],objName:"Ops.Gl.Meshes.PointCloudFromArray"},{id:"bdade65e-712a-4820-8004-c1f6cf232a6e",uiAttribs:{},portsIn:[{name:"render"},{name:"PointSize",value:3},{name:"Size in Pixels",value:false},{name:"Random Size",value:0},{name:"Round",value:true},{name:"Round Antialias",value:false},{name:"Scale by Distance",value:false},{name:"r",value:.0074594879150390635},{name:"g",value:.2955126359343528},{name:"b",value:.37375},{name:"a",value:1},{name:"Vertex Colors",value:false},{name:"texture"},{name:"Colorize Texture",value:false},{name:"Texture Mask"},{name:"Mask Channel index",value:0},{name:"Mask Channel",value:"R"},{name:"Texture Colorize"},{name:"Colorize Randomize",value:true},{name:"Texture Opacity"},{name:"Texture Point Size"},{name:"Point Size Channel index",value:0},{name:"Point Size Channel",value:"R"},{name:"Texture Point Size Mul",value:1},{name:"Map Size 0 index",value:0},{name:"Map Size 0",value:"Black"},{name:"Flip Texture",value:false}],portsOut:[{name:"trigger",links:[{portIn:"exe",portOut:"trigger",objIn:"f36adb3a-0972-49cd-8ef1-f78bbd90c880",objOut:"bdade65e-712a-4820-8004-c1f6cf232a6e"}]},{name:"shader"}],objName:"Ops.Gl.Shader.PointMaterial_v4"},{id:"1615961a-df8a-48bc-b3a1-e2138ec9e0e1",uiAttribs:{},portsIn:[{name:"render"},{name:"use viewport size",value:false},{name:"Width",value:2},{name:"Height",value:2},{name:"frustum near",value:-500},{name:"frustum far",value:500},{name:"Position 0,0 index",value:0},{name:"Position 0,0",value:"Center"},{name:"Flip X",value:true},{name:"Flip Y",value:false},{name:"Zero Y",value:false}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"bdade65e-712a-4820-8004-c1f6cf232a6e",objOut:"1615961a-df8a-48bc-b3a1-e2138ec9e0e1"}]}],objName:"Ops.Gl.PixelProjection"},{id:"d09bae6f-cf87-4ed4-af46-0e85d00073d9",uiAttribs:{},portsIn:[{name:"Element"},{name:"Refine LandMarks",value:false}],portsOut:[{name:"Points",links:[{portIn:"Array",portOut:"Points",objIn:"f36adb3a-0972-49cd-8ef1-f78bbd90c880",objOut:"d09bae6f-cf87-4ed4-af46-0e85d00073d9"},{portIn:"Points",portOut:"Points",objIn:"769d294e-02b0-402e-8156-46c0ba9d2359",objOut:"d09bae6f-cf87-4ed4-af46-0e85d00073d9"}]},{name:"Found",value:1},{name:"Result"}],objName:"Ops.Extension.Mediapipe.MpFaceTracking"},{id:"9e34b752-bfd3-4168-bf14-a8f065c1b7c2",uiAttribs:{},portsIn:[{name:"render"},{name:"r",value:.5193833253827338},{name:"g",value:.1419227679168511},{name:"b",value:.2425886569418061},{name:"a",value:1},{name:"texture"},{name:"colorizeTexture",value:false},{name:"Vertex Colors",value:false},{name:"textureOpacity"},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"Luminance"},{name:"Opacity TexCoords Transform",value:false},{name:"Discard Transparent Pixels",value:false},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:false},{name:"billboard",value:false}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"fcca0480-91b9-456a-8f77-36f553ef3359",objOut:"9e34b752-bfd3-4168-bf14-a8f065c1b7c2"}]},{name:"shader"}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"769d294e-02b0-402e-8156-46c0ba9d2359",uiAttribs:{},portsIn:[{name:"Geom"},{name:"Points"}],portsOut:[{name:"result geom",links:[{portIn:"Geometry",portOut:"result geom",objIn:"67e8daa6-2dc5-4724-9308-76d9c9eada1b",objOut:"769d294e-02b0-402e-8156-46c0ba9d2359"},{portIn:"Geometry",portOut:"result geom",objIn:"c3daba5d-a344-445e-8630-24c9748ca88c",objOut:"769d294e-02b0-402e-8156-46c0ba9d2359"}]}],objName:"Ops.Extension.Mediapipe.FaceMesh"},{id:"fbb0fd3f-8196-444b-a9de-dc18af390567",uiAttribs:{},portsIn:[{name:"render"},{name:"R",value:.9600520833333334},{name:"G",value:.9600520833333334},{name:"B",value:.9600520833333334},{name:"A",value:1},{name:"Roughness",value:1},{name:"Metalness",value:0},{name:"Alpha Mode index",value:3},{name:"Alpha Mode",value:"Blend"},{name:"Tonemapping index",value:0},{name:"Tonemapping",value:"sRGB"},{name:"Exposure",value:1.9},{name:"Disable geometric roughness",value:false},{name:"Use roughness from normal map",value:false},{name:"Use Vertex Colours",value:false},{name:"Vertex Colour Mode index",value:0},{name:"Vertex Colour Mode",value:"colour"},{name:"Height Intensity",value:1},{name:"Faster heightmapping",value:false},{name:"Use Clear Coat",value:false},{name:"Clear Coat Roughness",value:.5},{name:"IBL LUT"},{name:"Diffuse Irradiance"},{name:"Pre-filtered envmap"},{name:"Num mip levels",value:0},{name:"Albedo"},{name:"AORM"},{name:"Normal map"},{name:"Height"},{name:"Lightmap"},{name:"Diffuse Intensity",value:1},{name:"Specular Intensity",value:1},{name:"Lightmap is RGBE",value:false},{name:"Lightmap Intensity",value:1}],portsOut:[{name:"Next",links:[{portIn:"Render",portOut:"Next",objIn:"10cb020a-95da-4044-97fd-d5ddd0419ce3",objOut:"fbb0fd3f-8196-444b-a9de-dc18af390567"}]},{name:"Shader"}],objName:"Ops.Gl.Pbr.PbrMaterial"},{id:"fcca0480-91b9-456a-8f77-36f553ef3359",uiAttribs:{},portsIn:[{name:"render"},{name:"RGBE Environment map"},{name:"Size Irradiance map index",value:2},{name:"Size Irradiance map",value:64},{name:"Size pre-filtered environment index",value:1},{name:"Size pre-filtered environment",value:128},{name:"Size IBL LUT index",value:1},{name:"Size IBL LUT",value:256},{name:"Force 8bit IBL",value:false},{name:"Environment map does not contain RGBE data",value:false},{name:"Rotation",value:0},{name:"Use parallax correction",value:true},{name:"center X",value:0},{name:"center Y",value:1.8},{name:"center Z",value:0},{name:"Box min X",value:-1},{name:"Box min Y",value:-1},{name:"Box min Z",value:-1},{name:"Box max X",value:1},{name:"Box max Y",value:1},{name:"Box max Z",value:1}],portsOut:[{name:"next",links:[{portIn:"render",portOut:"next",objIn:"fbb0fd3f-8196-444b-a9de-dc18af390567",objOut:"fcca0480-91b9-456a-8f77-36f553ef3359"}]},{name:"IBL LUT"},{name:"cubemap (diffuse irradiance)"},{name:"cubemap (pre-filtered environment map)"},{name:"Number of Pre-filtered mip levels",value:7}],objName:"Ops.Gl.Pbr.PbrEnvironmentLight"},{id:"6eba2c14-7304-4b66-8ea3-e8c744ca7973",uiAttribs:{},portsIn:[{name:"File",value:"assets/lib_hdr_studiosmall.rgbe.png",display:"file"},{name:"Filter index",value:0},{name:"Filter",value:"mipmap"},{name:"Wrap index",value:2},{name:"Wrap",value:"repeat"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:0},{name:"Flip",value:true},{name:"Pre Multiplied Alpha",value:false},{name:"Active",value:true},{name:"Save Memory",value:true}],portsOut:[{name:"Texture",links:[{portIn:"RGBE Environment map",portOut:"Texture",objIn:"fcca0480-91b9-456a-8f77-36f553ef3359",objOut:"6eba2c14-7304-4b66-8ea3-e8c744ca7973"}]},{name:"Width",value:1024},{name:"Height",value:512},{name:"Aspect Ratio",value:2},{name:"Loaded",value:true},{name:"Loading",value:false}],objName:"Ops.Gl.Texture_v2"},{id:"67e8daa6-2dc5-4724-9308-76d9c9eada1b",uiAttribs:{},portsIn:[{name:"Geometry"},{name:"Flip",value:true},{name:"Normalize",value:true}],portsOut:[{name:"Result",links:[{portIn:"Geometry",portOut:"Result",objIn:"d063fb1d-5be7-41ee-922b-9275488a68dd",objOut:"67e8daa6-2dc5-4724-9308-76d9c9eada1b"}]}],objName:"Ops.Graphics.Geometry.FlipNormals"},{id:"713d3dce-52c9-422f-bdcc-bfaf653ecbea",uiAttribs:{},portsIn:[{name:"File",value:"assets/facemapping1.png",display:"file"},{name:"Filter index",value:0},{name:"Filter",value:"mipmap"},{name:"Wrap index",value:2},{name:"Wrap",value:"repeat"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:0},{name:"Flip",value:false},{name:"Pre Multiplied Alpha",value:false},{name:"Active",value:true},{name:"Save Memory",value:true}],portsOut:[{name:"Texture",links:[{portIn:"texture",portOut:"Texture",objIn:"92efc686-96b4-4aad-bd41-b545d494670d",objOut:"713d3dce-52c9-422f-bdcc-bfaf653ecbea"}]},{name:"Width",value:700},{name:"Height",value:700},{name:"Aspect Ratio",value:1},{name:"Loaded",value:true},{name:"Loading",value:false}],objName:"Ops.Gl.Texture_v2"},{id:"92efc686-96b4-4aad-bd41-b545d494670d",uiAttribs:{},portsIn:[{name:"render"},{name:"r",value:0},{name:"g",value:.8412698412698414},{name:"b",value:1},{name:"a",value:1},{name:"texture"},{name:"colorizeTexture",value:false},{name:"Vertex Colors",value:false},{name:"textureOpacity"},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"G"},{name:"Opacity TexCoords Transform",value:false},{name:"Discard Transparent Pixels",value:false},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:false},{name:"billboard",value:false}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"e1766d1d-f4ae-47b9-bbe0-3c0457e4a801",objOut:"92efc686-96b4-4aad-bd41-b545d494670d"}]},{name:"shader"}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"f09a6f6d-13ad-40fb-9df8-4df9cab9a66d",uiAttribs:{},portsIn:[{name:"render"},{name:"x",value:1},{name:"y",value:1},{name:"z",value:1}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"d063fb1d-5be7-41ee-922b-9275488a68dd",objOut:"f09a6f6d-13ad-40fb-9df8-4df9cab9a66d"}]}],objName:"Ops.Extension.Deprecated.ScaleXYZ"},{id:"10cb020a-95da-4044-97fd-d5ddd0419ce3",uiAttribs:{},portsIn:[{name:"Render"},{name:"Enable depth testing",value:false},{name:"Depth Test Method index",value:3},{name:"Depth Test Method",value:"less or equal"},{name:"Write to depth buffer",value:true}],portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"92efc686-96b4-4aad-bd41-b545d494670d",objOut:"10cb020a-95da-4044-97fd-d5ddd0419ce3"}]}],objName:"Ops.Graphics.DepthTest"},{id:"c3daba5d-a344-445e-8630-24c9748ca88c",uiAttribs:{},portsIn:[{name:"Geometry"}],portsOut:[{name:"Faces"},{name:"Vertices",links:[{portIn:"Array",portOut:"Vertices",objIn:"1f3834a5-9129-47f0-8648-4830ca0d95dc",objOut:"c3daba5d-a344-445e-8630-24c9748ca88c"}]},{name:"Normals"},{name:"TexCoords"},{name:"Vertex Colors"},{name:"Tangents"},{name:"BiTangents"}],objName:"Ops.Graphics.Geometry.GeometryAttributes"},{id:"1f3834a5-9129-47f0-8648-4830ca0d95dc",uiAttribs:{},portsIn:[{name:"Array"},{name:"Start Row",value:0}],portsOut:[],objName:"Ops.Ui.VizArrayTable"},{id:"d063fb1d-5be7-41ee-922b-9275488a68dd",uiAttribs:{},portsIn:[{name:"render"},{name:"Geometry"},{name:"Add Vertex Numbers",value:true},{name:"Render",value:true}],portsOut:[{name:"trigger",value:0}],objName:"Ops.Gl.RenderGeometry_v2"},{id:"e1766d1d-f4ae-47b9-bbe0-3c0457e4a801",uiAttribs:{},portsIn:[{name:"render"},{name:"enable depth testing",value:true},{name:"width",value:1},{name:"AntiAlias",value:.95},{name:"diffuse r",value:1},{name:"diffuse g",value:1},{name:"diffuse b",value:1},{name:"diffuse A",value:1},{name:"fill",value:0},{name:"Fill R",value:0},{name:"Fill G",value:0},{name:"Fill B",value:0},{name:"Fill A",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"f09a6f6d-13ad-40fb-9df8-4df9cab9a66d",objOut:"e1766d1d-f4ae-47b9-bbe0-3c0457e4a801"}]}],objName:"Ops.Gl.Shader.WireframeMaterial_v2"}],export:{time:"2024-08-26 21:42",service:"download",exportNumber:3}};if(!CABLES.exportedPatch){CABLES.exportedPatch=CABLES.exportedPatches["by9Tq4"]}"use strict";var CABLES=CABLES||{};CABLES.OPS=CABLES.OPS||{};var Ops=Ops||{};Ops.Gl=Ops.Gl||{};Ops.Ui=Ops.Ui||{};Ops.Gl.Pbr=Ops.Gl.Pbr||{};Ops.Trigger=Ops.Trigger||{};Ops.Graphics=Ops.Graphics||{};Ops.Extension=Ops.Extension||{};Ops.Gl.Meshes=Ops.Gl.Meshes||{};Ops.Gl.Shader=Ops.Gl.Shader||{};Ops.Gl.Textures=Ops.Gl.Textures||{};Ops.Graphics.Geometry=Ops.Graphics.Geometry||{};Ops.Extension.Mediapipe=Ops.Extension.Mediapipe||{};Ops.Extension.Deprecated=Ops.Extension.Deprecated||{};Ops.Trigger.Sequence=function(){CABLES.Op.apply(this,arguments);const s=this;const e=s.attachments={};const t=s.inTrigger("exe"),i=s.inTriggerButton("Clean up connections");s.setUiAttrib({resizable:true,resizableY:false,stretchPorts:true});const n=[],a=[],r=16;let o=null,l=[];t.onTriggered=c;i.onTriggered=u;i.setUiAttribs({hideParam:true,hidePort:true});for(let t=0;t<r;t++){const g=s.outTrigger("trigger "+t);a.push(g);g.onLinkChanged=f;if(t<r-1){let e=s.inTrigger("exe "+t);e.onTriggered=c;n.push(e)}}h();function h(){l.length=0;for(let e=0;e<a.length;e++)if(a[e].links.length>0)l.push(a[e])}function f(){h();clearTimeout(o);o=setTimeout(()=>{let t=false;for(let e=0;e<a.length;e++)if(a[e].links.length>1)t=true;i.setUiAttribs({hideParam:!t});if(s.isCurrentUiOp())s.refreshParams()},60)}function c(){for(let e=0;e<l.length;e++)l[e].trigger()}function u(){let n=0;for(let i=0;i<a.length;i++){let t=[];if(a[i].links.length>1)for(let e=1;e<a[i].links.length;e++){while(a[n].links.length>0)n++;t.push(a[i].links[e]);const r=a[i].links[e].getOtherPort(a[i]);s.patch.link(s,"trigger "+n,r.op,r.name);n++}for(let e=0;e<t.length;e++)t[e].remove()}f();h()}};Ops.Trigger.Sequence.prototype=new CABLES.Op;CABLES.OPS["a466bc1f-06e9-4595-8849-bffb9fe22f99"]={f:Ops.Trigger.Sequence,objName:"Ops.Trigger.Sequence"};Ops.Gl.Meshes.FullscreenRectangle=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={shader_frag:"UNI sampler2D tex;\nIN vec2 texCoord;\n\nvoid main()\n{\n    outColor= texture(tex,texCoord);\n}\n\n",shader_vert:"{{MODULES_HEAD}}\n\nIN vec3 vPosition;\nUNI mat4 projMatrix;\nUNI mat4 mvMatrix;\n\nOUT vec2 texCoord;\nIN vec2 attrTexCoord;\n\nvoid main()\n{\n   vec4 pos=vec4(vPosition,  1.0);\n\n   texCoord=vec2(attrTexCoord.x,(1.0-attrTexCoord.y));\n\n   gl_Position = projMatrix * mvMatrix * pos;\n}\n"};const i=e.inTrigger("render"),n=e.inSwitch("Scale",["Stretch","Fit"],"Fit"),r=e.inValueBool("Flip Y"),s=e.inValueBool("Flip X"),a=e.inTexture("Texture"),o=e.outTrigger("trigger");const l=e.patch.cgl;let h=null;let f=new CGL.Geometry("fullscreen rectangle");let c=0,u=0,g=0,d=0,p=0;e.toWorkShouldNotBeChild("Ops.Gl.TextureEffects.ImageCompose",CABLES.OP_PORT_TYPE_FUNCTION);e.toWorkPortsNeedToBeLinked(i);s.onChange=R;r.onChange=R;i.onTriggered=I;a.onLinkChanged=v;n.onChange=x;const _=new CGL.Shader(l,"fullscreenrectangle",this);_.setModules(["MODULE_VERTEX_POSITION","MODULE_COLOR","MODULE_BEGIN_FRAG"]);_.setSource(t.shader_vert,t.shader_frag);_.fullscreenRectUniform=new CGL.Uniform(_,"t","tex",0);_.aspectUni=new CGL.Uniform(_,"f","aspectTex",0);let m=false;let E=true;let T=false;let A=[];v();x();a.onChange=function(){E=true};function v(){if(!CABLES.UI)return;r.setUiAttribs({greyout:!a.isLinked()});s.setUiAttribs({greyout:!a.isLinked()});n.setUiAttribs({greyout:!a.isLinked()})}function b(){let e=a.get();if(e)m=true;else m=false}e.preRender=function(){b();_.bind();if(h)h.render(_);I()};function x(){T=n.get()=="Fit"}function I(){if(l.getViewPort()[2]!=d||l.getViewPort()[3]!=p||!h)S();if(E)b();l.pushPMatrix();mat4.identity(l.pMatrix);mat4.ortho(l.pMatrix,0,d,p,0,-10,1e3);l.pushModelMatrix();mat4.identity(l.mMatrix);l.pushViewMatrix();mat4.identity(l.vMatrix);if(T&&a.get()){const i=a.get().width/a.get().height;let e=p;let t=p*i;if(t>d){e=d*1/i;t=d}A[0]=l.getViewPort()[0];A[1]=l.getViewPort()[1];A[2]=l.getViewPort()[2];A[3]=l.getViewPort()[3];l.setViewPort((d-t)/2,(p-e)/2,t,e)}if(m){if(a.get())l.setTexture(0,a.get().tex);h.render(_)}else{h.render(l.getShader())}l.gl.clear(l.gl.DEPTH_BUFFER_BIT);l.popPMatrix();l.popModelMatrix();l.popViewMatrix();if(T&&a.get())l.setViewPort(A[0],A[1],A[2],A[3]);o.trigger()}function R(){h=null}function S(){const e=l.getViewPort();if(e[2]==d&&e[3]==p&&h)return;let t=0,i=0;d=e[2];p=e[3];f.vertices=new Float32Array([t+d,i+p,0,t,i+p,0,t+d,i,0,t,i,0]);let n=null;if(r.get())n=new Float32Array([1,0,0,0,1,1,0,1]);else n=new Float32Array([1,1,0,1,1,0,0,0]);if(s.get()){n[0]=0;n[2]=1;n[4]=0;n[6]=1}f.setTexCoords(n);f.verticesIndices=new Uint16Array([2,1,0,3,1,2]);f.vertexNormals=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1]);f.tangents=new Float32Array([-1,0,0,-1,0,0,-1,0,0,-1,0,0]);f.biTangents==new Float32Array([0,-1,0,0,-1,0,0,-1,0,0,-1,0]);if(!h)h=new CGL.Mesh(l,f);else h.setGeom(f)}};Ops.Gl.Meshes.FullscreenRectangle.prototype=new CABLES.Op;CABLES.OPS["255bd15b-cc91-4a12-9b4e-53c710cbb282"]={f:Ops.Gl.Meshes.FullscreenRectangle,objName:"Ops.Gl.Meshes.FullscreenRectangle"};Ops.Gl.MainLoop=function(){CABLES.Op.apply(this,arguments);const n=this;const e=n.attachments={};const t=n.inValue("FPS Limit",0),i=n.outTrigger("trigger"),r=n.outNumber("width"),s=n.outNumber("height"),a=n.inValueBool("Reduce FPS not focussed",false),o=n.inValueBool("Reduce FPS loading"),l=n.inValueBool("Clear",true),h=n.inValueBool("ClearAlpha",true),f=n.inValueBool("Fullscreen Button",false),c=n.inValueBool("Active",true),u=n.inValueBool("Hires Displays",false),g=n.inSwitch("Pixel Unit",["Display","CSS"],"Display");n.onAnimFrame=S;u.onChange=function(){if(u.get())n.patch.cgl.pixelDensity=window.devicePixelRatio;else n.patch.cgl.pixelDensity=1;n.patch.cgl.updateSize();if(CABLES.UI)gui.setLayout()};c.onChange=function(){n.patch.removeOnAnimFrame(n);if(c.get()){n.setUiAttrib({extendTitle:""});n.onAnimFrame=S;n.patch.addOnAnimFrame(n);n.log("adding again!")}else{n.setUiAttrib({extendTitle:"Inactive"})}};const d=n.patch.cgl;let p=0;let _=0;let m=null;let E=false;if(!n.patch.cgl)n.uiAttr({error:"No webgl cgl context"});const T=vec3.create();vec3.set(T,0,0,0);const A=vec3.create();vec3.set(A,0,0,-2);f.onChange=R;setTimeout(R,100);let v=null;let b=true;let x=true;window.addEventListener("blur",()=>{b=false});window.addEventListener("focus",()=>{b=true});document.addEventListener("visibilitychange",()=>{x=!document.hidden});C();d.mainloopOp=this;g.onChange=()=>{r.set(0);s.set(0)};function I(){if(o.get()&&n.patch.loading.getProgress()<1)return 5;if(a.get()){if(!x)return 10;if(!b)return 30}return t.get()}function R(){function e(){if(v)v.style.display="block"}function t(){if(v)v.style.display="none"}n.patch.cgl.canvas.addEventListener("mouseleave",t);n.patch.cgl.canvas.addEventListener("mouseenter",e);if(f.get()){if(!v){v=document.createElement("div");const i=n.patch.cgl.canvas.parentElement;if(i)i.appendChild(v);v.addEventListener("mouseenter",e);v.addEventListener("click",function(e){if(CABLES.UI&&!e.shiftKey)gui.cycleFullscreen();else d.fullScreen()})}v.style.padding="10px";v.style.position="absolute";v.style.right="5px";v.style.top="5px";v.style.width="20px";v.style.height="20px";v.style.cursor="pointer";v.style["border-radius"]="40px";v.style.background="#444";v.style["z-index"]="9999";v.style.display="none";v.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 490 490" style="width:20px;height:20px;" xml:space="preserve" width="512px" height="512px"><g><path d="M173.792,301.792L21.333,454.251v-80.917c0-5.891-4.776-10.667-10.667-10.667C4.776,362.667,0,367.442,0,373.333V480     c0,5.891,4.776,10.667,10.667,10.667h106.667c5.891,0,10.667-4.776,10.667-10.667s-4.776-10.667-10.667-10.667H36.416     l152.459-152.459c4.093-4.237,3.975-10.99-0.262-15.083C184.479,297.799,177.926,297.799,173.792,301.792z" fill="#FFFFFF"/><path d="M480,0H373.333c-5.891,0-10.667,4.776-10.667,10.667c0,5.891,4.776,10.667,10.667,10.667h80.917L301.792,173.792     c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262c0.089-0.086,0.176-0.173,0.262-0.262     L469.333,36.416v80.917c0,5.891,4.776,10.667,10.667,10.667s10.667-4.776,10.667-10.667V10.667C490.667,4.776,485.891,0,480,0z" fill="#FFFFFF"/><path d="M36.416,21.333h80.917c5.891,0,10.667-4.776,10.667-10.667C128,4.776,123.224,0,117.333,0H10.667     C4.776,0,0,4.776,0,10.667v106.667C0,123.224,4.776,128,10.667,128c5.891,0,10.667-4.776,10.667-10.667V36.416l152.459,152.459     c4.237,4.093,10.99,3.975,15.083-0.262c3.992-4.134,3.992-10.687,0-14.82L36.416,21.333z" fill="#FFFFFF"/><path d="M480,362.667c-5.891,0-10.667,4.776-10.667,10.667v80.917L316.875,301.792c-4.237-4.093-10.99-3.976-15.083,0.261     c-3.993,4.134-3.993,10.688,0,14.821l152.459,152.459h-80.917c-5.891,0-10.667,4.776-10.667,10.667s4.776,10.667,10.667,10.667     H480c5.891,0,10.667-4.776,10.667-10.667V373.333C490.667,367.442,485.891,362.667,480,362.667z" fill="#FFFFFF"/></g></svg>'}else{if(v){v.style.display="none";v.remove();v=null}}}n.onDelete=function(){d.gl.clearColor(0,0,0,0);d.gl.clear(d.gl.COLOR_BUFFER_BIT|d.gl.DEPTH_BUFFER_BIT)};function S(e){if(!c.get())return;if(d.aborted||d.canvas.clientWidth===0||d.canvas.clientHeight===0)return;n.patch.cg=d;if(u.get())n.patch.cgl.pixelDensity=window.devicePixelRatio;const t=performance.now();n.patch.config.fpsLimit=I();if(d.canvasWidth==-1){d.setCanvas(n.patch.config.glCanvasId);return}if(d.canvasWidth!=r.get()||d.canvasHeight!=s.get()){let e=1;if(g.get()=="CSS")e=n.patch.cgl.pixelDensity;r.set(d.canvasWidth/e);s.set(d.canvasHeight/e)}if(CABLES.now()-_>1e3){CGL.fpsReport=CGL.fpsReport||[];if(n.patch.loading.getProgress()>=1&&_!==0)CGL.fpsReport.push(p);p=0;_=CABLES.now()}CGL.MESH.lastShader=null;CGL.MESH.lastMesh=null;d.renderStart(d,T,A);if(l.get()){d.gl.clearColor(0,0,0,1);d.gl.clear(d.gl.COLOR_BUFFER_BIT|d.gl.DEPTH_BUFFER_BIT)}i.trigger();if(CGL.MESH.lastMesh)CGL.MESH.lastMesh.unBind();if(CGL.Texture.previewTexture){if(!CGL.Texture.texturePreviewer)CGL.Texture.texturePreviewer=new CGL.Texture.texturePreview(d);CGL.Texture.texturePreviewer.render(CGL.Texture.previewTexture)}d.renderEnd(d);n.patch.cg=null;if(h.get()){d.gl.clearColor(1,1,1,1);d.gl.colorMask(false,false,false,true);d.gl.clear(d.gl.COLOR_BUFFER_BIT);d.gl.colorMask(true,true,true,true)}if(!d.frameStore.phong)d.frameStore.phong={};p++;n.patch.cgl.profileData.profileMainloopMs=performance.now()-t}function C(){clearTimeout(m);m=setTimeout(()=>{if(n.patch.getOpsByObjName(n.name).length>1){n.setUiError("multimainloop","there should only be one mainloop op!");if(!E)E=n.patch.addEventListener("onOpDelete",C)}else n.setUiError("multimainloop",null,1)},500)}};Ops.Gl.MainLoop.prototype=new CABLES.Op;CABLES.OPS["b0472a1d-db16-4ba6-8787-f300fbdc77bb"]={f:Ops.Gl.MainLoop,objName:"Ops.Gl.MainLoop"};Ops.Gl.RenderToTexture=function(){CABLES.Op.apply(this,arguments);const r=this;const e=r.attachments={};const s=r.patch.cgl;const t=r.inTrigger("render"),i=r.inValueBool("use viewport size",true),n=r.inValueInt("texture width",512),a=r.inValueInt("texture height",512),o=r.inBool("Auto Aspect",false),l=r.inSwitch("filter",["nearest","linear","mipmap"],"linear"),h=r.inSwitch("Wrap",["Clamp","Repeat","Mirror"],"Repeat"),f=r.inSwitch("MSAA",["none","2x","4x","8x"],"none"),c=r.outTrigger("trigger"),u=r.outTexture("texture"),g=r.outTexture("textureDepth"),d=r.inValueBool("HDR"),p=r.inValueBool("Depth",true),_=r.inValueBool("Clear",true);let m=null;let E=true;u.set(CGL.Texture.getEmptyTexture(s));r.setPortGroup("Size",[i,n,a,o]);const T=[0,0,0,0];d.setUiAttribs({title:"Pixelformat Float 32bit"});d.onChange=p.onChange=_.onChange=l.onChange=h.onChange=f.onChange=v;i.onChange=A;t.onTriggered=r.preRender=b;A();function A(){n.setUiAttribs({greyout:i.get()});a.setUiAttribs({greyout:i.get()});o.setUiAttribs({greyout:i.get()})}function v(){E=true}function b(){const e=s.getViewPort();T[0]=e[0];T[1]=e[1];T[2]=e[2];T[3]=e[3];if(!m||E){if(m)m.delete();let i=CGL.Texture.WRAP_REPEAT;if(h.get()=="Clamp")i=CGL.Texture.WRAP_CLAMP_TO_EDGE;else if(h.get()=="Mirror")i=CGL.Texture.WRAP_MIRRORED_REPEAT;let n=CGL.Texture.FILTER_NEAREST;if(l.get()=="nearest")n=CGL.Texture.FILTER_NEAREST;else if(l.get()=="linear")n=CGL.Texture.FILTER_LINEAR;else if(l.get()=="mipmap")n=CGL.Texture.FILTER_MIPMAP;if(d.get()&&l.get()=="mipmap")r.setUiError("fpmipmap","Don't use mipmap and HDR at the same time, many systems do not support this.");else r.setUiError("fpmipmap",null);if(s.glVersion>=2){let e=true;let t=4;if(f.get()=="none"){t=0;e=false}if(f.get()=="2x")t=2;if(f.get()=="4x")t=4;if(f.get()=="8x")t=8;m=new CGL.Framebuffer2(s,8,8,{name:"render2texture "+r.id,isFloatingPointTexture:d.get(),multisampling:e,wrap:i,filter:n,depth:p.get(),multisamplingSamples:t,clear:_.get()})}else{m=new CGL.Framebuffer(s,8,8,{isFloatingPointTexture:d.get(),clear:_.get()});console.log("WEBGL1!!!",m,m.valid)}if(m&&m.valid){g.set(m.getTextureDepth());E=false}else{m=null;E=true}}if(i.get()){n.set(s.getViewPort()[2]);a.set(s.getViewPort()[3])}if(m.getWidth()!=Math.ceil(n.get())||m.getHeight()!=Math.ceil(a.get())){m.setSize(Math.max(1,Math.ceil(n.get())),Math.max(1,Math.ceil(a.get())))}m.renderStart(s);if(o.get())mat4.perspective(s.pMatrix,45,n.get()/a.get(),.1,1e3);c.trigger();m.renderEnd(s);s.setViewPort(T[0],T[1],T[2],T[3]);g.setRef(m.getTextureDepth());u.setRef(m.getTextureColor())}};Ops.Gl.RenderToTexture.prototype=new CABLES.Op;CABLES.OPS["d01fa820-396c-4cb5-9d78-6b14762852af"]={f:Ops.Gl.RenderToTexture,objName:"Ops.Gl.RenderToTexture"};Ops.Gl.Textures.WebcamTexture_v3=function(){CABLES.Op.apply(this,arguments);const t=this;const U=t.attachments={texcopy_frag:"UNI sampler2D tex;\nIN vec2 texCoord;\n\n\nvoid main()\n{\n    vec2 tc=vec2(texCoord.x,texCoord.y);\n\n    #ifdef FLIPX\n        tc.x=1.0-texCoord.x;\n    #endif\n    #ifdef FLIPY\n        tc.y=1.0-texCoord.y;\n    #endif\n    outColor=texture(tex,tc);\n}"};const G=t.inTrigger("Render"),i=t.inBool("Active",true),s=t.inValueBool("Generate Texture",true),a=t.inDropDown("Webcam Input",["Default"],"Default"),o=t.inValueInt("Requested Width",1280),l=t.inValueInt("Requested Height",720),e=t.inValueBool("Flip X",false),n=t.inValueBool("Flip Y",false),r=t.inValueBool("Show HTML Element",false),h=t.inStringEditor("CSS","z-index:99999;\nposition:absolute;\n","inline-css"),f=t.inValueBool("Element Flip X",false),c=t.inValueBool("Element Flip Y",false),B=t.outTrigger("Next"),u=t.outTexture("Texture"),w=t.outNumber("Ratio"),g=t.outBoolNum("Available"),D=t.outNumber("Size Width"),V=t.outNumber("Size Height"),d=t.outString("Error"),k=t.outObject("HTML Element",null,"element"),H=t.outArray("Available devices"),X=t.outString("Active device"),z=t.outTrigger("Texture updated");t.setPortGroup("Camera",[a,o,l]);t.setPortGroup("Texture",[e,n]);t.setPortGroup("Video Element",[r,h,f,c]);let p=0;const _=t.patch.cgl;const j=CGL.Texture.getEmptyTexture(_);const m=document.createElement("video");const W="webcam"+t.id;m.setAttribute("id",W);m.setAttribute("autoplay","");m.setAttribute("muted","");m.setAttribute("playsinline","");m.setAttribute("style",h.get());t.patch.cgl.canvas.parentElement.parentElement.appendChild(m);let E=null;let T=false;let A=false;let v=false;let b=false;let x=null;let I=null;let R=null;let S=false;let Y=false;let K=null;let C=null;u.set(j);e.onChange=n.onChange=O;a.onChange=o.onChange=l.onChange=F;f.onChange=c.onChange=Q;t.onDelete=Z;r.onChange=h.onChange=P;q();P();t.on("loadedValueSet",L);i.onChange=L;function L(){setTimeout(()=>{if(i.get())te()},50)}function O(){if(!C)C=new CGL.CopyTexture(_,"webcamFlippedTexture",{shader:U.texcopy_frag});C.bgShader.toggleDefine("FLIPX",e.get());C.bgShader.toggleDefine("FLIPY",!n.get())}function q(){if(E)E.delete();E=new CGL.Texture(_,{name:"webcam"});if(m)E.setSize(m.videoWidth,m.videoHeight)}function Z(){if(m)m.remove()}function P(){if(!r.get())m.setAttribute("style","display:none;");else m.setAttribute("style",h.get());h.setUiAttribs({greyout:!r.get()});f.setUiAttribs({greyout:!r.get()});c.setUiAttribs({greyout:!r.get()})}function Q(){if(f.get()&&!c.get())m.style.transform="scaleX(-1)";else if(!f.get()&&c.get())m.style.transform="scaleY(-1)";else if(f.get()&&c.get())m.style.transform="scale(-1, -1)";else m.style.transform="unset"}function y(e){if(v&&b){if(e){S=true;m.play()}else{S=false;m.pause()}}}s.onChange=()=>{y(s.get())};function J(){_.gl.bindTexture(_.gl.TEXTURE_2D,E.tex);_.gl.texImage2D(_.gl.TEXTURE_2D,0,_.gl.RGBA,_.gl.RGBA,_.gl.UNSIGNED_BYTE,m);_.gl.bindTexture(_.gl.TEXTURE_2D,null);if(!C)O();if(C)u.setRef(C.copy(E))}function $(){if(!I)return;y(false);g.set(false);I.getTracks().forEach(e=>{e.stop()});I=null}function N(r){I=r;m.srcObject=r;m.onloadedmetadata=e=>{X.set(r.getTracks()[0].label);if(a.get()!="Default"&&r.getTracks()[0].label!=a.get()&&p<3){p++;return F()}const t=r.getTracks()[0].getSettings();A=false;const i=t.width||o.get();const n=t.height||l.get();V.set(n);D.set(i);w.set(t.aspectRatio||i/n);d.set("");m.setAttribute("width",t.width);m.setAttribute("height",t.height);k.set(m);E.setSize(i,n);g.set(true);y(s.get())}}function ee(){const e=M();const t=e.video.width==m.videoWidth&&e.video.height==m.videoHeight;return t}function M(){let i={audio:false,video:{}};if(b){let t=a.get();let e=null;if(!t||t==="Default"||t==="..."){e=Object.values(R)[0]}else{e=R.filter(e=>{return e.label===t});if(e){e=e[0]}else{e=Object.values(R)[t]}if(!e){e=Object.values(R)[0]}}i.video={deviceId:{exact:e.deviceId}}}const e=o.get();const t=l.get();let n={min:640};let r={min:480};if(e)n.ideal=e;if(t)r.ideal=t;i.video.width=n;i.video.height=r;return i}function F(){if(!i.get())return;$();A=true;const e=M();navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia;if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){navigator.mediaDevices.getUserMedia(e).then(N).catch(e=>{A=false;t.logError(e.name+": "+e.message,e);d.set(e.name+": "+e.message)})}else if(navigator.getUserMedia){A=false;navigator.getUserMedia(e,N,()=>{return g.set(false)})}}function te(){if(!i.get())return;T=true;if(x)_.patch.loading.finished(x);x=_.patch.loading.start("Webcam inputs","",t);const e=M();navigator.mediaDevices.getUserMedia(e).then(e=>{return navigator.mediaDevices.enumerateDevices()}).then(e=>{R=e.filter(e=>{return e.kind==="videoinput"});T=false;a.uiAttribs.values=R.map((e,t)=>{return e.label||t});a.uiAttribs.values.unshift("Default");H.set(a.uiAttribs.values);_.patch.loading.finished(x);b=true;F();v=true}).catch(e=>{T=false;t.error("error",e);d.set(e.name+": "+e.message);_.patch.loading.finished(x);b=false})}G.onTriggered=()=>{if(!T&&i.get()){if(v&&b&&S){J();z.trigger()}if(!v&&b){F()}}B.trigger()}};Ops.Gl.Textures.WebcamTexture_v3.prototype=new CABLES.Op;CABLES.OPS["71c0468d-e942-4574-a91d-b3d7271922d0"]={f:Ops.Gl.Textures.WebcamTexture_v3,objName:"Ops.Gl.Textures.WebcamTexture_v3"};Ops.Gl.Meshes.PointCloudFromArray=function(){CABLES.Op.apply(this,arguments);const r=this;const e=r.attachments={};const t=r.inTrigger("exe"),s=r.inArray("Array",3),i=r.inValueInt("Num Points"),n=r.outTrigger("Trigger out"),a=r.outObject("Geometry"),o=r.inValueBool("Scramble Texcoords",true),l=r.inValue("Seed",1),h=r.inArray("Coordinates",2),f=r.inArray("Point sizes",1),c=r.inArray("Vertex Colors",4);r.toWorkPortsNeedToBeLinked(s,t);r.setPortGroup("Texture Coordinates",[o,l,h]);const u=r.patch.cgl;const g=new CGL.Geometry("pointcloudfromarray");let d=false;let p=null;let _=[];let m=true;let E=false;s.setUiAttribs({title:"Positions"});h.setUiAttribs({title:"Texture Coordinates"});h.onChange=o.onChange=v;c.onChange=x;i.onChange=I;f.onChange=b;l.onChange=s.onChange=c.onLinkChanged=f.onLinkChanged=A;t.onTriggered=T;function T(){if(CABLES.UI){let e=u.getShader();if(e.glPrimitive!=u.gl.POINTS)r.setUiError("nopointmat","Using a Material not made for point rendering. Try to use PointMaterial.");else r.setUiError("nopointmat",null)}if(m||!p)R();if(!d&&p)p.render(u.getShader());n.trigger()}function A(){d=s.get()==null;if(!d)m=true;else m=false}function v(){if(h.isLinked()){l.setUiAttribs({greyout:true});o.setUiAttribs({greyout:true})}else{o.setUiAttribs({greyout:false});if(!o.get())l.setUiAttribs({greyout:true});else l.setUiAttribs({greyout:false})}p=null;m=true}function b(){if(!f.get())return;if(!g.getAttribute("attrPointSize"))A();if(p)p.setAttribute("attrPointSize",f.get(),1)}function x(){m=true}function I(){if(p){p.setNumVertices(Math.min(g.vertices.length/3,i.get()));if(i.get()==0)p.setNumVertices(g.vertices.length/3)}}function R(){let t=s.get();if(!t||t.length==0){return}if(t.length%3!==0){r.setUiError("div3","Array length not multiple of 3");return}else r.setUiError("div3",null);if(g.vertices.length==t.length&&p&&!h.isLinked()&&!c.isLinked()&&!g.getAttribute("attrPointSize")){p.setAttribute(CGL.SHADERVAR_VERTEX_POSITION,t,3);g.vertices=t;m=false;return}g.clear();let i=t.length/3;i=Math.abs(Math.floor(i));if(i==0)return;if(!_||_.length!=i*2)_=new Float32Array(i*2);let n=o.get();if(!h.isLinked()){Math.randomSeed=l.get();_=[];for(let e=0;e<i;e++){if(g.vertices[e*3]!=t[e*3]||g.vertices[e*3+1]!=t[e*3+1]||g.vertices[e*3+2]!=t[e*3+2]){if(n){_[e*2]=Math.seededRandom();_[e*2+1]=Math.seededRandom()}else{_[e*2]=e/i;_[e*2+1]=e/i}}}}if(c.get()){if(c.get().length!=i*4){r.setUiError("vertColWrongLength","Color array does not have the correct length! (should be "+i*4+")");p=null;return}else r.setUiError("vertColWrongLength",null);g.vertexColors=c.get()}else{r.setUiError("vertColWrongLength",null);g.vertexColors=[]}if(f.get()){if(f.get().length!=i){r.setUiError("pointsizeWrongLength","Color array does not have the correct length! (should be "+i+")");p=null;return}else r.setUiError("pointsizeWrongLength",null);g.setAttribute("attrPointSize",f.get(),1)}else{r.setUiError("pointsizeWrongLength",null);g.setAttribute("attrPointSize",[],1)}if(h.isLinked())_=h.get();g.setPointVertices(t);g.setTexCoords(_);if(!p)p=new CGL.Mesh(u,g,{glPrimitive:u.gl.POINTS});p.addVertexNumbers=true;p.setGeom(g);a.setRef(g);I();m=false}};Ops.Gl.Meshes.PointCloudFromArray.prototype=new CABLES.Op;CABLES.OPS["0a6d9c6f-6459-45ca-88ad-268a1f7304db"]={f:Ops.Gl.Meshes.PointCloudFromArray,objName:"Ops.Gl.Meshes.PointCloudFromArray"};Ops.Gl.Shader.PointMaterial_v4=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={pointmat_frag:"\n{{MODULES_HEAD}}\n\nUNI vec4 color;\nUNI float atlasNumX;\n\n// IN vec2 pointCoord;\nIN float ps;\n\n#ifdef USE_ATLAS\nIN float randAtlas;\n#endif\n\n#ifdef HAS_TEXTURE_DIFFUSE\n    UNI sampler2D diffTex;\n#endif\n#ifdef HAS_TEXTURE_MASK\n    UNI sampler2D texMask;\n#endif\n#ifdef HAS_TEXTURE_COLORIZE\n    IN vec4 colorize;\n#endif\n#ifdef HAS_TEXTURE_OPACITY\n    IN float opacity;\n#endif\n#ifdef HAS_TEXTURE_ATLASLOOKUP\n    UNI sampler2D texAtlasLookup;\n#endif\n\n#ifdef VERTEX_COLORS\n    IN vec4 vertexColor;\n#endif\n\n\nvoid main()\n{\n    #ifdef FLIP_TEX\n        vec2 pointCoord=vec2(gl_PointCoord.x,(1.0-gl_PointCoord.y));\n    #endif\n    #ifndef FLIP_TEX\n        vec2 pointCoord=gl_PointCoord;\n    #endif\n\n    #ifdef RAND_ATLAS\n        #ifndef HAS_TEXTURE_ATLASLOOKUP\n            pointCoord.x=pointCoord.x/atlasNumX+randAtlas*(1.0/atlasNumX);\n        #endif\n    #endif\n\n\n\n        #ifdef HAS_TEXTURE_ATLASLOOKUP\n\n            float atlasIdx=texture(texAtlasLookup,pointCoord).r;\n\n            #ifdef ATLAS_XFADE\n                vec2 pointCoord2=vec2(pointCoord);\n                pointCoord2.x=pointCoord.x/atlasNumX+ceil(atlasIdx)*(1.0/atlasNumX);\n            #endif\n\n            pointCoord.x=pointCoord.x/atlasNumX+floor(atlasIdx)*(1.0/atlasNumX);\n\n        #endif\n\n    // #endif\n\n    {{MODULE_BEGIN_FRAG}}\n\n    if(ps<1.0)discard;\n\n    vec4 col=color;\n\n    #ifdef HAS_TEXTURE_MASK\n        float mask;\n        #ifdef TEXTURE_MASK_R\n            mask=texture(texMask,pointCoord).r;\n        #endif\n        #ifdef TEXTURE_MASK_A\n            mask=texture(texMask,pointCoord).a;\n        #endif\n        #ifdef TEXTURE_MASK_LUMI\n        \tvec3 lumcoeff = vec3(0.299,0.587,0.114);\n        \tmask = dot(texture(texMask,pointCoord).rgb, lumcoeff);\n        #endif\n\n    #endif\n\n    #ifdef HAS_TEXTURE_DIFFUSE\n\n\n        col=texture(diffTex,pointCoord);\n\n        #ifdef HAS_TEXTURE_ATLASLOOKUP\n        #ifdef ATLAS_XFADE\n            vec4 col2=texture(diffTex,pointCoord2);\n            col=mix(col,col2,fract(atlasIdx));\n        #endif\n        #endif\n\n        #ifdef COLORIZE_TEXTURE\n          col.rgb*=color.rgb;\n        #endif\n\n\n    #endif\n    col.a*=color.a;\n\n\n    #ifdef MAKE_ROUND\n\n        #ifndef MAKE_ROUNDAA\n            if ((gl_PointCoord.x-0.5)*(gl_PointCoord.x-0.5) + (gl_PointCoord.y-0.5)*(gl_PointCoord.y-0.5) > 0.25) discard; //col.a=0.0;\n        #endif\n\n        #ifdef MAKE_ROUNDAA\n            float circ=(gl_PointCoord.x-0.5)*(gl_PointCoord.x-0.5) + (gl_PointCoord.y-0.5)*(gl_PointCoord.y-0.5);\n\n            float a=smoothstep(0.25,0.25-fwidth(gl_PointCoord.x),circ);\n            if(a==0.0)discard;\n            col.a=a*color.a;\n        #endif\n    #endif\n\n    #ifdef HAS_TEXTURE_COLORIZE\n        col*=colorize;\n    #endif\n\n    #ifdef TEXTURE_COLORIZE_MUL\n        col*=color;\n    #endif\n\n    #ifdef HAS_TEXTURE_MASK\n        col.a*=mask;\n    #endif\n\n    #ifdef HAS_TEXTURE_OPACITY\n        col.a*=opacity;\n    #endif\n\n    #ifdef VERTEX_COLORS\n        col.rgb = vertexColor.rgb;\n        col.a *= vertexColor.a;\n    #endif\n\n    if (col.a <= 0.0) discard;\n\n    #ifdef HAS_TEXTURE_COLORIZE\n        col*=colorize;\n    #endif\n\n    {{MODULE_COLOR}}\n\n    outColor = col;\n}\n",pointmat_vert:"{{MODULES_HEAD}}\nIN vec3 vPosition;\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\nIN vec3 attrTangent;\nIN vec3 attrBiTangent;\nIN float attrPointSize;\n\n#ifdef VERTEX_COLORS\n    IN vec4 attrVertColor;\n    OUT vec4 vertexColor;\n#endif\n\nOUT vec3 norm;\nOUT float ps;\n\nOUT vec2 texCoord;\n\n\n#ifdef HAS_TEXTURES\n#endif\n\n#ifdef HAS_TEXTURE_COLORIZE\n   UNI sampler2D texColorize;\n   OUT vec4 colorize;\n#endif\n#ifdef HAS_TEXTURE_OPACITY\n    UNI sampler2D texOpacity;\n    OUT float opacity;\n#endif\n\n#ifdef HAS_TEXTURE_POINTSIZE\n   UNI sampler2D texPointSize;\n   UNI float texPointSizeMul;\n#endif\n\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\n\nUNI float pointSize;\nUNI vec3 camPos;\n\nUNI float canvasWidth;\nUNI float canvasHeight;\nUNI float camDistMul;\nUNI float randomSize;\n\nIN float attrVertIndex;\n\nUNI float atlasNumX;\n\n#ifdef RAND_ATLAS\n    OUT float randAtlas;\n#endif\n\nfloat rand(float n){return fract(sin(n) * 5711.5711123);}\n\n#define POINTMATERIAL\n\nvoid main()\n{\n    norm=attrVertNormal;\n    #ifdef PIXELSIZE\n        float psMul=1.0;\n    #endif\n\n    #ifndef PIXELSIZE\n        float psMul=sqrt(canvasWidth/canvasHeight)+0.00000000001;\n    #endif\n\n    #ifdef RAND_ATLAS\n        randAtlas=floor(atlasNumX*rand(attrVertIndex));\n    #endif\n\n    // float sizeMultiply=1.0;\n\n    vec3 tangent=attrTangent;\n    vec3 bitangent=attrBiTangent;\n\n\n    #ifdef VERTEX_COLORS\n        vertexColor=attrVertColor;\n    #endif\n\n    // #ifdef HAS_TEXTURES\n        texCoord=attrTexCoord;\n    // #endif\n\n    #ifdef HAS_TEXTURE_OPACITY\n        // opacity=texture(texOpacity,vec2(rand(attrVertIndex+texCoord.x*texCoord.y+texCoord.y+texCoord.x),rand(texCoord.y*texCoord.x-texCoord.x-texCoord.y-attrVertIndex))).r;\n        opacity=texture(texOpacity,texCoord).r;\n    #endif\n\n\n    #ifdef HAS_TEXTURE_COLORIZE\n        #ifdef RANDOM_COLORIZE\n            colorize=texture(texColorize,vec2(rand(attrVertIndex+texCoord.x*texCoord.y+texCoord.y+texCoord.x),rand(texCoord.y*texCoord.x-texCoord.x-texCoord.y-attrVertIndex)));\n        #endif\n        #ifndef RANDOM_COLORIZE\n            colorize=texture(texColorize,texCoord);\n        #endif\n    #endif\n\n\n\n\n\n    mat4 mMatrix=modelMatrix;\n    vec4 pos = vec4( vPosition, 1. );\n\n    gl_PointSize=0.0;\n\n    {{MODULE_VERTEX_POSITION}}\n\n    vec4 model=mMatrix * pos;\n\n    psMul+=rand(texCoord.x*texCoord.y+texCoord.y*3.0+texCoord.x*2.0+attrVertIndex)*randomSize;\n    // psMul*=sizeMultiply;\n\n    float addPointSize=0.0;\n    #ifdef HAS_TEXTURE_POINTSIZE\n\n        #ifdef POINTSIZE_CHAN_R\n            addPointSize=texture(texPointSize,texCoord).r;\n        #endif\n        #ifdef POINTSIZE_CHAN_G\n            addPointSize=texture(texPointSize,texCoord).g;\n        #endif\n        #ifdef POINTSIZE_CHAN_B\n            addPointSize=texture(texPointSize,texCoord).b;\n        #endif\n\n\n        #ifdef DOTSIZEREMAPABS\n            // addPointSize=(( (texture(texPointSize,texCoord).r) * texPointSizeMul)-0.5)*2.0;\n\n            addPointSize=1.0-(distance(addPointSize,0.5)*2.0);\n            // addPointSize=abs(1.0-(distance(addPointSize,0.5)*2.0));\n            addPointSize=addPointSize*addPointSize*addPointSize*2.0;\n\n            // addPointSize=(( (texture(texPointSize,texCoord).r) * texPointSizeMul)-0.5)*2.0;\n        #endif\n\n        addPointSize*=texPointSizeMul;\n\n    #endif\n\n    ps=0.0;\n    #ifndef SCALE_BY_DISTANCE\n        ps = (pointSize+addPointSize+attrPointSize) * psMul;\n    #endif\n    #ifdef SCALE_BY_DISTANCE\n        float cameraDist = distance(model.xyz, camPos);\n        ps = ( (pointSize+addPointSize+attrPointSize) / cameraDist) * psMul;\n    #endif\n\n    gl_PointSize += ps;\n\n\n    gl_Position = projMatrix * viewMatrix * model;\n}\n"};const i=e.patch.cgl;const n=e.inTrigger("render"),r=e.inValueFloat("PointSize",3),s=e.inBool("Size in Pixels",false),a=e.inValue("Random Size",0),o=e.inValueBool("Round",true),l=e.inValueBool("Round Antialias",false),h=e.inValueBool("Scale by Distance",false),f=e.inValueSlider("r",Math.random()),c=e.inValueSlider("g",Math.random()),u=e.inValueSlider("b",Math.random()),g=e.inValueSlider("a",1),d=e.inBool("Vertex Colors",false),p=e.inTexture("texture"),_=e.inBool("Colorize Texture"),m=e.inTexture("Texture Mask"),E=e.inSwitch("Mask Channel",["R","A","Luminance"],"R"),T=e.inTexture("Texture Colorize"),A=e.inValueBool("Colorize Randomize",true),v=e.inTexture("Texture Opacity"),b=e.inTexture("Texture Point Size"),x=e.inSwitch("Point Size Channel",["R","G","B"],"R"),I=e.inFloat("Texture Point Size Mul",1),R=e.inSwitch("Map Size 0",["Black","Grey"],"Black"),S=e.inValueBool("Flip Texture",false),C=e.inBool("Random Atlas"),L=e.inFloat("Atlas Repeat X",4),O=e.outTrigger("trigger"),P=e.outObject("shader",null,"shader");e.setPortGroup("Texture",[p,_,m,E,T,v,A]);e.setPortGroup("Color",[f,c,u,g,d]);e.setPortGroup("Size",[r,a,o,l,h,s,b,I,x,R]);f.setUiAttribs({colorPick:true});const y=new CGL.Shader(i,"PointMaterial");y.setModules(["MODULE_VERTEX_POSITION","MODULE_COLOR","MODULE_BEGIN_FRAG"]);y.define("MAKE_ROUND");e.toWorkPortsNeedToBeLinked(n);const U=new CGL.Uniform(y,"f","pointSize",r),G=new CGL.Uniform(y,"f","texPointSizeMul",I),B=new CGL.Uniform(y,"f","randomSize",a),w=new CGL.Uniform(y,"4f","color",f,c,u,g),D=new CGL.Uniform(y,"f","atlasNumX",L),N=new CGL.Uniform(y,"f","canvasWidth",i.canvasWidth),V=new CGL.Uniform(y,"f","canvasHeight",i.canvasHeight),k=new CGL.Uniform(y,"t","diffTex"),H=new CGL.Uniform(y,"t","texColorize"),X=new CGL.Uniform(y,"t","texOpacity"),z=new CGL.Uniform(y,"t","texPointSize"),j=new CGL.Uniform(y,"t","texPointSize"),W=new CGL.Uniform(y,"t","texMask");y.setSource(t.pointmat_vert,t.pointmat_frag);y.glPrimitive=i.gl.POINTS;P.set(y);P.ignoreValueSerialize=true;n.onTriggered=M;h.onChange=C.onChange=o.onChange=l.onChange=p.onChange=T.onChange=m.onChange=A.onChange=S.onChange=E.onChange=s.onChange=v.onChange=b.onChange=R.onChange=x.onChange=_.onChange=d.onChange=Y;F();e.preRender=function(){if(y)y.bind();M()};function M(){N.setValue(i.canvasWidth);V.setValue(i.canvasHeight);i.pushShader(y);y.popTextures();if(p.get()&&!p.get().deleted)y.pushTexture(k,p.get());if(m.get())y.pushTexture(W,m.get());if(T.get())y.pushTexture(H,T.get());if(v.get())y.pushTexture(X,v.get());if(b.get())y.pushTexture(j,b.get());O.trigger();i.popShader()}function F(){L.setUiAttribs({greyout:!C.get()});E.setUiAttribs({greyout:!m.isLinked()});x.setUiAttribs({greyout:!b.isLinked()});I.setUiAttribs({greyout:!b.isLinked()});R.setUiAttribs({greyout:!b.isLinked()})}function Y(){y.toggleDefine("ATLAS_NUMX",C.get());y.toggleDefine("SCALE_BY_DISTANCE",h.get());y.toggleDefine("MAKE_ROUND",o.get());y.toggleDefine("MAKE_ROUNDAA",l.get());y.toggleDefine("VERTEX_COLORS",d.get());y.toggleDefine("RANDOM_COLORIZE",A.get());y.toggleDefine("HAS_TEXTURE_DIFFUSE",p.get());y.toggleDefine("HAS_TEXTURE_MASK",m.get());y.toggleDefine("HAS_TEXTURE_COLORIZE",T.get());y.toggleDefine("HAS_TEXTURE_OPACITY",v.get());y.toggleDefine("HAS_TEXTURE_POINTSIZE",b.get());y.toggleDefine("TEXTURE_COLORIZE_MUL",_.get());y.toggleDefine("FLIP_TEX",S.get());y.toggleDefine("TEXTURE_MASK_R",E.get()=="R");y.toggleDefine("TEXTURE_MASK_A",E.get()=="A");y.toggleDefine("TEXTURE_MASK_LUMI",E.get()=="Luminance");y.toggleDefine("PIXELSIZE",s.get());y.toggleDefine("POINTSIZE_CHAN_R",x.get()=="R");y.toggleDefine("POINTSIZE_CHAN_G",x.get()=="G");y.toggleDefine("POINTSIZE_CHAN_B",x.get()=="B");y.toggleDefine("DOTSIZEREMAPABS",R.get()=="Grey");F()}};Ops.Gl.Shader.PointMaterial_v4.prototype=new CABLES.Op;CABLES.OPS["a7cb5d1c-cd4a-4c28-bb13-7bb9bda187ed"]={f:Ops.Gl.Shader.PointMaterial_v4,objName:"Ops.Gl.Shader.PointMaterial_v4"};Ops.Gl.PixelProjection=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const i=e.inTrigger("render"),h=e.inBool("use viewport size",true),f=e.inFloat("Width",500),c=e.inFloat("Height",500),u=e.inFloat("frustum near",-500),g=e.inFloat("frustum far",500),d=e.inSwitch("Position 0,0",["Top Left","Top Right","Center","Bottom Right","Bottom Left"],"Bottom Left"),p=e.inBool("Flip X",false),_=e.inBool("Flip Y",false),n=e.inBool("Zero Y",false),m=e.outTrigger("trigger");const E=e.patch.cgl;e.setPortGroup("Canvas size",[h,f,c]);e.setPortGroup("Clipping",[u,g]);e.setPortGroup("Flip",[p,_]);e.toWorkPortsNeedToBeLinked(i);i.onTriggered=s;h.onChange=r;r();function r(){f.setUiAttribs({greyout:h.get()});c.setUiAttribs({greyout:h.get()})}function s(){let e=0;let t=0;let i=0;let n=0;let r=f.get();let s=c.get();let a=0;let o=0;if(h.get()){i=E.getViewPort()[2]/E.pixelDensity;n=E.getViewPort()[3]/E.pixelDensity;r=E.getViewPort()[2]/E.pixelDensity;s=E.getViewPort()[3]/E.pixelDensity}else{i=r;n=s}if(p.get()){const l=i;i=a;e=l}if(_.get()){const l=n;n=o;t=l}if(d.get()==="Center"){e-=r/2;i-=r/2;t-=s/2;n-=s/2}else if(d.get()==="Bottom Right"){e-=r;i=a;t=o;n=-s}else if(d.get()==="Top Right"){e-=r;i=a;t-=s;n=o}if(d.get()==="Top Left "){e=a;i=r;t=-s;n=o}E.pushPMatrix();mat4.ortho(E.pMatrix,e,i,t,n,parseFloat(u.get()),parseFloat(g.get()));m.trigger();E.popPMatrix()}};Ops.Gl.PixelProjection.prototype=new CABLES.Op;CABLES.OPS["949d6daf-d677-4ed6-a921-51a5732b64ac"]={f:Ops.Gl.PixelProjection,objName:"Ops.Gl.PixelProjection"};Ops.Extension.Mediapipe.MpFaceTracking=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const i=e.inObject("Element"),n=e.inBool("Refine LandMarks",false),r=e.outArray("Points"),s=e.outNumber("Found"),a=e.outObject("Result");let o=null;n.onChange=h;i.onChange=()=>{const e=i.get();if(!e)return;o=new Camera(e,{onFrame:async()=>{await l.send({image:e})},width:e.width,height:e.height});o.start()};const l=new FaceMesh({locateFile:e=>{return`https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${e}`}});l.setOptions({maxNumFaces:1,minDetectionConfidence:.5,minTrackingConfidence:.5});h();function h(){l.setOptions({maxNumFaces:1,minDetectionConfidence:.5,minTrackingConfidence:.5,refineLandmarks:n.get()})}l.onResults(t=>{let i=[];if(t&&t.multiFaceLandmarks){s.set(t.multiFaceLandmarks.length);if(t.multiFaceLandmarks[0])for(let e=0;e<t.multiFaceLandmarks[0].length;e++){i.push((t.multiFaceLandmarks[0][e].x-.5)*2,-1*(t.multiFaceLandmarks[0][e].y-.5)*2,0)}}else s.set(0);r.set(i);a.set(t)})};Ops.Extension.Mediapipe.MpFaceTracking.prototype=new CABLES.Op;CABLES.OPS["57df26fc-916c-469b-a343-83572c731025"]={f:Ops.Extension.Mediapipe.MpFaceTracking,objName:"Ops.Extension.Mediapipe.MpFaceTracking"};Ops.Gl.Shader.BasicMaterial_v3=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={basicmaterial_frag:"{{MODULES_HEAD}}\n\nIN vec2 texCoord;\n\n#ifdef VERTEX_COLORS\nIN vec4 vertCol;\n#endif\n\n#ifdef HAS_TEXTURES\n    IN vec2 texCoordOrig;\n    #ifdef HAS_TEXTURE_DIFFUSE\n        UNI sampler2D tex;\n    #endif\n    #ifdef HAS_TEXTURE_OPACITY\n        UNI sampler2D texOpacity;\n   #endif\n#endif\n\n\n\nvoid main()\n{\n    {{MODULE_BEGIN_FRAG}}\n    vec4 col=color;\n\n\n    #ifdef HAS_TEXTURES\n        vec2 uv=texCoord;\n\n        #ifdef CROP_TEXCOORDS\n            if(uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) discard;\n        #endif\n\n        #ifdef HAS_TEXTURE_DIFFUSE\n            col=texture(tex,uv);\n\n            #ifdef COLORIZE_TEXTURE\n                col.r*=color.r;\n                col.g*=color.g;\n                col.b*=color.b;\n            #endif\n        #endif\n        col.a*=color.a;\n        #ifdef HAS_TEXTURE_OPACITY\n            #ifdef TRANSFORMALPHATEXCOORDS\n                uv=texCoordOrig;\n            #endif\n            #ifdef ALPHA_MASK_IR\n                col.a*=1.0-texture(texOpacity,uv).r;\n            #endif\n            #ifdef ALPHA_MASK_IALPHA\n                col.a*=1.0-texture(texOpacity,uv).a;\n            #endif\n            #ifdef ALPHA_MASK_ALPHA\n                col.a*=texture(texOpacity,uv).a;\n            #endif\n            #ifdef ALPHA_MASK_LUMI\n                col.a*=dot(vec3(0.2126,0.7152,0.0722), texture(texOpacity,uv).rgb);\n            #endif\n            #ifdef ALPHA_MASK_R\n                col.a*=texture(texOpacity,uv).r;\n            #endif\n            #ifdef ALPHA_MASK_G\n                col.a*=texture(texOpacity,uv).g;\n            #endif\n            #ifdef ALPHA_MASK_B\n                col.a*=texture(texOpacity,uv).b;\n            #endif\n            // #endif\n        #endif\n    #endif\n\n    {{MODULE_COLOR}}\n\n    #ifdef DISCARDTRANS\n        if(col.a<0.2) discard;\n    #endif\n\n    #ifdef VERTEX_COLORS\n        col*=vertCol;\n    #endif\n\n    outColor = col;\n}\n",basicmaterial_vert:"\n{{MODULES_HEAD}}\n\nOUT vec2 texCoord;\nOUT vec2 texCoordOrig;\n\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\n\n#ifdef HAS_TEXTURES\n    UNI float diffuseRepeatX;\n    UNI float diffuseRepeatY;\n    UNI float texOffsetX;\n    UNI float texOffsetY;\n#endif\n\n#ifdef VERTEX_COLORS\n    in vec4 attrVertColor;\n    out vec4 vertCol;\n\n#endif\n\n\nvoid main()\n{\n    mat4 mMatrix=modelMatrix;\n    mat4 modelViewMatrix;\n\n    norm=attrVertNormal;\n    texCoordOrig=attrTexCoord;\n    texCoord=attrTexCoord;\n    #ifdef HAS_TEXTURES\n        texCoord.x=texCoord.x*diffuseRepeatX+texOffsetX;\n        texCoord.y=(1.0-texCoord.y)*diffuseRepeatY+texOffsetY;\n    #endif\n\n    #ifdef VERTEX_COLORS\n        vertCol=attrVertColor;\n    #endif\n\n    vec4 pos = vec4(vPosition, 1.0);\n\n    #ifdef BILLBOARD\n       vec3 position=vPosition;\n       modelViewMatrix=viewMatrix*modelMatrix;\n\n       gl_Position = projMatrix * modelViewMatrix * vec4((\n           position.x * vec3(\n               modelViewMatrix[0][0],\n               modelViewMatrix[1][0],\n               modelViewMatrix[2][0] ) +\n           position.y * vec3(\n               modelViewMatrix[0][1],\n               modelViewMatrix[1][1],\n               modelViewMatrix[2][1]) ), 1.0);\n    #endif\n\n    {{MODULE_VERTEX_POSITION}}\n\n    #ifndef BILLBOARD\n        modelViewMatrix=viewMatrix * mMatrix;\n\n        {{MODULE_VERTEX_MOVELVIEW}}\n\n    #endif\n\n    // mat4 modelViewMatrix=viewMatrix*mMatrix;\n\n    #ifndef BILLBOARD\n        // gl_Position = projMatrix * viewMatrix * modelMatrix * pos;\n        gl_Position = projMatrix * modelViewMatrix * pos;\n    #endif\n}\n"};const i=e.inTrigger("render");const n=e.outTrigger("trigger");const r=e.outObject("shader",null,"shader");r.ignoreValueSerialize=true;e.toWorkPortsNeedToBeLinked(i);e.toWorkShouldNotBeChild("Ops.Gl.TextureEffects.ImageCompose",CABLES.OP_PORT_TYPE_FUNCTION);const s=e.patch.cgl;const a=new CGL.Shader(s,"basicmaterialnew",this);a.addAttribute({type:"vec3",name:"vPosition"});a.addAttribute({type:"vec2",name:"attrTexCoord"});a.addAttribute({type:"vec3",name:"attrVertNormal",nameFrag:"norm"});a.addAttribute({type:"float",name:"attrVertIndex"});a.setModules(["MODULE_VERTEX_POSITION","MODULE_COLOR","MODULE_BEGIN_FRAG","MODULE_VERTEX_MOVELVIEW"]);a.setSource(t.basicmaterial_vert,t.basicmaterial_frag);r.setRef(a);i.onTriggered=C;const o=e.inValueSlider("r",Math.random());const l=e.inValueSlider("g",Math.random());const h=e.inValueSlider("b",Math.random());const f=e.inValueSlider("a",1);o.setUiAttribs({colorPick:true});const c=a.addUniformFrag("4f","color",o,l,h,f);a.uniformColorDiffuse=c;const u=e.inTexture("texture");let g=null;u.onChange=O;const d=e.inValueBool("colorizeTexture",false);const p=e.inValueBool("Vertex Colors",false);const _=e.inTexture("textureOpacity");let m=null;const E=e.inSwitch("Alpha Mask Source",["Luminance","R","G","B","A","1-A","1-R"],"Luminance");E.setUiAttribs({greyout:true});_.onChange=L;const T=e.inValueBool("Opacity TexCoords Transform",false);const A=e.inValueBool("Discard Transparent Pixels");const v=e.inValue("diffuseRepeatX",1),b=e.inValue("diffuseRepeatY",1),x=e.inValue("Tex Offset X",0),I=e.inValue("Tex Offset Y",0),R=e.inBool("Crop TexCoords",false);a.addUniformFrag("f","diffuseRepeatX",v);a.addUniformFrag("f","diffuseRepeatY",b);a.addUniformFrag("f","texOffsetX",x);a.addUniformFrag("f","texOffsetY",I);const S=e.inValueBool("billboard",false);E.onChange=S.onChange=A.onChange=T.onChange=R.onChange=p.onChange=d.onChange=y;e.setPortGroup("Color",[o,l,h,f]);e.setPortGroup("Color Texture",[u,p,d]);e.setPortGroup("Opacity",[_,E,A,T]);e.setPortGroup("Texture Transform",[v,b,x,I,R]);L();O();e.preRender=function(){a.bind();C()};function C(){if(!a)return;s.pushShader(a);a.popTextures();if(g&&u.get())a.pushTexture(g,u.get());if(m&&_.get())a.pushTexture(m,_.get());n.trigger();s.popShader()}function L(){if(_.get()){if(m!==null)return;a.removeUniform("texOpacity");a.define("HAS_TEXTURE_OPACITY");if(!m)m=new CGL.Uniform(a,"t","texOpacity")}else{a.removeUniform("texOpacity");a.removeDefine("HAS_TEXTURE_OPACITY");m=null}y()}function O(){if(u.get()){if(!a.hasDefine("HAS_TEXTURE_DIFFUSE"))a.define("HAS_TEXTURE_DIFFUSE");if(!g)g=new CGL.Uniform(a,"t","texDiffuse")}else{a.removeUniform("texDiffuse");a.removeDefine("HAS_TEXTURE_DIFFUSE");g=null}P()}function P(){const e=u.isLinked()||_.isLinked();v.setUiAttribs({greyout:!e});b.setUiAttribs({greyout:!e});x.setUiAttribs({greyout:!e});I.setUiAttribs({greyout:!e});d.setUiAttribs({greyout:!e});E.setUiAttribs({greyout:!_.get()});T.setUiAttribs({greyout:!_.get()});let t=true;t=u.get()&&!d.get();o.setUiAttribs({greyout:t});l.setUiAttribs({greyout:t});h.setUiAttribs({greyout:t})}function y(){a.toggleDefine("VERTEX_COLORS",p.get());a.toggleDefine("CROP_TEXCOORDS",R.get());a.toggleDefine("COLORIZE_TEXTURE",d.get());a.toggleDefine("TRANSFORMALPHATEXCOORDS",T.get());a.toggleDefine("DISCARDTRANS",A.get());a.toggleDefine("BILLBOARD",S.get());a.toggleDefine("ALPHA_MASK_ALPHA",E.get()=="A");a.toggleDefine("ALPHA_MASK_IALPHA",E.get()=="1-A");a.toggleDefine("ALPHA_MASK_IR",E.get()=="1-R");a.toggleDefine("ALPHA_MASK_LUMI",E.get()=="Luminance");a.toggleDefine("ALPHA_MASK_R",E.get()=="R");a.toggleDefine("ALPHA_MASK_G",E.get()=="G");a.toggleDefine("ALPHA_MASK_B",E.get()=="B");P()}};Ops.Gl.Shader.BasicMaterial_v3.prototype=new CABLES.Op;CABLES.OPS["ec55d252-3843-41b1-b731-0482dbd9e72b"]={f:Ops.Gl.Shader.BasicMaterial_v3,objName:"Ops.Gl.Shader.BasicMaterial_v3"};Ops.Extension.Mediapipe.FaceMesh=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const i=e.inObject("Geom"),n=e.inArray("Points"),r=e.outObject("result geom");n.onChange=()=>{const t=n.get();if(t&&h){for(let e=0;e<h.vertices.length;e+=3){h.vertices[e+0]=t[e+0];h.vertices[e+1]=t[e+1]}h.calculateNormals();r.set(null);r.set(h)}};const s=[0,-3.406404,5.979507,0,-1.126865,7.475604,0,-2.089024,6.058267,-.463928,.955357,6.633583,0,-.46317,7.58658,0,.365669,7.24287,0,2.473255,5.788627,-4.253081,2.577646,3.279702,0,4.019042,5.284764,0,4.885979,5.385258,0,8.261778,4.481535,0,-3.706811,5.864924,0,-3.918301,5.56943,0,-3.994436,5.219482,0,-4.5424,5.404754,0,-4.745577,5.529457,0,-5.019567,5.601448,0,-5.365123,5.535441,0,-6.149624,5.071372,0,-1.501095,7.112196,-.416106,-1.466449,6.447657,-7.08796,5.434801,.09962,-2.628639,2.035898,3.848121,-3.198363,1.985815,3.796952,-3.775151,2.039402,3.646194,-4.465819,2.42295,3.155168,-2.164289,2.189867,3.851822,-3.208229,3.223926,4.115822,-2.673803,3.205337,4.092203,-3.745193,3.165286,3.972409,-4.161018,3.059069,3.719554,-5.062006,1.934418,2.776093,-2.266659,-7.425768,4.389812,-4.445859,2.663991,3.173422,-7.21453,2.263009,.07315,-5.799793,2.349546,2.204059,-2.844939,-.720868,4.43313,-.711452,-3.329355,5.877044,-.606033,-3.924562,5.444923,-1.431615,-3.500953,5.496189,-1.91491,-3.803146,5.02893,-1.131043,-3.973937,5.189648,-1.563548,-4.082763,4.842263,-2.650112,-5.003649,4.188483,-.427049,-1.094134,7.360529,-.496396,-.475659,7.440358,-5.253307,3.881582,3.363159,-1.718698,.974609,4.558359,-1.608635,-.942516,5.814193,-1.651267,-.610868,5.581319,-4.765501,-.701554,3.534632,-.478306,.295766,7.101013,-3.734964,4.50823,4.550454,-4.588603,4.302037,4.048484,-6.279331,6.615427,1.42585,-1.220941,4.142165,5.106035,-2.193489,3.100317,4.000575,-3.102642,-4.352984,4.095905,-6.719682,-4.788645,-1.745401,-1.193824,-1.306795,5.737747,-.729766,-1.593712,5.833208,-2.456206,-4.342621,4.283884,-2.204823,-4.304508,4.162499,-4.985894,4.802461,3.751977,-1.592294,-1.257709,5.456949,-2.644548,4.524654,4.921559,-2.760292,5.100971,5.01599,-3.523964,8.005976,3.729163,-5.599763,5.71547,2.724259,-3.063932,6.566144,4.529981,-5.720968,4.254584,2.830852,-6.374393,4.78559,1.591691,-.672728,-3.688016,5.737804,-1.26256,-3.787691,5.417779,-1.732553,-3.952767,5.000579,-1.043625,-1.464973,5.662455,-2.321234,-4.329069,4.258156,-2.056846,-4.477671,4.520883,-2.153084,-4.276322,4.038093,-.946874,-1.035249,6.512274,-1.469132,-4.036351,4.604908,-1.02434,-3.989851,4.926693,-.533422,-3.993222,5.138202,-.76972,-6.095394,4.985883,-.699606,-5.29185,5.448304,-.669687,-4.94977,5.509612,-.630947,-4.695101,5.449371,-.583218,-4.517982,5.339869,-1.53717,-4.423206,4.74547,-1.6156,-4.475942,4.813632,-1.729053,-4.61868,4.854463,-1.838624,-4.828746,4.823737,-2.36825,-3.106237,4.868096,-7.542244,-1.049282,-2.431321,0,-1.724003,6.60139,-1.826614,-4.399531,4.399021,-1.929558,-4.411831,4.497052,-.597442,-2.013686,5.866456,-1.405627,-1.714196,5.241087,-.662449,-1.819321,5.863759,-2.34234,.572222,4.294303,-3.327324,.104863,4.11386,-1.726175,-.919165,5.273355,-5.133204,7.485602,2.660442,-4.538641,6.319907,3.683424,-3.986562,5.109487,4.466315,-2.169681,-5.440433,4.455874,-1.395634,5.011963,5.316032,-1.6195,6.599217,4.921106,-1.891399,8.236377,4.274997,-4.195832,2.235205,3.375099,-5.733342,1.411738,2.431726,-1.859887,2.355757,3.843181,-4.988612,3.074654,3.083858,-1.303263,1.416453,4.831091,-1.305757,-.672779,6.415959,-6.46517,.937119,1.689873,-5.258659,.945811,2.974312,-4.432338,.722096,3.522615,-3.300681,.861641,3.872784,-2.430178,1.131492,4.039035,-1.820731,1.467954,4.224124,-.563221,2.307693,5.566789,-6.338145,-.529279,1.881175,-5.587698,3.208071,2.687839,-.242624,-1.462857,7.071491,-1.611251,.339326,4.895421,-7.743095,2.364999,-2.005167,-1.391142,1.851048,4.448999,-1.785794,-.978284,4.85047,-4.670959,2.664461,3.084075,-1.33397,-.283761,6.097047,-7.270895,-2.890917,-2.252455,-1.856432,2.585245,3.757904,-.923388,.073076,6.671944,-5.000589,-6.135128,1.892523,-5.085276,-7.17859,.714711,-7.159291,-.81182,-.072044,-5.843051,-5.248023,.924091,-6.847258,3.662916,.724695,-2.412942,-8.258853,4.119213,-.179909,-1.689864,6.573301,-2.103655,-.163946,4.566119,-6.407571,2.236021,1.560843,-3.670075,2.360153,3.63523,-3.177186,2.294265,3.775704,-2.196121,-4.598322,4.479786,-6.234883,-1.94443,1.663542,-1.292924,-9.29592,4.094063,-3.210651,-8.533278,2.802001,-4.068926,-7.993109,1.925119,0,6.54539,5.027311,0,-9.403378,4.264492,-2.724032,2.315802,3.777151,-2.28846,2.398891,3.697603,-1.998311,2.496547,3.689148,-6.13004,3.399261,2.038516,-2.28846,2.886504,3.775031,-2.724032,2.96181,3.871767,-3.177186,2.964136,3.876973,-3.670075,2.927714,3.724325,-4.018389,2.857357,3.482983,-7.555811,4.106811,-.991917,-4.018389,2.483695,3.440898,0,-2.521945,5.932265,-1.776217,-2.683946,5.213116,-1.222237,-1.182444,5.952465,-.731493,-2.536683,5.815343,0,3.271027,5.236015,-4.135272,-6.996638,2.67197,-3.311811,-7.660815,3.382963,-1.313701,-8.639995,4.702456,-5.940524,-6.223629,-.631468,-1.998311,2.743838,3.74403,-.901447,1.236992,5.754256,0,-8.765243,4.891441,-2.308977,-8.974196,3.60907,-6.954154,-2.439843,-.131163,-1.098819,-4.458788,5.120727,-1.181124,-4.579996,5.189564,-1.255818,-4.787901,5.237051,-1.325085,-5.106507,5.20501,-1.546388,-5.819392,4.757893,-1.953754,-4.183892,4.431713,-2.117802,-4.137093,4.555096,-2.285339,-4.051196,4.582438,-2.85016,-3.66572,4.484994,-5.278538,-2.238942,2.861224,-.946709,1.907628,5.196779,-1.314173,3.104912,4.231404,-1.78,2.86,3.881555,-1.84511,-4.09888,4.247264,-5.436187,-4.030482,2.109852,-.766444,3.182131,4.861453,-1.938616,-6.61441,4.521085,0,1.059413,6.774605,-.516573,1.583572,6.148363,0,1.728369,6.31675,-1.246815,.230297,5.681036,0,-7.942194,5.181173,0,-6.991499,5.153478,-.997827,-6.930921,4.979576,-3.288807,-5.382514,3.795752,-2.311631,-1.566237,4.590085,-2.68025,-6.111567,4.096152,-3.832928,-1.537326,4.137731,-2.96186,-2.274215,4.440943,-4.386901,-2.683286,3.643886,-1.217295,-7.834465,4.969286,-1.542374,-.136843,5.201008,-3.878377,-6.041764,3.311079,-3.084037,-6.809842,3.814195,-3.747321,-4.503545,3.726453,-6.094129,-3.205991,1.473482,-4.588995,-4.728726,2.983221,-6.583231,-3.941269,.070268,-3.49258,-3.19582,4.130198,-1.255543,.802341,5.307551,-1.126122,-.933602,6.538785,-1.443109,-1.142774,5.905127,-.923043,-.529042,7.003423,-1.755386,3.529117,4.327696,-2.632589,3.713828,4.364629,-3.388062,3.721976,4.309028,-4.075766,3.675413,4.076063,-4.62291,3.474691,3.646321,-5.171755,2.535753,2.670867,-7.297331,.763172,-.048769,-4.706828,1.651,3.109532,-4.071712,1.476821,3.476944,-3.269817,1.470659,3.731945,-2.527572,1.617311,3.865444,-1.970894,1.858505,3.961782,-1.579543,2.097941,4.084996,-7.664182,.673132,-2.435867,-1.397041,-1.340139,5.630378,-.884838,.65874,6.233232,-.767097,-.968035,7.077932,-.460213,-1.334106,6.787447,-.748618,-1.067994,6.798303,-1.236408,-1.585568,5.48049,-.387306,-1.40999,6.957705,-.319925,-1.607931,6.508676,-1.639633,2.556298,3.863736,-1.255645,2.467144,4.2038,-1.031362,2.382663,4.615849,-4.253081,2.772296,3.315305,-4.53,2.91,3.339685,.463928,.955357,6.633583,4.253081,2.577646,3.279702,.416106,-1.466449,6.447657,7.08796,5.434801,.09962,2.628639,2.035898,3.848121,3.198363,1.985815,3.796952,3.775151,2.039402,3.646194,4.465819,2.42295,3.155168,2.164289,2.189867,3.851822,3.208229,3.223926,4.115822,2.673803,3.205337,4.092203,3.745193,3.165286,3.972409,4.161018,3.059069,3.719554,5.062006,1.934418,2.776093,2.266659,-7.425768,4.389812,4.445859,2.663991,3.173422,7.21453,2.263009,.07315,5.799793,2.349546,2.204059,2.844939,-.720868,4.43313,.711452,-3.329355,5.877044,.606033,-3.924562,5.444923,1.431615,-3.500953,5.496189,1.91491,-3.803146,5.02893,1.131043,-3.973937,5.189648,1.563548,-4.082763,4.842263,2.650112,-5.003649,4.188483,.427049,-1.094134,7.360529,.496396,-.475659,7.440358,5.253307,3.881582,3.363159,1.718698,.974609,4.558359,1.608635,-.942516,5.814193,1.651267,-.610868,5.581319,4.765501,-.701554,3.534632,.478306,.295766,7.101013,3.734964,4.50823,4.550454,4.588603,4.302037,4.048484,6.279331,6.615427,1.42585,1.220941,4.142165,5.106035,2.193489,3.100317,4.000575,3.102642,-4.352984,4.095905,6.719682,-4.788645,-1.745401,1.193824,-1.306795,5.737747,.729766,-1.593712,5.833208,2.456206,-4.342621,4.283884,2.204823,-4.304508,4.162499,4.985894,4.802461,3.751977,1.592294,-1.257709,5.456949,2.644548,4.524654,4.921559,2.760292,5.100971,5.01599,3.523964,8.005976,3.729163,5.599763,5.71547,2.724259,3.063932,6.566144,4.529981,5.720968,4.254584,2.830852,6.374393,4.78559,1.591691,.672728,-3.688016,5.737804,1.26256,-3.787691,5.417779,1.732553,-3.952767,5.000579,1.043625,-1.464973,5.662455,2.321234,-4.329069,4.258156,2.056846,-4.477671,4.520883,2.153084,-4.276322,4.038093,.946874,-1.035249,6.512274,1.469132,-4.036351,4.604908,1.02434,-3.989851,4.926693,.533422,-3.993222,5.138202,.76972,-6.095394,4.985883,.699606,-5.29185,5.448304,.669687,-4.94977,5.509612,.630947,-4.695101,5.449371,.583218,-4.517982,5.339869,1.53717,-4.423206,4.74547,1.6156,-4.475942,4.813632,1.729053,-4.61868,4.854463,1.838624,-4.828746,4.823737,2.36825,-3.106237,4.868096,7.542244,-1.049282,-2.431321,1.826614,-4.399531,4.399021,1.929558,-4.411831,4.497052,.597442,-2.013686,5.866456,1.405627,-1.714196,5.241087,.662449,-1.819321,5.863759,2.34234,.572222,4.294303,3.327324,.104863,4.11386,1.726175,-.919165,5.273355,5.133204,7.485602,2.660442,4.538641,6.319907,3.683424,3.986562,5.109487,4.466315,2.169681,-5.440433,4.455874,1.395634,5.011963,5.316032,1.6195,6.599217,4.921106,1.891399,8.236377,4.274997,4.195832,2.235205,3.375099,5.733342,1.411738,2.431726,1.859887,2.355757,3.843181,4.988612,3.074654,3.083858,1.303263,1.416453,4.831091,1.305757,-.672779,6.415959,6.46517,.937119,1.689873,5.258659,.945811,2.974312,4.432338,.722096,3.522615,3.300681,.861641,3.872784,2.430178,1.131492,4.039035,1.820731,1.467954,4.224124,.563221,2.307693,5.566789,6.338145,-.529279,1.881175,5.587698,3.208071,2.687839,.242624,-1.462857,7.071491,1.611251,.339326,4.895421,7.743095,2.364999,-2.005167,1.391142,1.851048,4.448999,1.785794,-.978284,4.85047,4.670959,2.664461,3.084075,1.33397,-.283761,6.097047,7.270895,-2.890917,-2.252455,1.856432,2.585245,3.757904,.923388,.073076,6.671944,5.000589,-6.135128,1.892523,5.085276,-7.17859,.714711,7.159291,-.81182,-.072044,5.843051,-5.248023,.924091,6.847258,3.662916,.724695,2.412942,-8.258853,4.119213,.179909,-1.689864,6.573301,2.103655,-.163946,4.566119,6.407571,2.236021,1.560843,3.670075,2.360153,3.63523,3.177186,2.294265,3.775704,2.196121,-4.598322,4.479786,6.234883,-1.94443,1.663542,1.292924,-9.29592,4.094063,3.210651,-8.533278,2.802001,4.068926,-7.993109,1.925119,2.724032,2.315802,3.777151,2.28846,2.398891,3.697603,1.998311,2.496547,3.689148,6.13004,3.399261,2.038516,2.28846,2.886504,3.775031,2.724032,2.96181,3.871767,3.177186,2.964136,3.876973,3.670075,2.927714,3.724325,4.018389,2.857357,3.482983,7.555811,4.106811,-.991917,4.018389,2.483695,3.440898,1.776217,-2.683946,5.213116,1.222237,-1.182444,5.952465,.731493,-2.536683,5.815343,4.135272,-6.996638,2.67197,3.311811,-7.660815,3.382963,1.313701,-8.639995,4.702456,5.940524,-6.223629,-.631468,1.998311,2.743838,3.74403,.901447,1.236992,5.754256,2.308977,-8.974196,3.60907,6.954154,-2.439843,-.131163,1.098819,-4.458788,5.120727,1.181124,-4.579996,5.189564,1.255818,-4.787901,5.237051,1.325085,-5.106507,5.20501,1.546388,-5.819392,4.757893,1.953754,-4.183892,4.431713,2.117802,-4.137093,4.555096,2.285339,-4.051196,4.582438,2.85016,-3.66572,4.484994,5.278538,-2.238942,2.861224,.946709,1.907628,5.196779,1.314173,3.104912,4.231404,1.78,2.86,3.881555,1.84511,-4.09888,4.247264,5.436187,-4.030482,2.109852,.766444,3.182131,4.861453,1.938616,-6.61441,4.521085,.516573,1.583572,6.148363,1.246815,.230297,5.681036,.997827,-6.930921,4.979576,3.288807,-5.382514,3.795752,2.311631,-1.566237,4.590085,2.68025,-6.111567,4.096152,3.832928,-1.537326,4.137731,2.96186,-2.274215,4.440943,4.386901,-2.683286,3.643886,1.217295,-7.834465,4.969286,1.542374,-.136843,5.201008,3.878377,-6.041764,3.311079,3.084037,-6.809842,3.814195,3.747321,-4.503545,3.726453,6.094129,-3.205991,1.473482,4.588995,-4.728726,2.983221,6.583231,-3.941269,.070268,3.49258,-3.19582,4.130198,1.255543,.802341,5.307551,1.126122,-.933602,6.538785,1.443109,-1.142774,5.905127,.923043,-.529042,7.003423,1.755386,3.529117,4.327696,2.632589,3.713828,4.364629,3.388062,3.721976,4.309028,4.075766,3.675413,4.076063,4.62291,3.474691,3.646321,5.171755,2.535753,2.670867,7.297331,.763172,-.048769,4.706828,1.651,3.109532,4.071712,1.476821,3.476944,3.269817,1.470659,3.731945,2.527572,1.617311,3.865444,1.970894,1.858505,3.961782,1.579543,2.097941,4.084996,7.664182,.673132,-2.435867,1.397041,-1.340139,5.630378,.884838,.65874,6.233232,.767097,-.968035,7.077932,.460213,-1.334106,6.787447,.748618,-1.067994,6.798303,1.236408,-1.585568,5.48049,.387306,-1.40999,6.957705,.319925,-1.607931,6.508676,1.639633,2.556298,3.863736,1.255645,2.467144,4.2038,1.031362,2.382663,4.615849,4.253081,2.772296,3.315305,4.53,2.91,3.339685];const a=[174,156,134,247,34,8,383,399,363,264,467,250,309,416,325,79,96,192,357,390,265,128,35,163,369,265,390,140,163,35,268,1,303,38,73,1,12,303,1,12,1,73,350,452,351,121,122,232,453,351,452,233,232,122,268,303,270,38,40,73,304,270,303,74,73,40,358,344,351,129,122,115,278,351,344,48,115,122,351,453,358,122,129,233,454,358,453,234,233,129,300,334,298,70,68,105,333,298,334,104,105,68,176,153,397,176,172,153,378,397,153,149,153,172,382,385,383,155,156,158,399,383,385,174,158,156,281,348,331,51,102,119,349,331,348,120,119,102,270,304,271,40,41,74,305,271,304,75,74,41,10,337,152,10,152,108,338,152,337,109,108,152,345,279,361,116,132,49,280,361,279,50,49,132,263,432,419,33,195,212,425,419,432,205,212,195,305,409,271,75,41,185,410,271,409,186,185,41,273,311,408,43,184,81,416,408,311,192,81,184,323,271,411,93,187,41,410,411,271,186,41,187,348,450,349,119,120,230,451,349,450,231,230,120,435,433,431,215,211,213,423,431,433,203,213,211,314,315,19,84,19,85,18,19,315,18,85,19,308,376,307,78,77,147,292,307,376,62,147,77,260,388,261,30,31,161,389,261,388,162,161,31,287,415,385,57,158,191,399,385,415,174,191,158,419,425,407,195,183,205,336,407,425,107,205,183,368,417,365,139,136,193,435,365,417,215,193,136,392,424,328,166,99,204,359,328,424,130,204,99,299,302,285,69,55,72,252,285,302,22,72,55,5,276,6,5,6,46,282,6,276,52,46,6,255,374,254,25,24,145,375,254,374,146,145,24,321,322,308,91,78,92,376,308,322,147,92,78,281,426,412,51,188,206,428,412,426,208,206,188,422,314,201,202,201,84,19,201,314,19,84,201,336,322,407,107,183,92,406,407,322,182,92,183,406,322,405,182,181,92,321,405,322,91,92,181,18,315,17,18,17,85,316,17,315,86,85,17,426,267,427,206,207,37,424,427,267,204,37,207,370,397,401,141,177,172,378,401,397,149,172,177,392,270,323,166,93,40,271,323,270,41,40,93,418,466,414,194,190,246,465,414,466,245,246,190,258,259,387,28,160,29,386,387,259,159,29,160,261,389,468,31,248,162,467,468,389,247,162,248,249,457,420,4,197,237,400,420,457,175,237,197,334,299,333,105,104,69,285,333,299,55,69,104,286,9,418,56,194,9,169,418,9,169,9,194,341,262,347,112,118,32,449,347,262,229,32,118,286,418,442,56,222,194,414,442,418,190,194,222,328,461,327,99,98,241,329,327,461,100,241,98,278,356,330,48,101,127,372,330,356,143,127,101,310,393,439,80,219,167,440,439,393,220,167,219,382,383,257,155,27,156,342,257,383,113,156,27,361,280,421,132,199,50,430,421,280,210,50,199,366,365,380,137,151,136,395,380,365,170,136,151,356,278,438,127,218,48,344,438,278,115,48,218,444,445,283,224,53,225,284,283,445,54,225,53,282,276,364,52,135,46,441,364,276,221,46,135,432,263,396,212,171,33,370,396,263,141,33,171,338,300,339,109,110,70,298,339,300,68,70,110,336,274,322,107,92,44,376,322,274,147,44,92,349,451,350,120,121,231,452,350,451,232,231,121,468,360,343,248,114,131,447,343,360,227,131,114,283,284,335,53,106,54,294,335,284,64,54,106,251,459,463,21,243,239,462,463,459,242,239,243,277,354,301,47,71,125,384,301,354,157,125,71,326,293,325,97,96,63,309,325,293,79,63,96,284,277,294,54,64,47,301,294,277,71,47,64,448,265,346,228,117,35,373,346,265,144,35,117,353,346,347,124,118,117,341,347,346,112,117,118,2,20,275,2,45,20,355,275,20,126,20,45,249,282,457,4,237,52,364,457,282,135,52,237,426,427,428,206,208,207,437,428,427,217,207,208,381,382,253,154,23,155,257,253,382,27,155,23,392,394,270,166,40,168,268,270,394,38,168,40,200,429,201,200,201,209,422,201,429,202,209,201,331,330,267,102,37,101,372,267,330,143,101,37,423,433,274,203,44,213,288,274,433,58,213,44,291,251,329,61,100,21,463,329,251,243,21,100,259,287,386,29,159,57,385,386,287,158,57,159,343,447,354,114,125,227,266,354,447,36,227,125,258,387,260,28,30,160,388,260,387,161,160,30,431,423,432,211,212,203,425,432,423,205,203,212,446,343,277,226,47,114,354,277,343,125,114,47,425,423,336,205,107,203,274,336,423,44,203,107,307,293,308,77,78,63,326,308,293,97,63,78,367,448,353,138,124,228,346,353,448,117,228,124,303,269,304,73,74,39,272,304,269,42,39,74,372,359,267,143,37,130,424,267,359,204,130,37,328,295,461,99,241,65,456,461,295,236,65,241,295,332,279,65,49,103,280,279,332,50,103,49,304,272,305,74,75,42,273,305,272,43,42,75,428,437,435,208,215,217,433,435,437,213,217,215,305,273,409,75,185,43,408,409,273,184,43,185,395,431,396,170,171,211,432,396,431,212,211,171,396,370,379,171,150,141,401,379,370,177,141,150,297,335,300,67,70,106,334,300,335,105,106,70,418,169,352,194,123,169,7,352,169,7,169,123,281,412,353,51,124,188,377,353,412,148,188,124,320,321,326,90,97,91,308,326,321,78,91,97,286,296,337,56,108,66,297,337,296,67,66,108,405,321,404,181,180,91,320,404,321,90,91,180,331,349,330,102,101,120,350,330,349,121,120,101,335,294,334,106,105,64,299,334,294,69,64,105,324,455,367,94,138,235,448,367,455,228,235,138,17,316,16,17,16,86,317,16,316,87,86,16,430,280,359,210,130,50,332,359,280,103,50,130,16,317,15,16,15,87,318,15,317,88,87,15,9,286,10,9,10,56,337,10,286,108,56,10,330,350,278,101,48,121,351,278,350,122,121,48,253,254,381,23,154,24,375,381,254,146,24,154,403,404,319,179,89,180,320,319,404,90,180,89,352,7,420,123,197,7,198,420,7,198,7,197,325,319,326,96,97,89,320,326,319,90,89,97,398,368,366,173,137,139,365,366,368,136,139,137,289,436,398,59,173,216,368,398,436,139,216,173,439,440,345,219,116,220,279,345,440,49,220,116,272,312,273,42,43,82,311,273,312,81,82,43,6,282,196,6,196,52,249,196,282,4,52,196,274,288,376,44,147,58,292,376,288,62,58,147,397,429,176,172,176,209,200,176,429,200,209,176,269,313,272,39,42,83,312,272,313,82,83,42,445,446,284,225,54,226,277,284,446,47,226,54,255,340,374,25,145,111,391,374,340,164,111,145,296,283,297,66,67,53,335,297,283,106,53,67,347,449,348,118,119,229,450,348,449,230,229,119,455,357,448,235,228,128,265,448,357,35,128,228,337,297,338,108,109,67,300,338,297,70,67,109,152,338,11,152,11,109,339,11,338,110,109,11,279,440,295,49,65,220,456,295,440,236,220,65,408,416,293,184,63,192,309,293,416,79,192,63,359,372,430,130,210,143,356,430,372,127,143,210,346,373,341,117,112,144,266,341,373,36,144,112,389,391,467,162,247,164,250,467,391,8,164,247,353,347,281,124,51,118,348,281,347,119,118,51,296,443,283,66,53,223,444,283,443,224,223,53,20,95,355,20,126,95,371,355,95,142,95,126,296,286,443,66,223,56,442,443,286,222,56,223,420,198,249,197,4,198,196,249,198,196,198,4,360,264,256,131,26,34,250,256,264,8,34,26,276,275,441,46,221,45,458,441,275,238,45,221,301,384,302,71,72,157,369,302,384,140,157,72,418,352,466,194,246,123,413,466,352,189,123,246,467,264,468,247,248,34,360,468,264,131,34,248,390,252,369,163,140,22,302,369,252,72,22,140,375,387,381,146,154,160,386,381,387,159,160,154,380,395,379,151,150,170,396,379,395,171,170,150,352,420,413,123,189,197,400,413,420,175,197,189,427,323,437,207,217,93,411,437,323,187,93,217,388,374,389,161,162,145,391,389,374,164,145,162,394,327,165,168,165,98,3,165,327,3,98,165,355,371,462,126,242,142,463,462,371,243,142,242,1,268,165,1,165,38,394,165,268,168,38,165,12,13,303,12,73,13,269,303,13,39,13,73,387,375,388,160,161,146,374,388,375,145,146,161,13,14,269,13,39,14,313,269,14,83,14,39,294,301,299,64,69,71,302,299,301,72,71,69,341,266,262,112,32,36,447,262,266,227,36,32,381,386,382,154,155,159,385,382,386,158,159,155,281,331,426,51,206,102,267,426,331,37,102,206,424,392,427,204,207,166,323,427,392,93,166,207,430,356,421,210,199,127,438,421,356,218,127,199,392,328,394,166,168,99,327,394,328,98,99,168,458,439,441,238,221,219,345,441,439,116,219,221,383,363,342,156,113,134,464,342,363,244,134,113,458,462,460,238,240,242,459,460,462,239,242,240,435,431,365,215,136,211,395,365,431,170,211,136,415,464,399,191,174,244,363,399,464,134,244,174,263,429,370,33,141,209,397,370,429,172,209,141,458,275,462,238,242,45,355,462,275,126,45,242,317,404,318,87,88,180,403,318,404,179,180,88,316,405,317,86,87,181,404,317,405,180,181,87,315,406,316,85,86,182,405,316,406,181,182,86,314,407,315,84,85,183,406,315,407,182,183,85,419,407,422,195,202,183,314,422,407,84,183,202,367,402,324,138,94,178,362,324,402,133,178,94,409,408,307,185,77,184,293,307,408,63,184,77,409,307,410,185,186,77,292,410,307,62,77,186,411,410,288,187,58,186,292,288,410,62,186,58,437,411,433,217,213,187,288,433,411,58,187,213,435,417,428,215,208,193,412,428,417,188,193,208,265,369,373,35,144,140,384,373,369,157,140,144,458,460,439,238,219,240,310,439,460,80,240,219,353,377,367,124,138,148,402,367,377,178,148,138,5,2,276,5,46,2,275,276,2,45,2,46,429,263,422,209,202,33,419,422,263,195,33,202,328,359,295,99,65,130,332,295,359,103,130,65,368,436,417,139,193,216,434,417,436,214,216,193,456,440,290,236,60,220,393,290,440,167,220,60,329,463,327,100,98,243,371,327,463,142,243,98,327,371,3,98,3,142,95,3,371,95,142,3,461,456,306,241,76,236,290,306,456,60,236,76,449,340,450,229,230,111,255,450,340,25,111,230,262,447,256,32,26,227,360,256,447,131,227,26,450,255,451,230,231,25,254,451,255,24,25,231,451,254,452,231,232,24,253,452,254,23,24,232,452,253,453,232,233,23,257,453,253,27,23,233,257,342,453,27,233,113,454,453,342,234,113,233,414,465,415,190,191,245,464,415,465,244,245,191,442,414,287,222,57,190,415,287,414,191,190,57,442,287,443,222,223,57,259,443,287,29,57,223,443,259,444,223,224,29,258,444,259,28,29,224,445,444,260,225,30,224,258,260,444,28,224,30,260,261,445,30,225,31,446,445,261,226,31,225,261,468,446,31,226,248,343,446,468,114,248,226,251,310,459,21,239,80,460,459,310,240,80,239,291,306,393,61,167,76,290,393,306,60,76,167,461,306,329,241,100,76,291,329,306,61,76,100,377,434,402,148,178,214,436,402,434,216,214,178,251,291,310,21,80,61,393,310,291,167,61,80,412,417,377,188,148,193,434,377,417,214,193,148,342,464,454,113,234,244,465,454,464,245,244,234,454,465,358,234,129,245,466,358,465,246,245,129,413,344,466,189,246,115,358,466,344,129,115,246,438,344,400,218,175,115,413,400,344,189,115,175,364,441,361,135,132,221,345,361,441,116,221,132,457,421,400,237,175,199,438,400,421,218,199,175,457,364,421,237,199,135,361,421,364,132,135,199,362,402,289,133,59,178,436,289,402,216,178,59,354,266,384,125,157,36,373,384,266,144,36,157,256,250,340,26,111,8,391,340,250,164,8,111,262,256,449,32,229,26,340,449,256,111,26,229,15,318,14,15,14,88,313,14,318,83,88,14,318,403,313,88,83,179,312,313,403,82,179,83,403,319,312,179,82,89,311,312,319,81,89,82,319,325,311,89,81,96,416,311,325,192,96,81];let o=[.499977,.652534,.500026,.5474870000000001,.499974,.602372,.482113,.47197900000000004,.500151,.527156,.49991,.49825299999999995,.499523,.40106200000000003,.289712,.380764,.499955,.31239799999999995,.499987,.269919,.500023,.10704999999999998,.500023,.666234,.500016,.679224,.500023,.692348,.499977,.6952780000000001,.499977,.7059340000000001,.499977,.7193849999999999,.499977,.737019,.499968,.781371,.499816,.562981,.473773,.5739099999999999,.104907,.25414099999999995,.36593,.40957600000000005,.338758,.413025,.31112,.40946000000000005,.274658,.389131,.393362,.403706,.345234,.34401099999999996,.370094,.34607600000000005,.319322,.34726500000000005,.297903,.353591,.247792,.41081,.396889,.842755,.280098,.37560000000000004,.10631,.399956,.209925,.39135299999999995,.355808,.5344059999999999,.471751,.650404,.474155,.680192,.439785,.6572290000000001,.414617,.666541,.450374,.6808609999999999,.428771,.6826909999999999,.374971,.727805,.486717,.5476289999999999,.485301,.5273950000000001,.257765,.31449000000000005,.401223,.455172,.429819,.5486150000000001,.421352,.533741,.276896,.532057,.48337,.499587,.337212,.282883,.296392,.29324300000000003,.169295,.19381400000000004,.44758,.30261000000000005,.39239,.353888,.35449,.6967840000000001,.067305,.730105,.442739,.5728260000000001,.457098,.584792,.381974,.6947110000000001,.392389,.694203,.277076,.27193199999999995,.422552,.563233,.385919,.28136399999999995,.383103,.25583999999999996,.331431,.11971399999999999,.229924,.23200299999999996,.364501,.189114,.229622,.29954099999999995,.173287,.278748,.472879,.6661980000000001,.446828,.668527,.422762,.67389,.445308,.580066,.388103,.693961,.403039,.70654,.403629,.693953,.460042,.557139,.431158,.692366,.452182,.692366,.475387,.692366,.465828,.77919,.472329,.736226,.473087,.717857,.473122,.704626,.473033,.6952780000000001,.427942,.6952780000000001,.426479,.70354,.423162,.711846,.418309,.720063,.390095,.639573,.013954,.5600339999999999,.499914,.580147,.4132,.6954,.409626,.701823,.46808,.6015349999999999,.422729,.585985,.46308,.593784,.37212,.473414,.334562,.496073,.411671,.5469649999999999,.242176,.14767600000000003,.290777,.20144600000000001,.327338,.25652699999999995,.39951,.748921,.441728,.261676,.429765,.18783399999999995,.412198,.10890100000000003,.288955,.398952,.218937,.435411,.412782,.39897000000000005,.257135,.35544,.427685,.43796100000000004,.44834,.5369360000000001,.17856,.457554,.247308,.457194,.286267,.46767499999999995,.332828,.460712,.368756,.447207,.398964,.432655,.47641,.405806,.189241,.5239240000000001,.228962,.348951,.490726,.5624009999999999,.40467,.48513300000000004,.019469,.40156400000000003,.426243,.420431,.396993,.548797,.26647,.376977,.439121,.518958,.032314,.6443570000000001,.419054,.387155,.462783,.505747,.238979,.779745,.198221,.8319380000000001,.10755,.540755,.18361,.7402569999999999,.13441,.33368299999999995,.385764,.883154,.490967,.579378,.382385,.5085729999999999,.174399,.397671,.318785,.396235,.343364,.400597,.3961,.710217,.187885,.588538,.430987,.944065,.318993,.898285,.266248,.8697010000000001,.500023,.19057599999999997,.499977,.954453,.36617,.398822,.393207,.395537,.410373,.39108,.194993,.342102,.388665,.36228400000000005,.365962,.35597100000000004,.343364,.35535700000000003,.318785,.35834,.301415,.36315600000000003,.058133,.319076,.301415,.38744900000000004,.499988,.6184339999999999,.415838,.624196,.445682,.5660769999999999,.465844,.620641,.499923,.35152399999999995,.288719,.8199460000000001,.335279,.85282,.440512,.902419,.128294,.791941,.408772,.37389399999999995,.455607,.451801,.499877,.90899,.375437,.924192,.11421,.615022,.448662,.6952780000000001,.44802,.7046319999999999,.447112,.715808,.444832,.7307939999999999,.430012,.766809,.406787,.685673,.400738,.6810689999999999,.3924,.6777029999999999,.367856,.6639189999999999,.247923,.601333,.45277,.42084999999999995,.436392,.35988699999999996,.416164,.368714,.413386,.692366,.228018,.6835720000000001,.468268,.35267099999999996,.411362,.804327,.499989,.46982500000000005,.479154,.442654,.499974,.43963699999999994,.432112,.49358900000000006,.499886,.8669169999999999,.499913,.8217289999999999,.456549,.8192010000000001,.344549,.745439,.378909,.57401,.374293,.780185,.319688,.570738,.357155,.60427,.295284,.6215809999999999,.44775,.8624769999999999,.410986,.508723,.313951,.775308,.354128,.812553,.324548,.703993,.189096,.6463,.279777,.714658,.133823,.682701,.336768,.644733,.429884,.466522,.455528,.5486230000000001,.437114,.5588960000000001,.467288,.529925,.414712,.33521999999999996,.377046,.322778,.344108,.32015099999999996,.312876,.32233199999999995,.283526,.33319,.241246,.38278599999999996,.102986,.46876300000000004,.267612,.42456000000000005,.297879,.433176,.333434,.433878,.366427,.42611600000000005,.396012,.41669599999999996,.420121,.41022800000000004,.007561,.480777,.432949,.569518,.458639,.479089,.473466,.545744,.476088,.56383,.468472,.555057,.433991,.582362,.483518,.5629839999999999,.482483,.5778490000000001,.42645,.389799,.438999,.39649500000000004,.450067,.40043399999999996,.289712,.36825300000000005,.27667,.36337299999999995,.517862,.47194800000000003,.710288,.380764,.526227,.5739099999999999,.895093,.25414099999999995,.63407,.40957600000000005,.661242,.413025,.68888,.40946000000000005,.725342,.389131,.60663,.403705,.654766,.34401099999999996,.629906,.34607600000000005,.680678,.34726500000000005,.702097,.353591,.752212,.410805,.602918,.842863,.719902,.37560000000000004,.893693,.39996,.790082,.391354,.643998,.5344880000000001,.528249,.650404,.52585,.680191,.560215,.6572290000000001,.585384,.666541,.549626,.6808609999999999,.571228,.6826920000000001,.624852,.728099,.51305,.547282,.515097,.527252,.742247,.314507,.598631,.454979,.570338,.548575,.578632,.533623,.723087,.532054,.516446,.49963900000000006,.662801,.282918,.703624,.29327099999999995,.830705,.19381400000000004,.552386,.30256799999999995,.60761,.353888,.645429,.696707,.932695,.730105,.557261,.5728260000000001,.542902,.584792,.618026,.6947110000000001,.607591,.694203,.722943,.27196299999999995,.577414,.563167,.614083,.28138700000000005,.616907,.25588599999999995,.668509,.11991399999999997,.770092,.23202100000000003,.635536,.189249,.770391,.29955600000000004,.826722,.278755,.527121,.6661980000000001,.553172,.668527,.577238,.67389,.554692,.580066,.611897,.693961,.596961,.70654,.596371,.693953,.539958,.557139,.568842,.692366,.547818,.692366,.524613,.692366,.53409,.779141,.527671,.736226,.526913,.717857,.526878,.704626,.526967,.6952780000000001,.572058,.6952780000000001,.573521,.70354,.576838,.711846,.581691,.720063,.609945,.63991,.986046,.5600339999999999,.5868,.6954,.590372,.701823,.531915,.601537,.577268,.585935,.536915,.5937859999999999,.627543,.473352,.665586,.49595100000000003,.588354,.546862,.757824,.14767600000000003,.70925,.20150800000000002,.672684,.25658099999999995,.600409,.7490049999999999,.558266,.261672,.570304,.187871,.588166,.10904400000000003,.711045,.398952,.78107,.43540500000000004,.587247,.39893199999999995,.74287,.35544600000000004,.572156,.43765200000000004,.551868,.53657,.821442,.45755599999999996,.752702,.457182,.713757,.467627,.667113,.460673,.631101,.44715400000000005,.600862,.432473,.523481,.40562699999999996,.810748,.523926,.771046,.348959,.509127,.562718,.595293,.485024,.980531,.40156400000000003,.5735,.42000000000000004,.602995,.5486880000000001,.73353,.376977,.560611,.5190170000000001,.967686,.6443570000000001,.580985,.38715999999999995,.537728,.505385,.760966,.779753,.801779,.8319380000000001,.892441,.540761,.816351,.7402599999999999,.865595,.33368699999999996,.614074,.883246,.508953,.579438,.617942,.508316,.825608,.397675,.681215,.396235,.656636,.400597,.6039,.710217,.812086,.5885389999999999,.568013,.944565,.681008,.898285,.733752,.8697010000000001,.63383,.398822,.606793,.395537,.58966,.391062,.805016,.34210799999999997,.611335,.36228400000000005,.634038,.35597100000000004,.656636,.35535700000000003,.681215,.35834,.698585,.36315600000000003,.941867,.319076,.698585,.38744900000000004,.584177,.624107,.554318,.5660769999999999,.534154,.6206400000000001,.711218,.819975,.66463,.8528709999999999,.5591,.902632,.871706,.791941,.591234,.37389399999999995,.544341,.451584,.624563,.924192,.88577,.615029,.551338,.6952780000000001,.55198,.7046319999999999,.552888,.715808,.555168,.7307939999999999,.569944,.767035,.593203,.685676,.599262,.6810689999999999,.6076,.6777029999999999,.631938,.6635,.752033,.601315,.547226,.42039499999999996,.563544,.35982800000000004,.583841,.368714,.586614,.692366,.771915,.683578,.531597,.352483,.588371,.804441,.520797,.442565,.567985,.493479,.543283,.8192550000000001,.655317,.7455149999999999,.621009,.5740179999999999,.62556,.780312,.680198,.570719,.642764,.604338,.704663,.62153,.552012,.862592,.589072,.508637,.685945,.775357,.645735,.81264,.675343,.703978,.810858,.646305,.720122,.7146669999999999,.866152,.682705,.663187,.644597,.570082,.466326,.544562,.548376,.562759,.558785,.531987,.5301400000000001,.585271,.33517699999999995,.622953,.32277900000000004,.655896,.320163,.687132,.322346,.716482,.33320099999999997,.758757,.382787,.897013,.468769,.732392,.424547,.702114,.43316299999999996,.666525,.433866,.633505,.426088,.603876,.41658700000000004,.579658,.409945,.99244,.480777,.567192,.56942,.541366,.47889899999999996,.526564,.546118,.523913,.56383,.531529,.555057,.566036,.582329,.516311,.5630539999999999,.517472,.577877,.573595,.389807,.560698,.395332,.549756,.39975099999999997,.710288,.36825300000000005,.72333,.36337299999999995];for(let e=0;e<a.length;e++){a[e]--}const l=new CGL.Geometry("fratze");l.clear();l.vertices=new Float32Array(s);l.texCoords=new Float32Array(o);l.vertexNormals=new Float32Array(s);l.verticesIndices=a;r.set(null);r.set(l);const h=l.copy()};Ops.Extension.Mediapipe.FaceMesh.prototype=new CABLES.Op;CABLES.OPS["7e13efda-330f-4c5e-bc84-e14e5af99cd4"]={f:Ops.Extension.Mediapipe.FaceMesh,objName:"Ops.Extension.Mediapipe.FaceMesh"};Ops.Gl.Pbr.PbrMaterial=function(){CABLES.Op.apply(this,arguments);const r=this;const o=r.attachments={BasicPBR_frag:'precision highp float;\nprecision highp int;\n{{MODULES_HEAD}}\n\n#ifndef PI\n#define PI 3.14159265358\n#endif\n\n// set by cables\nUNI vec3 camPos;\n// utility maps\n#ifdef USE_ENVIRONMENT_LIGHTING\n    UNI sampler2D IBL_BRDF_LUT;\n#endif\n// mesh maps\n#ifdef USE_ALBEDO_TEX\n    UNI sampler2D _AlbedoMap;\n#else\n    UNI vec4 _Albedo;\n#endif\n#ifdef USE_NORMAL_TEX\n    UNI sampler2D _NormalMap;\n#endif\n#ifdef USE_EMISSION\n    UNI sampler2D _EmissionMap;\n#endif\n#ifdef USE_HEIGHT_TEX\n    UNI sampler2D _HeightMap;\n#endif\n#ifdef USE_THIN_FILM_MAP\n    UNI sampler2D _ThinFilmMap;\n    UNI float _TFThicknessTexMin;\n    UNI float _TFThicknessTexMax;\n#endif\n#ifdef USE_AORM_TEX\n    UNI sampler2D _AORMMap;\n#else\n    UNI float _Roughness;\n    UNI float _Metalness;\n#endif\n#ifdef USE_LIGHTMAP\n    #ifndef VERTEX_COLORS\n        UNI sampler2D _Lightmap;\n    #else\n        #ifndef VCOL_LIGHTMAP\n            UNI sampler2D _Lightmap;\n        #endif\n    #endif\n#endif\n#ifdef USE_CLEAR_COAT\n    UNI float _ClearCoatIntensity;\n    UNI float _ClearCoatRoughness;\n    #ifdef USE_CC_NORMAL_MAP\n        #ifndef USE_NORMAL_MAP_FOR_CC\n            UNI sampler2D _CCNormalMap;\n        #endif\n    #endif\n#endif\n#ifdef USE_THIN_FILM\n    UNI float _ThinFilmIntensity;\n    UNI float _ThinFilmIOR;\n    UNI float _ThinFilmThickness;\n#endif\n// IBL inputs\n#ifdef USE_ENVIRONMENT_LIGHTING\n    UNI samplerCube _irradiance;\n    UNI samplerCube _prefilteredEnvironmentColour;\n    UNI float MAX_REFLECTION_LOD;\n    UNI float diffuseIntensity;\n    UNI float specularIntensity;\n    UNI float envIntensity;\n#endif\n#ifdef USE_LIGHTMAP\n    UNI float lightmapIntensity;\n#endif\nUNI float tonemappingExposure;\n#ifdef USE_HEIGHT_TEX\n    UNI float _HeightDepth;\n    #ifndef USE_OPTIMIZED_HEIGHT\n        UNI mat4 modelMatrix;\n    #endif\n#endif\n#ifdef USE_PARALLAX_CORRECTION\n    UNI vec3 _PCOrigin;\n    UNI vec3 _PCboxMin;\n    UNI vec3 _PCboxMax;\n#endif\n#ifdef USE_EMISSION\n    UNI float _EmissionIntensity;\n#endif\nIN vec2 texCoord;\n#ifdef USE_LIGHTMAP\n    #ifndef ATTRIB_texCoord1\n    #ifndef VERTEX_COLORS\n        IN vec2 texCoord1;\n    #else\n        #ifndef VCOL_LIGHTMAP\n            IN vec2 texCoord1;\n        #endif\n    #endif\n    #endif\n#endif\nIN vec4 FragPos;\nIN mat3 TBN;\nIN vec3 norm;\nIN vec3 normM;\n#ifdef VERTEX_COLORS\n    IN vec4 vertCol;\n#endif\n#ifdef USE_HEIGHT_TEX\n    #ifdef USE_OPTIMIZED_HEIGHT\n        IN vec3 fragTangentViewDir;\n    #else\n        IN mat3 invTBN;\n    #endif\n#endif\n\n\n// structs\nstruct Light {\n    vec3 color;\n    vec3 position;\n    vec3 specular;\n\n    #define INTENSITY x\n    #define ATTENUATION y\n    #define FALLOFF z\n    #define RADIUS w\n    vec4 lightProperties;\n\n    int castLight;\n\n    vec3 conePointAt;\n    #define COSCONEANGLE x\n    #define COSCONEANGLEINNER y\n    #define SPOTEXPONENT z\n    vec3 spotProperties;\n};\n\n\n#ifdef WEBGL1\n    #ifdef GL_EXT_shader_texture_lod\n        #define textureLod textureCubeLodEXT\n    #endif\n#endif\n#define SAMPLETEX textureLod\n\n// https://community.khronos.org/t/addition-of-two-hdr-rgbe-values/55669\nhighp vec4 EncodeRGBE8(highp vec3 rgb)\n{\n    highp vec4 vEncoded;\n    float maxComponent = max(max(rgb.r, rgb.g), rgb.b);\n    float fExp = ceil(log2(maxComponent));\n    vEncoded.rgb = rgb / exp2(fExp);\n    vEncoded.a = (fExp + 128.0) / 255.0;\n    return vEncoded;\n}\n// https://enkimute.github.io/hdrpng.js/\nhighp vec3 DecodeRGBE8(highp vec4 rgbe)\n{\n    highp vec3 vDecoded = rgbe.rgb * pow(2.0, rgbe.a * 255.0-128.0);\n    return vDecoded;\n}\n\n// from https://github.com/BabylonJS/Babylon.js/blob/master/src/Shaders/ShadersInclude/pbrIBLFunctions.fx\nfloat environmentRadianceOcclusion(float ambientOcclusion, float NdotVUnclamped) {\n    // Best balanced (implementation time vs result vs perf) analytical environment specular occlusion found.\n    // http://research.tri-ace.com/Data/cedec2011_RealtimePBR_Implementation_e.pptx\n    float temp = NdotVUnclamped + ambientOcclusion;\n    return clamp(temp * temp - 1.0 + ambientOcclusion, 0.0, 1.0);\n}\nfloat environmentHorizonOcclusion(vec3 view, vec3 normal, vec3 geometricNormal) {\n    // http://marmosetco.tumblr.com/post/81245981087\n    vec3 reflection = reflect(view, normal);\n    float temp = clamp(1.0 + 1.1 * dot(reflection, geometricNormal), 0.0, 1.0);\n    return temp * temp;\n}\n#ifdef ALPHA_DITHERED\n// from https://github.com/google/filament/blob/main/shaders/src/dithering.fs\n// modified to use this to discard based on factor instead of dithering\nfloat interleavedGradientNoise(highp vec2 n) {\n    return fract(52.982919 * fract(dot(vec2(0.06711, 0.00584), n)));\n}\nfloat Dither_InterleavedGradientNoise(float a) {\n    // Jimenez 2014, "Next Generation Post-Processing in Call of Duty"\n    highp vec2 uv = gl_FragCoord.xy;\n\n    // The noise variable must be highp to workaround Adreno bug #1096.\n    highp float noise = interleavedGradientNoise(uv);\n\n    return step(noise, a);\n}\n#endif\n\n#ifdef USE_HEIGHT_TEX\n#ifndef WEBGL1\n// based on Jasper Flicks great tutorials (:\nfloat getSurfaceHeight(sampler2D surfaceHeightMap, vec2 UV)\n{\n\treturn texture(surfaceHeightMap, UV).r;\n}\n\nvec2 RaymarchedParallax(vec2 UV, sampler2D surfaceHeightMap, float strength, vec3 viewDir)\n{\n    #ifndef USE_OPTIMIZED_HEIGHT\n\t#define PARALLAX_RAYMARCHING_STEPS 50\n    #else\n    #define PARALLAX_RAYMARCHING_STEPS 20\n    #endif\n\tvec2 uvOffset = vec2(0.0);\n\tfloat stepSize = 1.0 / float(PARALLAX_RAYMARCHING_STEPS);\n\tvec2 uvDelta = vec2(viewDir * (stepSize * strength));\n\tfloat stepHeight = 1.0;\n\tfloat surfaceHeight = getSurfaceHeight(surfaceHeightMap, UV);\n\n\tvec2 prevUVOffset = uvOffset;\n\tfloat prevStepHeight = stepHeight;\n\tfloat prevSurfaceHeight = surfaceHeight;\n\n    // doesnt work with webgl 1.0 as the && condition is not fixed length for loop\n\tfor (int i = 1; i < PARALLAX_RAYMARCHING_STEPS && stepHeight > surfaceHeight; ++i)\n\t{\n\t\tprevUVOffset = uvOffset;\n\t\tprevStepHeight = stepHeight;\n\t\tprevSurfaceHeight = surfaceHeight;\n\n\t\tuvOffset -= uvDelta;\n\t\tstepHeight -= stepSize;\n\t\tsurfaceHeight = getSurfaceHeight(surfaceHeightMap, UV + uvOffset);\n\t}\n\n\tfloat prevDifference = prevStepHeight - prevSurfaceHeight;\n\tfloat difference = surfaceHeight - stepHeight;\n\tfloat t = prevDifference / (prevDifference + difference);\n\tuvOffset = mix(prevUVOffset, uvOffset, t);\n\treturn uvOffset;\n}\n#endif // TODO: use non raymarched parallax mapping here if webgl 1.0?\n#endif\n\n#ifdef USE_PARALLAX_CORRECTION\nvec3 BoxProjection(vec3 direction, vec3 position, vec3 cubemapPosition, vec3 boxMin, vec3 boxMax)\n{\n\tboxMin -= position;\n\tboxMax -= position;\n\tfloat x = (direction.x > 0.0 ? boxMax.x : boxMin.x) / direction.x;\n\tfloat y = (direction.y > 0.0 ? boxMax.y : boxMin.y) / direction.y;\n\tfloat z = (direction.z > 0.0 ? boxMax.z : boxMin.z) / direction.z;\n\tfloat scalar = min(min(x, y), z);\n\n\treturn direction * scalar + (position - cubemapPosition);\n}\n#endif\n\n#ifdef USE_THIN_FILM\n// section from https://github.com/BabylonJS/Babylon.js/blob/8a5077e0efb4ba471d16f7cd010fe6124ea8d005/packages/dev/core/src/Shaders/ShadersInclude/pbrBRDFFunctions.fx\n// helper functions from https://github.com/BabylonJS/Babylon.js/blob/8a5077e0efb4ba471d16f7cd010fe6124ea8d005/packages/dev/core/src/Shaders/ShadersInclude/helperFunctions.fx\nfloat square(float value)\n{\n    return value * value;\n}\nvec3 square(vec3 value)\n{\n    return value * value;\n}\nfloat pow5(float value) {\n    float sq = value * value;\n    return sq * sq * value;\n}\nconst mat3 XYZ_TO_REC709 = mat3(\n     3.2404542, -0.9692660,  0.0556434,\n    -1.5371385,  1.8760108, -0.2040259,\n    -0.4985314,  0.0415560,  1.0572252\n);\n// Assume air interface for top\n// Note: We don\'t handle the case fresnel0 == 1\nvec3 getIORTfromAirToSurfaceR0(vec3 f0) {\n    vec3 sqrtF0 = sqrt(f0);\n    return (1. + sqrtF0) / (1. - sqrtF0);\n}\n\n// Conversion FO/IOR\nvec3 getR0fromIORs(vec3 iorT, float iorI) {\n    return square((iorT - vec3(iorI)) / (iorT + vec3(iorI)));\n}\n\nfloat getR0fromIORs(float iorT, float iorI) {\n    return square((iorT - iorI) / (iorT + iorI));\n}\n\n// Fresnel equations for dielectric/dielectric interfaces.\n// Ref: https://belcour.github.io/blog/research/publication/2017/05/01/brdf-thin-film.html\n// Evaluation XYZ sensitivity curves in Fourier space\nvec3 evalSensitivity(float opd, vec3 shift) {\n    float phase = 2.0 * PI * opd * 1.0e-9;\n\n    const vec3 val = vec3(5.4856e-13, 4.4201e-13, 5.2481e-13);\n    const vec3 pos = vec3(1.6810e+06, 1.7953e+06, 2.2084e+06);\n    const vec3 var = vec3(4.3278e+09, 9.3046e+09, 6.6121e+09);\n\n    vec3 xyz = val * sqrt(2.0 * PI * var) * cos(pos * phase + shift) * exp(-square(phase) * var);\n    xyz.x += 9.7470e-14 * sqrt(2.0 * PI * 4.5282e+09) * cos(2.2399e+06 * phase + shift[0]) * exp(-4.5282e+09 * square(phase));\n    xyz /= 1.0685e-7;\n\n    vec3 srgb = XYZ_TO_REC709 * xyz;\n    return srgb;\n}\n// from https://github.com/BabylonJS/Babylon.js/blob/8a5077e0efb4ba471d16f7cd010fe6124ea8d005/packages/dev/core/src/Shaders/ShadersInclude/pbrBRDFFunctions.fx\nvec3 fresnelSchlickGGX(float VdotH, vec3 reflectance0, vec3 reflectance90)\n{\n    return reflectance0 + (reflectance90 - reflectance0) * pow5(1.0 - VdotH);\n}\nfloat fresnelSchlickGGX(float VdotH, float reflectance0, float reflectance90)\n{\n    return reflectance0 + (reflectance90 - reflectance0) * pow5(1.0 - VdotH);\n}\nvec3 evalIridescence(float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0) {\n    vec3 I = vec3(1.0);\n\n    // Force iridescenceIOR -> outsideIOR when thinFilmThickness -> 0.0\n    float iridescenceIOR = mix(outsideIOR, eta2, smoothstep(0.0, 0.03, thinFilmThickness));\n    // Evaluate the cosTheta on the base layer (Snell law)\n    float sinTheta2Sq = square(outsideIOR / iridescenceIOR) * (1.0 - square(cosTheta1));\n\n    // Handle TIR:\n    float cosTheta2Sq = 1.0 - sinTheta2Sq;\n    if (cosTheta2Sq < 0.0) {\n        return I;\n    }\n\n    float cosTheta2 = sqrt(cosTheta2Sq);\n\n    // First interface\n    float R0 = getR0fromIORs(iridescenceIOR, outsideIOR);\n    float R12 = fresnelSchlickGGX(cosTheta1, R0, 1.);\n    float R21 = R12;\n    float T121 = 1.0 - R12;\n    float phi12 = 0.0;\n    if (iridescenceIOR < outsideIOR) phi12 = PI;\n    float phi21 = PI - phi12;\n\n    // Second interface\n    vec3 baseIOR = getIORTfromAirToSurfaceR0(clamp(baseF0, 0.0, 0.9999)); // guard against 1.0\n    vec3 R1 = getR0fromIORs(baseIOR, iridescenceIOR);\n    vec3 R23 = fresnelSchlickGGX(cosTheta2, R1, vec3(1.));\n    vec3 phi23 = vec3(0.0);\n    if (baseIOR[0] < iridescenceIOR) phi23[0] = PI;\n    if (baseIOR[1] < iridescenceIOR) phi23[1] = PI;\n    if (baseIOR[2] < iridescenceIOR) phi23[2] = PI;\n\n    // Phase shift\n    float opd = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n    vec3 phi = vec3(phi21) + phi23;\n\n    // Compound terms\n    vec3 R123 = clamp(R12 * R23, 1e-5, 0.9999);\n    vec3 r123 = sqrt(R123);\n    vec3 Rs = square(T121) * R23 / (vec3(1.0) - R123);\n\n    // Reflectance term for m = 0 (DC term amplitude)\n    vec3 C0 = R12 + Rs;\n    I = C0;\n\n    // Reflectance term for m > 0 (pairs of diracs)\n    vec3 Cm = Rs - T121;\n    for (int m = 1; m <= 2; ++m)\n    {\n        Cm *= r123;\n        vec3 Sm = 2.0 * evalSensitivity(float(m) * opd, float(m) * phi);\n        I += Cm * Sm;\n    }\n\n    // Since out of gamut colors might be produced, negative color values are clamped to 0.\n    return max(I, vec3(0.0));\n}\n#endif\n\n{{PBR_FRAGMENT_HEAD}}\nvoid main()\n{\n    vec4 col;\n\n    // set up interpolated vertex data\n    vec2 UV0             = texCoord;\n    #ifdef USE_LIGHTMAP\n        #ifndef VERTEX_COLORS\n            vec2 UV1             = texCoord1;\n        #else\n            #ifndef VCOL_LIGHTMAP\n                vec2 UV1             = texCoord1;\n            #endif\n        #endif\n    #endif\n    vec3 V               = normalize(camPos - FragPos.xyz);\n\n    #ifdef USE_HEIGHT_TEX\n        #ifndef USE_OPTIMIZED_HEIGHT\n            vec3 fragTangentViewDir = normalize(invTBN * (camPos - FragPos.xyz));\n        #endif\n        #ifndef WEBGL1\n            UV0 += RaymarchedParallax(UV0, _HeightMap, _HeightDepth * 0.1, fragTangentViewDir);\n        #endif\n    #endif\n\n    // load relevant mesh maps\n    #ifdef USE_ALBEDO_TEX\n        vec4 AlbedoMap   = texture(_AlbedoMap, UV0);\n    #else\n        vec4 AlbedoMap   = _Albedo;\n    #endif\n    #ifdef ALPHA_MASKED\n\tif ( AlbedoMap.a <= 0.5 )\n\t    discard;\n\t#endif\n\n\t#ifdef ALPHA_DITHERED\n\tif ( Dither_InterleavedGradientNoise(AlbedoMap.a) <= 0.5 )\n\t    discard;\n\t#endif\n\n    #ifdef USE_AORM_TEX\n        vec4 AORM        = texture(_AORMMap, UV0);\n    #else\n        vec4 AORM        = vec4(1.0, _Roughness, _Metalness, 1.0);\n    #endif\n    #ifdef USE_NORMAL_TEX\n        vec3 internalNormals = texture(_NormalMap, UV0).rgb;\n        internalNormals      = internalNormals * 2.0 - 1.0;\n        internalNormals      = normalize(TBN * internalNormals);\n    #else\n        vec3 internalNormals = normM;\n    #endif\n\t#ifdef USE_LIGHTMAP\n    \t#ifndef VERTEX_COLORS\n\t        #ifndef LIGHTMAP_IS_RGBE\n                vec3 Lightmap = texture(_Lightmap, UV1).rgb;\n            #else\n                vec3 Lightmap = DecodeRGBE8(texture(_Lightmap, UV1));\n            #endif\n        #else\n            #ifdef VCOL_LIGHTMAP\n                vec3 Lightmap = pow(vertCol.rgb, vec3(2.2));\n            #else\n  \t            #ifndef LIGHTMAP_IS_RGBE\n                    vec3 Lightmap = texture(_Lightmap, UV1).rgb;\n                #else\n                    vec3 Lightmap = DecodeRGBE8(texture(_Lightmap, UV1));\n                #endif\n            #endif\n        #endif\n    #endif\n    // initialize texture values\n    float AO             = AORM.r;\n    float specK          = AORM.g;\n    float metalness      = AORM.b;\n    vec3  N              = normalize(internalNormals);\n    vec3  albedo         = pow(AlbedoMap.rgb, vec3(2.2));\n\n    #ifdef VERTEX_COLORS\n        #ifdef VCOL_COLOUR\n            albedo.rgb *= pow(vertCol.rgb, vec3(2.2));\n            AlbedoMap.rgb *= pow(vertCol.rgb, vec3(2.2));\n        #endif\n        #ifdef VCOL_AORM\n            AO = vertCol.r;\n            specK = vertCol.g;\n            metalness = vertCol.b;\n        #endif\n        #ifdef VCOL_AO\n            AO = vertCol.r;\n        #endif\n        #ifdef VCOL_R\n            specK = vertCol.g;\n        #endif\n        #ifdef VCOL_M\n            metalness = vertCol.b;\n        #endif\n    #endif\n\n    // set up values for later calculations\n    float NdotV          = abs(dot(N, V));\n    vec3  F0             = mix(vec3(0.04), AlbedoMap.rgb, metalness);\n\n    #ifdef USE_THIN_FILM\n        #ifndef USE_THIN_FILM_MAP\n            vec3 iridescenceFresnel = evalIridescence(1.0, _ThinFilmIOR, NdotV, _ThinFilmThickness, F0);\n            F0 = mix(F0, iridescenceFresnel, _ThinFilmIntensity);\n        #else\n            vec3 ThinFilmParameters = texture(_ThinFilmMap, UV0).rgb;\n            vec3 iridescenceFresnel = evalIridescence(1.0, 1.0 / ThinFilmParameters.b, NdotV, mix(_TFThicknessTexMin, _TFThicknessTexMax, ThinFilmParameters.g), F0);\n            F0 = mix(F0, iridescenceFresnel, ThinFilmParameters.r);\n        #endif\n    #endif\n\n    #ifndef WEBGL1\n        #ifndef DONT_USE_GR\n            // from https://github.com/BabylonJS/Babylon.js/blob/5e6321d887637877d8b28b417410abbbeb651c6e/src/Shaders/ShadersInclude/pbrHelperFunctions.fx\n            // modified to fit variable names\n            #ifndef DONT_USE_NMGR\n                vec3 nDfdx = dFdx(normM.xyz);\n                vec3 nDfdy = dFdy(normM.xyz);\n            #else\n                vec3 nDfdx = dFdx(N.xyz) + dFdx(normM.xyz);\n                vec3 nDfdy = dFdy(N.xyz) + dFdy(normM.xyz);\n            #endif\n            float slopeSquare = max(dot(nDfdx, nDfdx), dot(nDfdy, nDfdy));\n\n            // Vive analytical lights roughness factor.\n            float geometricRoughnessFactor = pow(clamp(slopeSquare, 0.0, 1.0), 0.333);\n\n            specK = max(specK, geometricRoughnessFactor);\n            #endif\n        #endif\n\n    \t// IBL\n    \t// from https://github.com/google/filament/blob/df6a100fcba66d9c99328a49d41fe3adecc0165d/shaders/src/light_indirect.fs\n    \t// and https://github.com/google/filament/blob/df6a100fcba66d9c99328a49d41fe3adecc0165d/shaders/src/shading_lit.fs\n    \t// modified to fit structure/variable names\n    \t#ifdef USE_ENVIRONMENT_LIGHTING\n        \tvec2 envBRDF = texture(IBL_BRDF_LUT, vec2(NdotV, specK)).xy;\n        \tvec3 E = mix(envBRDF.xxx, envBRDF.yyy, F0);\n        #endif\n\n        float specOcclusion    = environmentRadianceOcclusion(AO, NdotV);\n        float horizonOcclusion = environmentHorizonOcclusion(-V, N, normM);\n\n        #ifdef USE_ENVIRONMENT_LIGHTING\n            float envSampleSpecK = specK * MAX_REFLECTION_LOD;\n            vec3  R = reflect(-V, N);\n\n            #ifdef USE_PARALLAX_CORRECTION\n                R = BoxProjection(R, FragPos.xyz, _PCOrigin, _PCboxMin, _PCboxMax);\n            #endif\n\n    \t    vec3 prefilteredEnvColour = DecodeRGBE8(SAMPLETEX(_prefilteredEnvironmentColour, R, envSampleSpecK)) * specularIntensity*envIntensity;\n\n        \tvec3 Fr = E * prefilteredEnvColour;\n        \tFr *= specOcclusion * horizonOcclusion * (1.0 + F0 * (1.0 / envBRDF.y - 1.0));\n        \tFr *= 1.0 + F0; // TODO: this might be wrong, figure this out\n\n        \t#ifdef USE_LIGHTMAP\n                vec3 IBLIrradiance = Lightmap * lightmapIntensity;\n            #else\n                vec3 IBLIrradiance = DecodeRGBE8(SAMPLETEX(_irradiance, N, 0.0)) * diffuseIntensity*envIntensity;\n        #endif\n\n\t    vec3 Fd = (1.0 - metalness) * albedo * IBLIrradiance * (1.0 - E) * AO;\n    #endif\n    vec3 directLighting = vec3(0.0);\n\n    {{PBR_FRAGMENT_BODY}}\n\n    // combine IBL\n    col.rgb = directLighting;\n    #ifdef USE_ENVIRONMENT_LIGHTING\n\n        col.rgb += Fr + Fd;\n\n        #ifdef USE_CLEAR_COAT\n            float CCEnvSampleSpecK = _ClearCoatRoughness * MAX_REFLECTION_LOD;\n            #ifndef USE_NORMAL_MAP_FOR_CC\n                #ifndef USE_CC_NORMAL_MAP\n                    vec3 CCR = reflect(-V, normM);\n                #else\n                    vec3 CCN = texture(_CCNormalMap, UV0).rgb;\n                    CCN      = CCN * 2.0 - 1.0;\n                    CCN      = normalize(TBN * CCN);\n                    vec3 CCR = reflect(-V, CCN);\n                #endif\n                #ifdef USE_PARALLAX_CORRECTION\n                    CCR = BoxProjection(CCR, FragPos.xyz, _PCOrigin, _PCboxMin, _PCboxMax);\n                #endif\n            #endif\n            #ifndef USE_NORMAL_MAP_FOR_CC\n        \t    vec3 CCPrefilteredEnvColour = DecodeRGBE8(SAMPLETEX(_prefilteredEnvironmentColour, CCR, CCEnvSampleSpecK));\n        \t#else\n        \t    vec3 CCPrefilteredEnvColour = DecodeRGBE8(SAMPLETEX(_prefilteredEnvironmentColour, R, CCEnvSampleSpecK));\n        \t#endif\n        \tvec3 CCFr = E * CCPrefilteredEnvColour;\n        \tCCFr *= specOcclusion * horizonOcclusion * (0.96 + (0.04 / envBRDF.y));\n        \tCCFr *= 1.04;\n        \tcol.rgb += CCFr * _ClearCoatIntensity*envIntensity;\n        #endif\n    #else\n        #ifdef USE_LIGHTMAP\n            col.rgb += (1.0 - metalness) * albedo * Lightmap * lightmapIntensity;\n        #endif\n    #endif\n    #ifdef USE_EMISSION\n    col.rgb += texture(_EmissionMap, UV0).rgb * _EmissionIntensity;\n    #endif\n    col.a   = 1.0;\n\n    #ifdef ALPHA_BLEND\n        col.a = AlbedoMap.a;\n    #endif\n\n    // from https://github.com/BabylonJS/Babylon.js/blob/5e6321d887637877d8b28b417410abbbeb651c6e/src/Shaders/tonemap.fragment.fx\n    // modified to fit variable names\n    #ifdef TONEMAP_HejiDawson\n        col.rgb *= tonemappingExposure;\n\n        vec3 X = max(vec3(0.0, 0.0, 0.0), col.rgb - 0.004);\n        vec3 retColor = (X * (6.2 * X + 0.5)) / (X * (6.2 * X + 1.7) + 0.06);\n\n        col.rgb = retColor * retColor;\n    #elif defined(TONEMAP_Photographic)\n        col.rgb =  vec3(1.0, 1.0, 1.0) - exp2(-tonemappingExposure * col.rgb);\n    #else\n        col.rgb *= tonemappingExposure;\n        //col.rgb = clamp(col.rgb, vec3(0.0), vec3(1.0));\n    #endif\n\n    col.rgb = pow(col.rgb, vec3(1.0/2.2));\n    {{MODULE_COLOR}}\n\n    outColor = col;\n}\n',BasicPBR_vert:"precision highp float;\nprecision highp int;\n\nUNI vec3 camPos;\n\nIN vec3  vPosition;\nIN vec2  attrTexCoord;\n#ifdef USE_LIGHTMAP\n    #ifndef ATTRIB_attrTexCoord1\n        IN vec2 attrTexCoord1;\n        OUT vec2 texCoord1;\n        #define ATTRIB_attrTexCoord1\n        #define ATTRIB_texCoord1\n    #endif\n#endif\nIN vec3  attrVertNormal;\nIN vec3  attrTangent;\nIN vec3  attrBiTangent;\nIN float attrVertIndex;\n#ifdef VERTEX_COLORS\nIN vec4 attrVertColor;\n#endif\n\n{{MODULES_HEAD}}\n\nOUT vec2 texCoord;\n\nOUT vec4 FragPos;\nOUT mat3 TBN;\nOUT vec3 norm;\nOUT vec3 normM;\n#ifdef VERTEX_COLORS\nOUT vec4 vertCol;\n#endif\n#ifdef USE_HEIGHT_TEX\n#ifdef USE_OPTIMIZED_HEIGHT\nOUT vec3 fragTangentViewDir;\n#else\nOUT mat3 invTBN;\n#endif\n#endif\nUNI mat4 projMatrix;\nUNI mat4 viewMatrix;\nUNI mat4 modelMatrix;\n\nvoid main()\n{\n    mat4 mMatrix = modelMatrix; // needed to make vertex effects work\n    #ifdef USE_LIGHTMAP\n        texCoord1 = attrTexCoord1;\n    #endif\n    texCoord = attrTexCoord;\n    texCoord.y = 1.0 - texCoord.y;\n    vec4 pos = vec4(vPosition,  1.0);\n    norm = attrVertNormal;\n    vec3 tangent = attrTangent;\n    vec3 bitangent = attrBiTangent;\n\n    {{MODULE_VERTEX_POSITION}}\n\n\n    mat4 theMMat=mMatrix;\n    #ifdef INSTANCING\n        #ifdef TEXINSTMAT\n            theMMat = texInstMat;\n        #endif\n        #ifndef TEXINSTMAT\n            theMMat = instMat;\n        #endif\n    #endif\n\n    FragPos = theMMat * pos;\n\n    tangent = normalize(vec3(theMMat * vec4(tangent,    0.0)));\n    vec3 N = normalize(vec3(theMMat * vec4(norm, 0.0)));\n    bitangent = normalize(vec3(theMMat * vec4(bitangent,  0.0)));\n\n    #ifdef VERTEX_COLORS\n        vertCol = attrVertColor;\n    #endif\n\n    TBN = mat3(tangent, bitangent, N);\n\n    #ifdef USE_HEIGHT_TEX\n    #ifndef WEBGL1\n    #ifdef USE_OPTIMIZED_HEIGHT\n    fragTangentViewDir = normalize(transpose(TBN) * (camPos - FragPos.xyz));\n    #else\n    invTBN = transpose(TBN);\n    #endif\n    #endif\n    #endif\n\n    normM = N;\n\n    mat4 modelViewMatrix=viewMatrix*mMatrix;\n    {{MODULE_VERTEX_MOVELVIEW}}\n\n    gl_Position = projMatrix * modelViewMatrix * pos;\n}\n",light_body_directional_frag:"\nvec3 L{{LIGHT_INDEX}} = normalize(lightOP{{LIGHT_INDEX}}.position);\n#ifdef USE_ENVIRONMENT_LIGHTING\ndirectLighting += evaluateLighting(lightOP{{LIGHT_INDEX}}, L{{LIGHT_INDEX}}, FragPos, V, N, albedo, specK, NdotV, F0, envBRDF.y, AO, false);\n#else\ndirectLighting += evaluateLighting(lightOP{{LIGHT_INDEX}}, L{{LIGHT_INDEX}}, FragPos, V, N, albedo, specK, NdotV, F0, AO, false);\n#endif\n",light_body_point_frag:"\nvec3 L{{LIGHT_INDEX}} = normalize(lightOP{{LIGHT_INDEX}}.position - FragPos.xyz);\n#ifdef USE_ENVIRONMENT_LIGHTING\ndirectLighting += evaluateLighting(lightOP{{LIGHT_INDEX}}, L{{LIGHT_INDEX}}, FragPos, V, N, albedo, specK, NdotV, F0, envBRDF.y, AO, true);\n#else\ndirectLighting += evaluateLighting(lightOP{{LIGHT_INDEX}}, L{{LIGHT_INDEX}}, FragPos, V, N, albedo, specK, NdotV, F0, AO, true);\n#endif\n",light_body_spot_frag:"\nvec3 L{{LIGHT_INDEX}} = normalize(lightOP{{LIGHT_INDEX}}.position - FragPos.xyz);\nfloat spotIntensity{{LIGHT_INDEX}} = CalculateSpotLightEffect(\n    lightOP{{LIGHT_INDEX}}.position, lightOP{{LIGHT_INDEX}}.conePointAt, lightOP{{LIGHT_INDEX}}.spotProperties.COSCONEANGLE,\n    lightOP{{LIGHT_INDEX}}.spotProperties.COSCONEANGLEINNER, lightOP{{LIGHT_INDEX}}.spotProperties.SPOTEXPONENT,\n    L{{LIGHT_INDEX}}\n);\n#ifdef USE_ENVIRONMENT_LIGHTING\ndirectLighting += evaluateLighting(lightOP{{LIGHT_INDEX}}, L{{LIGHT_INDEX}}, FragPos, V, N, albedo, specK, NdotV, F0, envBRDF.y, AO * spotIntensity{{LIGHT_INDEX}}, true);\n#else\ndirectLighting += evaluateLighting(lightOP{{LIGHT_INDEX}}, L{{LIGHT_INDEX}}, FragPos, V, N, albedo, specK, NdotV, F0, AO * spotIntensity{{LIGHT_INDEX}}, true);\n#endif\n",light_head_frag:"UNI Light lightOP{{LIGHT_INDEX}};\n",light_includes_frag:'#ifndef PI\n#define PI 3.14159265359\n#endif\n\n// from https://github.com/google/filament/blob/036bfa9b20d730bb8e5852ed449b024570167648/shaders/src/brdf.fs\n// modified to fit variable names / structure\nfloat F_Schlick(float f0, float f90, float VoH)\n{\n    return f0 + (f90 - f0) * pow(1.0 - VoH, 5.0);\n}\nvec3 F_Schlick(const vec3 f0, float VoH)\n{\n    float f = pow(1.0 - VoH, 5.0);\n    return f + f0 * (1.0 - f);\n}\nfloat Fd_Burley(float roughness, float NoV, float NoL, float LoH)\n{\n    // Burley 2012, "Physically-Based Shading at Disney"\n    float f90 = 0.5 + 2.0 * roughness * LoH * LoH;\n    float lightScatter = F_Schlick(1.0, f90, NoL);\n    float viewScatter  = F_Schlick(1.0, f90, NoV);\n    return lightScatter * viewScatter * (1.0 / PI);\n}\nfloat D_GGX(float roughness, float NoH, const vec3 h)\n{\n    float oneMinusNoHSquared = 1.0 - NoH * NoH;\n\n    float a = NoH * roughness;\n    float k = roughness / (oneMinusNoHSquared + a * a);\n    float d = k * k * (1.0 / PI);\n    return clamp(d, 0.0, 1.0);\n}\nfloat V_SmithGGXCorrelated(float roughness, float NoV, float NoL)\n{\n    // Heitz 2014, "Understanding the Masking-Shadowing Function in Microfacet-Based BRDFs"\n    float a2 = roughness * roughness;\n    // TODO: lambdaV can be pre-computed for all the lights, it should be moved out of this function\n    float lambdaV = NoL * sqrt((NoV - a2 * NoV) * NoV + a2);\n    float lambdaL = NoV * sqrt((NoL - a2 * NoL) * NoL + a2);\n    float v = 0.5 / (lambdaV + lambdaL);\n    // a2=0 => v = 1 / 4*NoL*NoV   => min=1/4, max=+inf\n    // a2=1 => v = 1 / 2*(NoL+NoV) => min=1/4, max=+inf\n    // clamp to the maximum value representable in mediump\n    return clamp(v, 0.0, 1.0);\n}\n// from https://github.com/google/filament/blob/73e339b05d67749e3b1d1d243650441162c10f8a/shaders/src/light_punctual.fs\n// modified to fit variable names\nfloat getSquareFalloffAttenuation(float distanceSquare, float falloff)\n{\n    float factor = distanceSquare * falloff;\n    float smoothFactor = clamp(1.0 - factor * factor, 0.0, 1.0);\n    // We would normally divide by the square distance here\n    // but we do it at the call site\n    return smoothFactor * smoothFactor;\n}\n\nfloat getDistanceAttenuation(vec3 posToLight, float falloff, vec3 V, float volume)\n{\n    float distanceSquare = dot(posToLight, posToLight);\n    float attenuation = getSquareFalloffAttenuation(distanceSquare, falloff);\n    // light far attenuation\n    float d = dot(V, V);\n    float f = 100.0; // CONFIG_Z_LIGHT_FAR, ttps://github.com/google/filament/blob/df6a100fcba66d9c99328a49d41fe3adecc0165d/filament/src/details/Engine.h\n    vec2 lightFarAttenuationParams = 0.5 * vec2(10.0, 10.0 / (f * f));\n    attenuation *= clamp(lightFarAttenuationParams.x - d * lightFarAttenuationParams.y, 0.0, 1.0);\n    // Assume a punctual light occupies a min volume of 1cm to avoid a division by 0\n    return attenuation / max(distanceSquare, max(1e-4, volume));\n}\n\n#ifdef USE_CLEAR_COAT\n// from https://github.com/google/filament/blob/73e339b05d67749e3b1d1d243650441162c10f8a/shaders/src/shading_model_standard.fs\n// modified to fit variable names / structure\nfloat clearCoatLobe(vec3 shading_clearCoatNormal, vec3 h, float LoH, float CCSpecK)\n{\n    float clearCoatNoH = clamp(dot(shading_clearCoatNormal, h), 0.0, 1.0);\n\n    // clear coat specular lobe\n    float D = D_GGX(CCSpecK, clearCoatNoH, h);\n    // from https://github.com/google/filament/blob/036bfa9b20d730bb8e5852ed449b024570167648/shaders/src/brdf.fs\n    float V = clamp(0.25 / (LoH * LoH), 0.0, 1.0);\n    float F = F_Schlick(0.04, 1.0, LoH); // fix IOR to 1.5\n\n    return D * V * F;\n}\n#endif\n\n#ifdef USE_ENVIRONMENT_LIGHTING\nvec3 evaluateLighting(Light light, vec3 L, vec4 FragPos, vec3 V, vec3 N, vec3 albedo, float specK, float NdotV, vec3 F0, float envBRDFY, float AO, bool hasFalloff)\n#else\nvec3 evaluateLighting(Light light, vec3 L, vec4 FragPos, vec3 V, vec3 N, vec3 albedo, float specK, float NdotV, vec3 F0, float AO, bool hasFalloff)\n#endif\n{\n    vec3 directLightingResult = vec3(0.0);\n    if (light.castLight == 1)\n    {\n        specK = max(0.08, specK);\n        // from https://github.com/google/filament/blob/73e339b05d67749e3b1d1d243650441162c10f8a/shaders/src/shading_model_standard.fs\n        // modified to fit variable names / structure\n        vec3 H = normalize(V + L);\n\n        float NdotL = clamp(dot(N, L), 0.0, 1.0);\n        float NdotH = clamp(dot(N, H), 0.0, 1.0);\n        float LdotH = clamp(dot(L, H), 0.0, 1.0);\n\n        vec3 Fd = albedo * Fd_Burley(specK, NdotV, NdotL, LdotH);\n\n        float D  = D_GGX(specK, NdotH, H);\n        float V2 = V_SmithGGXCorrelated(specK, NdotV, NdotL);\n        vec3  F  = F_Schlick(F0, LdotH);\n\n        // TODO: modify this with the radius\n        vec3 Fr = (D * V2) * F;\n\n        #ifdef USE_ENVIRONMENT_LIGHTING\n        vec3 directLighting = Fd + Fr * (1.0 + F0 * (1.0 / envBRDFY - 1.0));\n        #else\n        vec3 directLighting = Fd + Fr;\n        #endif\n\n        float attenuation = getDistanceAttenuation(L, hasFalloff ? light.lightProperties.FALLOFF : 0.0, V, light.lightProperties.RADIUS);\n\n        directLightingResult = (directLighting * light.color) *\n                          (light.lightProperties.INTENSITY * attenuation * NdotL * AO);\n\n        #ifdef USE_CLEAR_COAT\n        directLightingResult += clearCoatLobe(normM, H, LdotH, _ClearCoatRoughness);\n        #endif\n    }\n    return directLightingResult;\n}\n\n// from phong OP to make sure the light parameters change lighting similar to what people are used to\nfloat CalculateSpotLightEffect(vec3 lightPosition, vec3 conePointAt, float cosConeAngle, float cosConeAngleInner, float spotExponent, vec3 lightDirection) {\n    vec3 spotLightDirection = normalize(lightPosition-conePointAt);\n    float spotAngle = dot(-lightDirection, spotLightDirection);\n    float epsilon = cosConeAngle - cosConeAngleInner;\n\n    float spotIntensity = clamp((spotAngle - cosConeAngle)/epsilon, 0.0, 1.0);\n    spotIntensity = pow(spotIntensity, max(0.01, spotExponent));\n\n    return max(0., spotIntensity);\n}\n'};const s=r.patch.cgl;const G=r.inTrigger("render");const e=r.inFloat("R",Math.random());const t=r.inFloat("G",Math.random());const i=r.inFloat("B",Math.random());const n=r.inFloatSlider("A",1);const B=[e,t,i,n];r.setPortGroup("Diffuse Color",B);const a=r.inFloatSlider("Roughness",.5);const l=r.inFloatSlider("Metalness",0);const h=r.inSwitch("Alpha Mode",["Opaque","Masked","Dithered","Blend"],"Blend");const f=r.inValueBool("Use Clear Coat",false);const w=r.inFloatSlider("Clear Coat Intensity",1);const D=r.inFloatSlider("Clear Coat Roughness",.5);const c=r.inValueBool("Use Normal map for Clear Coat",false);const u=r.inTexture("Clear Coat Normal map");const g=r.inValueBool("Use Thin Film",false);const V=r.inFloatSlider("Thin Film Intensity",1);const k=r.inFloat("Thin Film IOR",1.3);const H=r.inFloat("Thin Film Thickness (nm)",600);const X=r.inFloat("Thickness Tex Min",300);const z=r.inFloat("Thickness Tex Max",600);const d=r.inSwitch("Tonemapping",["sRGB","HejiDawson","Photographic"],"sRGB");const j=r.inFloat("Exposure",1);const W=r.inFloat("Emission Intensity",1);const p=r.inBool("Disable geometric roughness",false);const _=r.inBool("Use roughness from normal map",false);const m=r.inValueBool("Use Vertex Colours",false);const E=r.inSwitch("Vertex Colour Mode",["colour","AORM","AO","R","M","lightmap"],"colour");const Y=r.inFloat("Height Intensity",1);const T=r.inValueBool("Faster heightmapping",false);const A=r.inTexture("IBL LUT");const v=r.inTexture("Diffuse Irradiance");const b=r.inTexture("Pre-filtered envmap");const x=r.inInt("Num mip levels");const I=r.inTexture("Albedo");const R=r.inTexture("AORM");const S=r.inTexture("Normal map");const C=r.inTexture("Emission");const L=r.inTexture("Height");const O=r.inTexture("Lightmap");const P=r.inTexture("Thin Film");const K=r.inFloat("Diffuse Intensity",1);const q=r.inFloat("Specular Intensity",1);const y=r.inBool("Lightmap is RGBE",false);const Z=r.inFloat("Lightmap Intensity",1);G.onTriggered=je;const Q=r.outTrigger("Next");const J=r.outObject("Shader");J.ignoreValueSerialize=true;r.toWorkPortsNeedToBeLinked(G);r.toWorkShouldNotBeChild("Ops.Gl.TextureEffects.ImageCompose",CABLES.OP_PORT_TYPE_FUNCTION);e.setUiAttribs({colorPick:true});r.setPortGroup("Shader Parameters",[a,l,h]);r.setPortGroup("Advanced Shader Parameters",[W,p,_,m,E,Y,T]);r.setPortGroup("Textures",[I,R,S,C,L,O,P]);r.setPortGroup("Lighting",[K,q,Z,y,A,v,b,x]);r.setPortGroup("Tonemapping",[d,j]);r.setPortGroup("Clear Coat",[f,w,D,c,u]);r.setPortGroup("Thin Film Iridescence",[g,V,k,H,X,z]);let N=new CGL.Shader(s,"PBRShader",this);N.setModules(["MODULE_VERTEX_POSITION","MODULE_COLOR","MODULE_BEGIN_FRAG","MODULE_VERTEX_MOVELVIEW"]);let M=[];const F=[];const $=new RegExp("{{LIGHT_INDEX}}","g");const ee=new RegExp("{{PBR_FRAGMENT_HEAD}}","g");const te=new RegExp("{{PBR_FRAGMENT_BODY}}","g");const ie=o.light_head_frag;const ne={point:o.light_body_point_frag,directional:o.light_body_directional_frag,spot:o.light_body_spot_frag};const re=e=>{return ie.replace("{{LIGHT_INDEX}}",e)};const se=(e,t)=>{return(ne[t]||"").replace($,e)};let ae=-1;const oe=[{type:"point",position:[5,5,5],color:[1,1,1],specular:[1,1,1],intensity:120,attenuation:0,falloff:.5,radius:60,castLight:1}];if(s.glVersion==1){if(!s.gl.getExtension("EXT_shader_texture_lod")){r.log("no EXT_shader_texture_lod texture extension");throw"no EXT_shader_texture_lod texture extension"}else{N.enableExtension("GL_EXT_shader_texture_lod");s.gl.getExtension("OES_texture_float");s.gl.getExtension("OES_texture_float_linear");s.gl.getExtension("OES_texture_half_float");s.gl.getExtension("OES_texture_half_float_linear");N.enableExtension("GL_OES_standard_derivatives");N.enableExtension("GL_OES_texture_float");N.enableExtension("GL_OES_texture_float_linear");N.enableExtension("GL_OES_texture_half_float");N.enableExtension("GL_OES_texture_half_float_linear")}}Xe();const le=new CGL.Uniform(N,"t","_AlbedoMap",0);const he=new CGL.Uniform(N,"t","_AORMMap",0);const fe=new CGL.Uniform(N,"t","_NormalMap",0);const ce=new CGL.Uniform(N,"t","_EmissionMap",0);const ue=new CGL.Uniform(N,"t","_CCNormalMap",0);const ge=new CGL.Uniform(N,"t","IBL_BRDF_LUT",0);const de=new CGL.Uniform(N,"tc","_irradiance",1);const pe=new CGL.Uniform(N,"tc","_prefilteredEnvironmentColour",1);const _e=new CGL.Uniform(N,"f","MAX_REFLECTION_LOD",0);const me=new CGL.Uniform(N,"f","tonemappingExposure",j);const Ee=new CGL.Uniform(N,"f","diffuseIntensity",K);const Te=new CGL.Uniform(N,"f","specularIntensity",q);const Ae=new CGL.Uniform(N,"f","envIntensity",1);const ve=new CGL.Uniform(N,"t","_HeightMap",0);const be=new CGL.Uniform(N,"t","_Lightmap",0);const xe=new CGL.Uniform(N,"f","lightmapIntensity",Z);const Ie=new CGL.Uniform(N,"t","_ThinFilmMap",0);const Re=new CGL.Uniform(N,"4f","_Albedo",e,t,i,n);const Se=new CGL.Uniform(N,"f","_Roughness",a);const Ce=new CGL.Uniform(N,"f","_Metalness",l);const Le=new CGL.Uniform(N,"f","_HeightDepth",Y);const Oe=new CGL.Uniform(N,"f","_ClearCoatIntensity",w);const Pe=new CGL.Uniform(N,"f","_ClearCoatRoughness",D);const ye=new CGL.Uniform(N,"f","_EmissionIntensity",W);const Ne=new CGL.Uniform(N,"f","_ThinFilmIntensity",V);const Me=new CGL.Uniform(N,"f","_ThinFilmIOR",k);const Fe=new CGL.Uniform(N,"f","_ThinFilmThickness",H);const Ue=new CGL.Uniform(N,"f","_TFThicknessTexMin",X);const Ge=new CGL.Uniform(N,"f","_TFThicknessTexMax",z);const Be=new CGL.Uniform(N,"3f","_PCOrigin",[0,0,0]);const we=new CGL.Uniform(N,"3f","_PCboxMin",[-1,-1,-1]);const De=new CGL.Uniform(N,"3f","_PCboxMax",[1,1,1]);N.uniformColorDiffuse=Re;N.uniformPbrMetalness=Ce;N.uniformPbrRoughness=Se;b.onChange=ke;R.onChange=y.onChange=c.onChange=f.onChange=u.onChange=I.onChange=S.onChange=C.onChange=L.onChange=h.onChange=_.onChange=d.onChange=O.onChange=P.onChange=T.onChange=m.onChange=p.onChange=g.onChange=E.onChange=Ve;function Ve(){N.toggleDefine("USE_OPTIMIZED_HEIGHT",T.get());N.toggleDefine("USE_CLEAR_COAT",f.get());N.toggleDefine("USE_NORMAL_MAP_FOR_CC",c.get());N.toggleDefine("USE_CC_NORMAL_MAP",u.isLinked());N.toggleDefine("LIGHTMAP_IS_RGBE",y.get());N.toggleDefine("USE_LIGHTMAP",O.isLinked()||E.get()==="lightmap");N.toggleDefine("USE_NORMAL_TEX",S.isLinked());N.toggleDefine("USE_HEIGHT_TEX",L.isLinked());N.toggleDefine("DONT_USE_NMGR",_.get());N.toggleDefine("DONT_USE_GR",p.get());N.toggleDefine("USE_THIN_FILM",g.get());N.toggleDefine("USE_EMISSION",C.get());N.toggleDefine("USE_THIN_FILM_MAP",P.get());N.toggleDefine("VCOL_COLOUR",E.get()==="colour");N.toggleDefine("VCOL_AORM",E.get()==="AORM");N.toggleDefine("VCOL_AO",E.get()==="AO");N.toggleDefine("VCOL_R",E.get()==="R");N.toggleDefine("VCOL_M",E.get()==="M");N.toggleDefine("VCOL_LIGHTMAP",E.get()==="lightmap");N.toggleDefine("USE_ALBEDO_TEX",I.get());e.setUiAttribs({greyout:I.isLinked()});t.setUiAttribs({greyout:I.isLinked()});i.setUiAttribs({greyout:I.isLinked()});n.setUiAttribs({greyout:I.isLinked()});N.toggleDefine("USE_AORM_TEX",R.get());a.setUiAttribs({greyout:R.isLinked()});l.setUiAttribs({greyout:R.isLinked()});N.toggleDefine("VERTEX_COLORS",m.get());if(!m.get()){N.toggleDefine("USE_LIGHTMAP",O.get())}else{if(E.get()==="lightmap"){N.define("USE_LIGHTMAP")}}N.toggleDefine("ALPHA_MASKED",h.get()==="Masked");N.toggleDefine("ALPHA_DITHERED",h.get()==="Dithered");N.toggleDefine("ALPHA_BLEND",h.get()==="Blend");N.toggleDefine("TONEMAP_sRGB",d.get()==="sRGB");N.toggleDefine("TONEMAP_HejiDawson",d.get()==="HejiDawson");N.toggleDefine("TONEMAP_Photographic",d.get()==="Photographic")}Ve();function U(e){N.toggleDefine("USE_ENVIRONMENT_LIGHTING",e)}function ke(){x.setUiAttribs({greyout:!b.get()})}function He(){for(let e=0;e<M.length;e+=1){const t=M[e];t.isUsed=true;F[e].position.setValue(t.position);F[e].color.setValue(t.color);F[e].specular.setValue(t.specular);F[e].lightProperties.setValue([t.intensity,t.attenuation,t.falloff,t.radius]);F[e].conePointAt.setValue(t.conePointAt);F[e].spotProperties.setValue([t.cosConeAngle,t.cosConeAngleInner,t.spotExponent]);F[e].castLight.setValue(t.castLight)}}function Xe(){const e=o.BasicPBR_vert;const t=o.light_includes_frag;let i=o.BasicPBR_frag;let n="";let r="";if(M.length>0){n=n.concat(t)}for(let e=0;e<M.length;e+=1){const s=M[e];const a=s.type;n=n.concat(re(e)||"");r=r.concat(se(e,s.type)||"")}i=i.replace(ee,n||"");i=i.replace(te,r||"");N.setSource(e,i);J.set(N);for(let e=0;e<M.length;e+=1){F[e]=null;if(!F[e]){F[e]={color:new CGL.Uniform(N,"3f","lightOP"+e+".color",[1,1,1]),position:new CGL.Uniform(N,"3f","lightOP"+e+".position",[0,11,0]),specular:new CGL.Uniform(N,"3f","lightOP"+e+".specular",[1,1,1]),lightProperties:new CGL.Uniform(N,"4f","lightOP"+e+".lightProperties",[1,1,1,1]),conePointAt:new CGL.Uniform(N,"3f","lightOP"+e+".conePointAt",vec3.create()),spotProperties:new CGL.Uniform(N,"3f","lightOP"+e+".spotProperties",[0,0,0,0]),castLight:new CGL.Uniform(N,"i","lightOP"+e+".castLight",1)}}}}function ze(){if(s.frameStore.lightStack){let t=ae!==s.frameStore.lightStack.length;if(!t){for(let e=0;e<s.frameStore.lightStack.length;e++){if(M[e]!=s.frameStore.lightStack[e]){t=true;break}}}if(t){M.length=0;for(let e=0;e<s.frameStore.lightStack.length;e++)M[e]=s.frameStore.lightStack[e];Xe();ae=s.frameStore.lightStack.length}}}function je(){if(!N)Xe();s.pushShader(N);let e=false;N.popTextures();let t=0;if(s.frameStore.lightStack)t=s.frameStore.lightStack.length;if((!s.frameStore.pbrEnvStack||s.frameStore.pbrEnvStack.length==0)&&!O.isLinked()&&t==0){e=true;r.setUiError("deflight","Default light is enabled. Please add lights or PBREnvironmentLights to your patch to make this warning disappear.",1)}else r.setUiError("deflight",null);if(s.frameStore.pbrEnvStack&&s.frameStore.pbrEnvStack.length>0&&s.frameStore.pbrEnvStack[s.frameStore.pbrEnvStack.length-1].texIBLLUT.tex&&s.frameStore.pbrEnvStack[s.frameStore.pbrEnvStack.length-1].texDiffIrr.tex&&s.frameStore.pbrEnvStack[s.frameStore.pbrEnvStack.length-1].texPreFiltered.tex){const i=s.frameStore.pbrEnvStack[s.frameStore.pbrEnvStack.length-1];Ae.setValue(i.intensity);N.pushTexture(ge,i.texIBLLUT.tex);N.pushTexture(de,i.texDiffIrr.tex,s.gl.TEXTURE_CUBE_MAP);N.pushTexture(pe,i.texPreFiltered.tex,s.gl.TEXTURE_CUBE_MAP);_e.setValue(i.texPreFilteredMipLevels||7);N.toggleDefine("USE_PARALLAX_CORRECTION",i.UseParallaxCorrection);if(i.UseParallaxCorrection){Be.setValue(i.PCOrigin);we.setValue(i.PCboxMin);De.setValue(i.PCboxMax)}U(true)}else{U(false)}if(e){const n=mat4.create();mat4.invert(n,s.vMatrix);oe[0].position=[n[12],n[13],n[14]];s.frameStore.lightStack=oe}if(A.get()){U(true);N.pushTexture(ge,A.get().tex);_e.setValue(x.get());if(v.get())N.pushTexture(de,v.get().cubemap,s.gl.TEXTURE_CUBE_MAP);if(b.get())N.pushTexture(pe,b.get().cubemap,s.gl.TEXTURE_CUBE_MAP)}if(I.get())N.pushTexture(le,I.get().tex);if(R.get())N.pushTexture(he,R.get().tex);if(S.get())N.pushTexture(fe,S.get().tex);if(C.get())N.pushTexture(ce,C.get().tex);if(L.get())N.pushTexture(ve,L.get().tex);if(O.get())N.pushTexture(be,O.get().tex);if(u.get())N.pushTexture(ue,u.get().tex);if(P.get())N.pushTexture(Ie,P.get().tex);ze();He();Q.trigger();s.popShader();if(e)s.frameStore.lightStack=[]}};Ops.Gl.Pbr.PbrMaterial.prototype=new CABLES.Op;CABLES.OPS["a5234947-f65a-41e2-a691-b81382903a71"]={f:Ops.Gl.Pbr.PbrMaterial,objName:"Ops.Gl.Pbr.PbrMaterial"};Ops.Gl.Pbr.PbrEnvironmentLight=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={IBLLUT_frag:"precision highp float;\nprecision highp int;\nprecision highp sampler2D;\n\n#ifndef WEBGL1\n#define NUM_SAMPLES 1024u\n#else\n#define NUM_SAMPLES 1024\n#endif\n#define PI 3.14159265358\n\nIN vec3 P;\n{{MODULES_HEAD}}\n\n// from https://github.com/BabylonJS/Babylon.js/blob/5e6321d887637877d8b28b417410abbbeb651c6e/src/Shaders/ShadersInclude/hdrFilteringFunctions.fx\n// modified to use different syntax for a number of variables\n#if NUM_SAMPLES > 0\n    #ifndef WEBGL1\n        // https://learnopengl.com/PBR/IBL/Specular-IBL\n        // Hammersley\n        float radicalInverse_VdC(uint bits)\n        {\n            bits = (bits << 16u) | (bits >> 16u);\n            bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);\n            bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);\n            bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);\n            bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);\n            return float(bits) * 2.3283064365386963e-10; // / 0x100000000\n        }\n\n        vec2 hammersley(uint i, uint N)\n        {\n            return vec2(float(i)/float(N), radicalInverse_VdC(i));\n        }\n    #else\n        float vanDerCorpus(int n, int base)\n        {\n            float invBase = 1.0 / float(base);\n            float denom   = 1.0;\n            float result  = 0.0;\n\n            for(int i = 0; i < 32; ++i)\n            {\n                if(n > 0)\n                {\n                    denom   = mod(float(n), 2.0);\n                    result += denom * invBase;\n                    invBase = invBase / 2.0;\n                    n       = int(float(n) / 2.0);\n                }\n            }\n\n            return result;\n        }\n\n        vec2 hammersley(int i, int N)\n        {\n            return vec2(float(i)/float(N), vanDerCorpus(i, 2));\n        }\n    #endif\n\n\t// from https://github.com/BabylonJS/Babylon.js/blob/5e6321d887637877d8b28b417410abbbeb651c6e/src/Shaders/ShadersInclude/importanceSampling.fx\n\tvec3 hemisphereImportanceSampleDggx(vec2 u, float a) {\n\t\t// pdf = D(a) * cosTheta\n\t\tfloat phi = 2. * PI * u.x;\n\n\t\t// NOTE: (aa-1) == (a-1)(a+1) produces better fp accuracy\n\t\tfloat cosTheta2 = (1. - u.y) / (1. + (a + 1.) * ((a - 1.) * u.y));\n\t\tfloat cosTheta = sqrt(cosTheta2);\n\t\tfloat sinTheta = sqrt(1. - cosTheta2);\n\n\t\treturn vec3(sinTheta * cos(phi), sinTheta * sin(phi), cosTheta);\n\t}\n\n\t// from https://google.github.io/filament/Filament.md.html#toc9.5\n\t// modified to use different syntax for a number of variables\n    const float NUM_SAMPLES_FLOAT = float(NUM_SAMPLES);\n    const float NUM_SAMPLES_FLOAT_INVERSED = 1. / NUM_SAMPLES_FLOAT;\n    const float NUM_SAMPLES_FLOAT_INVERSED4 = 4. / NUM_SAMPLES_FLOAT;\n\n    float Visibility(float NdotV, float NdotL, float alphaG)\n    {\n        // from https://github.com/BabylonJS/Babylon.js/blob/5e6321d887637877d8b28b417410abbbeb651c6e/src/Shaders/ShadersInclude/pbrBRDFFunctions.fx\n        #ifdef WEBGL1\n            // Appply simplification as all squared root terms are below 1 and squared\n            float GGXV = NdotL * (NdotV * (1.0 - alphaG) + alphaG);\n            float GGXL = NdotV * (NdotL * (1.0 - alphaG) + alphaG);\n            return 0.5 / (GGXV + GGXL);\n        #else\n            float a2 = alphaG * alphaG;\n            float GGXV = NdotL * sqrt(NdotV * (NdotV - a2 * NdotV) + a2);\n            float GGXL = NdotV * sqrt(NdotL * (NdotL - a2 * NdotL) + a2);\n            return 0.5 / (GGXV + GGXL);\n        #endif\n    }\n\n\tvoid main()\n\t{\n\t    // actual implementation (not documentation) here: https://github.com/google/filament/blob/94ff2ea6b1e39d909e9066459f2ce8c2942eb876/libs/ibl/src/CubemapIBL.cpp\n\t\t{{MODULE_BEGIN_FRAG}}\n\t\tfloat NoV = P.x;\n\t\tfloat a   = P.y;\n\n\t\tvec3 V;\n\t\tV.x = sqrt(1.0 - NoV*NoV);\n\t\tV.y = 0.0;\n\t\tV.z = NoV;\n\n\t\tvec2 r = vec2(0.0);\n\n        #ifndef WEBGL1\n        for(uint i = 0u; i < NUM_SAMPLES; i++)\n        #else\n        for(int i = 0; i < NUM_SAMPLES; i++)\n        #endif\n        {\n\t\t\tvec2 Xi = hammersley(i, NUM_SAMPLES);\n\t\t\tvec3 H  = hemisphereImportanceSampleDggx(Xi, a);\n\t\t\tvec3 L  = 2.0 * dot(V, H) * H - V;\n\n\t\t\tfloat VoH = clamp(dot(V, H), 0.0, 1.0);\n\t\t\tfloat NoL = clamp(L.z, 0.0, 1.0);\n\t\t\tfloat NoH = clamp(H.z, 0.0, 1.0);\n\n\t\t\tif (NoL > 0.0) {\n\t\t\t\tfloat Gv = Visibility(NoV, NoL, a) * NoL * (VoH / NoH);\n\t\t\t\tfloat Fc = pow(1.0 - VoH, 5.0);\n\n\t\t\t\t// modified for multiscattering https://google.github.io/filament/Filament.md.html#toc5.3.4.7\n\t\t\t    r.x += Gv * Fc;\n\t\t\t\tr.y += Gv;\n\t\t\t}\n\t\t}\n\t\tr *= NUM_SAMPLES_FLOAT_INVERSED4;\n\n\t\t{{MODULE_COLOR}}\n\t\toutColor = vec4(r.x, r.y, 0.0, 1.0);\n\t}\n#endif\n",IBLLUT_vert:"precision highp float;\nprecision highp int;\nprecision highp sampler2D;\n\n{{MODULES_HEAD}}\nIN vec3 vPosition;\nOUT vec3 P;\nUNI mat4 projMatrix;\nUNI mat4 viewMatrix;\nUNI mat4 modelMatrix;\n\nvoid main()\n{\n   vec4 pos     = vec4(vPosition,  1.0);\n   mat4 mMatrix = modelMatrix;\n\n   {{MODULE_VERTEX_POSITION}}\n\n   gl_Position  = pos;\n\n   P            = (vPosition + 1.0) * 0.5;\n}\n",irradiance_frag:'precision highp float;\nprecision highp int;\nprecision highp sampler2D;\n\n\n// from https://github.com/BabylonJS/Babylon.js/blob/5e6321d887637877d8b28b417410abbbeb651c6e/src/Shaders/ShadersInclude/hdrFilteringFunctions.fx\n// modified to use different syntax for a number of variables, equirectangular projection and rgbe encoding\n{{MODULES_HEAD}}\n#ifndef WEBGL1\n#define NUM_SAMPLES 2048u\n#else\n#define NUM_SAMPLES 2048\n#endif\n#define PI 3.14159265358\n#define PI_TWO 2.*PI\n#define RECIPROCAL_PI 1./PI\n#define RECIPROCAL_PI2 RECIPROCAL_PI/2.\n\n\n#ifdef WEBGL1\n    #ifdef GL_EXT_shader_texture_lod\n        #define textureLod texture2DLodEXT\n    #endif\n#endif\n#define SAMPLETEX textureLod\n\n// set by cables\nUNI vec3 camPos;\n\nIN  vec3 FragPos;\nUNI float rotation;\nUNI vec2 filteringInfo;\nUNI sampler2D EquiCubemap;\n\nvec2 SampleSphericalMap(vec3 direction, float rotation)\n{\n    #ifndef WEBGL1\n        vec3 newDirection = normalize(direction);\n\t\tvec2 sampleUV;\n\t\tsampleUV.x = -1. * (atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5);\n\t\tsampleUV.y = asin( clamp(direction.y, -1., 1.) ) * RECIPROCAL_PI + 0.5;\n    #endif\n\n    #ifdef WEBGL1\n        vec3 newDirection = normalize(direction);\n\t\tvec2 sampleUV = vec2(atan(newDirection.z, newDirection.x), asin(newDirection.y+1e-6));\n        sampleUV *= vec2(-0.1591, 0.3183);\n        sampleUV += 0.5;\n    #endif\n    sampleUV.x += rotation;\n    return sampleUV * vec2(-1.,1.);\n}\n\n// https://community.khronos.org/t/addition-of-two-hdr-rgbe-values/55669\nvec4 EncodeRGBE8(vec3 rgb)\n{\n    vec4 vEncoded;\n    float maxComponent = max(max(rgb.r, rgb.g), rgb.b);\n    float fExp = ceil(log2(maxComponent));\n    vEncoded.rgb = rgb / exp2(fExp);\n    vEncoded.a = (fExp + 128.0) / 255.0;\n    return vEncoded;\n}\n// https://enkimute.github.io/hdrpng.js/\nvec3 DecodeRGBE8(vec4 rgbe)\n{\n    vec3 vDecoded = rgbe.rgb * pow(2.0, rgbe.a * 255.0 - 128.0);\n    return vDecoded;\n}\n\n// from https://github.com/BabylonJS/Babylon.js/blob/5e6321d887637877d8b28b417410abbbeb651c6e/src/Shaders/ShadersInclude/importanceSampling.fx\nvec3 hemisphereCosSample(vec2 u) {\n    // pdf = cosTheta / M_PI;\n    float phi = 2. * PI * u.x;\n\n    float cosTheta2 = 1. - u.y;\n    float cosTheta = sqrt(cosTheta2);\n    float sinTheta = sqrt(1. - cosTheta2);\n\n    return vec3(sinTheta * cos(phi), sinTheta * sin(phi), cosTheta);\n}\n\n#ifndef WEBGL1\n    // https://learnopengl.com/PBR/IBL/Specular-IBL\n    // Hammersley\n    float radicalInverse_VdC(uint bits)\n    {\n        bits = (bits << 16u) | (bits >> 16u);\n        bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);\n        bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);\n        bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);\n        bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);\n        return float(bits) * 2.3283064365386963e-10; // / 0x100000000\n    }\n\n    vec2 hammersley(uint i, uint N)\n    {\n        return vec2(float(i)/float(N), radicalInverse_VdC(i));\n    }\n#else\n    float vanDerCorpus(int n, int base)\n    {\n        float invBase = 1.0 / float(base);\n        float denom   = 1.0;\n        float result  = 0.0;\n\n        for(int i = 0; i < 32; ++i)\n        {\n            if(n > 0)\n            {\n                denom   = mod(float(n), 2.0);\n                result += denom * invBase;\n                invBase = invBase / 2.0;\n                n       = int(float(n) / 2.0);\n            }\n        }\n\n        return result;\n    }\n\n    vec2 hammersley(int i, int N)\n    {\n        return vec2(float(i)/float(N), vanDerCorpus(i, 2));\n    }\n#endif\n\n// from https://github.com/google/filament/blob/main/shaders/src/light_indirect.fs\nfloat prefilteredImportanceSampling(float ipdf, float omegaP)\n{\n    // See: "Real-time Shading with Filtered Importance Sampling", Jaroslav Krivanek\n    // Prefiltering doesn\'t work with anisotropy\n    const float numSamples = float(NUM_SAMPLES);\n    const float invNumSamples = 1.0 / float(numSamples);\n    const float K = 4.0;\n    float omegaS = invNumSamples * ipdf;\n    float mipLevel = log2(K * omegaS / omegaP) * 0.5;    // log4\n    return mipLevel;\n}\n\nconst float NUM_SAMPLES_FLOAT = float(NUM_SAMPLES);\nconst float NUM_SAMPLES_FLOAT_INVERSED = 1. / NUM_SAMPLES_FLOAT;\n\nconst float K = 4.;\n\nvoid main()\n{\n    {{MODULE_BEGIN_FRAG}}\n    vec4 col = vec4(0.0, 0.0, 0.0, 0.0);\n\n    vec3 n = normalize(FragPos);\n    vec3 tangent = normalize(cross(vec3(0.0, 0.0, 1.0), n));\n    vec3 bitangent = cross(n, tangent);\n    mat3 tbn = mat3(tangent, bitangent, n);\n\n    float maxLevel = filteringInfo.y;\n    float dim0 = filteringInfo.x;\n    float omegaP = (4. * PI) / (6. * dim0 * dim0);\n\n    #ifndef WEBGL1\n    for(uint i = 0u; i < NUM_SAMPLES; ++i)\n    #else\n    for(int i = 0; i < NUM_SAMPLES; ++i)\n    #endif\n    {\n        vec2 Xi = hammersley(i, NUM_SAMPLES);\n        vec3 Ls = hemisphereCosSample(Xi);\n\n        Ls = normalize(Ls);\n\n        vec3 Ns = vec3(0., 0., 1.);\n\n        float NoL = dot(Ns, Ls);\n\n        if (NoL > 0.) {\n            float pdf_inversed = PI / NoL;\n\n            float omegaS = NUM_SAMPLES_FLOAT_INVERSED * pdf_inversed;\n            // from https://github.com/google/filament/blob/main/shaders/src/light_indirect.fs\n            float l = log2(K * omegaS / omegaP) * 0.5;\n            float mipLevel = clamp(l + 1.0, 0.0, maxLevel);\n\n            #ifndef DONT_USE_RGBE_CUBEMAPS\n            vec3 c = DecodeRGBE8(SAMPLETEX(EquiCubemap, SampleSphericalMap(tbn * Ls, rotation), mipLevel)).rgb;\n            #else\n            vec3 c = SAMPLETEX(EquiCubemap, SampleSphericalMap(tbn * Ls, rotation), mipLevel).rgb;\n            #endif\n            col.rgb += c;\n        }\n    }\n\n    col = EncodeRGBE8(col.rgb * PI * NUM_SAMPLES_FLOAT_INVERSED);\n\n    {{MODULE_COLOR}}\n    outColor = col;\n}\n',irradiance_vert:"precision highp float;\nprecision highp int;\nprecision highp sampler2D;\n\n\n{{MODULES_HEAD}}\nIN vec3 vPosition;\nIN float attrVertIndex;\n\nOUT vec3 FragPos;\nUNI mat4 projMatrix;\nUNI mat4 viewMatrix;\nUNI mat4 modelMatrix;\n\n\nvoid main()\n{\n    FragPos     = vPosition;\n\n    {{MODULE_VERTEX_POSITION}}\n    gl_Position = projMatrix * viewMatrix * modelMatrix * vec4(vPosition, 1.0);\n    gl_Position = gl_Position.xyww;\n}\n",prefiltering_frag:"precision highp float;\nprecision highp int;\nprecision highp sampler2D;\n\n\n// from https://github.com/BabylonJS/Babylon.js/blob/5e6321d887637877d8b28b417410abbbeb651c6e/src/Shaders/ShadersInclude/hdrFilteringFunctions.fx\n// modified to use different syntax for a number of variables, equirectangular projection and rgbe encoding\n{{MODULES_HEAD}}\n#ifndef WEBGL1\n#define NUM_SAMPLES 2048u\n#else\n#define NUM_SAMPLES 2048\n#endif\n#define PI 3.14159265358\n#define PI_TWO 2.*PI\n#define RECIPROCAL_PI 1./PI\n#define RECIPROCAL_PI2 RECIPROCAL_PI/2.\n#define MINIMUMVARIANCE 0.0005\n\n\n#ifdef WEBGL1\n    #ifdef GL_EXT_shader_texture_lod\n        #define textureLod texture2DLodEXT\n    #endif\n#endif\n#define SAMPLETEX textureLod\n\nIN  vec3 FragPos;\nUNI float roughness;\nUNI float rotation;\nUNI vec2 filteringInfo;\nUNI sampler2D EquiCubemap;\n\nvec2 SampleSphericalMap(vec3 direction, float rotation)\n{\n    #ifndef WEBGL1\n        vec3 newDirection = normalize(direction);\n\t\tvec2 sampleUV;\n\t\tsampleUV.x = -1. * (atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5);\n\t\tsampleUV.y = asin( clamp(direction.y, -1., 1.) ) * RECIPROCAL_PI + 0.5;\n    #endif\n\n    #ifdef WEBGL1\n        vec3 newDirection = normalize(direction);\n\t\tvec2 sampleUV = vec2(atan(newDirection.z, newDirection.x), asin(newDirection.y+1e-6));\n        sampleUV *= vec2(-0.1591, 0.3183);\n        sampleUV += 0.5;\n    #endif\n    sampleUV.x += rotation;\n    return sampleUV * vec2(-1.,1.);\n}\n\n// https://community.khronos.org/t/addition-of-two-hdr-rgbe-values/55669\nvec4 EncodeRGBE8(vec3 rgb)\n{\n    vec4 vEncoded;\n    float maxComponent = max(max(rgb.r, rgb.g), rgb.b);\n    float fExp = ceil(log2(maxComponent));\n    vEncoded.rgb = rgb / exp2(fExp);\n    vEncoded.a = (fExp + 128.0) / 255.0;\n    return vEncoded;\n}\n// https://enkimute.github.io/hdrpng.js/\nvec3 DecodeRGBE8(vec4 rgbe)\n{\n    vec3 vDecoded = rgbe.rgb * pow(2.0, rgbe.a * 255.0-128.0);\n    return vDecoded;\n}\n\n// from https://github.com/BabylonJS/Babylon.js/blob/5e6321d887637877d8b28b417410abbbeb651c6e/src/Shaders/ShadersInclude/importanceSampling.fx\nvec3 hemisphereImportanceSampleDggx(vec2 u, float a) {\n    // pdf = D(a) * cosTheta\n    float phi = 2. * PI * u.x;\n\n    // NOTE: (aa-1) == (a-1)(a+1) produces better fp accuracy\n    float cosTheta2 = (1. - u.y) / (1. + (a + 1.) * ((a - 1.) * u.y));\n    float cosTheta = sqrt(cosTheta2);\n    float sinTheta = sqrt(1. - cosTheta2);\n\n    return vec3(sinTheta * cos(phi), sinTheta * sin(phi), cosTheta);\n}\n\n// from https://github.com/BabylonJS/Babylon.js/blob/5e6321d887637877d8b28b417410abbbeb651c6e/src/Shaders/ShadersInclude/pbrBRDFFunctions.fx\nfloat normalDistributionFunction_TrowbridgeReitzGGX(float NdotH, float alphaG)\n{\n    // Note: alphaG is average slope (gradient) of the normals in slope-space.\n    // It is also the (trigonometric) tangent of the median distribution value, i.e. 50% of normals have\n    // a tangent (gradient) closer to the macrosurface than this slope.\n    float a2 = alphaG * alphaG;\n    float d = NdotH * NdotH * (a2 - 1.0) + 1.0;\n    return a2 / (PI * d * d);\n}\n\n// from https://github.com/BabylonJS/Babylon.js/blob/5e6321d887637877d8b28b417410abbbeb651c6e/src/Shaders/ShadersInclude/pbrHelperFunctions.fx\nfloat convertRoughnessToAverageSlope(float roughness)\n{\n    // Calculate AlphaG as square of roughness (add epsilon to avoid numerical issues)\n    return (roughness * roughness) + MINIMUMVARIANCE;\n}\n\n\n#ifndef WEBGL1\n    // https://learnopengl.com/PBR/IBL/Specular-IBL\n    // Hammersley\n    float radicalInverse_VdC(uint bits)\n    {\n        bits = (bits << 16u) | (bits >> 16u);\n        bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);\n        bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);\n        bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);\n        bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);\n        return float(bits) * 2.3283064365386963e-10; // / 0x100000000\n    }\n\n    vec2 hammersley(uint i, uint N)\n    {\n        return vec2(float(i)/float(N), radicalInverse_VdC(i));\n    }\n#else\n    float vanDerCorpus(int n, int base)\n    {\n        float invBase = 1.0 / float(base);\n        float denom   = 1.0;\n        float result  = 0.0;\n\n        for(int i = 0; i < 32; ++i)\n        {\n            if(n > 0)\n            {\n                denom   = mod(float(n), 2.0);\n                result += denom * invBase;\n                invBase = invBase / 2.0;\n                n       = int(float(n) / 2.0);\n            }\n        }\n\n        return result;\n    }\n\n    vec2 hammersley(int i, int N)\n    {\n        return vec2(float(i)/float(N), vanDerCorpus(i, 2));\n    }\n#endif\n\nfloat log4(float x)\n{\n    return log2(x) / 2.;\n}\n\nconst float NUM_SAMPLES_FLOAT = float(NUM_SAMPLES);\nconst float NUM_SAMPLES_FLOAT_INVERSED = 1. / NUM_SAMPLES_FLOAT;\n\nconst float K = 4.;\n\nvoid main()\n{\n    {{MODULE_BEGIN_FRAG}}\n    vec3 n = normalize(FragPos);\n    float alphaG = convertRoughnessToAverageSlope(roughness);\n    vec4 result = vec4(0.);\n\n    if (alphaG == 0.)\n    {\n        result = SAMPLETEX(EquiCubemap, SampleSphericalMap(n, rotation), 0.0);\n    }\n    else\n    {\n        vec3 tangent = abs(n.z) < 0.999 ? vec3(0., 0., 1.) : vec3(1., 0., 0.);\n        tangent = normalize(cross(tangent, n));\n        vec3 bitangent = cross(n, tangent);\n        mat3 tbn = mat3(tangent, bitangent, n);\n\n        float maxLevel = filteringInfo.y;\n        float dim0 = filteringInfo.x;\n        float omegaP = (4. * PI) / (6. * dim0 * dim0);\n\n        float weight = 0.;\n        #if defined(WEBGL2)\n        for(uint i = 0u; i < NUM_SAMPLES; ++i)\n        #else\n        for(int i = 0; i < NUM_SAMPLES; ++i)\n        #endif\n        {\n            vec2 Xi = hammersley(i, NUM_SAMPLES);\n            vec3 H = hemisphereImportanceSampleDggx(Xi, alphaG);\n\n            float NoV = 1.;\n            float NoH = H.z;\n            float NoH2 = H.z * H.z;\n            float NoL = 2. * NoH2 - 1.;\n            vec3 L = vec3(2. * NoH * H.x, 2. * NoH * H.y, NoL);\n            L = normalize(L);\n\n            if (NoL > 0.)\n            {\n                float pdf_inversed = 4. / normalDistributionFunction_TrowbridgeReitzGGX(NoH, alphaG);\n\n                float omegaS = NUM_SAMPLES_FLOAT_INVERSED * pdf_inversed;\n                float l = log4(omegaS) - log4(omegaP) + log4(K);\n                float mipLevel = clamp(l, 0.0, maxLevel);\n\n                weight += NoL;\n\n                #ifndef DONT_USE_RGBE_CUBEMAPS\n                vec3 c = DecodeRGBE8(SAMPLETEX(EquiCubemap, SampleSphericalMap(tbn * L, rotation), mipLevel)).rgb;\n                #else\n                vec3 c = SAMPLETEX(EquiCubemap, SampleSphericalMap(tbn * L, rotation), mipLevel).rgb;\n                #endif\n                result.rgb += c * NoL;\n            }\n        }\n\n        result = result / weight;\n        result = EncodeRGBE8(result.rgb);\n    }\n\n    {{MODULE_COLOR}}\n    outColor = result;\n}\n",prefiltering_vert:"precision highp float;\nprecision highp int;\nprecision highp sampler2D;\n\n{{MODULES_HEAD}}\nIN vec3 vPosition;\nIN float attrVertIndex;\n\nOUT vec3 FragPos;\nUNI mat4 projMatrix;\nUNI mat4 viewMatrix;\nUNI mat4 modelMatrix;\n\n\nvoid main()\n{\n    FragPos     = vPosition;\n\n    {{MODULE_VERTEX_POSITION}}\n    gl_Position = projMatrix * viewMatrix * modelMatrix * vec4(vPosition, 1.0);\n    gl_Position = gl_Position.xyww;\n}\n"};const s=e.patch.cgl;const G=s.glVersion==1;const B=new CABLES.CG.BoundingBox;const i=new CGL.Geometry("unit cube");i.vertices=new Float32Array([-1,1,-1,-1,-1,-1,1,-1,-1,1,-1,-1,1,1,-1,-1,1,-1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,-1,1,-1,1,1,1,1,1,1,1,1,1,-1,1,-1,-1,-1,-1,1,-1,1,1,1,1,1,1,1,1,1,-1,1,-1,-1,1,-1,1,-1,1,1,-1,1,1,1,1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,1,-1,-1,1,-1,-1,-1,-1,1,1,-1,1]);const a=new CGL.Mesh(s,i);const w=CGL.MESHES.getSimpleRect(s,"fullscreenRectangle");const D=e.inTrigger("render");const V=e.inFloatSlider("Intensity",1);const o=e.inTexture("RGBE Environment map");const n=e.inDropDown("Size Irradiance map",[16,32,64],64);const r=e.inDropDown("Size pre-filtered environment",[64,128],128);const l=e.inDropDown("Size IBL LUT",[128,256,512,1024],256);const h=e.inBool("Force 8bit IBL",true);const f=e.inBool("Environment map does not contain RGBE data",false);const c=e.inFloat("Rotation",0);const u=e.inValueBool("Use parallax correction",false);const g=e.inFloat("center X",0);const d=e.inFloat("center Y",1.8);const p=e.inFloat("center Z",0);const _=e.inFloat("Box min X",-1);const m=e.inFloat("Box min Y",-1);const E=e.inFloat("Box min Z",-1);const T=e.inFloat("Box max X",1);const A=e.inFloat("Box max Y",1);const v=e.inFloat("Box max Z",1);e.setPortGroup("Parallax Correction",[u,g,d,p,_,m,E,T,A,v]);let b=true;let x=true;let I=true;n.onChange=()=>{b=true};r.onChange=()=>{x=true};l.onChange=h.onChange=()=>{I=true};const R=e.outTrigger("next");const k=e.outTexture("IBL LUT");const H=e.outTexture("cubemap (diffuse irradiance)");const X=e.outTexture("cubemap (pre-filtered environment map)");const z=e.outNumber("Number of Pre-filtered mip levels");e.toWorkPortsNeedToBeLinked(o);let S=null;let j=null;let C=null;let L=null;let O=null;const P={};const y=new CGL.Shader(s,"IrradianceShader");const N=new CGL.Shader(s,"PrefilteringShader");y.setModules(["MODULE_VERTEX_POSITION","MODULE_COLOR","MODULE_BEGIN_FRAG"]);N.setModules(["MODULE_VERTEX_POSITION","MODULE_COLOR","MODULE_BEGIN_FRAG"]);if(s.glVersion==1){if(!s.gl.getExtension("EXT_shader_texture_lod")){e.log("no EXT_shader_texture_lod texture extension");throw"no EXT_shader_texture_lod texture extension"}else{y.enableExtension("GL_EXT_shader_texture_lod");N.enableExtension("GL_EXT_shader_texture_lod");s.gl.getExtension("OES_texture_float");s.gl.getExtension("OES_texture_float_linear");s.gl.getExtension("OES_texture_half_float");s.gl.getExtension("OES_texture_half_float_linear");s.gl.getExtension("WEBGL_color_buffer_float");y.enableExtension("GL_OES_standard_derivatives");y.enableExtension("GL_OES_texture_float");y.enableExtension("GL_OES_texture_float_linear");y.enableExtension("GL_OES_texture_half_float");y.enableExtension("GL_OES_texture_half_float_linear");N.enableExtension("GL_OES_standard_derivatives");N.enableExtension("GL_OES_texture_float");N.enableExtension("GL_OES_texture_float_linear");N.enableExtension("GL_OES_texture_half_float");N.enableExtension("GL_OES_texture_half_float_linear")}}let M=[0,0];y.offScreenPass=true;const W=new CGL.Uniform(y,"t","EquiCubemap",0);const Y=new CGL.Uniform(y,"2f","filteringInfo",M);const K=new CGL.Uniform(y,"f","rotation",0);y.setSource(t.irradiance_vert,t.irradiance_frag);let F=[0,0];N.offScreenPass=true;const q=new CGL.Uniform(N,"t","EquiCubemap",0);const Z=new CGL.Uniform(N,"f","roughness",0);const Q=new CGL.Uniform(N,"f","rotation",0);const J=new CGL.Uniform(N,"2f","filteringInfo",F);N.setSource(t.prefiltering_vert,t.prefiltering_frag);const U=new CGL.Shader(s,"IBLLUTShader");U.offScreenPass=true;U.setModules(["MODULE_VERTEX_POSITION","MODULE_COLOR","MODULE_BEGIN_FRAG"]);U.setSource(t.IBLLUT_vert,t.IBLLUT_frag);f.onChange=()=>{y.toggleDefine("DONT_USE_RGBE_CUBEMAPS",f);N.toggleDefine("DONT_USE_RGBE_CUBEMAPS",f);b=true;x=true};c.onChange=()=>{x=b=true};function $(e){if(S)S.dispose();S=new CGL.CubemapFramebuffer(s,Number(e),Number(e),{clear:false,filter:CGL.Texture.FILTER_NEAREST,wrap:CGL.Texture.WRAP_CLAMP_TO_EDGE});M[0]=e;M[1]=1+Math.floor(Math.log(e)*1.4426950408889634);y.popTextures();y.pushTexture(W,o.get().tex);K.setValue(c.get()/360);S.renderStart(s);for(let e=0;e<6;e+=1){S.renderStartCubemapFace(e);a.render(y);S.renderEndCubemapFace()}S.renderEnd();H.set(S.getTextureColor())}function ee(e){e=Number(e);let i=new CGL.CubemapFramebuffer(s,e,e,{isFloatingPointTexture:false,clear:false,filter:CGL.Texture.FILTER_LINEAR,wrap:CGL.Texture.WRAP_CLAMP_TO_EDGE});if(C)C.dispose();C=new CGL.CubemapFramebuffer(s,e,e,{clear:false,filter:CGL.Texture.FILTER_MIPMAP,wrap:CGL.Texture.WRAP_CLAMP_TO_EDGE});s.gl.bindTexture(s.gl.TEXTURE_CUBE_MAP,C.getTextureColor().tex);s.gl.texParameteri(s.gl.TEXTURE_CUBE_MAP,s.gl.TEXTURE_WRAP_S,s.gl.CLAMP_TO_EDGE);s.gl.texParameteri(s.gl.TEXTURE_CUBE_MAP,s.gl.TEXTURE_WRAP_T,s.gl.CLAMP_TO_EDGE);if(s.glVersion==2)s.gl.texParameteri(s.gl.TEXTURE_CUBE_MAP,s.gl.TEXTURE_WRAP_R,s.gl.CLAMP_TO_EDGE);s.gl.texParameteri(s.gl.TEXTURE_CUBE_MAP,s.gl.TEXTURE_MIN_FILTER,s.gl.LINEAR_MIPMAP_LINEAR);s.gl.texParameteri(s.gl.TEXTURE_CUBE_MAP,s.gl.TEXTURE_MAG_FILTER,s.gl.LINEAR);s.gl.generateMipmap(s.gl.TEXTURE_CUBE_MAP);O=1+Math.floor(Math.log(e)*1.4426950408889634);z.set(O);F[0]=e;F[1]=O;N.popTextures();N.pushTexture(q,o.get().tex);Q.setValue(c.get()/360);let t=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&navigator.userAgent.match(/iPhone/i);if(t){O=0}for(let t=0;t<=O;++t){const n=e*.5**t;const r=t/(O-1);Z.setValue(r);i.setSize(n,n);i.renderStart(s);for(let e=0;e<6;e++){i.renderStartCubemapFace(e);a.render(N);s.gl.bindTexture(s.gl.TEXTURE_CUBE_MAP,C.getTextureColor().tex);s.gl.copyTexImage2D(s.gl.TEXTURE_CUBE_MAP_POSITIVE_X+e,t,s.gl.RGBA8,0,0,n,n,0);i.renderEndCubemapFace()}i.renderEnd()}if(t){s.gl.bindTexture(s.gl.TEXTURE_CUBE_MAP,C.getTextureColor().tex);s.gl.generateMipmap(s.gl.TEXTURE_CUBE_MAP)}i.delete();s.setTexture(0,null);X.setRef(C.getTextureColor())}function te(t){t=Number(t);if(L)L.dispose();if(G){L=new CGL.Framebuffer(s,t,t,{isFloatingPointTexture:true,filter:CGL.Texture.FILTER_LINEAR,wrap:CGL.Texture.WRAP_CLAMP_TO_EDGE})}else{let e=!h.get()&&!s.glUseHalfFloatTex;if(e){L=new CGL.Framebuffer2(s,t,t,{pixelFormat:CGL.Texture.PFORMATSTR_RG16F,filter:CGL.Texture.FILTER_LINEAR,wrap:CGL.Texture.WRAP_CLAMP_TO_EDGE})}else{L=new CGL.Framebuffer2(s,t,t,{filter:CGL.Texture.FILTER_LINEAR,pixelFormat:CGL.Texture.PFORMATSTR_RGBA8UB,wrap:CGL.Texture.WRAP_CLAMP_TO_EDGE})}}s.frameStore.renderOffscreen=true;L.renderStart(s);w.render(U);L.renderEnd();s.frameStore.renderOffscreen=false;k.set(L.getTextureColor())}o.onChange=()=>{if(o.get())e.setUiError("nocubemapinput",null);x=b=true};function ie(){gui.setTransformGizmo({posX:g,posY:d,posZ:p});gui.setTransformGizmo({posX:_,posY:m,posZ:E},1);gui.setTransformGizmo({posX:T,posY:A,posZ:v},2);if(CABLES.UI&&gui.shouldDrawOverlay){s.pushShader(CABLES.GL_MARKER.getDefaultShader(s))}else{s.pushShader(CABLES.GL_MARKER.getSelectedShader(s))}s.pushModelMatrix();mat4.translate(s.mMatrix,s.mMatrix,[(_.get()+T.get())/2,(m.get()+A.get())/2,(E.get()+v.get())/2]);mat4.scale(s.mMatrix,s.mMatrix,[(T.get()-_.get())/2,(A.get()-m.get())/2,(v.get()-E.get())/2]);B.render(s);s.popShader();s.popModelMatrix()}u.onChange=()=>{const e=u.get();g.setUiAttribs({greyout:!e});d.setUiAttribs({greyout:!e});p.setUiAttribs({greyout:!e});_.setUiAttribs({greyout:!e});m.setUiAttribs({greyout:!e});E.setUiAttribs({greyout:!e});T.setUiAttribs({greyout:!e});A.setUiAttribs({greyout:!e});v.setUiAttribs({greyout:!e})};D.onTriggered=function(){if(!o.get()){R.trigger();e.setUiError("nocubemapinput","No Environment Texture connected");return}Y.setValue(M);J.setValue(F);if(!s.frameStore.shadowPass){if(I){te(Number(l.get()));I=false}if(x){ee(Number(r.get()));x=false}if(b){$(Number(n.get()));b=false}}P.texIBLLUT=L.getTextureColor();P.texDiffIrr=S.getTextureColor();P.texPreFiltered=C.getTextureColor();P.texPreFilteredMipLevels=z.get();P.intensity=V.get();P.UseParallaxCorrection=u.get();P.PCOrigin=[g.get(),d.get(),p.get()];P.PCboxMin=[_.get(),m.get(),E.get()];P.PCboxMax=[T.get(),A.get(),v.get()];s.frameStore.pbrEnvStack=s.frameStore.pbrEnvStack||[];s.frameStore.pbrEnvStack.push(P);if(s.shouldDrawHelpers(e)&&P.UseParallaxCorrection&&!s.frameStore.shadowPass)ie();R.trigger();s.frameStore.pbrEnvStack.pop()}};Ops.Gl.Pbr.PbrEnvironmentLight.prototype=new CABLES.Op;CABLES.OPS["7110f169-adfd-4649-a77a-c825751eaa9b"]={f:Ops.Gl.Pbr.PbrEnvironmentLight,objName:"Ops.Gl.Pbr.PbrEnvironmentLight"};Ops.Gl.Texture_v2=function(){CABLES.Op.apply(this,arguments);const r=this;const e=r.attachments={};const s=r.inUrl("File",[".jpg",".png",".webp",".jpeg",".avif"]),t=r.inSwitch("Filter",["nearest","linear","mipmap"]),i=r.inValueSelect("Wrap",["repeat","mirrored repeat","clamp to edge"],"clamp to edge"),n=r.inSwitch("Anisotropic",["0","1","2","4","8","16"],"0"),a=r.inSwitch("Data Format",["R","RG","RGB","RGBA","SRGBA"],"RGBA"),o=r.inValueBool("Flip",false),l=r.inValueBool("Pre Multiplied Alpha",false),h=r.inValueBool("Active",true),f=r.inBool("Save Memory",true),c=r.outTexture("Texture"),u=r.inBool("Add Cachebuster",false),g=r.inTriggerButton("Reload"),d=r.outNumber("Width"),p=r.outNumber("Height"),_=r.outNumber("Aspect Ratio"),m=r.outBoolNum("Loaded",0),E=r.outBoolNum("Loading",0);const T=r.patch.cgl;r.toWorkPortsNeedToBeLinked(c);r.setPortGroup("Size",[d,p]);let A=null;let v=null;let b=null;let x=CGL.Texture.FILTER_MIPMAP;let I=CGL.Texture.WRAP_REPEAT;let R=0;let S=0;l.setUiAttribs({hidePort:true});l.onChange=s.onChange=a.onChange=u.onChange=o.onChange=L;n.onChange=t.onChange=y;i.onChange=N;t.set("mipmap");i.set("repeat");c.set(CGL.Texture.getEmptyTexture(T));g.onTriggered=L;h.onChange=function(){if(h.get()){if(A!=s.get()||!b)L();else c.set(b)}else{c.set(CGL.Texture.getEmptyTexture(T));d.set(CGL.Texture.getEmptyTexture(T).width);p.set(CGL.Texture.getEmptyTexture(T).height);if(b)b.delete();r.setUiAttrib({extendTitle:""});b=null}};const C=function(){const e=CGL.Texture.getTempTexture(T);c.set(e)};function L(e){clearTimeout(S);S=setTimeout(function(){P(e)},1)}function O(){if(a.get()=="R")return CGL.Texture.PFORMATSTR_R8UB;if(a.get()=="RG")return CGL.Texture.PFORMATSTR_RG8UB;if(a.get()=="RGB")return CGL.Texture.PFORMATSTR_RGB8UB;if(a.get()=="SRGBA")return CGL.Texture.PFORMATSTR_SRGBA8;return CGL.Texture.PFORMATSTR_RGBA8UB}function P(e){r.checkMainloopExists();if(!h.get())return;if(v)v=T.patch.loading.finished(v);v=T.patch.loading.start(r.objName,s.get(),r);let t=r.patch.getFilePath(String(s.get()));if(u.get()||e===true)t=CABLES.cacheBust(t);if(String(s.get()).indexOf("data:")==0)t=s.get();let i=false;A=s.get();if(s.get()&&s.get().length>1){m.set(false);E.set(true);const n=s.get();r.setUiAttrib({extendTitle:CABLES.basename(t)});if(i)r.refreshParams();T.patch.loading.addAssetLoadingTask(()=>{r.setUiError("urlerror",null);CGL.Texture.load(T,t,function(e,t){T.checkFrameStarted("texture inittexture");if(s.get()!=n){v=T.patch.loading.finished(v);return}if(b)b.delete();if(e){const i=CGL.Texture.getErrorTexture(T);c.setRef(i);r.setUiError("urlerror",'could not load texture: "'+s.get()+'"',2);v=T.patch.loading.finished(v);return}d.set(t.width);p.set(t.height);_.set(t.width/t.height);b=t;c.setRef(b);E.set(false);m.set(true);if(f.get())b.image=null;if(v){v=T.patch.loading.finished(v)}r.checkMainloopExists()},{anisotropic:R,wrap:I,flip:o.get(),unpackAlpha:l.get(),pixelFormat:O(),filter:x});r.checkMainloopExists()})}else{C();v=T.patch.loading.finished(v)}}function y(){if(t.get()=="nearest")x=CGL.Texture.FILTER_NEAREST;else if(t.get()=="linear")x=CGL.Texture.FILTER_LINEAR;else if(t.get()=="mipmap")x=CGL.Texture.FILTER_MIPMAP;else if(t.get()=="Anisotropic")x=CGL.Texture.FILTER_ANISOTROPIC;n.setUiAttribs({greyout:x!=CGL.Texture.FILTER_MIPMAP});R=parseFloat(n.get());L()}function N(){if(i.get()=="repeat")I=CGL.Texture.WRAP_REPEAT;if(i.get()=="mirrored repeat")I=CGL.Texture.WRAP_MIRRORED_REPEAT;if(i.get()=="clamp to edge")I=CGL.Texture.WRAP_CLAMP_TO_EDGE;L()}r.onFileChanged=function(e){if(s.get()&&s.get().indexOf(e)>-1){c.set(CGL.Texture.getEmptyTexture(r.patch.cgl));c.set(CGL.Texture.getTempTexture(T));P(true)}}};Ops.Gl.Texture_v2.prototype=new CABLES.Op;CABLES.OPS["790f3702-9833-464e-8e37-6f0f813f7e16"]={f:Ops.Gl.Texture_v2,objName:"Ops.Gl.Texture_v2"};Ops.Graphics.Geometry.FlipNormals=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inObject("Geometry"),r=e.outObject("Result"),s=e.inValueBool("Flip",true),a=e.inValueBool("Normalize",true);s.onChange=a.onChange=n.onChange=i;function i(){let e=n.get();if(!e){r.set(null);return}let i=e.copy();if(s.get()){for(let e=0;e<i.vertexNormals.length;e++)i.vertexNormals[e]*=-1;if(a.get()){let t=vec3.create();for(let e=0;e<i.vertexNormals.length;e+=3){vec3.set(t,i.vertexNormals[e+0],i.vertexNormals[e+1],i.vertexNormals[e+2]);vec3.normalize(t,t);i.vertexNormals[e+0]=t[0];i.vertexNormals[e+1]=t[1];i.vertexNormals[e+2]=t[2]}}}r.set(i)}};Ops.Graphics.Geometry.FlipNormals.prototype=new CABLES.Op;CABLES.OPS["0055f588-dde6-4232-958b-4c19cdc67abd"]={f:Ops.Graphics.Geometry.FlipNormals,objName:"Ops.Graphics.Geometry.FlipNormals"};Ops.Extension.Deprecated.ScaleXYZ=function(){CABLES.Op.apply(this,arguments);const t=this;const e=t.attachments={};const i=t.inTrigger("render"),n=t.inValueFloat("x",1),r=t.inValueFloat("y",1),s=t.inValueFloat("z",1),a=t.outTrigger("trigger");const o=vec3.create();let l=true;n.onChange=r.onChange=s.onChange=f;f();i.onTriggered=h;function h(){const e=t.patch.cg||t.patch.cgl;if(l){vec3.set(o,n.get(),r.get(),s.get());l=false}e.pushModelMatrix();mat4.scale(e.mMatrix,e.mMatrix,o);a.trigger();e.popModelMatrix()}function f(){l=true}};Ops.Extension.Deprecated.ScaleXYZ.prototype=new CABLES.Op;CABLES.OPS["9ba52457-5f0d-4b20-a97c-4ec4856b8e29"]={f:Ops.Extension.Deprecated.ScaleXYZ,objName:"Ops.Extension.Deprecated.ScaleXYZ"};Ops.Graphics.DepthTest=function(){CABLES.Op.apply(this,arguments);const t=this;const e=t.attachments={};const i=t.inTrigger("Render"),n=t.inValueBool("Enable depth testing",true),r=t.inValueSelect("Depth Test Method",["never","always","less","less or equal","greater","greater or equal","equal","not equal"],"less or equal"),s=t.inValueBool("Write to depth buffer",true),a=t.outTrigger("Next");const o=t.patch.cgl;let l=CABLES.CG.DEPTH_COMPARE_LESSEQUAL;r.onChange=h;function h(){const e=r.get();if(e=="never")l=CABLES.CG.DEPTH_COMPARE_NEVER;else if(e=="always")l=CABLES.CG.DEPTH_COMPARE_ALWAYS;else if(e=="less")l=CABLES.CG.DEPTH_COMPARE_LESS;else if(e=="less or equal")l=CABLES.CG.DEPTH_COMPARE_LESSEQUAL;else if(e=="greater")l=CABLES.CG.DEPTH_COMPARE_GREATER;else if(e=="greater or equal")l=CABLES.CG.DEPTH_COMPARE_GREATEREQUAL;else if(e=="equal")l=CABLES.CG.DEPTH_COMPARE_EQUAL;else if(e=="not equal")l=CABLES.CG.DEPTH_COMPARE_NOTEQUAL}i.onTriggered=function(){const e=t.patch.cg;if(!e)return;t.patch.cg.pushDepthTest(n.get());t.patch.cg.pushDepthWrite(s.get());t.patch.cg.pushDepthFunc(e.DEPTH_FUNCS[l]);a.trigger();t.patch.cg.popDepthTest();t.patch.cg.popDepthWrite();t.patch.cg.popDepthFunc()}};Ops.Graphics.DepthTest.prototype=new CABLES.Op;CABLES.OPS["3996ed5d-8143-4bec-9cfd-c1b193a295af"]={f:Ops.Graphics.DepthTest,objName:"Ops.Graphics.DepthTest"};Ops.Graphics.Geometry.GeometryAttributes=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const i=e.inObject("Geometry"),n=e.outArray("Faces",3),r=e.outArray("Vertices",3),s=e.outArray("Normals",3),a=e.outArray("TexCoords",2),o=e.outArray("Vertex Colors",4),l=e.outArray("Tangents",3),h=e.outArray("BiTangents",3);i.onChange=function(){let e=i.get();if(!e){r.setRef(null);n.setRef(null);a.setRef(null);s.setRef(null);l.setRef(null);h.setRef(null);o.setRef(null);return}let t=Array.prototype.slice.call(e.vertices);r.setRef(t);n.setRef(e.verticesIndices);a.setRef(e.texCoords);s.setRef(e.vertexNormals);l.setRef(e.tangents);h.setRef(e.biTangents);o.setRef(e.vertexColors)}};Ops.Graphics.Geometry.GeometryAttributes.prototype=new CABLES.Op;CABLES.OPS["b215118b-de1f-4be9-8890-d07a2ecff010"]={f:Ops.Graphics.Geometry.GeometryAttributes,objName:"Ops.Graphics.Geometry.GeometryAttributes"};Ops.Ui.VizArrayTable=function(){CABLES.Op.apply(this,arguments);const d=this;const e=d.attachments={};const p=d.inArray("Array"),_=d.inInt("Start Row",0);d.setUiAttrib({height:200,width:400,resizable:true,vizLayerMaxZoom:2500});function m(t){let i="";if(typeof t=="string"){i='"'+t+'"'}else if(CABLES.UTILS.isNumeric(t))i=String(Math.round(t*1e4)/1e4);else if(Array.isArray(t)){let e="...";if(t.length==0)e="";i="["+e+"] ("+t.length+")"}else if(typeof t=="object"){try{i=JSON.stringify(t,true,1)}catch(e){i="{???}"}}else if(t!=t||t===undefined){i+=String(t)}else{i+=String(t)}return i}d.renderVizLayer=(n,r)=>{n.fillStyle="#222";n.fillRect(r.x,r.y,r.width,r.height);n.save();n.scale(r.scale,r.scale);n.font="normal 10px sourceCodePro";n.fillStyle="#ccc";const s=p.get()||[];let a=1;if(p.get()===null)d.setUiAttrib({extendTitle:"null"});else if(p.get()===undefined)d.setUiAttrib({extendTitle:"undefined"});else d.setUiAttrib({extendTitle:"length: "+s.length});if(p.links.length>0&&p.links[0].getOtherPort(p))a=p.links[0].getOtherPort(p).uiAttribs.stride||1;let e=Math.floor(r.height/r.scale/10-1);let o=4;let l=_.get()*a;let i=[];for(let e=0;e<a;e++)i[e]=0;for(let t=l;t<l+e*a;t+=a){for(let e=0;e<a;e++){const c=s[t+e];i[e]=Math.max(i[e],m(c).length)}}let h=[];let t=30;for(let e=0;e<a;e++){h[e]=t;t+=(i[e]+1)*7}for(let i=l;i<l+e*a;i+=a){if(i<0)continue;if(i+a>s.length)continue;n.fillStyle="#666";const u=i/a;if(u>=0)n.fillText(u,r.x/r.scale+o,r.y/r.scale+10+(i-l)/a*10+o);for(let t=0;t<a;t++){const c=s[i+t];let e=m(c);n.fillStyle="#ccc";if(typeof c=="string"){}else if(CABLES.UTILS.isNumeric(c))e=String(Math.round(c*1e4)/1e4);else if(Array.isArray(c)){}else if(typeof c=="object"){}else if(c!=c||c===undefined){n.fillStyle="#f00"}n.fillText(e,r.x/r.scale+h[t],r.y/r.scale+10+(i-l)/a*10+o)}}if(p.get()===null)n.fillText("null",r.x/r.scale+10,r.y/r.scale+10+o);else if(p.get()===undefined)n.fillText("undefined",r.x/r.scale+10,r.y/r.scale+10+o);const f=30;if(r.scale<=0)return;if(l>0){const g=n.createLinearGradient(0,r.y/r.scale+5,0,r.y/r.scale+f);g.addColorStop(0,"#222");g.addColorStop(1,"rgba(34,34,34,0.0)");n.fillStyle=g;n.fillRect(r.x/r.scale,r.y/r.scale,2e5,f)}if(l+e*a<s.length){const g=n.createLinearGradient(0,r.y/r.scale+r.height/r.scale-f+5,0,r.y/r.scale+r.height/r.scale-f+f);g.addColorStop(1,"#222");g.addColorStop(0,"rgba(34,34,34,0.0)");n.fillStyle=g;n.fillRect(r.x/r.scale,r.y/r.scale+r.height/r.scale-f,2e5,f)}n.restore()}};Ops.Ui.VizArrayTable.prototype=new CABLES.Op;CABLES.OPS["af2eeaaf-ff86-4bfb-9a27-42f05160a5d8"]={f:Ops.Ui.VizArrayTable,objName:"Ops.Ui.VizArrayTable"};Ops.Gl.RenderGeometry_v2=function(){CABLES.Op.apply(this,arguments);const t=this;const e=t.attachments={};const i=t.inTrigger("render"),n=t.inObject("Geometry",null,"geometry"),r=t.inBool("Render Mesh",true),s=t.inBool("Add Vertex Numbers",true),a=t.outTrigger("trigger");t.toWorkPortsNeedToBeLinked(n,i);n.ignoreValueSerialize=true;let o=null;let l=true;n.onLinkChanged=s.onChange=n.onChange=()=>{l=true};i.onTriggered=function(){if(l)h();if(o&&r.get())o.render(t.patch.cgl.getShader());a.trigger()};function h(){l=false;const e=n.get();if(e&&e.isGeometry){if(o){o.dispose();o=null}if(!o){o=new CGL.Mesh(t.patch.cgl,e);o.addVertexNumbers=s.get();o.setGeom(e)}}else{o=null}}};Ops.Gl.RenderGeometry_v2.prototype=new CABLES.Op;CABLES.OPS["0a9bdb39-8250-460e-8d99-50fe6825d956"]={f:Ops.Gl.RenderGeometry_v2,objName:"Ops.Gl.RenderGeometry_v2"};Ops.Gl.Shader.WireframeMaterial_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={wireframe_frag:"{{MODULES_HEAD}}\n\nIN vec3 barycentric;\nIN vec3 norm;\nUNI float width;\n\nUNI vec4 colorFill;\nUNI vec4 colorWire;\n\nUNI float aa;\n\nfloat edgeFactor()\n{\n    vec3 d = fwidth(barycentric);\n    vec3 a3 = smoothstep(vec3(0.0), d*width, barycentric);\n    return min(min(a3.x, a3.y), a3.z);\n}\n\nvoid main()\n{\n    vec4 col;\n    {{MODULE_BEGIN_FRAG}}\n\n\n    #ifdef WIREFRAME_FILL\n\n        float v=(1.0-edgeFactor())*(aa*width);\n        col = mix(colorFill,colorWire,v);\n\n    #endif\n\n    #ifndef WIREFRAME_FILL\n\n        float f=(1.0-edgeFactor())*(aa*width);\n        col = colorWire;\n        col.a=f;\n        if(f==0.0)discard;\n    #endif\n\n    {{MODULE_COLOR}}\n\n    outColor=col;\n}",wireframe_vert:"{{MODULES_HEAD}}\n\nIN vec3 vPosition;\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\nOUT vec3 barycentric;\nIN vec2 attrTexCoord;\nOUT vec2 texCoord;\n\nIN vec3 attrBarycentric;\nIN vec3 attrVertNormal;\nOUT vec3 norm;\n\nvoid main()\n{\n    norm=attrVertNormal;\n    texCoord=attrTexCoord;\n    barycentric=attrBarycentric;\n    mat4 mMatrix=modelMatrix;\n    vec4 pos=vec4(vPosition, 1.0);\n\n    {{MODULE_VERTEX_POSITION}}\n\n    gl_Position = projMatrix * viewMatrix * mMatrix * pos;\n}\n"};const i=e.inTrigger("render"),n=e.outTrigger("trigger"),r=e.inValueBool("enable depth testing",true),s=e.inFloat("width",1),a=e.inValueSlider("AntiAlias",.95),o=e.inValueSlider("diffuse r",1),l=e.inValueSlider("diffuse g",1),h=e.inValueSlider("diffuse b",1),f=e.inValueSlider("diffuse A",1),c=e.inValueBool("fill",true),u=e.inValueSlider("Fill R",.5),g=e.inValueSlider("Fill G",.5),d=e.inValueSlider("Fill B",.5),p=e.inValueSlider("Fill A",1);e.setPortGroup("Color Wire",[o,l,h,f]);e.setPortGroup("Color Fill",[u,g,d,p,c]);o.setUiAttribs({colorPick:true});u.setUiAttribs({colorPick:true});c.onChange=m;const _=e.patch.cgl;function m(){if(T)T.toggleDefine("WIREFRAME_FILL",c.get());u.setUiAttribs({greyout:!c.get()});g.setUiAttribs({greyout:!c.get()});d.setUiAttribs({greyout:!c.get()});p.setUiAttribs({greyout:!c.get()})}let E=function(){_.pushDepthTest(r.get());_.pushShader(T);n.trigger();_.popShader();_.popDepthTest()};const T=new CGL.Shader(_,"Wireframe Material");const A=new CGL.Uniform(T,"f","width",s);const v=new CGL.Uniform(T,"f","aa",a);const b=new CGL.Uniform(T,"4f","colorFill",u,g,d,p);const x=new CGL.Uniform(T,"4f","colorWire",o,l,h,f);T.setModules(["MODULE_VERTEX_POSITION","MODULE_COLOR","MODULE_BEGIN_FRAG"]);T.setSource(t.wireframe_vert||"",t.wireframe_frag||"");T.wireframe=true;m();if(_.glVersion==1){if(!_.gl.getExtension("OES_standard_derivatives"))e.setUiError("noderivatives","no standard derivatives extension available!");T.enableExtension("OES_standard_derivatives")}i.onTriggered=E;E()};Ops.Gl.Shader.WireframeMaterial_v2.prototype=new CABLES.Op;CABLES.OPS["a8dfa4ef-8d81-4408-91e2-76b997bd7bd9"]={f:Ops.Gl.Shader.WireframeMaterial_v2,objName:"Ops.Gl.Shader.WireframeMaterial_v2"};window.addEventListener("load",function(e){CABLES.jsLoaded=new Event("CABLES.jsLoaded");document.dispatchEvent(CABLES.jsLoaded)});(function(){"use strict";var s="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,i){if(e==Array.prototype||e==Object.prototype)return e;e[t]=i.value;return e};function e(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var t=0;t<e.length;++t){var i=e[t];if(i&&i.Math==Math)return i}throw Error("Cannot find global object")}var a=e(this);function t(e,t){if(t)e:{var i=a;e=e.split(".");for(var n=0;n<e.length-1;n++){var r=e[n];if(!(r in i))break e;i=i[r]}e=e[e.length-1];n=i[e];t=t(n);t!=n&&null!=t&&s(i,e,{configurable:!0,writable:!0,value:t})}}var i="function"==typeof Object.assign?Object.assign:function(e,t){for(var i=1;i<arguments.length;i++){var n=arguments[i];if(n)for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t("Object.assign",function(e){return e||i});var n=this||self;var r={facingMode:"user",width:640,height:480};function o(e,t){this.video=e;this.a=0;this.b=Object.assign(Object.assign({},r),t)}function l(e){window.requestAnimationFrame(function(){f(e)})}function h(e,t){e.video.srcObject=t;e.video.onloadedmetadata=function(){e.video.play();l(e)}}function f(e){var t=null;e.video.paused||e.video.currentTime===e.a||(e.a=e.video.currentTime,t=e.b.onFrame());t?t.then(function(){l(e)}):l(e)}o.prototype.start=function(){var t=this;navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||alert("No navigator.mediaDevices.getUserMedia exists.");var e=this.b;return navigator.mediaDevices.getUserMedia({video:{facingMode:e.facingMode,width:e.width,height:e.height}}).then(function(e){h(t,e)}).catch(function(e){console.error("Failed to acquire camera feed: "+e);alert("Failed to acquire camera feed: "+e);throw e})};var c=["Camera"],u=n;c[0]in u||"undefined"==typeof u.execScript||u.execScript("var "+c[0]);for(var g;c.length&&(g=c.shift());)c.length||void 0===o?u[g]&&u[g]!==Object.prototype[g]?u=u[g]:u=u[g]={}:u[g]=o}).call(this);(function(){"use strict";var e;function m(e){var t=0;return function(){return t<e.length?{done:!1,value:e[t++]}:{done:!0}}}var E="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,i){if(e==Array.prototype||e==Object.prototype)return e;e[t]=i.value;return e};function T(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var t=0;t<e.length;++t){var i=e[t];if(i&&i.Math==Math)return i}throw Error("Cannot find global object")}var s=T(this);function t(e,t){if(t)e:{var i=s;e=e.split(".");for(var n=0;n<e.length-1;n++){var r=e[n];if(!(r in i))break e;i=i[r]}e=e[e.length-1];n=i[e];t=t(n);t!=n&&null!=t&&E(i,e,{configurable:!0,writable:!0,value:t})}}t("Symbol",function(e){function t(e){if(this instanceof t)throw new TypeError("Symbol is not a constructor");return new i(n+(e||"")+"_"+r++,e)}function i(e,t){this.g=e;E(this,"description",{configurable:!0,writable:!0,value:t})}if(e)return e;i.prototype.toString=function(){return this.g};var n="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",r=0;return t});t("Symbol.iterator",function(e){if(e)return e;e=Symbol("Symbol.iterator");for(var t="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),i=0;i<t.length;i++){var n=s[t[i]];"function"===typeof n&&"function"!=typeof n.prototype[e]&&E(n.prototype,e,{configurable:!0,writable:!0,value:function(){return A(m(this))}})}return e});function A(e){e={next:e};e[Symbol.iterator]=function(){return this};return e}function C(e){var t="undefined"!=typeof Symbol&&Symbol.iterator&&e[Symbol.iterator];return t?t.call(e):{next:m(e)}}function g(e){if(!(e instanceof Array)){e=C(e);for(var t,i=[];!(t=e.next()).done;)i.push(t.value);e=i}return e}var v="function"==typeof Object.create?Object.create:function(e){function t(){}t.prototype=e;return new t},b;if("function"==typeof Object.setPrototypeOf)b=Object.setPrototypeOf;else{var x;e:{var I={a:!0},R={};try{R.__proto__=I;x=R.a;break e}catch(e){}x=!1}b=x?function(e,t){e.__proto__=t;if(e.__proto__!==t)throw new TypeError(e+" is not extensible");return e}:null}var r=b;function i(e,t){e.prototype=v(t.prototype);e.prototype.constructor=e;if(r)r(e,t);else for(var i in t)if("prototype"!=i)if(Object.defineProperties){var n=Object.getOwnPropertyDescriptor(t,i);n&&Object.defineProperty(e,i,n)}else e[i]=t[i];e.ea=t.prototype}function S(){this.l=!1;this.i=null;this.h=void 0;this.g=1;this.s=this.m=0;this.j=null}function W(e){if(e.l)throw new TypeError("Generator is already running");e.l=!0}S.prototype.o=function(e){this.h=e};function Y(e,t){e.j={U:t,V:!0};e.g=e.m||e.s}S.prototype.return=function(e){this.j={return:e};this.g=this.s};function L(e,t,i){e.g=i;return{value:t}}function K(e){this.g=new S;this.h=e}function q(e,t){W(e.g);var i=e.g.i;if(i)return Z(e,"return"in i?i["return"]:function(e){return{value:e,done:!0}},t,e.g.return);e.g.return(t);return a(e)}function Z(t,e,i,n){try{var r=e.call(t.g.i,i);if(!(r instanceof Object))throw new TypeError("Iterator result "+r+" is not an object");if(!r.done)return t.g.l=!1,r;var s=r.value}catch(e){return t.g.i=null,Y(t.g,e),a(t)}t.g.i=null;n.call(t.g,s);return a(t)}function a(t){for(;t.g.g;)try{var e=t.h(t.g);if(e)return t.g.l=!1,{value:e.value,done:!1}}catch(e){t.g.h=void 0,Y(t.g,e)}t.g.l=!1;if(t.g.j){e=t.g.j;t.g.j=null;if(e.V)throw e.U;return{value:e.return,done:!0}}return{value:void 0,done:!0}}function Q(t){this.next=function(e){W(t.g);t.g.i?e=Z(t,t.g.i.next,e,t.g.o):(t.g.o(e),e=a(t));return e};this.throw=function(e){W(t.g);t.g.i?e=Z(t,t.g.i["throw"],e,t.g.o):(Y(t.g,e),e=a(t));return e};this.return=function(e){return q(t,e)};this[Symbol.iterator]=function(){return this}}function O(e,t){t=new Q(new K(t));r&&e.prototype&&r(t,e.prototype);return t}function J(t,i){t instanceof String&&(t+="");var n=0,r=!1,e={next:function(){if(!r&&n<t.length){var e=n++;return{value:i(e,t[e]),done:!1}}r=!0;return{done:!0,value:void 0}}};e[Symbol.iterator]=function(){return e};return e}var $="function"==typeof Object.assign?Object.assign:function(e,t){for(var i=1;i<arguments.length;i++){var n=arguments[i];if(n)for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t("Object.assign",function(e){return e||$});t("Promise",function(e){function o(e){this.h=0;this.i=void 0;this.g=[];this.o=!1;var t=this.j();try{e(t.resolve,t.reject)}catch(e){t.reject(e)}}function t(){this.g=null}function l(t){return t instanceof o?t:new o(function(e){e(t)})}if(e)return e;t.prototype.h=function(e){if(null==this.g){this.g=[];var t=this;this.i(function(){t.l()})}this.g.push(e)};var i=s.setTimeout;t.prototype.i=function(e){i(e,0)};t.prototype.l=function(){for(;this.g&&this.g.length;){var e=this.g;this.g=[];for(var t=0;t<e.length;++t){var i=e[t];e[t]=null;try{i()}catch(e){this.j(e)}}}this.g=null};t.prototype.j=function(e){this.i(function(){throw e})};o.prototype.j=function(){function e(t){return function(e){n||(n=!0,t.call(i,e))}}var i=this,n=!1;return{resolve:e(this.C),reject:e(this.l)}};o.prototype.C=function(e){if(e===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(e instanceof o)this.F(e);else{e:switch(typeof e){case"object":var t=null!=e;break e;case"function":t=!0;break e;default:t=!1}t?this.u(e):this.m(e)}};o.prototype.u=function(e){var t=void 0;try{t=e.then}catch(e){this.l(e);return}"function"==typeof t?this.G(t,e):this.m(e)};o.prototype.l=function(e){this.s(2,e)};o.prototype.m=function(e){this.s(1,e)};o.prototype.s=function(e,t){if(0!=this.h)throw Error("Cannot settle("+e+", "+t+"): Promise already settled in state"+this.h);this.h=e;this.i=t;2===this.h&&this.D();this.A()};o.prototype.D=function(){var t=this;i(function(){if(t.B()){var e=s.console;"undefined"!==typeof e&&e.error(t.i)}},1)};o.prototype.B=function(){if(this.o)return!1;var e=s.CustomEvent,t=s.Event,i=s.dispatchEvent;if("undefined"===typeof i)return!0;"function"===typeof e?e=new e("unhandledrejection",{cancelable:!0}):"function"===typeof t?e=new t("unhandledrejection",{cancelable:!0}):(e=s.document.createEvent("CustomEvent"),e.initCustomEvent("unhandledrejection",!1,!0,e));e.promise=this;e.reason=this.i;return i(e)};o.prototype.A=function(){if(null!=this.g){for(var e=0;e<this.g.length;++e)r.h(this.g[e]);this.g=null}};var r=new t;o.prototype.F=function(e){var t=this.j();e.J(t.resolve,t.reject)};o.prototype.G=function(e,t){var i=this.j();try{e.call(t,i.resolve,i.reject)}catch(e){i.reject(e)}};o.prototype.then=function(e,t){function i(t,e){return"function"==typeof t?function(e){try{n(t(e))}catch(e){r(e)}}:e}var n,r,s=new o(function(e,t){n=e;r=t});this.J(i(e,n),i(t,r));return s};o.prototype.catch=function(e){return this.then(void 0,e)};o.prototype.J=function(e,t){function i(){switch(n.h){case 1:e(n.i);break;case 2:t(n.i);break;default:throw Error("Unexpected state: "+n.h)}}var n=this;null==this.g?r.h(i):this.g.push(i);this.o=!0};o.resolve=l;o.reject=function(i){return new o(function(e,t){t(i)})};o.race=function(r){return new o(function(e,t){for(var i=C(r),n=i.next();!n.done;n=i.next())l(n.value).J(e,t)})};o.all=function(e){var s=C(e),a=s.next();return a.done?l([]):new o(function(i,e){function t(t){return function(e){n[t]=e;r--;0==r&&i(n)}}var n=[],r=0;do{n.push(void 0),r++,l(a.value).J(t(n.length-1),e),a=s.next()}while(!a.done)})};return o});t("Object.is",function(e){return e?e:function(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}});t("Array.prototype.includes",function(e){return e?e:function(e,t){var i=this;i instanceof String&&(i=String(i));var n=i.length;t=t||0;for(0>t&&(t=Math.max(t+n,0));t<n;t++){var r=i[t];if(r===e||Object.is(r,e))return!0}return!1}});t("String.prototype.includes",function(e){return e?e:function(e,t){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(e instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(e,t||0)}});t("Array.prototype.keys",function(e){return e?e:function(){return J(this,function(e){return e})}});var ee=this||self;function n(e,t){e=e.split(".");var i=ee;e[0]in i||"undefined"==typeof i.execScript||i.execScript("var "+e[0]);for(var n;e.length&&(n=e.shift());)e.length||void 0===t?i[n]&&i[n]!==Object.prototype[n]?i=i[n]:i=i[n]={}:i[n]=t}function te(e,t){t=String.fromCharCode.apply(null,t);return null==e?t:e+t}var ie,ne="undefined"!==typeof TextDecoder,re,se="undefined"!==typeof TextEncoder;function ae(e){if(se)e=(re||(re=new TextEncoder)).encode(e);else{var t=void 0;t=void 0===t?!1:t;for(var i=0,n=new Uint8Array(3*e.length),r=0;r<e.length;r++){var s=e.charCodeAt(r);if(128>s)n[i++]=s;else{if(2048>s)n[i++]=s>>6|192;else{if(55296<=s&&57343>=s){if(56319>=s&&r<e.length){var a=e.charCodeAt(++r);if(56320<=a&&57343>=a){s=1024*(s-55296)+a-56320+65536;n[i++]=s>>18|240;n[i++]=s>>12&63|128;n[i++]=s>>6&63|128;n[i++]=s&63|128;continue}else r--}if(t)throw Error("Found an unpaired surrogate");s=65533}n[i++]=s>>12|224;n[i++]=s>>6&63|128}n[i++]=s&63|128}}e=n.subarray(0,i)}return e}var oe={},l=null;function le(e,t){void 0===t&&(t=0);ce();t=oe[t];for(var i=Array(Math.floor(e.length/3)),n=t[64]||"",r=0,s=0;r<e.length-2;r+=3){var a=e[r],o=e[r+1],l=e[r+2],h=t[a>>2];a=t[(a&3)<<4|o>>4];o=t[(o&15)<<2|l>>6];l=t[l&63];i[s++]=h+a+o+l}h=0;l=n;switch(e.length-r){case 2:h=e[r+1],l=t[(h&15)<<2]||n;case 1:e=e[r],i[s]=t[e>>2]+t[(e&3)<<4|h>>4]+l+n}return i.join("")}function he(e){var t=e.length,i=3*t/4;i%3?i=Math.floor(i):-1!="=.".indexOf(e[t-1])&&(i=-1!="=.".indexOf(e[t-2])?i-2:i-1);var n=new Uint8Array(i),r=0;fe(e,function(e){n[r++]=e});return n.subarray(0,r)}function fe(n,e){function t(e){for(;r<n.length;){var t=n.charAt(r++),i=l[t];if(null!=i)return i;if(!/^[\s\xa0]*$/.test(t))throw Error("Unknown base64 encoding at char: "+t)}return e}ce();for(var r=0;;){var i=t(-1),s=t(0),a=t(64),o=t(64);if(64===o&&-1===i)break;e(i<<2|s>>4);64!=a&&(e(s<<4&240|a>>2),64!=o&&e(a<<6&192|o))}}function ce(){if(!l){l={};for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"],i=0;5>i;i++){var n=e.concat(t[i].split(""));oe[i]=n;for(var r=0;r<n.length;r++){var s=n[r];void 0===l[s]&&(l[s]=r)}}}}var ue="function"===typeof Uint8Array.prototype.slice,ge;function de(e,t,i){return t===i?ge||(ge=new Uint8Array(0)):ue?e.slice(t,i):new Uint8Array(e.subarray(t,i))}var P=0,y=0;function o(e,t){t=void 0===t?{}:t;t=void 0===t.v?!1:t.v;this.h=null;this.g=this.j=this.l=0;this.m=!1;this.v=t;e&&pe(this,e)}function pe(e,t){t=t.constructor===Uint8Array?t:t.constructor===ArrayBuffer?new Uint8Array(t):t.constructor===Array?new Uint8Array(t):t.constructor===String?he(t):t instanceof Uint8Array?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(0);e.h=t;e.l=0;e.j=e.h.length;e.g=e.l}o.prototype.reset=function(){this.g=this.l};function N(e){for(var t=128,i=0,n=0,r=0;4>r&&128<=t;r++)t=e.h[e.g++],i|=(t&127)<<7*r;128<=t&&(t=e.h[e.g++],i|=(t&127)<<28,n|=(t&127)>>4);if(128<=t)for(r=0;5>r&&128<=t;r++)t=e.h[e.g++],n|=(t&127)<<7*r+3;if(128>t){e=i>>>0;t=n>>>0;if(n=t&2147483648)e=~e+1>>>0,t=~t>>>0,0==e&&(t=t+1>>>0);e=4294967296*t+(e>>>0);return n?-e:e}e.m=!0}o.prototype.i=function(){var e=this.h,t=e[this.g],i=t&127;if(128>t)return this.g+=1,i;t=e[this.g+1];i|=(t&127)<<7;if(128>t)return this.g+=2,i;t=e[this.g+2];i|=(t&127)<<14;if(128>t)return this.g+=3,i;t=e[this.g+3];i|=(t&127)<<21;if(128>t)return this.g+=4,i;t=e[this.g+4];i|=(t&15)<<28;if(128>t)return this.g+=5,i>>>0;this.g+=5;128<=e[this.g++]&&128<=e[this.g++]&&128<=e[this.g++]&&128<=e[this.g++]&&this.g++;return i};o.prototype.o=function(){var e=this.h[this.g],t=this.h[this.g+1];var i=this.h[this.g+2];var n=this.h[this.g+3];this.g+=4;i=(e<<0|t<<8|i<<16|n<<24)>>>0;e=2*(i>>31)+1;t=i>>>23&255;i&=8388607;return 255==t?i?NaN:Infinity*e:0==t?e*Math.pow(2,-149)*i:e*Math.pow(2,t-150)*(i+Math.pow(2,23))};var _e=[];function me(){this.g=new Uint8Array(64);this.h=0}me.prototype.push=function(e){if(!(this.h+1<this.g.length)){var t=this.g;this.g=new Uint8Array(Math.ceil(1+2*this.g.length));this.g.set(t)}this.g[this.h++]=e};me.prototype.length=function(){return this.h};me.prototype.end=function(){var e=this.g,t=this.h;this.h=0;return de(e,0,t)};function M(e,t){for(;127<t;)e.push(t&127|128),t>>>=7;e.push(t)}function F(e){var t={},i=void 0===t.N?!1:t.N;this.o={v:void 0===t.v?!1:t.v};this.N=i;t=this.o;_e.length?(i=_e.pop(),t&&(i.v=t.v),e&&pe(i,e),e=i):e=new o(e,t);this.g=e;this.m=this.g.g;this.h=this.i=this.l=-1;this.j=!1}F.prototype.reset=function(){this.g.reset();this.h=this.l=-1};function U(e){var t=e.g;(t=t.g==t.j)||(t=e.j)||(t=e.g,t=t.m||0>t.g||t.g>t.j);if(t)return!1;e.m=e.g.g;t=e.g.i();var i=t&7;if(0!=i&&5!=i&&1!=i&&2!=i&&3!=i&&4!=i)return e.j=!0,!1;e.i=t;e.l=t>>>3;e.h=i;return!0}function h(e){switch(e.h){case 0:if(0!=e.h)h(e);else{for(e=e.g;e.h[e.g]&128;)e.g++;e.g++}break;case 1:1!=e.h?h(e):(e=e.g,e.g+=8);break;case 2:if(2!=e.h)h(e);else{var t=e.g.i();e=e.g;e.g+=t}break;case 5:5!=e.h?h(e):(e=e.g,e.g+=4);break;case 3:t=e.l;do{if(!U(e)){e.j=!0;break}if(4==e.h){e.l!=t&&(e.j=!0);break}h(e)}while(1);break;default:e.j=!0}}function Ee(e,t,i){var n=e.g.j,r=e.g.i(),s=e.g.g+r;e.g.j=s;i(t,e);i=s-e.g.g;if(0!==i)throw Error("Message parsing ended unexpectedly. Expected to read "+r+" bytes, instead read "+(r-i)+" bytes, either the data ended unexpectedly or the message misreported its own length");e.g.g=s;e.g.j=n;return t}function G(e){return e.g.o()}function Te(e){var t=e.g.i();e=e.g;var i=e.g;e.g+=t;e=e.h;var n;if(ne)(n=ie)||(n=ie=new TextDecoder("utf-8",{fatal:!1})),n=n.decode(e.subarray(i,i+t));else{t=i+t;for(var r=[],s=null,a,o,l;i<t;)a=e[i++],128>a?r.push(a):224>a?i>=t?r.push(65533):(o=e[i++],194>a||128!==(o&192)?(i--,r.push(65533)):r.push((a&31)<<6|o&63)):240>a?i>=t-1?r.push(65533):(o=e[i++],128!==(o&192)||224===a&&160>o||237===a&&160<=o||128!==((n=e[i++])&192)?(i--,r.push(65533)):r.push((a&15)<<12|(o&63)<<6|n&63)):244>=a?i>=t-2?r.push(65533):(o=e[i++],128!==(o&192)||0!==(a<<28)+(o-144)>>30||128!==((n=e[i++])&192)||128!==((l=e[i++])&192)?(i--,r.push(65533)):(a=(a&7)<<18|(o&63)<<12|(n&63)<<6|l&63,a-=65536,r.push((a>>10&1023)+55296,(a&1023)+56320))):r.push(65533),8192<=r.length&&(s=te(s,r),r.length=0);n=te(s,r)}return n}function Ae(e,t,i){var n=e.g.i();for(n=e.g.g+n;e.g.g<n;)i.push(t.call(e.g))}function ve(e,t){2==e.h?Ae(e,o.prototype.o,t):t.push(G(e))}function be(){this.h=[];this.i=0;this.g=new me}function B(e,t){0!==t.length&&(e.h.push(t),e.i+=t.length)}function xe(e){var t=e.i+e.g.length();if(0===t)return new Uint8Array(0);t=new Uint8Array(t);for(var i=e.h,n=i.length,r=0,s=0;s<n;s++){var a=i[s];0!==a.length&&(t.set(a,r),r+=a.length)}i=e.g;n=i.h;0!==n&&(t.set(i.g.subarray(0,n),r),i.h=0);e.h=[t];return t}function w(e,t,i){if(null!=i){M(e.g,8*t+5);e=e.g;var n=i;n=(i=0>n?1:0)?-n:n;0===n?0<1/n?P=y=0:(y=0,P=2147483648):isNaN(n)?(y=0,P=2147483647):34028234663852886e22<n?(y=0,P=(i<<31|2139095040)>>>0):11754943508222875e-54>n?(n=Math.round(n/Math.pow(2,-149)),y=0,P=(i<<31|n)>>>0):(t=Math.floor(Math.log(n)/Math.LN2),n*=Math.pow(2,-t),n=Math.round(8388608*n),16777216<=n&&++t,y=0,P=(i<<31|t+127<<23|n&8388607)>>>0);i=P;e.push(i>>>0&255);e.push(i>>>8&255);e.push(i>>>16&255);e.push(i>>>24&255)}}var Ie="function"===typeof Uint8Array;function Re(e,t,i){if(null!=e)return"object"===typeof e?Ie&&e instanceof Uint8Array?i(e):Se(e,t,i):t(e)}function Se(e,t,i){if(Array.isArray(e)){for(var n=Array(e.length),r=0;r<e.length;r++)n[r]=Re(e[r],t,i);Array.isArray(e)&&e.W&&f(n);return n}n={};for(r in e)n[r]=Re(e[r],t,i);return n}function Ce(e){return"number"===typeof e?isFinite(e)?e:String(e):e}var Le={W:{value:!0,configurable:!0}};function f(e){Array.isArray(e)&&!Object.isFrozen(e)&&Object.defineProperties(e,Le);return e}var Oe;function c(e,t,i){var n=Oe;Oe=null;e||(e=n);n=this.constructor.ca;e||(e=n?[n]:[]);this.j=n?0:-1;this.m=this.g=null;this.h=e;e:{n=this.h.length;e=n-1;if(n&&(n=this.h[e],!(null===n||"object"!=typeof n||Array.isArray(n)||Ie&&n instanceof Uint8Array))){this.l=e-this.j;this.i=n;break e}void 0!==t&&-1<t?(this.l=Math.max(t,e+1-this.j),this.i=null):this.l=Number.MAX_VALUE}if(i)for(t=0;t<i.length;t++)e=i[t],e<this.l?(e+=this.j,(n=this.h[e])?f(n):this.h[e]=Pe):(ye(this),(n=this.i[e])?f(n):this.i[e]=Pe)}var Pe=Object.freeze(f([]));function ye(e){var t=e.l+e.j;e.h[t]||(e.i=e.h[t]={})}function D(e,t,i){return-1===t?null:(void 0===i?0:i)||t>=e.l?e.i?e.i[t]:void 0:e.h[t+e.j]}function Ne(e,t){var i=void 0===i?!1:i;var n=D(e,t,i);null==n&&(n=Pe);n===Pe&&(n=f([]),H(e,t,n,i));return n}function Me(e){var t=Ne(e,3);e.m||(e.m={});if(!e.m[3]){for(var i=0;i<t.length;i++)t[i]=+t[i];e.m[3]=!0}return t}function V(e,t,i){e=D(e,t);return null==e?i:e}function k(e,t,i){e=D(e,t);e=null==e?e:+e;return null==e?void 0===i?0:i:e}function H(e,t,i,n){(void 0===n?0:n)||t>=e.l?(ye(e),e.i[t]=i):e.h[t+e.j]=i}function Fe(e,t,i){if(-1===i)return null;e.g||(e.g={});if(!e.g[i]){var n=D(e,i,!1);n&&(e.g[i]=new t(n))}return e.g[i]}function Ue(e,t){e.g||(e.g={});var i=e.g[1];if(!i){var n=Ne(e,1);i=[];for(var r=0;r<n.length;r++)i[r]=new t(n[r]);e.g[1]=i}return i}function Ge(e,t,i){var n=void 0===n?!1:n;e.g||(e.g={});var r=i?u(i,!1):i;e.g[t]=i;H(e,t,r,n)}function Be(e,t,i,n){var r=Ue(e,i);t=t?t:new i;e=Ne(e,1);void 0!=n?(r.splice(n,0,t),e.splice(n,0,u(t,!1))):(r.push(t),e.push(u(t,!1)))}c.prototype.toJSON=function(){var e=u(this,!1);return Se(e,Ce,le)};function u(e,t){if(e.g)for(var i in e.g){var n=e.g[i];if(Array.isArray(n))for(var r=0;r<n.length;r++)n[r]&&u(n[r],t);else n&&u(n,t)}return e.h}c.prototype.toString=function(){return u(this,!1).toString()};function we(e,t){if(e=e.o){B(t,t.g.end());for(var i=0;i<e.length;i++)B(t,e[i])}}function X(e,t){if(4==t.h)return!1;var i=t.m;h(t);t.N||(t=de(t.g.h,i,t.g.g),(i=e.o)?i.push(t):e.o=[t]);return!0}function d(e){c.call(this,e,-1,Ve)}i(d,c);d.prototype.getRows=function(){return D(this,1)};d.prototype.getCols=function(){return D(this,2)};d.prototype.getPackedDataList=function(){return Me(this)};d.prototype.getLayout=function(){return V(this,4,0)};function De(e,t){for(;U(t);)switch(t.i){case 8:var i=t.g.i();H(e,1,i);break;case 16:i=t.g.i();H(e,2,i);break;case 29:case 26:ve(t,e.getPackedDataList());break;case 32:i=N(t.g);H(e,4,i);break;default:if(!X(e,t))return e}return e}var Ve=[3];function p(s,a){var o=void 0;return new(o||(o=Promise))(function(e,t){function i(e){try{r(a.next(e))}catch(e){t(e)}}function n(e){try{r(a["throw"](e))}catch(e){t(e)}}function r(t){t.done?e(t.value):new o(function(e){e(t.value)}).then(i,n)}r((a=a.apply(s,void 0)).next())})}function z(e){c.call(this,e)}i(z,c);function ke(e,t){for(;U(t);)switch(t.i){case 8:var i=t.g.i();H(e,1,i);break;case 21:i=G(t);H(e,2,i);break;case 26:i=Te(t);H(e,3,i);break;case 34:i=Te(t);H(e,4,i);break;default:if(!X(e,t))return e}return e}function He(e){c.call(this,e,-1,Xe)}i(He,c);He.prototype.addClassification=function(e,t){Be(this,e,z,t);return this};var Xe=[1];function j(e){c.call(this,e)}i(j,c);function ze(e,t){for(;U(t);)switch(t.i){case 13:var i=G(t);H(e,1,i);break;case 21:i=G(t);H(e,2,i);break;case 29:i=G(t);H(e,3,i);break;case 37:i=G(t);H(e,4,i);break;case 45:i=G(t);H(e,5,i);break;default:if(!X(e,t))return e}return e}function je(e){c.call(this,e,-1,Ye)}i(je,c);function We(e){e:{var t=new je;for(e=new F(e);U(e);)switch(e.i){case 10:var i=Ee(e,new j,ze);Be(t,i,j,void 0);break;default:if(!X(t,e))break e}}return t}var Ye=[1];function Ke(e){c.call(this,e)}i(Ke,c);function _(e){c.call(this,e,-1,Ze)}i(_,c);_.prototype.getVertexType=function(){return V(this,1,0)};_.prototype.getPrimitiveType=function(){return V(this,2,0)};_.prototype.getVertexBufferList=function(){return Me(this)};_.prototype.getIndexBufferList=function(){return Ne(this,4)};function qe(e,t){for(;U(t);)switch(t.i){case 8:var i=N(t.g);H(e,1,i);break;case 16:i=N(t.g);H(e,2,i);break;case 29:case 26:ve(t,e.getVertexBufferList());break;case 32:case 34:i=t;var n=e.getIndexBufferList();2==i.h?Ae(i,o.prototype.i,n):n.push(i.g.i());break;default:if(!X(e,t))return e}return e}var Ze=[3,4];function Qe(e){c.call(this,e)}i(Qe,c);Qe.prototype.getMesh=function(){return Fe(this,_,1)};Qe.prototype.getPoseTransformMatrix=function(){return Fe(this,d,2)};function Je(e){e:{var t=new Qe;for(e=new F(e);U(e);)switch(e.i){case 10:var i=Ee(e,new _,qe);Ge(t,1,i);break;case 18:i=Ee(e,new d,De);Ge(t,2,i);break;default:if(!X(t,e))break e}}return t}function $e(e,t,i){i=e.createShader(0===i?e.VERTEX_SHADER:e.FRAGMENT_SHADER);e.shaderSource(i,t);e.compileShader(i);if(!e.getShaderParameter(i,e.COMPILE_STATUS))throw Error("Could not compile WebGL shader.\n\n"+e.getShaderInfoLog(i));return i}function et(e){return Ue(e,z).map(function(e){return{index:V(e,1,0),Y:k(e,2),label:null!=D(e,3)?V(e,3,""):void 0,displayName:null!=D(e,4)?V(e,4,""):void 0}})}function tt(e){return{x:k(e,1),y:k(e,2),z:k(e,3),visibility:null!=D(e,4)?k(e,4):void 0}}function it(e,t){this.h=e;this.g=t;this.l=0}function nt(t,e,i){rt(t,e);if("function"===typeof t.g.canvas.transferToImageBitmap)return Promise.resolve(t.g.canvas.transferToImageBitmap());if(i)return Promise.resolve(t.g.canvas);if("function"===typeof createImageBitmap)return createImageBitmap(t.g.canvas);void 0===t.i&&(t.i=document.createElement("canvas"));return new Promise(function(e){t.i.height=t.g.canvas.height;t.i.width=t.g.canvas.width;t.i.getContext("2d",{}).drawImage(t.g.canvas,0,0,t.g.canvas.width,t.g.canvas.height);e(t.i)})}function rt(e,t){var i=e.g;if(void 0===e.m){var n=$e(i,"\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }",0),r=$e(i,"\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D sampler0;\n  void main(){\n    gl_FragColor = texture2D(sampler0, vTex);\n  }",1),s=i.createProgram();i.attachShader(s,n);i.attachShader(s,r);i.linkProgram(s);if(!i.getProgramParameter(s,i.LINK_STATUS))throw Error("Could not compile WebGL program.\n\n"+i.getProgramInfoLog(s));n=e.m=s;i.useProgram(n);r=i.getUniformLocation(n,"sampler0");e.j={I:i.getAttribLocation(n,"aVertex"),H:i.getAttribLocation(n,"aTex"),da:r};e.s=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,e.s);i.enableVertexAttribArray(e.j.I);i.vertexAttribPointer(e.j.I,2,i.FLOAT,!1,0,0);i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),i.STATIC_DRAW);i.bindBuffer(i.ARRAY_BUFFER,null);e.o=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,e.o);i.enableVertexAttribArray(e.j.H);i.vertexAttribPointer(e.j.H,2,i.FLOAT,!1,0,0);i.bufferData(i.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),i.STATIC_DRAW);i.bindBuffer(i.ARRAY_BUFFER,null);i.uniform1i(r,0)}n=e.j;i.useProgram(e.m);i.canvas.width=t.width;i.canvas.height=t.height;i.viewport(0,0,t.width,t.height);i.activeTexture(i.TEXTURE0);e.h.bindTexture2d(t.glName);i.enableVertexAttribArray(n.I);i.bindBuffer(i.ARRAY_BUFFER,e.s);i.vertexAttribPointer(n.I,2,i.FLOAT,!1,0,0);i.enableVertexAttribArray(n.H);i.bindBuffer(i.ARRAY_BUFFER,e.o);i.vertexAttribPointer(n.H,2,i.FLOAT,!1,0,0);i.bindFramebuffer(i.DRAW_FRAMEBUFFER?i.DRAW_FRAMEBUFFER:i.FRAMEBUFFER,null);i.clearColor(0,0,0,0);i.clear(i.COLOR_BUFFER_BIT);i.colorMask(!0,!0,!0,!0);i.drawArrays(i.TRIANGLE_FAN,0,4);i.disableVertexAttribArray(n.I);i.disableVertexAttribArray(n.H);i.bindBuffer(i.ARRAY_BUFFER,null);e.h.bindTexture2d(0)}function st(e){this.g=e}var at=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function ot(e,t){return t+e}function lt(e,t){window[e]=t}function ht(e){var t=document.createElement("script");t.setAttribute("src",e);t.setAttribute("crossorigin","anonymous");return new Promise(function(e){t.addEventListener("load",function(){e()},!1);t.addEventListener("error",function(){e()},!1);document.body.appendChild(t)})}function ft(){return p(this,function e(){return O(e,function(e){switch(e.g){case 1:return e.m=2,L(e,WebAssembly.instantiate(at),4);case 4:e.g=3;e.m=0;break;case 2:return e.m=0,e.j=null,e.return(!1);case 3:return e.return(!0)}})})}function ct(e){this.g=e;this.listeners={};this.j={};this.F={};this.m={};this.s={};this.G=this.o=this.R=!0;this.C=Promise.resolve();this.P="";this.B={};this.locateFile=e&&e.locateFile||ot;if("object"===typeof window)var t=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if("undefined"!==typeof location)t=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");this.S=t;if(e.options){t=C(Object.keys(e.options));for(var i=t.next();!i.done;i=t.next()){i=i.value;var n=e.options[i].default;void 0!==n&&(this.j[i]="function"===typeof n?n():n)}}}e=ct.prototype;e.close=function(){this.i&&this.i.delete();return Promise.resolve()};function ut(e,t){return void 0===e.g.files?[]:"function"===typeof e.g.files?e.g.files(t):e.g.files}function gt(e){return p(e,function e(){var t=this,n,i,r,s,a,o,l,h,f,c,u;return O(e,function(e){switch(e.g){case 1:n=t;if(!t.R)return e.return();i=ut(t,t.j);return L(e,ft(),2);case 2:r=e.h;if("object"===typeof window)return lt("createMediapipeSolutionsWasm",{locateFile:t.locateFile}),lt("createMediapipeSolutionsPackedAssets",{locateFile:t.locateFile}),o=i.filter(function(e){return void 0!==e.data}),l=i.filter(function(e){return void 0===e.data}),h=Promise.all(o.map(function(e){var t=_t(n,e.url);if(void 0!==e.path){var i=e.path;t=t.then(function(e){n.overrideFile(i,e);return Promise.resolve(e)})}return t})),f=Promise.all(l.map(function(e){return void 0===e.simd||e.simd&&r||!e.simd&&!r?ht(n.locateFile(e.url,n.S)):Promise.resolve()})).then(function(){return p(n,function e(){var t,i,n=this;return O(e,function(e){if(1==e.g)return t=window.createMediapipeSolutionsWasm,i=window.createMediapipeSolutionsPackedAssets,L(e,t(i),2);n.h=e.h;e.g=0})})}),c=function(){return p(n,function e(){var t=this;return O(e,function(e){t.g.graph&&t.g.graph.url?e=L(e,_t(t,t.g.graph.url),0):(e.g=0,e=void 0);return e})})}(),L(e,Promise.all([f,h,c]),7);if("function"!==typeof importScripts)throw Error("solutions can only be loaded on a web page or in a web worker");s=i.filter(function(e){return void 0===e.simd||e.simd&&r||!e.simd&&!r}).map(function(e){return n.locateFile(e.url,n.S)});importScripts.apply(null,g(s));return L(e,createMediapipeSolutionsWasm(Module),6);case 6:t.h=e.h;t.l=new OffscreenCanvas(1,1);t.h.canvas=t.l;a=t.h.GL.createContext(t.l,{antialias:!1,alpha:!1,ba:"undefined"!==typeof WebGL2RenderingContext?2:1});t.h.GL.makeContextCurrent(a);e.g=4;break;case 7:t.l=document.createElement("canvas");u=t.l.getContext("webgl2",{});if(!u&&(u=t.l.getContext("webgl",{}),!u))return alert("Failed to create WebGL canvas context when passing video frame."),e.return();t.D=u;t.h.canvas=t.l;t.h.createContext(t.l,!0,!0,{});case 4:t.i=new t.h.SolutionWasm,t.R=!1,e.g=0}})})}function dt(e){return p(e,function e(){var t=this,i,n,r,s,a,o,l,h;return O(e,function(e){if(1==e.g){if(t.g.graph&&t.g.graph.url&&t.P===t.g.graph.url)return e.return();t.o=!0;if(!t.g.graph||!t.g.graph.url){e.g=2;return}t.P=t.g.graph.url;return L(e,_t(t,t.g.graph.url),3)}2!=e.g&&(i=e.h,t.i.loadGraph(i));n=C(Object.keys(t.B));for(r=n.next();!r.done;r=n.next())s=r.value,t.i.overrideFile(s,t.B[s]);t.B={};if(t.g.listeners)for(a=C(t.g.listeners),o=a.next();!o.done;o=a.next())l=o.value,Tt(t,l);h=t.j;t.j={};t.setOptions(h);e.g=0})})}e.reset=function(){return p(this,function e(){var t=this;return O(e,function(e){t.i&&(t.i.reset(),t.m={},t.s={});e.g=0})})};e.setOptions=function(e,t){var i=this;if(t=t||this.g.options){for(var n=[],r=[],s={},a=C(Object.keys(e)),o=a.next();!o.done;s={K:s.K,L:s.L},o=a.next()){var l=o.value;l in this.j&&this.j[l]===e[l]||(this.j[l]=e[l],o=t[l],void 0!==o&&(o.onChange&&(s.K=o.onChange,s.L=e[l],n.push(function(n){return function(){return p(i,function e(){var t,i=this;return O(e,function(e){if(1==e.g)return L(e,n.K(n.L),2);t=e.h;!0===t&&(i.o=!0);e.g=0})})}}(s))),o.graphOptionXref&&(l={valueNumber:1===o.type?e[l]:0,valueBoolean:0===o.type?e[l]:!1,valueString:2===o.type?e[l]:""},o=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),o.graphOptionXref),l),r.push(o))))}if(0!==n.length||0!==r.length)this.o=!0,this.A=(void 0===this.A?[]:this.A).concat(r),this.u=(void 0===this.u?[]:this.u).concat(n)}};function pt(e){return p(e,function e(){var t=this,i,n,r,s,a,o,l;return O(e,function(e){switch(e.g){case 1:if(!t.o)return e.return();if(!t.u){e.g=2;break}i=C(t.u);n=i.next();case 3:if(n.done){e.g=5;break}r=n.value;return L(e,r(),4);case 4:n=i.next();e.g=3;break;case 5:t.u=void 0;case 2:if(t.A){s=new t.h.GraphOptionChangeRequestList;a=C(t.A);for(o=a.next();!o.done;o=a.next())l=o.value,s.push_back(l);t.i.changeOptions(s);s.delete();t.A=void 0}t.o=!1;e.g=0}})})}e.initialize=function(){return p(this,function e(){var t=this;return O(e,function(e){return 1==e.g?L(e,gt(t),2):3!=e.g?L(e,dt(t),3):L(e,pt(t),0)})})};function _t(e,r){return p(e,function e(){var t=this,i,n;return O(e,function(e){if(r in t.F)return e.return(t.F[r]);i=t.locateFile(r,"");n=fetch(i).then(function(e){return e.arrayBuffer()});t.F[r]=n;return e.return(n)})})}e.overrideFile=function(e,t){this.i?this.i.overrideFile(e,t):this.B[e]=t};e.clearOverriddenFiles=function(){this.B={};this.i&&this.i.clearOverriddenFiles()};e.send=function(R,S){return p(this,function e(){var p=this,_,m,E,T,A,v,b,x,I;return O(e,function(e){switch(e.g){case 1:if(!p.g.inputs)return e.return();_=1e3*(void 0===S||null===S?performance.now():S);return L(e,p.C,2);case 2:return L(e,p.initialize(),3);case 3:m=new p.h.PacketDataList;E=C(Object.keys(R));for(T=E.next();!T.done;T=E.next())if(A=T.value,v=p.g.inputs[A]){e:{var t=p;var i=R[A];switch(v.type){case"video":var n=t.m[v.stream];n||(n=new it(t.h,t.D),t.m[v.stream]=n);t=n;0===t.l&&(t.l=t.h.createTexture());if("undefined"!==typeof HTMLVideoElement&&i instanceof HTMLVideoElement){var r=i.videoWidth;n=i.videoHeight}else"undefined"!==typeof HTMLImageElement&&i instanceof HTMLImageElement?(r=i.naturalWidth,n=i.naturalHeight):(r=i.width,n=i.height);n={glName:t.l,width:r,height:n};r=t.g;r.canvas.width=n.width;r.canvas.height=n.height;r.activeTexture(r.TEXTURE0);t.h.bindTexture2d(t.l);r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,i);t.h.bindTexture2d(0);t=n;break e;case"detections":n=t.m[v.stream];n||(n=new st(t.h),t.m[v.stream]=n);t=n;t.data||(t.data=new t.g.DetectionListData);t.data.reset(i.length);for(n=0;n<i.length;++n){r=i[n];var s=t.data,a=s.setBoundingBox,o=n;var l=r.T;var h=new Ke;H(h,1,l.Z);H(h,2,l.$);H(h,3,l.height);H(h,4,l.width);H(h,5,l.rotation);H(h,6,l.X);var f=l=new be;w(f,1,D(h,1));w(f,2,D(h,2));w(f,3,D(h,3));w(f,4,D(h,4));w(f,5,D(h,5));var c=D(h,6);if(null!=c&&null!=c){M(f.g,48);var u=f.g,g=c;c=0>g;g=Math.abs(g);var d=g>>>0;g=Math.floor((g-d)/4294967296);g>>>=0;c&&(g=~g>>>0,d=(~d>>>0)+1,4294967295<d&&(d=0,g++,4294967295<g&&(g=0)));P=d;y=g;c=P;for(d=y;0<d||127<c;)u.push(c&127|128),c=(c>>>7|d<<25)>>>0,d>>>=7;u.push(c)}we(h,f);l=xe(l);a.call(s,o,l);if(r.O)for(s=0;s<r.O.length;++s)h=r.O[s],f=h.visibility?!0:!1,a=t.data,o=a.addNormalizedLandmark,l=n,h=Object.assign(Object.assign({},h),{visibility:f?h.visibility:0}),f=new j,H(f,1,h.x),H(f,2,h.y),H(f,3,h.z),h.visibility&&H(f,4,h.visibility),u=h=new be,w(u,1,D(f,1)),w(u,2,D(f,2)),w(u,3,D(f,3)),w(u,4,D(f,4)),w(u,5,D(f,5)),we(f,u),h=xe(h),o.call(a,l,h);if(r.M)for(s=0;s<r.M.length;++s){a=t.data;o=a.addClassification;l=n;h=r.M[s];f=new z;H(f,2,h.Y);h.index&&H(f,1,h.index);h.label&&H(f,3,h.label);h.displayName&&H(f,4,h.displayName);u=h=new be;d=D(f,1);if(null!=d&&null!=d)if(M(u.g,8),c=u.g,0<=d)M(c,d);else{for(g=0;9>g;g++)c.push(d&127|128),d>>=7;c.push(1)}w(u,2,D(f,2));c=D(f,3);null!=c&&(c=ae(c),M(u.g,26),M(u.g,c.length),B(u,u.g.end()),B(u,c));c=D(f,4);null!=c&&(c=ae(c),M(u.g,34),M(u.g,c.length),B(u,u.g.end()),B(u,c));we(f,u);h=xe(h);o.call(a,l,h)}}t=t.data;break e;default:t={}}}b=t;x=v.stream;switch(v.type){case"video":m.pushTexture2d(Object.assign(Object.assign({},b),{stream:x,timestamp:_}));break;case"detections":I=b;I.stream=x;I.timestamp=_;m.pushDetectionList(I);break;default:throw Error("Unknown input config type: '"+v.type+"'")}}p.i.send(m);return L(e,p.C,4);case 4:m.delete(),e.g=0}})})};function mt(e,R,S){return p(e,function e(){var f,c,u,g,d,p,_=this,m,E,T,A,v,b,x,I;return O(e,function(e){switch(e.g){case 1:if(!S)return e.return(R);f={};c=0;u=C(Object.keys(S));for(g=u.next();!g.done;g=u.next())d=g.value,p=S[d],"string"!==typeof p&&"texture"===p.type&&void 0!==R[p.stream]&&++c;1<c&&(_.G=!1);m=C(Object.keys(S));g=m.next();case 2:if(g.done){e.g=4;break}E=g.value;T=S[E];if("string"===typeof T)return x=f,I=E,L(e,Et(_,E,R[T]),14);A=R[T.stream];if("detection_list"===T.type){if(A){var t=A.getRectList();for(var i=A.getLandmarksList(),n=A.getClassificationsList(),r=[],s=0;s<t.size();++s){var a=t.get(s);e:{var o=new Ke;for(a=new F(a);U(a);)switch(a.i){case 13:var l=G(a);H(o,1,l);break;case 21:l=G(a);H(o,2,l);break;case 29:l=G(a);H(o,3,l);break;case 37:l=G(a);H(o,4,l);break;case 45:l=G(a);H(o,5,l);break;case 48:l=N(a.g);H(o,6,l);break;default:if(!X(o,a))break e}}o={Z:k(o,1),$:k(o,2),height:k(o,3),width:k(o,4),rotation:k(o,5,0),X:V(o,6,0)};a=Ue(We(i.get(s)),j).map(tt);var h=n.get(s);e:for(l=new He,h=new F(h);U(h);)switch(h.i){case 10:l.addClassification(Ee(h,new z,ke));break;default:if(!X(l,h))break e}o={T:o,O:a,M:et(l)};r.push(o)}t=r}else t=[];f[E]=t;e.g=7;break}if("proto_list"===T.type){if(A){t=Array(A.size());for(i=0;i<A.size();i++)t[i]=A.get(i);A.delete()}else t=[];f[E]=t;e.g=7;break}if(void 0===A){e.g=3;break}if("float_list"===T.type){f[E]=A;e.g=7;break}if("proto"===T.type){f[E]=A;e.g=7;break}if("texture"!==T.type)throw Error("Unknown output config type: '"+T.type+"'");v=_.s[E];v||(v=new it(_.h,_.D),_.s[E]=v);return L(e,nt(v,A,_.G),13);case 13:b=e.h,f[E]=b;case 7:T.transform&&f[E]&&(f[E]=T.transform(f[E]));e.g=3;break;case 14:x[I]=e.h;case 3:g=m.next();e.g=2;break;case 4:return e.return(f)}})})}function Et(e,n,r){return p(e,function e(){var t=this,i;return O(e,function(e){return"number"===typeof r||r instanceof Uint8Array||r instanceof t.h.Uint8BlobList?e.return(r):r instanceof t.h.Texture2dDataOut?(i=t.s[n],i||(i=new it(t.h,t.D),t.s[n]=i),e.return(nt(i,r,t.G))):e.return(void 0)})})}function Tt(s,a){for(var i=a.name||"$",o=[].concat(g(a.wants)),e=new s.h.StringList,t=C(a.wants),n=t.next();!n.done;n=t.next())e.push_back(n.value);t=s.h.PacketListener.implement({onResults:function(e){for(var n={},t=0;t<a.wants.length;++t)n[o[t]]=e.get(t);var r=s.listeners[i];r&&(s.C=mt(s,n,a.outs).then(function(e){e=r(e);for(var t=0;t<a.wants.length;++t){var i=n[o[t]];"object"===typeof i&&i.hasOwnProperty&&i.hasOwnProperty("delete")&&i.delete()}e&&(s.C=e)}))}});s.i.attachMultiListener(e,t);e.delete()}e.onResults=function(e,t){this.listeners[t||"$"]=e};n("Solution",ct);n("OptionType",{BOOL:0,NUMBER:1,aa:2,0:"BOOL",1:"NUMBER",2:"STRING"});function At(e){e=Je(e);var t=e.getMesh();if(!t)return e;var i=new Float32Array(t.getVertexBufferList());t.getVertexBufferList=function(){return i};var n=new Uint32Array(t.getIndexBufferList());t.getIndexBufferList=function(){return n};return e}var vt={files:[{url:"face_mesh_solution_packed_assets_loader.js"},{simd:!0,url:"face_mesh_solution_simd_wasm_bin.js"},{simd:!1,url:"face_mesh_solution_wasm_bin.js"}],graph:{url:"face_mesh.binarypb"},listeners:[{wants:["multi_face_geometry","image_transformed","multi_face_landmarks"],outs:{image:"image_transformed",multiFaceGeometry:{type:"proto_list",stream:"multi_face_geometry",transform:function(e){return e.map(At)}},multiFaceLandmarks:{type:"proto_list",stream:"multi_face_landmarks",transform:function(e){return e.map(function(e){return Ue(We(e),j).map(tt)})}}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},enableFaceGeometry:{type:0,graphOptionXref:{calculatorName:"EnableFaceGeometryConstant",calculatorType:"ConstantSidePacketCalculator",fieldName:"bool_value"}},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumFaces:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorNumFaces",fieldName:"int_value"}},refineLandmarks:{type:0,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorRefineLandmarks",fieldName:"bool_value"}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"facelandmarkfrontgpu__facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"facelandmarkfrontgpu__facelandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}},cameraNear:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"near"}},cameraFar:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"far"}},cameraVerticalFovDegrees:{type:1,graphOptionXref:{calculatorType:"FaceGeometryEnvGeneratorCalculator",fieldName:"vertical_fov_degrees"}}}};var bt=[[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]],xt=[[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]],It=[[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]],Rt=[[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]],St=[[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]],Ct=[[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]],Lt=[].concat(g(bt),g(xt),g(It),g(Rt),g(St),g(Ct));function Ot(e){e=e||{};e=Object.assign(Object.assign({},vt),e);this.g=new ct(e)}e=Ot.prototype;e.close=function(){this.g.close();return Promise.resolve()};e.onResults=function(e){this.g.onResults(e)};e.initialize=function(){return p(this,function e(){var t=this;return O(e,function(e){return L(e,t.g.initialize(),0)})})};e.reset=function(){this.g.reset()};e.send=function(i){return p(this,function e(){var t=this;return O(e,function(e){return L(e,t.g.send(i),0)})})};e.setOptions=function(e){this.g.setOptions(e)};n("FACE_GEOMETRY",{Layout:{COLUMN_MAJOR:0,ROW_MAJOR:1,0:"COLUMN_MAJOR",1:"ROW_MAJOR"},PrimitiveType:{TRIANGLE:0,0:"TRIANGLE"},VertexType:{VERTEX_PT:0,0:"VERTEX_PT"},DEFAULT_CAMERA_PARAMS:{verticalFovDegrees:63,near:1,far:1e4}});n("FaceMesh",Ot);n("FACEMESH_LIPS",bt);n("FACEMESH_LEFT_EYE",xt);n("FACEMESH_LEFT_EYEBROW",It);n("FACEMESH_LEFT_IRIS",[[474,475],[475,476],[476,477],[477,474]]);n("FACEMESH_RIGHT_EYE",Rt);n("FACEMESH_RIGHT_EYEBROW",St);n("FACEMESH_RIGHT_IRIS",[[469,470],[470,471],[471,472],[472,469]]);n("FACEMESH_FACE_OVAL",Ct);n("FACEMESH_CONTOURS",Lt);n("FACEMESH_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]]);n("matrixDataToMatrix",function(e){for(var t=e.getCols(),i=e.getRows(),n=e.getPackedDataList(),r=[],s=0;s<i;s++)r.push(Array(t));for(s=0;s<i;s++)for(var a=0;a<t;a++){var o=1===e.getLayout()?s*t+a:a*i+s;r[s][a]=n[o]}return r});n("VERSION","0.4.1633559619")}).call(this);(()=>{"use strict";var e={};class f{constructor(e){this.initiator=e}stack(e){console.info("["+this.initiator+"] ",e);console.log((new Error).stack)}groupCollapsed(e){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:0},...arguments)||!CABLES.logSilent)console.log("["+this.initiator+"]",...arguments);console.groupCollapsed("["+this.initiator+"] "+e)}table(e){console.table(e)}groupEnd(){console.groupEnd()}error(){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:2},...arguments)||!CABLES.logSilent)console.error("["+this.initiator+"]",...arguments)}errorGui(){if(CABLES.UI)CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:2},...arguments)}warn(){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:1},...arguments)||!CABLES.logSilent)console.warn("["+this.initiator+"]",...arguments)}verbose(){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:0},...arguments)||!CABLES.logSilent)console.log("["+this.initiator+"]",...arguments)}info(){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:0},...arguments)||!CABLES.logSilent)console.info("["+this.initiator+"]",...arguments)}log(){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:0},...arguments)||!CABLES.logSilent)console.log("["+this.initiator+"]",...arguments)}logGui(){if(CABLES.UI)CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:0},...arguments)}userInteraction(e){}}const r={};r.float32Concat=function(e,t){if(!(e instanceof Float32Array))e=new Float32Array(e);if(!(t instanceof Float32Array))t=new Float32Array(t);const i=new Float32Array(e.length+t.length);i.set(e);i.set(t,e.length);return i};const G=function(e){let t=e.split(".")[e.split(".").length-1];if(t.contains(CONSTANTS.OP.OP_VERSION_PREFIX)){const i=t.split(CONSTANTS.OP.OP_VERSION_PREFIX)[1];t=t.substring(0,t.length-(CONSTANTS.OP.OP_VERSION_PREFIX+i).length)}return t};const B=function(t){for(let e=t.length-1;e>0;e--){const i=Math.floor(Math.seededRandom()*(e+1));const n=t[e];t[e]=t[i];t[i]=n}return t};const t={};const i=function(){let e=Math.random().toString(36).substr(2,9);if(t.hasOwnProperty(e))e=i();t[e]=true;return e};const w=null&&i;const n=function(){let i=(new Date).getTime();const e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=(i+Math.random()*16)%16|0;i=Math.floor(i/16);return(e=="x"?t:t&3|8).toString(16)});return e};const D=null&&n;const V=null&&n;function s(e){for(const t in e){if(e[t]&&typeof objValue==="object"&&e[t].constructor===Object)e[t]=s(e[t]);if(e[t]===null||e[t]===undefined)delete e[t];else if(Array.isArray(e[t])&&e[t].length==0)delete e[t]}return e}const a=function(i,e="id"){let n=0;if(Array.prototype.reduce){n=i.split("").reduce((e,t)=>{e=(e<<5)-e+t.charCodeAt(0);return e&e},0)}else{if(i.length>0){for(let t=0;t<i.length;t++){let e=i.charCodeAt(t);n=(n<<5)-n+e;n&=n}}}return e+""+n};const k=null&&a;let o=0;const H=function(){o++;return o};const X=function(e){const t=Math.max(0,Math.min(1,(e-0)/(1-0)));e=t*t*(3-2*t);return e};const z=function(e){const t=Math.max(0,Math.min(1,(e-0)/(1-0)));e=t*t*t*(t*(t*6-15)+10);return e};const j=function(e,t,i){return Math.min(Math.max(e,t),i)};const W=function(e,t,i,n,r,s){if(e>=i)return r;if(e<=t)return n;let a=false;const o=Math.min(t,i);const l=Math.max(t,i);if(o!=t)a=true;let h=false;const f=Math.min(n,r);const c=Math.max(n,r);if(f!=n)h=true;let u=0;let g=0;if(a)u=(l-e)*(c-f)/(l-o);else u=(e-o)*(c-f)/(l-o);if(h)g=c-u;else g=u+f;if(!s)return g;if(s==1){e=Math.max(0,Math.min(1,(g-n)/(r-n)));return n+e*e*(3-2*e)*(r-n)}if(s==2){e=Math.max(0,Math.min(1,(g-n)/(r-n)));return n+e*e*e*(e*(e*6-15)+10)*(r-n)}return g};Math.randomSeed=1;Math.setRandomSeed=function(e){Math.randomSeed=e*50728129;if(e!=0){Math.randomSeed=Math.seededRandom()*17624813;Math.randomSeed=Math.seededRandom()*9737333}};Math.seededRandom=function(e,t){if(Math.randomSeed===0)Math.randomSeed=Math.random()*999;e=e||1;t=t||0;Math.randomSeed=(Math.randomSeed*9301+49297)%233280;const i=Math.randomSeed/233280;return t+i*(e-t)};r.isNumeric=function(e){return!isNaN(parseFloat(e))&&isFinite(e)};r.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"};String.prototype.endl=function(){return this+"\n"};String.prototype.startsWith=function(e){return this.indexOf(e)===0};String.prototype.endsWith=String.prototype.endsWith||function(e){return this.match(e+"$")==e};String.prototype.contains=String.prototype.contains||function(e){return this.indexOf(e)>-1};const Y=function(e=""){if(!e)return"";if(e.startsWith("data:"))return;if(e.contains("?"))e+="&";else e+="?";return e+"cache="+CABLES.uuid()};const K=function(t,i){if(!t)return null;i=i||[];i.length=t.length;for(let e=0;e<t.length;e++){i[e]=t[e]}return i};const q=function(e){let t=CABLES.filename(e);const i=t.split(".");t=i[0];return t};const Z=function(){console.log("logstack",(new Error).stack)};const Q=function(e){let t="";if(!e)return"";if(e.startsWith("data:")&&e.contains(":")){const i=e.split(",");return i[0]}let i=(e+"").split("/");if(i.length>0){const n=i[i.length-1];let e=n.split("?");t=e[0]}return t||""};const J=function(e,t,i,n,r){h({url:e,cb:t,method:i,data:n,contenttype:r,sync:true})};const $=function(e,t,i,n,r,s,a={},o={}){const l={url:e,cb:t,method:i,data:n,contenttype:r,sync:false,jsonP:s,headers:a};if(o&&o.credentials)l.credentials=o.credentials;h(l)};const h=function(t){if(!t.hasOwnProperty("asynch"))t.asynch=true;let i;try{i=new XMLHttpRequest}catch(e){}i.onreadystatechange=function(){if(i.readyState!=4)return;if(t.cb){if(i.status==200||i.status==0)t.cb(false,i.responseText,i);else t.cb(true,i.responseText,i)}};try{i.open(t.method?t.method.toUpperCase():"GET",t.url,!t.sync)}catch(e){if(t.cb&&e)t.cb(true,e.msg,i)}if(typeof t.headers==="object"){if(t.headers){const n=Object.keys(t.headers);for(let e=0;e<n.length;e++){const r=n[e];const s=t.headers[r];i.setRequestHeader(r,s)}}}if(t.credentials&&t.credentials!=="omit"){i.withCredentials=true}try{if(!t.post&&!t.data){i.send()}else{i.setRequestHeader("Content-type",t.contenttype?t.contenttype:"application/x-www-form-urlencoded");i.send(t.data||t.post)}}catch(e){if(t.cb)t.cb(true,e.msg,i)}};const ee=function(e){if(!e&&e!==0)return"Unidentified";const t={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};if(t[e]){return t[e]}else{return String.fromCharCode(e)}};window.performance=window.performance||{offset:Date.now(),now:function e(){return Date.now()-this.offset}};const l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";const c=new Uint8Array(256);for(let e=0;e<l.length;e++)c[l.charCodeAt(e)]=e;const u=c;const te=function(e){if(e.buffer)e=e.buffer;let t=new Uint8Array(e),i,n=t.length,r="";for(i=0;i<n;i+=3){r+=l[t[i]>>2];r+=l[(t[i]&3)<<4|t[i+1]>>4];r+=l[(t[i+1]&15)<<2|t[i+2]>>6];r+=l[t[i+2]&63]}if(n%3===2)r=r.substring(0,r.length-1)+"=";else if(n%3===1)r=r.substring(0,r.length-2)+"==";return r};const g=function(e){let t=e.length*.75,i=e.length,n,r=0,s,a,o,l;if(e[e.length-1]==="="){t--;if(e[e.length-2]==="=")t--}let h=new ArrayBuffer(t),f=new Uint8Array(h);for(n=0;n<i;n+=4){s=u[e.charCodeAt(n)];a=u[e.charCodeAt(n+1)];o=u[e.charCodeAt(n+2)];l=u[e.charCodeAt(n+3)];f[r++]=s<<2|a>>4;f[r++]=(a&15)<<4|o>>2;f[r++]=(o&3)<<6|l&63}return h};class d{constructor(e){this._init();this._first=true;this._wireMesh=null;if(e)this.apply(e)}_init(){this._max=[-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE];this._min=[Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE];this._center=[0,0,0];this._size=[0,0,0];this._maxAxis=0;this._first=true}get maxAxis(){return this._maxAxis||1}get size(){return this._size}get center(){return this._center}get x(){return this._center[0]}get y(){return this._center[1]}get z(){return this._center[2]}get minX(){return this._min[0]}get minY(){return this._min[1]}get minZ(){return this._min[2]}get maxX(){return this._max[0]}get maxY(){return this._max[1]}get maxZ(){return this._max[2]}apply(t,e){if(!t){return}if(t instanceof d){const i=t;this.applyPos(i.maxX,i.maxY,i.maxZ);this.applyPos(i.minX,i.minY,i.minZ)}else{for(let e=0;e<t.vertices.length;e+=3)this.applyPos(t.vertices[e],t.vertices[e+1],t.vertices[e+2])}this.calcCenterSize()}copy(){return new d(this)}get changed(){return!(this._max[0]==-Number.MAX_VALUE&&this._max[1]==-Number.MAX_VALUE&&this._max[2]==-Number.MAX_VALUE)}applyPos(e,t,i){if(e==Number.MAX_VALUE||e==-Number.MAX_VALUE||t==Number.MAX_VALUE||t==-Number.MAX_VALUE||i==Number.MAX_VALUE||i==-Number.MAX_VALUE)return;if(!CABLES.UTILS.isNumeric(e)||!CABLES.UTILS.isNumeric(t)||!CABLES.UTILS.isNumeric(i))return;if(this._first){this._max[0]=e;this._max[1]=t;this._max[2]=i;this._min[0]=e;this._min[1]=t;this._min[2]=i;this._first=false;return}this._max[0]=Math.max(this._max[0],e);this._max[1]=Math.max(this._max[1],t);this._max[2]=Math.max(this._max[2],i);this._min[0]=Math.min(this._min[0],e);this._min[1]=Math.min(this._min[1],t);this._min[2]=Math.min(this._min[2],i)}calcCenterSize(){if(this._first)return;this._size[0]=this._max[0]-this._min[0];this._size[1]=this._max[1]-this._min[1];this._size[2]=this._max[2]-this._min[2];this._center[0]=(this._min[0]+this._max[0])/2;this._center[1]=(this._min[1]+this._max[1])/2;this._center[2]=(this._min[2]+this._max[2])/2;this._maxAxis=Math.max(this._size[2],Math.max(this._size[0],this._size[1]))}mulMat4(e){if(this._first){this._max[0]=0;this._max[1]=0;this._max[2]=0;this._min[0]=0;this._min[1]=0;this._min[2]=0;this._first=false}vec3.transformMat4(this._max,this._max,e);vec3.transformMat4(this._min,this._min,e);this.calcCenterSize()}render(e,t,i){if(!this._wireMesh)this._wireMesh=new CGL.WireCube(e);e.pushModelMatrix();mat4.translate(e.mMatrix,e.mMatrix,this._center);if(CABLES.UI&&i){CABLES.UI.OverlayMeshes.drawCube(i,this._size[0]/2,this._size[1]/2,this._size[2]/2)}e.popModelMatrix()}}const p=function(e){this.name=e||"unknown";this._log=new f("cgl_geometry");this.faceVertCount=3;this.glPrimitive=null;this._attributes={};this._vertices=[];this.verticesIndices=[];this.isGeometry=true;this.morphTargets=[];Object.defineProperty(this,"vertices",{get(){return this._vertices},set(e){this.setVertices(e)}});Object.defineProperty(this,"texCoords",{get(){const e=this.getAttribute("texCoords");if(!e)return[];return e.data},set(e){this.setAttribute("texCoords",e,2)}});Object.defineProperty(this,"vertexNormals",{get(){const e=this.getAttribute("vertexNormals");if(!e)return[];return e.data},set(e){this.setAttribute("vertexNormals",e,3)}});Object.defineProperty(this,"tangents",{get(){const e=this.getAttribute("tangents");if(!e)return[];return e.data},set(e){this.setAttribute("tangents",e,3)}});Object.defineProperty(this,"biTangents",{get(){const e=this.getAttribute("biTangents");if(!e)return[];return e.data},set(e){this.setAttribute("biTangents",e,3)}});Object.defineProperty(this,"vertexColors",{get(){const e=this.getAttribute("vertexColors");if(!e)return[];return e.data},set(e){this.setAttribute("vertexColors",e,4)}})};p.prototype.clear=function(){this._vertices=new Float32Array([]);this.verticesIndices=[];this.texCoords=new Float32Array([]);this.vertexNormals=new Float32Array([]);this.tangents=[];this.biTangents=[];this._attributes={}};p.prototype.getAttributes=function(){return this._attributes};p.prototype.getAttribute=function(e){for(const t in this._attributes){if(this._attributes[t].name==e)return this._attributes[t]}return null};p.prototype.setAttribute=function(e,t,i){let n="";if(!i||i>4){console.log("itemsize wrong?",i,e);this._log.stack("itemsize");i=3}if(i==1)n="float";else if(i==2)n="vec2";else if(i==3)n="vec3";else if(i==4)n="vec4";const r={name:e,data:t,itemSize:i,type:n};this._attributes[e]=r};p.prototype.copyAttribute=function(e,t){const i=this.getAttribute(e);t.setAttribute(e,new Float32Array(i.data),i.itemSize)};p.prototype.setVertices=function(e){if(e instanceof Float32Array)this._vertices=e;else this._vertices=new Float32Array(e)};p.prototype.setTexCoords=function(e){if(e instanceof Float32Array)this.texCoords=e;else this.texCoords=new Float32Array(e)};p.prototype.calcNormals=function(e){const t={smooth:e};this.calculateNormals(t)};p.prototype.flipNormals=function(t,i,n){let r=vec3.create();if(t==undefined)t=1;if(i==undefined)i=1;if(n==undefined)n=1;for(let e=0;e<this.vertexNormals.length;e+=3){vec3.set(r,this.vertexNormals[e+0],this.vertexNormals[e+1],this.vertexNormals[e+2]);r[0]*=-t;r[1]*=-i;r[2]*=-n;vec3.normalize(r,r);this.vertexNormals[e+0]=r[0];this.vertexNormals[e+1]=r[1];this.vertexNormals[e+2]=r[2]}};p.prototype.getNumTriangles=function(){if(this.verticesIndices&&this.verticesIndices.length)return this.verticesIndices.length/3;return this.vertices.length/3};p.prototype.flipVertDir=function(){const t=[];t.length=this.verticesIndices.length;for(let e=0;e<this.verticesIndices.length;e+=3){t[e]=this.verticesIndices[e+2];t[e+1]=this.verticesIndices[e+1];t[e+2]=this.verticesIndices[e]}this.verticesIndices=t};p.prototype.setPointVertices=function(t){if(t.length%3!==0){this._log.error("SetPointVertices: Array must be multiple of three.");return}if(!(t instanceof Float32Array))this.vertices=new Float32Array(t);else this.vertices=t;if(!(this.texCoords instanceof Float32Array))this.texCoords=new Float32Array(t.length/3*2);this.verticesIndices.length=t.length/3;for(let e=0;e<t.length/3;e++){this.verticesIndices[e]=e;this.texCoords[e*2]=0;this.texCoords[e*2+1]=0}};p.prototype.merge=function(t){if(!t)return;if(this.isIndexed()!=t.isIndexed()){if(this.isIndexed()){this.unIndex(false,true)}if(t.isIndexed()){const e=t.copy();e.unIndex(false,true);t=e}}const i=this.verticesIndices.length;const n=this._vertices.length/3;this.verticesIndices.length+=t.verticesIndices.length;for(let e=0;e<t.verticesIndices.length;e++)this.verticesIndices[i+e]=t.verticesIndices[e]+n;this.vertices=r.float32Concat(this._vertices,t.vertices);this.texCoords=r.float32Concat(this.texCoords,t.texCoords);this.vertexNormals=r.float32Concat(this.vertexNormals,t.vertexNormals);this.tangents=r.float32Concat(this.tangents,t.tangents);this.biTangents=r.float32Concat(this.biTangents,t.biTangents)};p.prototype.copy=function(){const t=new p(this.name+" copy");t.faceVertCount=this.faceVertCount;t.glPrimitive=this.glPrimitive;t.setVertices(this._vertices.slice(0));if(this.verticesIndices){t.verticesIndices.length=this.verticesIndices.length;for(let e=0;e<this.verticesIndices.length;e++)t.verticesIndices[e]=this.verticesIndices[e]}for(let e in this._attributes)this.copyAttribute(e,t);t.morphTargets.length=this.morphTargets.length;for(let e=0;e<this.morphTargets.length;e++)t.morphTargets[e]=this.morphTargets[e];return t};p.prototype.calculateNormals=function(t){t=t||{};if(t.smooth===false)this.unIndex();const i=vec3.create();const n=vec3.create();const r=vec3.create();function s(e){vec3.subtract(i,e[0],e[1]);vec3.subtract(n,e[0],e[2]);vec3.cross(r,i,n);vec3.normalize(r,r);if(t&&t.forceZUp){if(r[2]<0){r[0]*=-1;r[1]*=-1;r[2]*=-1}}return r}this.getVertexVec=function(e){const t=[0,0,0];t[0]=this.vertices[e*3+0];t[1]=this.vertices[e*3+1];t[2]=this.vertices[e*3+2];return t};if(!(this.vertexNormals instanceof Float32Array)||this.vertexNormals.length!=this.vertices.length)this.vertexNormals=new Float32Array(this.vertices.length);for(let e=0;e<this.vertices.length;e++){this.vertexNormals[e]=0}if(!this.isIndexed()){const a=[];for(let e=0;e<this.vertices.length;e+=9){const o=[[this.vertices[e+0],this.vertices[e+1],this.vertices[e+2]],[this.vertices[e+3],this.vertices[e+4],this.vertices[e+5]],[this.vertices[e+6],this.vertices[e+7],this.vertices[e+8]]];const l=s(o);a.push(l[0],l[1],l[2],l[0],l[1],l[2],l[0],l[1],l[2])}this.vertexNormals=a}else{const h=[];h.length=Math.floor(this.verticesIndices.length/3);for(let e=0;e<this.verticesIndices.length;e+=3){const o=[this.getVertexVec(this.verticesIndices[e+0]),this.getVertexVec(this.verticesIndices[e+1]),this.getVertexVec(this.verticesIndices[e+2])];h[e/3]=s(o);this.vertexNormals[this.verticesIndices[e+0]*3+0]+=h[e/3][0];this.vertexNormals[this.verticesIndices[e+0]*3+1]+=h[e/3][1];this.vertexNormals[this.verticesIndices[e+0]*3+2]+=h[e/3][2];this.vertexNormals[this.verticesIndices[e+1]*3+0]+=h[e/3][0];this.vertexNormals[this.verticesIndices[e+1]*3+1]+=h[e/3][1];this.vertexNormals[this.verticesIndices[e+1]*3+2]+=h[e/3][2];this.vertexNormals[this.verticesIndices[e+2]*3+0]+=h[e/3][0];this.vertexNormals[this.verticesIndices[e+2]*3+1]+=h[e/3][1];this.vertexNormals[this.verticesIndices[e+2]*3+2]+=h[e/3][2]}for(let t=0;t<this.verticesIndices.length;t+=3){for(let e=0;e<3;e++){const f=[this.vertexNormals[this.verticesIndices[t+e]*3+0],this.vertexNormals[this.verticesIndices[t+e]*3+1],this.vertexNormals[this.verticesIndices[t+e]*3+2]];vec3.normalize(f,f);this.vertexNormals[this.verticesIndices[t+e]*3+0]=f[0];this.vertexNormals[this.verticesIndices[t+e]*3+1]=f[1];this.vertexNormals[this.verticesIndices[t+e]*3+2]=f[2]}}}};p.prototype.calcTangentsBitangents=function(){if(!this.vertices.length){return}if(!this.vertexNormals.length){return}if(!this.texCoords.length){const A=this.vertices.length/3*2;this.texCoords=new Float32Array(A);for(let e=0;e<A;e+=1)this.texCoords[e]=0}if(!this.verticesIndices||!this.verticesIndices.length){return}if(this.verticesIndices.length%3!==0){this._log.error("Vertex indices mismatch!");return}const t=this.verticesIndices.length/3;const i=this.vertices.length/3;this.tangents=new Float32Array(this.vertexNormals.length);this.biTangents=new Float32Array(this.vertexNormals.length);const n=[];n.length=i*2;const r=vec3.create();const s=vec3.create();const a=vec3.create();const o=vec2.create();const l=vec2.create();const h=vec2.create();const f=vec3.create();const c=vec3.create();for(let e=0;e<t;e+=1){const v=this.verticesIndices[e*3];const b=this.verticesIndices[e*3+1];const x=this.verticesIndices[e*3+2];vec3.set(r,this.vertices[v*3],this.vertices[v*3+1],this.vertices[v*3+2]);vec3.set(s,this.vertices[b*3],this.vertices[b*3+1],this.vertices[b*3+2]);vec3.set(a,this.vertices[x*3],this.vertices[x*3+1],this.vertices[x*3+2]);vec2.set(o,this.texCoords[v*2],this.texCoords[v*2+1]);vec2.set(l,this.texCoords[b*2],this.texCoords[b*2+1]);vec2.set(h,this.texCoords[x*2],this.texCoords[x*2+1]);const I=s[0]-r[0];const R=a[0]-r[0];const S=s[1]-r[1];const C=a[1]-r[1];const L=s[2]-r[2];const O=a[2]-r[2];const P=l[0]-o[0];const y=h[0]-o[0];const N=l[1]-o[1];const M=h[1]-o[1];const F=1/(P*M-y*N);vec3.set(f,(M*I-N*R)*F,(M*S-N*C)*F,(M*L-N*O)*F);vec3.set(c,(P*R-y*I)*F,(P*C-y*S)*F,(P*O-y*L)*F);n[v]=f;n[b]=f;n[x]=f;n[v+i]=c;n[b+i]=c;n[x+i]=c}const u=vec3.create();const g=vec3.create();const d=vec3.create();const p=vec3.create();const _=vec3.create();const m=vec3.create();const E=vec3.create();const T=vec3.create();for(let e=0;e<i;e+=1){if(!n[e])continue;vec3.set(u,this.vertexNormals[e*3],this.vertexNormals[e*3+1],this.vertexNormals[e*3+2]);vec3.set(g,n[e][0],n[e][1],n[e][2]);const U=vec3.dot(u,g);vec3.scale(_,u,U);vec3.subtract(m,g,_);vec3.normalize(T,m);vec3.cross(E,u,g);const G=1;vec3.scale(d,T,1/G);vec3.cross(p,u,d);this.tangents[e*3+0]=d[0];this.tangents[e*3+1]=d[1];this.tangents[e*3+2]=d[2];this.biTangents[e*3+0]=p[0];this.biTangents[e*3+1]=p[1];this.biTangents[e*3+2]=p[2]}};p.prototype.isIndexed=function(){if(this._vertices.length==0)return true;return this.verticesIndices.length!=0};p.prototype.unIndex=function(e,t){const i=[];const n=[];let r=0;for(let e in this._attributes){const s=this._attributes[e];let i=[];for(let t=0;t<this.verticesIndices.length;t+=3){for(let e=0;e<3;e++){if(s.itemSize==3)i.push(s.data[this.verticesIndices[t+e]*3+0],s.data[this.verticesIndices[t+e]*3+1],s.data[this.verticesIndices[t+e]*3+2]);else if(s.itemSize==4)i.push(s.data[this.verticesIndices[t+e]*4+0],s.data[this.verticesIndices[t+e]*4+1],s.data[this.verticesIndices[t+e]*4+2],s.data[this.verticesIndices[t+e]*4+3]);else if(s.itemSize==2)i.push(s.data[this.verticesIndices[t+e]*2+0],s.data[this.verticesIndices[t+e]*2+1]);else if(s.itemSize==1)i.push(s.data[this.verticesIndices[t+e]]);else console.log("unknown attr",s)}}this.setAttribute(s.name,i,s.itemSize)}for(let e=0;e<this.verticesIndices.length;e+=3){i.push(this.vertices[this.verticesIndices[e+0]*3+0],this.vertices[this.verticesIndices[e+0]*3+1],this.vertices[this.verticesIndices[e+0]*3+2]);n.push(r);r++;i.push(this.vertices[this.verticesIndices[e+1]*3+0],this.vertices[this.verticesIndices[e+1]*3+1],this.vertices[this.verticesIndices[e+1]*3+2]);n.push(r);r++;i.push(this.vertices[this.verticesIndices[e+2]*3+0],this.vertices[this.verticesIndices[e+2]*3+1],this.vertices[this.verticesIndices[e+2]*3+2]);n.push(r);r++}this.vertices=i;this.verticesIndices=[];if(e)this.verticesIndices=n;if(!t)this.calculateNormals()};p.prototype.calcBarycentric=function(){let t=[];t.length=this.vertices.length;for(let e=0;e<this.vertices.length;e++)t[e]=0;let i=0;for(let e=0;e<this.vertices.length;e+=3){t[e+i]=1;i++;if(i==3)i=0}this.setAttribute("attrBarycentric",t,3)};p.prototype.getBounds=function(){return new d(this)};p.prototype.center=function(e,t,i){if(e===undefined){e=true;t=true;i=true}let n=0;const r=this.getBounds();const s=[r.minX+(r.maxX-r.minX)/2,r.minY+(r.maxY-r.minY)/2,r.minZ+(r.maxZ-r.minZ)/2];for(n=0;n<this.vertices.length;n+=3){if(this.vertices[n+0]==this.vertices[n+0]){if(e)this.vertices[n+0]-=s[0];if(t)this.vertices[n+1]-=s[1];if(i)this.vertices[n+2]-=s[2]}}return s};p.prototype.mapTexCoords2d=function(){const t=this.getBounds();const i=this.vertices.length/3;this.texCoords=new Float32Array(i*2);for(let e=0;e<i;e++){const n=this.vertices[e*3+0];const r=this.vertices[e*3+1];this.texCoords[e*2+0]=n/(t.maxX-t.minX)+.5;this.texCoords[e*2+1]=1-r/(t.maxY-t.minY)+.5}};p.prototype.getInfoOneLine=function(){let e="";if(this.faceVertCount==3&&this.verticesIndices)e+=this.verticesIndices.length/3;else e+=0;e+=" tris ";if(this.vertices)e+=this.vertices.length/3;else e+=0;e+=" verts";return e};p.prototype.getInfo=function(){const e={};if(this.faceVertCount==3&&this.verticesIndices)e.numFaces=this.verticesIndices.length/3;else e.numFaces=0;if(this.verticesIndices&&this.verticesIndices.length)e.indices=this.verticesIndices.length;if(this.vertices)e.numVerts=this.vertices.length/3;else e.numVerts=0;if(this.vertexNormals)e.numNormals=this.vertexNormals.length/3;else e.numNormals=0;if(this.texCoords)e.numTexCoords=this.texCoords.length/2;else e.numTexCoords=0;if(this.tangents)e.numTangents=this.tangents.length/3;else e.numTangents=0;if(this.biTangents)e.numBiTangents=this.biTangents.length/3;else e.numBiTangents=0;if(this.biTangents)e.numBiTangents=this.biTangents.length/3;else e.numBiTangents=0;if(this.vertexColors)e.numVertexColors=this.vertexColors.length/4;else e.numVertexColors=0;if(this.getAttributes())e.numAttribs=Object.keys(this.getAttributes()).length;else e.numAttribs=0;e.isIndexed=this.isIndexed();return e};p.buildFromFaces=function(t,e,i){const n=[];const r=[];for(let e=0;e<t.length;e+=3){const a=t[e+0];const o=t[e+1];const l=t[e+2];const h=[-1,-1,-1];if(i)for(let e=0;e<n.length;e+=3){if(n[e+0]==a[0]&&n[e+1]==a[1]&&n[e+2]==a[2])h[0]=e/3;if(n[e+0]==o[0]&&n[e+1]==o[1]&&n[e+2]==o[2])h[1]=e/3;if(n[e+0]==l[0]&&n[e+1]==l[1]&&n[e+2]==l[2])h[2]=e/3}if(h[0]==-1){n.push(a[0],a[1],a[2]);h[0]=(n.length-1)/3}if(h[1]==-1){n.push(o[0],o[1],o[2]);h[1]=(n.length-1)/3}if(h[2]==-1){n.push(l[0],l[1],l[2]);h[2]=(n.length-1)/3}r.push(parseInt(h[0],10));r.push(parseInt(h[1],10));r.push(parseInt(h[2],10))}const s=new p(e);s.name=e;s.vertices=n;s.verticesIndices=r;return s};p.json2geom=function(t){const i=new p("jsonMeshGeom");i.verticesIndices=[];i.vertices=t.vertices||[];i.vertexNormals=t.normals||[];i.vertexColors=t.colors||[];i.tangents=t.tangents||[];i.biTangents=t.bitangents||[];if(t.texturecoords)i.setTexCoords(t.texturecoords[0]);if(t.vertices_b64)i.vertices=new Float32Array(g(t.vertices_b64));if(t.normals_b64)i.vertexNormals=new Float32Array(g(t.normals_b64));if(t.tangents_b64)i.tangents=new Float32Array(g(t.tangents_b64));if(t.bitangents_b64)i.biTangents=new Float32Array(g(t.bitangents_b64));if(t.texturecoords_b64)i.setTexCoords(new Float32Array(g(t.texturecoords_b64[0])));if(t.faces_b64){i.verticesIndices=new Uint32Array(g(t.faces_b64))}else{i.verticesIndices.length=t.faces.length*3;for(let e=0;e<t.faces.length;e++){i.verticesIndices[e*3]=t.faces[e][0];i.verticesIndices[e*3+1]=t.faces[e][1];i.verticesIndices[e*3+2]=t.faces[e][2]}}return i};const _=function(){this._log=new f("eventtarget");this._eventCallbacks={};this._logName="";this._logEvents=false;this._listeners={};this.addEventListener=this.on=function(e,t,i){const n={id:(i||"")+CABLES.simpleId(),name:e,cb:t};if(!this._eventCallbacks[e])this._eventCallbacks[e]=[n];else this._eventCallbacks[e].push(n);this._listeners[n.id]=n;return n.id};this.hasEventListener=function(e,t){if(e&&!t){if(this._listeners[e])return true;else return false}else{this._log.warn("old eventtarget function haseventlistener!");if(e&&t){if(this._eventCallbacks[e]){const i=this._eventCallbacks[e].indexOf(t);if(i==-1)return false;return true}}}};this.hasListenerForEventName=function(e){return this._eventCallbacks[e]&&this._eventCallbacks[e].length>0};this.removeEventListener=this.off=function(n,t){if(n===null||n===undefined)return;if(!t){const r=this._listeners[n];if(!r){this._log.log("could not find event...");return}let i=true;while(i){i=false;let t=-1;for(let e=0;e<this._eventCallbacks[r.name].length;e++){if(this._eventCallbacks[r.name][e].id.startsWith(n)){i=true;t=e}}if(t!==-1){this._eventCallbacks[r.name].splice(t,1);delete this._listeners[n]}}return}this._log.info("[eventtaget] ","old function signature: removeEventListener! use listener id");this._log.log((new Error).stack);let i=null;for(let e=0;e<this._eventCallbacks[n].length;e++)if(this._eventCallbacks[n][e].cb==t)i=e;if(i!==null){delete this._eventCallbacks[i]}else this._log.warn("removeEventListener not found "+n)};this.logEvents=function(e,t){this._logEvents=e;this._logName=t};this.emitEvent=function(t,i,n,r,s,a,o){if(this._logEvents)this._log.log("[event] ",this._logName,t,this._eventCallbacks);if(this._eventCallbacks[t]){for(let e=0;e<this._eventCallbacks[t].length;e++){if(this._eventCallbacks[t][e]){this._eventCallbacks[t][e].cb(i,n,r,s,a,o)}}}else{if(this._logEvents)this._log.log("[event] has no event callback",t,this._eventCallbacks)}}};const m={ANIM:{EASINGS:["linear","absolute","smoothstep","smootherstep","Cubic In","Cubic Out","Cubic In Out","Expo In","Expo Out","Expo In Out","Sin In","Sin Out","Sin In Out","Quart In","Quart Out","Quart In Out","Quint In","Quint Out","Quint In Out","Back In","Back Out","Back In Out","Elastic In","Elastic Out","Bounce In","Bounce Out"],EASING_LINEAR:0,EASING_ABSOLUTE:1,EASING_SMOOTHSTEP:2,EASING_SMOOTHERSTEP:3,EASING_CUBICSPLINE:4,EASING_CUBIC_IN:5,EASING_CUBIC_OUT:6,EASING_CUBIC_INOUT:7,EASING_EXPO_IN:8,EASING_EXPO_OUT:9,EASING_EXPO_INOUT:10,EASING_SIN_IN:11,EASING_SIN_OUT:12,EASING_SIN_INOUT:13,EASING_BACK_IN:14,EASING_BACK_OUT:15,EASING_BACK_INOUT:16,EASING_ELASTIC_IN:17,EASING_ELASTIC_OUT:18,EASING_BOUNCE_IN:19,EASING_BOUNCE_OUT:21,EASING_QUART_IN:22,EASING_QUART_OUT:23,EASING_QUART_INOUT:24,EASING_QUINT_IN:25,EASING_QUINT_OUT:26,EASING_QUINT_INOUT:27},OP:{OP_PORT_TYPE_VALUE:0,OP_PORT_TYPE_NUMBER:0,OP_PORT_TYPE_FUNCTION:1,OP_PORT_TYPE_TRIGGER:1,OP_PORT_TYPE_OBJECT:2,OP_PORT_TYPE_TEXTURE:2,OP_PORT_TYPE_ARRAY:3,OP_PORT_TYPE_DYNAMIC:4,OP_PORT_TYPE_STRING:5,OP_VERSION_PREFIX:"_v"},PORT:{PORT_DIR_IN:0,PORT_DIR_OUT:1},PACO:{PACO_CLEAR:0,PACO_VALUECHANGE:1,PACO_OP_DELETE:2,PACO_UNLINK:3,PACO_LINK:4,PACO_LOAD:5,PACO_OP_CREATE:6,PACO_OP_ENABLE:7,PACO_OP_DISABLE:8,PACO_UIATTRIBS:9,PACO_VARIABLES:10,PACO_TRIGGERS:11,PACO_PORT_SETVARIABLE:12,PACO_PORT_SETANIMATED:13,PACO_PORT_ANIM_UPDATED:14,PACO_DESERIALIZE:15}};const E=function(e){this.time=0;this.value=0;this.onChange=null;this._easing=0;this.cb=null;this.cbTriggered=false;this.setEasing(m.ANIM.EASING_LINEAR);this.set(e)};E.cubicSpline=function(e,t,i){let n=t.value,r=t.bezTangOut,s=i.value,a=i.bezTangIn;let o=e;let l=o*o;let h=l*o;return(2*h-3*l+1)*n+(h-2*l+o)*r+(-2*h+3*l)*s+(h-l)*a};E.easeCubicSpline=function(e,t){return E.cubicSpline(e,this,t)};E.linear=function(e,t,i){return parseFloat(t.value)+parseFloat(i.value-t.value)*e};E.easeLinear=function(e,t){return E.linear(e,this,t)};E.easeAbsolute=function(e,t){return this.value};const T=function(e){return e=2**(10*(e-1))};E.easeExpoIn=function(e,t){e=T(e);return E.linear(e,this,t)};const A=function(e){e=-(2**(-10*e))+1;return e};E.easeExpoOut=function(e,t){e=A(e);return E.linear(e,this,t)};const v=function(e){e*=2;if(e<1){e=.5*2**(10*(e-1))}else{e--;e=.5*(-(2**(-10*e))+2)}return e};E.easeExpoInOut=function(e,t){e=v(e);return E.linear(e,this,t)};E.easeSinIn=function(e,t){e=-1*Math.cos(e*Math.PI/2)+1;return E.linear(e,this,t)};E.easeSinOut=function(e,t){e=Math.sin(e*Math.PI/2);return E.linear(e,this,t)};E.easeSinInOut=function(e,t){e=-.5*(Math.cos(Math.PI*e)-1);return E.linear(e,this,t)};const b=function(e){e=e*e*e;return e};E.easeCubicIn=function(e,t){e=b(e);return E.linear(e,this,t)};E.easeInQuint=function(e,t){e=e*e*e*e*e;return E.linear(e,this,t)};E.easeOutQuint=function(e,t){e=(e-=1)*e*e*e*e+1;return E.linear(e,this,t)};E.easeInOutQuint=function(e,t){if((e/=.5)<1)e=.5*e*e*e*e*e;else e=.5*((e-=2)*e*e*e*e+2);return E.linear(e,this,t)};E.easeInQuart=function(e,t){e=e*e*e*e;return E.linear(e,this,t)};E.easeOutQuart=function(e,t){e=-1*((e-=1)*e*e*e-1);return E.linear(e,this,t)};E.easeInOutQuart=function(e,t){if((e/=.5)<1)e=.5*e*e*e*e;else e=-.5*((e-=2)*e*e*e-2);return E.linear(e,this,t)};E.bounce=function(e){if((e/=1)<1/2.75)e=7.5625*e*e;else if(e<2/2.75)e=7.5625*(e-=1.5/2.75)*e+.75;else if(e<2.5/2.75)e=7.5625*(e-=2.25/2.75)*e+.9375;else e=7.5625*(e-=2.625/2.75)*e+.984375;return e};E.easeInBounce=function(e,t){return E.linear(E.bounce(e),this,t)};E.easeOutBounce=function(e,t){return E.linear(E.bounce(e),this,t)};E.easeInElastic=function(e,t){let i=1.70158;let n=0;let r=1;const s=0;const a=1;const o=1;if(e===0)e=s;else if((e/=a)==1)e=s+o;else{if(!n)n=a*.3;if(r<Math.abs(o)){r=o;i=n/4}else i=n/(2*Math.PI)*Math.asin(o/r);e=-(r*2**(10*(e-=1))*Math.sin((e*a-i)*(2*Math.PI)/n))+s}return E.linear(e,this,t)};E.easeOutElastic=function(e,t){let i=1.70158;let n=0;let r=1;const s=0;const a=1;const o=1;if(e===0)e=s;else if((e/=a)==1)e=s+o;else{if(!n)n=a*.3;if(r<Math.abs(o)){r=o;i=n/4}else i=n/(2*Math.PI)*Math.asin(o/r);e=r*2**(-10*e)*Math.sin((e*a-i)*(2*Math.PI)/n)+o+s}return E.linear(e,this,t)};E.easeInBack=function(e,t){const i=1.70158;e=e*e*((i+1)*e-i);return E.linear(e,this,t)};E.easeOutBack=function(e,t){const i=1.70158;e=(e=e/1-1)*e*((i+1)*e+i)+1;return E.linear(e,this,t)};E.easeInOutBack=function(e,t){let i=1.70158;const n=1/2;if((e/=1/2)<1)e=n*(e*e*(((i*=1.525)+1)*e-i));else e=n*((e-=2)*e*(((i*=1.525)+1)*e+i)+2);return E.linear(e,this,t)};const x=function(e){e--;e=e*e*e+1;return e};E.easeCubicOut=function(e,t){e=x(e);return E.linear(e,this,t)};const I=function(e){e*=2;if(e<1)e=.5*e*e*e;else{e-=2;e=.5*(e*e*e+2)}return e};E.easeCubicInOut=function(e,t){e=I(e);return E.linear(e,this,t)};E.easeSmoothStep=function(e,t){const i=Math.max(0,Math.min(1,e));e=i*i*(3-2*i);return E.linear(e,this,t)};E.easeSmootherStep=function(e,t){const i=Math.max(0,Math.min(1,(e-0)/(1-0)));e=i*i*i*(i*(i*6-15)+10);return E.linear(e,this,t)};E.prototype.setEasing=function(e){this._easing=e;if(this._easing==m.ANIM.EASING_LINEAR)this.ease=E.easeLinear;else if(this._easing==m.ANIM.EASING_ABSOLUTE)this.ease=E.easeAbsolute;else if(this._easing==m.ANIM.EASING_SMOOTHSTEP)this.ease=E.easeSmoothStep;else if(this._easing==m.ANIM.EASING_SMOOTHERSTEP)this.ease=E.easeSmootherStep;else if(this._easing==m.ANIM.EASING_CUBIC_IN)this.ease=E.easeCubicIn;else if(this._easing==m.ANIM.EASING_CUBIC_OUT)this.ease=E.easeCubicOut;else if(this._easing==m.ANIM.EASING_CUBIC_INOUT)this.ease=E.easeCubicInOut;else if(this._easing==m.ANIM.EASING_EXPO_IN)this.ease=E.easeExpoIn;else if(this._easing==m.ANIM.EASING_EXPO_OUT)this.ease=E.easeExpoOut;else if(this._easing==m.ANIM.EASING_EXPO_INOUT)this.ease=E.easeExpoInOut;else if(this._easing==m.ANIM.EASING_SIN_IN)this.ease=E.easeSinIn;else if(this._easing==m.ANIM.EASING_SIN_OUT)this.ease=E.easeSinOut;else if(this._easing==m.ANIM.EASING_SIN_INOUT)this.ease=E.easeSinInOut;else if(this._easing==m.ANIM.EASING_BACK_OUT)this.ease=E.easeOutBack;else if(this._easing==m.ANIM.EASING_BACK_IN)this.ease=E.easeInBack;else if(this._easing==m.ANIM.EASING_BACK_INOUT)this.ease=E.easeInOutBack;else if(this._easing==m.ANIM.EASING_ELASTIC_IN)this.ease=E.easeInElastic;else if(this._easing==m.ANIM.EASING_ELASTIC_OUT)this.ease=E.easeOutElastic;else if(this._easing==m.ANIM.EASING_ELASTIC_INOUT)this.ease=E.easeElasticInOut;else if(this._easing==m.ANIM.EASING_BOUNCE_IN)this.ease=E.easeInBounce;else if(this._easing==m.ANIM.EASING_BOUNCE_OUT)this.ease=E.easeOutBounce;else if(this._easing==m.ANIM.EASING_QUART_OUT)this.ease=E.easeOutQuart;else if(this._easing==m.ANIM.EASING_QUART_IN)this.ease=E.easeInQuart;else if(this._easing==m.ANIM.EASING_QUART_INOUT)this.ease=E.easeInOutQuart;else if(this._easing==m.ANIM.EASING_QUINT_OUT)this.ease=E.easeOutQuint;else if(this._easing==m.ANIM.EASING_QUINT_IN)this.ease=E.easeInQuint;else if(this._easing==m.ANIM.EASING_QUINT_INOUT)this.ease=E.easeInOutQuint;else if(this._easing==m.ANIM.EASING_CUBICSPLINE){this.ease=E.easeCubicSpline}else{this._easing=m.ANIM.EASING_LINEAR;this.ease=E.easeLinear}};E.prototype.trigger=function(){this.cb();this.cbTriggered=true};E.prototype.setValue=function(e){this.value=e;if(this.onChange!==null)this.onChange()};E.prototype.set=function(e){if(e){if(e.e)this.setEasing(e.e);if(e.cb){this.cb=e.cb;this.cbTriggered=false}if(e.b){}if(e.hasOwnProperty("t"))this.time=e.t;if(e.hasOwnProperty("time"))this.time=e.time;if(e.hasOwnProperty("v"))this.value=e.v;else if(e.hasOwnProperty("value"))this.value=e.value}if(this.onChange!==null)this.onChange()};E.prototype.getSerialized=function(){const e={};e.t=this.time;e.v=this.value;e.e=this._easing;return e};E.prototype.getEasing=function(){return this._easing};const R=function(e){_.apply(this);e=e||{};this.keys=[];this.onChange=null;this.stayInTimeline=false;this.loop=false;this._log=new f("Anim");this._lastKeyIndex=0;this._cachedIndex=0;this.name=e.name||null;this.defaultEasing=e.defaultEasing||m.ANIM.EASING_LINEAR;this.onLooped=null;this._timesLooped=0;this._needsSort=false};R.prototype.forceChangeCallback=function(){if(this.onChange!==null)this.onChange();this.emitEvent("onChange",this)};R.prototype.getLoop=function(){return this.loop};R.prototype.setLoop=function(e){this.loop=e;this.emitEvent("onChange",this)};R.prototype.hasEnded=function(e){if(this.keys.length===0)return true;if(this.keys[this._lastKeyIndex].time<=e)return true;return false};R.prototype.isRising=function(e){if(this.hasEnded(e))return false;const t=this.getKeyIndex(e);if(this.keys[t].value<this.keys[t+1].value)return true;return false};R.prototype.clearBefore=function(e){const t=this.getValue(e);const i=this.getKeyIndex(e);this.setValue(e,t);if(i>1)this.keys.splice(0,i);this._updateLastIndex()};R.prototype.clear=function(e){let t=0;if(e)t=this.getValue(e);this.keys.length=0;this._updateLastIndex();if(e)this.setValue(e,t);if(this.onChange!==null)this.onChange();this.emitEvent("onChange",this)};R.prototype.sortKeys=function(){this.keys.sort((e,t)=>{return parseFloat(e.time)-parseFloat(t.time)});this._updateLastIndex();this._needsSort=false;if(this.keys.length%1e3==0)console.log(this.name,this.keys.length)};R.prototype.getLength=function(){if(this.keys.length===0)return 0;return this.keys[this.keys.length-1].time};R.prototype.getKeyIndex=function(t){let i=0;let n=0;if(this._cachedIndex&&this.keys.length>this._cachedIndex&&t>=this.keys[this._cachedIndex].time)n=this._cachedIndex;for(let e=n;e<this.keys.length;e++){if(t>=this.keys[e].time)i=e;if(this.keys[e].time>t){if(t!=0)this._cachedIndex=i;return i}}return i};R.prototype.setValue=function(t,i,n){let r=null;if(this.keys.length==0||t<=this.keys[this.keys.length-1].time)for(let e=0;e<this.keys.length;e++)if(this.keys[e].time==t){r=this.keys[e];this.keys[e].setValue(i);this.keys[e].cb=n;break}if(!r){r=new E({time:t,value:i,e:this.defaultEasing,cb:n});this.keys.push(r);this._updateLastIndex()}if(this.onChange)this.onChange();this.emitEvent("onChange",this);this._needsSort=true;return r};R.prototype.setKeyEasing=function(e,t){if(this.keys[e]){this.keys[e].setEasing(t);this.emitEvent("onChange",this)}};R.prototype.getSerialized=function(){const t={};t.keys=[];t.loop=this.loop;for(let e=0;e<this.keys.length;e++)t.keys.push(this.keys[e].getSerialized());return t};R.prototype.getKey=function(e){const t=this.getKeyIndex(e);return this.keys[t]};R.prototype.getNextKey=function(e){let t=this.getKeyIndex(e)+1;if(t>=this.keys.length)t=this.keys.length-1;return this.keys[t]};R.prototype.isFinished=function(e){if(this.keys.length<=0)return true;return e>this.keys[this.keys.length-1].time};R.prototype.isStarted=function(e){if(this.keys.length<=0)return false;return e>=this.keys[0].time};R.prototype.getValue=function(e){if(this.keys.length===0){return 0}if(this._needsSort)this.sortKeys();if(!this.loop&&e>this.keys[this._lastKeyIndex].time){if(this.keys[this._lastKeyIndex].cb&&!this.keys[this._lastKeyIndex].cbTriggered)this.keys[this._lastKeyIndex].trigger();return this.keys[this._lastKeyIndex].value}if(e<this.keys[0].time){return this.keys[0].value}if(this.loop&&e>this.keys[this._lastKeyIndex].time){const a=e/this.keys[this._lastKeyIndex].time;if(a>this._timesLooped){this._timesLooped++;if(this.onLooped)this.onLooped()}e=(e-this.keys[0].time)%(this.keys[this._lastKeyIndex].time-this.keys[0].time);e+=this.keys[0].time}const t=this.getKeyIndex(e);if(t>=this._lastKeyIndex){if(this.keys[this._lastKeyIndex].cb&&!this.keys[this._lastKeyIndex].cbTriggered)this.keys[this._lastKeyIndex].trigger();return this.keys[this._lastKeyIndex].value}const i=t+1;const n=this.keys[t];const r=this.keys[i];if(n.cb&&!n.cbTriggered)n.trigger();if(!r)return-1;const s=(e-n.time)/(r.time-n.time);if(!n.ease)this.log._warn("has no ease",n,r);return n.ease(s,r)};R.prototype._updateLastIndex=function(){this._lastKeyIndex=this.keys.length-1};R.prototype.addKey=function(e){if(e.time===undefined){this.log.warn("key time undefined, ignoring!")}else{this.keys.push(e);if(this.onChange!==null)this.onChange();this.emitEvent("onChange",this)}this._updateLastIndex()};R.prototype.easingFromString=function(e){if(e=="linear")return m.ANIM.EASING_LINEAR;if(e=="absolute")return m.ANIM.EASING_ABSOLUTE;if(e=="smoothstep")return m.ANIM.EASING_SMOOTHSTEP;if(e=="smootherstep")return m.ANIM.EASING_SMOOTHERSTEP;if(e=="Cubic In")return m.ANIM.EASING_CUBIC_IN;if(e=="Cubic Out")return m.ANIM.EASING_CUBIC_OUT;if(e=="Cubic In Out")return m.ANIM.EASING_CUBIC_INOUT;if(e=="Expo In")return m.ANIM.EASING_EXPO_IN;if(e=="Expo Out")return m.ANIM.EASING_EXPO_OUT;if(e=="Expo In Out")return m.ANIM.EASING_EXPO_INOUT;if(e=="Sin In")return m.ANIM.EASING_SIN_IN;if(e=="Sin Out")return m.ANIM.EASING_SIN_OUT;if(e=="Sin In Out")return m.ANIM.EASING_SIN_INOUT;if(e=="Back In")return m.ANIM.EASING_BACK_IN;if(e=="Back Out")return m.ANIM.EASING_BACK_OUT;if(e=="Back In Out")return m.ANIM.EASING_BACK_INOUT;if(e=="Elastic In")return m.ANIM.EASING_ELASTIC_IN;if(e=="Elastic Out")return m.ANIM.EASING_ELASTIC_OUT;if(e=="Bounce In")return m.ANIM.EASING_BOUNCE_IN;if(e=="Bounce Out")return m.ANIM.EASING_BOUNCE_OUT;if(e=="Quart Out")return m.ANIM.EASING_QUART_OUT;if(e=="Quart In")return m.ANIM.EASING_QUART_IN;if(e=="Quart In Out")return m.ANIM.EASING_QUART_INOUT;if(e=="Quint Out")return m.ANIM.EASING_QUINT_OUT;if(e=="Quint In")return m.ANIM.EASING_QUINT_IN;if(e=="Quint In Out")return m.ANIM.EASING_QUINT_INOUT};R.prototype.createPort=function(e,t,i){const n=e.inDropDown(t,m.ANIM.EASINGS,"Cubic Out");n.set("linear");n.defaultValue="linear";n.onChange=function(){this.defaultEasing=this.easingFromString(n.get());this.emitEvent("onChangeDefaultEasing",this);if(i)i()}.bind(this);return n};R.slerpQuaternion=function(e,t,i,n,r,s){if(!R.slerpQuaternion.q1){R.slerpQuaternion.q1=quat.create();R.slerpQuaternion.q2=quat.create()}const a=i.getKeyIndex(e);let o=a+1;if(o>=i.keys.length)o=i.keys.length-1;if(a==o){quat.set(t,i.keys[a].value,n.keys[a].value,r.keys[a].value,s.keys[a].value)}else{const l=i.keys[a].time;const h=i.keys[o].time;const f=(e-l)/(h-l);quat.set(R.slerpQuaternion.q1,i.keys[a].value,n.keys[a].value,r.keys[a].value,s.keys[a].value);quat.set(R.slerpQuaternion.q2,i.keys[o].value,n.keys[o].value,r.keys[o].value,s.keys[o].value);quat.slerp(t,R.slerpQuaternion.q1,R.slerpQuaternion.q2,f)}return t};const S={Key:E};const C=function(e,t,i,n){_.apply(this);this.data={};this._log=new f("core_port");this.direction=m.PORT.PORT_DIR_IN;this.id=String(CABLES.simpleId());this._op=e;this.links=[];this.value=0;this.name=t;this.type=i||m.OP.OP_PORT_TYPE_VALUE;this.uiAttribs=n||{};this.anim=null;this._oldAnimVal=-5711;this.defaultValue=null;this._uiActiveState=true;this.ignoreValueSerialize=false;this.onLinkChanged=null;this.crashed=false;this._valueBeforeLink=null;this._lastAnimFrame=-1;this._animated=false;this.onValueChanged=null;this.onTriggered=null;this.onUiActiveStateChange=null;this.changeAlways=false;this.forceRefChange=false;this._useVariableName=null;this.activityCounter=0;this.apf=0;this.activityCounterStartFrame=0;this._tempLastUiValue=null;Object.defineProperty(this,"title",{get(){return this.uiAttribs.title||this.name}});Object.defineProperty(this,"parent",{get(){this._log.stack("use port.op, not .parent");return this._op}});Object.defineProperty(this,"op",{get(){return this._op}});Object.defineProperty(this,"val",{get(){this._log.warn("val getter deprecated!",this);this._log.stack("val getter deprecated");return this.get()},set(e){this._log.warn("val setter deprecated!",this);this._log.stack("val setter deprecated");this.setValue(e)}})};C.prototype.copyLinkedUiAttrib=function(e,t){if(!CABLES.UI)return;if(!this.isLinked())return;const i={};i[e]=this.links[0].getOtherPort(this).getUiAttrib(e);t.setUiAttribs(i)};C.prototype.getValueForDisplay=function(){let e=this.value;if(typeof this.value==="string"||this.value instanceof String){if(e.length>1e3){e=e.substring(0,999);e+="..."}if(this.uiAttribs&&this.uiAttribs.display=="boolnum"){e+=" - ";if(!this.value)e+="false";else e+="true"}e=e.replace(/[\u00A0-\u9999<>\&]/g,function(e){return"&#"+e.charCodeAt(0)+";"});if(e.length>100)e=e.substring(0,100)}else{e=this.value}return e};C.prototype.onAnimToggle=function(){};C.prototype._onAnimToggle=function(){this.onAnimToggle()};C.prototype.remove=function(){this.removeLinks();this._op.removePort(this)};C.prototype.setUiAttribs=function(e){let t=false;if(!this.uiAttribs)this.uiAttribs={};for(const i in e){if(e[i]===undefined){delete this.uiAttribs[i];continue}if(this.uiAttribs[i]!=e[i])t=true;this.uiAttribs[i]=e[i];if(i=="group"&&this.indexPort)this.indexPort.setUiAttribs({group:e[i]})}if(e.hasOwnProperty("expose"))this._op.patch.emitEvent("subpatchExpose",this._op.uiAttribs.subPatch);if(t)this.emitEvent("onUiAttrChange",e,this)};C.prototype.getUiAttribs=function(){return this.uiAttribs};C.prototype.getUiAttrib=function(e){if(!this.uiAttribs||!this.uiAttribs.hasOwnProperty(e)){return null}return this.uiAttribs[e]};C.prototype.get=function(){if(this._animated&&this._lastAnimFrame!=this._op.patch.getFrameNum()){this._lastAnimFrame=this._op.patch.getFrameNum();this.value=this.anim.getValue(this._op.patch.timer.getTime());this._oldAnimVal=this.value;this.forceChange()}return this.value};C.prototype.setRef=function(e){this.forceRefChange=true;this.set(e)};C.prototype.set=C.prototype.setValue=function(e){if(e===undefined)e=null;if(this._op.enabled&&!this.crashed){if(e!==this.value||this.changeAlways||this.type==m.OP.OP_PORT_TYPE_TEXTURE||this.type==m.OP.OP_PORT_TYPE_ARRAY){if(this._animated){this.anim.setValue(this._op.patch.timer.getTime(),e)}else{try{this.value=e;this.forceChange()}catch(e){this.crashed=true;this.setValue=function(e){};this.onTriggered=function(){};this._log.error("exception in ",this._op);this._log.error(e);this._op.patch.emitEvent("exception",e,this._op)}if(this._op&&this._op.patch&&this._op.patch.isEditorMode()&&this.type==m.OP.OP_PORT_TYPE_TEXTURE)gui.texturePreview().updateTexturePort(this)}if(this.direction==m.PORT.PORT_DIR_OUT)for(let e=0;e<this.links.length;++e)this.links[e].setValue()}}};C.prototype.updateAnim=function(){if(this._animated){this.value=this.get();if(this._oldAnimVal!=this.value||this.changeAlways){this._oldAnimVal=this.value;this.forceChange()}this._oldAnimVal=this.value}};C.prototype.forceChange=function(){if(this.onValueChanged||this.onChange){}this._activity();this.emitEvent("change",this.value,this);if(this.onChange)this.onChange(this,this.value);else if(this.onValueChanged)this.onValueChanged(this,this.value)};C.prototype.getTypeString=function(){if(this.type==m.OP.OP_PORT_TYPE_VALUE)return"Number";if(this.type==m.OP.OP_PORT_TYPE_FUNCTION)return"Trigger";if(this.type==m.OP.OP_PORT_TYPE_OBJECT)return"Object";if(this.type==m.OP.OP_PORT_TYPE_DYNAMIC)return"Dynamic";if(this.type==m.OP.OP_PORT_TYPE_ARRAY)return"Array";if(this.type==m.OP.OP_PORT_TYPE_STRING)return"String";return"Unknown"};C.prototype.deSerializeSettings=function(e){if(!e)return;if(e.animated)this.setAnimated(e.animated);if(e.useVariable)this.setVariableName(e.useVariable);if(e.title)this.setUiAttribs({title:e.title});if(e.expose)this.setUiAttribs({expose:true});if(e.order)this.setUiAttribs({order:e.order});if(e.multiPortManual)this.setUiAttribs({multiPortManual:e.multiPortManual});if(e.multiPortNum)this.setUiAttribs({multiPortNum:e.multiPortNum});if(e.anim){if(!this.anim)this.anim=new R({name:"port "+this.name});this._op._hasAnimPort=true;this.anim.addEventListener("onChange",()=>{this._op.patch.emitEvent("portAnimUpdated",this._op,this,this.anim)});if(e.anim.loop)this.anim.loop=e.anim.loop;for(const t in e.anim.keys){this.anim.keys.push(new S.Key(e.anim.keys[t]))}this.anim.sortKeys()}};C.prototype.setInitialValue=function(e){if(this.op.preservedPortLinks[this.name]){for(let e=0;e<this.op.preservedPortLinks[this.name].length;e++){const t=this.op.preservedPortLinks[this.name][e];this.op.patch._addLink(t.objIn,t.objOut,t.portIn,t.portOut)}}if(this.op.preservedPortValues&&this.op.preservedPortValues.hasOwnProperty(this.name)&&this.op.preservedPortValues[this.name]!==undefined){this.set(this.op.preservedPortValues[this.name])}else if(e!==undefined)this.set(e);if(e!==undefined)this.defaultValue=e};C.prototype.getSerialized=function(){let e={name:this.getName()};if(!this.ignoreValueSerialize&&this.links.length===0){if(this.type==m.OP.OP_PORT_TYPE_OBJECT&&this.value&&this.value.tex){}else e.value=this.value}if(this._useVariableName)e.useVariable=this._useVariableName;if(this._animated)e.animated=true;if(this.anim)e.anim=this.anim.getSerialized();if(this.uiAttribs.multiPortNum)e.multiPortNum=this.uiAttribs.multiPortNum;if(this.uiAttribs.multiPortManual)e.multiPortManual=this.uiAttribs.multiPortManual;if(this.uiAttribs.display=="file")e.display=this.uiAttribs.display;if(this.uiAttribs.expose){e.expose=true;if(this.uiAttribs.hasOwnProperty("order"))e.order=this.uiAttribs.order}if(this.uiAttribs.title)e.title=this.uiAttribs.title;if((this.preserveLinks||this.direction==m.PORT.PORT_DIR_OUT)&&this.links.length>0){e.links=[];for(const t in this.links){if(!this.links[t].ignoreInSerialize&&(this.links[t].portIn&&this.links[t].portOut))e.links.push(this.links[t].getSerialized())}}if(this.direction==m.PORT.PORT_DIR_IN&&this.links.length>0){for(const t in this.links){if(!this.links[t].portIn||!this.links[t].portOut)continue;const i=this.links[t].getOtherPort(this);if(i.op.isInBlueprint2&&this.op.isInBlueprint2){if(i.op.isInBlueprint2()&&!this.op.isInBlueprint2()){e.links=e.links||[];e.links.push(this.links[t].getSerialized())}}}}if(e.links&&e.links.length==0)delete e.links;if(this.type===m.OP.OP_PORT_TYPE_FUNCTION)delete e.value;if(this.type===m.OP.OP_PORT_TYPE_FUNCTION&&this.links.length==0)e=null;if(e&&Object.keys(e).length==1&&e.name)e=null;s(e);return e};C.prototype.shouldLink=function(){return true};C.prototype.removeLinks=function(){let e=0;while(this.links.length>0){e++;if(e>5e3){this._log.warn("could not delete links... / infinite loop");this.links.length=0;break}this.links[0].remove()}};C.prototype.removeLink=function(e){for(const t in this.links)if(this.links[t]==e)this.links.splice(t,1);if(this.direction==m.PORT.PORT_DIR_IN){if(this.type==m.OP.OP_PORT_TYPE_VALUE)this.setValue(this._valueBeforeLink||0);else this.setValue(this._valueBeforeLink||null)}if(CABLES.UI&&this._op.checkLinkTimeWarnings)this._op.checkLinkTimeWarnings();if(this.onLinkChanged)this.onLinkChanged();this.emitEvent("onLinkChanged");this.emitEvent("onLinkRemoved");this._op.emitEvent("onLinkChanged")};C.prototype.getName=function(){return this.name};C.prototype.getTitle=function(){if(this.uiAttribs.title)return this.uiAttribs.title;return this.name};C.prototype.addLink=function(e){this._valueBeforeLink=this.value;this.links.push(e);if(CABLES.UI&&this._op.checkLinkTimeWarnings)this._op.checkLinkTimeWarnings();if(this.onLinkChanged)this.onLinkChanged();this.emitEvent("onLinkChanged");this._op.emitEvent("onLinkChanged")};C.prototype.getLinkTo=function(e){for(const t in this.links)if(this.links[t].portIn==e||this.links[t].portOut==e)return this.links[t]};C.prototype.removeLinkTo=function(e){for(const t in this.links){if(this.links[t].portIn==e||this.links[t].portOut==e){this.links[t].remove();if(CABLES.UI&&this._op.checkLinkTimeWarnings)this._op.checkLinkTimeWarnings();if(this.onLinkChanged)this.onLinkChanged();this.emitEvent("onLinkChanged");this.emitEvent("onLinkRemoved");return}}};C.prototype.isLinkedTo=function(e){for(const t in this.links)if(this.links[t].portIn==e||this.links[t].portOut==e)return true;return false};C.prototype._activity=function(){this.activityCounter++};C.prototype.trigger=function(){const t=this.links.length;this._activity();if(t===0)return;if(!this._op.enabled)return;let i=null;try{for(let e=0;e<t;++e){if(this.links[e].portIn){i=this.links[e].portIn;i.op.patch.pushTriggerStack(i);i._onTriggered();i.op.patch.popTriggerStack()}if(this.links[e])this.links[e].activity()}}catch(e){i.op.enabled=false;if(this._op.patch.isEditorMode()){if(i.op.onError)i.op.onError(e)}this._log.error("exception in port: "+i.op.name,i.op);this._log.error(e)}};C.prototype.call=function(){this._log.warn("call deprecated - use trigger() ");this.trigger()};C.prototype.execute=function(){this._log.warn("### execute port: "+this.getName(),this.goals.length)};C.prototype.setVariableName=function(e){this._useVariableName=e;this._op.patch.on("variableRename",(e,t)=>{if(e!=this._useVariableName)return;this._useVariableName=t})};C.prototype.getVariableName=function(){return this._useVariableName};C.prototype.setVariable=function(e){this.setAnimated(false);const t={useVariable:false};if(this._variableIn&&this._varChangeListenerId){this._variableIn.off(this._varChangeListenerId);this._variableIn=null}if(e){this._variableIn=this._op.patch.getVar(e);if(!this._variableIn){this._log.warn("PORT VAR NOT FOUND!!!",e)}else{if(this.type==m.OP.OP_PORT_TYPE_OBJECT){this._varChangeListenerId=this._variableIn.on("change",()=>{this.set(null);this.set(this._variableIn.getValue())})}else{this._varChangeListenerId=this._variableIn.on("change",this.set.bind(this))}this.set(this._variableIn.getValue())}this._useVariableName=e;t.useVariable=true;t.variableName=this._useVariableName}else{t.variableName=this._useVariableName=null;t.useVariable=false}this.setUiAttribs(t);this._op.patch.emitEvent("portSetVariable",this._op,this,e)};C.prototype._handleNoTriggerOpAnimUpdates=function(e){let t=false;for(let e=0;e<this._op.portsIn.length;e++){if(this._op.portsIn.type==m.OP.OP_PORT_TYPE_FUNCTION){t=true;break}}if(!t){if(e)this._notriggerAnimUpdate=this._op.patch.on("onRenderFrame",()=>{this.updateAnim()});else this._op.patch.removeEventListener(this._notriggerAnimUpdate)}};C.prototype.setAnimated=function(e){if(this._animated!=e){this._animated=e;this._op._hasAnimPort=true;if(this._animated&&!this.anim){this.anim=new R({name:"port "+this.name});this.anim.addEventListener("onChange",()=>{this._op.patch.emitEvent("portAnimUpdated",this._op,this,this.anim)})}this._onAnimToggle()}this._handleNoTriggerOpAnimUpdates(e);if(!e){this.anim=null}this.setUiAttribs({isAnimated:this._animated})};C.prototype.toggleAnim=function(){this._animated=!this._animated;if(this._animated&&!this.anim){this.anim=new R({name:"port "+this.name});this.anim.addEventListener("onChange",()=>{this._op.patch.emitEvent("portAnimUpdated",this._op,this,this.anim)})}this.setAnimated(this._animated);this._onAnimToggle();this.setUiAttribs({isAnimated:this._animated})};C.prototype.getType=function(){return this.type};C.prototype.isLinked=function(){return this.links.length>0||this._animated||this._useVariableName!=null};C.prototype.isBoundToVar=function(){const e=this._useVariableName!=null;this.uiAttribs.boundToVar=e;return e};C.prototype.isAnimated=function(){return this._animated};C.prototype.isHidden=function(){return this.uiAttribs.hidePort};C.prototype._onTriggered=function(e){this._activity();this._op.updateAnims();if(this._op.enabled&&this.onTriggered)this.onTriggered(e);if(this._op.enabled)this.emitEvent("trigger")};C.prototype._onSetProfiling=function(e){this._op.patch.profiler.add("port",this);this.setValue(e);this._op.patch.profiler.add("port",null)};C.prototype._onTriggeredProfiling=function(){if(this._op.enabled&&this.onTriggered){this._op.patch.profiler.add("port",this);this.onTriggered();this._op.patch.profiler.add("port",null)}};C.prototype.getUiActiveState=function(){return this._uiActiveState};C.prototype.setUiActiveState=function(e){this._uiActiveState=e;if(this.onUiActiveStateChange)this.onUiActiveStateChange()};C.prototype.onValueChange=function(e){this.onChange=e};C.prototype.hidePort=function(){};C.portTypeNumberToString=function(e){if(e==m.OP.OP_PORT_TYPE_VALUE)return"value";if(e==m.OP.OP_PORT_TYPE_FUNCTION)return"function";if(e==m.OP.OP_PORT_TYPE_OBJECT)return"object";if(e==m.OP.OP_PORT_TYPE_ARRAY)return"array";if(e==m.OP.OP_PORT_TYPE_STRING)return"string";if(e==m.OP.OP_PORT_TYPE_DYNAMIC)return"dynamic";return"unknown"};class L{constructor(e,t,i,n,r,s,a,o,l,h){this._log=new f("cg_uniform");this._type=t;this._name=i;this._shader=e;this._value=1e-5;this._oldValue=null;this._port=null;this._structName=l;this._structUniformName=o;this._propertyName=h;this._shader._addUniform(this);this.needsUpdate=true;this.shaderType=null;this.comment=null;if(t=="f"){this.set=this.setValue=this.setValueF.bind(this);this.updateValue=this.updateValueF.bind(this)}else if(t=="f[]"){this.set=this.setValue=this.setValueArrayF.bind(this);this.updateValue=this.updateValueArrayF.bind(this)}else if(t=="2f[]"){this.set=this.setValue=this.setValueArray2F.bind(this);this.updateValue=this.updateValueArray2F.bind(this)}else if(t=="3f[]"){this.set=this.setValue=this.setValueArray3F.bind(this);this.updateValue=this.updateValueArray3F.bind(this)}else if(t=="4f[]"){this.set=this.setValue=this.setValueArray4F.bind(this);this.updateValue=this.updateValueArray4F.bind(this)}else if(t=="i"){this.set=this.setValue=this.setValueI.bind(this);this.updateValue=this.updateValueI.bind(this)}else if(t=="2i"){this.set=this.setValue=this.setValue2I.bind(this);this.updateValue=this.updateValue2I.bind(this)}else if(t=="3i"){this.set=this.setValue=this.setValue3I.bind(this);this.updateValue=this.updateValue3I.bind(this)}else if(t=="4i"){this.set=this.setValue=this.setValue4I.bind(this);this.updateValue=this.updateValue4I.bind(this)}else if(t=="b"){this.set=this.setValue=this.setValueBool.bind(this);this.updateValue=this.updateValueBool.bind(this)}else if(t=="4f"){this.set=this.setValue=this.setValue4F.bind(this);this.updateValue=this.updateValue4F.bind(this)}else if(t=="3f"){this.set=this.setValue=this.setValue3F.bind(this);this.updateValue=this.updateValue3F.bind(this)}else if(t=="2f"){this.set=this.setValue=this.setValue2F.bind(this);this.updateValue=this.updateValue2F.bind(this)}else if(t=="t"){this.set=this.setValue=this.setValueT.bind(this);this.updateValue=this.updateValueT.bind(this)}else if(t=="tc"){this.set=this.setValue=this.setValueT.bind(this);this.updateValue=this.updateValueT.bind(this)}else if(t=="t[]"){this.set=this.setValue=this.setValueArrayT.bind(this);this.updateValue=this.updateValueArrayT.bind(this)}else if(t=="m4"||t=="m4[]"){this.set=this.setValue=this.setValueM4.bind(this);this.updateValue=this.updateValueM4.bind(this)}else throw new Error("Unknown uniform type");if(typeof n=="object"&&n instanceof C){this._port=n;this._value=this._port.get();if(r&&s&&a){if(!(r instanceof C)||!(s instanceof C)||!(a instanceof C)){this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ",this._name)}this._value=[0,0,0,0];this._port2=r;this._port3=s;this._port4=a;this._port.on("change",this.updateFromPort4f.bind(this));this._port2.on("change",this.updateFromPort4f.bind(this));this._port3.on("change",this.updateFromPort4f.bind(this));this._port4.on("change",this.updateFromPort4f.bind(this));this.updateFromPort4f()}else if(r&&s){if(!(r instanceof C)||!(s instanceof C)){this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ",this._name)}this._value=[0,0,0];this._port2=r;this._port3=s;this._port.on("change",this.updateFromPort3f.bind(this));this._port2.on("change",this.updateFromPort3f.bind(this));this._port3.on("change",this.updateFromPort3f.bind(this));this.updateFromPort3f()}else if(r){if(!(r instanceof C)){this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ",this._name)}this._value=[0,0];this._port2=r;this._port.on("change",this.updateFromPort2f.bind(this));this._port2.on("change",this.updateFromPort2f.bind(this));this.updateFromPort2f()}else{this._port.on("change",this.updateFromPort.bind(this))}}else this._value=n;this.setValue(this._value);this.needsUpdate=true}getType(){return this._type}getName(){return this._name}getValue(){return this._value}getShaderType(){return this.shaderType}isStructMember(){return!!this._structName}updateFromPort4f(){this._value[0]=this._port.get();this._value[1]=this._port2.get();this._value[2]=this._port3.get();this._value[3]=this._port4.get();this.setValue(this._value)}updateFromPort3f(){this._value[0]=this._port.get();this._value[1]=this._port2.get();this._value[2]=this._port3.get();this.setValue(this._value)}updateFromPort2f(){this._value[0]=this._port.get();this._value[1]=this._port2.get();this.setValue(this._value)}updateFromPort(){this.setValue(this._port.get())}}const O=L;class P extends O{constructor(e,t,i,n,r,s,a,o,l,h){super(e,t,i,n,r,s,a,o,l,h);this._loc=-1;this._cgl=e._cgl}get name(){return this._name}copy(e){const t=new P(e,this._type,this._name,this._value,this._port2,this._port3,this._port4,this._structUniformName,this._structName,this._propertyName);t.shaderType=this.shaderType;return t}getGlslTypeString(){return P.glslTypeString(this._type)}_isValidLoc(){return this._loc!=-1}resetLoc(){this._loc=-1;this.needsUpdate=true}bindTextures(){}getLoc(){return this._loc}updateFromPort4f(){this._value[0]=this._port.get();this._value[1]=this._port2.get();this._value[2]=this._port3.get();this._value[3]=this._port4.get();this.setValue(this._value)}updateFromPort3f(){this._value[0]=this._port.get();this._value[1]=this._port2.get();this._value[2]=this._port3.get();this.setValue(this._value)}updateFromPort2f(){this._value[0]=this._port.get();this._value[1]=this._port2.get();this.setValue(this._value)}updateFromPort(){this.setValue(this._port.get())}updateValueF(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;this._shader.getCgl().gl.uniform1f(this._loc,this._value);this._cgl.profileData.profileUniformCount++}setValueF(e){if(e!=this._value){this.needsUpdate=true;this._value=e}}updateValueI(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;this._shader.getCgl().gl.uniform1i(this._loc,this._value);this._cgl.profileData.profileUniformCount++}updateValue2I(){if(!this._value)return;if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}this._shader.getCgl().gl.uniform2i(this._loc,this._value[0],this._value[1]);this.needsUpdate=false;this._cgl.profileData.profileUniformCount++}updateValue3I(){if(!this._value)return;if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}this._shader.getCgl().gl.uniform3i(this._loc,this._value[0],this._value[1],this._value[2]);this.needsUpdate=false;this._cgl.profileData.profileUniformCount++}updateValue4I(){if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}this._shader.getCgl().gl.uniform4i(this._loc,this._value[0],this._value[1],this._value[2],this._value[3]);this._cgl.profileData.profileUniformCount++}setValueI(e){if(e!=this._value){this.needsUpdate=true;this._value=e}}setValue2I(e){if(!e)return;if(!this._oldValue){this._oldValue=[e[0]-1,1];this.needsUpdate=true}else if(e[0]!=this._oldValue[0]||e[1]!=this._oldValue[1]){this._oldValue[0]=e[0];this._oldValue[1]=e[1];this.needsUpdate=true}this._value=e}setValue3I(e){if(!e)return;if(!this._oldValue){this._oldValue=[e[0]-1,1,2];this.needsUpdate=true}else if(e[0]!=this._oldValue[0]||e[1]!=this._oldValue[1]||e[2]!=this._oldValue[2]){this._oldValue[0]=e[0];this._oldValue[1]=e[1];this._oldValue[2]=e[2];this.needsUpdate=true}this._value=e}setValue4I(e){this.needsUpdate=true;this._value=e||vec4.create()}updateValueBool(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;this._shader.getCgl().gl.uniform1i(this._loc,this._value?1:0);this._cgl.profileData.profileUniformCount++}setValueBool(e){if(e!=this._value){this.needsUpdate=true;this._value=e}}setValueArray4F(e){this.needsUpdate=true;this._value=e}updateValueArray4F(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;if(!this._value)return;this._shader.getCgl().gl.uniform4fv(this._loc,this._value);this._cgl.profileData.profileUniformCount++}setValueArray3F(e){this.needsUpdate=true;this._value=e}updateValueArray3F(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;if(!this._value)return;this._shader.getCgl().gl.uniform3fv(this._loc,this._value);this._cgl.profileData.profileUniformCount++}setValueArray2F(e){this.needsUpdate=true;this._value=e}updateValueArray2F(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;if(!this._value)return;this._shader.getCgl().gl.uniform2fv(this._loc,this._value);this._cgl.profileData.profileUniformCount++}setValueArrayF(e){this.needsUpdate=true;this._value=e}updateValueArrayF(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;if(!this._value)return;this._shader.getCgl().gl.uniform1fv(this._loc,this._value);this._cgl.profileData.profileUniformCount++}setValueArrayT(e){this.needsUpdate=true;this._value=e}updateValue3F(){if(!this._value)return;if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}this._shader.getCgl().gl.uniform3f(this._loc,this._value[0],this._value[1],this._value[2]);this.needsUpdate=false;this._cgl.profileData.profileUniformCount++}setValue3F(e){if(!e)return;if(!this._oldValue){this._oldValue=[e[0]-1,1,2];this.needsUpdate=true}else if(e[0]!=this._oldValue[0]||e[1]!=this._oldValue[1]||e[2]!=this._oldValue[2]){this._oldValue[0]=e[0];this._oldValue[1]=e[1];this._oldValue[2]=e[2];this.needsUpdate=true}this._value=e}updateValue2F(){if(!this._value)return;if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}this._shader.getCgl().gl.uniform2f(this._loc,this._value[0],this._value[1]);this.needsUpdate=false;this._cgl.profileData.profileUniformCount++}setValue2F(e){if(!e)return;if(!this._oldValue){this._oldValue=[e[0]-1,1];this.needsUpdate=true}else if(e[0]!=this._oldValue[0]||e[1]!=this._oldValue[1]){this._oldValue[0]=e[0];this._oldValue[1]=e[1];this.needsUpdate=true}this._value=e}updateValue4F(){if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}if(!this._value){this._log.warn("no value for uniform",this._name,this);this._value=[0,0,0,0]}this.needsUpdate=false;this._shader.getCgl().gl.uniform4f(this._loc,this._value[0],this._value[1],this._value[2],this._value[3]);this._cgl.profileData.profileUniformCount++}setValue4F(e){if(typeof this.value=="number")this.value=vec4.create();if(!e)return;if(!this._oldValue){this._oldValue=[e[0]-1,1,2,3];this.needsUpdate=true}else if(e[0]!=this._oldValue[0]||e[1]!=this._oldValue[1]||e[2]!=this._oldValue[2]||e[3]!=this._oldValue[3]){this._oldValue[0]=e[0];this._oldValue[1]=e[1];this._oldValue[2]=e[2];this.needsUpdate=true}this._value=e}updateValueM4(){if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}if(!this._value||this._value.length%16!=0)return console.log("this.name",this._name,this._value);this._shader.getCgl().gl.uniformMatrix4fv(this._loc,false,this._value);this._cgl.profileData.profileUniformCount++}setValueM4(e){this.needsUpdate=true;this._value=e||mat4.create()}updateValueArrayT(){if(!this._isValidLoc())this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);else this.needsUpdate=false;if(!this._value)return;this._shader.getCgl().gl.uniform1iv(this._loc,this._value);this._cgl.profileData.profileUniformCount++}updateValueT(){if(!this._isValidLoc()){this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name);this._cgl.profileData.profileShaderGetUniform++;this._cgl.profileData.profileShaderGetUniformName=this._name}this._cgl.profileData.profileUniformCount++;this._shader.getCgl().gl.uniform1i(this._loc,this._value);this.needsUpdate=false}setValueT(e){this.needsUpdate=true;this._value=e}}P.glslTypeString=e=>{if(e=="f")return"float";if(e=="b")return"bool";if(e=="i")return"int";if(e=="2i")return"ivec2";if(e=="2f")return"vec2";if(e=="3f")return"vec3";if(e=="4f")return"vec4";if(e=="m4")return"mat4";if(e=="t")return"sampler2D";if(e=="tc")return"samplerCube";if(e=="3f[]")return null;if(e=="m4[]")return null;if(e=="f[]")return null;console.warn("[CGL UNIFORM] unknown glsl type string ",e)};const y={SHADERVAR_VERTEX_POSITION:"vPosition",SHADERVAR_VERTEX_NUMBER:"attrVertIndex",SHADERVAR_VERTEX_NORMAL:"attrVertNormal",SHADERVAR_VERTEX_TEXCOORD:"attrTexCoord",SHADERVAR_INSTANCE_MMATRIX:"instMat",SHADERVAR_VERTEX_COLOR:"attrVertColor",SHADERVAR_INSTANCE_INDEX:"instanceIndex",SHADERVAR_UNI_PROJMAT:"projMatrix",SHADERVAR_UNI_VIEWMAT:"viewMatrix",SHADERVAR_UNI_MODELMAT:"modelMatrix",SHADERVAR_UNI_NORMALMAT:"normalMatrix",SHADERVAR_UNI_INVVIEWMAT:"inverseViewMatrix",SHADERVAR_UNI_INVPROJMAT:"invProjMatrix",SHADERVAR_UNI_MATERIALID:"materialId",SHADERVAR_UNI_OBJECTID:"objectId",SHADERVAR_UNI_VIEWPOS:"camPos"};const ie={BLEND_NONE:0,BLEND_NORMAL:1,BLEND_ADD:2,BLEND_SUB:3,BLEND_MUL:4};const ne=180/Math.PI;const re=Math.PI/180;const N={MATH:{DEG2RAD:re,RAD2DEG:ne},SHADER:y,BLEND_MODES:ie};function se(e){e.prototype.hasFeedbacks=function(){return this._feedBacks.length>0};e.prototype.removeFeedbacks=function(e){if(!this._feedbacks)return;this._feedbacks.length=0;this._feedBacksChanged=true};e.prototype.setAttributeFeedback=function(){};e.prototype.setFeedback=function(e,t,i){let n={nameOut:t};let r=false;this.unBindFeedbacks();for(let e=0;e<this._feedBacks.length;e++){if(this._feedBacks[e].nameOut==t){n=this._feedBacks[e];r=true}}if(!r)this._feedBacksChanged=true;n.initialArr=i;n.attrib=e;if(n.outBuffer)this._cgl.gl.deleteBuffer(n.outBuffer);n.outBuffer=this._cgl.gl.createBuffer();this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER,n.outBuffer);this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER,n.initialArr,this._cgl.gl.STATIC_DRAW);this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER,n.attrib.buffer);this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER,n.initialArr,this._cgl.gl.STATIC_DRAW);if(!r)this._feedBacks.push(n);return n};e.prototype.bindFeedback=function(t){if(!this._feedBacks||this._feedBacks.length===0)return;if(this._transformFeedBackLoc==-1)this._transformFeedBackLoc=this._cgl.gl.createTransformFeedback();this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK,this._transformFeedBackLoc);let i=false;for(let e=0;e<this._feedBacks.length;e++){const n=this._feedBacks[e];if(n.attrib==t){i=true;this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER,e,n.outBuffer)}}if(!i){}};e.prototype.drawFeedbacks=function(e,t){let i=0;if(this._feedBacksChanged){const n=[];this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK,this._transformFeedBackLoc);for(i=0;i<this._feedBacks.length;i++)n.push(this._feedBacks[i].nameOut);e.setFeedbackNames(n);console.log("feedbacknames",n);e.compile();this._feedBacksChanged=false;this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK,null);console.log("changed finished");return}this._cgl.gl.beginTransformFeedback(this.glPrimitive);this._cgl.gl.drawArrays(t,0,this._feedBacks[0].attrib.numItems);this._cgl.gl.endTransformFeedback();this.unBindFeedbacks();this.feedBacksSwapBuffers()};e.prototype.unBindFeedbacks=function(){for(let e=0;e<this._feedBacks.length;e++){this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER,e,null)}this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK,null)};e.prototype.feedBacksSwapBuffers=function(){for(let e=0;e<this._feedBacks.length;e++){const t=this._feedBacks[e].attrib.buffer;this._feedBacks[e].attrib.buffer=this._feedBacks[e].outBuffer;this._feedBacks[e].outBuffer=t}}}const M={};M.lastMesh=null;const F=function(e,t,i){this._cgl=e;let n=i||{};if(CABLES.UTILS.isNumeric(n))n={glPrimitive:i};this._log=new f("cgl_mesh");this._bufVertexAttrib=null;this._bufVerticesIndizes=this._cgl.gl.createBuffer();this._indexType=this._cgl.gl.UNSIGNED_SHORT;this._attributes=[];this._attribLocs={};this._geom=null;this._lastShader=null;this._numInstances=0;this._glPrimitive=n.glPrimitive;this.opId=n.opId||"";this._preWireframeGeom=null;this.addVertexNumbers=false;this._name="unknown";this.feedBackAttributes=[];this.setGeom(t);this._feedBacks=[];this._feedBacksChanged=false;this._transformFeedBackLoc=-1;this._lastAttrUpdate=0;this.memFreed=false;this._cgl.profileData.addHeavyEvent("mesh constructed",this._name);this._queryExt=null;Object.defineProperty(this,"numInstances",{get(){return this._numInstances},set(e){this.setNumInstances(e)}})};F.prototype.freeMem=function(){this.memFreed=true;for(let e=0;e<this._attributes.length;e++){this._attributes[e].floatArray=null}};F.prototype.updateVertices=function(e){this.setAttribute(N.SHADER.SHADERVAR_VERTEX_POSITION,e.vertices,3);this._numVerts=e.vertices.length/3};F.prototype.setAttributePointer=function(t,i,n,r){for(let e=0;e<this._attributes.length;e++){if(this._attributes[e].name==t){if(!this._attributes[e].pointer)this._attributes[e].pointer=[];this._attributes[e].pointer.push({loc:-1,name:i,stride:n,offset:r,instanced:t==N.SHADER.SHADERVAR_INSTANCE_MMATRIX})}}};F.prototype.getAttribute=function(t){for(let e=0;e<this._attributes.length;e++)if(this._attributes[e].name==t)return this._attributes[e]};F.prototype.setAttributeRange=function(e,t,i,n){if(!e)return;if(!i&&!n)return;if(!e.name){this._log.stack("no attrname?!")}this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER,e.buffer);this._cgl.profileData.profileMeshAttributes+=n-i||0;this._cgl.profileData.profileSingleMeshAttribute[this._name]=this._cgl.profileData.profileSingleMeshAttribute[this._name]||0;this._cgl.profileData.profileSingleMeshAttribute[this._name]+=n-i||0;if(e.numItems<t.length/e.itemSize){this._resizeAttr(t,e)}if(n>t.length){if(CABLES.platform.isDevEnv())this._log.log(this._cgl.canvas.id+" "+e.name+" buffersubdata out of bounds ?",t.length,n,i,e);return}if(this._cgl.glVersion==1)this._cgl.gl.bufferSubData(this._cgl.gl.ARRAY_BUFFER,0,t);else this._cgl.gl.bufferSubData(this._cgl.gl.ARRAY_BUFFER,i*4,t,i,n-i)};F.prototype._resizeAttr=function(e,t){if(t.buffer)this._cgl.gl.deleteBuffer(t.buffer);t.buffer=this._cgl.gl.createBuffer();this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER,t.buffer);this._bufferArray(e,t);t.numItems=e.length/t.itemSize};F.prototype._bufferArray=function(e,t){let i=t.floatArray||null;if(!e)return;if(this._cgl.debugOneFrame){console.log("_bufferArray",e.length,t.name)}if(!(e instanceof Float32Array)){if(t&&i&&i.length==e.length){i.set(e)}else{i=new Float32Array(e);if(this._cgl.debugOneFrame){console.log("_bufferArray create new float32array",e.length,t.name)}if(e.length>1e4){this._cgl.profileData.profileNonTypedAttrib++;this._cgl.profileData.profileNonTypedAttribNames="("+this._name+":"+t.name+")"}}}else i=e;t.arrayLength=i.length;t.floatArray=null;this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER,i,this._cgl.gl.DYNAMIC_DRAW)};F.prototype.addAttribute=F.prototype.updateAttribute=F.prototype.setAttribute=function(e,t,i,n){if(!t){this._log.error("mesh addAttribute - no array given! "+e);throw new Error}let r=null;let s=false;let a=0;const o=t.length/i;this._cgl.profileData.profileMeshAttributes+=o||0;if(typeof n=="function"){r=n}if(typeof n=="object"){if(n.cb)r=n.cb;if(n.instanced)s=n.instanced}if(e==N.SHADER.SHADERVAR_INSTANCE_MMATRIX)s=true;for(a=0;a<this._attributes.length;a++){const f=this._attributes[a];if(f.name==e){if(f.numItems===o){}else{this._resizeAttr(t,f)}this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER,f.buffer);this._bufferArray(t,f);return f}}const l=this._cgl.gl.createBuffer();this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER,l);let h=this._cgl.gl.FLOAT;if(n&&n.type)h=n.type;const f={buffer:l,name:e,cb:r,itemSize:i,numItems:o,startItem:0,instanced:s,type:h};this._bufferArray(t,f);if(e==N.SHADER.SHADERVAR_VERTEX_POSITION)this._bufVertexAttrib=f;this._attributes.push(f);this._attribLocs={};return f};F.prototype.getAttributes=function(){return this._attributes};F.prototype.updateTexCoords=function(e){if(e.texCoords&&e.texCoords.length>0){this.setAttribute(N.SHADER.SHADERVAR_VERTEX_TEXCOORD,e.texCoords,2)}else{const t=new Float32Array(Math.round(e.vertices.length/3*2));this.setAttribute(N.SHADER.SHADERVAR_VERTEX_TEXCOORD,t,2)}};F.prototype.updateNormals=function(e){if(e.vertexNormals&&e.vertexNormals.length>0){this.setAttribute(N.SHADER.SHADERVAR_VERTEX_NORMAL,e.vertexNormals,3)}else{const t=new Float32Array(Math.round(e.vertices.length));this.setAttribute(N.SHADER.SHADERVAR_VERTEX_NORMAL,t,3)}};F.prototype._setVertexNumbers=function(e){if(!this._verticesNumbers||this._verticesNumbers.length!=this._numVerts||e){if(e)this._verticesNumbers=e;else{this._verticesNumbers=new Float32Array(this._numVerts);for(let e=0;e<this._numVerts;e++)this._verticesNumbers[e]=e}this.setAttribute(N.SHADER.SHADERVAR_VERTEX_NUMBER,this._verticesNumbers,1,(e,t,i)=>{if(!i.uniformNumVertices)i.uniformNumVertices=new P(i,"f","numVertices",this._numVerts);i.uniformNumVertices.setValue(this._numVerts)})}};F.prototype.setVertexIndices=function(t){if(!this._bufVerticesIndizes){this._log.warn("no bufVerticesIndizes: "+this._name);return}if(t.length>0){if(t instanceof Float32Array)this._log.warn("vertIndices float32Array: "+this._name);for(let e=0;e<t.length;e++){if(t[e]>=this._numVerts){this._log.warn("invalid index in "+this._name,e,t[e]);return}}this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER,this._bufVerticesIndizes);if(t.length>65535){this.vertIndicesTyped=new Uint32Array(t);this._indexType=this._cgl.gl.UNSIGNED_INT}else if(t instanceof Uint32Array){this.vertIndicesTyped=t;this._indexType=this._cgl.gl.UNSIGNED_INT}else if(!(t instanceof Uint16Array)){this.vertIndicesTyped=new Uint16Array(t);this._indexType=this._cgl.gl.UNSIGNED_SHORT}else this.vertIndicesTyped=t;this._cgl.gl.bufferData(this._cgl.gl.ELEMENT_ARRAY_BUFFER,this.vertIndicesTyped,this._cgl.gl.DYNAMIC_DRAW);this._bufVerticesIndizes.itemSize=1;this._bufVerticesIndizes.numItems=t.length}else this._bufVerticesIndizes.numItems=0};F.prototype.setGeom=function(e,t){this._geom=e;if(e.glPrimitive!=null)this._glPrimitive=e.glPrimitive;if(this._geom&&this._geom.name)this._name="mesh "+this._geom.name;M.lastMesh=null;this._cgl.profileData.profileMeshSetGeom++;this._disposeAttributes();this.updateVertices(this._geom);this.setVertexIndices(this._geom.verticesIndices);if(this.addVertexNumbers)this._setVertexNumbers();const i=this._geom.getAttributes();const n={texCoords:N.SHADER.SHADERVAR_VERTEX_TEXCOORD,vertexNormals:N.SHADER.SHADERVAR_VERTEX_NORMAL,vertexColors:N.SHADER.SHADERVAR_VERTEX_COLOR,tangents:"attrTangent",biTangents:"attrBiTangent"};for(const r in i)if(i[r].data&&i[r].data.length)this.setAttribute(n[r]||r,i[r].data,i[r].itemSize);if(t){this._geom=null}};F.prototype._preBind=function(t){for(let e=0;e<this._attributes.length;e++)if(this._attributes[e].cb)this._attributes[e].cb(this._attributes[e],this._geom,t)};F.prototype._checkAttrLengths=function(){if(this.memFreed)return;for(let e=0;e<this._attributes.length;e++){if(this._attributes[e].arrayLength/this._attributes[e].itemSize<this._attributes[0].arrayLength/this._attributes[0].itemSize){let e="unknown";if(this._geom)e=this._geom.name}}};F.prototype._bind=function(t){if(!t.isValid())return;let i=[];if(this._attribLocs[t.id])i=this._attribLocs[t.id];else this._attribLocs[t.id]=i;this._lastShader=t;if(t.lastCompile>this._lastAttrUpdate||i.length!=this._attributes.length){this._lastAttrUpdate=t.lastCompile;for(let e=0;e<this._attributes.length;e++)i[e]=-1}for(let e=0;e<this._attributes.length;e++){const n=this._attributes[e];if(i[e]==-1){if(n._attrLocationLastShaderTime!=t.lastCompile){n._attrLocationLastShaderTime=t.lastCompile;i[e]=this._cgl.glGetAttribLocation(t.getProgram(),n.name);this._cgl.profileData.profileAttrLoc++}}if(i[e]!=-1){this._cgl.gl.enableVertexAttribArray(i[e]);this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER,n.buffer);if(n.instanced){if(n.itemSize<=4){if(!n.itemSize||n.itemSize==0)this._log.warn("instanced attrib itemsize error",this._geom.name,n);this._cgl.gl.vertexAttribPointer(i[e],n.itemSize,n.type,false,n.itemSize*4,0);this._cgl.gl.vertexAttribDivisor(i[e],1)}else if(n.itemSize==16){const r=16*4;this._cgl.gl.vertexAttribPointer(i[e],4,n.type,false,r,0);this._cgl.gl.enableVertexAttribArray(i[e]+1);this._cgl.gl.vertexAttribPointer(i[e]+1,4,n.type,false,r,4*4*1);this._cgl.gl.enableVertexAttribArray(i[e]+2);this._cgl.gl.vertexAttribPointer(i[e]+2,4,n.type,false,r,4*4*2);this._cgl.gl.enableVertexAttribArray(i[e]+3);this._cgl.gl.vertexAttribPointer(i[e]+3,4,n.type,false,r,4*4*3);this._cgl.gl.vertexAttribDivisor(i[e],1);this._cgl.gl.vertexAttribDivisor(i[e]+1,1);this._cgl.gl.vertexAttribDivisor(i[e]+2,1);this._cgl.gl.vertexAttribDivisor(i[e]+3,1)}else{this._log.warn("unknown instance attrib size",n.name)}}else{if(!n.itemSize||n.itemSize==0)this._log.warn("attrib itemsize error",this._name,n);this._cgl.gl.vertexAttribPointer(i[e],n.itemSize,n.type,false,n.itemSize*4,0);if(n.pointer){for(let e=0;e<n.pointer.length;e++){const s=n.pointer[e];if(s.loc==-1)s.loc=this._cgl.glGetAttribLocation(t.getProgram(),s.name);this._cgl.profileData.profileAttrLoc++;this._cgl.gl.enableVertexAttribArray(s.loc);this._cgl.gl.vertexAttribPointer(s.loc,n.itemSize,n.type,false,s.stride,s.offset)}}this.bindFeedback(n)}}}if(this._bufVerticesIndizes&&this._bufVerticesIndizes.numItems!==0)this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER,this._bufVerticesIndizes)};F.prototype.unBind=function(){const e=this._lastShader;this._lastShader=null;if(!e)return;let t=[];if(this._attribLocs[e.id])t=this._attribLocs[e.id];else this._attribLocs[e.id]=t;M.lastMesh=null;for(let e=0;e<this._attributes.length;e++){if(this._attributes[e].instanced){if(this._attributes[e].itemSize<=4){if(t[e]!=-1)this._cgl.gl.vertexAttribDivisor(t[e],0);if(t[e]>=0)this._cgl.gl.disableVertexAttribArray(t[e])}else{this._cgl.gl.vertexAttribDivisor(t[e],0);this._cgl.gl.vertexAttribDivisor(t[e]+1,0);this._cgl.gl.vertexAttribDivisor(t[e]+2,0);this._cgl.gl.vertexAttribDivisor(t[e]+3,0);this._cgl.gl.disableVertexAttribArray(t[e]+1);this._cgl.gl.disableVertexAttribArray(t[e]+2);this._cgl.gl.disableVertexAttribArray(t[e]+3)}}if(t[e]!=-1)this._cgl.gl.disableVertexAttribArray(t[e])}};F.prototype.meshChanged=function(){return this._cgl.lastMesh&&this._cgl.lastMesh!=this};F.prototype.printDebug=function(e){console.log("--attributes");for(let e=0;e<this._attributes.length;e++){console.log("attribute "+e+" "+this._attributes[e].name)}};F.prototype.setNumVertices=function(e){this._bufVertexAttrib.numItems=e};F.prototype.getNumVertices=function(){return this._bufVertexAttrib.numItems};F.prototype.render=function(i){if(!i||!i.isValid()||this._cgl.aborted)return;this._checkAttrLengths();if(this._geom){if(this._preWireframeGeom&&!i.wireframe&&!this._geom.isIndexed()){this.setGeom(this._preWireframeGeom);this._preWireframeGeom=null}if(i.wireframe){let e=false;if(this._geom.isIndexed()){if(!this._preWireframeGeom){this._preWireframeGeom=this._geom;this._geom=this._geom.copy()}this._geom.unIndex();e=true}if(!this._geom.getAttribute("attrBarycentric")){if(!this._preWireframeGeom){this._preWireframeGeom=this._geom;this._geom=this._geom.copy()}e=true;this._geom.calcBarycentric()}if(e)this.setGeom(this._geom)}}let e=false;if(M.lastMesh!=this){if(M.lastMesh)M.lastMesh.unBind();e=true}if(e)this._preBind(i);if(!i.bind())return;this._bind(i);if(this.addVertexNumbers)this._setVertexNumbers();M.lastMesh=this;let t=this._cgl.gl.TRIANGLES;if(this._glPrimitive!==undefined)t=this._glPrimitive;if(i.glPrimitive!==null)t=i.glPrimitive;let n=1;let r=this._cgl.profileData.doProfileGlQuery;let s=false;if(r){let e=this._name+" - "+i.getName()+" #"+i.id;if(this._numInstances)e+=" instanced "+this._numInstances+"x";let t=this._cgl.profileData.glQueryData[e];if(!t)t={id:e,num:0};if(i.opId)t.shaderOp=i.opId;if(this.opId)t.meshOp=this.opId;this._cgl.profileData.glQueryData[e]=t;if(!this._queryExt&&this._queryExt!==false)this._queryExt=this._cgl.enableExtension("EXT_disjoint_timer_query_webgl2")||false;if(this._queryExt){if(t._drawQuery){const a=this._cgl.gl.getQueryParameter(t._drawQuery,this._cgl.gl.QUERY_RESULT_AVAILABLE);if(a){const o=this._cgl.gl.getQueryParameter(t._drawQuery,this._cgl.gl.QUERY_RESULT);const l=o/1e6;t._times=t._times||0;t._times+=l;t._numcount++;t.when=performance.now();t._drawQuery=null;t.queryStarted=false}}if(!t.queryStarted){t._drawQuery=this._cgl.gl.createQuery();this._cgl.gl.beginQuery(this._queryExt.TIME_ELAPSED_EXT,t._drawQuery);s=t.queryStarted=true}}}if(this.hasFeedbacks()){this.drawFeedbacks(i,t)}else if(!this._bufVerticesIndizes||this._bufVerticesIndizes.numItems===0){if(t==this._cgl.gl.TRIANGLES)n=3;if(this._numInstances===0)this._cgl.gl.drawArrays(t,this._bufVertexAttrib.startItem,this._bufVertexAttrib.numItems-this._bufVertexAttrib.startItem);else this._cgl.gl.drawArraysInstanced(t,this._bufVertexAttrib.startItem,this._bufVertexAttrib.numItems,this._numInstances)}else{if(t==this._cgl.gl.TRIANGLES)n=3;if(this._numInstances===0){this._cgl.gl.drawElements(t,this._bufVerticesIndizes.numItems,this._indexType,0)}else{this._cgl.gl.drawElementsInstanced(t,this._bufVerticesIndizes.numItems,this._indexType,0,this._numInstances)}}if(this._cgl.debugOneFrame&&this._cgl.gl.getError()!=this._cgl.gl.NO_ERROR){this._log.error("mesh draw gl error");this._log.error("mesh",this);this._log.error("shader",i);const h=[];for(let e=0;e<this._cgl.gl.getProgramParameter(i.getProgram(),this._cgl.gl.ACTIVE_ATTRIBUTES);e++){const f=this._cgl.gl.getActiveAttrib(i.getProgram(),e).name;this._log.error("attrib ",f)}}this._cgl.profileData.profileMeshNumElements+=this._bufVertexAttrib.numItems/n*(this._numInstances||1);this._cgl.profileData.profileMeshDraw++;if(r&&s){this._cgl.gl.endQuery(this._queryExt.TIME_ELAPSED_EXT)}this._cgl.printError("mesh render "+this._name);this.unBind()};F.prototype.setNumInstances=function(t){t=Math.max(0,t);if(this._numInstances!=t){this._numInstances=t;const i=new Float32Array(t);for(let e=0;e<t;e++)i[e]=e;this.setAttribute(N.SHADER.SHADERVAR_INSTANCE_INDEX,i,1,{instanced:true})}};F.prototype._disposeAttributes=function(){if(!this._attributes)return;for(let e=0;e<this._attributes.length;e++){if(this._attributes[e].buffer){this._cgl.gl.deleteBuffer(this._attributes[e].buffer);this._attributes[e].buffer=null}}this._attributes.length=0};F.prototype.dispose=function(){if(this._bufVertexAttrib&&this._bufVertexAttrib.buffer)this._cgl.gl.deleteBuffer(this._bufVertexAttrib.buffer);if(this._bufVerticesIndizes)this._cgl.gl.deleteBuffer(this._bufVerticesIndizes);this._bufVerticesIndizes=null;this._disposeAttributes()};se(F);const U={};U.getSimpleRect=function(e,t){const i=new p(t);i.vertices=[1,1,0,-1,1,0,1,-1,0,-1,-1,0];i.texCoords=[1,1,0,1,1,0,0,0];i.verticesIndices=[0,1,2,2,1,3];i.vertexNormals=[0,0,0,0,0,0,0,0,0,0,0,0];return new F(e,i)};U.getSimpleCube=function(e,t){const i=new p(t);i.vertices=[-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,1,-1,-1,1,1,-1,-1,1,-1,-1,1,-1,1,1,-1,1,1,1,-1,1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,-1,1,1,1,1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1];i.setTexCoords([0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0]);i.verticesIndices=[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23];i.vertexNormals=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0]);i.tangents=new Float32Array([0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1]);i.biTangents=new Float32Array([-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1]);return new F(e,i)};class ae{constructor(e,t,i){this.cgl=e;this._options=i;this.fb=null;let n=i.shader;this._useDefaultShader=true;if(i.shader)this._useDefaultShader=false;i.numRenderBuffers=i.numRenderBuffers||1;if(!n){n="".endl()+"IN vec2 texCoord;";for(let e=0;e<i.numRenderBuffers;e++){n=n.endl()+"UNI sampler2D tex"+e+";".endl()}n=n.endl()+"void main()".endl()+"{";if(i.numRenderBuffers==1){n=n.endl()+"    outColor= texture(tex0,texCoord);".endl()}else for(let e=0;e<i.numRenderBuffers;e++){n=n.endl()+"outColor"+e+" = texture(tex"+e+",texCoord);".endl()}n=n.endl()+"}"}const r=i.vertexShader||"".endl()+"IN vec3 vPosition;".endl()+"IN vec2 attrTexCoord;".endl()+"OUT vec2 texCoord;".endl()+"void main()".endl()+"{".endl()+"   texCoord=attrTexCoord;".endl()+"   gl_Position = vec4(vPosition,  1.0);".endl()+"}";this.bgShader=new CGL.Shader(e,"corelib copytexture "+t);this.bgShader.setSource(r,n);if(!i.vertexShader)this.bgShader.ignoreMissingUniforms=true;new CGL.Uniform(this.bgShader,"t","tex",0);new CGL.Uniform(this.bgShader,"t","tex1",1);new CGL.Uniform(this.bgShader,"t","tex2",2);new CGL.Uniform(this.bgShader,"t","tex3",3);this.mesh=U.getSimpleRect(this.cgl,"texEffectRect")}setSize(e,t){this._options.width=e;this._options.height=t}copy(e,t,i,n,r){const s=this.cgl;if(!e)e=CGL.Texture.getEmptyTexture(this.cgl);let a=this._options.width||e.width,o=this._options.height||e.height;if(this.fb){if(a<=0)a=8;if(o<=0)o=8;if(this.fb.getWidth()!=a||this.fb.getHeight()!=o)this.fb.setSize(a,o)}else{let e=CGL.Texture.FILTER_LINEAR;let t=CGL.Texture.WRAP_CLAMP_TO_EDGE;if(this._options.isFloatingPointTexture)e=CGL.Texture.FILTER_NEAREST;if(this._options.hasOwnProperty("filter"))e=this._options.filter;if(this._options.hasOwnProperty("wrap"))t=this._options.wrap;const l={isFloatingPointTexture:this._options.isFloatingPointTexture,pixelFormat:this._options.pixelFormat,numRenderBuffers:this._options.numRenderBuffers||1,filter:e,wrap:t};if(s.glVersion==1)this.fb=new CGL.Framebuffer(s,a,o,l);else this.fb=new CGL.Framebuffer2(s,a,o,l)}s.frameStore.renderOffscreen=true;this.fb.renderStart(s);s.setTexture(0,e.tex);if(t)s.setTexture(1,t.tex);if(i)s.setTexture(2,i.tex);if(n)s.setTexture(3,n.tex);if(r)s.setTexture(4,r.tex);s.pushShader(this.bgShader);this.mesh.render(this.bgShader);s.popShader();this.fb.renderEnd();s.frameStore.renderOffscreen=false;return this.fb.getTextureColor()}dispose(){if(this.fb)this.fb.dispose();if(this.bgShader)this.bgShader.dispose();if(this.mesh)this.mesh.dispose()}}CGL.CopyTexture=ae;((this.CGL=this.CGL||{}).COREMODULES=this.CGL.COREMODULES||{}).Copytexture=e.Copytexture})();(()=>{"use strict";var e={};class i{constructor(e){this.initiator=e}stack(e){console.info("["+this.initiator+"] ",e);console.log((new Error).stack)}groupCollapsed(e){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:0},...arguments)||!CABLES.logSilent)console.log("["+this.initiator+"]",...arguments);console.groupCollapsed("["+this.initiator+"] "+e)}table(e){console.table(e)}groupEnd(){console.groupEnd()}error(){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:2},...arguments)||!CABLES.logSilent)console.error("["+this.initiator+"]",...arguments)}errorGui(){if(CABLES.UI)CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:2},...arguments)}warn(){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:1},...arguments)||!CABLES.logSilent)console.warn("["+this.initiator+"]",...arguments)}verbose(){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:0},...arguments)||!CABLES.logSilent)console.log("["+this.initiator+"]",...arguments)}info(){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:0},...arguments)||!CABLES.logSilent)console.info("["+this.initiator+"]",...arguments)}log(){if(CABLES.UI&&CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:0},...arguments)||!CABLES.logSilent)console.log("["+this.initiator+"]",...arguments)}logGui(){if(CABLES.UI)CABLES.UI.logFilter.filterLog({initiator:this.initiator,level:0},...arguments)}userInteraction(e){}}const n=8;const f=function(e,t={}){if(!e)throw new Error("no cgl");this._log=new i("cgl_texture");this._cgl=e;this.pixelFormat=t.pixelFormat||f.PFORMATSTR_RGBA8UB;this.tex=this._cgl.gl.createTexture();this.id=CABLES.uuid();this.width=0;this.height=0;this.loading=false;this.flip=true;this.flipped=false;this.shadowMap=false;this.deleted=false;this.image=null;this.anisotropic=0;this.filter=f.FILTER_NEAREST;this.wrap=f.WRAP_CLAMP_TO_EDGE;this.texTarget=this._cgl.gl.TEXTURE_2D;if(t&&t.type)this.texTarget=t.type;this.textureType=f.TYPE_DEFAULT;this.unpackAlpha=true;this._fromData=true;this.name="unknown";this._glDataType=-1;this._glInternalFormat=-1;this._glDataFormat=-1;if(t){this.name=t.name||this.name;if(t.isDepthTexture){this.textureType=f.TYPE_DEPTH}if(t.isFloatingPointTexture===true)this.textureType=f.TYPE_FLOAT;if("textureType"in t)this.textureType=t.textureType;if("filter"in t)this.filter=t.filter;if("wrap"in t)this.wrap=t.wrap;if("unpackAlpha"in t)this.unpackAlpha=t.unpackAlpha;if("flip"in t)this.flip=t.flip;if("shadowMap"in t)this.shadowMap=t.shadowMap;if("anisotropic"in t)this.anisotropic=t.anisotropic}else{t={}}if(!t.pixelFormat&&t.isFloatingPointTexture)this.pixelFormat=f.PFORMATSTR_RGBA32F;if(this.textureType==f.TYPE_DEPTH)this.pixelFormat=f.PFORMATSTR_DEPTH;if(!t.width)t.width=n;if(!t.height)t.height=n;this._cgl.profileData.profileTextureNew++;this.setFormat(f.setUpGlPixelFormat(this._cgl,this.pixelFormat));this._cgl.profileData.addHeavyEvent("texture created",this.name,t.width+"x"+t.height);this.setSize(t.width,t.height);this.getInfoOneLine()};f.prototype.isFloatingPoint=function(){return f.isPixelFormatFloat(this.pixelFormat)};f.prototype.compareSettings=function(e){if(!e)return false;return e.width==this.width&&e.height==this.height&&e.filter==this.filter&&e.wrap==this.wrap&&e.textureType==this.textureType&&e.unpackAlpha==this.unpackAlpha&&e.anisotropic==this.anisotropic&&e.shadowMap==this.shadowMap&&e.texTarget==this.texTarget&&e.flip==this.flip};f.prototype.clone=function(){const e=new f(this._cgl,{name:this.name,filter:this.filter,anisotropic:this.anisotropic,wrap:this.wrap,textureType:this.textureType,pixelFormat:this.pixelFormat,unpackAlpha:this.unpackAlpha,flip:this.flip,width:this.width,height:this.height});this._cgl.profileData.addHeavyEvent("texture created",this.name,this.width+"x"+this.height);if(!this.compareSettings(e)){this._log.error("Cloned texture settings do not compare!");this._log.error(this);this._log.error(e)}return e};f.prototype.setFormat=function(e){this.pixelFormat=e.pixelFormat;this._glDataFormat=e.glDataFormat;this._glInternalFormat=e.glInternalFormat;this._glDataType=e.glDataType};f.setUpGlPixelFormat=function(e,t){const i={};if(!t){e._log.error("no pixelformatstr!");e._log.log(new Error);t=f.PFORMATSTR_RGBA8UB}i.pixelFormatBase=t;i.pixelFormat=t;i.glDataType=e.gl.UNSIGNED_BYTE;i.glInternalFormat=e.gl.RGBA8;i.glDataFormat=e.gl.RGBA;let n=e.gl.FLOAT;if(e.glUseHalfFloatTex){if(t==f.PFORMATSTR_RGBA32F)t=f.PFORMATSTR_RGBA16F;if(t==f.PFORMATSTR_RG32F)t=f.PFORMATSTR_RG16F;if(t==f.PFORMATSTR_R32F)t=f.PFORMATSTR_R16F}if(t.contains("16bit")){if(e.glVersion==2){const r=e.enableExtension("EXT_color_buffer_half_float");if(!r){console.warn("no 16bit extension, fallback to 32bit",t);if(t==f.PFORMATSTR_RGBA16F)t=f.PFORMATSTR_RGBA32F;if(t==f.PFORMATSTR_RGB16F)t=f.PFORMATSTR_RGB32F;if(t==f.PFORMATSTR_RG16F)t=f.PFORMATSTR_RG32F;if(t==f.PFORMATSTR_R16F)t=f.PFORMATSTR_R32F}else{n=e.gl.HALF_FLOAT}}}if(e.glVersion==1){i.glInternalFormat=e.gl.RGBA;if(t==f.PFORMATSTR_RGBA16F||t==f.PFORMATSTR_RG16F||t==f.PFORMATSTR_R16F){const s=e.enableExtension("OES_texture_half_float");if(!s)throw new Error("no half float texture extension");n=s.HALF_FLOAT_OES}}if(t==f.PFORMATSTR_RGBA8UB){}else if(t==f.PFORMATSTR_RGB565){i.glInternalFormat=e.gl.RGB565;i.glDataFormat=e.gl.RGB}else if(t==f.PFORMATSTR_R8UB){i.glInternalFormat=e.gl.R8;i.glDataFormat=e.gl.RED}else if(t==f.PFORMATSTR_RG8UB){i.glInternalFormat=e.gl.RG8;i.glDataFormat=e.gl.RG}else if(t==f.PFORMATSTR_RGB8UB){i.glInternalFormat=e.gl.RGB8;i.glDataFormat=e.gl.RGB}else if(t==f.PFORMATSTR_SRGBA8){i.glInternalFormat=e.gl.SRGB8_ALPHA8}else if(t==f.PFORMATSTR_R32F){i.glInternalFormat=e.gl.R32F;i.glDataFormat=e.gl.RED;i.glDataType=n}else if(t==f.PFORMATSTR_R16F){i.glInternalFormat=e.gl.R16F;i.glDataType=n;i.glDataFormat=e.gl.RED}else if(t==f.PFORMATSTR_RG16F){i.glInternalFormat=e.gl.RG16F;i.glDataType=n;i.glDataFormat=e.gl.RG}else if(t==f.PFORMATSTR_RGBA16F){if(e.glVersion==1)i.glInternalFormat=e.gl.RGBA;else i.glInternalFormat=e.gl.RGBA16F;i.glDataType=n}else if(t==f.PFORMATSTR_R11FG11FB10F){i.glInternalFormat=e.gl.R11F_G11F_B10F;i.glDataType=n;i.glDataFormat=e.gl.RGB}else if(t==f.PFORMATSTR_RGBA32F){if(e.glVersion==1)i.glInternalFormat=e.gl.RGBA;else i.glInternalFormat=e.gl.RGBA32F;i.glDataType=n}else if(t==f.PFORMATSTR_DEPTH){if(e.glVersion==1){i.glInternalFormat=e.gl.DEPTH_COMPONENT;i.glDataType=e.gl.UNSIGNED_SHORT;i.glDataFormat=e.gl.DEPTH_COMPONENT}else{i.glInternalFormat=e.gl.DEPTH_COMPONENT32F;i.glDataType=e.gl.FLOAT;i.glDataFormat=e.gl.DEPTH_COMPONENT}}else{console.log("unknown pixelformat ",t)}if(t.contains("32bit")||t==f.PFORMATSTR_R11FG11FB10F){if(e.glVersion==2)e.enableExtension("EXT_color_buffer_float");if(e.glVersion==2)e.enableExtension("EXT_float_blend");e.enableExtension("OES_texture_float_linear")}i.numColorChannels=1;if(t.startsWith("R"))i.numColorChannels=1;if(t.startsWith("RG"))i.numColorChannels=2;if(t.startsWith("RGB"))i.numColorChannels=3;if(t.startsWith("RGBA"))i.numColorChannels=4;if(!i.glDataType||!i.glInternalFormat||!i.glDataFormat)console.log("pixelformat wrong ?!",t,i.glDataType,i.glInternalFormat,i.glDataFormat,this);return i};f.prototype.setSize=function(e,t){if(this._cgl.aborted)return;if(e!=e||e<=0||!e)e=n;if(t!=t||t<=0||!t)t=n;if(e>this._cgl.maxTexSize||t>this._cgl.maxTexSize)this._log.error("texture size too big! "+e+"x"+t+" / max: "+this._cgl.maxTexSize);e=Math.min(e,this._cgl.maxTexSize);t=Math.min(t,this._cgl.maxTexSize);e=Math.floor(e);t=Math.floor(t);if(this.width==e&&this.height==t)return;e=this._cgl.checkTextureSize(e);t=this._cgl.checkTextureSize(t);this.width=e;this.height=t;this.deleted=false;this.setFormat(f.setUpGlPixelFormat(this._cgl,this.pixelFormat));this.shortInfoString=this.getInfoOneLine();this._cgl.gl.bindTexture(this.texTarget,this.tex);this._cgl.profileData.profileTextureResize++;const i=null;this._cgl.gl.texImage2D(this.texTarget,0,this._glInternalFormat,e,t,0,this._glDataFormat,this._glDataType,i);this._setFilter();this.updateMipMap();this._cgl.gl.bindTexture(this.texTarget,null)};f.prototype.initFromData=function(e,t,i,n,r){this.filter=n;this.wrap=r;if(n==undefined)this.filter=f.FILTER_LINEAR;if(r==undefined)this.wrap=f.WRAP_CLAMP_TO_EDGE;this.width=t;this.height=i;this._fromData=true;this.deleted=false;if(this.height>this._cgl.maxTexSize||this.width>this._cgl.maxTexSize){const s=CGL.Texture.getTempTexture(this._cgl);this.width=s.width;this.height=s.height;this.tex=s.tex;this._log.error("[cgl_texture] texture size to big!!!",this.width,this.height,this._cgl.maxTexSize);return}if(this.flip)this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL,this.flip);this._cgl.gl.bindTexture(this.texTarget,this.tex);this.setFormat(f.setUpGlPixelFormat(this._cgl,this.pixelFormat));this._cgl.gl.texImage2D(this.texTarget,0,this._glInternalFormat,t,i,0,this._glDataFormat,this._glDataType,e);this._setFilter();this.updateMipMap();if(this.flip)this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL,false);this._cgl.gl.bindTexture(this.texTarget,null)};f.prototype.updateMipMap=function(){if((this._cgl.glVersion==2||this.isPowerOfTwo())&&this.filter==f.FILTER_MIPMAP){this._cgl.gl.generateMipmap(this.texTarget);this._cgl.profileData.profileGenMipMap++}};f.prototype.initTexture=function(e,t){this._cgl.printError("before initTexture");this._cgl.checkFrameStarted("texture inittexture");this._fromData=false;this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.unpackAlpha);if(e.width||e.videoWidth)this.width=e.videoWidth||e.width;if(e.height||e.videoHeight)this.height=e.videoHeight||e.height;if(t!==undefined)this.filter=t;if(e.height>this._cgl.maxTexSize||e.width>this._cgl.maxTexSize){const i=CGL.Texture.getTempTexture(this._cgl);this.width=i.width;this.height=i.height;this.tex=i.tex;this._log.error("[cgl_texture] texture size to big!!!",e.width,e.height,this._cgl.maxTexSize);return}this._cgl.gl.bindTexture(this.texTarget,this.tex);this.deleted=false;this.flipped=!this.flip;if(this.flipped)this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL,this.flipped);this.setFormat(f.setUpGlPixelFormat(this._cgl,this.pixelFormat));this._cgl.gl.texImage2D(this.texTarget,0,this._glInternalFormat,this._glDataFormat,this._glDataType,e);this._setFilter();this.updateMipMap();this._cgl.gl.bindTexture(this.texTarget,null);this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,false);if(this.flipped)this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL,false);this.getInfoOneLine();this._cgl.printError("initTexture")};f.prototype.dispose=f.prototype.delete=function(){if(this.loading){return}this.deleted=true;this.width=0;this.height=0;this._cgl.profileData.profileTextureDelete++;this._cgl.gl.deleteTexture(this.tex);this.image=null;this.tex=null};f.prototype.isPowerOfTwo=function(){return f.isPowerOfTwo(this.width)&&f.isPowerOfTwo(this.height)};f.prototype.printInfo=function(){console.log(this.getInfo())};f.prototype.getInfoReadable=function(){const e=this.getInfo();let t="";e.name=e.name.substr(0,e.name.indexOf("?rnd="));for(const i in e){t+="* "+i+":  **"+e[i]+"**\n"}return t};f.prototype.getInfoOneLine=function(){let e=""+this.width+"x"+this.height;e+=" ";e+=this.pixelFormat;if(this.filter===CGL.Texture.FILTER_NEAREST)e+=" nearest";if(this.filter===CGL.Texture.FILTER_LINEAR)e+=" linear";if(this.filter===CGL.Texture.FILTER_MIPMAP)e+=" mipmap";if(this.wrap===CGL.Texture.WRAP_CLAMP_TO_EDGE)e+=" clamp";if(this.wrap===CGL.Texture.WRAP_REPEAT)e+=" repeat";if(this.wrap===CGL.Texture.WRAP_MIRRORED_REPEAT)e+=" repeatmir";this.shortInfoString=e;return e};f.prototype.getInfoOneLineShort=function(){let e=""+this.width+"x"+this.height;e+=" ";e+=this.pixelFormat;this.shortInfoString=e;return e};f.prototype.getInfo=function(){return f.getTexInfo(this)};f.prototype._setFilter=function(){this._cgl.printError("before _setFilter");if(!this._fromData){this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.unpackAlpha)}if(this.shadowMap){this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D,this._cgl.gl.TEXTURE_COMPARE_MODE,this._cgl.gl.COMPARE_REF_TO_TEXTURE);this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D,this._cgl.gl.TEXTURE_COMPARE_FUNC,this._cgl.gl.LEQUAL)}if(this.textureType==f.TYPE_FLOAT&&this.filter==f.FILTER_MIPMAP){this.filter=f.FILTER_LINEAR;this._log.stack("texture: HDR and mipmap filtering at the same time is not possible")}if(this._cgl.glVersion==1&&!this.isPowerOfTwo()){this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MAG_FILTER,this._cgl.gl.NEAREST);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MIN_FILTER,this._cgl.gl.NEAREST);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_S,this._cgl.gl.CLAMP_TO_EDGE);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_T,this._cgl.gl.CLAMP_TO_EDGE);this.filter=f.FILTER_NEAREST;this.wrap=f.WRAP_CLAMP_TO_EDGE}else{if(this.wrap==f.WRAP_CLAMP_TO_EDGE){this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_S,this._cgl.gl.CLAMP_TO_EDGE);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_T,this._cgl.gl.CLAMP_TO_EDGE)}else if(this.wrap==f.WRAP_REPEAT){this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_S,this._cgl.gl.REPEAT);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_T,this._cgl.gl.REPEAT)}else if(this.wrap==f.WRAP_MIRRORED_REPEAT){this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_S,this._cgl.gl.MIRRORED_REPEAT);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_T,this._cgl.gl.MIRRORED_REPEAT)}if(this.filter==f.FILTER_NEAREST){this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MAG_FILTER,this._cgl.gl.NEAREST);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MIN_FILTER,this._cgl.gl.NEAREST)}else if(this.filter==f.FILTER_LINEAR){this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MIN_FILTER,this._cgl.gl.LINEAR);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MAG_FILTER,this._cgl.gl.LINEAR)}else if(this.filter==f.FILTER_MIPMAP){this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MAG_FILTER,this._cgl.gl.LINEAR);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MIN_FILTER,this._cgl.gl.LINEAR_MIPMAP_LINEAR)}else{this._log.log("unknown texture filter!",this.filter);throw new Error("unknown texture filter!"+this.filter)}if(this.anisotropic){const e=this._cgl.enableExtension("EXT_texture_filter_anisotropic");if(this._cgl.maxAnisotropic){const t=Math.min(this._cgl.maxAnisotropic,this.anisotropic);this._cgl.gl.texParameterf(this._cgl.gl.TEXTURE_2D,e.TEXTURE_MAX_ANISOTROPY_EXT,t)}}}this.getInfoOneLine();this._cgl.printError("_setFilter")};f.load=function(i,n,r,e){if(!n)return r({error:true});let s=null;if(!i.patch.loading.existByName(n))s=i.patch.loading.start("cgl.texture",n);const a=new f(i);a.name=n;a.image=new Image;a.image.crossOrigin="anonymous";a.loading=true;if(e&&e.hasOwnProperty("filter"))a.filter=e.filter;if(e&&e.hasOwnProperty("flip"))a.flip=e.flip;if(e&&e.hasOwnProperty("wrap"))a.wrap=e.wrap;if(e&&e.hasOwnProperty("anisotropic"))a.anisotropic=e.anisotropic;if(e&&e.hasOwnProperty("unpackAlpha"))a.unpackAlpha=e.unpackAlpha;if(e&&e.hasOwnProperty("pixelFormat"))a.pixelFormat=e.pixelFormat;a.image.onabort=a.image.onerror=e=>{console.warn("[cgl.texture.load] error loading texture",n,e);a.loading=false;if(s)i.patch.loading.finished(s);const t={error:true};if(r)r(t,a)};a.image.onload=function(e){i.addNextFrameOnceCallback(()=>{a.initTexture(a.image);if(s)i.patch.loading.finished(s);a.loading=false;if(r)r(null,a)})};a.image.src=n;return a};f.getTempTexture=function(e){if(!e)console.error("[getTempTexture] no cgl!");if(!e.tempTexture)e.tempTexture=f.getTemporaryTexture(e,256,f.FILTER_LINEAR,f.REPEAT);return e.tempTexture};f.getErrorTexture=function(e){if(!e)console.error("[getTempTexture] no cgl!");if(!e.errorTexture)e.errorTexture=f.getTemporaryTexture(e,256,f.FILTER_LINEAR,f.REPEAT,1,.2,.2);return e.errorTexture};f.getEmptyTexture=function(e,t){if(t)return f.getEmptyTextureFloat(e);if(!e)console.error("[getEmptyTexture] no cgl!");if(e.tempTextureEmpty)return e.tempTextureEmpty;e.tempTextureEmpty=new f(e,{name:"emptyTexture"});const i=new Uint8Array(8*8*4).fill(0);for(let e=0;e<8*8*4;e+=4)i[e+3]=0;e.tempTextureEmpty.initFromData(i,8,8,f.FILTER_NEAREST,f.WRAP_REPEAT);return e.tempTextureEmpty};f.getEmptyTextureFloat=function(e){if(!e)console.error("[getEmptyTextureFloat] no cgl!");if(e.tempTextureEmptyFloat)return e.tempTextureEmptyFloat;e.tempTextureEmptyFloat=new f(e,{name:"emptyTexture",isFloatingPointTexture:true});const t=new Float32Array(8*8*4).fill(1);for(let e=0;e<8*8*4;e+=4)t[e+3]=0;e.tempTextureEmptyFloat.initFromData(t,8,8,f.FILTER_NEAREST,f.WRAP_REPEAT);return e.tempTextureEmptyFloat};f.getRandomTexture=function(e){if(!e)console.error("[getRandomTexture] no cgl!");if(e.randomTexture)return e.randomTexture;const t=256;const i=new Uint8Array(t*t*4);for(let e=0;e<t*t;e++){i[e*4+0]=Math.random()*255;i[e*4+1]=Math.random()*255;i[e*4+2]=Math.random()*255;i[e*4+3]=255}e.randomTexture=new f(e);e.randomTexture.initFromData(i,t,t,f.FILTER_NEAREST,f.WRAP_REPEAT);return e.randomTexture};f.getRandomFloatTexture=function(e){if(!e)console.error("[getRandomTexture] no cgl!");if(e.getRandomFloatTexture)return e.getRandomFloatTexture;const t=256;const i=new Float32Array(t*t*4);for(let e=0;e<t*t;e++){i[e*4+0]=(Math.random()-.5)*2;i[e*4+1]=(Math.random()-.5)*2;i[e*4+2]=(Math.random()-.5)*2;i[e*4+3]=1}e.getRandomFloatTexture=new f(e,{isFloatingPointTexture:true});e.getRandomFloatTexture.initFromData(i,t,t,f.FILTER_NEAREST,f.WRAP_REPEAT);return e.getRandomFloatTexture};f.getBlackTexture=function(e){if(!e)this._log.error("[getBlackTexture] no cgl!");if(e.blackTexture)return e.blackTexture;const t=8;const i=new Uint8Array(t*t*4);for(let e=0;e<t*t;e++){i[e*4+0]=i[e*4+1]=i[e*4+2]=0;i[e*4+3]=255}e.blackTexture=new f(e);e.blackTexture.initFromData(i,t,t,f.FILTER_NEAREST,f.WRAP_REPEAT);return e.blackTexture};f.getEmptyCubemapTexture=function(t){const i=[t.gl.TEXTURE_CUBE_MAP_POSITIVE_X,t.gl.TEXTURE_CUBE_MAP_NEGATIVE_X,t.gl.TEXTURE_CUBE_MAP_POSITIVE_Y,t.gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,t.gl.TEXTURE_CUBE_MAP_POSITIVE_Z,t.gl.TEXTURE_CUBE_MAP_NEGATIVE_Z];const e=t.gl.createTexture();const n=t.gl.TEXTURE_CUBE_MAP;const r=f.FILTER_NEAREST;const s=f.WRAP_CLAMP_TO_EDGE;const a=8;const o=8;t.profileData.profileTextureNew++;t.gl.bindTexture(n,e);t.profileData.profileTextureResize++;for(let e=0;e<6;e+=1){const l=new Uint8Array(8*8*4);t.gl.texImage2D(i[e],0,t.gl.RGBA,8,8,0,t.gl.RGBA,t.gl.UNSIGNED_BYTE,l);t.gl.texParameteri(n,t.gl.TEXTURE_MAG_FILTER,t.gl.NEAREST);t.gl.texParameteri(n,t.gl.TEXTURE_MIN_FILTER,t.gl.NEAREST);t.gl.texParameteri(n,t.gl.TEXTURE_WRAP_S,t.gl.CLAMP_TO_EDGE);t.gl.texParameteri(n,t.gl.TEXTURE_WRAP_T,t.gl.CLAMP_TO_EDGE)}t.gl.bindTexture(n,null);return{id:CABLES.uuid(),tex:e,cubemap:e,width:a,height:o,filter:r,wrap:s,unpackAlpha:true,flip:true,_fromData:true,name:"emptyCubemapTexture",anisotropic:0}};f.getTempGradientTexture=function(e){if(!e)console.error("[getTempGradientTexture] no cgl!");if(e.tempTextureGradient)return e.tempTextureGradient;const t=new f(e);const i=256;const n=new Uint8Array(i*i*4);for(let t=0;t<i;t++){for(let e=0;e<i;e++){n[(e+t*i)*4+0]=n[(e+t*i)*4+1]=n[(e+t*i)*4+2]=255-t;n[(e+t*i)*4+3]=255}}t.initFromData(n,i,i,f.FILTER_NEAREST,f.WRAP_REPEAT);e.tempTextureGradient=t;return t};f.getTemporaryTexture=function(e,i,t,n,r,s,a){if(r===undefined)r=1;if(s===undefined)s=1;if(a===undefined)a=1;const o=new f(e);const l=[];for(let t=0;t<i;t++){for(let e=0;e<i;e++){if((e+t)%64<32){l.push((200+t/i*25+e/i*25)*r);l.push((200+t/i*25+e/i*25)*s);l.push((200+t/i*25+e/i*25)*a)}else{l.push((40+t/i*25+e/i*25)*r);l.push((40+t/i*25+e/i*25)*s);l.push((40+t/i*25+e/i*25)*a)}l.push(255)}}const h=new Uint8Array(l);o.initFromData(h,i,i,t,n);return o};f.createFromImage=function(e,t,i){i=i||{};const n=new f(e,i);n.flip=false;n.image=t;n.width=t.videoWidth||t.width||8;n.height=t.videoHeight||t.height||8;if(i.hasOwnProperty("wrap"))n.wrap=i.wrap;n.initTexture(t,i.filter);return n};f.fromImage=function(e,t,i,n){console.error("deprecated texture from image...");const r=new f(e);r.flip=false;if(i)r.filter=i;if(n)r.wrap=n;r.image=t;r.initTexture(t);return r};f.isPowerOfTwo=function(e){return e==1||e==2||e==4||e==8||e==16||e==32||e==64||e==128||e==256||e==512||e==1024||e==2048||e==4096||e==8192||e==16384};f.getTexInfo=function(e){const t={};t.name=e.name;t["power of two"]=e.isPowerOfTwo();t.size=e.width+" x "+e.height;let i=e.texTarget;if(e.texTarget==e._cgl.gl.TEXTURE_2D)i="TEXTURE_2D";t.target=i;t.unpackAlpha=e.unpackAlpha;if(e.cubemap)t.cubemap=true;if(e.textureType==f.TYPE_FLOAT)t.textureType="TYPE_FLOAT";if(e.textureType==f.TYPE_HALF_FLOAT)t.textureType="TYPE_HALF_FLOAT";else if(e.textureType==f.TYPE_DEPTH)t.textureType="TYPE_DEPTH";else if(e.textureType==f.TYPE_DEFAULT)t.textureType="TYPE_DEFAULT";else t.textureType="UNKNOWN "+this.textureType;if(e.wrap==f.WRAP_CLAMP_TO_EDGE)t.wrap="CLAMP_TO_EDGE";else if(e.wrap==f.WRAP_REPEAT)t.wrap="WRAP_REPEAT";else if(e.wrap==f.WRAP_MIRRORED_REPEAT)t.wrap="WRAP_MIRRORED_REPEAT";else t.wrap="UNKNOWN";if(e.filter==f.FILTER_NEAREST)t.filter="FILTER_NEAREST";else if(e.filter==f.FILTER_LINEAR)t.filter="FILTER_LINEAR";else if(e.filter==f.FILTER_MIPMAP)t.filter="FILTER_MIPMAP";else t.filter="UNKNOWN";t.pixelFormat=e.pixelFormat||"unknown";return t};f.FILTER_NEAREST=0;f.FILTER_LINEAR=1;f.FILTER_MIPMAP=2;f.WRAP_REPEAT=0;f.WRAP_MIRRORED_REPEAT=1;f.WRAP_CLAMP_TO_EDGE=2;f.TYPE_DEFAULT=0;f.TYPE_DEPTH=1;f.TYPE_FLOAT=2;f.PFORMATSTR_RGB565="RGB 5/6/5bit ubyte";f.PFORMATSTR_R8UB="R 8bit ubyte";f.PFORMATSTR_RG8UB="RG 8bit ubyte";f.PFORMATSTR_RGB8UB="RGB 8bit ubyte";f.PFORMATSTR_RGBA8UB="RGBA 8bit ubyte";f.PFORMATSTR_SRGBA8="SRGBA 8bit ubyte";f.PFORMATSTR_R11FG11FB10F="RGB 11/11/10bit float";f.PFORMATSTR_R16F="R 16bit float";f.PFORMATSTR_RG16F="RG 16bit float";f.PFORMATSTR_RGB16F="RGB 16bit float";f.PFORMATSTR_RGBA16F="RGBA 16bit float";f.PFORMATSTR_R32F="R 32bit float";f.PFORMATSTR_RG32F="RG 32bit float";f.PFORMATSTR_RGB32F="RGB 32bit float";f.PFORMATSTR_RGBA32F="RGBA 32bit float";f.PFORMATSTR_DEPTH="DEPTH";f.PIXELFORMATS=[f.PFORMATSTR_RGB565,f.PFORMATSTR_R8UB,f.PFORMATSTR_RG8UB,f.PFORMATSTR_RGB8UB,f.PFORMATSTR_RGBA8UB,f.PFORMATSTR_SRGBA8,f.PFORMATSTR_R11FG11FB10F,f.PFORMATSTR_R16F,f.PFORMATSTR_RG16F,f.PFORMATSTR_RGBA16F,f.PFORMATSTR_R32F,f.PFORMATSTR_RGBA32F];f.isPixelFormatFloat=e=>{return(e||"").contains("float")};f.isPixelFormatHalfFloat=e=>{return(e||"").contains("float")&&(e||"").contains("16bit")};const r=8;class s{constructor(e,t){this.id=CABLES.uuid();this.name=t.name||"unknown cubemap texture";this._cgl=e;this.textureType=f.TYPE_DEFAULT;this._options=t;this._cubemapFaces=[this._cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_X,this._cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_X,this._cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Y,this._cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,this._cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Z,this._cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Z];this.cubemap=this.tex=this._cgl.gl.createTexture();this.texTarget=this._cgl.gl.TEXTURE_CUBE_MAP;this.width=r;this.height=r;this.filter=t.filter||CGL.Texture.FILTER_NEAREST;this.wrap=t.wrap||CGL.Texture.WRAP_CLAMP_TO_EDGE;this.unpackAlpha=t.unpackAlpha||true;this.flip=t.flip||true;if(!t.hasOwnProperty("pixelFormat")||!t.pixelFormat){if(t.isFloatingPointTexture)t.pixelFormat=f.PFORMATSTR_RGBA32F;else t.pixelFormat=f.PFORMATSTR_RGBA8UB}this.pixelFormat=t.pixelFormat;this._cgl.profileData.profileTextureNew++;this.setSize(t.width,t.height)}getInfo(){return{pixelFormat:this.pixelFormat}}setSize(e,t){this.delete();this.cubemap=this.tex=this._cgl.gl.createTexture();this._cgl.checkFrameStarted("cubemap corelib setsize");if(e!=e||e<=0||!e)e=r;if(t!=t||t<=0||!t)t=r;if(e>this._cgl.maxTexSize||t>this._cgl.maxTexSize)console.error("texture size too big! "+e+"x"+t+" / max: "+this._cgl.maxTexSize);e=Math.min(e,this._cgl.maxTexSize);t=Math.min(t,this._cgl.maxTexSize);e=Math.floor(e);t=Math.floor(t);this.width=e;this.height=t;this._cgl.gl.bindTexture(this.texTarget,this.tex);this._cgl.profileData.profileTextureResize++;const i=f.setUpGlPixelFormat(this._cgl,this._options.pixelFormat);this.pixelFormat=i.pixelFormat;if(CGL.Texture.isPixelFormatHalfFloat(i.pixelFormat)){const n=this._cgl.enableExtension("EXT_color_buffer_half_float");if(!this._cgl.enableExtension("OES_texture_float_linear")){this.filter=f.FILTER_NEAREST}}else if(CGL.Texture.isPixelFormatFloat(i.pixelFormat)){if(!this._cgl.enableExtension("OES_texture_float_linear")){console.log("no linear pixelformat,using nearest");this.filter=f.FILTER_NEAREST}}for(let e=0;e<6;e++){this._cgl.gl.texImage2D(this._cubemapFaces[e],0,i.glInternalFormat,this.width,this.height,0,i.glDataFormat,i.glDataType,null)}this._setFilter();this.updateMipMap();this._cgl.gl.bindTexture(this.texTarget,null)}_setFilter(){this._cgl.checkFrameStarted("cubemap corelib");this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.unpackAlpha);if(CGL.Texture.isPixelFormatFloat(this.pixelFormat)&&this.filter==CGL.Texture.FILTER_MIPMAP){console.log("texture: HDR and mipmap filtering at the same time is not possible");this.filter=CGL.Texture.FILTER_LINEAR}if(this._cgl.glVersion==1&&!f.isPowerOfTwo()){this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MAG_FILTER,this._cgl.gl.NEAREST);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MIN_FILTER,this._cgl.gl.NEAREST);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_S,this._cgl.gl.CLAMP_TO_EDGE);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_T,this._cgl.gl.CLAMP_TO_EDGE);this.filter=CGL.Texture.FILTER_NEAREST;this.wrap=CGL.Texture.WRAP_CLAMP_TO_EDGE}else{if(this.wrap==CGL.Texture.WRAP_CLAMP_TO_EDGE){this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_S,this._cgl.gl.CLAMP_TO_EDGE);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_T,this._cgl.gl.CLAMP_TO_EDGE)}else if(this.wrap==CGL.Texture.WRAP_REPEAT){this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_S,this._cgl.gl.REPEAT);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_T,this._cgl.gl.REPEAT)}else if(this.wrap==CGL.Texture.WRAP_MIRRORED_REPEAT){this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_S,this._cgl.gl.MIRRORED_REPEAT);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_T,this._cgl.gl.MIRRORED_REPEAT)}else{throw new Error("[CubemapTexture] unknown texture filter!"+this.filter)}if(this.filter==CGL.Texture.FILTER_NEAREST){this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MAG_FILTER,this._cgl.gl.NEAREST);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MIN_FILTER,this._cgl.gl.NEAREST)}else if(this.filter==CGL.Texture.FILTER_LINEAR){this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MIN_FILTER,this._cgl.gl.LINEAR);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MAG_FILTER,this._cgl.gl.LINEAR)}else if(this.filter==CGL.Texture.FILTER_MIPMAP){this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MAG_FILTER,this._cgl.gl.LINEAR);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MIN_FILTER,this._cgl.gl.LINEAR_MIPMAP_LINEAR)}else{throw new Error("[CubemapTexture] unknown texture filter!"+this.filter)}}}updateMipMap(){if(this.filter==CGL.Texture.FILTER_MIPMAP){this._cgl.gl.bindTexture(this.texTarget,this.tex);this._cgl.gl.generateMipmap(this.texTarget);this._cgl.profileData.profileGenMipMap++}}delete(){this._cgl.gl.deleteTexture(this.tex)}}class t{constructor(e,t,i,n){this._cgl=e;this.width=t||8;this.height=i||8;this._cubemapProperties=[{face:this._cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_X,lookAt:vec3.fromValues(1,0,0),up:vec3.fromValues(0,-1,0)},{face:this._cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_X,lookAt:vec3.fromValues(-1,0,0),up:vec3.fromValues(0,-1,0)},{face:this._cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Y,lookAt:vec3.fromValues(0,1,0),up:vec3.fromValues(0,0,1)},{face:this._cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,lookAt:vec3.fromValues(0,-1,0),up:vec3.fromValues(0,0,-1)},{face:this._cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Z,lookAt:vec3.fromValues(0,0,1),up:vec3.fromValues(0,-1,0)},{face:this._cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Z,lookAt:vec3.fromValues(0,0,-1),up:vec3.fromValues(0,-1,0)}];this._lookAtTemp=vec3.fromValues(0,0,0);this.camPos=vec3.fromValues(0,0,0);this._modelMatrix=mat4.create();this._viewMatrix=mat4.create();this._projectionMatrix=mat4.perspective(mat4.create(),CGL.DEG2RAD*90,1,.1,1e3);this._depthRenderbuffer=null;this._framebuffer=null;this._depthbuffer=null;this._textureDepth=null;this._options=n||{};this.name=this._options.name||"unknown cubemapframebuffer";if(!this._options.hasOwnProperty("numRenderBuffers"))this._options.numRenderBuffers=1;if(!this._options.hasOwnProperty("depth"))this._options.depth=true;if(!this._options.hasOwnProperty("clear"))this._options.clear=true;if(!this._options.hasOwnProperty("multisampling")){this._options.multisampling=false;this._options.multisamplingSamples=0}if(this._options.multisamplingSamples){if(this._cgl.glSlowRenderer)this._options.multisamplingSamples=0;if(!this._cgl.gl.MAX_SAMPLES)this._options.multisamplingSamples=0;else this._options.multisamplingSamples=Math.min(this._cgl.gl.getParameter(this._cgl.gl.MAX_SAMPLES),this._options.multisamplingSamples)}if(!this._options.hasOwnProperty("filter"))this._options.filter=CGL.Texture.FILTER_LINEAR;if(!this._options.hasOwnProperty("wrap"))this._options.wrap=CGL.Texture.WRAP_CLAMP_TO_EDGE;this._cgl.checkFrameStarted("cubemap framebuffer");let r=n.pixeFormat;if(!r&&n.isFloatingPointTexture)r=CGL.Texture.PFORMATSTR_RGBA32F;this.texture=new s(this._cgl,{width:this.width,height:this.height,pixelFormat:n.pixelFormat,filter:this._options.filter,wrap:this._options.wrap,name:this.name+" cubemaptexture"});this.initializeRenderbuffers();this.setSize(this.width,this.height)}initializeRenderbuffers(){this._framebuffer=this._cgl.gl.createFramebuffer();this._depthbuffer=this._cgl.gl.createRenderbuffer();this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER,this._framebuffer);this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER,this._depthbuffer);this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.DEPTH_COMPONENT16,this.width,this.height);this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER,this._cgl.gl.DEPTH_ATTACHMENT,this._cgl.gl.RENDERBUFFER,this._depthbuffer);this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER,null);this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER,null)}getWidth(){return this.width}getHeight(){return this.height}getGlFrameBuffer(){return this._framebuffer}getDepthRenderBuffer(){return this._depthRenderbuffer}getTextureColor(){return this.texture}getTextureDepth(){return this._textureDepth}dispose(){if(this.texture)this.texture=this.texture.delete();if(this._framebuffer)this._cgl.gl.deleteFramebuffer(this._framebuffer);if(this._depthRenderbuffer)this._cgl.gl.deleteRenderbuffer(this._depthbuffer)}delete(){this.dispose()}setSize(e,t){this._cgl.printError("before cubemap setsize");this.width=Math.floor(e);this.height=Math.floor(t);this.width=Math.min(this.width,this._cgl.maxTexSize);this.height=Math.min(this.height,this._cgl.maxTexSize);this._cgl.profileData.profileFrameBuffercreate++;this._framebuffer=this._cgl.gl.createFramebuffer();this._depthbuffer=this._cgl.gl.createRenderbuffer();this.texture.setSize(this.width,this.height);this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER,this._framebuffer);this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER,this._depthbuffer);this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.DEPTH_COMPONENT16,this.width,this.height);this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER,this._cgl.gl.DEPTH_ATTACHMENT,this._cgl.gl.RENDERBUFFER,this._depthbuffer);if(!this._cgl.gl.isFramebuffer(this._framebuffer)){console.error("invalid framebuffer...")}const i=this._cgl.gl.checkFramebufferStatus(this._cgl.gl.FRAMEBUFFER);this.checkErrorsByStatus(i);this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_CUBE_MAP,null);this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER,null);this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER,null);this._cgl.printError("cubemap setsize")}checkErrorsByStatus(e){switch(e){case this._cgl.gl.FRAMEBUFFER_COMPLETE:break;case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:console.error("FRAMEBUFFER_INCOMPLETE_ATTACHMENT...",this.width,this.height,this.texture.tex,this._depthBuffer);throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT");case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:console.error("FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:console.error("FRAMEBUFFER_INCOMPLETE_DIMENSIONS");throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS");case this._cgl.gl.FRAMEBUFFER_UNSUPPORTED:console.error("FRAMEBUFFER_UNSUPPORTED");throw new Error("Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED");case 36059:console.error("Incomplete: FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER from ext. Or Safari/iOS undefined behaviour.");break;default:console.error("incomplete framebuffer",e);console.log(this);throw new Error("Incomplete framebuffer: "+e)}}setFilter(e){this.texture.filter=e;this.texture.setSize(this.width,this.height)}setCamPos(e){this.camPos=e||this.camPos}setMatrices(e,t,i){this._modelMatrix=e||this._modelMatrix;this._viewMatrix=t||this._viewMatrix;this._projectionMatrix=i||this._projectionMatrix}renderStart(){this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_CUBE_MAP,this.texture.tex);this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER,this._framebuffer);this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER,this._depthbuffer);this._cgl.gl.viewport(0,0,this.width,this.height);this._cgl.pushGlFrameBuffer(this._framebuffer);this._cgl.pushFrameBuffer(this)}renderStartCubemapFace(e){this._cgl.pushModelMatrix();this._cgl.pushViewMatrix();this._cgl.pushPMatrix();this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER,this._cgl.gl.COLOR_ATTACHMENT0,this._cubemapProperties[e].face,this.texture.tex,0);this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER,this._cgl.gl.DEPTH_ATTACHMENT,this._cgl.gl.RENDERBUFFER,this._depthbuffer);if(this._options.clear){this._cgl.gl.clearColor(0,0,0,1);this._cgl.gl.clear(this._cgl.gl.COLOR_BUFFER_BIT|this._cgl.gl.DEPTH_BUFFER_BIT)}this.setMatricesCubemapFace(e)}setMatricesCubemapFace(e){mat4.copy(this._cgl.mMatrix,this._modelMatrix);vec3.add(this._lookAtTemp,this.camPos,this._cubemapProperties[e].lookAt);mat4.lookAt(this._cgl.vMatrix,this.camPos,this._lookAtTemp,this._cubemapProperties[e].up);mat4.copy(this._cgl.pMatrix,this._projectionMatrix)}renderEndCubemapFace(){this._cgl.popPMatrix();this._cgl.popModelMatrix();this._cgl.popViewMatrix()}renderEnd(){this._cgl.profileData.profileFramebuffer++;if(this._cgl.glVersion!==1){this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER,this._framebuffer)}this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER,this._cgl.popGlFrameBuffer());this._cgl.popFrameBuffer();this._cgl.resetViewPort();this.updateMipMap()}updateMipMap(){if(!this.texture)return;this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_CUBE_MAP,this.texture.tex);this.texture.updateMipMap();this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_CUBE_MAP,null)}}CGL.CubemapFramebuffer=t;((this.CGL=this.CGL||{}).COREMODULES=this.CGL.COREMODULES||{}).Cubemapframebuffer=e.Cubemapframebuffer})();