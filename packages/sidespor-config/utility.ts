/* eslint-disable @typescript-eslint/no-explicit-any */
export const mapValues = <T>(object: T, function_: (value: any) => any): T =>
  Object.fromEntries(
    Object.entries(object as any).map(([key, value]) => [
      key,
      function_(value),
    ]),
  ) as T;

// Same as Object.keys() but keeps the typing instead of making it to string[]
export function keys<T extends object>(object: T): (keyof T)[] {
  return Object.keys(object) as (keyof T)[];
}

export const capitalize = (text: string) => {
  if (!text || text.length === 0) return text;
  return text.slice(0, 1).toUpperCase() + text.slice(1);
};
