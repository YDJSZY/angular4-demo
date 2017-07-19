/**
 * Created by Apple on 16/11/23.
 */
import { Component,EventEmitter } from '@angular/core';
/*import {ActiveTitleService} from "./active-title.service";
import {HighlightDirective,FontsizeDirective} from "./highlight.directive";*/
@Component({
    providers: [
        //ActiveTitleService // 添加我们刚才的服务
    ],
    selector: 'my-app',
    templateUrl: '../views/index.html'
})
export class MyApp {
    /*text:string
    constructor(activeTitleService: ActiveTitleService){
        this.text = activeTitleService.getTitle();
    }*/
    /*onChange(evt){
     console.log("sth. occured");
     this.evtStr = JSON.stringify(evt,null,"\t");
     }*/
}