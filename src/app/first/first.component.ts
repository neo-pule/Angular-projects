import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
list ;
  constructor(private item:ItemsService) {
    this.item.getPeople().subscribe(data => {this.list=data
    console.log(this.list); 
  });
   }
   
  ngOnInit() {
  }

}
