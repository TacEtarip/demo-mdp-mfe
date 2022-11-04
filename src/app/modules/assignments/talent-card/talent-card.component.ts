import { Component, Input, OnInit } from '@angular/core';
import { ITalent } from 'src/app/interfaces/ITalent';

@Component({
  selector: 'app-talent-card',
  templateUrl: './talent-card.component.html',
  styleUrls: ['./talent-card.component.scss'],
})
export class TalentCardComponent implements OnInit {
  @Input() talent!: ITalent;

  baseUrl = 'http://localhost:4201';

  constructor() {}

  ngOnInit(): void {}
}
