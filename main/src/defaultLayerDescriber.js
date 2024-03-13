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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultLayerDescriber = void 0;
var ImageWMS_1 = __importDefault(require("ol/source/ImageWMS"));
var TileWMS_1 = __importDefault(require("ol/source/TileWMS"));
var WMSCapabilities_js_1 = __importDefault(require("ol/format/WMSCapabilities.js"));
var determineLayerType_1 = require("./determineLayerType");
var determineSourceType_1 = require("./determineSourceType");
var util_1 = require("./util");
/**
 * Returns a basic description of the passed layer.
 *
 * @param layer Layer A layer to describe.
 * @returns LayerDescription A description of the layer.
 */
var defaultLayerDescriber = function (layer, view) { return __awaiter(void 0, void 0, void 0, function () {
    var layerType, source, sourceType, details, desc;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                layerType = (0, determineLayerType_1.determineLayerType)(layer);
                source = layer.getSource();
                sourceType = source == null ? 'unknown' : (0, determineSourceType_1.determineSourceType)(source);
                details = null;
                if (sourceType === 'Vector') {
                    details = determineVectorLayerDetails(layer, view);
                }
                if (!(sourceType === 'TileWMS')) return [3 /*break*/, 2];
                return [4 /*yield*/, determineWmsLayerDetails(layer)];
            case 1:
                details = _a.sent();
                _a.label = 2;
            case 2:
                if (!(sourceType === 'ImageWMS')) return [3 /*break*/, 4];
                return [4 /*yield*/, determineWmsLayerDetails(layer)];
            case 3:
                details = _a.sent();
                _a.label = 4;
            case 4:
                desc = {
                    type: layerType,
                    source: sourceType,
                    details: details
                };
                return [2 /*return*/, desc];
        }
    });
}); };
exports.defaultLayerDescriber = defaultLayerDescriber;
var reStartsWithHttpOrHttps = /^https?:\/\//gi;
var ensureAbsoluteUrl = function (u) {
    if (reStartsWithHttpOrHttps.test(u)) {
        return u;
    }
    var loc = document.location.href;
    var url = (new URL(u, loc)).href;
    return url;
};
/**
 *
 * @param layer
 * @returns
 */
var determineWmsLayerDetails = function (layer) { return __awaiter(void 0, void 0, void 0, function () {
    var parser, details, source, params, urls, url, responseTxt, json, actualLayers;
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                parser = new WMSCapabilities_js_1.default();
                details = {};
                source = layer.getSource();
                if (source == null) {
                    return [2 /*return*/, details];
                }
                params = source.getParams();
                if (source instanceof TileWMS_1.default) {
                    urls = source.getUrls();
                }
                else if (source instanceof ImageWMS_1.default) {
                    urls = [source.getUrl()];
                }
                url = urls && urls[0] ? urls[0] : '';
                if (!url) {
                    return [2 /*return*/, details];
                }
                url = ensureAbsoluteUrl(url);
                return [4 /*yield*/, (0, util_1.getWmsResponse)(url, {
                        VERSION: params.VERSION || '1.3.0',
                        SERVICE: params.SERVICE || 'WMS',
                        REQUEST: 'GetCapabilities'
                    })];
            case 1:
                responseTxt = _j.sent();
                json = parser.read(responseTxt);
                // add service information
                details.serviceAbstract = (_a = json === null || json === void 0 ? void 0 : json.Service) === null || _a === void 0 ? void 0 : _a.Abstract;
                details.serviceKeywords = (_b = json === null || json === void 0 ? void 0 : json.Service) === null || _b === void 0 ? void 0 : _b.KeywordList;
                details.serviceTitle = (_c = json === null || json === void 0 ? void 0 : json.Service) === null || _c === void 0 ? void 0 : _c.Title;
                // add outermost/embracing layer information
                details.topLevelLayerAbstract = (_e = (_d = json === null || json === void 0 ? void 0 : json.Capability) === null || _d === void 0 ? void 0 : _d.Layer) === null || _e === void 0 ? void 0 : _e.Abstract;
                details.topLevelLayerTitle = (_g = (_f = json === null || json === void 0 ? void 0 : json.Capability) === null || _f === void 0 ? void 0 : _f.Layer) === null || _g === void 0 ? void 0 : _g.Title;
                actualLayers = findLayersByLayerNames((_h = json === null || json === void 0 ? void 0 : json.Capability) === null || _h === void 0 ? void 0 : _h.Layer, params.LAYERS);
                details.wmsLayerNames = [];
                details.wmsLayerAbstracts = [];
                details.wmsLayerTitles = [];
                details.wmsLayerMetadataURLs = [];
                actualLayers.forEach(function (actualLayer) {
                    var _a, _b, _c, _d;
                    (_a = details.wmsLayerNames) === null || _a === void 0 ? void 0 : _a.push((actualLayer === null || actualLayer === void 0 ? void 0 : actualLayer.Name) || '');
                    (_b = details.wmsLayerAbstracts) === null || _b === void 0 ? void 0 : _b.push((actualLayer === null || actualLayer === void 0 ? void 0 : actualLayer.Abstract) || '');
                    (_c = details.wmsLayerTitles) === null || _c === void 0 ? void 0 : _c.push((actualLayer === null || actualLayer === void 0 ? void 0 : actualLayer.Title) || '');
                    (_d = details.wmsLayerMetadataURLs) === null || _d === void 0 ? void 0 : _d.push(findBestMetadataURL(actualLayer));
                });
                return [2 /*return*/, details];
        }
    });
}); };
/**
 *
 * @param layerCapabilities
 * @returns
 */
