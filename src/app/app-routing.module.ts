import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
    { path: '', loadChildren: './home/home.module#HomeModule' },
    { path: 'events', loadChildren: './events/events.module#EventsModule' },
    { path: 'cities', loadChildren: './cities/cities.module#CitiesModule' },
    { path: 'ranking', loadChildren: './ranking/ranking.module#RankingModule' }
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }