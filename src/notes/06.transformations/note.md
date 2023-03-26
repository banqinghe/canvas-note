# 变形

变形是一种更强大的方法，可以将原点移动到另一点、对网格进行旋转和缩放。

## 状态的保存和恢复

- canvas 的状态保存在栈里
  1. `save()` 保存当前状态（入栈）
  2. `restore()` 恢复状态（出栈）
- 保存的状态包括变形状态，颜色各种样式，裁切路径

## Translate

- `translate(x, y)` 改变原点位置

## Rotate

- `rotate(angle)` 接收弧度。以原点为中心旋转 canvas。

## Scaling

- `scale(x, y)` x 轴缩放系数和 y 轴缩放系数。
  > 画布初始情况下， 是以左上角坐标为原点的第一象限。如果参数为负实数， 相当于以x 或 y轴作为对称轴镜像反转（例如， 使用 `translate(0,canvas.height); scale(1,-1);` 以y轴作为对称轴镜像反转， 就可得到著名的笛卡尔坐标系，左下角为原点）。
  > 我认为这里文档写错了，是将 y 轴镜像翻转，而不是以 y 轴作为对称轴翻转。
- scale 是会叠加的，善用 save

## Transform

- `transform(a, b, c, d, e, f)` 直接传一个矩阵做变换
  $$
  \left[ \begin{array}{ccc} a & c & e \\ b & d & f \\ 0 & 0 & 1 \end{array} \right]
  $$
- `setTransform(a, b, c, d, e, f)`
  这个方法会将当前的变形矩阵重置为单位矩阵，然后用相同的参数调用 transform 方法。如果任意一个参数是无限大，那么变形矩阵也必须被标记为无限大，否则会抛出异常。从根本上来说，该方法是取消了当前变形,然后设置为指定的变形,一步完成。
- `resetTransform()`
  重置当前变形为单位矩阵，它和调用以下语句是一样的：ctx.setTransform(1, 0, 0, 1, 0, 0);

- 矩阵原理需要学习
