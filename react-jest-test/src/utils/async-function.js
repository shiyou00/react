export default function asyncFunc(shouldSuccess) {
  return new Promise((resolve, reject) => {
    if (shouldSuccess) {
      resolve('Success');
    } else {
      reject(new Error('Failed'));
    }
  });
}