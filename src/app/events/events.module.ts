import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';



import { EventDetailComponent } from './event-detail/event-detail.component';


@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule
  ],
  declarations: [
    EventsComponent,
    EventDetailComponent
  ]
})
export class EventsModule { }
