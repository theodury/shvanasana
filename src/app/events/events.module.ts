import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    EventsComponent
  ]
})
export class EventsModule { }
