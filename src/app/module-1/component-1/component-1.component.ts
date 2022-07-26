import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SendObjectService } from 'src/app/send-object.service';
import {take} from 'rxjs/operators';
import { Diagram } from 'src/app/app.component';
import { EChartsOption, LineSeriesOption } from 'echarts';

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

    updateOption(updateVal: any, valToUpdate:any,callback:(modifiedOption: EChartsOption, updateValue: any)=>void){
      // console.log(event);
      valToUpdate = updateVal;
      let modifiedOption: EChartsOption = {};
      const optionService$ = this.objService.getOptionStorage();
      optionService$.pipe(take(1)).subscribe(opt=>{
        /*   console.log("XXXXX", opt);
        console.log("XXXXX", this.selectedColor); */
        modifiedOption = Object.assign(modifiedOption, opt);
        callback(modifiedOption, valToUpdate.value);
        console.log('modifiedOption = ', modifiedOption);
      }, undefined, ()=>{
        console.log("this observable closed, modifiedOption = ",modifiedOption);
        optionService$.next(modifiedOption);
      })
    }

    updateColor(modifiedOption: EChartsOption, color:string){
      // Object.assign(modifiedOption, opt); // also worked.
      // modifiedOption = opt; // fehler, weil address changed
      modifiedOption.color = color;
      console.log("Updated color. ", ", modifiedOption = ", modifiedOption);
    }
    _val:number;

    get val(){
      return this._val;
    } 

    set val(event){
      console.log("update Smooth: event = ", event);
      this.updateOption(event, this._val, this.updateSmoothness);
    }

    updateSmoothness(modifiedOption: EChartsOption, smoothness:number){
      // if(typeof modifiedOption.series === "LineSeriesOption")
      if(Array.isArray(modifiedOption.series) && modifiedOption.series[0].type === 'line'){
        debugger
        let s = modifiedOption.series[0] as LineSeriesOption;
        s.smooth = +smoothness;
        console.log("after update smoothness, modifiedOption = ", modifiedOption);
      }
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