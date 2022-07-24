import { AfterViewInit, Component, VERSION } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SendObjectService } from './send-object.service';
import * as echarts from 'echarts';

export class Diagram {
  // id:string;
  // diagramHeader: string;
  // spec: string;

  constructor(public id: string, public diagramHeader: string, public spec: string) { }
  renderDiagram() {
    console.log("Rendering diagram: ", "id = ", this.id, "header = ", this.diagramHeader, "specification = ", this.spec);
  }
}
export const myDiagram: Diagram = new Diagram("134", "Performance Diagram", "color: blue");
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  name = 'Angular ' + VERSION.major;
  items: MenuItem[];
  overviewDiagram: Diagram;
  constructor(private objService: SendObjectService) {
    console.log("Service id at app component: ", objService.randNum);
  }
  ngAfterViewInit(): void {
    var chartDom = document.getElementById('chart-container');
    var myChart = echarts.init(chartDom);
    this.objService.getOptionStorage().subscribe(
      opt=>{
        myChart.setOption(opt);
      }
    )
  }

  ngOnInit() {
    this.overviewDiagram = new Diagram("1", "Overview Diagram", "type: pie");
    this.items = [
      { label: 'Component 1', icon: 'pi pi-fw pi-home', routerLink: '/module1/component1', queryParams: myDiagram },
      { label: 'Component 2', icon: 'pi pi-fw pi-calendar', routerLink: 'module1/component2', state: myDiagram }
    ];
  }

  resetDiagram() {
    this.objService.getObjStorage().next(myDiagram);
    console.log("Button clicked!!");
  }

  changeDiagramName() {
    this.overviewDiagram.id = '999';
    this.objService.getObjStorage().next(this.overviewDiagram);
    console.log("Change name button clicked!!");
  }
}
