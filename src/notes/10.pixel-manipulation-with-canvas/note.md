# 像素操作

## ImageData 对象

- `ImageData` 对象有 3 个属性
  - `width`，图片宽度像素数
  - `height`，图片高度像素数
  - `data`，`Uint8ClampedArray` 类型的一维数组 RGBA 数据

## 创建 `ImageData` 空对象

- 使用 `createImageData()` 创建对象，默认为透明黑（数组全 0）

  ```javascript
  // 指定宽高
  const imageData = ctx.createImageData(width, height);

  // 用另一个 ImageData 做参数，宽高和该对象相同
  const imageData = ctx.createImageData(anotherImageData);
  ```

## 得到场景像素数据

- `getImageData()` 方法

  ```javascript
  const imageData = ctx.getImageData(left, top, width, height);
  ```

## 写入像素数据

- 可以用来对图像处理后重新绘制到画布上
- `putImageData(imageData, dx, dy)`
- `putImageData(imageData, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight)`
- 感觉和 `drawImage` 很类似

## 缩放和反锯齿

- 关闭 `imageSmoothingEnabled` 以看到清楚的像素

## 保存图片

- `canvas.toDataURL()`，默认保存为 png 格式，96 dpi（dpi为每英寸上像素数）。
- `canvas.toDataURL('image/jpeg', quality)`，保存为 jpg，`quality` 决定图像质量，0最差，1最好。
- `canvas.toBlob(callback, type, encoderOptions)` 创建 blob 对象
