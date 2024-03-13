"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.voidLayersDescriber = exports.voidViewDescriber = exports.getWmsResponse = exports.makePercentInfo = exports.simpleStats = exports.getNameAttribute = exports.rad2deg = exports.formatBBOX = exports.formatCoordinate = exports.roundTo = exports.startsWithVowel = exports.localNum = exports.stringifyNumber = void 0;
var SPECIAL_NUMS = ['zeroth', 'first', 'second',
    'third', 'fourth', 'fifth', 'sixth', 'seventh',
    'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth',
    'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth',
    'seventeenth', 'eighteenth', 'nineteenth'];
var DECA = ['twent', 'thirt', 'fort', 'fift', 'sixt', 'sevent', 'eight', 'ninet'];
/**
 * Turns a number into a stringified version, i.e. 1 becomes 'first', 22 becomes
 * 'twenty-second'. numbers above 100 are returned as '# 175'.
 *
 * See  https://stackoverflow.com/a/20426113
 *
 * @param n number The number to transform
 * @returns string A spelled-out number, e.g. 'first', 'twenty-second' or '# 175'.
 */
var stringifyNumber = function (n) {
    var stringified = '';
    if (n > 100) {
        stringified = "# ".concat(n);
    }
    else if (n < 20) {
        stringified = SPECIAL_NUMS[n];
    }
    else if (n % 10 === 0) {
        stringified = DECA[Math.floor(n / 10) - 2] + 'ieth';
    }
    else {
        stringified = DECA[Math.floor(n / 10) - 2] + 'y-' + SPECIAL_NUMS[n % 10];
    }
    return stringified;
};
exports.stringifyNumber = stringifyNumber;
/**
 * Localizes the given number and returns it with thousands seperator and decimal
 * seperator for the language code en-GB.
 *
 * @param num:number|undefined the number to localize
 * @returns string the localized number.
 */
var localNum = function (num) {
    if (num === undefined) {
        return '';
    }
    return num.toLocaleString('en-GB');
};
exports.localNum = localNum;
/**
 * Returns `true` if the string to test starts with 'a', 'o', 'u', 'i' or 'e', ignoring
 * casing, `false` otherwise.
 *
 * @param str string The string to test
 * @returns boolean True if the string starts with 'a', 'o', 'u', 'i' or 'e',
 *   case-insensitive, false otherwise.
 */
var startsWithVowel = function (str) {
    var re = /^[aouie]{1}/i;
    return re.test(str);
};
exports.startsWithVowel = startsWithVowel;
/**
 * See https://stackoverflow.com/a/18358056
 *
 * @param num
 * @param digits
 * @returns
 */
var roundTo = function (num, digits) {
    if (digits === void 0) { digits = 4; }
    if (num < 0) {
        return -(0, exports.roundTo)(-num, digits);
    }
    var a = "".concat(num, "e+").concat(digits);
    var b = "e-".concat(digits);
    return +(Math.round(+a) + b);
};
exports.roundTo = roundTo;
/**
 *
 * @param x
 * @param y
 * @param digits
 * @returns
 */
var formatCoordinate = function (x, y, digits) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    if (digits === void 0) { digits = 4; }
    return "[".concat((0, exports.roundTo)(x, digits), ", ").concat((0, exports.roundTo)(y, digits), "]");
};
exports.formatCoordinate = formatCoordinate;
/**
 *
 * @param coords
 * @param digits
 * @returns
 */
var formatBBOX = function (coords, digits) {
    if (digits === void 0) { digits = 4; }
    return [
        '[',
        "".concat((0, exports.roundTo)(coords[0], digits), ", ").concat((0, exports.roundTo)(coords[1], digits), ", "),
        "".concat((0, exports.roundTo)(coords[2], digits), ", ").concat((0, exports.roundTo)(coords[3], digits)),
        ']'
    ].join('');
};
exports.formatBBOX = formatBBOX;
/**
 *
 * @param rad
 * @returns
 */
var rad2deg = function (rad) {
    if (rad === void 0) { rad = 0; }
    return rad * (180 / Math.PI);
};
exports.rad2deg = rad2deg;
/**
 *
 * @param feature
 * @returns
 */
