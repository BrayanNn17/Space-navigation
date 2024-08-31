import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonComponent } from './boton/boton.component';
import { TextComponent } from './text/text.component';
import { PrincipalComponent } from './principal/principal.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: 
  [
  BotonComponent,
  TextComponent,
  PrincipalComponent ],

  imports: 
  [
    CommonModule,
    SharedModule,
    AppRoutingModule
    
  ],

  exports: 
  [
    BotonComponent,
    TextComponent
  ]
})
export class HomeModule { }
