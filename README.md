# angular-zingchart
This code sample describes how to render a zingchart gauge using Angular 6, The solution is built on Visual Studio Code.

![Zing Chart control](https://github.com/hansamaligamage/angular-zingchart/blob/master/Images/zingchart%20control.png?raw=true)

# How to start and debug the applications

Go inside the solution, you have to install npm packages first before build and start the application,

```
npm i

ng build

ng serve
```

# app.chart html template

```
<div id="{{chart.id}}"></div>
```

# app.chart ts file
You can provide configuration values to render zingchart component as below.

```
export class ChartComponent implements AfterViewInit {

    chart: Chart = {
        id: "chart-1",
        data: {
          "type": "gauge",
          "scale-r": {
            "aperture": 200,
            "values": "10:40:1",
            "center": { "size": 10, "background-color": "#000", "border-color": "none" },
            "guide": { "visible": true },
            "item": { "visible": true },
            "tick": { "visible": true },
            "ring": {
              "size": 20,
              "rules": [
                { "rule": "%v >= 10 && %v <= 20", "background-color": "#f6f34a" },
                { "rule": "%v >= 20 && %v <= 28", "background-color": "#7cfd45" },
                { "rule": "%v >= 28 && %v <= 32", "background-color": "#f79333" },
                { "rule": "%v >= 32 && %v <= 40", "background-color": "#f30c22" },
              ]
            }
          },
          "plot": { "csize": "8%", "size": "90%", "background-color": "#000000" },
          "series": [ { "values": [ 25 ] } ]
        },
        height: 170,
        width: 170
      };

      ngAfterViewInit() {
        zingchart.render(this.chart);
      }
   }
```
