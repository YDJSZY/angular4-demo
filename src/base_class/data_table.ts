/**
 * Created by luwenwe on 2017/8/7.
 */
import { FormControl,Validators,FormGroup,FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import { ToasterConfig } from 'angular2-toaster';
export class DataTable{
    objectList:any[]
    dataFields:Object
    fieldShow:Object
    toasterconfig: ToasterConfig
    http:HttpService
    currentRepeatObj:Object
    loadObjectParams:Object
    paginationMessage:Object
    selectSources:Object
    tableForm: FormGroup
    constructor(public toasterconfig:ToasterConfig,public fb:FormBuilder){
        this.fb = new FormBuilder();
        this.toasterconfig = new ToasterConfig({animation: 'fade'});
        this.loadObjectParams = {"page":1, "page_size":20, "ordering":"", "search":"", "begin_time":"", "end_time":""};
        this.paginationMessage = {"totalRecords":null,"totalPages":1,"currentPage":1,"page_size":20,"pageReady":false,"currentTimestamp":null};
        this.selectSources = {
            selectData:[{id: '1', text: '篮球'},{id: '2', text: '音乐'},{id: '3', text: '跑步'}],
            translate:function (source,name) {
                if(this[name]) return this[name];
                var array = [];
                for(var item of source){
                    array.push({id:item.code,text:item.description})
                }
                return this[name] = array;
            }
        }
    }

    makeUrl(restApi) {
        if(restApi.startsWith("/")) {
            return "/api/v0" + restApi;
        } else {
            return "/api/v0/" + restApi;
        }
    }

    loadFirstPage (params) {
        params = Object.assign({page:1},params || {});
        this.loadObjects(params,true);
    }//载入第一页

    loadObjects (params,reset) {
        this.loadObjectParams = Object.assign(this.loadObjectParams,params || {});
        var promise = this.http.getData({
            "url": this.baseUrl,//this.makeUrl(this.baseUrl),
            "params": this.loadObjectParams
        });/*.then(function (response) {
            this.parseResponse(response);
            if(reset) this.paginationMessage.currentTimestamp = new Date().getTime();
        }.bind(this))*/
        promise.then(function (res) {
            if(res.status == 200) return res
        }).then(function (res) {
            this.parseResponse(res.json())
        }.bind(this)).catch(function (error) {
            console.debug(error);
        })
    }//载入资源

    parseResponse (response) {
        this.objectList = response.results;
        this.paginationMessage["totalRecords"] = response.count;
        this.paginationMessage["totalPages"] = response.num_pages;
        this.paginationMessage["pageReady"] = true;
        this.paginationMessage["currentPage"] = this.loadObjectParams.page;
        this.paginationMessage["summary"] = response.summary;
        return this.objectList;
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

    createTableForm(){
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
        this.tableForm = this.fb.group(obj);
    }

    trackByFn(index,item){
        return item.id;
    }

    createTable(){
        this.tableForm ? this.tableForm.reset() : this.createTableForm();
        $("#editModal").modal("show");
    }

    edit(obj){
        //console.log(obj);
        for(var control in obj){
            if(!this.tableForm.controls.hasOwnProperty(control)) continue;
            //console.log(this.tableForm.controls[control])
            this.tableForm.controls[control].setValue(obj[control]);
        }
        $("#editModal").modal("show");
        //console.log(this.tableForm.controls)
    }

    beforeSave(data) {
        return data;
    }

    saveForm(data){
        this.beforeSave(data);
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
        //console.log(date)
    }

    run(){
        this.loadFirstPage();
        this.createTableForm();
    }
}