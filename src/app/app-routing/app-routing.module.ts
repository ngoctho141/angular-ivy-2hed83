import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'module1',
    loadChildren: () =>
      import('../module-1/module-1.module').then((m) => m.Module1Module),
  },
  // {
  //   path:'',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      // enableTracing: false, // <-- debugging purposes only
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
