import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  totalColumn: any = 8;

  constructor() {
    this.adaptScreen(window.innerWidth);
   }

  ngOnInit() {
  }

  onResize(event) {
    this.adaptScreen(event.target.innerWidth);
  }
  
  adaptScreen(width){
    if (width < 950) {
      this.totalColumn = 6;
    }

    if (width < 750) {
      this.totalColumn = 2;
    }
  }
}
