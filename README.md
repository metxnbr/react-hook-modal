# react-hook-modal

Created with CodeSandbox

## Introduce

使用`react-hook`编写的一个`Modal`组件, 灵活易用, 可自定义弹窗位置, 遮罩层颜色和透明度

并没有使用`flex`布局, 这意味着可以兼容更多布局

利用`useLayoutEffect`优化了弹窗的交互, 设置弹窗弹出, 浏览器窗口禁止滚动, 弹窗关闭, 则恢复

该组件只提供弹窗包裹, 弹窗交互, 具体弹窗需要自己编写定制

## Roadmap

- [x] 可自定义弹窗位置, 默认水平垂直都居中
- [x] 定义遮罩层颜色和透明度
- [x] 增加动画效果

## 使用依赖

- 新的`react`版本, 支持`hook`
- 支持`css module`