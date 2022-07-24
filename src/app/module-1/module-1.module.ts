import { NgModule } from '@angular/core';
import { Component1Component } from './component-1/component-1.component';
import { Module1RoutingModule } from './module-1-routing/module-1-routing.module';
import { Component2Component } from './component-2/component-2.component';

@NgModule({
  imports: [Module1RoutingModule],
  declarations: [Component1Component, Component2Component],
})
export class Module1Module {}
