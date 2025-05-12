import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data/data.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../component/footer/footer.component';
import { HeaderComponent } from '../../component/header/header.component';
import { SendInfoService } from '../../service/sendInfo/send-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-res',
  imports: [CommonModule, FooterComponent, HeaderComponent],
  templateUrl: './all-res.component.html',
  styleUrl: './all-res.component.css',
})
export class AllResComponent implements OnInit {
  allInfo: any;
  userName: any;
  constructor(
    private dataService: DataService,
    private sendInfoService: SendInfoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sendInfoService.userLogin$.subscribe((data) => {
      this.userName = data;
      this.getInfo(this.userName);
    });
  }

  getInfo(userName: string) {
    this.dataService.getALllRes(userName).subscribe((data) => {
      this.allInfo = data;
    });
  }

  goToStatistick(length: number) {
    this.sendInfoService.sendDataInfo(length);
    setTimeout(() => {
      this.router.navigate(['/statistic']);
    }, 100);
  }
}
