import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';

import { EventDetailComponent } from './event-detail/event-detail.component';

import {MatChipsModule} from '@angular/material/chips';



@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatChipsModule
  ],
  declarations: [
    EventsComponent,
    EventDetailComponent
  ]
})
export class EventsModule { }
