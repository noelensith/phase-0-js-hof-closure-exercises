function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr)
  }
}

function map(arr, callback) {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]))
  }
  return newArr
}

function filter(arr, callback) {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i]) === true) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

function every(array, callback) {
  for (let element of array) {
    if (!callback(element)) {
      return false
    }
  }
  return true
}

function some(array, callback) {
  for (let element of array) {
    if (callback(element)) {
      return true
    }
  }
  return false
}

function majority(array, callback) {
  let count = 0
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      count++
      if (count > array.length / 2) {
        return true
      }
    }
  }
  return false
}

function once(callback) {
  const _ = require('lodash');
  return _.once(callback)
}

function groupBy(array, callback) {
  const newObj = {}
  for (let el of array) {
    if (newObj[callback(el)]) {
      newObj[callback(el)].push(el)
    } else {
      newObj[callback(el)] = [el]
    }
  }
  return newObj
}

function arrayToObject(array, callback) {
  const newObj = {}
  for (let el of array) {
    newObj[el] = callback(el)
  }
  return newObj
}

module.exports = {
  forEach,
  map,
  filter,
  every,
  some,
  majority,
  once,
  groupBy,
  arrayToObject,
};
