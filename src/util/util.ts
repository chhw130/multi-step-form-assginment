export const debounce = <T extends (...args: unknown[]) => unknown>(fn: T, delay: number) => {
  let timeout: ReturnType<typeof setTimeout>;

  return () => {
    let result: unknown;

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      result = fn();
    }, delay);
    return result;
  };
};
