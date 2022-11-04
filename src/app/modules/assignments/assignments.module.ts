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

@NgModule({
  declarations: [MainComponent, DetailComponent, TalentCardComponent],
  imports: [
    CommonModule,
    AssignmentsRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class AssignmentsModule {}
