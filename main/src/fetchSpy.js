"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchSpy = exports.successResponse = void 0;
var successResponse = function (text, status) {
    if (status === void 0) { status = 200; }
    return {
        ok: true,
        status: status,
        text: function () { return Promise.resolve(text); }
    };
};
exports.successResponse = successResponse;
// not used for now, and as such this should be commented out, also to better reflect
// the actual test coverage
// export const failureResponse = (text?: any, status: number = 500): Partial<Response> => {
//   return {
//     ok: false,
//     status: status,
//     text: () => Promise.resolve(text)
//   };
// };
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