import { EventEmitter } from 'events';
export const emitter =  new EventEmitter();
export const createRandomId = () => {
  return (
    (Math.random() * 10000000).toString(16).substr(0, 4) +
    new Date().getTime() +
    Math.random()
      .toString()
      .substr(2, 5)
  );
};

