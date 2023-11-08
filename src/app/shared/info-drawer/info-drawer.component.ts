import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { IUser } from 'src/app/interface/types';

@Component({
  selector: 'app-info-drawer',
  templateUrl: './info-drawer.component.html',
  styleUrls: ['./info-drawer.component.css']
})
export class InfoDrawerComponent implements OnInit {
  public chart: any = [];
  
  @Input()
  chartInfo!: IUser | null;

  ngOnInit(): void {
    if (this.chartInfo) {
      console.log(this.chartInfo);
      this.createChart(this.chartInfo);
    }
  }
  createChart(chartInfo: IUser) {
    this.chart = new Chart('MyCharts', {
      type: 'line',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [
          {
            label: 'Temperature',
            data: chartInfo.temperature,
            backgroundColor: "red",
            borderColor: "red",
          },
          {
            label: 'HeartRate',
            data: chartInfo.heartRate,
            backgroundColor: "blue",
            borderColor: "blue",
          }
        ],
      },
      options: {
        aspectRatio: 2,
        showLine: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: chartInfo.username + "'s "+ " Vital Monitor",
            padding: {
              bottom: 40,
            },
            font: {
              size: 20,
              weight: 'normal',
            }
          }
        }
      },
    });
  }
}
