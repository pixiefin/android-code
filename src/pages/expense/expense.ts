import { Component, ViewChild } from '@angular/core';
import { NavController, Platform, NavParams } from 'ionic-angular';
import { BillsPage } from '../bills/bills';
import { BudgetPage } from '../budget/budget';
import { Chart } from "chart.js";
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-expense',
  templateUrl: 'expense.html'
})
export class ExpensePage {

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('pieCanvas') pieCanvas;
  @ViewChild('lineCanvas') lineCanvas;
  barChart: any;
  lineChart: any;
  pieChart: any;
  
  url = "http://35.200.185.110";
  messages:any = [];
  
  constructor(public navCtrl: NavController, platform: Platform, public navparams: NavParams, public http: HTTP) {
    platform.ready().then(() => {

    this.http.get(this.url + "/expense" , {}, {}).then(response => {
            this.loadChart(JSON.parse(response.data));
      });

  });
  }
  
  goToBills(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BillsPage);
  }
  goToBudget(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BudgetPage);
  }
  
  loadChart(chartData) {
        
        this.lineChart = new Chart(this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["Jan", "Feb", "March", "April", "May", "Jun"],
                datasets: [{
                    label: 'Expense Heat',
                    data: [10000, 12000, 9000, 15000, 13000, 8500],
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
        
        this.pieChart = new Chart(this.pieCanvas.nativeElement, {
            type: 'polarArea',
            data: {
                labels: chartData['plabel'],
                datasets: [{
                    label: 'Breakup',
                    data: chartData['pdatapoints'],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)'
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
    
    this.barChart = new Chart(this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                datasets: [{
                    labels: chartData['blabel'],
                    data: chartData['bdatapoints'],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',  
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
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
