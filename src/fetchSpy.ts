export const successResponse = (text?: any, status: number = 200): Partial<Response> => {
  return {
    ok: true,
    status: status,
    text: () => Promise.resolve(text)
  };
};

// not used for now, and as such this should be commented out, also to better reflect
// the actual test coverage
// export const failureResponse = (text?: any, status: number = 500): Partial<Response> => {
//   return {
//     ok: false,
//     status: status,
//     text: () => Promise.resolve(text)
//   };
// };

export const fetchSpy = (response: Partial<Response>) => {
  return jest
    .spyOn(global, 'fetch')
    .mockImplementation(jest.fn(() => {
      return Promise.resolve(response);
    }) as jest.Mock);
};

export default fetchSpy;
