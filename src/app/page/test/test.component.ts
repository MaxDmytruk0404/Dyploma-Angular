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
  styleUrl: './test.component.css',
})
export class TestComponent {
  isTestRunning: boolean = false;
  buttonHide: boolean = false;
  testComplite: boolean = false;
  userLogin: any;

  getResBS: boolean = true;
  getResOW: boolean = false;

  markers: any = [];
  connections: any = [];
  allRes: any = [];

  // БС
  lifeTested: any;
  kyivstarTested: any;
  vodafoneTested: any;

  activeBS: any;
  timeNoAtiveBS: any;
  noActiveBS: any;

  lifeActiveBS: any;
  lifeTimeNoAtiveBS: any;
  lifeNoActiveBS: any;

  kyivstarActiveBS: any;
  kyivstarTimeNoAtiveBS: any;
  kyivstarNoActiveBS: any;

  vodafoneActiveBS: any;
  vodafoneTimeNoAtiveBS: any;
  vodafoneNoActiveBS: any;

  // ОВ

  activeOW: any;
  timeNoActiveOW: any;
  noActiveOW: any;

  constructor(
    private speedTestService: SpeedTestService,
    private http: HttpClient,
    private dataService: DataService,
    private sendInfoService: SendInfoService
  ) {}

  runTest() {
    this.buttonHide = true;
    this.testComplite = false;
    this.isTestRunning = true;

    this.sendInfoService.userLogin$.subscribe((data) => {
      this.userLogin = data;

      this.dataService.getBSInfo(this.userLogin).subscribe((data) => {
        this.markers = data;

        // БС
        const life = this.markers.filter(
          (marker: { operator: string }) => marker.operator == 'Lifecell'
        );
        const kyivstar = this.markers.filter(
          (marker: { operator: string }) => marker.operator == 'Kyivstar'
        );
        const vodafone = this.markers.filter(
          (marker: { operator: string }) => marker.operator == 'Vodafone'
        );

        this.lifeTested = life.length;
        this.kyivstarTested = kyivstar.length;
        this.vodafoneTested = vodafone.length;

        this.activeBS = this.markers.filter(
          (marker: { status: string }) => marker.status == 'Працює'
        ).length;
        this.noActiveBS = this.markers.filter(
          (marker: { status: string }) => marker.status == 'Не працює'
        ).length;
        this.timeNoAtiveBS = this.markers.filter(
          (marker: { status: string }) => marker.status == 'Тимчасово не працює'
        ).length;

        this.lifeActiveBS = life.filter(
          (marker: { status: string }) => marker.status == 'Працює'
        ).length;
        this.lifeNoActiveBS = life.filter(
          (marker: { status: string }) => marker.status == 'Не працює'
        ).length;
        this.lifeTimeNoAtiveBS = life.filter(
          (marker: { status: string }) => marker.status == 'Тимчасово не працює'
        ).length;

        this.kyivstarActiveBS = kyivstar.filter(
          (marker: { status: string }) => marker.status == 'Працює'
        ).length;
        this.kyivstarNoActiveBS = kyivstar.filter(
          (marker: { status: string }) => marker.status == 'Не працює'
        ).length;
        this.kyivstarTimeNoAtiveBS = kyivstar.filter(
          (marker: { status: string }) => marker.status == 'Тимчасово не працює'
        ).length;

        this.vodafoneActiveBS = vodafone.filter(
          (marker: { status: string }) => marker.status == 'Працює'
        ).length;
        this.vodafoneNoActiveBS = vodafone.filter(
          (marker: { status: string }) => marker.status == 'Не працює'
        ).length;
        this.vodafoneTimeNoAtiveBS = vodafone.filter(
          (marker: { status: string }) => marker.status == 'Тимчасово не працює'
        ).length;

        this.dataService.getOWInfo(this.userLogin).subscribe((data) => {
          this.connections = data;

          // ОВ

          this.activeOW = this.connections.filter(
            (conection: { color: string }) => conection.color == 'green'
          ).length;
          this.timeNoActiveOW = this.connections.filter(
            (conection: { color: string }) => conection.color == 'orange'
          ).length;
          this.noActiveOW = this.connections.filter(
            (conection: { color: string }) => conection.color == 'red'
          ).length;

          this.dataService.getALllRes(this.userLogin).subscribe((data) => {
            this.allRes = data;
            this.allRes.shift();
            const now = new Date();
            const formattedDate = now
              .toLocaleString('uk-UA', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
              })
              .replace(',', '');

            const sendData = {
              time: formattedDate,
              allBS: this.markers,
              allOW: this.connections,
              testBSRes: {
                lifeTested: this.lifeTested,
                kyivstarTested: this.kyivstarTested,
                vodafoneTested: this.vodafoneTested,
                activeBS: this.activeBS,
                timeNoActiveBS: this.timeNoAtiveBS,
                noActiveBS: this.noActiveBS,
                lifeActiveBS: this.lifeActiveBS,
                lifeTimeNoActiveBS: this.lifeTimeNoAtiveBS,
                lifeNoActiveBS: this.lifeNoActiveBS,
                kyivstarActiveBS: this.kyivstarActiveBS,
                kyivstarTimeNoAtiveBS: this.kyivstarTimeNoAtiveBS,
                kyivstarNoAtiveBS: this.kyivstarNoActiveBS,
                vodafoneActiveBS: this.vodafoneActiveBS,
                vodafoneTimeNoAtiveBS: this.vodafoneTimeNoAtiveBS,
                vodafoneNoActiveBS: this.vodafoneNoActiveBS,
              },
              testOWRes: {
                activeOW: this.activeOW,
                timeNoActiveOW: this.timeNoActiveOW,
                noActiveOW: this.noActiveOW,
              },
            };

            if (Array.isArray(this.allRes)) {
              this.allRes.push(sendData);
              this.dataService
                .sendAllRes(this.userLogin, this.allRes)
                .subscribe((data) => {});
            }
          });

          this.isTestRunning = false;
          this.testComplite = true;
        });
      });
    });
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
}
