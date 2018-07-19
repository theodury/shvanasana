import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';


import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { HomeComponent } from './home.component';
import { EventsRoutingModule } from '../events/events-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
