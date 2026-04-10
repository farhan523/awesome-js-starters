# Apache ECharts

A library that turns your data into beautiful, interactive maps and charts that users can explore.

**npm:** https://www.npmjs.com/package/echarts
**GitHub:** https://github.com/apache/echarts
**Docs:** https://echarts.apache.org/

---

## The Problem

Visualizing complex data sets can be a daunting task when you need to maintain a high standard of visual quality without spending weeks on custom graphic development. Finding a way to integrate charts that are not only functional but also look professional and polished is a common hurdle, especially when you need to balance sophisticated design with an implementation process that doesn't derail your development timeline.

---

## What It Does

Apache ECharts solves the need for high-quality data visualization by offering a massive library of ready-to-use, professional charts and maps that are remarkably easy to implement. It bridges the gap between raw data and user exploration by providing a declarative configuration system, allowing you to generate interactive and aesthetically pleasing visuals without having to build them from the ground up. This ensures your web application delivers a premium data experience while keeping your integration workflow efficient and straightforward.

---

## Installation

```bash
npm i echarts
```

---

## Usage Example

Use this snippet to show chart in a HTML element :

```html
<div id="chart"></div>
```

```js
import * as echarts from "echarts";

const chartDom = document.getElementById("chart");
const myChart = echarts.init(chartDom);
const option = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line",
    },
  ],
};

myChart.setOption(option);
```

---

## Screenshot / Demo

![Screenshot](./screenshot.png)

---

## Submitted by

[@moefc32](https://github.com/moefc32)
