import { Component, OnInit } from '@angular/core';
import { ITalent } from 'src/app/interfaces/ITalent';
import { TalentService } from 'src/app/services/talent.service';

@Component({
  selector: 'app-talent-list',
  templateUrl: './talent-list.component.html',
  styleUrls: ['./talent-list.component.scss'],
})
export class TalentListComponent implements OnInit {
  talents: ITalent[] = [];

  constructor(private talentService: TalentService) {}

  ngOnInit(): void {
    this.talents = this.talentService.getTalents();
  }
}
