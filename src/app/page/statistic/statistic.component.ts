import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HeaderComponent } from '../../component/header/header.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { DataService } from '../../service/data/data.service';
import { SendInfoService } from '../../service/sendInfo/send-info.service';
import { HighchartsChartModule } from 'highcharts-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-statistic',
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    HighchartsChartModule,
    RouterLink,
  ],
  templateUrl: './statistic.component.html',
  styleUrl: './statistic.component.css',
})
export class StatisticComponent implements OnInit {
  allInfo: any;
  userName: any;
  curentData: any;
  dataOperator: any;
  getResBS: boolean = true;
  getResOW: boolean = false;
  curentPage: any;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  chartOptions2: Highcharts.Options = {};
  chartOptions3: Highcharts.Options = {};

  constructor(
    private dataService: DataService,
    private sendInfoService: SendInfoService
  ) {}

  ngOnInit(): void {
    this.sendInfoService.userLogin$.subscribe((data) => {
      this.userName = data;
      this.getInfo(this.userName);
    });
    this.sendInfoService.sendData$.subscribe((data) => {
      if (data !== undefined) {
        this.curentPage = data;
      }
    });
  }

  getInfo(userName: string) {
    this.dataService.getALllRes(userName).subscribe((data) => {
      this.allInfo = data;
      if (this.curentPage == undefined) {
        this.sendInfoService.sendDataInfo(this.allInfo.length - 1);
      }
      this.updateInfo();
    });
  }

  chart1() {
    this.chartOptions = {
      title: {
        text: 'Протестованих БС',
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b>',
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.y}',
          },
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Кількість',
          data: [
            {
              name: 'Лайф',
              y: this.curentData.testBSRes.lifeTested,
              color: '#FFBF00',
            },
            {
              name: 'Київстар',
              y: this.curentData.testBSRes.kyivstarTested,
              color: '#007FFF',
            },
            {
              name: 'Водафон',
              y: this.curentData.testBSRes.vodafoneTested,
              color: '#E32636',
            },
          ],
        },
      ],
    };
  }

  chart2() {
    this.chartOptions2 = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Стан БС',
      },
      xAxis: {
        categories: ['Всього', 'Лайф', 'Київстар', 'Водафон'],
        crosshair: true,
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          type: 'column',
          color: '#A4C639',
          name: 'Активні',
          data: [
            this.curentData.testBSRes.activeBS,
            this.curentData.testBSRes.lifeActiveBS,
            this.curentData.testBSRes.kyivstarActiveBS,
            this.curentData.testBSRes.vodafoneActiveBS,
          ],
        },
        {
          type: 'column',
          color: '#FF7E00',
          name: 'Тимчасвоно не Активні',
          data: [
            this.curentData.testBSRes.timeNoActiveBS,
            this.curentData.testBSRes.lifeTimeNoActiveBS,
            this.curentData.testBSRes.kyivstarTimeNoAtiveBS,
            this.curentData.testBSRes.vodafoneTimeNoAtiveBS,
          ],
        },
        {
          type: 'column',
          color: '#E32636',
          name: 'Не Активні',
          data: [
            this.curentData.testBSRes.noActiveBS,
            this.curentData.testBSRes.lifeNoActiveBS,
            this.curentData.testBSRes.kyivstarNoAtiveBS,
            this.curentData.testBSRes.vodafoneNoActiveBS,
          ],
        },
      ],
    };
  }

  chart3() {
    this.chartOptions3 = {
      title: {
        text: 'Результат тесту ОВ',
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b>',
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.y}',
          },
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Кількість',
          data: [
            {
              name: 'Працює',
              y: this.curentData.testOWRes.activeOW,
              color: '#A4C639',
            },
            {
              name: 'Пошкоджено',
              y: this.curentData.testOWRes.timeNoActiveOW,
              color: '#FF7E00',
            },
            {
              name: 'Не праює',
              y: this.curentData.testOWRes.noActiveOW,
              color: '#E32636',
            },
          ],
        },
      ],
    };
  }

  getRes(param: string) {
    this.getResBS = false;
    this.getResOW = false;

    if (param == 'BS') {
      this.getResBS = true;
    } else if (param == 'OW') {
      this.getResOW = true;
    } else {
      this.getResBS = true;
    }
  }

  dataLeft() {
    if (this.curentPage > 0) {
      this.sendInfoService.sendDataInfo(this.curentPage - 1);
      this.updateInfo();
    }
  }

  dataRight() {
    if (this.curentPage < this.allInfo.length - 1) {
      this.sendInfoService.sendDataInfo(this.curentPage + 1);
      this.updateInfo();
    }
  }

  dataFirst() {
    this.sendInfoService.sendDataInfo(0);
    this.updateInfo();
  }

  dataLast() {
    this.sendInfoService.sendDataInfo(this.allInfo.length - 1);
    this.updateInfo();
  }

  updateInfo() {
    this.curentData = this.allInfo[this.curentPage];
    this.chart1();
    this.chart2();
    this.chart3();
  }
}
