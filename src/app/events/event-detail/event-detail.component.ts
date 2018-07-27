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

  totalColumn;
  rowHeight;

  imgColumn;
  imgRow;

  socialColumn;
  socialRow;
  oneColumn;

  titleColumn;
  infoColumn;
  adresseColumn;
  adresseRow;
  dateColumn;
  dateRow;
  paddingTop;
  

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
    if (width >= 750) {
      this.paddingTop = "25px";
      this.totalColumn = 12;
      this.rowHeight = "80px";
      this.imgColumn = 11;
      this.imgRow = 6;
      this.socialColumn = 1;
      this.socialRow = 1;
      this.titleColumn = 3;
      this.infoColumn = 3;
      this.dateColumn = 2;
      this.dateRow = 1;
      this.adresseColumn = 2;
      this.adresseRow = 1;
    }

    if (width < 750) {
      this.paddingTop = "0px";
      this.totalColumn = 2;
      this.rowHeight = "50px";
      this.imgColumn = 2;
      this.imgRow = 4;
      this.socialColumn = 0;
      this.socialRow = 0;
      this.titleColumn = 2;
      this.infoColumn = 2;
      this.dateColumn = 1;
      this.dateRow = 2;
      this.adresseColumn = 1;
      this.adresseRow = 2;

    }
  }



}
