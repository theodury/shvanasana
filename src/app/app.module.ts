import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';

import {MatIconModule,MatSidenavModule,MatToolbarModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';



import { AppComponent } from './app.component';
import { AppRoutingModule }        from './app-routing.module';

import { EventsModule } from './events/events.module';
import { RankingComponent } from './ranking/ranking.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    RankingComponent,
    EventDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    EventsModule,
    AppRoutingModule, 
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

