import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EuropaComponent } from './pages/europa/europa.component';
import { MarsComponent } from './pages/mars/mars.component';
import { MoonComponent } from './pages/moon/moon.component';
import { TitanComponent } from './pages/titan/titan.component';

const routes: Routes = [
  {
    path: 'main',
    
    children:[
      {
        path: 'moon',
        component: MoonComponent
      },
      {
        path: 'titan',
        component: TitanComponent
      },                               
      {
        path: 'europa',
        component: EuropaComponent
      },
      {
        path: 'mars',
        component: MarsComponent
      },
      {
        path: '**',
        redirectTo: 'moon'
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationRoutingModule { }
