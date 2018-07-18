import { Component, ViewChild } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

import { BillsPage } from '../bills/bills';
import { ExpensePage } from '../expense/expense';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-budget',
  templateUrl: 'budget.html'
})
export class BudgetPage {
  
  @ViewChild('radarCanvas') radarCanvas;
  radarChart: any;
  url = "http://35.200.185.110";

  constructor(public navCtrl: NavController, platform: Platform, public http: HTTP) {
    platform.ready().then(() => {
      
      this.http.get(this.url + "/fhm" , {}, {}).then(response => {
            this.loadChart(JSON.parse(response.data));
      });
    });
  }
  
  goToExpense(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ExpensePage);
  }
  goToBills(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BillsPage);
  }
  
  loadChart(chartData) {
        
        this.radarChart = new Chart(this.radarCanvas.nativeElement, {
            type: 'radar',
            data: {
                labels: chartData['label'],
                datasets: [{
                    label: 'Total Score: ' + chartData['score'],
                    data: chartData['datapoints'],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',  
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',  
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    display: false
                }
            } 
        });  
  }
}
