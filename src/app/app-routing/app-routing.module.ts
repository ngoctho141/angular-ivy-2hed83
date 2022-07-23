import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'dsaf',
    loadChildren: () =>
      import('../module-1/module-1.module').then((m) => m.Module1Module),
  },
  // {
  //   path:'',
  //   component: Exercise1Component
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false, // <-- debugging purposes only
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
