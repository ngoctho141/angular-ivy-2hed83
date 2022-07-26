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
    _selectedColor:{value: string};
    
    get selectedColor(){
      return this._selectedColor;
    }
    
    set selectedColor(event){
      this.updateOption(event, this._selectedColor, this.updateColor);
    }

    updateOption(updateVal: any, valToUpdate:any,callback:(option:EChartsOption, modifiedOption: EChartsOption, updateValue: any)=>void){
      // console.log(event);
      valToUpdate = updateVal;
      let modifiedOption: EChartsOption;
      const optionService$ = this.objService.getOptionStorage();
      optionService$.pipe(take(1)).subscribe(opt=>{
        /*   console.log("XXXXX", opt);
        console.log("XXXXX", this.selectedColor); */
        callback(opt,modifiedOption, valToUpdate.value);
      }, undefined, ()=>{
        // console.log("this observable closed");
        optionService$.next(modifiedOption);
      })
    }

    updateColor(opt: EChartsOption, modifiedOption: EChartsOption, color:string){
      console.log("Updated color");
        modifiedOption = opt;
        modifiedOption.color = color;
    }
    _val:number;

    get val(){
      return this._val;
    } 

    set val(event){
      // this.updateOption(event, this._val, this.updateSmoothness);
    }

    updateSmoothness(opt:EChartsOption, modifiedOption: EChartsOption, smoothness:number){
      modifiedOption = opt;
      modifiedOption.smooth = smoothness;
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