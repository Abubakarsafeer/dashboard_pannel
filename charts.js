
am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv1_1");
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    root.dateFormatter.setAll({
      dateFormat: "yyyy",
      dateFields: ["valueX"]
    });
    
    var data = [
      {
        date: "2012-01-01",
        value: 8
      },
      {
        date: "2012-01-02",
        value: 10
      },
      {
        date: "2012-01-03",
        value: 12
      },
      {
        date: "2012-01-04",
        value: 14
      },
      {
        date: "2012-01-05",
        value: 11
      },
      {
        date: "2012-01-06",
        value: 6
      },
      {
        date: "2012-01-07",
        value: 7
      },
      {
        date: "2012-01-08",
        value: 9
      },
      {
        date: "2012-01-09",
        value: 13
      },
      {
        date: "2012-01-10",
        value: 15
      },
      {
        date: "2012-01-11",
        value: 19
      },
      {
        date: "2012-01-12",
        value: 21
      },
      {
        date: "2012-01-13",
        value: 22
      },
      {
        date: "2012-01-14",
        value: 20
      },
      {
        date: "2012-01-15",
        value: 18
      },
      {
        date: "2012-01-16",
        value: 14
      },
      {
        date: "2012-01-17",
        value: 16
      },
      {
        date: "2012-01-18",
        value: 18
      },
      {
        date: "2012-01-19",
        value: 17
      },
      {
        date: "2012-01-20",
        value: 15
      },
      {
        date: "2012-01-21",
        value: 12
      },
      {
        date: "2012-01-22",
        value: 10
      },
      {
        date: "2012-01-23",
        value: 8
      }
    ];
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        focusable: true,
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
      pinchZoomX:true
      })
    );
    
    var easing = am5.ease.linear;
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        maxDeviation: 0.5,
        groupData: false,
        baseInterval: {
          timeUnit: "day",
          count: 1
        },
        renderer: am5xy.AxisRendererX.new(root, {
          pan:"zoom",
          minGridDistance: 50
        }),
        tooltip: am5.Tooltip.new(root, {})
      })
    );
    
    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 1,
        renderer: am5xy.AxisRendererY.new(root, {pan:"zoom"})
      })
    );
    
    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(
      am5xy.LineSeries.new(root, {
        minBulletDistance: 10,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "horizontal",
          labelText: "{valueY}"
        })
      })
    );
    
    // Set up data processor to parse string dates
    // https://www.amcharts.com/docs/v5/concepts/data/#Pre_processing_data
    series.data.processor = am5.DataProcessor.new(root, {
      dateFormat: "yyyy-MM-dd",
      dateFields: ["date"]
    });
    
    series.data.setAll(data);
    
    series.bullets.push(function() {
      var circle = am5.Circle.new(root, {
        radius: 4,
        fill: series.get("fill"),
        stroke: root.interfaceColors.get("background"),
        strokeWidth: 2
      });
    
      return am5.Bullet.new(root, {
        sprite: circle
      });
    });
    
    createTrendLine(
      [
        { date: "2012-01-02", value: 10 },
        { date: "2012-01-11", value: 19 }
      ],
      root.interfaceColors.get("positive")
    );
    
    createTrendLine(
      [
        { date: "2012-01-17", value: 16 },
        { date: "2012-01-22", value: 10 }
      ],
      root.interfaceColors.get("negative")
    );
    
    function createTrendLine(data, color) {
      var series = chart.series.push(
        am5xy.LineSeries.new(root, {
          xAxis: xAxis,
          yAxis: yAxis,
          valueXField: "date",
          stroke: color,
          valueYField: "value"
        })
      );
    
      series.data.processor = am5.DataProcessor.new(root, {
        dateFormat: "yyyy-MM-dd",
        dateFields: ["date"]
      });
    
      series.data.setAll(data);
      series.appear(1000, 100);
    }
    
    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
      xAxis: xAxis
    }));
    cursor.lineY.set("visible", false);
    
    // add scrollbar
    chart.set("scrollbarX", am5.Scrollbar.new(root, {
      orientation: "horizontal"
    }));
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000, 100);
    chart.appear(1000, 100);
    
    }); // end am5.ready()


    am5.ready(function() {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv1_2");

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([am5themes_Animated.new(root)]);

// Create chart
// https://www.amcharts.com/docs/v5/charts/radar-chart/
var chart = root.container.children.push(
  am5radar.RadarChart.new(root, {
    panX: false,
    panY: false,
    wheelX: "panX",
    wheelY: "zoomX",
    innerRadius: am5.percent(40)
  })
);

chart.get("colors").set("step", 2);

// Add cursor
// https://www.amcharts.com/docs/v5/charts/radar-chart/#Cursor
var cursor = chart.set("cursor",
am5radar.RadarCursor.new(root, {
  behavior: "zoomX"
}));

cursor.lineY.set("visible", false);

// Create axes and their renderers
// https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
var yRenderer = am5radar.AxisRendererRadial.new(root, { minGridDistance: 20 });

var yAxis = chart.yAxes.push(
  am5xy.CategoryAxis.new(root, {
    maxDeviation: 0,
    categoryField: "category",
    renderer: yRenderer
  })
);

var xAxis = chart.xAxes.push(
  am5xy.DateAxis.new(root, {
    min: new Date("2021-01-01 00:00:00").getTime(),
    max: new Date("2022-01-01 00:00:00").getTime(),
    baseInterval: { timeUnit: "day", count: 1 },
    renderer: am5radar.AxisRendererCircular.new(root, {})
  })
);

var data = [
  {
    category: "One",
    startDate1: new Date("2021-01-01").getTime(),
    endDate1: new Date("2021-03-01").getTime()
  },
  {
    category: "One",
    startDate1: new Date("2021-04-01").getTime(),
    endDate1: new Date("2021-08-15").getTime()
  },
  {
    category: "Two",
    startDate2: new Date("2021-03-01").getTime(),
    endDate2: new Date("2021-06-01").getTime()
  },
  {
    category: "Two",
    startDate2: new Date("2021-08-01").getTime(),
    endDate2: new Date("2021-10-01").getTime()
  },
  {
    category: "Three",
    startDate3: new Date("2021-02-01").getTime(),
    endDate3: new Date("2021-07-01").getTime()
  },
  {
    category: "Four",
    startDate4: new Date("2021-06-09").getTime(),
    endDate4: new Date("2021-09-01").getTime()
  },
  {
    category: "Four",
    startDate4: new Date("2021-10-01").getTime(),
    endDate4: new Date("2021-12-15").getTime()
  },
  {
    category: "Five",
    startDate5: new Date("2021-02-01").getTime(),
    endDate5: new Date("2021-04-15").getTime()
  },
  {
    category: "Five",
    startDate5: new Date("2021-10-01").getTime(),
    endDate5: new Date("2021-12-31").getTime()
  }
];

// Set date fields
// https://www.amcharts.com/docs/v5/concepts/data/#Parsing_dates
root.dateFormatter.setAll({
  dateFormat: "yyyy-MM-dd",
  dateFields: ["valueX", "openValueX"]
});

// Create series
// https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
for (var i = 1; i < 6; i++) {
  var series = chart.series.push(
    am5radar.RadarColumnSeries.new(root, {
      clustered: false,
      name: "Series",
      xAxis: xAxis,
      yAxis: yAxis,
      categoryYField: "category",
      valueXField: "endDate" + i,
      openValueXField: "startDate" + i
    })
  );

  series.columns.template.set("cornerRadius", 25);
  series.columns.template.set(
    "tooltipText",
    "{category}: {openValueX} - {valueX}"
  );

  series.data.setAll(data);
  series.appear(2000, 100);
  series.data.setAll(data);
}

yAxis.data.setAll([
  { category: "One" },
  { category: "Two" },
  { category: "Three" },
  { category: "Four" },
  { category: "Five" }
]);

chart.set("scrollbarX", am5.Scrollbar.new(root, { orientation: "horizontal", exportable: false }));
chart.set("scrollbarY", am5.Scrollbar.new(root, { orientation: "vertical", exportable: false }));

xAxis.data.setAll(data);

// Animate chart and series in
// https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation
chart.appear(2000, 100);

}); // end am5.ready()

