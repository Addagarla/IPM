import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

export interface data {
  [key: string]: any;
}


@Component({
  selector: 'app-water-bill',
  standalone: true,
  imports: [CommonModule,CanvasJSAngularChartsModule],
  templateUrl: './water-bill.component.html',
  styleUrl: './water-bill.component.css'
})
export class WaterBillComponent implements data {
  chart: any;
  isButtonVisible = false;

  visitorsChartDrilldownHandler = (e: any) => {
    this.chart.options = this.visitorsDrilldownedChartOptions;
    this.chart.options.data = this.options[e.dataPoint.name];
    this.chart.options.title = { text: e.dataPoint.name };
    this.chart.render();
    this.isButtonVisible = true;
  };

  visitorsDrilldownedChartOptions = {
    animationEnabled: true,
    theme: 'light2',
    axisY: {
      gridThickness: 0,
      lineThickness: 1,
    },
    data: [],
  };

  newVSReturningVisitorsOptions = {
    animationEnabled: true,
    theme: 'light2',
    title: {
      text: '',
    },
    subtitles: [
      {
        text: 'Click on Any Segment to Drilldown',
        backgroundColor: '#2eacd1',
        fontSize: 16,
        fontColor: 'white',
        padding: 5,
      },
    ],
    data: [],
  };

