/**
 * Created by Apple on 16/11/16.
 */
import { Component,EventEmitter } from '@angular/core';
import {ActiveTitleService} from "./active-title.service";
//import { MyApp } from './app.myApp';
@Component({
    providers: [
        ActiveTitleService // 添加我们刚才的服务
    ],
    selector: 'my-component',
   // directives:[MyApp],
    template: `<div [id]="myId" [class.main]="isMain"><h1>my-component {{text}}</h1>
    <input #box (keyup.enter)="onKeyUp(box.value)">
    <input name="name">
    <p>{{values}}</p>
    <button (click)="showMe()">{{message}}</button><ul><li *ngFor="let item of data">{{item}}</li></ul></div>`,
    //events:["change"]
})
export class AppComponent {
    values:string
    text:string
    message:string
    myId:string
    isMain:boolean
    data:Array<number> = [1,2,3,4,5,6]
    constructor(activeTitleService: ActiveTitleService){
        this.text = activeTitleService.getTitle();
        this.myId = "mainDiv";
        this.message = "click";
        //console.log(this.text)
        //this.data = [1,2,3,4,5];
        //activeTitleService.title = "fuckkkkk!!!";
        //this.change = new EventEmitter();
        //模拟触发事件
        // setTimeout(()=>this.change.next("卢文伟"),3000);
    }
    showMe() {
        this.message = this.message === "click" ? "show" : "click";
        this.isMain = !this.isMain;
        //console.log(this.box.value);
    }

    onKeyUp(v) {
        this.values = v + "ok";
    }
}
