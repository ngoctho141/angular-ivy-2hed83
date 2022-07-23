import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from '../component-1/component-1.component';
import { Component2Component } from '../component-2/component-2.component';

const childRoutes: Routes = [
  {
    path: 'component1',
    component: Component1Component,
  },
  {
    path: 'component2',
    component: Component2Component,
  },
];
@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule],
})
export class Module1RoutingModule {}
