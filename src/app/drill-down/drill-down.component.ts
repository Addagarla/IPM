import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

export interface data {
  [key: string]: any;
}

@Component({
  selector: 'app-drill-down',
  standalone: true,
  imports: [CommonModule,CanvasJSAngularChartsModule],
  templateUrl: './drill-down.component.html',
  styleUrl: './drill-down.component.css'
})
export class DrillDownComponent implements data {
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
        name: 'Energy Bill ',
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
            y: 71.2,
            name: 'February Energy Bill - 2022',
            color: '#058dc7',
            indexLabel: '$71.2',
          },
                    {
            label: 'Mar-22',
            y: 78.3,
            name: 'March Energy Bill - 2022',
            color: '#50b432',
            indexLabel: '$78.3',
          },
          {
            label: 'Apr-22',
            y: 85.9,
            name: 'April Energy Bill - 2022',
            color: '#058dc7',
            indexLabel: '$85.9',
          },
          {
            label: 'May-22',
            y: 99.4,
            name: 'May Energy Bill - 2022',
            color: '#50b432',
            indexLabel: '$99.4',
          },
          {
            label: 'Jun-22',
            y: 154.2,
            name: 'June Energy Bill - 2022',
            color: '#058dc7',
            indexLabel: '$154.2',
          },
          {
            label: 'Jul-22',
            y: 179.8,
            name: 'July Energy Bill - 2022',
            color: '#50b432',
            indexLabel: '$179.8',
          },
          {
            label: 'Aug-22',
            y: 202.2,
            name: 'August Energy Bill - 2022',
            color: '#058dc7',
            indexLabel: '$202.2',
          },
          {
            label: 'Sep-22',
            y: 164.9,
            name: 'September Energy Bill - 2022',
            color: '#50b432',
            indexLabel: '$164.9',
          },
          {
            label: 'Oct-22',
            y: 101.0,
            name: 'October Energy Bill - 2022',
            color: '#058dc7',
            indexLabel: '$101.0',
          },
          {
            label: 'Nov-22',
            y: 95.1,
            name: 'November Energy Bill - 2022',
            color: '#50b432',
            indexLabel: '$95.1',
          },
          {
            label: 'Dec-22',
            y: 98.8,
            name: 'December Energy Bill - 2022',
            color: '#058dc7',
            indexLabel: '$98.8',
          },
          {
            label: 'Jan-23',
            y: 71.2,
            name: 'january Energy Bill - 2023',
            color: '#50b432',
            indexLabel: '$71.2',
          },
          {
            label: 'Feb-23',
            y: 73.1,
            name: 'February Energy Bill - 2023',
            color: '#058dc7',
            indexLabel: '$73.1',
          },
          {
            label: 'Mar-23',
            y: 89.0,
            name: 'March Energy Bill - 2023',
            color: '#50b432',
            indexLabel: '$89.0',
          },
          {
            label: 'Apr-23',
            y: 81.4,
            name: 'April Energy Bill - 2023',
            color: '#058dc7',
            indexLabel: '$81.4',
          },
          {
            label: 'May-23',
            y: 148.2,
            name: 'May Energy Bill - 2023',
            color: '#50b432',
            indexLabel: '$148.2',
          },
          {
            label: 'Jun-23',
            y: 182.0,
            name: 'June Energy Bill - 2023',
            color: '#058dc7',
            indexLabel: '$182.0',
          },
          {
            label: 'Jul-23',
            y: 190.7,
            name: 'Jul Energy Bill - 2023',
            color: '#50b432',
            indexLabel: '$190.7',
          },
          {
            label: 'Aug-23',
            y: 214.2,
            name: 'August Energy Bill - 2023',
            color: '#058dc7',
            indexLabel: '$214.2',
          },
          {
            label: 'Sept-23',
            y: 179.3,
            name: 'September Energy Bill - 2023',
            color: '#50b432',
            indexLabel: '$179.3',
          },
          {
            label: 'Oct-23',
            y: 127.9,
            name: 'October Energy Bill - 2023',
            color: '#058dc7',
            indexLabel: '$127.9',
          },
          {
            label: 'Nov-23',
            y: 112.8,
            name: 'November Energy Bill - 2023',
            color: '#50b432',
            indexLabel: '$112.8',
          },
          {
            label: 'Dec-23',
            y: 97.2,
            name: 'December Energy Bill - 2023',
            color: '#058dc7',
            indexLabel: '$97.2',
          },
          {
            label: 'Jan-24',
            y: 74.2,
            name: 'January Energy Bill - 2024',
            color: '#50b432',
            indexLabel: '$74.2',
          },
        ],
      },
    ],
    'February Energy Bill - 2022': [
      {
        color: '#058dc7',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y: 43.23 },
          { label: 'Dryer', y: 8.54 },
          { label: 'Range', y: 4.27 },
          { label: 'Kitchen', y: 3.56 },
          { label: 'BedRoom 1', y: 4.27 },
          { label: 'Living Room', y: 3.2 },
          { label: 'BedRoom 2', y: 3.92 },
        ],
      },
    ],
    'March Energy Bill - 2022': [
      {
        color: '#50b432',
        name: 'Returning Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y:  47.76 },
          { label: 'Dryer', y: 9.40  },
          { label: 'Range', y:  4.70  },
          { label: 'Kitchen', y:  3.92  },
          { label: 'BedRoom 1', y:  4.70  },
          { label: 'Living Room', y:  3.52  },
          { label: 'BedRoom 2', y:  4.31  },
        ],
      },
    ],
    'April Energy Bill - 2022': [
      {
        color: '#058dc7',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y:  53.26  },
          { label: 'Dryer', y:  9.45  },
          { label: 'Range', y:  5.15  },
          { label: 'Kitchen', y:  4.30  },
          { label: 'BedRoom 1', y:  5.15  },
          { label: 'Living Room', y:  3.87  },
          { label: 'BedRoom 2', y:  4.72  },
        ],
      },
    ],
    'May Energy Bill - 2022': [
      {
        color: '#50b432',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y:  62.62  },
          { label: 'Dryer', y:  9.94  },
          { label: 'Range', y:  5.96  },
          { label: 'Kitchen', y:  4.97  },
          { label: 'BedRoom 1', y:  5.96  },
          { label: 'Living Room', y:  4.47  },
          { label: 'BedRoom 2', y:  5.47  },
        ],
      },
    ],
    'June Energy Bill - 2022': [
      {
        color: '#058dc7',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y:  102.54  },
          { label: 'Dryer', y:  13.88 },
          { label: 'Range', y:  7.71 },
          { label: 'Kitchen', y:  6.17 },
          { label: 'BedRoom 1', y: 9.25 },
          { label: 'Living Room', y: 6.94 },
          { label: 'BedRoom 2', y: 7.71 },
        ],
      },
    ],
    'July Energy Bill - 2022': [
      {
        color: '#50b432',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y: 124.06 },
          { label: 'Dryer', y: 16.18 },
          { label: 'Range', y: 8.99 },
          { label: 'Kitchen', y: 7.19 },
          { label: 'BedRoom 1', y: 7.19 },
          { label: 'Living Room', y: 7.19 },
          { label: 'BedRoom 2', y: 8.99 },
        ],
      },
    ],
    'August Energy Bill - 2022': [
      {
        color: '#058dc7',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y: 137.43 },
          { label: 'Dryer', y: 18.19 },
          { label: 'Range', y: 10.11 },
          { label: 'Kitchen', y: 8.08 },
          { label: 'BedRoom 1', y: 10.11 },
          { label: 'Living Room', y: 8.08 },
          { label: 'BedRoom 2', y: 10.11 },
        ],
      },
    ],
    'September Energy Bill - 2022': [
      {
        color: '#50b432',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y: 112.13 },
          { label: 'Dryer', y: 14.84 },
          { label: 'Range', y: 8.25 },
          { label: 'Kitchen', y: 6.60 },
          { label: 'BedRoom 1', y: 6.60 },
          { label: 'Living Room', y: 7.42 },
          { label: 'BedRoom 2', y: 9.07 },
        ],
      },
    ],
    'October Energy Bill - 2022': [
      {
        color: '#058dc7',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y: 62.62 },
          { label: 'Dryer', y: 11.11 },
          { label: 'Range', y: 6.06 },
          { label: 'Kitchen', y: 5.05 },
          { label: 'BedRoom 1', y: 6.06 },
          { label: 'Living Room', y: 4.55 },
          { label: 'BedRoom 2', y: 5.56 },
        ],
      },
    ],
    'November Energy Bill - 2022': [
      {
        color: '#50b432',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y: 58.96 },
          { label: 'Dryer', y: 10.46 },
          { label: 'Range', y: 5.71 },
          { label: 'Kitchen', y: 4.76 },
          { label: 'BedRoom 1', y: 5.71 },
          { label: 'Living Room', y: 4.28 },
          { label: 'BedRoom 2', y: 5.23 },
        ],
      },
    ],
    'December Energy Bill - 2022': [
      {
        color: '#058dc7',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y: 60.27 },
          { label: 'Dryer', y: 11.86 },
          { label: 'Range', y: 5.93 },
          { label: 'Kitchen', y: 4.94 },
          { label: 'BedRoom 1', y: 5.93 },
          { label: 'Living Room', y: 4.45 },
          { label: 'BedRoom 2', y: 5.43 },
        ],
      },
    ],
    'january Energy Bill - 2023': [
      {
        color: '#50b432',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y: 44.14 },
          { label: 'Dryer', y: 8.54 },
          { label: 'Range', y: 3.56 },
          { label: 'Kitchen', y: 3.56 },
          { label: 'BedRoom 1', y: 4.27 },
          { label: 'Living Room', y: 3.20 },
          { label: 'BedRoom 2', y: 3.92 },
        ],
      },
    ],
    'February Energy Bill - 2023': [
      {
        color: '#058dc7',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y: 45.32 },
          { label: 'Dryer', y: 8.77 },
          { label: 'Range', y: 3.66 },
          { label: 'Kitchen', y: 3.66 },
          { label: 'BedRoom 1', y: 4.39 },
          { label: 'Living Room', y: 3.29 },
          { label: 'BedRoom 2', y: 4.02 },
        ],
      },
    ],
    'March Energy Bill - 2023': [
      {
        color: '#50b432',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y: 54.29 },
          { label: 'Dryer', y: 10.68 },
          { label: 'Range', y: 5.34 },
          { label: 'Kitchen', y: 4.45 },
          { label: 'BedRoom 1', y: 5.34 },
          { label: 'Living Room', y: 4.01 },
          { label: 'BedRoom 2', y: 4.90 },
        ],
      },
    ],
    'April Energy Bill - 2023': [
      {
        color: '#058dc7',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y: 49.65 },
          { label: 'Dryer', y: 9.77 },
          { label: 'Range', y: 4.88 },
          { label: 'Kitchen', y: 4.07 },
          { label: 'BedRoom 1', y: 4.88 },
          { label: 'Living Room', y: 3.66 },
          { label: 'BedRoom 2', y: 4.48 },
        ],
      },
    ],
    'May Energy Bill - 2023': [
      {
        color: '#50b432',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y: 96.33 },
          { label: 'Dryer', y: 13.34 },
          { label: 'Range', y: 7.41 },
          { label: 'Kitchen', y: 7.41 },
          { label: 'BedRoom 1', y: 8.89 },
          { label: 'Living Room', y: 6.67 },
          { label: 'BedRoom 2', y: 8.15 },
        ],
      },
    ],
    'June Energy Bill - 2023': [
      {
        color: '#058dc7',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y: 121.94 },
          { label: 'Dryer', y: 16.38 },
          { label: 'Range', y: 9.10 },
          { label: 'Kitchen', y: 7.28 },
          { label: 'BedRoom 1', y: 9.10 },
          { label: 'Living Room', y: 8.19 },
          { label: 'BedRoom 2', y: 10.01 },
        ],
      },
    ],
    'July Energy Bill - 2023': [
      {
        color: '#50b432',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y: 123.96 },
          { label: 'Dryer', y: 15.26 },
          { label: 'Range', y: 11.44 },
          { label: 'Kitchen', y: 9.54 },
          { label: 'BedRoom 1', y: 11.44 },
          { label: 'Living Room', y: 8.58 },
          { label: 'BedRoom 2', y: 10.49 },
        ],
      },
    ],
    'August Energy Bill - 2023': [
      {
        color: '#058dc7',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y: 152.08 },
          { label: 'Dryer', y: 14.99 },
          { label: 'Range', y: 10.71 },
          { label: 'Kitchen', y: 8.57 },
          { label: 'BedRoom 1', y: 10.71 },
          { label: 'Living Room', y: 8.57 },
          { label: 'BedRoom 2', y: 8.57 },
        ],
      },
    ],
    'September Energy Bill - 2023': [
      {
        color: '#50b432',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y: 122.82 },
          { label: 'Dryer', y: 14.34 },
          { label: 'Range', y: 8.97 },
          { label: 'Kitchen', y: 7.17 },
          { label: 'BedRoom 1', y: 8.97 },
          { label: 'Living Room', y: 7.17 },
          { label: 'BedRoom 2', y: 9.86 },
        ],
      },
    ],
    'October Energy Bill - 2023': [
      {
        color: '#058dc7',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y: 80.58 },
          { label: 'Dryer', y: 12.79 },
          { label: 'Range', y: 7.67 },
          { label: 'Kitchen', y: 6.40 },
          { label: 'BedRoom 1', y: 7.67 },
          { label: 'Living Room', y: 5.76 },
          { label: 'BedRoom 2', y: 7.03 },
        ],
      },
    ],
    'November Energy Bill - 2023': [
      {
        color: '#50b432',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y: 69.94 },
          { label: 'Dryer', y: 12.41 },
          { label: 'Range', y: 6.77 },
          { label: 'Kitchen', y: 5.64 },
          { label: 'BedRoom 1', y: 6.77 },
          { label: 'Living Room', y: 5.08 },
          { label: 'BedRoom 2', y: 6.20 },
        ],
      },
    ],
    'December Energy Bill - 2023': [
      {
        color: '#058dc7',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y: 59.29 },
          { label: 'Dryer', y: 11.66 },
          { label: 'Range', y: 5.83 },
          { label: 'Kitchen', y: 4.86 },
          { label: 'BedRoom 1', y: 5.83 },
          { label: 'Living Room', y: 4.37 },
          { label: 'BedRoom 2', y: 5.35 },
        ],
      },
    ],
    'January Energy Bill - 2024': [
      {
        color: '#50b432',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'HVAC', y: 45.26 },
          { label: 'Dryer', y: 8.90 },
          { label: 'Range', y: 4.45 },
          { label: 'Kitchen', y: 3.71 },
          { label: 'BedRoom 1', y: 4.45 },
          { label: 'Living Room', y: 3.34 },
          { label: 'BedRoom 2', y: 4.08 },
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

