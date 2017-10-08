/**
 * copy from docsify https://github.com/QingWei-Li/docsify
 */

/**
 * Create a cached version of a pure function.
 */
export function cached(fn) {
  const cache = Object.create(null)
  return function cachedFn(str) {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  }
}

/**
 * Perform no operation.
 */
export function noop() {}

/**
 * Check if value is function
 */
export function isFn(obj) {
  return typeof obj === 'function'
}