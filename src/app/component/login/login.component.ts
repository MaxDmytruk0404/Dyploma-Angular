import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../service/data/data.service';
import { SendInfoService } from '../../service/sendInfo/send-info.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  name: string = '';
  password: string = '';
  logined: boolean = false;
  message: string = '';
  procesed: boolean = false;

  constructor(
    private dataService: DataService,
    private sendInfoService: SendInfoService
  ) {}

  login() {
    this.procesed = true;
    this.message = '';
    this.dataService.checkUser(this.name, this.password).subscribe({
      next: (result: boolean) => {
        if (result === true) {
          this.sendInfoService.updateLogin(this.name);
          this.logined = true;
          this.procesed = false;
        } else {
          this.logined = false;
          this.procesed = false;
          this.message = 'Лонін або пароль введено не вірно';
        }
      },
      error: (error) => {
        console.error('Error checking credentials', error);
        this.logined = false;
        console.log('false');
      },
    });
  }
}
