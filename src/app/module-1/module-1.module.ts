import { NgModule } from '@angular/core';
import { Component1Component } from './component-1/component-1.component';
import { Module1RoutingModule } from './module-1-routing/module-1-routing.module';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component2Component } from './component-2/component-2.component';
import {SliderModule} from 'primeng/slider';

@NgModule({
  imports: [Module1RoutingModule, FormsModule, DropdownModule, CommonModule, SliderModule],
  declarations: [Component1Component, Component2Component],
  exports:[
  ]
})
export class Module1Module {}
