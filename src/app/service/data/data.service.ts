import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private api = 'https://dyplomna.onrender.com'

  sendData(data:any, name: string):Observable<any> {
    return this.http.post(`${this.api}/app/sendInfo/${name}`, data);
  }

  getData(name: string):Observable<any> {
    return this.http.get(`${this.api}/app/get-info/${name}`);
  }

}
