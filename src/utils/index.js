/**
 *  设置localStorage
 */
export const setStore = (name, val, time) => {
  window.localStorage.setItem(name, val)
}

export const getStore = (name) => {
  return window.localStorage.getItem(name)
}
