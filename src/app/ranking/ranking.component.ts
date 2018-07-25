import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material';


export interface PeriodicElement {
  name: string;
  position: number;
  point: number;
  grade: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Alain Denis', point: 1090, grade: 'Numéro UNO'},
  {position: 2, name: 'JB Saulnier', point: 1070, grade: 'Diamant'},
  {position: 3, name: 'Lucas Candel', point: 690, grade: 'Or'},
  {position: 4, name: 'Yann Segond', point: 90, grade: 'Argent'},
  {position: 5, name: 'Patrick Turow', point: 10, grade: 'Bronze'},
];


@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    displayedColumns: string[] = ['position', 'name', 'point', 'grade'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
  
    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  

}
