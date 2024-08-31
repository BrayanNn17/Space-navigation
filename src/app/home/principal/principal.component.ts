import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor() { 
    document.body.style.backgroundImage = 'url(./assets/home/background-home-desktop.jpg)';

  }

  ngOnInit(): void {
  }

}
