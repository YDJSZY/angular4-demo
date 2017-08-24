import { Component,OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { HttpService } from '../../service/httpService';
import 'rxjs/add/operator/toPromise';
import { GlobalService } from '../../service/globalService';
@Component({
    selector: 'app',
    templateUrl:'./app.html',
    providers:[HttpService],
    styles:[]
})
export class AppComponent implements OnInit{
    isCollapsed:boolean = false;
    constructor(private http:HttpService,private globalService:GlobalService){
        this.http = http;
        this.globalService = globalService;
    }

    ngOnInit() {
        var promise = this.http.getData({url:"../../package.json"});
        promise.then(function (res) {
            this.globalService.setMyInfo(res.json());
        }.bind(this))
    }

    openChange(value) {
        this.isOpenThree = !this.isOpenThree;
    }
};