import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingRoutingModule } from './ranking-routing.module';
import { RankingComponent } from './ranking.component';

import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule, MatInputModule } from '@angular/material';




@NgModule({
  imports: [
    CommonModule,
    RankingRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
],
  declarations: [RankingComponent]
})
export class RankingModule { }
