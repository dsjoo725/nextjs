export function getCommonValue<T, K>(selector: (item: T) => K): (items: T[]) => K | null;
export function getCommonValue<T, K>(selector: (item: T) => K, items: T[]): K | null;

export function getCommonValue<T, K>(selector: (item: T) => K, items?: T[]) {
  const fn = (items: T[]) => {
    if (items.length === 0) return null;
    const referenceValue = selector(items[0]);
    return items.every((item) => selector(item) === referenceValue) ? referenceValue : null;
  };

  return items === undefined ? fn : fn(items);
}
