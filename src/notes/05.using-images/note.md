# 使用图片

使用图片有 2 步：

1. 获得图片源
2. `drawImage()`

## 获得图片

- 图片源
  1. `HTMLImageElement` （`new Image()` or `document.createElement('img')`）
  2. `HTMLVideoElement`
  3. `HTMLCanvasElement`
  4. `ImageBitmap`

- 一般在图片 load 之后 `drawImage`，否则什么都不会发生

## 绘制图片

- `drawImage(image, x, y)`
- `drawImage(image, x, y, width, height)`，规定宽高，缩放图像。图像会被拉扯变形。
- `drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)`，将图片截取一部分，然后绘制在 canvas 上。参数列表中 s 表示 source， d 表示 destination，这样理解。

## 缩放行为

- `ctx.imageSmoothingEnabled` 控制图像缩放是否平滑，默认为 `true`。
