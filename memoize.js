function memoize(fn) {
  let lastArgs = null;
  let lastResult = null;

  return function(...args) {
    if (lastArgs) {
      // byla juz wywolywana
      const isEveryArgSame = args.every((arg, idx) => {
        return arg === lastArgs[idx];
      });

      if (args.length === lastArgs.length && isEveryArgSame) {
        return lastResult;
      }
    }

    // nie byla jeszcze wywolana lub argumenty roznia sie
    lastResult = fn(...args);
    lastArgs = args;
    return lastResult;
  };
}

module.exports = memoize;
