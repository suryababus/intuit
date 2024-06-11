export const convertMapToKeyValue = <T>(
  map?: Record<string, T | undefined>
) => {
  if (!map) {
    return [];
  }
  return Object.keys(map).map((key) => ({ key, value: map[key] }));
};
