# HTML 理论知识点

## 简介

HTML（HyperText Markup Language）是用于创建网页的标准标记语言。

## 基本结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>页面标题</title>
  </head>
  <body>
    <h1>标题</h1>
    <p>段落内容</p>
  </body>
</html>
```

## 常用标签

### 文本标签

- `<h1>` 到 `<h6>`：标题标签，级别从高到低
- `<p>`：段落标签
- `<span>`：行内标签
- `<div>`：块级容器
- `<strong>`：强调（粗体）
- `<em>`：强调（斜体）
- `<br>`：换行
- `<hr>`：水平线

### 链接和图像

- `<a href="url">链接文本</a>`：超链接
- `<img src="image.jpg" alt="描述">`：图像

### 列表

- `<ul>`：无序列表
- `<ol>`：有序列表
- `<li>`：列表项

### 表格

```html
<table>
  <thead>
    <tr>
      <th>表头1</th>
      <th>表头2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>数据1</td>
      <td>数据2</td>
    </tr>
  </tbody>
</table>
```

### 表单

```html
<form action="/submit" method="post">
  <input type="text" name="username" placeholder="用户名" />
  <input type="password" name="password" placeholder="密码" />
  <input type="submit" value="提交" />
</form>
```

## HTML5 新特性

- **语义化标签**：`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- **表单增强**：新的输入类型（email, tel, url, number, date 等）
- **媒体元素**：`<audio>`, `<video>`
- **Canvas**：用于绘图
- **SVG**：可缩放矢量图形
- **本地存储**：localStorage, sessionStorage
- **Web Workers**：后台脚本运行
- **Geolocation**：地理位置

## 最佳实践

1. **语义化**：使用合适的标签表达内容含义
2. **响应式**：使用媒体查询和弹性布局
3. **可访问性**：确保所有用户都能访问内容
4. **性能**：优化 HTML 结构，减少不必要的标签
5. **SEO**：合理使用标题标签，添加 meta 标签

## 常见问题

### DOCTYPE 的作用

`<!DOCTYPE html>` 声明文档类型，告诉浏览器使用哪个 HTML 版本的规范来解析页面。

### meta 标签的作用

meta 标签用于提供页面的元数据，如字符集、视口设置、页面描述等。

### 语义化的好处

- 提高代码可读性
- 有利于 SEO
- 改善可访问性
- 便于维护

### HTML 与 XHTML 的区别

- HTML 是宽松的，XHTML 是严格的 XML 格式
- XHTML 要求所有标签必须闭合
- XHTML 要求所有属性必须使用引号
- XHTML 要求所有标签必须小写
