import { Component, OnInit } from '@angular/core';
import { ITalent } from 'src/app/interfaces/ITalent';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  talents: ITalent[] = [
    { name: 'Luis Huertas', score: '9.00', skill: 'Full Stack' },
    { name: 'Sergio', score: '9.50', skill: 'QA' },
    { name: 'Roberto Huertas', score: '9.50', skill: 'Front End' },
    { name: 'Sergio', score: '9.50', skill: 'QA' },
    { name: 'Roberto Huertas', score: '9.50', skill: 'Front End' },
    { name: 'Luis', score: '9.00', skill: 'Full Stack' },
    { name: 'Roberto Huertas', score: '9.50', skill: 'Front End' },
    { name: 'Luis', score: '9.00', skill: 'Full Stack' },
    { name: 'Sergio', score: '9.50', skill: 'QA' },
    { name: 'Roberto Huertas', score: '9.50', skill: 'Front End' },
    { name: 'Sergio', score: '9.50', skill: 'QA' },
    { name: 'Roberto Huertas', score: '9.50', skill: 'Front End' },
    { name: 'Roberto Huertas', score: '9.50', skill: 'Front End' },
    { name: 'Luis', score: '9.00', skill: 'Full Stack' },
    { name: 'Roberto Huertas', score: '9.50', skill: 'Front End' },
    { name: 'Luis', score: '9.00', skill: 'Full Stack' },
    { name: 'Roberto Huertas', score: '9.50', skill: 'Front End' },
    { name: 'Luis', score: '9.00', skill: 'Full Stack' },
    { name: 'Sergio', score: '9.50', skill: 'QA' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
