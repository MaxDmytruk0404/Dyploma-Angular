import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../component/header/header.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { SpeedTestModule } from 'ng-speed-test';
import { SpeedTestService } from 'ng-speed-test';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../service/data/data.service';
import { SendInfoService } from '../../service/sendInfo/send-info.service';

@Component({
  selector: 'app-test',
  imports: [CommonModule, HeaderComponent, FooterComponent, SpeedTestModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit{
  ipInfo: any;
  speed: any;
  ping: any;
  allInfo: any
  isTestRunning: boolean = false;
  buttonHide: boolean = false;
  userName: any;

  constructor(private speedTestService: SpeedTestService, private http: HttpClient, private dataService: DataService, private sendInfoService: SendInfoService) {}

  ngOnInit(): void {
    this.sendInfoService.data$.subscribe(data=> {
      this.userName = data;
    })
  }

 async startSpeedTest() {
  this.allInfo = '';

    this.isTestRunning = true;
    this.buttonHide = true;
    const speed = (await this.getSpeedUntilDefined()).toFixed(1);

      const connection =
      (navigator as any).connection ||
      (navigator as any).mozConnection ||
      (navigator as any).webkitConnection;

      this.ping = connection.ping

      this.http
        .get('https://ipinfo.io/json?token=fd30d19fb836b6')
        .subscribe((data) => {
          this.ipInfo = data;
          const connection =
            (navigator as any).connection ||
            (navigator as any).mozConnection ||
            (navigator as any).webkitConnection;

            const currentTime = new Date();
            const timeZone = 'Europe/Kiev';
            const options = { timeZone, hour12: false };
            const localDateString = currentTime.toLocaleString(
              'en-US',
              options
            );
            const unixTime = Math.floor(Date.now() / 1000);


          if (connection && this.ipInfo) {
            let connectionInfo = {
              ip: this.ipInfo.ip,
              org: this.ipInfo.org,
              hostname: this.ipInfo.hostname,
              type: connection.effectiveType,
              speed: speed,
              rtt: connection.rtt,
              time: localDateString,
              timems: unixTime,
            };

            this.dataService.getData(this.userName).subscribe((data) => {
              const getData = data.exists;
              getData.dataInfo.push(connectionInfo);
              this.dataService.sendData(getData, this.userName).subscribe((data)=>{});
              this.allInfo = connectionInfo;
              this.isTestRunning = false;
            })

          } 
        });
     
  }

 getSpeedUntilDefined(): Promise<number> {
    return new Promise((resolve) => {
      const checkSpeed = () => {
        this.speedTestService.getMbps().subscribe((speed) => {
          if (speed !== undefined) {
            resolve(speed);
          } else {
            setTimeout(checkSpeed, 1000); // Чекаємо 1 секунду перед наступною спробою
          }
        });
      };
  
      checkSpeed(); // Починаємо перевірку
    });
  }
  
}
