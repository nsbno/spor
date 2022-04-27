/** Calls a function after a given number of milliseconds */
export const debounce = (callback: Function, delayInMs: number) => {
  let id: NodeJS.Timeout;
  return (...args: unknown[]) => {
    clearTimeout(id);
    id = setTimeout(() => callback(...args), delayInMs);
  };
};
