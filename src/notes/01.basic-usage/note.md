# Canvas 基本用法

## `<canvas>` 元素

- 应该使用 dom property (`width` 和 `height`) 来控制 canvas 元素大小。使用 CSS 改变 canvas 大小会导致图像的扭曲。
- 当浏览器不支持 `<canvas>` 标签时，可在标签内展示备用信息，如文本提示或备用图片。

## 渲染上下文

- 通过 `getContext` 可获取渲染上下文对象，用于绘制和处理要展示的内容。对于我们目前的 2D 绘制场景，使用的是通过 `getContext('2d')` 获取的 `CanvasRenderingContext2D` 对象。
- 检查 `getContext` 方法是否存在是验证浏览器是否支持 canvas 的手段。
