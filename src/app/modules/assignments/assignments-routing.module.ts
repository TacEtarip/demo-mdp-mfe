import { TalentListComponent } from './talent-list/talent-list.component';
import { DetailComponent } from './detail/detail.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'talent', component: TalentListComponent },
      {
        path: 'talent/:talentId',
        component: DetailComponent,
      },
      { path: '', redirectTo: 'talent', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignmentsRoutingModule {}
