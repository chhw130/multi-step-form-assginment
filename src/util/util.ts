export const debounce = <T extends (...args: unknown[]) => unknown>(fn: T, delay: number) => {
  let timeout: ReturnType<typeof setTimeout>;

  return () => {
    let current: unknown;

    if (timeout) {
      clearTimeout(timeout);
    }

    const cancel = () => {
      clearTimeout(timeout);
    };

    timeout = setTimeout(() => {
      current = fn();
    }, delay);
    return { current, cancel };
  };
};
