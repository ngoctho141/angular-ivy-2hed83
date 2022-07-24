import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component-1/component-1.component';
import { Module1RoutingModule } from './module-1-routing/module-1-routing.module';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [Module1RoutingModule, FormsModule, DropdownModule, CommonModule],
  declarations: [Component1Component],
  exports:[
  ]
})
export class Module1Module {}
