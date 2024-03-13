/// <reference types="jest" />
export declare const successResponse: (text?: any, status?: number) => Partial<Response>;
export declare const failureResponse: (text?: any, status?: number) => Partial<Response>;
export declare const fetchSpy: (response: Partial<Response>) => jest.SpyInstance<Promise<Response>, [input: import("undici-types").RequestInfo, init?: RequestInit | undefined], any>;
export default fetchSpy;