// ======================================
am5.ready(function() {


    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv2_1");
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "none",
      wheelY: "none"
    }));
    
    // We don't want zoom-out button to appear while animating, so we hide it
    chart.zoomOutButton.set("forceHidden", true);
    
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var yRenderer = am5xy.AxisRendererY.new(root, {
      minGridDistance: 30
    });
    
    yRenderer.grid.template.set("location", 1);
    
    var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
      maxDeviation: 0,
      categoryField: "network",
      renderer: yRenderer,
      tooltip: am5.Tooltip.new(root, { themeTags: ["axis"] })
    }));
    
    var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
      maxDeviation: 0,
      min: 0,
      extraMax: 0.1,
      renderer: am5xy.AxisRendererX.new(root, {
        strokeOpacity: 0.1
      })
    }));
    
    
    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
      name: "Series 1",
      xAxis: xAxis,
      yAxis: yAxis,
      valueXField: "value",
      categoryYField: "network",
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "left",
        labelText: "{valueX}"
      })
    }));
    
    
    // Rounded corners for columns
    series.columns.template.setAll({
      cornerRadiusTR: 5,
      cornerRadiusBR: 5,
      strokeOpacity: 0
    });
    
    // Make each column to be of a different color
    series.columns.template.adapters.add("fill", function(fill, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });
    
    series.columns.template.adapters.add("stroke", function(stroke, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });
    
    
    // Set data
    var data = [
      {
        "network": "Facebook",
        "value": 2255250000
      },
      {
        "network": "Google+",
        "value": 430000000
      },
      {
        "network": "Instagram",
        "value": 1000000000
      },
      {
        "network": "Pinterest",
        "value": 246500000
      },
      {
        "network": "Reddit",
        "value": 355000000
      },
      {
        "network": "TikTok",
        "value": 500000000
      },
      {
        "network": "Tumblr",
        "value": 624000000
      },
      {
        "network": "Twitter",
        "value": 329500000
      },
      {
        "network": "WeChat",
        "value": 1000000000
      },
      {
        "network": "Weibo",
        "value": 431000000
      },
      {
        "network": "Whatsapp",
        "value": 1433333333
      },
      {
        "network": "YouTube",
        "value": 1900000000
      }
    ];
    
    yAxis.data.setAll(data);
    series.data.setAll(data);
    sortCategoryAxis();
    
    // Get series item by category
    function getSeriesItem(category) {
      for (var i = 0; i < series.dataItems.length; i++) {
        var dataItem = series.dataItems[i];
        if (dataItem.get("categoryY") == category) {
          return dataItem;
        }
      }
    }
    
    chart.set("cursor", am5xy.XYCursor.new(root, {
      behavior: "none",
      xAxis: xAxis,
      yAxis: yAxis
    }));
    
    
    // Axis sorting
    function sortCategoryAxis() {
    
      // Sort by value
      series.dataItems.sort(function(x, y) {
        return x.get("valueX") - y.get("valueX"); // descending
        //return y.get("valueY") - x.get("valueX"); // ascending
      })
    
      // Go through each axis item
      am5.array.each(yAxis.dataItems, function(dataItem) {
        // get corresponding series item
        var seriesDataItem = getSeriesItem(dataItem.get("category"));
    
        if (seriesDataItem) {
          // get index of series data item
          var index = series.dataItems.indexOf(seriesDataItem);
          // calculate delta position
          var deltaPosition = (index - dataItem.get("index", 0)) / series.dataItems.length;
          // set index to be the same as series data item index
          dataItem.set("index", index);
          // set deltaPosition instanlty
          dataItem.set("deltaPosition", -deltaPosition);
          // animate delta position to 0
          dataItem.animate({
            key: "deltaPosition",
            to: 0,
            duration: 1000,
            easing: am5.ease.out(am5.ease.cubic)
          })
        }
      });
    
      // Sort axis items by index.
      // This changes the order instantly, but as deltaPosition is set,
      // they keep in the same places and then animate to true positions.
      yAxis.dataItems.sort(function(x, y) {
        return x.get("index") - y.get("index");
      });
    }
    
    
    // update data with random values each 1.5 sec
    setInterval(function() {
      updateData();
    }, 1500)
    
    function updateData() {
      am5.array.each(series.dataItems, function(dataItem) {
        var value = dataItem.get("valueX") + Math.round(Math.random() * 1000000000 - 500000000);
        if (value < 0) {
          value = 500000000;
        }
        // both valueY and workingValueY should be changed, we only animate workingValueY
        dataItem.set("valueX", value);
        dataItem.animate({
          key: "valueXWorking",
          to: value,
          duration: 600,
          easing: am5.ease.out(am5.ease.cubic)
        });
      })
    
      sortCategoryAxis();
    }
    
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
    
    }); // end am5.ready()


    // ===============================================div2_2
    am5.ready(function() {

        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        var root = am5.Root.new("chartdiv2_2");
        
        
        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
          am5themes_Animated.new(root)
        ]);
        
        
        // Create chart
        // https://www.amcharts.com/docs/v5/charts/xy-chart/
        var chart = root.container.children.push(am5xy.XYChart.new(root, {
          panX: true,
          panY: true,
          wheelX: "none",
          wheelY: "none"
        }));
        
        // We don't want zoom-out button to appear while animating, so we hide it
        chart.zoomOutButton.set("forceHidden", true);
        
        
        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        var xRenderer = am5xy.AxisRendererX.new(root, {
          minGridDistance: 30
        });
        xRenderer.labels.template.setAll({
          rotation: -90,
          centerY: am5.p50,
          centerX: 0,
          paddingRight: 15
        });
        xRenderer.grid.template.set("visible", false);
        
        var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
          maxDeviation: 0.3,
          categoryField: "country",
          renderer: xRenderer
        }));
        
        var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
          maxDeviation: 0.3,
          min: 0,
          renderer: am5xy.AxisRendererY.new(root, {})
        }));
        
        
        // Add series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        var series = chart.series.push(am5xy.ColumnSeries.new(root, {
          name: "Series 1",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value",
          categoryXField: "country"
        }));
        
        // Rounded corners for columns
        series.columns.template.setAll({
          cornerRadiusTL: 5,
          cornerRadiusTR: 5,
          strokeOpacity: 0
        });
        
        // Make each column to be of a different color
        series.columns.template.adapters.add("fill", function (fill, target) {
          return chart.get("colors").getIndex(series.columns.indexOf(target ));
        });
        
        series.columns.template.adapters.add("stroke", function (stroke, target) {
          return chart.get("colors").getIndex(series.columns.indexOf(target ));
        });
        
        // Add Label bullet
        series.bullets.push(function () {
          return am5.Bullet.new(root, {
            locationY: 1,
            sprite: am5.Label.new(root, {
              text: "{valueYWorking.formatNumber('#.')}",
              fill: root.interfaceColors.get("alternativeText"),
              centerY: 0,
              centerX: am5.p50,
              populateText: true
            })
          });
        });
        
        
        // Set data
        var data = [{
          "country": "USA",
          "value": 2025
        }, {
          "country": "China",
          "value": 1882
        }, {
          "country": "Japan",
          "value": 1809
        }, {
          "country": "Germany",
          "value": 1322
        }, {
          "country": "UK",
          "value": 1122
        }, {
          "country": "France",
          "value": 1114
        }, {
          "country": "India",
          "value": 984
        }, {
          "country": "Spain",
          "value": 711
        }, {
          "country": "Netherlands",
          "value": 665
        }, {
          "country": "Russia",
          "value": 580
        }, {
          "country": "South Korea",
          "value": 443
        }, {
          "country": "Canada",
          "value": 441
        }];
        
        xAxis.data.setAll(data);
        series.data.setAll(data);
        
        // update data with random values each 1.5 sec
        setInterval(function () {
          updateData();
        }, 1500)
        
        function updateData() {
          am5.array.each(series.dataItems, function (dataItem) {
            var value = dataItem.get("valueY") + Math.round(Math.random() * 300 - 150);
            if (value < 0) {
              value = 10;
            }
            // both valueY and workingValueY should be changed, we only animate workingValueY
            dataItem.set("valueY", value);
            dataItem.animate({
              key: "valueYWorking",
              to: value,
              duration: 600,
              easing: am5.ease.out(am5.ease.cubic)
            });
          })
        
          sortCategoryAxis();
        }
        
        
        // Get series item by category
        function getSeriesItem(category) {
          for (var i = 0; i < series.dataItems.length; i++) {
            var dataItem = series.dataItems[i];
            if (dataItem.get("categoryX") == category) {
              return dataItem;
            }
          }
        }
        
        
        // Axis sorting
        function sortCategoryAxis() {
        
          // Sort by value
          series.dataItems.sort(function (x, y) {
            return y.get("valueY") - x.get("valueY"); // descending
            //return y.get("valueY") - x.get("valueY"); // ascending
          })
        
          // Go through each axis item
          am5.array.each(xAxis.dataItems, function (dataItem) {
            // get corresponding series item
            var seriesDataItem = getSeriesItem(dataItem.get("category"));
        
            if (seriesDataItem) {
              // get index of series data item
              var index = series.dataItems.indexOf(seriesDataItem);
              // calculate delta position
              var deltaPosition = (index - dataItem.get("index", 0)) / series.dataItems.length;
              // set index to be the same as series data item index
              dataItem.set("index", index);
              // set deltaPosition instanlty
              dataItem.set("deltaPosition", -deltaPosition);
              // animate delta position to 0
              dataItem.animate({
                key: "deltaPosition",
                to: 0,
                duration: 1000,
                easing: am5.ease.out(am5.ease.cubic)
              })
            }
          });
        
          // Sort axis items by index.
          // This changes the order instantly, but as deltaPosition is set,
          // they keep in the same places and then animate to true positions.
          xAxis.dataItems.sort(function (x, y) {
            return x.get("index") - y.get("index");
          });
        }
        
        
        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        series.appear(1000);
        chart.appear(1000, 100);
        
        });
        // =================================================2_3
        am5.ready(function() {

            // Define icons
            var icon1 = "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0iMTc2IiBoZWlnaHQ9Ijg4OSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNODcuODIuMDY2djc2LjQzNmwtNC4wNjUgMi45ODR2NjUuNDE4bC0yLjkwNCAzLjQ0My0uNzc0IDYzLjEyMy01LjIyOCA1LjczOHY2MS45NzVsLTIuMzIzIDQuODItLjc3NCAxNzguNTgtOS42OCAyLjI5Ni0uNzc1IDEyOC41NC05LjEgMy4yMTR2MTE5LjU4OWwtNS42MTQgMS4xNDgtLjc3NCA4NC4wMS03LjU1IDEuMTQ4djQ5LjM1aC04LjMyNnYxMS4wMThoLTYuOTd2OC4yNjRILjd2MjAuNjU4aDE3NC40MzdWODcxLjE2aC0xNy40MjR2LTguMjY0aC0xMS4yM3YtOS42NGwtNy4zNTYtLjIzLS45NjgtNzMuNjgxLTcuNTUtLjkxOC45NjctOTguOTMtNy45MzgtMS44MzctLjc3NC0xMjIuMTE0LTYuOTctMS44MzYtMS4zNTUtMTM4LjE4Mi01LjYxNC03LjU3NFYzMDcuMTg3bC02LjAwMi05LjQxMXYuMjMtMzkuOTRsLTQuMjYtMy42NzMtLjc3NC0zNi45NTVoLS45Njh2LTQ2LjU5NmwtMy44NzItNi44ODZ2LTYwLjEzOWwtMy42NzgtMi45ODQtLjM4OC0yMS4xMTdWLjA2NmgtMS4xNjF6IiBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=";
            
            var icon2 = "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0iMTAzIiBoZWlnaHQ9IjU3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAzIDU3Ny45VjI4OC41YzAtMS4xLTEuMi0yLjEtMi4yLTIuMWgtOFYxODIuMWMwLTEtMS4xLTIuMS0yLjEtMi4xSDc0LjRWOTguNWMwLTEtMS0yLTIuMS0ySDU5LjJzLjEtMS45LjEtMy0xLjEtMS4xLTEuMS0xLjFWNDIuN2gtMi4xVjhoLTN2ODQuNGgtMlY0Ni44aC0xLjl2NDUuOEgzNC45di00N2gtMS4ydjQ2LjloLTIuOVYuNWgtNC4ydjkyaC01LjF2NGgtOC4xYy0xLjEgMC0yIDEtMiAydjE4OEgyLjJjLTEuMSAwLTIuMSAxLTIuMSAydjI4OS40SDEwM3oiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==";
            
            var icon3 = "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0iODMiIGhlaWdodD0iNTU2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0zOS44Ljh2NTYuNWwtNS4xIDEuM3Y1aDN2M2gxLjh2MmgtMy44Yy0uOSAwLTIuMSAxLTIuMSAydjE2LjloLTRzLjkgMTUuOS45IDE2LjljMCAxIDEuMSAyIDIuMSAyaDF2MTYuOWgtNy4xYy0xIDAtMiAxLTIgMnY5aC04LjFjLTEuMSAwLTIgMS0yIDJ2MS45aC0ybDQuMSAzOC43aC0zbDMuOSAzNy45aC0zLjlsMy43IDM3LjdoLTMuOWw0LjQgMzcuN2gtNC4zbDMuOSAzNi44aC00bDQuMiAzNi45aC00LjNsNC40IDM4LjdoLTQuM2w0IDM5LjhzLTEuNy0uMS0yLjUgMGMtLjggMC0xLjEgMS4xLTEuMyAxLjgtLjIuNy0xMy4xIDExNS0xMy4xIDExNWw0MS0uMmguN2w0MSAuMlM3MC4yIDQ0NC45IDcwIDQ0NC4yYy0uMi0uNy0uNS0xLjgtMS4zLTEuOC0uOC0uMS0yLjUgMC0yLjUgMGw0LTM5LjhoLTQuM2w0LjQtMzguN0g2Nmw0LjItMzYuOWgtNGwzLjktMzYuOGgtNC4zbDQuNC0zNy43aC0zLjlsMy43LTM3LjdoLTMuOWwzLjktMzcuOWgtM2w0LjEtMzguN2gtMnYtMS45YzAtMS4xLS45LTItMi0ySDU5di05YzAtMS0xLTItMi0yaC03LjF2LTE2LjloMWMxIDAgMi4xLTEgMi4xLTJzLjktMTYuOS45LTE2LjloLTRWNzAuNmMwLTEtMS4xLTItMi4xLTJINDR2LTJoMS44di0zaDN2LTVsLTUuMS0xLjNWLjhoLTMuOXoiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==";
            
            var icon4 = "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjQ5MyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAuNy40djQwLjhoLTJ2NmgydjIuNWwtMSAzLjVoLTFjLTEgMC0yIDEtMiAydjJoLTFjLS45IDAtMiAxLTIgMnY1LjloLTFjLTEuMSAwLTIuMSAxLTIuMSAydjhoLTFjLTEgMC0yIDEtMiAyVjg2aC0xYy0xIDAtMi4xIDEtMi4xIDJ2MTYuOWgtMi4xYy0xIDAtMiAuOS0yIDJ2MjMuOWgtMmMtMSAwLTIgMS0yIDJ2NDAuN2gtMmMtMSAwLTIgMS0yIDJ2NTEuN2MwIC45LTIuMSAxLjItMi4xIDJ2MjY2LjJsMzEuOCAxaDFsMjguOC0uOWg1Ni4ybDI4LjguOWgxbDMxLjgtMVYyMjkuMmMwLS44LTIuMS0xLjEtMi4xLTJ2LTUxLjdjMC0xLTEtMi0yLTJoLTJ2LTQwLjdjMC0uOS0xLjEtMi0yLjEtMmgtMnYtMjMuOWMwLTEtMS4xLTItMi0yaC0yLjFWODhjMC0xLTEtMi0yLjEtMmgtMXYtOC45YzAtMS0xLTItMi0yaC0xdi04YzAtMS0xLTItMi0yaC0xLjF2LTUuOWMwLTEtMS4xLTItMi0yaC0xdi0yYzAtMS0xLTItMi0yaC0xbC0xLTMuNXYtMi41aDJ2LTZoLTJWLjRoLTMuOHY0MC44aC0ydjZoMnYyLjVsLTEgMy41aC0xYy0xIDAtMiAxLTIgMnYyaC0xYy0uOSAwLTIgMS0yIDJ2NS45aC0xYy0xLjEgMC0yLjEgMS0yLjEgMnY4aC0xYy0xIDAtMiAxLTIgMlY4NmgtMWMtMSAwLTIuMSAxLTIuMSAydjE2LjloLTIuMWMtMSAwLTIgLjktMiAydjIzLjloLTJjLTEgMC0yIDEtMiAydjQwLjdoLTJjLTEgMC0yIDEtMiAydjUxLjdjMCAuOS0yLjEgMS4yLTIuMSAydjczLjVINjV2LTczLjVjMC0uOC0yLjEtMS4xLTIuMS0ydi01MS43YzAtMS0xLTItMi0yaC0ydi00MC43YzAtLjktMS4xLTItMi4xLTJoLTJ2LTIzLjljMC0xLTEuMS0yLTItMmgtMi4xVjg4YzAtMS0xLTItMi4xLTJoLTF2LTguOWMwLTEtMS0yLTItMmgtMXYtOGMwLTEtMS0yLTItMmgtMS4xdi01LjljMC0xLTEuMS0yLTItMmgtMXYtMmMwLTEtMS0yLTItMmgtMWwtMS0zLjV2LTIuNWgydi02aC0yVi40aC0zLjh6TTY1IDMxMy42aDIzLjRsLjEuMUw2NSAzNTkuMXYtNDUuNXptMjYuNyAwaDIzLjZ2NDUuOGwtMjMuNi00NS44em0tMS43IDMuM2wyNS4yIDQ5Ljd2MTA2LjNINjVWMzY2LjJsMjUtNDkuM3oiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==";
            
            var icon5 = "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0iMTQ0IiBoZWlnaHQ9IjQ4NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNjkuOS4zdjQwSDY5Yy0uOCAwLTIuMSAxLjEtMi4xIDIuMXYyOC43YzAgMS4xLTEuMi45LTEuMiAyLjF2MjUuOWMwIC45LTEgMS4xLTEgMnY5LjRsLTcuMiAxOS40aC00Yy0xIDAtMi4xIDEtMi4xIDJ2NWgtM2MtMSAwLTIuMSAxLTIuMSAydjI3LjhoLTNjLTEgMC0yLjEuOS0yLjEgMnYzMy44YzAgMS40LTMgMi4xLTMgM3YxNjIuMWgtNWMtMSAwLTIuMSAxLTIuMSAydjM1LjhIMjBjLTEgMC0yLjEgMS0yLjEgMnY1My43SDIuN2MtMSAwLTIgMS0yIDJ2MjQuNWw3MS4xLjdoLjZsNzEuMS0uN3YtMjQuNWMwLTEtMS0yLTItMmgtMTUuMnYtNTMuN2MwLTEtMS0yLTIuMS0yaC0xMS4xdi0zNS44YzAtMS0xLTItMi4xLTJoLTVWMjA1LjVjMC0xLTMuMS0xLjYtMy4xLTN2LTMzLjhjMC0xLTEtMi0yLTJoLTN2LTI3LjhjMC0uOS0xLTItMi4xLTJoLTN2LTVjMC0xLTEtMi0yLTJoLTRsLTcuMi0xOS40di05LjRjMC0uOS0xLTEuMS0xLTJWNzMuMmMwLTEuMi0xLjItMS0xLjItMi4xVjQyLjRjMC0xLTEuMi0yLjEtMi4xLTIuMWgtLjlWLjNoLTQuNXoiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==";
            
            // Create root element
            // https://www.amcharts.com/docs/v5/getting-started/#Root_element
            var root = am5.Root.new("chartdiv2_3");
            
            
            // Set themes
            // https://www.amcharts.com/docs/v5/concepts/themes/
            root.setThemes([
              am5themes_Animated.new(root)
            ]);
            
            var gradient = am5.LinearGradient.new(root, {
              stops: [{
                color: am5.color(0xf0b24f)
              }, {
                color: am5.color(0xca6c46)
              }, {
                color: am5.color(0x0c0524)
              }]
            });
            
            
            // Create chart
            // https://www.amcharts.com/docs/v5/charts/xy-chart/
            var chart = root.container.children.push(am5xy.XYChart.new(root, {
              panX: false,
              panY: false,
              wheelX: "panX",
              wheelY: "zoomX",
              layout: root.verticalLayout,
              background: am5.Rectangle.new(root, {
                fillGradient: gradient
              })
            }));
            
            
            // Add legend
            // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
            var legend = chart.children.push(
              am5.Legend.new(root, {
                centerX: am5.p50,
                x: am5.p50
              })
            );
            
            var data = [{
              category: "Burj Khalifa",
              height: 828,
              ratio: 1 / 5.12,
              pictureSettings: {
                src: icon1
              }
            }, {
              category: "Willis Tower",
              height: 527,
              ratio: 1 / 5.06,
              pictureSettings: {
              src: icon2
            }
            }, {
              category: "Taipei 101",
              height: 508,
              ratio: 1 / 6.73,
              pictureSettings: {
                src: icon3
              }
            }, {
              category: "Petronas Towers",
              height: 452,
              ratio: 1 / 2.76,
              pictureSettings: {
                src: icon4
              }
            }, {
              category: "Empire State Building",
              height: 449,
              ratio: 1 / 3.41,
              pictureSettings: {
                src: icon5
              }
            }];
            
            
            // Create axes
            // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
            var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
              categoryField: "category",
              renderer: am5xy.AxisRendererX.new(root, {
                inside: true
              }),
              tooltip: am5.Tooltip.new(root, {})
            }));
            
            var xRenderer = xAxis.get("renderer");
            
            xRenderer.labels.template.setAll({
              fill: am5.color(0xffffff),
              fillOpacity: 0.5
            });
            
            xRenderer.grid.template.set("forceHidden", true);
            
            xAxis.data.setAll(data);
            
            var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
              min: 0,
              max: 1000,
              renderer: am5xy.AxisRendererY.new(root, {})
            }));
            
            var yRenderer = yAxis.get("renderer");
            
            yRenderer.grid.template.setAll({
              strokeDasharray: [4, 4]
            });
            
            
            // Add series
            // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
            var series = chart.series.push(am5xy.ColumnSeries.new(root, {
              xAxis: xAxis,
              yAxis: yAxis,
              valueYField: "height",
              categoryXField: "category"
            }));
            
            series.columns.template.setAll({
              width: am5.percent(100),
              strokeOpacity: 0,
              fillOpacity: 0
            });
            
            series.bullets.push(function(root, series, dataItem) {
              var tower = am5.Picture.new(root, {
                height: 100,
                centerX: am5.p50,
                centerY: am5.p100,
                opacity: 0.5,
                templateField: "pictureSettings"
              });
              
              tower.adapters.add("height", function(height, target) {
                if (dataItem) {
                  height = dataItem.get("bottom") - dataItem.get("top");
                }
                return height;
              });
              
              return am5.Bullet.new(root, {
                locationY: 0,
                sprite: tower,
                dynamic:true
              });
            });
            
            series.bullets.push(function() {
              return am5.Bullet.new(root, {
                locationY: 1,
                sprite: am5.Label.new(root, {
                  centerX: am5.p50,
                  centerY: am5.p100,
                  text: "{height} metres",
                  populateText: true
                })
              })
            })
            
            series.data.setAll(data);
            
            
            // Make stuff animate on load
            // https://www.amcharts.com/docs/v5/concepts/animations/
            series.appear();
            chart.appear(1000, 100);
            
            }); // end am5.ready()