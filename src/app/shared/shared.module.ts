import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { PlanetasComponent } from './planetas/planetas.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PlanetasComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    PlanetasComponent
  ]
})
export class SharedModule { }