var getNameAttribute = function (feature) {
    if (feature === void 0) { feature = undefined; }
    if (feature === undefined) {
        return '';
    }
    // https://www.indifferentlanguages.com/words/name
    var candidates = ['name', 'nom', 'nombre', 'naam'];
    var attributes = feature.getProperties();
    var attributeKeys = Object.keys(attributes);
    var nameAttribute = '';
    candidates.some(function (candidate) {
        if (candidate in attributes) {
            nameAttribute = candidate;
        }
        else {
            var candidateRegEx_1 = new RegExp("^\\s*".concat(candidate, "\\s*$"), 'i');
            attributeKeys.some(function (attributeKey) {
                if (candidateRegEx_1.test(attributeKey)) {
                    nameAttribute = attributeKey;
                    return true;
                }
                return false;
            });
        }
        if (nameAttribute !== '') {
            return true;
        }
        return false;
    });
    return nameAttribute;
};
exports.getNameAttribute = getNameAttribute;
/**
 *
 * @param data object[]
 * @param keys string[]
 * @param nameAttribute string
 * @returns
 */
var simpleStats = function (data, keys, nameAttribute) {
    var stats = {};
    if (keys.length < 1 || data.length < 1) {
        return stats;
    }
    keys.forEach(function (key) {
        var min = +Infinity;
        var max = -Infinity;
        var avg = NaN;
        var sum = 0;
        var minName = undefined;
        var maxName = undefined;
        data.forEach(function (record) {
            if (key in record) {
                var val = record[key];
                var name_1 = nameAttribute in record ? record[nameAttribute] : undefined;
                if (val < min) {
                    min = val;
                    minName = name_1;
                }
                if (val > max) {
                    max = val;
                    maxName = name_1;
                }
                sum += val;
            }
        });
        avg = sum / data.length;
        if (min !== Infinity) {
            stats[key] = { min: min, max: max, avg: avg, sum: sum, minName: minName, maxName: maxName };
        }
    });
    return stats;
};
exports.simpleStats = simpleStats;
/**
 * Calculates, formnats and returns a percentage of the `share` of the `total`.
 *
 * @param share number|undefined The absolute number of the share.
 * @param total number|undefined The toital nomber the share is a part of.
 * @returns string A percentage of the share of the total, wrapped in parentheses, and
 *   with a leading space.
 */
var makePercentInfo = function (share, total) {
    if (share === void 0) { share = undefined; }
    if (total === void 0) { total = undefined; }
    if (total === 0 || share === undefined || total === undefined || isNaN(total)) {
        return '';
    }
    return " (".concat((0, exports.roundTo)(100 * (share / total), 2), "%)");
};
exports.makePercentInfo = makePercentInfo;
var wmsResponseCache = {};
var getWmsResponse = function (url, params) { return __awaiter(void 0, void 0, void 0, function () {
    var responseTxt, cacheKey, _i, _a, _b, k, v, wmsUrl, _c, _d, _e, k, v;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                responseTxt = '';
                cacheKey = "_url:".concat(encodeURIComponent(url));
                for (_i = 0, _a = Object.entries(params); _i < _a.length; _i++) {
                    _b = _a[_i], k = _b[0], v = _b[1];
                    cacheKey = "".concat(cacheKey, "_").concat(encodeURIComponent(k), ":").concat(encodeURIComponent(v));
                }
                if (!!wmsResponseCache[cacheKey]) return [3 /*break*/, 2];
                wmsUrl = new URL(url);
                for (_c = 0, _d = Object.entries(params); _c < _d.length; _c++) {
                    _e = _d[_c], k = _e[0], v = _e[1];
                    wmsUrl.searchParams.set(k, v);
                }
                return [4 /*yield*/, fetch(wmsUrl.toString()).then(function (resp) { return resp.text(); })];
            case 1:
                responseTxt = _f.sent();
                wmsResponseCache[cacheKey] = responseTxt;
                _f.label = 2;
            case 2: return [2 /*return*/, wmsResponseCache[cacheKey]];
        }
    });
}); };
exports.getWmsResponse = getWmsResponse;
var voidViewDescriber = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, {}];
    });
}); };
exports.voidViewDescriber = voidViewDescriber;
var voidLayersDescriber = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, {
                type: '',
                source: '',
                details: null
            }];
    });
}); };
exports.voidLayersDescriber = voidLayersDescriber;
//# sourceMappingURL=util.js.map