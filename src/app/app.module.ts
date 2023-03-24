import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {ContextMenuModule} from 'primeng/contextmenu';
import { ButtonModule } from "@mycomp/ui-sdk/button";


@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, ContextMenuModule, ButtonModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
