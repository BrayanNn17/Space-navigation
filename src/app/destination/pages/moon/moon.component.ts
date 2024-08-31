import { Component, OnInit } from '@angular/core';
import { Planets } from 'src/app/interfaces/interfaces.interfaces';
import { PlanetsService } from 'src/app/services/planets.service';

@Component({
  selector: 'app-moon',
  templateUrl: './moon.component.html',
  styleUrls: ['./moon.component.css']
})
export class MoonComponent implements OnInit {
  public envioPlanet!: Planets;
 
  constructor(private planet: PlanetsService) {
    document.body.style.backgroundImage = 'url(assets/destination/background-destination-desktop.jpg)';

   }

  ngOnInit(): void {
    this.envioPlanet= this.planet.enviarMoon;
  }


}
