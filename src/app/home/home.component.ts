import { Component ,OnInit, OnChanges,SimpleChanges} from '@angular/core';
import {HomeService} from './home.service';
import {dataFields} from './home.dataFields';
import { MyPipe } from '../../pipes/pipes';
import { FormControl,Validators } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
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
    currentRepeatObj:Object
    paginationMessage:Object
    bgc:string
    bbb:string
    myEmail:string
    term = new FormControl();
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.pattern(EMAIL_REGEX)]);
    constructor(public homeService:HomeService){
        this.objectList = [{id:1,origin_name:"小明",total:1200},{id:2,origin_name:"小黄",total:3400}];
        this.dataFields = dataFields.fields;
        this.fieldShow = dataFields.fieldShow;
        this.bgc = "black";
        this.bbb = new MyPipe().transform("sw");
        this.paginationMessage = {totalRecords:2,totalPages:10,currentPage:1,pageSize:200,currentTimestamp:null}
    }

    myErrorStateMatcher(control: FormControl){
        var value = this.value;
        if(value > 1 || value < 0) return true;
        return false;
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

    renderData(params){
        var renderData = function (params){
            var fieldObj = params[0],singleData = params[1]
            this.currentRepeatObj = singleData;
            var key = fieldObj["fieldName"];
            if(fieldObj["render"]){
                return fieldObj["render"].apply(this,[singleData[key]])
            }
            return singleData[key];
        }.bind(this)
        return renderData(params)
    }/*对后端返回的数据进行合适的转换以供前端展示*/

    trackByFn(index,item){
        return item.id;
    }

    create(){

    }
    
    edit(){
        this.paginationMessage.totalPages = 20;
        this.paginationMessage.currentTimestamp = new Date().getTime();
        console.log(this.paginationMessage)
    }

    toggleDetail(obj){
        return obj.showDetail = !obj.showDetail;
    }
    
    loadData(params){
        console.log(params)
    }

    quickSearch(){}
};
