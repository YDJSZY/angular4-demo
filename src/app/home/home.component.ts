import { Component ,OnInit, OnChanges,SimpleChanges} from '@angular/core';
import {HomeService} from './home.service';
import {dataFields} from './home.dataFields';
import { MyPipe } from '../../pipes/pipes';
import { FormControl,Validators,FormGroup,FormBuilder } from '@angular/forms';
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
    myForm: FormGroup;
    myTime:any
    dateRangeConfig:Object={}
    emailFormControl = new FormControl('', [
        Validators.required]);
    constructor(public homeService:HomeService,public fb:FormBuilder){
        this.objectList = [{id:1,origin_name:"小明",total:1200},{id:2,origin_name:"小黄",total:3400}];
        this.dataFields = dataFields.fields;
        this.fieldShow = dataFields.fieldShow;
        this.bgc = "black";
        this.bbb = new MyPipe().transform("sw");
        this.fb = fb;
        this.createForm();
        this.selectSources = {
            selectData:[{id: '1', text: '篮球'},{id: '2', text: '音乐'},{id: '3', text: '跑步'}],
            translate:function (source,name) {
                if(this[name]) return this[name];
                var array = [];
                for(var item of source){
                    array.push({id:item.code,name:item.description})
                }
                return this[name] = array;
            }
        }
        this.paginationMessage = {totalRecords:2,totalPages:10,currentPage:1,pageSize:200,currentTimestamp:null}
    }
    
    createForm(){
        var obj = {},validators = [];
        for(var field of this.dataFields){
            if(!field.edit) continue;
            obj[field.fieldName] = [field.defaultValue || ''];
            if(!field.validators) continue;
            for(var error of field.validators){
                validators.push(Validators[error.name] || error[error.name]);
            }
            obj[field.fieldName][1] = Validators.compose(validators);
        }
        this.myForm = this.fb.group(obj);
    }
    
    saveForm(form) {
        console.log(form._valid)
    }

    myErrorStateMatcher(control: FormControl){
        return true;
    }

    ngOnChanges(){

    }

    ngOnInit() {
        this.term.valueChanges.debounceTime(2000).subscribe(function (term){
                console.log(term)
            })
        var promise = this.homeService.getData();
        promise.subscribe(function (res){
            //console.log(res)
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
        this.createForm();
        $("#editModal").modal("show");
    }
    
    edit(){
        this.myForm.controls.username.setValue("lww");
        this.myForm.controls.hobby.setValue([{id: '2', text: '音乐'}]);
        $("#editModal").modal("show");
        console.log(this.myForm.controls.username.value)
    }
    
    beforeSave(data) {
        
    }
    
    save(data){
        console.log(data)
    }

    toggleDetail(obj){
        return obj.showDetail = !obj.showDetail;
    }
    
    loadData(params){
        console.log(params)
    }

    quickSearch(){}

    dateChangeFunc(date){
        console.log(date)
    }

    uiSelected(e) {
        console.log(e)
    }
};
