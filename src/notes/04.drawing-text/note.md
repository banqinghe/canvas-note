# 绘制文本

## 基本绘制

- `fillText()` 和 `strokeText()`
- 文本坐标是**左下角**
- 字太小 stroke 效果很差

## 有样式的文本

- `font`，和 CSS [font](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font) 属性相同
- `textAlign`
- `[textBaseline](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/textBaseline)`，文字垂直对齐方式
- `direction`

## 测量文本

- `ctx.measureText("foo");` 可获取文本信息对象 [TextMetrics](https://developer.mozilla.org/zh-CN/docs/Web/API/TextMetrics)
