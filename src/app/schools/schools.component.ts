import { Component, OnInit } from '@angular/core';
import { CARDS, Card } from "../shared/models/card";

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss']
})
export class SchoolsComponent implements OnInit {
    cards : Card[] = CARDS;
  constructor() { }

  ngOnInit(): void {
  }

}
