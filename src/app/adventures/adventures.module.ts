import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdventuresRoutingModule } from './adventures-routing.module';
import { AdventureS1Component } from './adventure-s1/adventure-s1.component';
import { AdventureS2Component } from './adventure-s2/adventure-s2.component';
import { AdventureFiltersComponent } from './adventure-filters/adventure-filters.component';
import { AdventureListComponent } from './adventure-list/adventure-list.component';
import { AdventuresComponent } from './adventures.component';


@NgModule({
  declarations: [
    AdventureS1Component,
    AdventureS2Component,
    AdventureFiltersComponent,
    AdventureListComponent,
    AdventuresComponent
  ],
  imports: [
    CommonModule,
    AdventuresRoutingModule
  ]
})
export class AdventuresModule { }
