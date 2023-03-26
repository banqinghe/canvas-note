# 绘制图形

## 坐标系

- 左上角为原点 (0, 0)，x 轴坐标向右递增，y 轴坐标向下递增

## 绘制矩形

- canvas 只支持矩形和路径的绘制
- 有三种方法绘制矩形，`fillRect()`、`clearRect()`、`strokeRect()`。
- `clearRect` 绘制的是完全透明的颜色，即 `rgba(0, 0, 0, 0)`;

## 绘制路径

- 绘制路径的固定步骤：
  1. 创建起始点 `beginPath()`
  2. 画出路径
  3. 封闭路径 `closePath()` 使用 fill 时会自动闭合，使用 stroke 则不会
  4. 描边或填充，绘制出图形 `stroke`, `fill`

- 移动笔触 `moveTo(x, y)`

- 绘制直线 `lineTo(x, y)`

- 绘制圆弧
  - `arc(x, y, radius, startAngle, endAngle, anticlockwise)`
    - 角的单位为弧度，而非角度。 $radian=(\frac{\pi}{180})* angle$
    - `anticlockwise` 默认为 `false`，顺时针绘制
    - 绘制弧形是从圆的最右侧开始，而不是通过 `moveTo` 决定绘制起点
  - `arcTo(x1, y1, x2, y2, radius)` （实现不可靠）

- 贝塞尔曲线
  - `quadraticCurveTo(cp1x, cp1y, x, y)`
    绘制二次贝塞尔曲线，`cp1x,cp1y` 为一个控制点，`x,y` 为结束点。
  - `bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)`
    绘制三次贝塞尔曲线，`cp1x,cp1y` 为控制点一，`cp2x,cp2y` 为控制点二，`x,y` 为结束点。

- 绘制矩形 `rect(x, y, width, height)`。执行时自动 moveTo 到 (0, 0).

## Path2D
