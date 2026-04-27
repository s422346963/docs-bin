# CSS 理论知识点

## 简介

CSS（Cascading Style Sheets）是用于描述 HTML 文档样式的语言。

## 基本语法

```css
/* 选择器 */
selector {
  /* 属性: 值; */
  property: value;
  /* 多个属性 */
  property1: value1;
  property2: value2;
}
```

## 选择器

### 基本选择器

- **元素选择器**：`p { color: red; }`
- **类选择器**：`.class { font-size: 14px; }`
- **ID 选择器**：`#id { background: blue; }`
- **通配选择器**：`* { margin: 0; padding: 0; }`

### 组合选择器

- **后代选择器**：`div p { color: green; }`
- **子选择器**：`div > p { color: green; }`
- **相邻兄弟选择器**：`div + p { color: green; }`
- **通用兄弟选择器**：`div ~ p { color: green; }`

### 伪类选择器

- `:hover`：鼠标悬停时
- `:active`：元素被激活时
- `:focus`：元素获得焦点时
- `:first-child`：第一个子元素
- `:last-child`：最后一个子元素
- `:nth-child(n)`：第 n 个子元素

### 伪元素选择器

- `::before`：在元素前插入内容
- `::after`：在元素后插入内容
- `::first-line`：元素的第一行
- `::first-letter`：元素的第一个字母

## 盒模型

```css
/* 标准盒模型 */
box-sizing: content-box;

/* 怪异盒模型（IE盒模型） */
box-sizing: border-box;
```

盒模型组成：

- 内容（content）
- 内边距（padding）
- 边框（border）
- 外边距（margin）

## 定位

```css
/* 静态定位（默认） */
position: static;

/* 相对定位 */
position: relative;

/* 绝对定位 */
position: absolute;

/* 固定定位 */
position: fixed;

/* 粘性定位 */
position: sticky;
```

## 浮动

```css
float: left;
float: right;
float: none;
```

### 清除浮动

```css
/* 方法1：clear属性 */
.clear {
  clear: both;
}

/* 方法2：伪元素清除 */
.clearfix::after {
  content: '';
  display: table;
  clear: both;
}
```

## 弹性布局

```css
/* 容器属性 */
.container {
  display: flex;
  flex-direction: row; /* row, column, row-reverse, column-reverse */
  justify-content: flex-start; /* flex-start, flex-end, center, space-between, space-around */
  align-items: stretch; /* stretch, flex-start, flex-end, center, baseline */
  flex-wrap: nowrap; /* nowrap, wrap, wrap-reverse */
}

/* 项目属性 */
.item {
  flex: 1; /* flex-grow, flex-shrink, flex-basis */
  order: 0;
  align-self: auto;
}
```

## 网格布局

```css
/* 容器属性 */
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 200px;
  grid-gap: 10px;
}

/* 项目属性 */
.item {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
```

## 响应式设计

### 媒体查询

```css
/* 移动设备 */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}

/* 平板设备 */
@media (min-width: 769px) and (max-width: 1024px) {
  .container {
    flex-direction: row;
  }
}

/* 桌面设备 */
@media (min-width: 1025px) {
  .container {
    flex-direction: row;
  }
}
```

### 相对单位

- `em`：相对于父元素的字体大小
- `rem`：相对于根元素的字体大小
- `vw`：视口宽度的 1%
- `vh`：视口高度的 1%
- `%`：相对于父元素的百分比

## 动画

### 过渡动画

```css
.transition {
  transition: property duration timing-function delay;
  /* 例如 */
  transition: all 0.3s ease-in-out;
}
```

### 关键帧动画

```css
/* 定义动画 */
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100px);
  }
}

/* 使用动画 */
.animation {
  animation: slide 2s ease-in-out infinite;
}
```

## 预处理器

### Sass/SCSS

```scss
// 变量
$primary-color: #3498db;

// 嵌套
.nav {
  ul {
    list-style: none;

    li {
      display: inline;

      a {
        color: $primary-color;
      }
    }
  }
}

// 混合
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// 继承
.button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
}

.primary-button {
  @extend .button;
  background-color: $primary-color;
  color: white;
}
```

### Less

```less
// 变量
@primary-color: #3498db;

// 嵌套
.nav {
  ul {
    list-style: none;

    li {
      display: inline;

      a {
        color: @primary-color;
      }
    }
  }
}

// 混合
.flex-center() {
  display: flex;
  justify-content: center;
  align-items: center;
}

// 继承
.button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
}

.primary-button {
  &:extend(.button);
  background-color: @primary-color;
  color: white;
}
```

## 最佳实践

1. **样式重置**：统一不同浏览器的默认样式
2. **模块化**：使用 BEM 命名规范或 CSS Modules
3. **性能优化**：减少选择器复杂度，避免使用!important
4. **可维护性**：组织好 CSS 文件结构
5. **响应式**：使用媒体查询和相对单位

## 常见问题

### CSS 优先级

1. 内联样式 > ID 选择器 > 类选择器 > 元素选择器
2. specificity（特异性）计算：内联样式(1000) > ID(100) > 类/伪类/属性(10) > 元素/伪元素(1)
3. 同优先级时，后写的样式覆盖先写的

### 垂直居中

```css
/* 方法1：flex */
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

/* 方法2：grid */
.container {
  display: grid;
  place-items: center;
  height: 100vh;
}

/* 方法3：position + transform */
.container {
  position: relative;
  height: 100vh;
}

.item {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### 清除浮动

```css
/* 方法1：clear属性 */
.clear {
  clear: both;
}

/* 方法2：伪元素清除 */
.clearfix::after {
  content: '';
  display: table;
  clear: both;
}

/* 方法3：overflow */
.container {
  overflow: hidden;
}
```
