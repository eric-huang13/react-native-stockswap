const log = (tag, ...args) => {
  if (__DEV__) {
    console.log.apply(this, [tag, ...args]);
  }
};

export const getAuthLogger = () => {
  return (...args) => log('AUTH', ...args);
};
