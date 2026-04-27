# TypeScript 基础知识

## 简介

TypeScript 是 JavaScript 的超集，添加了静态类型系统和其他特性，使代码更加健壮和可维护。

## 安装

```bash
# 使用 npm
npm install -g typescript

# 使用 yarn
yarn global add typescript

# 使用 pnpm
pnpm add -g typescript
```

## 编译

```bash
# 编译单个文件
tscc hello.ts

# 编译并运行
tscc hello.ts && node hello.js

# 监视模式
tscc --watch hello.ts
```

## 基础类型

### 原始类型

```typescript
// 字符串
let name: string = 'John'

// 数字
let age: number = 30

// 布尔值
let isActive: boolean = true

// 空值
let voidValue: void = undefined

// null
let nullValue: null = null

// undefined
let undefinedValue: undefined = undefined

// 任意类型
let anyValue: any = 'Hello'
anyValue = 42
anyValue = true
```

### 数组类型

```typescript
// 数字数组
let numbers: number[] = [1, 2, 3, 4, 5]

// 字符串数组
let names: string[] = ['John', 'Jane', 'Bob']

// 泛型数组
let values: Array<number> = [1, 2, 3, 4, 5]
```

### 元组类型

```typescript
// 元组类型
let person: [string, number] = ['John', 30]

// 访问元素
let name: string = person[0]
let age: number = person[1]

// 越界元素会被推断为联合类型
person.push('New York') // 可以
```

### 枚举类型

```typescript
// 数字枚举
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let dir: Direction = Direction.Up // 0

// 字符串枚举
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

let dir: Direction = Direction.Up // 'UP'

// 常量枚举
const enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```

### 联合类型

```typescript
// 联合类型
let value: string | number
value = 'Hello'
value = 42

// 类型保护
if (typeof value === 'string') {
  console.log(value.toUpperCase())
} else {
  console.log(value.toFixed())
}
```

### 类型别名

```typescript
// 类型别名
type Age = number
type Name = string
type Person = {
  name: Name
  age: Age
}

let person: Person = {
  name: 'John',
  age: 30,
}
```

### 接口

```typescript
// 接口
interface Person {
  name: string
  age: number
  // 可选属性
  address?: string
  // 只读属性
  readonly id: number
}

let person: Person = {
  name: 'John',
  age: 30,
  id: 1,
}

// 接口继承
interface Employee extends Person {
  employeeId: number
  position: string
}

// 函数接口
interface GreetFunction {
  (name: string): string
}

let greet: GreetFunction = function (name: string): string {
  return `Hello, ${name}!`
}
```

## 函数

### 函数声明

```typescript
// 函数声明
function add(a: number, b: number): number {
  return a + b
}

// 函数表达式
const add = function (a: number, b: number): number {
  return a + b
}

// 箭头函数
const add = (a: number, b: number): number => a + b
```

### 可选参数

```typescript
function greet(name: string, message?: string): string {
  if (message) {
    return `Hello, ${name}! ${message}`
  }
  return `Hello, ${name}!`
}
```

### 默认参数

```typescript
function greet(name: string, message: string = 'How are you?'): string {
  return `Hello, ${name}! ${message}`
}
```

### 剩余参数

```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0)
}
```

### 函数重载

```typescript
// 函数重载
function format(value: string): string
function format(value: number): string
function format(value: string | number): string {
  if (typeof value === 'string') {
    return value.toUpperCase()
  }
  return value.toFixed(2)
}
```

## 类

```typescript
// 类
class Person {
  // 属性
  private name: string
  protected age: number
  public readonly id: number

  // 构造函数
  constructor(name: string, age: number, id: number) {
    this.name = name
    this.age = age
    this.id = id
  }

  // 方法
  getName(): string {
    return this.name
  }

  setName(name: string): void {
    this.name = name
  }

  // 静态方法
  static createPerson(name: string, age: number, id: number): Person {
    return new Person(name, age, id)
  }
}

// 继承
class Student extends Person {
  private grade: string

  constructor(name: string, age: number, id: number, grade: string) {
    super(name, age, id)
    this.grade = grade
  }

  getGrade(): string {
    return this.grade
  }
}
```

## 泛型

