import { Component, OnInit, AfterViewInit} from '@angular/core';
import {dataFields} from './home.dataFields';
import 'rxjs/add/operator/debounceTime';
import { DataTable } from '../../utilClass/crud';
import { TableSort } from '../../utilClass/tableSort';
import { HttpService } from '../../service/httpService';
import { GlobalService } from '../../service/globalService';
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers:[HttpService],
})
export class HomeComponent extends DataTable implements OnInit,AfterViewInit{
    dateRangeConfig:Object
    baseUrl:String
    constructor(public http:HttpService,public globalService:GlobalService){
        super();
        this.dataFields = dataFields.fields;
        this.fieldShow = dataFields.fieldShow;
        this.dateRangeConfig = {dateRangeName:"本周"};
        this.baseUrl = "../../data.json";
        this.http = http;
        this.globalService = globalService;
        this.tableSort = new TableSort(this.dataFields,"#homeTable");
    }

    ngOnInit() {
        console.log(this.globalService)
        /*this.term.valueChanges.debounceTime(2000).subscribe(function (term){
                console.log(term)
            })*/
    }

    ngAfterViewInit() {
        this.run();
    }
    
};
