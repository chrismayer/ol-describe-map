export const successResponse = (text?: any, status: number = 200): Partial<Response> => {
  return {
    ok: true,
    status: status,
    text: () => Promise.resolve(text)
  };
};

export const failureResponse = (text?: any, status: number = 500): Partial<Response> => {
  return {
    ok: false,
    status: status,
    text: () => Promise.resolve(text)
  };
};

export const fetchSpy = (response: Partial<Response>) => {
  return jest
    .spyOn(global, 'fetch')
    .mockImplementation(jest.fn(() => {
      return Promise.resolve(response);
    }) as jest.Mock);
};

export default fetchSpy;
