import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/interfaces.interfaces';



@Injectable({
  providedIn: 'root'
})
export class MuneService {

  public menu: Menu[] = [
    {
    numero: '00',
    titulo: 'HOME',
    url:'/home'
  },
  {
    numero: '01',
    titulo: 'DESTINATION',
    url:'../destination/main/moon'
  },
  {
    numero: '02',
    titulo: 'CREW',
    url:'/crew'
  },
  {
    numero: '03',
    titulo: 'TECHNOLOGY',
    url:'/technology'
  }
]

  constructor() { }
  
  get enviarMenu(): Menu[]{
    return this.menu;
  }
}
