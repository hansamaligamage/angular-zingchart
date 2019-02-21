import { Component, OnInit } from '@angular/core';
import { ChartComponent } from './shared/app.chart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ChartComponent]
})

export class AppComponent implements OnInit{
  weight : number;
  height : number;
  bmi : string;

  constructor(private chartComponent : ChartComponent){}

  ngOnInit() {
    this.weight = 0;
    this.height = 0;
  }

  onValueChange() {
    var bmi = (this.weight / ((this.height / 100) * (this.height / 100)));
    if (isNaN(bmi) || bmi < 10)
      bmi = 10;
    else if (bmi > 40)
      bmi = 40;
    this.bmi = bmi.toFixed(2);
    this.chartComponent.ChangeChartValue(this.bmi);
  }
}


