import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './events.component'
import { EventDetailComponent } from './event-detail/event-detail.component';

const routesEvents: Routes = [
  { path: 'events', component: EventsComponent },
  { path: 'event/:id', component: EventDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routesEvents)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
