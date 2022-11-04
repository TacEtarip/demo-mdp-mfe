import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'assignments',
    loadChildren: () =>
      import('./modules/assignments/assignments.module').then(
        (m) => m.AssignmentsModule
      ),
  },
  {
    path: '',
    redirectTo: 'assignments',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
