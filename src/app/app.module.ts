import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {ContextMenuModule} from 'primeng/contextmenu';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, ContextMenuModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
