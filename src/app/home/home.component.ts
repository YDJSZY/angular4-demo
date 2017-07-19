import { Component ,OnInit, OnChanges,SimpleChanges} from '@angular/core';
import {HomeService} from './home.service';
import {dataFields} from './home.dataFields';
import { MyPipe } from '../../pipes/pipes';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers:[HomeService],
    //directives:[FieldCheckBox]
    //styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnChanges,OnInit{
    objectList:any[]
    title:Object
    dataFields:Object
    fieldShow:Object
    bgc:string
    bbb:string
    term = new FormControl();
    constructor(public homeService:HomeService){
        this.objectList = [{id:1,origin_name:"小明",total:1200}];
        this.dataFields = dataFields.fields;
        this.fieldShow = dataFields.fieldShow;
        this.bgc = "black";
        this.bbb = new MyPipe().transform("sw");
    }

    ngOnChanges(changes:SimpleChanges){
        console.log(changes)
    }

    ngOnInit() {
        this.term.valueChanges.debounceTime(2000).subscribe(function (term){
                console.log(term)
            })
        var promise = this.homeService.getData();
        promise.subscribe(function (res){
            console.log(res)
        })
    }

    renderData(e){
        console.log(1)
        return "11";
    }

    renderDatas(){
        console.log(2);
        return "22";
    }

    trackByFn(index,item){
        return item.id;
    }

    create(){

    }
    
    edit(){
        
    }

    quickSearch(){}
};
