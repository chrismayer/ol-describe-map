"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchSpy = exports.failureResponse = exports.successResponse = void 0;
var successResponse = function (text, status) {
    if (status === void 0) { status = 200; }
    return {
        ok: true,
        status: status,
        text: function () { return Promise.resolve(text); }
    };
};
exports.successResponse = successResponse;
var failureResponse = function (text, status) {
    if (status === void 0) { status = 500; }
    return {
        ok: false,
        status: status,
        text: function () { return Promise.resolve(text); }
    };
};
exports.failureResponse = failureResponse;
var fetchSpy = function (response) {
    return jest
        .spyOn(global, 'fetch')
        .mockImplementation(jest.fn(function () {
        return Promise.resolve(response);
    }));
};
exports.fetchSpy = fetchSpy;
exports.default = exports.fetchSpy;
//# sourceMappingURL=fetchSpy.js.map