import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CanvasJSAngularChartsModule],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.css'
})
export class BarComponent {
  chartOptions = {
    theme: "dark",
    title:{
      text: ""
    },
    animationEnabled: true,
    toolTip: {
      shared: true
    },
    legend: {
      horizontalAlign: "right",
      verticalAlign: "center",
      reversed: true
    },
    axisY: {
       includeZero: true
    },
    data: [{
      type: "stackedColumn",
      name: "Energy Bill",
      showInLegend: true,
      dataPoints: [
        { label: "Feb-22", y: 71.20 },
        { label: "Mar-22", y: 78.30 },
        { label: "Apr-22", y: 85.90 },
        { label: "May-22", y: 99.40 },
        { label: "Jun-22", y: 154.20 },
        { label: "Jul-22", y: 179.80 },
        { label: "Aug-22", y: 202.10 },
        { label: "Sept-22", y: 164.90 },
        { label: "Oct-22", y: 101.00 },
        { label: "Nov-22", y: 95.10 },
        { label: "Dec-22", y: 98.80 },
        { label: "Jan-22", y: 71.20 },
        { label: "Feb-22", y: 73.10 },
        { label: "Mar-22", y: 89.00 },
        { label: "Apr-22", y: 81.40 },
        { label: "May-22", y: 148.20 },
        { label: "Jun-22", y: 182.00 },
        { label: "Jul-22", y: 190.70 },
        { label: "Aug-22", y: 214.20 },
        { label: "Sept-22", y: 179.30 },
        { label: "Oct-22", y: 127.90 },
        { label: "Nov-22", y: 112.80 },
        { label: "Dec-22", y: 97.20 },
        { label: "Jan-22", y: 74.20 }
      ]
    }, {
        type: "stackedColumn",
        name: "Gas Bill",
        showInLegend: true,
        dataPoints: [
          { label: "Feb-22", y: 125.60 },
        { label: "Mar-22", y: 92.50 },
        { label: "Apr-22", y: 78.40 },
        { label: "May-22", y: 53.20 },
        { label: "Jun-22", y: 49.90 },
        { label: "Jul-22", y: 47.80 },
        { label: "Aug-22", y: 48.20 },
        { label: "Sept-22", y: 51.80 },
        { label: "Oct-22", y: 52.80 },
        { label: "Nov-22", y: 85.10 },
        { label: "Dec-22", y: 99.70 },
        { label: "Jan-22", y: 119.50 },
        { label: "Feb-22", y: 132.60 },
        { label: "Mar-22", y: 102.40 },
        { label: "Apr-22", y: 89.90 },
        { label: "May-22", y: 54.80 },
        { label: "Jun-22", y: 52.70 },
        { label: "Jul-22", y: 47.50 },
        { label: "Aug-22", y: 48.10 },
        { label: "Sept-22", y: 51.30 },
        { label: "Oct-22", y: 56.40 },
        { label: "Nov-22", y: 78.10 },
        { label: "Dec-22", y: 97.30 },
        { label: "Jan-22", y: 120.60 }
        ]
    }, {
        type: "stackedColumn",
         name: "Water Bill",
        showInLegend: true,
        dataPoints: [
          
          { label: "Feb-22", y: 72.10 },
        { label: "Mar-22", y: 73.80 },
        { label: "Apr-22", y: 75.20 },
        { label: "May-22", y: 79.10 },
        { label: "Jun-22", y: 85.90 },
        { label: "Jul-22", y: 88.20 },
        { label: "Aug-22", y: 89.30 },
        { label: "Sept-22", y: 78.40 },
        { label: "Oct-22", y: 75.30 },
        { label: "Nov-22", y: 73.20 },
        { label: "Dec-22", y: 73.20 },
        { label: "Jan-22", y: 71.70 },
        { label: "Feb-22", y: 74.50 },
        { label: "Mar-22", y: 76.40 },
        { label: "Apr-22", y: 78.00 },
        { label: "May-22", y: 81.70 },
        { label: "Jun-22", y: 88.40 },
        { label: "Jul-22", y: 93.40 },
        { label: "Aug-22", y: 96.20 },
        { label: "Sept-22", y: 83.10 },
        { label: "Oct-22", y: 75.10 },
        { label: "Nov-22", y: 74.20 },
        { label: "Dec-22", y: 73.70 },
        { label: "Jan-22", y: 72.80 }
        ]
    }]
  }	
}  