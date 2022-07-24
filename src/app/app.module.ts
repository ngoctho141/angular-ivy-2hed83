import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TabMenuModule } from 'primeng/tabmenu';


@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, TabMenuModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
