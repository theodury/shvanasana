import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  totalColumn: any = 4;
  threeColumn: any = 3;
  oneColumn: any = 1;
  totalRow: any = 7;
  paddingTop = "25px";
  


  constructor() {
    this.adaptScreen(window.innerWidth);
   }

  ngOnInit() {
  }

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];


  onResize(event) {
    this.adaptScreen(event.target.innerWidth);
  }
  
  adaptScreen(width){
    if (width < 950) {
      this.totalColumn = 4;
      this.threeColumn = 3;
      this.oneColumn = 1;
      this.totalRow = 7;
      this.paddingTop = "25px;";
    }

    if (width < 750) {
      this.totalColumn = 2;
      this.threeColumn = 2;
      this.oneColumn = 2;
      this.totalRow = 4;
      this.paddingTop = "0px;";
    }
  }



}
