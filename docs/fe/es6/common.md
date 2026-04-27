# ES6 常用知识

## 简介

ES6（ECMAScript 2015）是 JavaScript 的一个重要版本，引入了许多新特性，使代码更加简洁、易读和可维护。

## 1. 变量声明

### let 和 const

```javascript
// let 声明变量（块级作用域）
let name = 'John'
name = 'Jane' // 可以重新赋值

// const 声明常量（块级作用域）
const PI = 3.14
// PI = 3.1415; // 会报错，常量不能重新赋值

// 注意：const 声明的对象，其属性可以修改
const person = { name: 'John' }
person.name = 'Jane' // 可以修改
```

## 2. 箭头函数

```javascript
// 传统函数
function add(a, b) {
  return a + b
}

// 箭头函数
const add = (a, b) => a + b

// 带函数体的箭头函数
const add = (a, b) => {
  console.log('Adding...')
  return a + b
}

// 单个参数可以省略括号
const double = (x) => x * 2

// 无参数
const sayHello = () => console.log('Hello')
```

## 3. 模板字符串

```javascript
// 传统字符串拼接
const name = 'John'
const message = 'Hello, ' + name + '!'

// 模板字符串
const message = `Hello, ${name}!`

// 多行字符串
const multiLine = `
  Line 1
  Line 2
  Line 3
`
```

## 4. 解构赋值

### 对象解构

```javascript
const person = { name: 'John', age: 30 }

// 传统方式
const name = person.name
const age = person.age

// 解构赋值
const { name, age } = person

// 重命名
const { name: fullName, age } = person

// 默认值
const { name, age = 25 } = person
```

### 数组解构

```javascript
const numbers = [1, 2, 3, 4, 5]

// 传统方式
const first = numbers[0]
const second = numbers[1]

// 解构赋值
const [first, second] = numbers

// 跳过元素
const [first, , third] = numbers

// 剩余元素
const [first, ...rest] = numbers
```

## 5. 扩展运算符

```javascript
// 数组扩展
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const combined = [...arr1, ...arr2] // [1, 2, 3, 4, 5, 6]

// 对象扩展
const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }
const combined = { ...obj1, ...obj2 } // { a: 1, b: 2, c: 3, d: 4 }

// 函数参数
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0)
}
sum(1, 2, 3, 4, 5) // 15
```

## 6. 函数默认参数

```javascript
// 传统方式
function greet(name) {
  name = name || 'Guest'
  console.log(`Hello, ${name}!`)
}

// 默认参数
function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`)
}

// 复杂默认值
function createUser(name = 'Guest', age = 18, hobbies = ['reading']) {
  return { name, age, hobbies }
}
```

## 7. 类

```javascript
// 传统构造函数
function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`)
}

// ES6 类
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`)
  }

  static createAdult(name) {
    return new Person(name, 18)
  }
}

// 继承
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

## 8. 模块化

### 导出

```javascript
// 导出单个成员
export const name = 'John'
export function add(a, b) {
  return a + b
}

// 导出默认成员
export default class Person {
  constructor(name) {
    this.name = name
  }
}

// 批量导出
const age = 30
const city = 'New York'
export { age, city }
```

### 导入

```javascript
// 导入单个成员
import { name, add } from './module.js'

// 导入默认成员
import Person from './module.js'

// 导入所有成员
import * as utils from './module.js'

// 重命名导入
import { name as fullName } from './module.js'
```

## 9. Promise

```javascript
// 创建 Promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true
    if (success) {
      resolve('Data received')
    } else {
      reject('Error occurred')
    }
  }, 1000)
})

// 使用 Promise
promise
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
  .finally(() => console.log('Done'))

// Promise 链式调用
fetch('https://api.example.com/data')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
```

## 10. async/await

```javascript
// async 函数返回 Promise
async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data received')
    }, 1000)
  })
}

// 使用 await
async function main() {
  try {
    const data = await fetchData()
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

main()

// 并行执行
async function parallel() {
  const [data1, data2] = await Promise.all([fetchData(), fetchData()])
  console.log(data1, data2)
}
```

## 11. 数组方法

### map

```javascript
const numbers = [1, 2, 3, 4, 5]
const doubled = numbers.map((num) => num * 2) // [2, 4, 6, 8, 10]
```

### filter

```javascript
const numbers = [1, 2, 3, 4, 5]
const even = numbers.filter((num) => num % 2 === 0) // [2, 4]
```

### reduce

```javascript
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, num) => acc + num, 0) // 15
```

### forEach

```javascript
const numbers = [1, 2, 3, 4, 5]
numbers.forEach((num) => console.log(num))
```

### find

```javascript
const numbers = [1, 2, 3, 4, 5]
const found = numbers.find((num) => num > 3) // 4
```

### some

```javascript
const numbers = [1, 2, 3, 4, 5]
const hasEven = numbers.some((num) => num % 2 === 0) // true
```

### every

```javascript
const numbers = [1, 2, 3, 4, 5]
const allPositive = numbers.every((num) => num > 0) // true
```

## 12. Set 和 Map

### Set

```javascript
// 创建 Set
const set = new Set([1, 2, 3, 3, 4]) // 自动去重，结果: {1, 2, 3, 4}

// 添加元素
set.add(5)

// 删除元素
set.delete(1)

// 检查元素是否存在
set.has(2) // true

// 大小
set.size // 4

// 遍历
for (const item of set) {
  console.log(item)
}

// 转换为数组
const array = [...set]
```

### Map

```javascript
// 创建 Map
const map = new Map()

// 添加键值对
map.set('name', 'John')
map.set('age', 30)

// 获取值
map.get('name') // 'John'

// 检查键是否存在
map.has('name') // true

// 删除键值对
map.delete('age')

// 大小
map.size // 1

// 遍历
for (const [key, value] of map) {
  console.log(`${key}: ${value}`)
}

// 转换为对象
const obj = Object.fromEntries(map)
```

## 13. 其他特性

### 可选链操作符

```javascript
const person = { name: 'John', address: { city: 'New York' } }

// 传统方式
const city = person.address && person.address.city

// 可选链
const city = person.address?.city

// 可选链与函数调用
const result = person.method?.()
```

### 空值合并操作符

```javascript
// 传统方式
const name = user.name || 'Guest' // 会将空字符串、0等 falsy 值替换为 'Guest'

// 空值合并
const name = user.name ?? 'Guest' // 只替换 null 和 undefined
```

### 数值分隔符

```javascript
// 提高可读性
const billion = 1_000_000_000
const hex = 0xff_ff_ff
```

### 字符串方法

```javascript
// includes
'Hello'.includes('ell') // true

// startsWith
'Hello'.startsWith('He') // true

// endsWith
'Hello'.endsWith('lo') // true

// repeat
'Hello'.repeat(3) // 'HelloHelloHello'
```

## 最佳实践

1. **使用 let 和 const 代替 var**
2. **优先使用箭头函数**
3. **使用模板字符串**
4. **利用解构赋值**
5. **使用扩展运算符**
6. **使用默认参数**
7. **使用类语法**
8. **使用模块化**
9. **使用 Promise 和 async/await**
10. **利用数组方法**
