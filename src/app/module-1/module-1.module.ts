import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component-1/component-1.component';
import { Module1RoutingModule } from './module-1-routing/module-1-routing.module';

@NgModule({
  imports: [Module1RoutingModule],
  declarations: [Component1Component],
})
export class Module1Module {}
