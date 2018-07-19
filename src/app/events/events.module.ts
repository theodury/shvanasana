import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import { EventDetailComponent } from './event-detail/event-detail.component';


@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    EventsComponent,
    EventDetailComponent
  ]
})
export class EventsModule { }
