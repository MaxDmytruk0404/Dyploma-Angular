import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  private api = 'https://dyplomna.onrender.com';

  // Перевірка по логіну та паролю
  checkUser(name: string, password: string): Observable<boolean> {
    const params = new HttpParams()
      .set('name', name)
      .set('password', password)
      .set('type', 'login');

    return this.http.get<boolean>(`${this.api}/app/check-credentials`, {
      params,
    });
  }

  // Отримання інформації по БС
  getBSInfo(name: string) {
    const params = new HttpParams().set('name', name).set('type', 'dataBS');

    return this.http.get(`${this.api}/app/get-BS`, { params });
  }

  // Отримання інформаії по ОВ
  getOWInfo(name: string) {
    const params = new HttpParams().set('name', name).set('type', 'dataOW');

    return this.http.get(`${this.api}/app/get-OW`, { params });
  }

  // Отримання всіх результатів тестування
  getALllRes(name: string) {
    const params = new HttpParams().set('name', name).set('type', 'dataRes');

    return this.http.get(`${this.api}/app/get-Res`, { params });
  }

  // Оновлення всіх результатів
  sendAllRes(name: string, data: object[]) {
    const params = {
      name,
      type: 'dataRes',
      data,
    };

    return this.http.post(`${this.api}/app/send-Res`, params);
  }
}
