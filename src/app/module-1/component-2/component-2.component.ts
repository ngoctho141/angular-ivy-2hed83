import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EChartsOption } from 'echarts';
import { Diagram } from 'src/app/app.component';
import { SendObjectService } from 'src/app/send-object.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-component-2',
  templateUrl: './component-2.component.html',
  styleUrls: ['./component-2.component.css']
})
export class Component2Component implements OnInit {

  types = [
    { value:'pie'},
    {value:'line'},
    {value:'bar'}
  ]

  _selectedType = this.types[2];

  get selectedType(){
    return this._selectedType;
  }

  set selectedType(event){
    this._selectedType = event;
    let modifiedOption: EChartsOption;
      const optionService$ = this.objService.getOptionStorage();
      optionService$.pipe(take(1)).subscribe(opt=>{
        console.log("YYYYYYYYYY", opt);
        console.log("YYYYYYYYYY", this.selectedType);
        modifiedOption = opt;
        let s = modifiedOption.series;
        if(s && Array.isArray(s)){
          type ChartType = "bar" | "line" | "pie";
          s[0].type =  this._selectedType.value as ChartType;
        }
      }, undefined, ()=>{
        console.log("this observable closed. modified option: ", modifiedOption);
        optionService$.next(modifiedOption);
      })
  }

  constructor(private route: ActivatedRoute, private router: Router, private objService: SendObjectService) { 
    console.log("service id at component2 component", objService.randNum);
    let dO: Diagram = this.router.getCurrentNavigation().extras.state as Diagram;
    if(dO)
    console.log(dO.renderDiagram());
  }

  ngOnInit() {
  }

}