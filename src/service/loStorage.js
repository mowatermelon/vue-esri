'use strict'

const setItem = (name, value, type) => {
  if (type) {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(name, value)
}

const getItem = (name, type) => {
  let res = window.localStorage.getItem(name)
  if (res !== null) {
    if (!type) { // 为布尔值
      res = JSON.parse(res)
    }
  }
  return res
}

const initData = (init) => {
  for (let i = 0; i < init.length; i++) {
    if (window.localStorage.getItem(init[i].name) === null) {
      setItem(init[i].name, init[i].value, init[i].type)
    }
  }
}

export default {initData, setItem, getItem}
