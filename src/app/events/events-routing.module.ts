import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './events.component'

const routesEvents: Routes = [
  { path: 'events', component: EventsComponent },
  { path: 'event/:id', redirectTo: '/event/:id' },
];

@NgModule({
  imports: [RouterModule.forChild(routesEvents)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
