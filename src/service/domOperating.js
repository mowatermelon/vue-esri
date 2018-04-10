/*
 * @Author: wu Eva
 * @Date: 2018-04-10 11:33:17
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-04-10 19:11:06
 */

/**
 * 不对外暴露的内置函数------------------------------------------------------------------------------------------------------------------------- start
*/

  /**
   * 判断对象是否是通过选择器获取到的HTML元素
   * @param {elm}  elm 通过选择器获取到的元素，必选，且是正确的元素，则返回父级元素的后代查询选择效果。
   * @return {Boolean} res 返回值，布尔值，返回值为真，则说明对象是的，反之，则不是
  */
  const checkELm = (elm) => {
    return elm !== undefined && elm.nodeName !== undefined && elm.innerText.length > 0
  }

  /**
   * 通过元素选择器来获取HTML元素
   * @param {String}  selector  需要进行选择的选择器，必选。
   * @param {String}  cls  元素的所包含的class，必选。
   * @param {elm}  elm 通过选择器获取到的父级元素，非必选，如果不为空，且是正确的元素，则返回父级元素的后代查询选择效果。
   * @return {elm} elm 返回值，HTML 元素
  */
  const getByQuery = (selector, elm) => {
    let res = null
    // 判断是否为dom元素，判断这个dom元素是否存在子元素
    if (checkELm(elm)) {
      res = elm.querySelectorAll(selector) || []
    } else {
      // 如果判断不符合标准，则返回全局查找对象
      res = document.querySelectorAll(selector) || []
    }
    return res
  }

/**
 * 不对外暴露的内置函数------------------------------------------------------------------------------------------------------------------------- end
*/

