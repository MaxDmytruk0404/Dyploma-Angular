const markers = [
  {
    "position": {
      "lat": 49.2331,
      "lng": 28.4682
    },
    "title": "Базова Станція м. Вінниця",
    "generation": "5G",
    "ip": "192.168.0.1",
    "operator": "Vodafone",
    "color": "red",
    "speed": 300,
    "status": "Працює"
  },
  {
    "position": {
      "lat": 50.7472,
      "lng": 25.3244
    },
    "title": "Базова Станція м. Луцьк",
    "generation": "5G",
    "ip": "192.168.0.2",
    "operator": "Vodafone",
    "color": "red",
    "speed": 400,
    "status": "Працює"
  },
  {
    "position": {
      "lat": 48.4647,
      "lng": 35.0462
    },
    "title": "Базова Станція м. Дніпро",
    "generation": "5G",
    "ip": "192.168.0.3",
    "operator": "Kyivstar",
    "color": "blue",
    "speed": 300,
    "status": "Працює"
  },
  {
    "position": {
      "lat": 50.2547,
      "lng": 28.6587
    },
    "title": "Базова Станція м. Житомир",
    "generation": "4G",
    "ip": "192.168.0.5",
    "operator": "Kyivstar",
    "color": "blue",
    "speed": 100,
    "status": "Працює"
  },
  {
    "position": {
      "lat": 48.621,
      "lng": 22.2879
    },
    "title": "Базова Станція м. Ужгород",
    "generation": "4G",
    "ip": "192.168.0.6",
    "operator": "Lifecell",
    "color": "yellow",
    "speed": 80,
    "status": "Працює"
  },
  {
    "position": {
      "lat": 47.8388,
      "lng": 35.1396
    },
    "title": "Базова Станція м. Запоріжжя",
    "generation": "4G",
    "ip": "192.168.0.7",
    "operator": "Lifecell",
    "color": "yellow",
    "speed": 90,
    "status": "Працює"
  },
  {
    "position": {
      "lat": 48.9226,
      "lng": 24.7103
    },
    "title": "Базова Станція м. Івано-Франківськ",
    "generation": "5G",
    "ip": "192.168.0.8",
    "operator": "Vodafone",
    "color": "red",
    "speed": 300,
    "status": "Працює"
  },
  {
    "position": {
      "lat": 50.4501,
      "lng": 30.5234
    },
    "title": "Базова Станція м. Київ",
    "generation": "5G",
    "ip": "192.168.0.9",
    "operator": "Vodafone",
    "color": "red",
    "speed": 400,
    "status": "Працює"
  },
  {
    "position": {
      "lat": 48.5132,
      "lng": 32.2597
    },
    "title": "Базова Станція м. Кропивницький",
    "generation": "4G",
    "ip": "192.168.0.10",
    "operator": "Lifecell",
    "color": "yellow",
    "speed": 100,
    "status": "Працює"
  },
  
  {
    "position": {
      "lat": 49.8397,
      "lng": 24.0297
    },
    "title": "Базова Станція м. Львів",
    "generation": "4G",
    "ip": "192.168.0.12",
    "operator": "Vodafone",
    "color": "red",
    "speed": 100,
    "status": "Працює"
  },
  {
    "position": {
      "lat": 46.975,
      "lng": 31.9946
    },
    "title": "Базова Станція м. Миколаїв",
    "generation": "5G",
    "ip": "192.168.0.13",
    "operator": "Lifecell",
    "color": "yellow",
    "speed": 300,
    "status": "Працює"
  },
  {
    "position": {
      "lat": 46.4825,
      "lng": 30.7233
    },
    "title": "Базова Станція м. Одеса",
    "generation": "4G",
    "ip": "192.168.0.14",
    "operator": "Vodafone",
    "color": "red",
    "speed": 100,
    "status": "Працює"
  },
  {
    "position": {
      "lat": 49.5883,
      "lng": 34.5514
    },
    "title": "Базова Станція м. Полтава",
    "generation": "5G",
    "ip": "192.168.0.15",
    "operator": "Lifecell",
    "color": "yellow",
    "speed": 350,
    "status": "Працює"
  },
  {
    "position": {
      "lat": 50.6199,
      "lng": 26.2516
    },
    "title": "Базова Станція м. Рівне",
    "generation": "5G",
    "ip": "192.168.0.16",
    "operator": "Lifecell",
    "color": "yellow",
    "speed": 300,
    "status": "Працює"
  },
  {
    "position": {
      "lat": 50.9077,
      "lng": 34.7981
    },
    "title": "Базова Станція м. Суми",
    "generation": "5G",
    "ip": "192.168.0.17",
    "operator": "Kyivstar",
    "color": "blue",
    "speed": 300,
    "status": "Працює"
  },
  {
    "position": {
      "lat": 49.5535,
      "lng": 25.5948
    },
    "title": "Базова Станція м. Тернопіль",
    "generation": "4G",
    "ip": "192.168.0.18",
    "operator": "Vodafone",
    "color": "red",
    "speed": 100,
    "status": "Працює"
  },
  {
    "position": {
      "lat": 49.9935,
      "lng": 36.2304
    },
    "title": "Базова Станція м. Харків",
    "generation": "4G",
    "ip": "192.168.0.19",
    "operator": "Lifecell",
    "color": "yellow",
    "speed": 90,
    "status": "Працює"
  },
  {
    "position": {
      "lat": 46.6354,
      "lng": 32.6169
    },
    "title": "Базова Станція м. Херсон",
    "generation": "5G",
    "ip": "192.168.0.20",
    "operator": "Lifecell",
    "color": "yellow",
    "speed": 300,
    "status": "Працює"
  },
  {
    "position": {
      "lat": 49.4216,
      "lng": 26.9965
    },
    "title": "Базова Станція м. Хмельницький",
    "generation": "4G",
    "ip": "192.168.0.21",
    "operator": "Lifecell",
    "color": "yellow",
    "speed": 100,
    "status": "Працює"
  },
  {
    "position": {
      "lat": 49.4444,
      "lng": 32.0598
    },
    "title": "Базова Станція м. Черкаси",
    "generation": "5G",
    "ip": "192.168.0.22",
    "operator": "Kyivstar",
    "color": "blue",
    "speed": 250,
    "status": "Працює"
  },
  {
    "position": {
      "lat": 48.2921,
      "lng": 25.9358
    },
    "title": "Базова Станція м. Чернівці",
    "generation": "5G",
    "ip": "192.168.0.23",
    "operator": "Lifecell",
    "color": "yellow",
    "speed": 300,
    "status": "Працює"
  },
  {
    "position": {
      "lat": 51.4982,
      "lng": 31.2893
    },
    "title": "Базова Станція м. Чернігів",
    "generation": "5G",
    "ip": "192.168.0.24",
    "operator": "Kyivstar",
    "color": "blue",
    "speed": 350,
    "status": "Працює"
  },
  {
    "position": {
      "lat": 48.7102,
      "lng": 26.582
    },
    "title": "Базова Станція м. Кам'янець-Подільський",
    "generation": "5G",
    "ip": "192.168.0.25",
    "operator": "Lifecell",
    "color": "yellow",
    "speed": 300,
    "status": "Працює"
  },
  {
    "position": {
      "lat": 47.9085,
      "lng": 33.3918
    },
    "title": "Базова Станція м. Кривий Ріг",
    "generation": "4G",
    "ip": "192.168.0.26",
    "operator": "Vodafone",
    "color": "red",
    "speed": 100,
    "status": "Працює"
  },
  {
    "position": {
      "lat": 48.7667,
      "lng": 30.22
    },
    "title": "Базова Станція м. Умань",
    "generation": "4G",
    "ip": "192.168.0.27",
    "operator": "Kyivstar",
    "color": "blue",
    "speed": 100,
    "status": "Працює"
  },
  {
    "position": {
      "lat": 49.7953,
      "lng": 30.1031
    },
    "title": "Базова Станція м. Біла Церква",
    "generation": "4G",
    "ip": "192.168.0.28",
    "operator": "Vodafone",
    "color": "red",
    "speed": 100,
    "status": "Працює"
  },
  {
    "position": {
      "lat": 50.9464,
      "lng": 28.6347
    },
    "title": "Базова Станція м. Коростень",
    "generation": "5G",
    "ip": "192.168.0.29",
    "operator": "Vodafone",
    "color": "red",
    "speed": 300,
    "status": "Працює"
  },
  {
    "position": {
      "lat": 50.345,
      "lng": 30.9536
    },
    "title": "Базова Станція м. Бориспіль",
    "generation": "5G",
    "ip": "192.168.0.30",
    "operator": "Vodafone",
    "color": "red",
    "speed": 300,
    "status": "Працює"
  },
  {
    "position": {
      "lat": 49.075,
      "lng": 33.42
    },
    "title": "Базова Станція м. Кременчук",
    "generation": "4G",
    "ip": "192.168.0.31",
    "operator": "Kyivstar",
    "color": "blue",
    "speed": 100,
    "status": "Працює"
  },
  {
    "position": {
      "lat": 48.525,
      "lng": 35.8597
    },
    "title": "Базова Станція м. Павлоград",
    "generation": "4G",
    "ip": "192.168.0.32",
    "operator": "Vodafone",
    "color": "red",
    "speed": 100,
    "status": "Працює"
  },
  {
    "position": {
      "lat": 48.0159,
      "lng": 37.8028
    },
    "title": "Базова Станція м. Донецьк",
    "generation": "4G",
    "ip": "192.168.0.33",
    "operator": "Vodafone",
    "color": "grey",
    "speed": 100,
    "status": "Не працює"
  },
  {
    "position": {
      "lat": 48.9481,
      "lng": 38.491
    },
    "title": "Базова Станція м. Сіверодонецьк",
    "generation": "4G",
    "ip": "192.168.0.11",
    "operator": "Lifecell",
    "color": "grey",
    "speed": 80,
    "status": "Не працює"
  },
  {
    "position": {
      "lat": 47.098,
      "lng": 37.5437
    },
    "title": "Базова Станція м. Маріуполь",
    "generation": "4G",
    "ip": "192.168.0.34",
    "operator": "Lifecell",
    "color": "grey",
    "speed": 80,
    "status": "Не працює"
  },
  {
    "position": {
      "lat": 48.72,
      "lng": 37.53
    },
    "title": "Базова Станція м. Краматорськ",
    "generation": "4G",
    "ip": "192.168.0.4",
    "operator": "Vodafone",
    "color": "grey",
    "speed": 100,
    "status": "Не працює"
  },
  {
    "position": {
      "lat": 48.5743,
      "lng": 39.3075
    },
    "title": "Базова Станція м. Луганськ",
    "generation": "4G",
    "ip": "192.168.0.35",
    "operator": "Vodafone",
    "color": "grey",
    "speed": 80,
    "status": "Не працює"
  },
  {
    "position": {
      "lat": 46.843,
      "lng": 35.3676
    },
    "title": "Базова Станція м. Мелітополь",
    "generation": "4G",
    "ip": "192.168.0.36",
    "operator": "Lifecell",
    "color": "grey",
    "speed": 80,
    "status": "Не працює"
  },
  {
    "position": {
      "lat": 45.19,
      "lng": 33.3673
    },
    "title": "Базова Станція м. Евпаторія",
    "generation": "4G",
    "ip": "192.168.0.37",
    "operator": "Kyivstar",
    "color": "grey",
    "speed": 80,
    "status": "Не працює"
  },
  {
    "position": {
      "lat": 44.6167,
      "lng": 33.525
    },
    "title": "Базова Станція м. Севастополь",
    "generation": "4G",
    "ip": "192.168.0.38",
    "operator": "Vodafone",
    "color": "grey",
    "speed": 80,
    "status": "Не працює"
  },
  {
    "position": {
      "lat": 44.499,
      "lng": 34.1593
    },
    "title": "Базова Станція м. Ялта",
    "generation": "4G",
    "ip": "192.168.0.39",
    "operator": "Vodafone",
    "color": "grey",
    "speed": 80,
    "status": "Не працює"
  },
  {
    "position": {
      "lat": 45.3541,
      "lng": 36.5097
    },
    "title": "Базова Станція м. Керч",
    "generation": "4G",
    "ip": "192.168.0.40",
    "operator": "Kyivstar",
    "color": "grey",
    "speed": 80,
    "status": "Не працює"
  }
];

export default markers;
