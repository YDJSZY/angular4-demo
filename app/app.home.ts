/**
 * Created by Apple on 16/11/30.
 */
import { Component,EventEmitter,OnInit } from '@angular/core';
import {ActiveTitleService} from "./active-title.service";
import { ActivatedRoute,Params }   from '@angular/router';
import {Http,RequestOptions,Response,Headers, Request, RequestMethod} from '@angular/http';
import './rxjs-operators';
//import { MyApp } from './app.myApp';
@Component({
    providers: [
        ActiveTitleService, // 添加我们刚才的服务
    ],
    selector: 'home',
    // directives:[MyApp],
    template: `<div class="home"><h4>{{title}}{{myName}}</h4></div>`,
    styles:['h4 {color:#767676}']
})
export class Home implements OnInit{
    title:string
    myName:any
    constructor(private activeTitleService: ActiveTitleService,route:ActivatedRoute){
        activeTitleService.setTitle("this is home page!");
        this.title = activeTitleService.getTitle();
        this.myName = route.snapshot.queryParams;//获取路由参数
    }

    ngOnInit() {
        console.log(this.title+" ngOnInit has call!!!") ;
        var promise = this.activeTitleService.getData();
        promise.then(function (res){
            this.myName = JSON.parse(res._body).results[0]["name"]
            console.log(res)
        }.bind(this));
    }
}
