import { Component, Input, OnInit } from '@angular/core';
import { Planets } from 'src/app/interfaces/interfaces.interfaces';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {
 @Input('planet') data!: Planets;
  constructor() { }

  ngOnInit(): void {
  
  }

}
