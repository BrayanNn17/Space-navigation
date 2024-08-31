import { Component, OnInit } from '@angular/core';
import { Planets } from 'src/app/interfaces/interfaces.interfaces';
import { PlanetsService } from 'src/app/services/planets.service';

@Component({
  selector: 'app-titan',
  templateUrl: './titan.component.html',
  styleUrls: ['./titan.component.css']
})
export class TitanComponent implements OnInit {
  public envioPlanet!: Planets;
 
  constructor(private planet: PlanetsService) {
    document.body.style.backgroundImage = 'url(assets/destination/background-destination-desktop.jpg)';
   }

  ngOnInit(): void {
    this.envioPlanet= this.planet.enviarTitan;
  
  }
}