/**
 * 修改或者获取HTML元素相关------------------------------------------------------------------------------------------------------------------------- start
*/

  /**
   * 通过元素id来获取HTML元素
   * @param {String}  id  元素的唯一id，必选。
   * @return {elm} 返回值，HTML 元素
  */
  export const getById = (id) => {
    return document.getElementById(id)
  }

  /**
   * 通过元素class来获取HTML元素
   * @param {String}  cls  元素的所包含的class，必选。
   * @return {elm} 返回值，HTML 元素
  */
  export const getByClass = (cls) => {
    return document.getElementsByClassName(cls)
  }
  /**
   * 通过元素tag标签来获取HTML元素，性能较低请注意
   * @param {String}  tag  元素的tag标签名，必选。
   * @return {elm} 返回值，HTML 元素
  */
  export const getByTag = (tag) => {
    return getByQuery(tag)
  }

  /**
   * 通过HTML元素属性查询元素，性能较低请注意
   * @param {String}  attr  元素的所包含的属性名，必选。
   *                  形如 a[target=_blank]，tag加上属性限制
   * @return {elm} 返回值，HTML 元素
  */
  export const getByAttr = (attr) => {
    return getByQuery(attr)
  }

  /**
   * 查询HTML元素的前置元素
   * @param {elm}  elm 通过选择器获取到的HTML 元素
   * @return {elm} 返回值，HTML 元素
  */
  export const getElmPrev = (elm) => {
    let res = null
    if (checkELm(elm)) {
      res = elm.previousElementSibling
    }

    return res
  }

  /**
   * 查询HTML元素的后置元素
   * @param {elm}  elm 通过选择器获取到的HTML 元素
   * @return {elm} 返回值，HTML 元素
  */
  export const getElmNext = (elm) => {
    let res = null
    if (checkELm(elm)) {
      res = elm.nextElementSibling
    }

    return res
  }

  /**
   * 查询HTML元素的后代元素，性能较低请注意
   * @param {elm}  elm 通过选择器获取到的HTML 元素
   * @param {String}  selector  后代元素的所包含的属性名，必选。
   * @return {elm} 返回值，HTML 元素
  */
  export const getElmChild = (elm, selector) => {
    return getByQuery(selector, elm)
  }

  /**
   * Closest 获得匹配选择器的第一个祖先元素，从当前元素开始沿 DOM 树向上。
   * @param {elm}  elm 通过选择器获取到的HTML 元素
   * @param {String}  selector  后代元素的所包含的属性名，必选。
   * @return {elm} 返回值，HTML 元素
  */
  export const getElmClosest = (elm, selector) => {
    const matchesSelector = elm.matches || elm.webkitMatchesSelector || elm.mozMatchesSelector || elm.msMatchesSelector

    while (elm) {
      if (matchesSelector.call(elm, selector)) {
        return elm
      } else {
        elm = elm.parentElement
      }
    }
    return null
  }

  /**
   * ParentsUntil 获取当前每一个匹配元素集的祖先，不包括匹配元素的本身。
   * @param {elm}  elm 通过选择器获取到的HTML 元素
   * @param {String}  selector  后代元素的所包含的属性名，必选。
   * @param {Condition}  filter  寻找祖先元素的过滤条件。
   * @return {Array} 返回值，HTML 元素集合
  */
  export const getElmPUntil = (elm, selector, filter) => {
    const result = []
    if (checkELm(elm)) {
      const matchesSelector = elm.matches || elm.webkitMatchesSelector || elm.mozMatchesSelector || elm.msMatchesSelector

      // match start from parent
      elm = elm.parentElement
      while (elm && !matchesSelector.call(elm, selector)) {
        if (!filter) {
          result.push(elm)
        } else {
          if (matchesSelector.call(elm, filter)) {
            result.push(elm)
          }
        }
        elm = elm.parentElement
      }
    }

    return result
  }

  /**
   * Append 插入到子节点的末尾
   * @param {elm}  elm 通过选择器获取到的HTML 元素
   * @param {String}  content  需要设置的值，必选。
   * @param {Number}  type  需要插入内容的类型，必选。
   *      0：HTML string    1：Native Element
   * @return {Boolean} 返回值，是否执行成功
  */
  export const appendElm = (elm, content, type) => {
    let res = false
    if (checkELm(elm)) {
      if (type === 0 && typeof content === 'string') {
        elm.insertAdjacentHTML('beforeend', content)
        res = true
      } else if (type === 1 && checkELm(content)) {
        elm.appendChild(content)
        res = true
      }
    }

    return res
  }

  /**
   * Append 插入到子节点的末尾
   * @param {elm}  elm 通过选择器获取到的HTML 元素
   * @param {String}  content  需要设置的值，必选。
   * @param {Number}  type  需要插入内容的类型，必选。
   *      0：HTML string    1：Native Element
   * @return {Boolean} 返回值，是否执行成功
  */
  export const prependElm = (elm, content, type) => {
    let res = false
    if (checkELm(elm)) {
      if (type === 0 && typeof content === 'string') {
        elm.insertAdjacentHTML('afterbegin', content)
        res = true
      } else if (type === 1 && checkELm(content)) {
        elm.insertBefore(content, elm.firstChild)
        res = true
      }
    }

    return res
  }

  /**
   * insertBefore 在选中元素前插入新节点
   * @param {elm}  elm 通过选择器获取到的HTML 元素
   * @param {String}  content  需要设置的值，必选。
   * @param {Number}  type  需要插入内容的类型，必选。
   *      0：HTML string    1：Native Element
   * @return {Boolean} 返回值，是否执行成功
  */
  export const insertBeforeElm = (elm, content, type) => {
    let res = false
    if (checkELm(elm)) {
      if (type === 0 && typeof content === 'string') {
        elm.insertAdjacentHTML('beforebegin', content)
        res = true
      } else if (type === 1 && checkELm(content)) {
        if (elm.parentNode) {
          elm.parentNode.insertBefore(content, elm)
          res = true
        }
      }
    }

    return res
  }

  /**
   * insertBefore 在选中元素前插入新节点
   * @param {elm}  elm 通过选择器获取到的HTML 元素
   * @param {String}  content  需要设置的值，必选。
   * @param {Number}  type  需要插入内容的类型，必选。
   *      0：HTML string    1：Native Element
   * @return {Boolean} 返回值，是否执行成功
  */
  export const insertAfterElm = (elm, content, type) => {
    let res = false
    if (checkELm(elm)) {
      if (type === 0 && typeof content === 'string') {
        elm.insertAdjacentHTML('afterend', content)
        res = true
      } else if (type === 1 && checkELm(content)) {
        if (elm.parentNode) {
          elm.parentNode.insertBefore(content, elm.nextSibling)
          res = true
        }
      }
    }

    return res
  }

/**
 * 修改或者获取HTML元素相关------------------------------------------------------------------------------------------------------------------------- end
*/

