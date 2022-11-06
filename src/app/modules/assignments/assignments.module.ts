import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { AssignmentsRoutingModule } from './assignments-routing.module';
import { DetailComponent } from './detail/detail.component';
import { MatSelectModule } from '@angular/material/select';
import { TalentCardComponent } from './talent-card/talent-card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TalentListComponent } from './talent-list/talent-list.component';
import { TurnBackComponent } from './turn-back/turn-back.component';
import { StartRatingComponent } from './start-rating/start-rating.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    MainComponent,
    DetailComponent,
    TalentCardComponent,
    TalentListComponent,
    TurnBackComponent,
    StartRatingComponent,
  ],
  imports: [
    CommonModule,
    AssignmentsRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatButtonModule,
    MatChipsModule,
  ],
})
export class AssignmentsModule {}
