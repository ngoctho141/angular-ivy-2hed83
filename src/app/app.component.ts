import { Component, VERSION } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { JsonIntersectionService } from './json-intersection.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  constructor(jsonService: JsonIntersectionService) {
    jsonService.getJson();
  }

    ngOnInit() {

    }
}
