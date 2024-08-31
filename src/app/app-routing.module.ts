import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './home/principal/principal.component';
import { StructureComponent } from './destination/components/structure/structure.component';

const route: Routes = [
  {
    path: 'home',
    component: PrincipalComponent
  },
  
  {
  path: 'destination',
  loadChildren: () =>

import('./destination/destination.module').then((m) => m.DestinationModule),


},
{
  path: 'crew',
  component: PrincipalComponent
},
{
  path: 'technology',
  component: StructureComponent
},
{
  path: '**',
  redirectTo: 'home'
}
];

@NgModule({

declarations: [],

imports: [RouterModule.forRoot(route)],

exports: [RouterModule],
})
export class AppRoutingModule {}
