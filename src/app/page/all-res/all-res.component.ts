import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data/data.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../component/footer/footer.component';
import { HeaderComponent } from '../../component/header/header.component';

@Component({
  selector: 'app-all-res',
  imports: [CommonModule, FooterComponent, HeaderComponent],
  templateUrl: './all-res.component.html',
  styleUrl: './all-res.component.css'
})
export class AllResComponent implements OnInit{

  allInfo: any;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData('test1').subscribe((data)=> {
      this.allInfo = data.exists.dataInfo;
      console.log(this.allInfo)
    })
  }

}