```typescript
// 泛型函数
function identity<T>(value: T): T {
  return value
}

let result1 = identity<string>('Hello')
let result2 = identity<number>(42)

// 泛型类
class Box<T> {
  private value: T

  constructor(value: T) {
    this.value = value
  }

  getValue(): T {
    return this.value
  }
}

let box1 = new Box<string>('Hello')
let box2 = new Box<number>(42)

// 泛型接口
interface Pair<T, U> {
  first: T
  second: U
}

let pair: Pair<string, number> = {
  first: 'John',
  second: 30,
}
```

## 类型断言

```typescript
// 类型断言
let value: any = 'Hello'
let length: number = (value as string).length

// 另一种语法
let length: number = (<string>value).length
```

## 类型守卫

```typescript
// 类型守卫
function isString(value: any): value is string {
  return typeof value === 'string'
}

function processValue(value: string | number) {
  if (isString(value)) {
    console.log(value.toUpperCase())
  } else {
    console.log(value.toFixed())
  }
}

// instanceof 类型守卫
class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof!')
  }
}

function processAnimal(animal: Animal) {
  if (animal instanceof Dog) {
    animal.bark()
  }
}
```

## 模块

### 导出

```typescript
// 导出变量
export const PI = 3.14

// 导出函数
export function add(a: number, b: number): number {
  return a + b
}

// 导出类
export class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

// 导出默认
export default function greet(name: string): string {
  return `Hello, ${name}!`
}

// 批量导出
const age = 30
const city = 'New York'
export { age, city }
```

### 导入

```typescript
// 导入单个成员
import { PI, add, Person } from './module'

// 导入默认成员
import greet from './module'

// 导入所有成员
import * as utils from './module'

// 重命名导入
import { PI as π } from './module'
```

## 命名空间

```typescript
// 命名空间
namespace MathUtils {
  export const PI = 3.14

  export function add(a: number, b: number): number {
    return a + b
  }

  export function subtract(a: number, b: number): number {
    return a - b
  }
}

// 使用命名空间
console.log(MathUtils.PI)
console.log(MathUtils.add(1, 2))
```

## 类型声明文件

### 内置类型声明

TypeScript 为 JavaScript 内置对象和标准库提供了类型声明文件，如 `lib.es5.d.ts`、`lib.dom.d.ts` 等。

### 第三方库类型声明

```bash
# 安装第三方库的类型声明
npm install --save-dev @types/react
npm install --save-dev @types/node
```

### 自定义类型声明

```typescript
// custom.d.ts
declare module '*.svg' {
  const content: any
  export default content
}

declare global {
  interface Window {
    myCustomProperty: string
  }
}
```

## 配置文件

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

## 最佳实践

1. **使用严格模式**：在 `tsconfig.json` 中设置 `"strict": true`
2. **避免使用 any**：尽量使用具体的类型
3. **使用接口和类型别名**：提高代码可读性
4. **利用泛型**：编写可复用的代码
5. **使用类型守卫**：安全地处理联合类型
6. **合理使用访问修饰符**：控制类的成员访问
7. **编写类型声明文件**：为第三方库添加类型
8. **使用 eslint**：结合 TypeScript 规则

## 常见问题

### 类型推断

TypeScript 会根据上下文自动推断类型，减少显式类型标注。

```typescript
// 类型推断
let name = 'John' // 推断为 string
let age = 30 // 推断为 number
```

### 类型兼容性

TypeScript 使用结构类型系统，只要两个类型的结构兼容，就可以互相赋值。

```typescript
interface Person {
  name: string
  age: number
}

interface Employee {
  name: string
  age: number
  employeeId: number
}

let person: Person = { name: 'John', age: 30 }
let employee: Employee = { name: 'Jane', age: 25, employeeId: 1 }

person = employee // 可以，因为 employee 包含 person 的所有属性
// employee = person; // 不可以，因为 person 缺少 employeeId 属性
```

### 类型断言 vs 类型转换

类型断言只是告诉 TypeScript 编译器某个值的类型，不会在运行时进行类型转换。

```typescript
let value: any = 'Hello'
let length: number = (value as string).length // 类型断言

let num: string = '42'
let parsed: number = parseInt(num) // 运行时类型转换
```
