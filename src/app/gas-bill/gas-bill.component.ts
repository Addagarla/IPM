import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

export interface data {
  [key: string]: any;
}


@Component({
  selector: 'app-gas-bill',
  standalone: true,
  imports: [CommonModule, CanvasJSAngularChartsModule],
  templateUrl: './gas-bill.component.html',
  styleUrl: './gas-bill.component.css'
})
export class GasBillComponent implements data {
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
        name: 'Gas Bill ',
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
            y: 125.6,
            name: 'February Gas Bill - 2022',
            color: '#FFA500',
            indexLabel: '$125.6',
          },
          {
            label: 'Mar-22',
            y: 92.5,
            name: 'March Gas Bill - 2022',
            color: '#9370DB',
            indexLabel: '$92.5',
          },
          {
            label: 'Apr-22',
            y: 78.4,
            name: 'April Gas Bill - 2022',
            color: '#FFA500',
            indexLabel: '$78.4',
          },
          {
            label: 'May-22',
            y: 53.2,
            name: 'May Gas Bill - 2022',
            color: '#9370DB',
            indexLabel: '$53.2',
          },
          {
            label: 'Jun-22',
            y: 49.9,
            name: 'June Gas Bill - 2022',
            color: '#FFA500',
            indexLabel: '$49.9',
          },
          {
            label: 'Jul-22',
            y: 47.8,
            name: 'July Gas Bill - 2022',
            color: '#9370DB',
            indexLabel: '$47.8',
          },
          {
            label: 'Aug-22',
            y: 48.2,
            name: 'August Gas Bill - 2022',
            color: '#FFA500',
            indexLabel: '$48.2',
          },
          {
            label: 'Sep-22',
            y: 51.8,
            name: 'September Gas Bill - 2022',
            color: '#9370DB',
            indexLabel: '$51.8',
          },
          {
            label: 'Oct-22',
            y: 52.8,
            name: 'October Gas Bill - 2022',
            color: '#FFA500',
            indexLabel: '$52.8',
          },
          {
            label: 'Nov-22',
            y: 85.1,
            name: 'November Gas Bill - 2022',
            color: '#9370DB',
            indexLabel: '$85.1',
          },
          {
            label: 'Dec-22',
            y: 99.7,
            name: 'December Gas Bill - 2022',
            color: '#FFA500',
            indexLabel: '$99.7',
          },
          {
            label: 'Jan-23',
            y: 119.5,
            name: 'january Gas Bill - 2023',
            color: '#9370DB',
            indexLabel: '$119.5',
          },
          {
            label: 'Feb-23',
            y: 132.6,
            name: 'February Gas Bill - 2023',
            color: '#FFA500',
            indexLabel: '$132.6',
          },
          {
            label: 'Mar-23',
            y: 102.4,
            name: 'March Gas Bill - 2023',
            color: '#9370DB',
            indexLabel: '$102.4',
          },
          {
            label: 'Apr-23',
            y: 89.9,
            name: 'April Gas Bill - 2023',
            color: '#FFA500',
            indexLabel: '$89.9',
          },
          {
            label: 'May-23',
            y: 54.8,
            name: 'May Gas Bill - 2023',
            color: '#9370DB',
            indexLabel: '$54.8',
          },
          {
            label: 'Jun-23',
            y: 52.7,
            name: 'June Gas Bill - 2023',
            color: '#FFA500',
            indexLabel: '$52.7',
          },
          {
            label: 'Jul-23',
            y: 47.5,
            name: 'July Gas Bill - 2023',
            color: '#9370DB',
            indexLabel: '$47.5',
          },
          {
            label: 'Aug-23',
            y: 48.1,
            name: 'August Gas Bill - 2023',
            color: '#FFA500',
            indexLabel: '$48.1',
          },
          {
            label: 'Sept-23',
            y: 51.3,
            name: 'September Gas Bill - 2023',
            color: '#9370DB',
            indexLabel: '$51.3',
          },
          {
            label: 'Oct-23',
            y: 56.4,
            name: 'October Gas Bill - 2023',
            color: '#FFA500',
            indexLabel: '$56.4',
          },
          {
            label: 'Nov-23',
            y: 78.1,
            name: 'November Gas Bill - 2023',
            color: '#9370DB',
            indexLabel: '$78.1',
          },
          {
            label: 'Dec-23',
            y: 97.3,
            name: 'December Gas Bill - 2023',
            color: '#FFA500',
            indexLabel: '$97.3',
          },
          {
            label: 'Jan-24',
            y: 120.6,
            name: 'January Gas Bill - 2024',
            color: '#9370DB',
            indexLabel: '$120.6',
          },
        ],
      },
    ],
    'February Gas Bill - 2022': [
      {
        color: '#FFA500',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Furnace', y: 59.03 },
          { label: 'Water Heater', y: 43.96 },
          { label: 'Soace Heater', y: 22.61 },
        ],
      },
    ],
    'March Gas Bill - 2022': [
      {
        color: '#9370DB',
        name: 'Returning Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Furnace', y: 38.85 },
          { label: 'Water Heater', y: 42.55 },
          { label: 'Soace Heater', y: 11.10 },
        ],
      },
    ],
    'April Gas Bill - 2022': [
      {
        color: '#FFA500',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Furnace', y: 30.58 },
          { label: 'Water Heater', y: 43.12 },
          { label: 'Soace Heater', y: 4.70 },
        ],
      },
    ],
    'May Gas Bill - 2022': [
      {
        color: '#9370DB',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Furnace', y: 10.64 },
          { label: 'Water Heater', y: 42.56 },
          { label: 'Soace Heater', y: 0 },
        ],
      },
    ],
    'June Gas Bill - 2022': [
      {
        color: '#FFA500',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Furnace', y: 4.99 },
          { label: 'Water Heater', y: 44.91 },
          { label: 'Soace Heater', y: 0 },
        ],
      },
    ],
    'July Gas Bill - 2022': [
      {
        color: '#9370DB',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Furnace', y: 2.39 },
          { label: 'Water Heater', y: 45.41 },
          { label: 'Soace Heater', y: 0 },
        ],
      },
    ],
    'August Gas Bill - 2022': [
      {
        color: '#FFA500',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Furnace', y: 2.41 },
          { label: 'Water Heater', y: 45.79 },
          { label: 'Soace Heater', y: 0 },
        ],
      },
    ],
    'September Gas Bill - 2022': [
      {
        color: '#9370DB',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Furnace', y: 6.22 },
          { label: 'Water Heater', y: 45.79 },
          { label: 'Soace Heater', y: 0 },
        ],
      },
    ],
    'October Gas Bill - 2022': [
      {
        color: '#FFA500',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Furnace', y: 7.39 },
          { label: 'Water Heater', y: 45.41 },
          { label: 'Soace Heater', y: 0 },
        ],
      },
    ],
    'November Gas Bill - 2022': [
      {
        color: '#9370DB',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Furnace', y: 39.15 },
          { label: 'Water Heater', y: 42.55 },
          { label: 'Soace Heater', y: 3.40 },
        ],
      },
    ],
    'December Gas Bill - 2022': [
      {
        color: '#FFA500',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Furnace', y: 43.87 },
          { label: 'Water Heater', y: 44.87 },
          { label: 'Soace Heater', y: 10.97 },
        ],
      },
    ],
    'january Gas Bill - 2023': [
      {
        color: '#9370DB',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Furnace', y: 57.36 },
          { label: 'Water Heater', y: 44.32 },
          { label: 'Soace Heater', y: 17.93 },
        ],
      },
    ],
    'February Gas Bill - 2023': [
      {
        color: '#FFA500',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Furnace', y: 63.65 },
          { label: 'Water Heater', y: 45.08 },
          { label: 'Soace Heater', y: 23.87 },
        ],
      },
    ],
    'March Gas Bill - 2023': [
      {
        color: '#9370DB',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Furnace', y: 44.03 },
          { label: 'Water Heater', y: 44.03 },
          { label: 'Soace Heater', y: 14.34 },
        ],
      },
    ],
    'April Gas Bill - 2023': [
      {
        color: '#FFA500',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Furnace', y: 39.56 },
          { label: 'Water Heater', y: 44.95 },
          { label: 'Soace Heater', y: 5.39 },
        ],
      },
    ],
    'May Gas Bill - 2023': [
      {
        color: '#9370DB',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Furnace', y: 9.86 },
          { label: 'Water Heater', y: 43.84 },
          { label: 'Soace Heater', y: 1.10 },
        ],
      },
    ],
    'June Gas Bill - 2023': [
      {
        color: '#FFA500',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Furnace', y: 7.91 },
          { label: 'Water Heater', y: 44.80 },
          { label: 'Soace Heater', y: 0 },
        ],
      },
    ],
    'July Gas Bill - 2023': [
      {
        color: '#9370DB',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Furnace', y: 3.80 },
          { label: 'Water Heater', y: 44.80 },
          { label: 'Soace Heater', y: 0 },
        ],
      },
    ],
    'August Gas Bill - 2023': [
      {
        color: '#FFA500',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Furnace', y: 3.85 },
          { label: 'Water Heater', y: 44.25 },
          { label: 'Soace Heater', y: 0 },
        ],
      },
    ],
    'September Gas Bill - 2023': [
      {
        color: '#9370DB',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Furnace', y: 6.67 },
          { label: 'Water Heater', y: 44.63 },
          { label: 'Soace Heater', y: 0 },
        ],
      },
    ],
    'October Gas Bill - 2023': [
      {
        color: '#FFA500',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Furnace', y: 11.28 },
          { label: 'Water Heater', y: 43.99 },
          { label: 'Soace Heater', y: 1.13 },
        ],
      },
    ],
    'November Gas Bill - 2023': [
      {
        color: '#9370DB',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Furnace', y: 29.68 },
          { label: 'Water Heater', y: 43.74 },
          { label: 'Soace Heater', y: 4.69 },
        ],
      },
    ],
    'December Gas Bill - 2023': [
      {
        color: '#FFA500',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Furnace', y: 41.84 },
          { label: 'Water Heater', y: 43.79 },
          { label: 'Soace Heater', y: 11.68 },
        ],
      },
    ],
    'January Gas Bill - 2024': [
      {
        color: '#9370DB',
        name: 'New Visitors',
        type: 'column',
        dataPoints: [
          { label: 'Furnace', y: 59.09 },
          { label: 'Water Heater', y: 43.42 },
          { label: 'Soace Heater', y: 18.09 },
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

