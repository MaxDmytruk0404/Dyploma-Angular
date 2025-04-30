import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../component/header/header.component';
import { FooterComponent } from '../../component/footer/footer.component';
import * as L from 'leaflet';
import markers from '../../data/markers/markers';
import connections from '../../data/connections/connections';

@Component({
  selector: 'app-map-oz',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './map-oz.component.html',
  styleUrl: './map-oz.component.css',
})
export class MapOZComponent implements OnInit {
  
  markers = markers;
  connections = connections;

  ngOnInit(): void {
    const map = L.map('map').setView([50.4501, 30.5234], 6); // Координати для початкового перегляду карти

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    this.markers.forEach((marker) => {
      const { lat, lng } = marker.position;

      // Створюємо іконку з FontAwesome
      const customIcon = L.divIcon({
        className: 'fa', // Вказуємо клас для FontAwesome
        html: `<i class="fas fa-map-marker-alt" style="color: red; font-size: 24px;"></i>`, // Іконка FontAwesome
        iconSize: [30, 30], // Розмір іконки
        iconAnchor: [10, 20], // Прив'язка іконки до центру
        popupAnchor: [0, -30] // Розташування спливаючого вікна
      });

      // Додаємо мітку з іконкою FontAwesome
      L.marker([lat, lng], { icon: customIcon })
        .addTo(map)
        .bindPopup(marker.title);
    });

    this.connections.forEach((conn) => {
      const polyline = L.polyline(conn.path, {
        color: conn.color,
        weight: 3,
        opacity: 0.7,
      }).addTo(map);

      polyline.bindPopup(''); // просто ініціалізуємо popup

      polyline.on('popupopen', () => {
        const statusText = conn.color === 'green' ? 'Працює' : 'Не працює';
        const popupContent =
          conn.description +
          `Стан: <button id="status-btn" class="${conn.color}">${statusText}</button>`;

        polyline.setPopupContent(popupContent);

        setTimeout(() => {

          const btn = document.getElementById('status-btn');
          if (btn) {
            btn.addEventListener('click', () => {
              conn.color = conn.color === 'green' ? 'red' : 'green';

              btn.className = conn.color;
              btn.textContent = conn.color === 'green' ? 'Працює' : 'Не працює';

              polyline.setStyle({ color: conn.color });

              const updatedContent =
                conn.description +
                `Стан: <button id="status-btn" class="${conn.color}">${btn.textContent}</button>`;
              polyline.setPopupContent(updatedContent);
            });
          }
        }, 10);
      });
    });
  }

  changeStatus() {}
}
