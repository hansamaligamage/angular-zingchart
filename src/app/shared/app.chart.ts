import { Component, AfterViewInit } from '@angular/core';

declare var zingchart: any;

@Component({
    selector: 'app-chart',
    templateUrl: './app.chart.html',
    styleUrls: ['./app.chart.scss']
  })

export class ChartComponent implements AfterViewInit {

    chart: Chart = {
        id: "chart-1",
        data: {
          "type": "gauge",
          "scale-r": {
            "aperture": 200,
            "values": "10:40:1",
            "center": {
              "size": 10,
              "background-color": "#000",
              "border-color": "none"
            },
            "guide": {
              "visible": true
            },
            "item": {
              "visible": true
            },
            "tick": {
              "visible": true
            },
            "ring": {
              "size": 20,
              "rules": [
                {
                  "rule": "%v >= 10 && %v <= 20",
                  "background-color": "#f6f34a"
                },
                {
                  "rule": "%v >= 20 && %v <= 28",
                  "background-color": "#7cfd45"
                },
                {
                  "rule": "%v >= 28 && %v <= 32",
                  "background-color": "#f79333"
                },
                {
                  "rule": "%v >= 32 && %v <= 40",
                  "background-color": "#f30c22"
                },
              ]
            }
          },
          "plot": {
            "csize": "8%",
            "size": "90%",
            "background-color": "#000000"
          },
          "series": [
            {
              "values": [
                25
              ]
            }
          ]
        },
        height: 170,
        width: 170
      };

      ngAfterViewInit() {
        zingchart.render(this.chart);
      }
    
      ChangeChartValue (value){
        zingchart.exec('chart-1', 'setseriesvalues', {
          plotindex : 0,
          values : [Number(value)]
      });
   }
   
}

interface Chart {
    id:string;
    data : {};
    height : number;
    width : number;
   }
