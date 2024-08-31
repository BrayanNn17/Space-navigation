import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { DestinationRoutingModule } from './destination-routing.module';

import { MainComponent } from './main/main.component';
import { MoonComponent } from './pages/moon/moon.component';
import { TitanComponent } from './pages/titan/titan.component';
import { StructureComponent } from './components/structure/structure.component';
import { EuropaComponent } from './pages/europa/europa.component';
import { MarsComponent } from './pages/mars/mars.component';



@NgModule({
  declarations: [
    MainComponent,
    MoonComponent,
    TitanComponent,
    StructureComponent,
    EuropaComponent,
    MarsComponent,
    
  ], 
  imports: [
    CommonModule,
    DestinationRoutingModule,
    SharedModule,

  ]
})
export class DestinationModule { }
