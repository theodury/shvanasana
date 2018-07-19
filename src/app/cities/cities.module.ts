import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiesRoutingModule } from './cities-routing.module';
import { CitiesComponent } from './cities.component';

import {MatButtonModule} from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    CitiesRoutingModule,
    MatButtonModule
  ],
  declarations: [CitiesComponent]
})
export class CitiesModule { }
