# JavaScript 基础知识

## 简介

JavaScript 是一种广泛使用的脚本语言，主要用于网页交互。

## 基础语法

### 变量声明

```javascript
// 使用 var 声明变量
var name = 'John'

// 使用 let 声明变量（ES6+）
let age = 30

// 使用 const 声明常量（ES6+）
const PI = 3.14
```

### 数据类型

- **原始类型**：String, Number, Boolean, Null, Undefined, Symbol, BigInt
- **引用类型**：Object, Array, Function, Date, RegExp 等

## 函数

```javascript
// 函数声明
function add(a, b) {
  return a + b
}

// 函数表达式
const multiply = function (a, b) {
  return a * b
}

// 箭头函数（ES6+）
const divide = (a, b) => a / b
```

## 面向对象

```javascript
// 构造函数
function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`)
}

// 类语法（ES6+）
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age)
    this.grade = grade
  }

  study() {
    console.log(`${this.name} is studying`)
  }
}
```

## 异步编程

### 回调函数

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback('Data received')
  }, 1000)
}

fetchData((data) => {
  console.log(data)
})
```

### Promise

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data received')
    }, 1000)
  })
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
```

### async/await（ES8+）

```javascript
async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data received')
    }, 1000)
  })
}

async function main() {
  try {
    const data = await fetchData()
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

main()
```
