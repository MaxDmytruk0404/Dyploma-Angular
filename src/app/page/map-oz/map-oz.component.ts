import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../component/header/header.component';
import { FooterComponent } from '../../component/footer/footer.component';
import * as L from 'leaflet';
import { DataService } from '../../service/data/data.service';
import { SendInfoService } from '../../service/sendInfo/send-info.service';

@Component({
  selector: 'app-map-oz',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './map-oz.component.html',
  styleUrl: './map-oz.component.css',
})
export class MapOZComponent implements OnInit {
  markers: any;
  connections: any;
  allInfo: any;
  curentPage: any;
  userName: any;
  curentData: any;
  map: L.Map | undefined;

  constructor(
    private dataService: DataService,
    private sendInfoService: SendInfoService
  ) {}

  getInfo(userName: string) {
    this.dataService.getALllRes(userName).subscribe((data) => {
      this.allInfo = data;
      if (this.curentPage == undefined) {
        this.sendInfoService.sendDataInfo(this.allInfo.length - 1);
      }
      this.updateInfo();
    });
  }

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

  updateInfo() {
    this.curentData = this.allInfo[this.curentPage];
    this.markers = this.curentData.allBS;
    this.connections = this.curentData.allOW;

    if (this.map) {
      this.map.remove();
    }
    this.map = L.map('map').setView([50.4501, 30.5234], 6); // Координати для початкового перегляду карти

    const map = this.map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    this.markers.forEach(
      (marker: {
        position: { lat: any; lng: any };
        color: any;
        title: any;
        ip: any;
        operator: any;
        generation: any;
        speed: any;
        status: string;
      }) => {
        const { lat, lng } = marker.position;

        // Створюємо іконку з FontAwesome
        const customIcon = L.divIcon({
          className: 'fa',
          html: `<i class="fas fa-map-marker-alt" style="color: ${marker.color}; font-size: 24px;"></i>`,
          iconSize: [30, 30],
          iconAnchor: [10, 20],
          popupAnchor: [0, -30],
        });

        // Додаємо мітку з іконкою FontAwesome
        L.marker([lat, lng], { icon: customIcon }).addTo(map).bindPopup(`${
          marker.title
        } <br> 
          Ip: ${marker.ip} <br> 
          Широта: ${lat} <br> 
          Довгота: ${lng} <br> 
          Оператор: ${marker.operator} <br> 
          Поколіня: ${marker.generation} <br>
          Пропускна здатність: ${marker.speed} Мбіт/с<br>
          Статус: <span style="color: ${getStatusColor(marker.status)}">${
          marker.status
        }</span>
          `);

        function getStatusColor(status: string) {
          switch (status) {
            case 'Працює':
              return 'green';
            case 'Тимчасов не працює':
              return 'orange';
            case 'Не працює':
              return 'red';
            default:
              return 'black';
          }
        }
      }
    );

    this.connections.forEach(
      (conn: {
        path: L.LatLngExpression[] | L.LatLngExpression[][];
        color: string;
        problem: { lat: any; lng: any };
        reason: any;
        from: any;
        to: any;
        lengthKm: any;
        fiberType: any;
        frequency: any;
        bandwidth: any;
        attenuation: any;
      }) => {
        const polyline = L.polyline(conn.path, {
          color: conn.color,
          weight: 5,
          opacity: 0.7,
        }).addTo(map);

        if (conn.problem) {
          const customIcon = L.divIcon({
            className: 'fa',
            html: `<i class="fas fa-map-marker-alt" style="color: grey; font-size: 24px;"></i>`,
            iconSize: [30, 30],
            iconAnchor: [10, 20],
            popupAnchor: [0, -30],
          });

          const { lat, lng } = conn.problem;
          L.marker([lat, lng], { icon: customIcon })
            .addTo(map)
            .bindPopup(`${conn.reason}`);
        }

        polyline.bindPopup(''); // просто ініціалізуємо popup

        polyline.on('popupopen', () => {
          let statusText = '';

          if (conn.color == 'green') {
            statusText = 'Працює';
          } else if (conn.color == 'orange') {
            statusText = 'Пошкоджено';
          } else {
            statusText = 'Не працює';
          }

          const popupContent =
            `
          Від: ${conn.from} <br>
          До: ${conn.to} <br>
          Фізична довжина: ${conn.lengthKm} км <br>
          Тип волокна: ${conn.fiberType} <br>
          Довжина хвилі: ${conn.frequency} нм <br>
          Пропускна здатність: ${conn.bandwidth} Gbps <br>
          Максимальне загасання регенераційної ділянки: ${conn.attenuation} дБ <br>
          ` +
            `Стан: <button id="status-btn" class="${conn.color}">${statusText}</button>`;

          polyline.setPopupContent(popupContent);
        });
      }
    );
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
}
