import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Diagram } from 'src/app/app.component';

@Component({
  selector: 'app-component-2',
  templateUrl: './component-2.component.html',
  styleUrls: ['./component-2.component.css']
})
export class Component2Component implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { 
    let dO: Diagram = this.router.getCurrentNavigation().extras.state as Diagram;
    console.log(dO.renderDiagram());
  }

  ngOnInit() {
  }

}