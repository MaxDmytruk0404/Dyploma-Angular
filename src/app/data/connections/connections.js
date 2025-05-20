const connections = 
      [
  {
    "to": "Львів",
    "from": "Луцьк",
    "path": [
      {
        "lat": 50.7472,
        "lng": 25.3244
      },
      {
        "lat": 49.8397,
        "lng": 24.0297
      }
    ],
    "color": "green",
    "lengthKm": 150,
    "bandwidth": 65,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 34
  },
  {
    "to": "Ужгород",
    "from": "Львів",
    "path": [
      {
        "lat": 49.8397,
        "lng": 24.0297
      },
      {
        "lat": 48.621,
        "lng": 22.2879
      }
    ],
    "color": "green",
    "lengthKm": 270,
    "bandwidth": 40,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 61
  },
  {
    "to": "Чернівці",
    "from": "Ужгород",
    "path": [
      {
        "lat": 48.621,
        "lng": 22.2879
      },
      {
        "lat": 48.2921,
        "lng": 25.9358
      }
    ],
    "color": "green",
    "lengthKm": 160,
    "bandwidth": 60,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 36
  },
  {
    "to": "Івано-Франківськ",
    "from": "Львів",
    "path": [
      {
        "lat": 49.8397,
        "lng": 24.0297
      },
      {
        "lat": 48.9226,
        "lng": 24.7103
      }
    ],
    "color": "green",
    "lengthKm": 130,
    "bandwidth": 70,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 30
  },
  {
    "to": "Тернопіль",
    "from": "Івано-Франківськ",
    "path": [
      {
        "lat": 48.9226,
        "lng": 24.7103
      },
      {
        "lat": 49.5535,
        "lng": 25.5948
      }
    ],
    "color": "green",
    "lengthKm": 120,
    "bandwidth": 70,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 27
  },
  {
    "to": "Рівне",
    "from": "Луцьк",
    "path": [
      {
        "lat": 50.7472,
        "lng": 25.3244
      },
      {
        "lat": 50.6199,
        "lng": 26.2516
      }
    ],
    "color": "green",
    "lengthKm": 80,
    "bandwidth": 75,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 18
  },
  {
    "to": "Коростень",
    "from": "Рівне",
    "path": [
      {
        "lat": 50.6199,
        "lng": 26.2516
      },
      {
        "lat": 50.9464,
        "lng": 28.6347
      }
    ],
    "color": "green",
    "lengthKm": 150,
    "bandwidth": 65,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 34
  },
  {
    "to": "Житомир",
    "from": "Рівне",
    "path": [
      {
        "lat": 50.6199,
        "lng": 26.2516
      },
      {
        "lat": 50.2547,
        "lng": 28.6587
      }
    ],
    "color": "green",
    "lengthKm": 130,
    "bandwidth": 70,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 30
  },
  {
    "to": "Хмельницький",
    "from": "Тернопіль",
    "path": [
      {
        "lat": 49.5535,
        "lng": 25.5948
      },
      {
        "lat": 49.4216,
        "lng": 26.9965
      }
    ],
    "color": "green",
    "lengthKm": 100,
    "bandwidth": 75,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 23
  },
  {
    "to": "Чернівці",
    "from": "Тернопіль",
    "path": [
      {
        "lat": 49.5535,
        "lng": 25.5948
      },
      {
        "lat": 48.2921,
        "lng": 25.9358
      }
    ],
    "color": "green",
    "lengthKm": 170,
    "bandwidth": 60,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 39
  },
  {
    "to": "Кам’янець-Подільський",
    "from": "Чернівці",
    "path": [
      {
        "lat": 48.2921,
        "lng": 25.9358
      },
      {
        "lat": 48.7102,
        "lng": 26.582
      }
    ],
    "color": "green",
    "lengthKm": 110,
    "bandwidth": 65,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 25
  },
  {
    "to": "Кам’янець-Подільський",
    "from": "Хмельницький",
    "path": [
      {
        "lat": 49.4216,
        "lng": 26.9965
      },
      {
        "lat": 48.7102,
        "lng": 26.582
      }
    ],
    "color": "green",
    "lengthKm": 50,
    "bandwidth": 80,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 12
  },
  {
    "to": "Вінниця",
    "from": "Хмельницький",
    "path": [
      {
        "lat": 49.4216,
        "lng": 26.9965
      },
      {
        "lat": 49.2331,
        "lng": 28.4682
      }
    ],
    "color": "green",
    "lengthKm": 90,
    "bandwidth": 75,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 21
  },
  {
    "to": "Умань",
    "from": "Вінниця",
    "path": [
      {
        "lat": 49.2331,
        "lng": 28.4682
      },
      {
        "lat": 48.7667,
        "lng": 30.22
      }
    ],
    "color": "green",
    "lengthKm": 70,
    "bandwidth": 80,
    "fiberType": "Одномодове волокно",
    "frequency": "1310 нм",
    "attenuation": 23
  },
  {
    "to": "Біла Церква",
    "from": "Вінниця",
    "path": [
      {
        "lat": 49.2331,
        "lng": 28.4682
      },
      {
        "lat": 49.7953,
        "lng": 30.1031
      }
    ],
    "color": "green",
    "lengthKm": 100,
    "bandwidth": 75,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 23
  },
  {
    "to": "Біла Церква",
    "from": "Житомир",
    "path": [
      {
        "lat": 50.2547,
        "lng": 28.6587
      },
      {
        "lat": 49.7953,
        "lng": 30.1031
      }
    ],
    "color": "orange",
    "reason": "Пошкодженно",
    "problem": {
      "lat": 49.93712,
      "lng": 29.6587
    },
    "lengthKm": 130,
    "bandwidth": 70,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 30
  },
  {
    "to": "Київ",
    "from": "Житомир",
    "path": [
      {
        "lat": 50.2547,
        "lng": 28.6587
      },
      {
        "lat": 50.4501,
        "lng": 30.5234
      }
    ],
    "color": "green",
    "lengthKm": 140,
    "bandwidth": 65,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 32
  },
  {
    "to": "Чернігів",
    "from": "Коростень",
    "path": [
      {
        "lat": 50.9464,
        "lng": 28.6347
      },
      {
        "lat": 51.4982,
        "lng": 31.2893
      }
    ],
    "color": "green",
    "lengthKm": 170,
    "bandwidth": 55,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 39
  },
  {
    "to": "Бориспіль",
    "from": "Київ",
    "path": [
      {
        "lat": 50.4501,
        "lng": 30.5234
      },
      {
        "lat": 50.345,
        "lng": 30.9536
      }
    ],
    "color": "green",
    "lengthKm": 35,
    "bandwidth": 90,
    "fiberType": "Одномодове волокно",
    "frequency": "1310 нм",
    "attenuation": 12
  },
  {
    "to": "Одеса",
    "from": "Умань",
    "path": [
      {
        "lat": 48.7667,
        "lng": 30.22
      },
      {
        "lat": 46.4825,
        "lng": 30.7233
      }
    ],
    "color": "green",
    "lengthKm": 270,
    "bandwidth": 35,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 61
  },
  {
    "to": "Миколаїв",
    "from": "Одеса",
    "path": [
      {
        "lat": 46.4825,
        "lng": 30.7233
      },
      {
        "lat": 46.975,
        "lng": 31.9946
      }
    ],
    "color": "green",
    "lengthKm": 130,
    "bandwidth": 75,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 30
  },
  {
    "to": "Херсон",
    "from": "Миколаїв",
    "path": [
      {
        "lat": 46.975,
        "lng": 31.9946
      },
      {
        "lat": 46.6354,
        "lng": 32.6169
      }
    ],
    "color": "green",
    "lengthKm": 65,
    "bandwidth": 85,
    "fiberType": "Одномодове волокно",
    "frequency": "1310 нм",
    "attenuation": 22
  },
  {
    "to": "Мелітополь",
    "from": "Херсон",
    "path": [
      {
        "lat": 46.6354,
        "lng": 32.6169
      },
      {
        "lat": 46.843,
        "lng": 35.3676
      }
    ],
    "color": "red",
    "lengthKm": 200,
    "bandwidth": 40,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 46
  },
  {
    "to": "Євпаторія",
    "from": "Мелітополь",
    "path": [
      {
        "lat": 46.843,
        "lng": 35.3676
      },
      {
        "lat": 45.19,
        "lng": 33.3673
      }
    ],
    "color": "red",
    "lengthKm": 220,
    "bandwidth": 40,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 50
  },
  {
    "to": "Севастополь",
    "from": "Євпаторія",
    "path": [
      {
        "lat": 45.19,
        "lng": 33.3673
      },
      {
        "lat": 44.6167,
        "lng": 33.525
      }
    ],
    "color": "red",
    "lengthKm": 110,
    "bandwidth": 65,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 25
  },
  {
    "to": "Ялта",
    "from": "Севастополь",
    "path": [
      {
        "lat": 44.6167,
        "lng": 33.525
      },
      {
        "lat": 44.499,
        "lng": 34.1593
      }
    ],
    "color": "red",
    "lengthKm": 85,
    "bandwidth": 70,
    "fiberType": "Одномодове волокно",
    "frequency": "1310 нм",
    "attenuation": 29
  },
  {
    "to": "Керч",
    "from": "Ялта",
    "path": [
      {
        "lat": 44.499,
        "lng": 34.1593
      },
      {
        "lat": 45.3541,
        "lng": 36.5097
      }
    ],
    "color": "red",
    "lengthKm": 150,
    "bandwidth": 50,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 34
  },
  {
    "to": "Суми",
    "from": "Чернігів",
    "path": [
      {
        "lat": 51.4982,
        "lng": 31.2893
      },
      {
        "lat": 50.9077,
        "lng": 34.7981
      }
    ],
    "color": "green",
    "lengthKm": 170,
    "bandwidth": 50,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 39
  },
  {
    "to": "Харків",
    "from": "Суми",
    "path": [
      {
        "lat": 50.9077,
        "lng": 34.7981
      },
      {
        "lat": 49.9935,
        "lng": 36.2304
      }
    ],
    "color": "green",
    "lengthKm": 120,
    "bandwidth": 65,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 27
  },
  {
    "to": "Черкаси",
    "from": "Бориспіль",
    "path": [
      {
        "lat": 50.345,
        "lng": 30.9536
      },
      {
        "lat": 49.4444,
        "lng": 32.0598
      }
    ],
    "color": "green",
    "lengthKm": 160,
    "bandwidth": 60,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 36
  },
  {
    "to": "Кропивницький",
    "from": "Умань",
    "path": [
      {
        "lat": 48.7667,
        "lng": 30.22
      },
      {
        "lat": 48.5132,
        "lng": 32.2597
      }
    ],
    "color": "green",
    "lengthKm": 150,
    "bandwidth": 60,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 34
  },
  {
    "to": "Кременчук",
    "from": "Черкаси",
    "path": [
      {
        "lat": 49.4444,
        "lng": 32.0598
      },
      {
        "lat": 49.075,
        "lng": 33.42
      }
    ],
    "color": "green",
    "lengthKm": 120,
    "bandwidth": 65,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 28
  },
  {
    "to": "Кременчук",
    "from": "Кропивницький",
    "path": [
      {
        "lat": 48.5132,
        "lng": 32.2597
      },
      {
        "lat": 49.075,
        "lng": 33.42
      }
    ],
    "color": "green",
    "lengthKm": 110,
    "bandwidth": 65,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 25
  },
  {
    "to": "Кривий Ріг",
    "from": "Кропивницький",
    "path": [
      {
        "lat": 48.5132,
        "lng": 32.2597
      },
      {
        "lat": 47.9085,
        "lng": 33.3918
      }
    ],
    "color": "green",
    "lengthKm": 150,
    "bandwidth": 60,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 34
  },
  {
    "to": "Кривий Ріг",
    "from": "Херсон",
    "path": [
      {
        "lat": 46.6354,
        "lng": 32.6169
      },
      {
        "lat": 47.9085,
        "lng": 33.3918
      }
    ],
    "color": "green",
    "lengthKm": 150,
    "bandwidth": 75,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 34
  },
  {
    "to": "Полтава",
    "from": "Кременчук",
    "path": [
      {
        "lat": 49.075,
        "lng": 33.42
      },
      {
        "lat": 49.5883,
        "lng": 34.5514
      }
    ],
    "color": "green",
    "lengthKm": 80,
    "bandwidth": 75,
    "fiberType": "Одномодове волокно",
    "frequency": "1310 нм",
    "attenuation": 27
  },
  {
    "to": "Харків",
    "from": "Полтава",
    "path": [
      {
        "lat": 49.5883,
        "lng": 34.5514
      },
      {
        "lat": 49.9935,
        "lng": 36.2304
      }
    ],
    "color": "green",
    "lengthKm": 140,
    "bandwidth": 60,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 32
  },
  {
    "to": "Сіверодонецьк",
    "from": "Харків",
    "path": [
      {
        "lat": 49.9935,
        "lng": 36.2304
      },
      {
        "lat": 48.9481,
        "lng": 38.491
      }
    ],
    "color": "red",
    "lengthKm": 140,
    "bandwidth": 55,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 32
  },
  {
    "to": "Павлоград",
    "from": "Харків",
    "path": [
      {
        "lat": 49.9935,
        "lng": 36.2304
      },
      {
        "lat": 48.525,
        "lng": 35.8597
      }
    ],
    "color": "green",
    "lengthKm": 150,
    "bandwidth": 65,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 34
  },
  {
    "to": "Дніпро",
    "from": "Кременчук",
    "path": [
      {
        "lat": 49.075,
        "lng": 33.42
      },
      {
        "lat": 48.4647,
        "lng": 35.0462
      }
    ],
    "color": "green",
    "lengthKm": 60,
    "bandwidth": 80,
    "fiberType": "Одномодове волокно",
    "frequency": "1310 нм",
    "attenuation": 20
  },
  {
    "to": "Запоріжжя",
    "from": "Кривий Ріг",
    "path": [
      {
        "lat": 47.9085,
        "lng": 33.3918
      },
      {
        "lat": 47.8388,
        "lng": 35.1396
      }
    ],
    "color": "green",
    "lengthKm": 120,
    "bandwidth": 65,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 28
  },
  {
    "to": "Запоріжжя",
    "from": "Дніпро",
    "path": [
      {
        "lat": 48.4647,
        "lng": 35.0462
      },
      {
        "lat": 47.8388,
        "lng": 35.1396
      }
    ],
    "color": "green",
    "lengthKm": 70,
    "bandwidth": 80,
    "fiberType": "Одномодове волокно",
    "frequency": "1310 нм",
    "attenuation": 23
  },
  {
    "to": "Мелітополь",
    "from": "Запоріжжя",
    "path": [
      {
        "lat": 47.8388,
        "lng": 35.1396
      },
      {
        "lat": 46.843,
        "lng": 35.3676
      }
    ],
    "color": "red",
    "lengthKm": 100,
    "bandwidth": 75,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 23
  },
  {
    "to": "Павлоград",
    "from": "Дніпро",
    "path": [
      {
        "lat": 48.4647,
        "lng": 35.0462
      },
      {
        "lat": 48.525,
        "lng": 35.8597
      }
    ],
    "color": "green",
    "lengthKm": 75,
    "bandwidth": 80,
    "fiberType": "Одномодове волокно",
    "frequency": "1310 нм",
    "attenuation": 25
  },
  {
    "to": "Донецьк",
    "from": "Павлоград",
    "path": [
      {
        "lat": 48.525,
        "lng": 35.8597
      },
      {
        "lat": 48.0159,
        "lng": 37.8028
      }
    ],
    "color": "red",
    "lengthKm": 150,
    "bandwidth": 65,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 34
  },
  {
    "to": "Маріуполь",
    "from": "Мелітополь",
    "path": [
      {
        "lat": 46.843,
        "lng": 35.3676
      },
      {
        "lat": 47.098,
        "lng": 37.5437
      }
    ],
    "color": "red",
    "lengthKm": 115,
    "bandwidth": 70,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 27
  },
  {
    "to": "Краматорськ",
    "from": "Павлоград",
    "path": [
      {
        "lat": 48.525,
        "lng": 35.8597
      },
      {
        "lat": 48.72,
        "lng": 37.53
      }
    ],
    "color": "red",
    "lengthKm": 120,
    "bandwidth": 65,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 28
  },
  {
    "to": "Сіверодонецьк",
    "from": "Краматорськ",
    "path": [
      {
        "lat": 48.72,
        "lng": 37.53
      },
      {
        "lat": 48.9481,
        "lng": 38.491
      }
    ],
    "color": "red",
    "lengthKm": 140,
    "bandwidth": 65,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 32
  },
  {
    "to": "Донецьк",
    "from": "Сіверодонецьк",
    "path": [
      {
        "lat": 48.9481,
        "lng": 38.491
      },
      {
        "lat": 48.0159,
        "lng": 37.8028
      }
    ],
    "color": "red",
    "lengthKm": 150,
    "bandwidth": 65,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 34
  },
  {
    "to": "Маріуполь",
    "from": "Донецьк",
    "path": [
      {
        "lat": 48.0159,
        "lng": 37.8028
      },
      {
        "lat": 47.098,
        "lng": 37.5437
      }
    ],
    "color": "red",
    "lengthKm": 90,
    "bandwidth": 75,
    "fiberType": "Одномодове волокно",
    "frequency": "1310 нм",
    "attenuation": 25
  },
  {
    "to": "Луганськ",
    "from": "Сіверодонецьк",
    "path": [
      {
        "lat": 48.9481,
        "lng": 38.491
      },
      {
        "lat": 48.5743,
        "lng": 39.3075
      }
    ],
    "color": "red",
    "lengthKm": 90,
    "bandwidth": 75,
    "fiberType": "Одномодове волокно",
    "frequency": "1310 нм",
    "attenuation": 30
  },
  {
    "to": "Маріуполь",
    "from": "Луганськ",
    "path": [
      {
        "lat": 48.5743,
        "lng": 39.3075
      },
      {
        "lat": 47.098,
        "lng": 37.5437
      }
    ],
    "color": "red",
    "lengthKm": 160,
    "bandwidth": 65,
    "fiberType": "Одномодове волокно",
    "frequency": "1550 нм",
    "attenuation": 37
  }
];

export default connections;