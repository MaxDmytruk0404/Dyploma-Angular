import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../service/data/data.service';
import { SendInfoService } from '../../service/sendInfo/send-info.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  name: string = '';
  password: string = '';
  logined:boolean = false;
  message: string = '';
  procesed:boolean = false;

  constructor(private dataService: DataService, private sendInfoService: SendInfoService) {}

  login() {
    this.procesed = true;
    this.dataService.getData(this.name).subscribe({
      next: (data) => {
        if(data.exists == null) {
          this.message = '**Користувача не знайдено або сталася помилка**';
          this.procesed = false;
        } else {
          const userPassword = data.exists.password;
        if (this.password === userPassword) {
          this.procesed = false;
          this.sendInfoService.setData(data.exists.name);
          this.logined = true;
        } else {
          this.message = '**Невірний пароль**';
          this.procesed = false;
        }
        }
      },
      error: (err) => {
        this.message = '**Користувача не знайдено або сталася помилка**';
        this.procesed = false;
      }
    });
    
  }
}