  options: data = {
    'New vs Returning Visitors': [
      {
        type: 'column',
        name: 'Water Bill ',
        startAngle: 90,
        cursor: 'pointer',
        explodeOnClick: false,
        showInLegend: true,
        legendMarkerType: 'square',
        click: this.visitorsChartDrilldownHandler,
        indexLabelPlacement: 'inside',
        indexLabelFontColor: 'white',
        dataPoints: [
          {
            label: 'Feb-22',
            y: 72.10,
            name: 'February Water Bill - 2022',
            color: '#00FFFF',
            indexLabel: '$72.10',
          },
          {
            label: 'Mar-22',
            y: 73.80,
            name: 'March Water Bill - 2022',
            color: '#0000FF',
            indexLabel: '$73.80',
          },
          {
            label: 'Apr-22',
            y: 75.20,
            name: 'April Water Bill - 2022',
            color: '#00FFFF',
            indexLabel: '$75.20',
          },
          {
            label: 'May-22',
            y: 79.10,
            name: 'May Water Bill - 2022',
            color: '#0000FF',
            indexLabel: '$79.10',
          },
          {
            label: 'Jun-22',
            y: 85.90,
            name: 'June Water Bill - 2022',
            color: '#00FFFF',
            indexLabel: '$85.90',
          },
          {
            label: 'Jul-22',
            y: 88.20,
            name: 'July Water Bill - 2022',
            color: '#0000FF',
            indexLabel: '$88.20',
          },
          {
            label: 'Aug-22',
            y: 89.30,
            name: 'August Water Bill - 2022',
            color: '#00FFFF',
            indexLabel: '$89.30',
          },
          {
            label: 'Sep-22',
            y: 78.40,
            name: 'September Water Bill - 2022',
            color: '#0000FF',
            indexLabel: '$78.40',
          },
          {
            label: 'Oct-22',
            y: 75.30,
            name: 'October Water Bill - 2022',
            color: '#00FFFF',
            indexLabel: '$75.30',
          },
          {
            label: 'Nov-22',
            y: 73.20,
            name: 'November Water Bill - 2022',
            color: '#0000FF',
            indexLabel: '$73.20',
          },
          {
            label: 'Dec-22',
            y: 73.40,
            name: 'December Water Bill - 2022',
            color: '#00FFFF',
            indexLabel: '$73.40',
          },
          {
            label: 'Jan-23',
            y: 71.70,
            name: 'january Water Bill - 2023',
            color: '#0000FF',
            indexLabel: '$73.70',
          },
          {
            label: 'Feb-23',
            y: 74.50,
            name: 'February Water Bill - 2023',
            color: '#00FFFF',
            indexLabel: '$74.50',
          },
          {
            label: 'Mar-23',
            y: 76.40,
            name: 'March Water Bill - 2023',
            color: '#0000FF',
            indexLabel: '$76.40',
          },
          {
            label: 'Apr-23',
            y: 78.40,
            name: 'April Water Bill - 2023',
            color: '#00FFFF',
            indexLabel: '$78.40',
          },
          {
            label: 'May-23',
            y: 81.70,
            name: 'May Water Bill - 2023',
            color: '#0000FF',
            indexLabel: '$81.70',
          },
          {
            label: 'Jun-23',
            y: 88.40,
            name: 'June Water Bill - 2023',
            color: '#00FFFF',
            indexLabel: '$88.40',
          },
          {
            label: 'Jul-23',
            y: 93.40,
            name: 'July Water Bill - 2023',
            color: '#0000FF',
            indexLabel: '$93.40',
          },
          {
            label: 'Aug-23',
            y: 96.20,
            name: 'August Water Bill - 2023',
            color: '#00FFFF',
            indexLabel: '$96.20',
          },
          {
            label: 'Sept-23',
            y: 83.10,
            name: 'September Water Bill - 2023',
            color: '#0000FF',
            indexLabel: '$83.10',
          },
          {
            label: 'Oct-23',
            y: 75.60,
            name: 'October Water Bill - 2023',
            color: '#00FFFF',
            indexLabel: '$75.60',
          },
          {
            label: 'Nov-23',
            y: 74.20,
            name: 'November Water Bill - 2023',
            color: '#0000FF',
            indexLabel: '$74.20',
          },
          {
            label: 'Dec-23',
            y: 73.70,
            name: 'December Water Bill - 2023',
            color: '#00FFFF',
            indexLabel: '$73.70',
          },
          {
            label: 'Jan-24',
            y: 72.80,
            name: 'January Water Bill - 2024',
            color: '#0000FF',
            indexLabel: '$72.80',
          },
        ],
      },
    ],
    'February Water Bill - 2022': [
      {
        color: '#00FFFF',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Water', y: 41.10 },
          { label: 'Sewage', y: 31.00 },
               ],
      },
    ],
    'March Water Bill - 2022': [
      {
        color: '#0000FF',
        name: 'Returning Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Water', y: 42.80 },
          { label: 'Sewage', y: 31.00 },
        ],
      },
    ],
    'April Water Bill - 2022': [
      {
        color: '#00FFFF',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Water', y: 41.36 },
          { label: 'Sewage', y: 33.84 },
        ],
      },
    ],
    'May Water Bill - 2022': [
      {
        color: '#0000FF',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Water', y: 43.51 },
          { label: 'Sewage', y: 35.60 },
        ],
      },
    ],
    'June Water Bill - 2022': [
      {
        color: '#00FFFF',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Water', y: 48.96 },
          { label: 'Sewage', y: 36.94 },
        ],
      },
    ],
    'July Water Bill - 2022': [
      {
        color: '#0000FF',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Water', y: 47.63 },
          { label: 'Sewage', y: 40.57 },
        ],
      },
    ],
    'August Water Bill - 2022': [
      {
        color: '#00FFFF',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Water', y: 50.90 },
          { label: 'Sewage', y: 38.40 },
        ],
      },
    ],
    'September Water Bill - 2022': [
      {
        color: '#0000FF',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Water', y: 45.47 },
          { label: 'Sewage', y: 32.93 },
        ],
      },
    ],
    'October Water Bill - 2022': [
      {
        color: '#00FFFF',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Water', y: 41.42 },
          { label: 'Sewage', y: 33.89 },
        ],
      },
    ],
    'November Water Bill - 2022': [
      {
        color: '#0000FF',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Water', y: 39.53 },
          { label: 'Sewage', y: 33.67 },
        ],
      },
    ],
    'December Water Bill - 2022': [
      {
        color: '#00FFFF',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Water', y: 41.10 },
          { label: 'Sewage', y: 32.30 },
        ],
      },
    ],
    'january Water Bill - 2023': [
      {
        color: '#0000FF',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Water', y: 40.87 },
          { label: 'Sewage', y: 30.83 },
        ],
      },
    ],
    'February Water Bill - 2023': [
      {
        color: '#00FFFF',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Water', y: 41.72 },
          { label: 'Sewage', y: 32.83 },
        ],
      },
    ],
    'March Water Bill - 2023': [
      {
        color: '#0000FF',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Water', y: 42.02 },
          { label: 'Sewage', y: 34.38 },
        ],
      },
    ],
    'April Water Bill - 2023': [
      {
        color: '#00FFFF',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Water', y: 44.46 },
          { label: 'Sewage', y: 33.54 },
        ],
      },
    ],
    'May Water Bill - 2023': [
      {
        color: '#0000FF',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Water', y: 44.94 },
          { label: 'Sewage', y: 36.77 },
        ],
      },
    ],
    'June Water Bill - 2023': [
      {
        color: '#00FFFF',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Water', y: 48.62 },
          { label: 'Sewage', y: 39.78 },
        ],
      },
    ],
    'July Water Bill - 2023': [
      {
        color: '#0000FF',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Water', y: 53.24 },
          { label: 'Sewage', y: 40.16 },
        ],
      },
    ],
    'August Water Bill - 2023': [
      {
        color: '#00FFFF',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Water', y: 53.87 },
          { label: 'Sewage', y: 42.33 },
        ],
      },
    ],
    'September Water Bill - 2023': [
      {
        color: '#0000FF',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Water', y: 45.71 },
          { label: 'Sewage', y: 37.40 },
        ],
      },
    ],
    'October Water Bill - 2023': [
      {
        color: '#00FFFF',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Water', y: 41.58 },
          { label: 'Sewage', y: 34.02 },
        ],
      },
    ],
    'November Water Bill - 2023': [
      {
        color: '#0000FF',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Water', y: 40.07 },
          { label: 'Sewage', y: 34.13 },
        ],
      },
    ],
    'December Water Bill - 2023': [
      {
        color: '#00FFFF',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Water', y: 42.01 },
          { label: 'Sewage', y: 31.69 },
        ],
      },
    ],
    'January Water Bill - 2024': [
      {
        color: '#0000FF',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Water', y: 40.77 },
          { label: 'Sewage', y: 32.03 },
        ],
      },
    ],
  };
  chartOptions: any;

  handleClick(event: Event) {
    this.chart.options = this.newVSReturningVisitorsOptions;
    this.chart.options.data = this.options['New vs Returning Visitors'];
    this.chart.render();
    this.isButtonVisible = false;
  }

  getChartInstance(chart: object) {
    this.chart = chart;
    this.chart.options = this.newVSReturningVisitorsOptions;
    this.chart.options.data = this.options['New vs Returning Visitors'];
    this.chart.render();
  }
}

