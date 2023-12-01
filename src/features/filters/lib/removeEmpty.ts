type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export const removeEmpty = <T extends object, V = Entries<T>>(obj: T): V =>
  Object.fromEntries(Object.entries(obj).filter(([, val]) => val)) as V;
