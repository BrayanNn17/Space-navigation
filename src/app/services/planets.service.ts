import { Injectable } from '@angular/core';
import { Planets } from '../interfaces/interfaces.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  public planets: Planets[] = [
    {
      name: 'MOON',
      text: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
      distance:'384,400 ' ,
      time: '3 DAYS',
      image:'../assets/destination/image-moon.png'
    },
    {
      name: 'EUROPA',
      text: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
      distance:'628 MIL. ' ,
      time: '3 YEARS',
      image:'../assets/destination/image-europa.png'
    },
    {
      name: 'TITAN',
      text: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      distance:'1.6 BIL.' ,
      time: '7 YEARS',
      image:'../assets/destination/image-titan.png'
    },
    {
      name: 'MARS',
      text: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
      distance:'1.6 BIL.' ,
      time: '9 MONTHS',
      image:'../assets/destination/image-mars.png'
    }
    
  ]
  constructor() { }

  get enviarMoon(): Planets{
    return this.planets[0];
  }
  get enviarEuropa(): Planets{
    return this.planets[1];
  }
  get enviarTitan(): Planets{
    return this.planets[2];
  }
  get enviarMars(): Planets{
    return this.planets[3];
  }

}
