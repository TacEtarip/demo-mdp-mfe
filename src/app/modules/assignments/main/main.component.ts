import { TalentService } from './../../../services/talent.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ITalent } from 'src/app/interfaces/ITalent';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent implements OnInit {
  talents: ITalent[] = [];

  constructor(private talentService: TalentService) {}

  ngOnInit(): void {
    this.talents = this.talentService.getTalents();
  }
}
