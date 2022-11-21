import { Component, VERSION } from '@angular/core';
import {MenuItem} from 'primeng/api';
import * as $ from 'jquery';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
               label:'File',
               icon:'pi pi-fw pi-file',
               routerLink:'/module1/component1',
               items:[
                  {
                     label:'New',
                     icon:'pi pi-fw pi-plus',
                     items:[
                        {
                           label:'Bookmark',
                           icon:'pi pi-fw pi-bookmark'
                        },
                        {
                           label:'Video',
                           icon:'pi pi-fw pi-video'
                        },

                     ]
                  },
                  {
                     label:'Delete',
                     icon:'pi pi-fw pi-trash'
                  },
                  {
                     separator:true
                  },
                  {
                     label:'Export',
                     icon:'pi pi-fw pi-external-link'
                  }
               ]
            },
            {
               label:'Edit',
               routerLink: '/module1/component2',
               icon:'pi pi-fw pi-pencil',
               items:[
                  {
                     label:'Left',
                     icon:'pi pi-fw pi-align-left'
                  },
                  {
                     label:'Right',
                     icon:'pi pi-fw pi-align-right'
                  },
                  {
                     label:'Center',
                     icon:'pi pi-fw pi-align-center'
                  },
                  {
                     label:'Justify',
                     icon:'pi pi-fw pi-align-justify'
                  },

               ]
            },
            {
               label:'Users',
               icon:'pi pi-fw pi-user',
               items:[
                  {
                     label:'New',
                     icon:'pi pi-fw pi-user-plus',

                  },
                  {
                     label:'Delete',
                     icon:'pi pi-fw pi-user-minus',

                  },
                  {
                     label:'Search',
                     icon:'pi pi-fw pi-users',
                     items:[
                        {
                           label:'Filter',
                           icon:'pi pi-fw pi-filter',
                           items:[
                              {
                                 label:'Print',
                                 icon:'pi pi-fw pi-print'
                              }
                           ]
                        },
                        {
                           icon:'pi pi-fw pi-bars',
                           label:'List'
                        }
                     ]
                  }
               ]
            },
            {
               label:'Events',
               icon:'pi pi-fw pi-calendar',
               items:[
                  {
                     label:'Edit',
                     icon:'pi pi-fw pi-pencil',
                     items:[
                        {
                           label:'Save',
                           icon:'pi pi-fw pi-calendar-plus'
                        },
                        {
                           label:'Delete',
                           icon:'pi pi-fw pi-calendar-minus'
                        },

                     ]
                  },
                  {
                     label:'Archieve',
                     icon:'pi pi-fw pi-calendar-times',
                     items:[
                        {
                           label:'Remove',
                           icon:'pi pi-fw pi-calendar-minus'
                        }
                     ]
                  }
               ]
            },
            {
               separator:true
            },
            {
               label:'Quit',
               icon:'pi pi-fw pi-power-off'
            }
         ];
         $(document).ready(function(){
            $('#').hover(($event)=>{
                console.log($event);
            })
         });
    }
}
