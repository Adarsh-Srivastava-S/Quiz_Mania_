import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public myChart1: any;
  public myChart: any;
  constructor() { }
  ngOnInit(): void {
     this.createChart();
     this.createChart1();
  }
  createChart(){
    this.myChart =  new Chart("myChart", {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','July','Aug','Sep','Oct','Nov','Dec'],
          datasets: [{
            label: 'Earning in $',
            data: [2050,2100,3500,3800,9631,4521,1400,2100,4200,51000,3210,4323],
            backgroundColor:[
              'rgba(85,85,85,1)',
            ],
            borderColor:[
              'rgba(41,155,99,1)',
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive:true
        }
      });
  }

  createChart1(){
    this.myChart1 =  new Chart("myChart1", {
      type: 'doughnut',
        data: {
          labels: ['Academic','Non-academic','Administration','Others'],
          datasets: [{
            label: 'Employees',
            data: [42,12,8,6],
            backgroundColor:[
              'rgba(41,155,99,1)',
              'rgba(54,162,235,1)',
              'rgba(255,206,86,1)',
              'rgba(120,46,139,1)',
            ],
            borderColor:[
              'rgba(41,155,99)',
              'rgba(54,162,235,1)',
              'rgba(225,206,86,1)',
              'rgba(120,46,139,1)',
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive:true
        }
      });
  }
  }

