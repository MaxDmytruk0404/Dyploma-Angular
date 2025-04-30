import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../component/header/header.component';
import { FooterComponent } from '../../component/footer/footer.component';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit{

  markers = [
    { position: { lat: 49.2331, lng: 28.4682 }, title: 'Базова Станція м. Вінниця', radius: 60000, color: '#FF0000', fillColor: '#FFCCCC' },
    { position: { lat: 50.7472, lng: 25.3244 }, title: 'Базова Станція м. Луцьк', radius: 75000, color: '#00FF00', fillColor: '#CCFFCC' },
    { position: { lat: 48.4647, lng: 35.0462 }, title: 'Базова Станція м. Дніпро', radius: 48000, color: '#0000FF', fillColor: '#CCCCFF' },
    { position: { lat: 48.7200, lng: 37.5300 }, title: 'Базова Станція м. Краматорськ', radius: 70000, color: '#FF00FF', fillColor: '#FFCCFF' },
    { position: { lat: 50.2547, lng: 28.6587 }, title: 'Базова Станція м. Житомир', radius: 62000, color: '#00FFFF', fillColor: '#CCFFFF' },
    { position: { lat: 48.6210, lng: 22.2879 }, title: 'Базова Станція м. Ужгород', radius: 79000, color: '#FFA500', fillColor: '#FFE5B4' },
    { position: { lat: 47.8388, lng: 35.1396 }, title: 'Базова Станція м. Запоріжжя', radius: 56000, color: '#800080', fillColor: '#E0B3FF' },
    { position: { lat: 48.9226, lng: 24.7103 }, title: 'Базова Станція м. Івано-Франківськ', radius: 47000, color: '#808000', fillColor: '#F0F0C0' },
    { position: { lat: 50.4501, lng: 30.5234 }, title: 'Базова Станція м. Київ', radius: 68000, color: '#008000', fillColor: '#B4E5B4' },
    { position: { lat: 48.5132, lng: 32.2597 }, title: 'Базова Станція м. Кропивницький', radius: 77000, color: '#000080', fillColor: '#B4B4E5' },
    { position: { lat: 48.9481, lng: 38.4910 }, title: 'Базова Станція м. Сєвєродонецьк', radius: 66000, color: '#A52A2A', fillColor: '#FFD2D2' },
    { position: { lat: 49.8397, lng: 24.0297 }, title: 'Базова Станція м. Львів', radius: 50000, color: '#DC143C', fillColor: '#FFB6C1' },
    { position: { lat: 46.9750, lng: 31.9946 }, title: 'Базова Станція м. Миколаїв', radius: 72000, color: '#228B22', fillColor: '#A0D6A0' },
    { position: { lat: 46.4825, lng: 30.7233 }, title: 'Базова Станція м. Одеса', radius: 58000, color: '#1E90FF', fillColor: '#C0E0FF' },
    { position: { lat: 49.5883, lng: 34.5514 }, title: 'Базова Станція м. Полтава', radius: 48000, color: '#8B0000', fillColor: '#FFAAAA' },
    { position: { lat: 50.6199, lng: 26.2516 }, title: 'Базова Станція м. Рівне', radius: 69000, color: '#DAA520', fillColor: '#FFEFD5' },
    { position: { lat: 50.9077, lng: 34.7981 }, title: 'Базова Станція м. Суми', radius: 74000, color: '#5F9EA0', fillColor: '#D0F0F0' },
    { position: { lat: 49.5535, lng: 25.5948 }, title: 'Базова Станція м. Тернопіль', radius: 53000, color: '#2F4F4F', fillColor: '#D3D3D3' },
    { position: { lat: 49.9935, lng: 36.2304 }, title: 'Базова Станція м. Харків', radius: 61000, color: '#696969', fillColor: '#E0E0E0' },
    { position: { lat: 46.6354, lng: 32.6169 }, title: 'Базова Станція м. Херсон', radius: 47000, color: '#FF4500', fillColor: '#FFDAB9' },
    { position: { lat: 49.4216, lng: 26.9965 }, title: 'Базова Станція м. Хмельницький', radius: 55000, color: '#B22222', fillColor: '#F4C2C2' },
    { position: { lat: 49.4444, lng: 32.0598 }, title: 'Базова Станція м. Черкаси', radius: 67000, color: '#ADFF2F', fillColor: '#F0FFF0' },
    { position: { lat: 48.2921, lng: 25.9358 }, title: 'Базова Станція м. Чернівці', radius: 49000, color: '#7FFFD4', fillColor: '#E0FFFF' },
    { position: { lat: 51.4982, lng: 31.2893 }, title: 'Базова Станція м. Чернігів', radius: 70000, color: '#00CED1', fillColor: '#DFFFEF' },
    { position: { lat: 48.7102, lng: 26.5820 }, title: "Базова Станція м. Кам'янець-Подільський", radius: 76000, color: '#9932CC', fillColor: '#E6CCFF' },
    { position: { lat: 47.9085, lng: 33.3918 }, title: 'Базова Станція м. Кривий Ріг', radius: 72000, color: '#F08080', fillColor: '#FFD4D4' },
    { position: { lat: 48.7667, lng: 30.2200 }, title: 'Базова Станція м. Умань', radius: 62000, color: '#FFE4B5', fillColor: '#FFF5E1' },
    { position: { lat: 49.7953, lng: 30.1031 }, title: 'Базова Станція м. Біла Церква', radius: 56000, color: '#708090', fillColor: '#D3D3D3' },
    { position: { lat: 50.9464, lng: 28.6347 }, title: 'Базова Станція м. Коростень', radius: 75000, color: '#B0C4DE', fillColor: '#E6ECF2' },
    { position: { lat: 50.3450, lng: 30.9536 }, title: 'Базова Станція м. Бориспіль', radius: 59000, color: '#00BFFF', fillColor: '#D0F0FF' },
    { position: { lat: 49.0750, lng: 33.4200 }, title: 'Базова Станція м. Кременчук', radius: 61000, color: '#32CD32', fillColor: '#D5FFD5' },
    { position: { lat: 48.5250, lng: 35.8597 }, title: 'Базова Станція м. Павлоград', radius: 53000, color: '#BA55D3', fillColor: '#F3D9FF' },
    { position: { lat: 48.0159, lng: 37.8028 }, title: 'Базова Станція м. Донецьк', radius: 65000, color: '#CD5C5C', fillColor: '#FFD6D6' },
    { position: { lat: 47.0980, lng: 37.5437 }, title: 'Базова Станція м. Маріуполь', radius: 47000, color: '#20B2AA', fillColor: '#DFF8F7' },
    { position: { lat: 46.0645, lng: 35.3721 }, title: 'Базова Станція м. Мелітополь', radius: 74000, color: '#FA8072', fillColor: '#FFD6D6' },
    { position: { lat: 45.1900, lng: 33.3673 }, title: 'Базова Станція м. Євпаторія', radius: 68000, color: '#D2691E', fillColor: '#FFE2CC' },
    { position: { lat: 44.6167, lng: 33.5250 }, title: 'Базова Станція м. Севастополь', radius: 46000, color: '#8B4513', fillColor: '#F5E5D0' },
    { position: { lat: 44.4990, lng: 34.1593 }, title: 'Базова Станція м. Ялта', radius: 78000, color: '#A0522D', fillColor: '#F0E5DC' },
    { position: { lat: 45.3541, lng: 36.5097 }, title: 'Базова Станція м. Керч', radius: 78000, color: '#708090', fillColor: '#D3D3D3'},
    { position: { lat: 48.5743, lng: 39.3075 }, title: 'Базова Станція м. Луганськ', radius: 62000, color: '#FFE4B5', fillColor: '#FFF5E1'},
  ];

  ngOnInit(): void {
    const map = L.map('map').setView([50.4501, 30.5234], 6);  // Координати для початкового перегляду карти

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: ''
    }).addTo(map);

    this.markers.forEach(marker => {
      const customIcon = L.divIcon({
        className: 'fa', // Вказуємо клас для FontAwesome
        html: `<i class="fas fa-map-marker-alt" style="color: ${marker.color}; font-size: 24px;"></i>`, // Іконка FontAwesome
        iconSize: [30, 30], // Розмір іконки
        iconAnchor: [10, 20], // Прив'язка іконки
        popupAnchor: [0, -30] // Розташування спливаючого вікна
      });

      
      const { lat, lng } = marker.position;
      L.marker([lat, lng], { icon: customIcon })
      .addTo(map)
      .bindPopup(marker.title + `<br>Радіус покриття: ${marker.radius} м`);

      // Додатково — коло навколо станції
      L.circle([lat, lng], {
        radius: marker.radius,
        color: marker.color,
        fillColor: marker.fillColor,
        fillOpacity: 0.2
      }).addTo(map);
    });
  }

}