/**
 * 修改或者获取HTML元素内容相关------------------------------------------------------------------------------------------------------------------------- start
*/

  /**
   * 获取Form Input/Textarea的内容值
   * @param {String}  selector  后代元素的所包含的属性名，必选。
   * @return {elm} 返回值，对应的value值
  */
  export const getFValue = (selector) => {
    let res = ''
    const temp = getByQuery(selector)
    if (temp.length !== 0) {
      res = temp.value
    }
    return res
  }

  /**
   * 获取Form Input/Textarea的内容值
   * @param {String}  selector  必须能选择到元素的选择器，必选。
   * @param {String}  val  需要设置的值，必选。
   * @return {Boolean} 返回值，是否执行成功
  */
  export const setFValue = (selector, val) => {
    let res = false
    const oldVal = getFValue(selector)
    const temp = getByQuery(selector)
    if (temp.length !== 0 && val !== oldVal) {
      temp.value = val
      res = true
    }
    return res
  }

  /**
   * 获取元素的属性
   * @param {elm}  elm 通过选择器获取到的HTML 元素，必选。
   * @param {String}  attr  元素的所包含的属性名，必选。
   * @return {attr} 返回值，获取到的元素属性
  */
  export const getElmAttr = (elm, attr) => {
    let res = null
    if (checkELm(elm)) {
      res = elm.getAttribute(attr)
    }
    return res
  }

  /**
   * 获取元素的属性
   * @param {elm}  elm 通过选择器获取到的HTML 元素，必选。
   * @param {String}  attr  元素的所包含的属性名，必选。
   * @param {String}  val  想要设置的值，必选。
   * @return {Boolean} 返回值，是否执行成功
  */
  export const setElmAttr = (elm, attr, val) => {
    let res = false
    if (checkELm(elm)) {
      const oldVal = getElmAttr(elm, attr)
      if (val !== oldVal) {
        elm.value = val
        res = true
      }
    }

    return res
  }

  /**
   * 获取到页面最外层的Document的宽度
   * @return {Number} 返回值，获取到的宽度值
  */
  export const getDocW = () => {
    const body = document.body
    const html = document.documentElement
    const width = Math.max(
      body.offsetWidth,
      body.scrollWidth,
      html.clientWidth,
      html.offsetWidth,
      html.scrollWidth
    )
    return width
  }

  /**
   * 获取到页面最外层的Document height的高度
   * @return {Number} 返回值，获取到的高度值
  */
  export const getDocH = () => {
    const body = document.body
    const html = document.documentElement
    const height = Math.max(
      body.offsetHeight,
      body.scrollHeight,
      html.clientHeight,
      html.offsetHeight,
      html.scrollHeight
    )
    return height
  }

  /**
   * 获取到页面window的宽度
   * @param {Boolean} type 是否包含滚动条的宽度，必选。
   * @return {Number} 返回值，获取到的宽度值
  */
  export const getWinW = (type) => {
    let res = 0
    type = type || false
    if (type) {
      // 含 scrollbar
      res = window.document.documentElement.clientWidth
    } else {
      // 不含 scrollbar，与 jQuery 行为一致
      res = window.innerWidth
    }
    return res
  }

  /**
   * 获取到页面window的高度
   * @param {Boolean} type 是否包含滚动条的高度，必选。
   * @return {Number} 返回值，获取到的宽度值
  */
  export const getWinH = (type) => {
    let res = 0
    type = type || false
    if (type) {
      // 含 scrollbar
      res = window.document.documentElement.clientHeight
    } else {
      // 不含 scrollbar，与 jQuery 行为一致
      res = window.innerHeight
    }
    return res
  }

  /**
   * 获取元素的html内容
   * @param {elm}  elm 通过选择器获取到的HTML 元素，必选。
   * @return {attr} 返回值，获取到的元素属性
  */
  export const getElmIHTML = (elm) => {
    let res = null
    if (checkELm(elm)) {
      res = elm.innerHTML
    }
    return res
  }

  /**
   * 修改元素的html内容
   * @param {elm}  elm 通过选择器获取到的HTML 元素，必选。
   * @param {String}  val  想要设置的值，必选。
   * @return {Boolean} 返回值，元素的包含的html内容
  */
  export const setElmIHTML = (elm, val) => {
    let res = false
    if (checkELm(elm)) {
      const oldVal = getElmIHTML(elm)
      if (val !== oldVal) {
        elm.innerHTML = val
        res = true
      }
    }

    return res
  }

/**
 * 修改或者获取HTML元素内容相关------------------------------------------------------------------------------------------------------------------------- end
*/

/**
 * 修改或者获取HTML元素样式相关------------------------------------------------------------------------------------------------------------------------- start
*/

/**
 * 给元素添加样式
 * @param {elm}  elm 通过选择器获取到的HTML 元素，必选。
 * @param {String}  className  需要添加的className，必选。
 * @return {Boolean} 返回值，是否执行成功
*/
  export const addClass = (elm, className) => {
    let res = false
    if (checkELm(elm)) {
      elm.classList.add(className)
      res = true
    }
    return res
  }

  /**
   * 给元素移除样式
   * @param {elm}  elm 通过选择器获取到的HTML 元素，必选。
   * @param {String}  className  需要移除的className，必选。
   * @return {Boolean} 返回值，是否执行成功
  */
  export const removeClass = (elm, className) => {
    let res = false
    if (checkELm(elm)) {
      elm.classList.remove(className)
      res = true
    }
    return res
  }

  /**
   * 判断元素是否包含某个样式
   * @param {elm}  elm 通过选择器获取到的HTML 元素，必选。
   * @param {String}  className  需要查询的className，必选。
   * @return {Boolean} 返回值，是否执行成功
  */
  export const hasClass = (elm, className) => {
    let res = false
    if (checkELm(elm)) {
      res = elm.classList.contains(className)
    }
    return res
  }

  /**
   * 动态切换元素样式
   * @param {elm}  elm 通过选择器获取到的HTML 元素，必选。
   * @param {String}  className  需要切换的className，必选。
   * @return {Boolean} 返回值，是否执行成功
  */
  export const toggleClass = (elm, className) => {
    let res = false
    if (checkELm(elm)) {
      elm.classList.toggle(className)
      res = hasClass(elm, className)
    }
    return res
  }

/**
 * 修改或者获取HTML元素样式相关------------------------------------------------------------------------------------------------------------------------- start
*/

  export default {}
