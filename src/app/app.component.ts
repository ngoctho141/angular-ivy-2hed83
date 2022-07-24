import { Component, VERSION } from '@angular/core';
import {MenuItem} from 'primeng/api';

export class Diagram {
  // id:string;
  // diagramHeader: string;
  // spec: string;

  constructor(public id: string, public diagramHeader: string, public spec: string){}
  renderDiagram(){
    console.log("Rendering diagram: ", "id = ", this.id, "header = ", this.diagramHeader, "specification = ", this.spec);
  }
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  items: MenuItem[];

  myDiagram: Diagram = new Diagram("134", "Performance Diagram", "color: blue");
    ngOnInit() {
        this.items = [
          {label: 'Component 1', icon: 'pi pi-fw pi-home', routerLink: '/module1/component1', queryParams: this.myDiagram},
          {label: 'Component 2', icon: 'pi pi-fw pi-calendar', routerLink: 'module1/component2', state: this.myDiagram}
      ];
    }
}
