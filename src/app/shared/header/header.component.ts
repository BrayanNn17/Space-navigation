import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/interfaces.interfaces';
import { MuneService } from 'src/app/services/mune.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public menu:Menu[];


  constructor(private menuServices: MuneService) {
    this.menu=this.menuServices.enviarMenu; 
   }

  ngOnInit(): void {
  
  }

}
