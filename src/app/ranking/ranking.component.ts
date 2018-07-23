import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material';


export interface PeriodicElement {
  name: string;
  position: number;
  point: number;
  grade: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', point: 1.0079, grade: 'H'},
  {position: 2, name: 'Helium', point: 4.0026, grade: 'He'},
  {position: 3, name: 'Lithium', point: 6.941, grade: 'Li'},
  {position: 4, name: 'Beryllium', point: 9.0122, grade: 'Be'},
  {position: 5, name: 'Boron', point: 10.811, grade: 'B'},
  {position: 6, name: 'Carbon', point: 12.0107, grade: 'C'},
  {position: 7, name: 'Nitrogen', point: 14.0067, grade: 'N'},
  {position: 8, name: 'Oxygen', point: 15.9994, grade: 'O'},
  {position: 9, name: 'Fluorine', point: 18.9984, grade: 'F'},
  {position: 10, name: 'Neon', point: 20.1797, grade: 'Ne'},
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
