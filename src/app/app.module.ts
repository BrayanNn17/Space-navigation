import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [ 
    BrowserModule, 
    SharedModule,
    HomeModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  exports:[AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

