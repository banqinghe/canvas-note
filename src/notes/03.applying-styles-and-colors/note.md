# 使用样式和颜色

## 色彩 colors

- 使用 `fillStyle` 设置图形填充颜色
- 使用 `strokeStyle` 设置图形轮廓颜色
- 如果需要给图形设不同颜色，需要重新设置 `fillStyle`/`strokeStyle`

## 透明度 Transparency

- `context.globalAlpha` 控制图形透明度，有效值为 [0, 1], 0 表示完全透明，1 为不透明
- 使用 `rgba()` 也可以实现透明效果，灵活性更好一些

## [线形 Line Styles](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#line_styles)

- 如果坐标是整数，奇数宽度线都是模糊的，因为线是沿着坐标两边绘制的。
- `lineCap` 规定线的末端样式。 有 3 个取值，`butt`，`square`，`round`，默认为 `butt`。
- `lineJoin` 规定线条拼接处样式，3 个取值 `round`，`bevel`，`miter`，默认为 `miter`。
- `miterLength` 应用于 `miter` 效果，限制交点距离。

## 虚线

- `setLineDash` 接收数组，指定线段与间隙的交替。
- `lineDashOffset` 属性设置起始偏移量。

## 渐变 Gradients

- 创建渐变颜色的步骤
  1. 创建 `canvasGradient` 对象（使用 `createLinearGradient(x1, y1, x2, y2)` 或 `createRadialGradient(x1, y1, r1, x2, y2, r2)` ）
  2. 上色

    ```javascript
    const linearGradient = ctx.createLinearGradient(0, 0, 150, 150);
    linearGradient.addColorStop(0, 'white');
    linearGradient.addColorStop(1, 'black');
    ```

  3. 赋值给 `fillStyle` 或 `strokeStyle`

  ```javascript
  ctx.fillStyle = linearGradient;
  ```

## 图案样式 Patterns

- 将 canvas 或 Image 作为 `fillStyle` 或 `strokeStyle`
- 用 Image 做参数做不到缩放，可以🧵将图片 drawImage，再讲 canvas 作为参数

## 阴影 Shadows

- 和 CSS 的 `box-shadow` 差不多。包含 x/y 轴偏移（`shadowOffsetX`，`shadowOffsetY`），模糊（`shadowBlur`），颜色（`shadowColor`）。

## 填充规则

- `fill()` 可以接受两种填充规则。'nonzero' 非零环绕规则、'evenodd' 奇偶环绕规则。
- 两种规则的通俗解释看这里 [搞懂SVG/Canvas中nonzero和evenodd填充规则](https://www.zhangxinxu.com/wordpress/2018/10/nonzero-evenodd-fill-mode-rule/)
- 原来不是很懂圆形为什么分两种绘制方向，看来这里就起到作用了。
