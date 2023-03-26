# 点击区域和无障碍访问

## 内容兼容

- `<canvas>` 标签内的内容可以对不支持 canvas 的浏览器展示信息，也可用于屏幕阅读器。

## ARIA 原则

- 在 `<canvas>` 标签上添加一些属性（ARIA 属性），描述 canvas 元素的行为和存在目的。

## 点击区域

- `CanvasRenderingContext2D.addHitRegion()`
  在canvas上添加一个点击区域。 
- `CanvasRenderingContext2D.removeHitRegion()`
  从canvas上移除指定id的点击区域。
- `CanvasRenderingContext2D.clearHitRegions()`
  移除canvas上的所有点击区域。
- 三个 API chrome 都不支持，文档中显示已废弃

## 焦点圈

- `CanvasRenderingContext2D.drawFocusIfNeeded()`
  如果给定的元素获得了焦点，这个方法会沿着在当前的路径画个焦点圈。
  另外，scrollPathIntoView()方法可以让一个元素获得焦点的时候在屏幕上可见(滚动到元素所在的区域)。
- `CanvasRenderingContext2D.scrollPathIntoView()` 
  把当前的路径或者一个给定的路径滚动到显示区域内。
- 没看懂
