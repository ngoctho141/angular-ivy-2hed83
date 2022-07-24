import { Injectable } from '@angular/core';
import { EChartsOption } from 'echarts';
import { BehaviorSubject } from 'rxjs';
import { Diagram, myDiagram } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class SendObjectService {
  readonly randNum:number = Math.random();
  private objStorage = new BehaviorSubject<Diagram>(myDiagram);
  private optionStorage = new BehaviorSubject<EChartsOption>({
    color: 'green',
    title: {
      text: 'ECharts Getting Started Example'
    },
    tooltip: {},
    legend: {
      data: ['sales']
    },
    xAxis: {
      data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']
    },
    yAxis: {},
    series: [
      {
        name: 'sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  });
  constructor() { 
  }

  getObjStorage(){
    return this.objStorage;
  }

  getOptionStorage(){
    return this.optionStorage;
  }

}
