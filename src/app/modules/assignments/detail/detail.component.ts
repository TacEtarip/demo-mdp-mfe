import { TalentService } from './../../../services/talent.service';
import { ITalent } from 'src/app/interfaces/ITalent';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnDestroy {
  talent!: ITalent;
  rating: number = 3;
  paramsSubscription!: Subscription;
  baseUrl = 'http://localhost:4201';

  starCount: number = 5;

  constructor(
    private router: ActivatedRoute,
    private talentService: TalentService
  ) {
    this.paramsSubscription = this.router.params.subscribe((p) => {
      const params = p as { talentId: string };

      this.talent = this.talentService.getTalent(
        parseInt(params.talentId, 10)
      ) as ITalent;
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }

  onRatingChanged(rating: number) {
    this.rating = rating;
  }
}
