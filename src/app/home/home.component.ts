import { Component ,OnInit, OnChanges,SimpleChanges} from '@angular/core';
import {dataFields} from './home.dataFields';
import 'rxjs/add/operator/debounceTime';
import { DataTable } from '../../base_class/data_table';
import { HttpService } from '../../service/httpService';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers:[HttpService],
})
export class HomeComponent extends DataTable implements OnInit{
    dateRangeConfig:Object={}
    baseUrl:String
    constructor(public http:HttpService){
        super();
        this.dataFields = dataFields.fields;
        this.fieldShow = dataFields.fieldShow;
        this.baseUrl = "../../data.json";
        this.http = http;
    }

    ngOnInit() {
        this.run();
        /*this.term.valueChanges.debounceTime(2000).subscribe(function (term){
                console.log(term)
            })*/
    }
    
};
