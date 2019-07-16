import af from 'utils/async-function';
import aa from 'utils/async-await';

describe('Promise Support', function () {
  it('should be a promise', function () {
    const rs = af(true);
    expect(rs instanceof Promise).toBe(true);
  });

  it('should be success', () => {
    expect.assertions(1);
    return af(true).then((message) => {
      expect(message).toBe('Success');
    });
  });

  it('should be failed', () => {
    expect.assertions(1);
    return af(false).catch((error) => {
      expect(error.message).toBe('Failed');
    });
  });
});

describe('Async Await', function () {
  it('should run with no error', async function () {
    const result = await aa();
    expect(result).toBe('AsyncAwait');
  });
});