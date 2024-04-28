import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-ipm-savings',
  standalone: true,
  imports: [ RouterOutlet, CommonModule, CanvasJSAngularChartsModule ],
  templateUrl: './ipm-savings.component.html',
  styleUrl: './ipm-savings.component.css'
})
export class IpmSavingsComponent {
  chartOptions = {
      animationEnabled: true,
      exportEnabled: true,
      title: {
          text: "Cumulative IPM Savings Post Improvements on Water and Power Bills"
      },
      axisY: {
          prefix: "$"
      },
      toolTip: {
          shared: true,
          // content: "{name}: ${y}"
      },
      legend: {
          fontSize: 13
      },
      data: [{
          type: "splineArea",
          showInLegend: true,
          name: "Power",
          markerSize: 0,
          // toolTipContent: "<span style=\"color:#4F81BC\"><strong>{name}: </strong></span> {y}",
          color: "rgba(255, 0, 0,.9)",
          dataPoints: [
              // { x: new Date(2023, 0), y: 3000000 },
              // { x: new Date(2023, 1), y: 3500000 },
              // { x: new Date(2023, 2), y: 3000000 },
              // { x: new Date(2023, 3), y: 3040000 },
              { x: new Date(2023, 4), y: 10 },
              { x: new Date(2023, 5), y: 60 },
              { x: new Date(2023, 6), y: 90 },
              { x: new Date(2023, 7), y: 140 },
              { x: new Date(2023, 8), y: 210 },
              { x: new Date(2023, 9), y: 270 },
              { x: new Date(2023, 10), y: 310 },
              { x: new Date(2023, 11), y: 370 }
          ]
      },
      {
          type: "splineArea",
          showInLegend: true,
          name: "Water",
          markerSize: 0,
          // toolTipContent: "<span style=\"color:#C0504E\"><strong>{name}: </strong></span> {y}<br><b>Total:<b> #total",
          color: "rgba(62,164,240,.9)",
          dataPoints: [
              { x: new Date(2023, 0), y: 45 },
              { x: new Date(2023, 1), y: 90 },
              { x: new Date(2023, 2), y: 120 },
              { x: new Date(2023, 3), y: 140 },
              { x: new Date(2023, 4), y: 180 },
              { x: new Date(2023, 5), y: 210 },
              { x: new Date(2023, 6), y: 240 },
              { x: new Date(2023, 7), y: 290 },
              { x: new Date(2023, 8), y: 325 },
              { x: new Date(2023, 9), y: 380 },
              { x: new Date(2023, 10), y: 415 },
              { x: new Date(2023, 11), y: 435 }
          ]
      } ]
      // {
      //     type: "splineArea",
      //     showInLegend: true,
      //     name: "Entertainment",
      //     markerSize: 0,
      //     color: "rgba(194,70,66,.9)",
      //     dataPoints: [
      //         { x: new Date(2020, 0), y: 1010000 },
      //         { x: new Date(2020, 1), y: 600000 },
      //         { x: new Date(2020, 2), y: 340000 },
      //         { x: new Date(2020, 3), y: 400000 },
      //         { x: new Date(2020, 4), y: 900000 },
      //         { x: new Date(2020, 5), y: 390000 },
      //         { x: new Date(2020, 6), y: 420000 },
      //         { x: new Date(2020, 7), y: 500000 },
      //         { x: new Date(2020, 8), y: 1430000 },
      //         { x: new Date(2020, 9), y: 1230000 },
      //         { x: new Date(2020, 10), y: 830000 },
      //         { x: new Date(2020, 11), y: 630000 }
      //     ]
      // },
      // {
      //     type: "splineArea",
      //     showInLegend: true,
      //     name: "Maintenance",
      //     markerSize: 0,
      //     color: "rgba(127,96,132,.9)",
      //     dataPoints: [
      //         { x: new Date(2020, 0), y: 170000 },
      //         { x: new Date(2020, 1), y: 260000 },
      //         { x: new Date(2020, 2), y: 100000 },
      //         { x: new Date(2020, 3), y: 140000 },
      //         { x: new Date(2020, 4), y: 90000 },
      //         { x: new Date(2020, 5), y: 100000 },
      //         { x: new Date(2020, 6), y: 120000 },
      //         { x: new Date(2020, 7), y: 500000 },
      //         { x: new Date(2020, 8), y: 130000 },
      //         { x: new Date(2020, 9), y: 230000 },
      //         { x: new Date(2020, 10), y: 280000 },
      //         { x: new Date(2020, 11), y: 130000 }
      //     ]
      // }]
  }
}           