var findBestMetadataURL = function (layerCapabilities) {
    var allURLObjects = (layerCapabilities === null || layerCapabilities === void 0 ? void 0 : layerCapabilities.MetadataURL) || [];
    var preferredFormats = ['text/html', 'html', 'text/xml', 'xml'];
    var bestUrl = '';
    var bestScore = -Infinity;
    allURLObjects.forEach(function (oneUrlObj) {
        var currFormat = oneUrlObj.Format;
        var currURL = oneUrlObj.OnlineResource;
        var indexOfCurrFormat = preferredFormats.findIndex(function (entry) { return entry === currFormat; });
        var currScore = indexOfCurrFormat < 0
            ? indexOfCurrFormat
            : preferredFormats.length - indexOfCurrFormat;
        if (currScore > bestScore) {
            bestUrl = currURL;
            bestScore = currScore;
        }
    });
    return bestUrl;
};
/**
 *
 * @param capabilityLayer
 * @param layersParam
 * @returns
 */
var findLayersByLayerNames = function (capabilityLayer, layersParam, addTo) {
    if (addTo === void 0) { addTo = []; }
    var layerNames = (layersParam || '').split(',');
    var jsonLayers = capabilityLayer === null || capabilityLayer === void 0 ? void 0 : capabilityLayer.Layer;
    var found = addTo;
    jsonLayers === null || jsonLayers === void 0 ? void 0 : jsonLayers.forEach(function (jsonLayer) {
        if (layerNames.includes(jsonLayer.Name)) {
            found.push(jsonLayer);
        }
        if (jsonLayer.Layer) {
            found = findLayersByLayerNames(jsonLayer, layersParam, found);
        }
    });
    return found;
};
/**
 * Determines details for the passed vector layer and current Map view.
 * @param layer
 * @param view
 * @returns
 */
var determineVectorLayerDetails = function (layer, view) {
    var details = {};
    var source = layer.getSource();
    var extent = view.calculateExtent();
    var totalFeatures = source.getFeatures();
    if (totalFeatures.length === 0) {
        details.numTotalFeaturesInSource = 0;
        details.numFeaturesInExtent = 0;
        details.numRenderedFeaturesInExtent = 0;
        details.numSkippedFeaturesInExtent = 0;
        return details;
    }
    var extentFeatures = source.getFeaturesInExtent(extent);
    var numTotalFeatures = totalFeatures.length;
    var numExtentFeatures = extentFeatures.length;
    var res = view.getResolution();
    var styleFunc = layer.getStyleFunction();
    var renderedFeatures = [];
    var skippedFeatures = [];
    if (styleFunc !== undefined && res !== undefined) {
        extentFeatures.forEach(function (feature) {
            var styles = styleFunc(feature, res);
            if (styles === undefined) {
                skippedFeatures.push(feature);
            }
            else {
                renderedFeatures.push(feature);
            }
        });
    }
    details.numTotalFeaturesInSource = numTotalFeatures;
    details.numFeaturesInExtent = numExtentFeatures;
    details.numRenderedFeaturesInExtent = renderedFeatures.length;
    details.numSkippedFeaturesInExtent = skippedFeatures.length;
    var keys = undefined;
    var renderedData = [];
    var statsKeys = [];
    renderedFeatures.forEach(function (renderedFeat) {
        var featureProps = renderedFeat.getProperties();
        delete featureProps.geometry;
        if (keys === undefined) {
            keys = Object.keys(featureProps);
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                if (typeof featureProps[key] === 'number') {
                    statsKeys.push(key);
                }
            }
        }
        renderedData.push(featureProps);
    });
    var nameAttribute = (0, util_1.getNameAttribute)(renderedFeatures[0]);
    details.renderedStatistics = (0, util_1.simpleStats)(renderedData, statsKeys, nameAttribute);
    return details;
};
exports.default = exports.defaultLayerDescriber;
//# sourceMappingURL=defaultLayerDescriber.js.map