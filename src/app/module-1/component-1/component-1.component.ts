import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SendObjectService } from 'src/app/send-object.service';
import {take} from 'rxjs/operators';
import { Diagram } from 'src/app/app.component';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-component-1',
  templateUrl: './component-1.component.html',
  styleUrls: ['./component-1.component.css']
})
export class Component1Component implements OnInit {

  colors = [
    { value:'red'},
    {value:'green'},
    {value:'blue'}
    ];
  _selectedColor:{value: string} = this.colors[1];

  get selectedColor(){
    return this._selectedColor;
  }

  set selectedColor(event){
    // console.log(event);
    this._selectedColor = event;
    let modifiedOption: EChartsOption;
    const optionService$ = this.objService.getOptionStorage();
    optionService$.pipe(take(1)).subscribe(opt=>{
      console.log("XXXXX", opt);
      console.log("XXXXX", this.selectedColor);
      modifiedOption = opt;
      modifiedOption.color = this.selectedColor.value;
    }, undefined, ()=>{
      console.log("this observable closed");
      optionService$.next(modifiedOption);
    })
  }
  diagram: Diagram;
  constructor(private route: ActivatedRoute, private router: Router, private objService: SendObjectService) { 
    console.log("Service id at component1 component: ", objService.randNum);

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log((params['name']));
    });

    this.objService.getObjStorage().subscribe(diag => {
      this.diagram = diag;
      console.log(this.diagram);
    }
    )
  }

}