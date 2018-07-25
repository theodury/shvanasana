import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiesRoutingModule } from './cities-routing.module';
import { CitiesComponent } from './cities.component';

import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  imports: [
    CommonModule,
    CitiesRoutingModule,
    MatButtonModule,
    MatGridListModule
  ],
  declarations: [CitiesComponent]
})
export class CitiesModule { }
