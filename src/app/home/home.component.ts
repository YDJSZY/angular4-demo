import { Component, OnInit, AfterViewInit} from '@angular/core';
import {dataFields} from './home.dataFields';
import 'rxjs/add/operator/debounceTime';
import { DataTable } from '../../utilClass/crud';
import { TableSort } from '../../utilClass/tableSort';
import { HttpService } from '../../service/httpService';
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers:[HttpService],
})
export class HomeComponent extends DataTable implements OnInit,AfterViewInit{
    dateRangeConfig:Object={}
    baseUrl:String
    constructor(public http:HttpService){
        super();
        this.dataFields = dataFields.fields;
        this.fieldShow = dataFields.fieldShow;
        this.baseUrl = "../../data.json";
        this.http = http;
        this.tableSort = new TableSort(this.dataFields,"#homeTable");
    }

    ngOnInit() {
        /*this.term.valueChanges.debounceTime(2000).subscribe(function (term){
                console.log(term)
            })*/
    }

    ngAfterViewInit() {
        this.run();
    }
    
};
