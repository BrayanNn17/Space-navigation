import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { 
    document.body.style.backgroundImage = 'url(assets/destination/background-destination-desktop.jpg)';

  }

  ngOnInit(): void {

  }

}
