import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
 
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
 
export interface data {
	[key: string]: any;
}

@Component({
  selector: 'app-pie-drill',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CanvasJSAngularChartsModule],
  templateUrl: './pie-drill.component.html',
  styleUrl: './pie-drill.component.css'
})
export class PieDrillComponent implements data  {
  chart: any;
isButtonVisible = false;

visitorsChartDrilldownHandler = (e: any) => {
this.chart.options = this.visitorsDrilldownedChartOptions;	
this.chart.options.data = this.options[e.dataPoint.name];
this.chart.options.title = { text: e.dataPoint.name }
this.chart.render();
this.isButtonVisible = true;
}

visitorsDrilldownedChartOptions = {
animationEnabled: true,
theme: "light2",
axisY: {
gridThickness: 0,
lineThickness: 1
},
data: []
};

newVSReturningVisitorsOptions = {
animationEnabled: true,
theme: "light2",
title: {
text: ""
},
subtitles: [{
text: "Click on Any Segment to Drilldown",
backgroundColor: "#2eacd1",
fontSize: 16,
fontColor: "white",
padding: 5
}],
data: []
};

options: data = {
"New vs Returning Visitors": [{
type: "pie",
name: "New vs Returning Visitors",
startAngle: 90,
cursor: "pointer",
explodeOnClick: false,
showInLegend: true,
legendMarkerType: "square",			
click: this.visitorsChartDrilldownHandler,
indexLabelPlacement: "inside",
indexLabelFontColor: "white",
dataPoints: [
  { y: 42.2, name: "Energy Bill", color: "#058dc7", indexLabel: "45.2%" },
  { y: 26.9, name: "Gas Bill", color: "#50b432", indexLabel: "26.9%" },
  { y: 27.9, name: "Water Bill", color: "#FFA500", indexLabel: "27.9%" }
]
}],
"Energy Bill": [{
color: "#058dc7",
name: "Monthly Energy Bill",
type: "column",
dataPoints: [
  { label: "Feb", y: 73.10, indexLabel: "$73.10%" },
  { label: "Mar", y: 89.00, indexLabel: "$89.00" },
  { label: "Apr", y: 81.40, indexLabel: "$81.40" },
  { label: "May", y: 148.20, indexLabel: "$148.20" },
  { label: "Jun", y: 182.00, indexLabel: "$182.00" },
  { label: "Jul", y: 190.70, indexLabel: "$190.70" },
  { label: "Aug", y: 214.20, indexLabel: "$214.20" },
  { label: "Sep", y: 179.30, indexLabel: "$179.30" },
  { label: "Oct", y: 127.90, indexLabel: "$127.90" },
  { label: "Nov", y: 112.80, indexLabel: "$112.80" },
  { label: "Dec", y: 97.20, indexLabel: "$97.20" },
  { label: "Jan", y: 74.20, indexLabel: "$74.20" },
]
}],
"Gas Bill": [{
color: "#50b432",
name: "Gas Bill",
type: "column",
dataPoints: [
  { label: "Feb", y: 132.60, indexLabel: "$132.60" },
  { label: "Mar", y: 102.40, indexLabel: "$102.40" },
  { label: "Apr", y: 89.90, indexLabel: "$89.90" },
  { label: "May", y: 54.80, indexLabel: "$54.80" },
  { label: "Jun", y: 52.70, indexLabel: "$52.70" },
  { label: "Jul", y: 47.50, indexLabel: "$47.50" },
  { label: "Aug", y: 48.10, indexLabel: "$48.10" },
  { label: "Sep", y: 51.30, indexLabel: "$51.30" },
  { label: "Oct", y: 56.40, indexLabel: "$56.40" },
  { label: "Nov", y: 78.10, indexLabel: "$78.10" },
  { label: "Dec", y: 97.30, indexLabel: "$97.30" },
  { label: "Jan", y: 120.60, indexLabel: "$120.60" },
]
}],
"Water Bill": [{
  color: "#FFA500",
  name: "Water Bill",
  type: "column",
  dataPoints: [
    { label: "Feb", y: 74.50, indexLabel: "$74.50" },
    { label: "Mar", y: 76.40, indexLabel: "$76.40" },
    { label: "Apr", y: 78.00, indexLabel: "$78.00" },
    { label: "May", y: 81.70, indexLabel: "$81.70" },
    { label: "Jun", y: 88.40, indexLabel: "$88.40" },
    { label: "Jul", y: 93.40, indexLabel: "$93.40" },
    { label: "Aug", y: 96.20, indexLabel: "$96.20" },
    { label: "Sep", y: 83.10, indexLabel: "$83.10" },
    { label: "Oct", y: 75.60, indexLabel: "$75.60" },
    { label: "Nov", y: 74.20, indexLabel: "$74.20" },
    { label: "Dec", y: 73.70, indexLabel: "$73.70" },
    { label: "Jan", y: 72.80, indexLabel: "$72.80" },
  ]
  }]
};
chartOptions: any;

handleClick(event: Event) { 
this.chart.options = this.newVSReturningVisitorsOptions;
this.chart.options.data = this.options["New vs Returning Visitors"];
this.chart.render(); 
this.isButtonVisible = false;
} 	

getChartInstance(chart: object) {
this.chart = chart;
this.chart.options = this.newVSReturningVisitorsOptions;
this.chart.options.data = this.options["New vs Returning Visitors"];
this.chart.render();
}
}                     
