import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './events.component'
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventJoinComponent } from './event-join/event-join.component';

import { AuthGuard } from '../_guards';


const routes: Routes = [
  { path: '', component:EventsComponent },
  { path: ':id', component: EventDetailComponent},
  { path: ':id/join', component: EventJoinComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
