import { Component, OnInit, NgZone, OnDestroy } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Router } from "@angular/router";
am4core.useTheme(am4themes_animated);
import noUiSlider from "nouislider";

const mock = [
  {
    description: "Ampang",
    date: "04/03/2020",
    platform: "Twitter",
    likes: "01.3K",
    mentions: "09.6K",
    impact: "45.98",
  },
  {
    description: "Petaling Jaya",
    date: "08/19/2019",
    platform: "Twitter",
    likes: "03.9K",
    mentions: "55.9K",
    impact: "55.31",
  },
  {
    description: "Subang Jaya",
    date: "09/19/2019",
    platform: "Instagram",
    likes: "76.5K",
    mentions: "87.3K",
    impact: "10.54",
  },
  {
    description: "Petaling Jaya",
    date: "09/11/2019",
    platform: "Instagram",
    likes: "81.8K",
    mentions: "07.3K",
    impact: "54.27",
  },
  {
    description: "Gombak",
    date: "01/09/2020",
    platform: "Twitter",
    likes: "62.5K",
    mentions: "13.9K",
    impact: "74.74",
  },
  {
    description: "Gombak",
    date: "07/02/2019",
    platform: "Instagram",
    likes: "99.9K",
    mentions: "65.6K",
    impact: "41.86",
  },
  {
    description: "Cheras",
    date: "05/25/2019",
    platform: "Twitter",
    likes: "43.7K",
    mentions: "48.6K",
    impact: "62.68",
  },
  {
    description: "Subang Jaya",
    date: "08/09/2019",
    platform: "Twitter",
    likes: "32.6K",
    mentions: "80.1K",
    impact: "37.71",
  },
  {
    description: "Invest Smart",
    date: "10/16/2019",
    platform: "Facebook",
    likes: "32.0K",
    mentions: "19.4K",
    impact: "32.75",
  },
  {
    description: "Invest Smart",
    date: "04/18/2020",
    platform: "Instagram",
    likes: "79.1K",
    mentions: "85.6K",
    impact: "58.14",
  },
];

@Component({
  selector: "app-traffic-simulation-analysis",
  templateUrl: "./traffic-simulation-analysis.component.html",
  styleUrls: ["./traffic-simulation-analysis.component.scss"],
})
export class TrafficSimulationAnalysisComponent implements OnInit, OnDestroy {
  chart;
  datas = mock;

  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();

  constructor(private zone: NgZone) {}

