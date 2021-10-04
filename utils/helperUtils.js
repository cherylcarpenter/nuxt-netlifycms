export function getKeys(source) {
  const result = []
  for (const key in source) {
    result.push(key)
  }
  return {
    result
  }
}
