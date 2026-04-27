# TypeScript 编译配置

## 简介

TypeScript 的编译配置是通过 `tsconfig.json` 文件来控制的，它决定了 TypeScript 编译器如何编译你的代码。合理的配置可以提高开发效率和代码质量。

## 基本配置

### 最小化配置

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

### 常用配置项

| 配置项             | 说明                     | 默认值           |
| ------------------ | ------------------------ | ---------------- |
| `target`           | 指定 ECMAScript 目标版本 | `es3`            |
| `module`           | 指定模块系统             | `commonjs`       |
| `lib`              | 指定要包含的库文件       | 取决于 target    |
| `outDir`           | 编译输出目录             | 与源文件相同目录 |
| `rootDir`          | 源文件根目录             | 自动计算         |
| `strict`           | 启用所有严格类型检查     | `false`          |
| `esModuleInterop`  | 启用 ES 模块互操作性     | `false`          |
| `moduleResolution` | 模块解析策略             | `node`           |
| `declaration`      | 生成 .d.ts 文件          | `false`          |
| `sourceMap`        | 生成 source map 文件     | `false`          |
| `removeComments`   | 移除注释                 | `false`          |
| `noImplicitAny`    | 禁止隐式 any 类型        | `false`          |
| `strictNullChecks` | 严格的 null 检查         | `false`          |

## 详细配置

### 编译器选项

```json
{
  "compilerOptions": {
    /* 基本选项 */
```
