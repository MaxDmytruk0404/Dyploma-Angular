import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HeaderComponent } from '../../component/header/header.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { DataService } from '../../service/data/data.service';
import { RouterLink } from '@angular/router';
import { SendInfoService } from '../../service/sendInfo/send-info.service';

@Component({
  selector: 'app-statistic',
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './statistic.component.html',
  styleUrl: './statistic.component.css',
})
export class StatisticComponent implements OnInit {
  allInfo: any;
  userName: any;

  constructor(private dataService: DataService, private sendInfoService: SendInfoService) {}

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    
    this.sendInfoService.data$.subscribe(data => {
      this.userName = data;
      this.dataService.getData(this.userName).subscribe((data) => {
        this.allInfo = data.exists.dataInfo;
  
        // Поточна дата
        const todayStart = new Date();
        todayStart.setHours(0, 0, 0, 0); // Початок дня
        const todayEnd = new Date();
        todayEnd.setHours(23, 59, 59, 999); // Кінець дня
  
        // Дата для початку тижня
        const weekStart = new Date(todayStart);
        weekStart.setDate(todayStart.getDate() - todayStart.getDay()); // Понеділок цього тижня
  
        // Дата для початку місяця
        const monthStart = new Date(
          todayStart.getFullYear(),
          todayStart.getMonth(),
          1
        ); // Перший день місяця
  
        // Фільтруємо дані за сьогоднішній день
        const filteredToday = this.filterDataByDateRange(
          this.allInfo,
          todayStart,
          todayEnd
        );
        // Фільтруємо дані за тиждень
        const filteredWeek = this.filterDataByDateRange(
          this.allInfo,
          weekStart,
          todayEnd
        );
        // Фільтруємо дані за місяць
        const filteredMonth = this.filterDataByDateRange(
          this.allInfo,
          monthStart,
          todayEnd
        );
  
        // Побудова графіків
        this.createChart(
          'chart1',
          'Графік залежності пропускної здатності за сьогоднішній день',
          filteredToday
        );
        this.createChart(
          'chart2',
          'Графік залежності пропускної здатності за цей тиждень',
          filteredWeek
        );
        this.createChart(
          'chart3',
          'Графік залежності пропускної здатності за цей місяць',
          filteredMonth
        );
      });
    })

    
  }

  // Фільтрація даних за діапазоном дат
  filterDataByDateRange(data: any[], startDate: Date, endDate: Date) {
    return data.filter((info) => {
      const infoDate = new Date(info.time);
      return infoDate >= startDate && infoDate <= endDate;
    });
  }

  // Функція для створення графіка
  createChart(containerId: string, title: string, filteredData: any[]) {
    let dataTime = [];
    for (let info of filteredData) {
      let newInfo = [new Date(info.time).getTime(), Number(info.speed)];
      dataTime.push(newInfo);
    }

    this.allInfo = this.allInfo.slice(-20).reverse();

    Highcharts.chart(containerId, {
      chart: {
        zooming: {
          type: 'x',
        },
      },
      title: {
        text: title,
      },
      xAxis: {
        type: 'datetime',
      },
      yAxis: {
        title: {
          text: 'Пропускна здатність',
        },
      },
      time: {
        timezoneOffset: new Date().getTimezoneOffset() * 60 * 1000,
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        area: {
          marker: {
            radius: 2,
          },
          lineWidth: 1,
          color: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1,
            },
            stops: [
              [0, 'rgb(199, 113, 243)'],
              [0.7, 'rgb(76, 175, 254)'],
            ],
          },
          states: {
            hover: {
              lineWidth: 1,
            },
          },
          threshold: null,
        },
      },
      series: [
        {
          type: 'area',
          name: 'Пропускна здатність',
          data: dataTime,
        },
      ],
    });
  }
}