  ngOnInit() {
    this.initChart();
    this.initChart2();
    var c: any = document.getElementById("input-slider"),
      d = document.getElementById("input-slider-value");

    noUiSlider.create(c, {
      start: 100,
      connect: [true, false],
      //step: 1000,
      range: {
        min: 100,
        max: 500,
      },
    }),
      c.noUiSlider.on("update", function (a, b) {
        d.textContent = a[b];
      });

    var c1: any = document.getElementById("input-slider-range"),
      d1 = document.getElementById("input-slider-range-value-low"),
      e = document.getElementById("input-slider-range-value-high"),
      f = [d1, e];

    noUiSlider.create(c1, {
      start: [
        parseInt(d1.getAttribute("data-range-value-low")),
        parseInt(e.getAttribute("data-range-value-high")),
      ],
      connect: !0,
      range: {
        min: parseInt(c1.getAttribute("data-range-value-min")),
        max: parseInt(c1.getAttribute("data-range-value-max")),
      },
    }),
      c1.noUiSlider.on("update", function (a, b) {
        f[b].textContent = a[b];
      });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        console.log("Chart disposed");
        this.chart.dispose();
      }
    });
  }

  initChart() {
    let chart = am4core.create("chartdivTsa", am4charts.XYChart);

    chart.data = [{ date: 1577743200000, open: 122, close: 104 },
    { date: 1577829600000, open: 121, close: 70 },
    { date: 1577916000000, open: 101, close: 55 },
    { date: 1578002400000, open: 103, close: 45 },
    { date: 1578088800000, open: 153, close: 85 },
    { date: 1578175200000, open: 150, close: 116 },
    { date: 1578261600000, open: 135, close: 153 },
    { date: 1578348000000, open: 98, close: 152 },
    { date: 1578434400000, open: 101, close: 192 },
    { date: 1578520800000, open: 110, close: 225 },
    { date: 1578607200000, open: 157, close: 233 },
    { date: 1578693600000, open: 128, close: 232 },
    { date: 1578780000000, open: 101, close: 235 },
    { date: 1578866400000, open: 109, close: 200 },
    { date: 1578952800000, open: 142, close: 214 },
    { date: 1579039200000, open: 123, close: 224 },
    { date: 1579125600000, open: 99, close: 176 },
    { date: 1579212000000, open: 100, close: 172 },
    { date: 1579298400000, open: 67, close: 138 },
    { date: 1579384800000, open: 81, close: 127 },
    { date: 1579471200000, open: 39, close: 137 },
    { date: 1579557600000, open: 73, close: 127 },
    { date: 1579644000000, open: 78, close: 154 },
    { date: 1579730400000, open: 116, close: 127 },
    { date: 1579816800000, open: 136, close: 78 },
    { date: 1579903200000, open: 139, close: 61 },
    { date: 1579989600000, open: 162, close: 13 },
    { date: 1580076000000, open: 201, close: 41 },
    { date: 1580162400000, open: 221, close: 72 },
    { date: 1580248800000, open: 257, close: 87 },
    { date: 1580335200000, open: 211, close: 114 },
    { date: 1580421600000, open: 233, close: 138 },
    { date: 1580508000000, open: 261, close: 141 },
    { date: 1580594400000, open: 279, close: 130 }
    ]
    
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 60;
    
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    
    // only for the legend
    let iconSeries = chart.series.push(new am4charts.ColumnSeries())
    iconSeries.fill = am4core.color("#ec0800");
    iconSeries.strokeOpacity = 0;
    iconSeries.stroke = am4core.color("#ec0800");
    iconSeries.name = "Events";
    iconSeries.dataFields.dateX = "date";
    iconSeries.dataFields.valueY = "v";
    
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.openValueY = "open";
    series.dataFields.valueY = "close";
    series.tooltipText = "open: {openValueY.value} close: {valueY.value}";
    series.sequencedInterpolation = true;
    series.stroke = am4core.color("#1b7cb3");
    series.strokeWidth = 2;
    series.name = "District Metered Usage";
    series.stroke = chart.colors.getIndex(0);
    series.fill = series.stroke;
    series.fillOpacity = 0.8;
    
    let bullet = series.bullets.push(new am4charts.CircleBullet())
    bullet.fill = new am4core.InterfaceColorSet().getFor("background");
    bullet.fillOpacity = 1;
    bullet.strokeWidth = 2;
    bullet.circle.radius = 4;
    
    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.dateX = "date";
    series2.dataFields.valueY = "open";
    series2.sequencedInterpolation = true;
    series2.strokeWidth = 2;
    series2.tooltip.getFillFromObject = false;
    series2.tooltip.getStrokeFromObject = true;
    series2.tooltip.label.fill = am4core.color("#000");
    series2.name = "SP Aggregate usage";
    series2.stroke = chart.colors.getIndex(7);
    series2.fill = series2.stroke;
    
    let bullet2 = series2.bullets.push(new am4charts.CircleBullet())
    bullet2.fill = bullet.fill;
    bullet2.fillOpacity = 1;
    bullet2.strokeWidth = 2;
    bullet2.circle.radius = 4;
    
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;
    chart.scrollbarX = new am4core.Scrollbar();
    
    // let negativeRange;
    
    // create ranges
    let negativeRange;
    
    // create ranges
    chart.events.on("datavalidated", function() {
      series.dataItems.each(function(s1DataItem) {
        let s1PreviousDataItem;
        let s2PreviousDataItem;
    
        let s2DataItem = series2.dataItems.getIndex(s1DataItem.index);
    
        if (s1DataItem.index > 0) {
          s1PreviousDataItem = series.dataItems.getIndex(s1DataItem.index - 1);
          s2PreviousDataItem = series2.dataItems.getIndex(s1DataItem.index - 1);
        }
    
        let startTime = am4core.time.round(new Date(s1DataItem.dateX.getTime()), dateAxis.baseInterval.timeUnit, dateAxis.baseInterval.count).getTime();
    
        // intersections
        if (s1PreviousDataItem && s2PreviousDataItem) {
          let x0 = am4core.time.round(new Date(s1PreviousDataItem.dateX.getTime()), dateAxis.baseInterval.timeUnit, dateAxis.baseInterval.count).getTime() + dateAxis.baseDuration / 2;
          let y01 = s1PreviousDataItem.valueY;
          let y02 = s2PreviousDataItem.valueY;
    
          let x1 = startTime + dateAxis.baseDuration / 2;
          let y11 = s1DataItem.valueY;
          let y12 = s2DataItem.valueY;
    
          let intersection = am4core.math.getLineIntersection({ x: x0, y: y01 }, { x: x1, y: y11 }, { x: x0, y: y02 }, { x: x1, y: y12 });
    
          startTime = Math.round(intersection.x);
        }
    
        // start range here
        if (s2DataItem.valueY > s1DataItem.valueY) {
          if (!negativeRange) {
            negativeRange = dateAxis.createSeriesRange(series);
            negativeRange.date = new Date(startTime);
            negativeRange.contents.fill = series2.fill;
            negativeRange.contents.fillOpacity = 0.8;
          }
        }
        else {
          // if negative range started
          if (negativeRange) {
            negativeRange.endDate = new Date(startTime);
          }
          negativeRange = undefined;
        }
        // end if last
        if (s1DataItem.index == series.dataItems.length - 1) {
          if (negativeRange) {
            negativeRange.endDate = new Date(s1DataItem.dateX.getTime() + dateAxis.baseDuration / 2);
            negativeRange = undefined;
          }
        }
      })
    })
  }

  initChart2() {
    let chart = am4core.create("chartdivTsa2", am4charts.XYChart);
    chart.maskBullets = false;

    let xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    let yAxis = chart.yAxes.push(new am4charts.CategoryAxis());

    xAxis.dataFields.category = "weekday";
    yAxis.dataFields.category = "hour";

    xAxis.renderer.grid.template.disabled = true;
    xAxis.renderer.minGridDistance = 40;

    yAxis.renderer.grid.template.disabled = true;
    yAxis.renderer.inversed = true;
    yAxis.renderer.minGridDistance = 30;

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "weekday";
    series.dataFields.categoryY = "hour";
    series.dataFields.value = "value";
    series.sequencedInterpolation = true;
    series.defaultState.transitionDuration = 3000;

    let bgColor = new am4core.InterfaceColorSet().getFor("background");

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 1;
    columnTemplate.strokeOpacity = 0.2;
    columnTemplate.stroke = bgColor;
    columnTemplate.tooltipText =
      "{weekday}, {hour}: {value.workingValue.formatNumber('#.')}";
    columnTemplate.width = am4core.percent(100);
    columnTemplate.height = am4core.percent(100);

    series.heatRules.push({
      target: columnTemplate,
      property: "fill",
      min: am4core.color(bgColor),
      max: chart.colors.getIndex(0),
    });

    // heat legend
    let heatLegend = chart.bottomAxesContainer.createChild(
      am4charts.HeatLegend
    );
    heatLegend.width = am4core.percent(100);
    heatLegend.series = series;
    heatLegend.valueAxis.renderer.labels.template.fontSize = 9;
    heatLegend.valueAxis.renderer.minGridDistance = 30;

    // heat legend behavior
    series.columns.template.events.on("over", function (event) {
      handleHover(event.target);
    });

    series.columns.template.events.on("hit", function (event) {
      handleHover(event.target);
    });

    function handleHover(column) {
      if (!isNaN(column.dataItem.value)) {
        heatLegend.valueAxis.showTooltipAt(column.dataItem.value);
      } else {
        heatLegend.valueAxis.hideTooltip();
      }
    }

    series.columns.template.events.on("out", function (event) {
      heatLegend.valueAxis.hideTooltip();
    });

    chart.data = [
      {
        hour: "12pm",
        weekday: "Sun",
        value: 2990,
      },
      {
        hour: "1am",
        weekday: "Sun",
        value: 2520,
      },
      {
        hour: "2am",
        weekday: "Sun",
        value: 2334,
      },
      {
        hour: "3am",
        weekday: "Sun",
        value: 2230,
      },
      {
        hour: "4am",
        weekday: "Sun",
        value: 2325,
      },
      {
        hour: "5am",
        weekday: "Sun",
        value: 2019,
      },
      {
        hour: "6am",
        weekday: "Sun",
        value: 2128,
      },
      {
        hour: "7am",
        weekday: "Sun",
        value: 2246,
      },
      {
        hour: "8am",
        weekday: "Sun",
        value: 2421,
      },
      {
        hour: "9am",
        weekday: "Sun",
        value: 2788,
      },
      {
        hour: "10am",
        weekday: "Sun",
        value: 2959,
      },
      {
        hour: "11am",
        weekday: "Sun",
        value: 3018,
      },
      {
        hour: "12am",
        weekday: "Sun",
        value: 3154,
      },
      {
        hour: "1pm",
        weekday: "Sun",
        value: 3172,
      },
      {
        hour: "2pm",
        weekday: "Sun",
        value: 3368,
      },
      {
        hour: "3pm",
        weekday: "Sun",
        value: 3464,
      },
      {
        hour: "4pm",
        weekday: "Sun",
        value: 3746,
      },
      {
        hour: "5pm",
        weekday: "Sun",
        value: 3656,
      },
      {
        hour: "6pm",
        weekday: "Sun",
        value: 3336,
      },
      {
        hour: "7pm",
        weekday: "Sun",
        value: 3292,
      },
      {
        hour: "8pm",
        weekday: "Sun",
        value: 3269,
      },
      {
        hour: "9pm",
        weekday: "Sun",
        value: 3300,
      },
      {
        hour: "10pm",
        weekday: "Sun",
        value: 3403,
      },
      {
        hour: "11pm",
        weekday: "Sun",
        value: 3323,
      },
      {
        hour: "12pm",
        weekday: "Mon",
        value: 3346,
      },
      {
        hour: "1am",
        weekday: "Mon",
        value: 2725,
      },
      {
        hour: "2am",
        weekday: "Mon",
        value: 3052,
      },
      {
        hour: "3am",
        weekday: "Mon",
        value: 3876,
      },
      {
        hour: "4am",
        weekday: "Mon",
        value: 4453,
      },
      {
        hour: "5am",
        weekday: "Mon",
        value: 3972,
      },
      {
        hour: "6am",
        weekday: "Mon",
        value: 4644,
      },
      {
        hour: "7am",
        weekday: "Mon",
        value: 5715,
      },
      {
        hour: "8am",
        weekday: "Mon",
        value: 7080,
      },
      {
        hour: "9am",
        weekday: "Mon",
        value: 8022,
      },
      {
        hour: "10am",
        weekday: "Mon",
        value: 8446,
      },
      {
        hour: "11am",
        weekday: "Mon",
        value: 9313,
      },
      {
        hour: "12am",
        weekday: "Mon",
        value: 9011,
      },
      {
        hour: "1pm",
        weekday: "Mon",
        value: 8508,
      },
      {
        hour: "2pm",
        weekday: "Mon",
        value: 8515,
      },
      {
        hour: "3pm",
        weekday: "Mon",
        value: 8399,
      },
      {
        hour: "4pm",
        weekday: "Mon",
        value: 8649,
      },
      {
        hour: "5pm",
        weekday: "Mon",
        value: 7869,
      },
      {
        hour: "6pm",
        weekday: "Mon",
        value: 6933,
      },
      {
        hour: "7pm",
        weekday: "Mon",
        value: 5969,
      },
      {
        hour: "8pm",
        weekday: "Mon",
        value: 5552,
      },
      {
        hour: "9pm",
        weekday: "Mon",
        value: 5434,
      },
      {
        hour: "10pm",
        weekday: "Mon",
        value: 5070,
      },
      {
        hour: "11pm",
        weekday: "Mon",
        value: 4851,
      },
      {
        hour: "12pm",
        weekday: "Tue",
        value: 4468,
      },
      {
        hour: "1am",
        weekday: "Tue",
        value: 3306,
      },
      {
        hour: "2am",
        weekday: "Tue",
        value: 3906,
      },
      {
        hour: "3am",
        weekday: "Tue",
        value: 4413,
      },
      {
        hour: "4am",
        weekday: "Tue",
        value: 4726,
      },
      {
        hour: "5am",
        weekday: "Tue",
        value: 4584,
      },
      {
        hour: "6am",
        weekday: "Tue",
        value: 5717,
      },
      {
        hour: "7am",
        weekday: "Tue",
        value: 6504,
      },
      {
        hour: "8am",
        weekday: "Tue",
        value: 8104,
      },
      {
        hour: "9am",
        weekday: "Tue",
        value: 8813,
      },
      {
        hour: "10am",
        weekday: "Tue",
        value: 9278,
      },
      {
        hour: "11am",
        weekday: "Tue",
        value: 10425,
      },
      {
        hour: "12am",
        weekday: "Tue",
        value: 10137,
      },
      {
        hour: "1pm",
        weekday: "Tue",
        value: 9290,
      },
      {
        hour: "2pm",
        weekday: "Tue",
        value: 9255,
      },
      {
        hour: "3pm",
        weekday: "Tue",
        value: 9614,
      },
      {
        hour: "4pm",
        weekday: "Tue",
        value: 9713,
      },
      {
        hour: "5pm",
        weekday: "Tue",
        value: 9667,
      },
      {
        hour: "6pm",
        weekday: "Tue",
        value: 8774,
      },
      {
        hour: "7pm",
        weekday: "Tue",
        value: 8649,
      },
      {
        hour: "8pm",
        weekday: "Tue",
        value: 9937,
      },
      {
        hour: "9pm",
        weekday: "Tue",
        value: 10286,
      },
      {
        hour: "10pm",
        weekday: "Tue",
        value: 9175,
      },
      {
        hour: "11pm",
        weekday: "Tue",
        value: 8581,
      },
      {
        hour: "12pm",
        weekday: "Wed",
        value: 8145,
      },
      {
        hour: "1am",
        weekday: "Wed",
        value: 7177,
      },
      {
        hour: "2am",
        weekday: "Wed",
        value: 5657,
      },
      {
        hour: "3am",
        weekday: "Wed",
        value: 6802,
      },
      {
        hour: "4am",
        weekday: "Wed",
        value: 8159,
      },
      {
        hour: "5am",
        weekday: "Wed",
        value: 8449,
      },
      {
        hour: "6am",
        weekday: "Wed",
        value: 9453,
      },
      {
        hour: "7am",
        weekday: "Wed",
        value: 9947,
      },
      {
        hour: "8am",
        weekday: "Wed",
        value: 11471,
      },
      {
        hour: "9am",
        weekday: "Wed",
        value: 12492,
      },
      {
        hour: "10am",
        weekday: "Wed",
        value: 9388,
      },
      {
        hour: "11am",
        weekday: "Wed",
        value: 9928,
      },
      {
        hour: "12am",
        weekday: "Wed",
        value: 9644,
      },
      {
        hour: "1pm",
        weekday: "Wed",
        value: 9034,
      },
      {
        hour: "2pm",
        weekday: "Wed",
        value: 8964,
      },
      {
        hour: "3pm",
        weekday: "Wed",
        value: 9069,
      },
      {
        hour: "4pm",
        weekday: "Wed",
        value: 8898,
      },
      {
        hour: "5pm",
        weekday: "Wed",
        value: 8322,
      },
      {
        hour: "6pm",
        weekday: "Wed",
        value: 6909,
      },
      {
        hour: "7pm",
        weekday: "Wed",
        value: 5810,
      },
      {
        hour: "8pm",
        weekday: "Wed",
        value: 5151,
      },
      {
        hour: "9pm",
        weekday: "Wed",
        value: 4911,
      },
      {
        hour: "10pm",
        weekday: "Wed",
        value: 4487,
      },
      {
        hour: "11pm",
        weekday: "Wed",
        value: 4118,
      },
      {
        hour: "12pm",
        weekday: "Thu",
        value: 3689,
      },
      {
        hour: "1am",
        weekday: "Thu",
        value: 3081,
      },
      {
        hour: "2am",
        weekday: "Thu",
        value: 6525,
      },
      {
        hour: "3am",
        weekday: "Thu",
        value: 6228,
      },
      {
        hour: "4am",
        weekday: "Thu",
        value: 6917,
      },
      {
        hour: "5am",
        weekday: "Thu",
        value: 6568,
      },
      {
        hour: "6am",
        weekday: "Thu",
        value: 6405,
      },
      {
        hour: "7am",
        weekday: "Thu",
        value: 8106,
      },
      {
        hour: "8am",
        weekday: "Thu",
        value: 8542,
      },
      {
        hour: "9am",
        weekday: "Thu",
        value: 8501,
      },
      {
        hour: "10am",
        weekday: "Thu",
        value: 8802,
      },
      {
        hour: "11am",
        weekday: "Thu",
        value: 9420,
      },
      {
        hour: "12am",
        weekday: "Thu",
        value: 8966,
      },
      {
        hour: "1pm",
        weekday: "Thu",
        value: 8135,
      },
      {
        hour: "2pm",
        weekday: "Thu",
        value: 8224,
      },
      {
        hour: "3pm",
        weekday: "Thu",
        value: 8387,
      },
      {
        hour: "4pm",
        weekday: "Thu",
        value: 8218,
      },
      {
        hour: "5pm",
        weekday: "Thu",
        value: 7641,
      },
      {
        hour: "6pm",
        weekday: "Thu",
        value: 6469,
      },
      {
        hour: "7pm",
        weekday: "Thu",
        value: 5441,
      },
      {
        hour: "8pm",
        weekday: "Thu",
        value: 4952,
      },
      {
        hour: "9pm",
        weekday: "Thu",
        value: 4643,
      },
      {
        hour: "10pm",
        weekday: "Thu",
        value: 4393,
      },
      {
        hour: "11pm",
        weekday: "Thu",
        value: 4017,
      },
      {
        hour: "12pm",
        weekday: "Fri",
        value: 4022,
      },
      {
        hour: "1am",
        weekday: "Fri",
        value: 3063,
      },
      {
        hour: "2am",
        weekday: "Fri",
        value: 3638,
      },
      {
        hour: "3am",
        weekday: "Fri",
        value: 3968,
      },
      {
        hour: "4am",
        weekday: "Fri",
        value: 4070,
      },
      {
        hour: "5am",
        weekday: "Fri",
        value: 4019,
      },
      {
        hour: "6am",
        weekday: "Fri",
        value: 4548,
      },
      {
        hour: "7am",
        weekday: "Fri",
        value: 5465,
      },
      {
        hour: "8am",
        weekday: "Fri",
        value: 6909,
      },
      {
        hour: "9am",
        weekday: "Fri",
        value: 7706,
      },
      {
        hour: "10am",
        weekday: "Fri",
        value: 7867,
      },
      {
        hour: "11am",
        weekday: "Fri",
        value: 8615,
      },
      {
        hour: "12am",
        weekday: "Fri",
        value: 8218,
      },
      {
        hour: "1pm",
        weekday: "Fri",
        value: 7604,
      },
      {
        hour: "2pm",
        weekday: "Fri",
        value: 7429,
      },
      {
        hour: "3pm",
        weekday: "Fri",
        value: 7488,
      },
      {
        hour: "4pm",
        weekday: "Fri",
        value: 7493,
      },
      {
        hour: "5pm",
        weekday: "Fri",
        value: 6998,
      },
      {
        hour: "6pm",
        weekday: "Fri",
        value: 5941,
      },
      {
        hour: "7pm",
        weekday: "Fri",
        value: 5068,
      },
      {
        hour: "8pm",
        weekday: "Fri",
        value: 4636,
      },
      {
        hour: "9pm",
        weekday: "Fri",
        value: 4241,
      },
      {
        hour: "10pm",
        weekday: "Fri",
        value: 3858,
      },
      {
        hour: "11pm",
        weekday: "Fri",
        value: 3833,
      },
      {
        hour: "12pm",
        weekday: "Sat",
        value: 3503,
      },
      {
        hour: "1am",
        weekday: "Sat",
        value: 2842,
      },
      {
        hour: "2am",
        weekday: "Sat",
        value: 2808,
      },
      {
        hour: "3am",
        weekday: "Sat",
        value: 2399,
      },
      {
        hour: "4am",
        weekday: "Sat",
        value: 2280,
      },
      {
        hour: "5am",
        weekday: "Sat",
        value: 2139,
      },
      {
        hour: "6am",
        weekday: "Sat",
        value: 2527,
      },
      {
        hour: "7am",
        weekday: "Sat",
        value: 2940,
      },
      {
        hour: "8am",
        weekday: "Sat",
        value: 3066,
      },
      {
        hour: "9am",
        weekday: "Sat",
        value: 3494,
      },
      {
        hour: "10am",
        weekday: "Sat",
        value: 3287,
      },
      {
        hour: "11am",
        weekday: "Sat",
        value: 3416,
      },
      {
        hour: "12am",
        weekday: "Sat",
        value: 3432,
      },
      {
        hour: "1pm",
        weekday: "Sat",
        value: 3523,
      },
      {
        hour: "2pm",
        weekday: "Sat",
        value: 3542,
      },
      {
        hour: "3pm",
        weekday: "Sat",
        value: 3347,
      },
      {
        hour: "4pm",
        weekday: "Sat",
        value: 3292,
      },
      {
        hour: "5pm",
        weekday: "Sat",
        value: 3416,
      },
      {
        hour: "6pm",
        weekday: "Sat",
        value: 3131,
      },
      {
        hour: "7pm",
        weekday: "Sat",
        value: 3057,
      },
      {
        hour: "8pm",
        weekday: "Sat",
        value: 3227,
      },
      {
        hour: "9pm",
        weekday: "Sat",
        value: 3060,
      },
      {
        hour: "10pm",
        weekday: "Sat",
        value: 2855,
      },
      {
        hour: "11pm",
        weekday: "Sat",
        value: 2625,
      },
    ];
  }
}
