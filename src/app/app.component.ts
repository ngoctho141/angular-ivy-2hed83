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
  filteredFiles;

  constructor(jsonService: JsonIntersectionService) {
    let jsonFiles;
    jsonService.getJson().subscribe(data => {
       jsonFiles = data;
      //  console.log("json files = ", jsonFiles);
      let commonKeys = JsonIntersectionService.findCommonKeys(jsonFiles)
       console.log("common keys = ", commonKeys);
       this.filteredFiles = JsonIntersectionService.filterOut(jsonFiles, commonKeys);
       console.log("filtered files = ", this.filteredFiles);
       console.log("common entries = ", JsonIntersectionService.findCommonEntries(jsonFiles, commonKeys));
    });
  }

    ngOnInit() {

    }
}
