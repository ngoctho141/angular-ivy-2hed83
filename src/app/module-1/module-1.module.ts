import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component-1/component-1.component';
import { Module1RoutingModule } from './module-1-routing/module-1-routing.module';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [Module1RoutingModule, DropdownModule, FormsModule, BrowserModule, BrowserAnimationsModule],
  declarations: [Component1Component],
})
export class Module1Module {}
