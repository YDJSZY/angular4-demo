/**
 * Created by luwenwe on 2017/7/12.
 */
import { Component,OnInit,OnChanges,Input,Output,ElementRef,EventEmitter,ViewChild,AfterViewInit,SimpleChange} from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
const UiPagination = require("../utils/ui-pagination");
const DateRange = require("../utils/dateRange");
declare var $:any
@Component({
    selector: 'field-check-box',
    templateUrl: './field-check-box.html',
})
export class FieldCheckBoxComponent implements OnInit {
    @Input() datafields:any
    @Input() fieldshow:any
    showPanel:boolean=false
    constructor(){
    }

    ngOnInit() {
        var self = this;
        document.onclick = function (e) {
            var event = e || window.event;
            event.stopPropagation() || event.cancelBubble;
            self.showPanel = false;
        };
    }

    openbindclick(e){
        var event = e || window.event;
        event.stopPropagation() || event.cancelBubble;
        this.showPanel = !this.showPanel;

    }

    selectField(e,name){
        var event = e || window.event;
        event.stopPropagation() || event.cancelBubble;
        if(!name) return;
        this.fieldshow[name] = !this.fieldshow[name];
    }
}

@Component({
    selector: 'pagination',
    templateUrl: './pagination.html',
})

export class PaginationComponent implements OnInit,AfterViewInit,OnChanges {
    @Input() paginationMessage={totalRecords:0,totalPages:1,currentPage:1,page_size:20}
    @Input() currentTimestamp:number
    @Output() loadData = new EventEmitter<any>();
    @ViewChild("pagination")
    paginationEle:ElementRef
    params:{page_size:number,page:number}
    uiPagination:any
    constructor() {
        this.currentTimestamp = 0;
        this.params = {page_size:20,page:1}
    }

    everyPageSize(){
        this.params.page_size = this.paginationMessage.page_size;
        this.params.page = 1;
        this.loadData.emit(this.params);
    }

    ngOnChanges(changes:{[propName: string]: SimpleChange}){
        if(!this.currentTimestamp) return;
        this.uiPagination.totalPage = this.paginationMessage.totalPages;
        this.uiPagination.currentPage = 1;
        this.uiPagination.init();
        this.gotoPage();
    }

    ngOnInit() {/*在第一轮 ngOnChanges 完成之后调用。 ( 译注：也就是说当每个输入属性的值都被触发了一次 ngOnChanges 之后才会调用 ngOnInit ，此时所有输入属性都已经有了正确的初始绑定值 )*/

    }

    ngAfterViewInit(){/*初始化完组件视图及其子视图之后调用。*/
        this.uiPagination = new UiPagination(this.paginationMessage.totalPages,this.paginationEle.nativeElement)
        this.uiPagination.init();
        this.gotoPage();
    }

    gotoPage(){
        $(this.paginationEle.nativeElement).on("gotoPage",function(event,currentPage){
            this.params.page = currentPage;
            this.loadData.emit(this.params);
        }.bind(this))
    }

    ngDoCheck(){

    }
}

@Component({
    selector: 'edit-modal',
    templateUrl: './edit-modal.html'
})
export class EditModalComponent implements OnInit,OnChanges{
    @Input() dataFields
    @Input() editForm
    @Input() currentTimestamp
    @Input() selectSources
    @Output() saveForm = new EventEmitter<any>();
    isVisible:boolean=false
    el:ElementRef
    constructor(el:ElementRef,private _message: NzMessageService){
        this.el = el;
    }

    ngOnInit() {

    }

    ngOnChanges(change:{[propName: string]: SimpleChange}){
        if(this.currentTimestamp){
            this.translateForm();
            this.isVisible = true;
        }
    }

    translateForm() {
        for(var field of this.dataFields){
            if(field.inputType=="date"){
                var value = this.editForm.controls[field.fieldName].value;
                if(!value) continue;
                this.editForm.controls[field.fieldName].setValue(new Date(value))
            }
        }
    }

    handleCancel(e) {
        this.isVisible = false;
    }

    onSubmit(event?:any){
        if(!this.validateForm(this.editForm)){
            this._message.create('error', '表单填写有误', {nzDuration: 5000});
            return;
        }
        this.saveForm.emit(this.editForm.value);
        this.isVisible = false;
    }

    validateForm(form){
        for(var control in form.controls){
            if(!form.controls[control].valid){
                var result = this.runValidate(control)
                if(!result) return false;
            }
        }
        return true;
    }

    runValidate(control){
        for(var field of this.dataFields){
            if(field.fieldName == control){
                if(!field.validators) continue;
                for(var validator of field.validators){
                    var value = this.editForm.controls[control].value;
                    if(validator.name == "required"){
                        if((!value && parseInt(value)!=0) || value.length==0) return false;
                    }else{
                        return validator[validator.name](value);
                    }
                }
            }
        }
        return true;
    }

    uiSelected(e,control) {
        control.selectValue = e.id;
        console.log(control)
    }
}

@Component({
    selector: 'daterange',
    template:`<span>
                    <div nz-form-item style="margin-right: 5px;">
                        <div nz-form-control>
                            <select class='custom-select' #dateRangeSelect id='dateSelect'></select>
                        </div>
                    </div>
                    <div nz-form-item style="margin-right: 5px">
                    <div nz-form-control>
                        <nz-datepicker [nzSize]="'large'" [(ngModel)]="dateRange.begin_time" [nzPlaceHolder]="'开始日期'"></nz-datepicker>
                    </div>
                </div>
                <div nz-form-item>
                    <p nz-form-split style="margin-top: 5px">-</p>
                </div>
                <div nz-form-item style="margin-left: -12px">
                    <div nz-form-control>
                        <nz-datepicker [nzSize]="'large'" [(ngModel)]="dateRange.end_time" [nzPlaceHolder]="'结束日期'"></nz-datepicker>
                    </div>
                </div>
            </span>`
})
export class DateRangeComponent implements OnInit,AfterViewInit{
    @Input() dateRange
    @Input() dateRangeConfig
    @Output() dateChangeFunc = new EventEmitter<any>();
    @ViewChild("dateRangeSelect")
    dateRangeSelectEle:ElementRef
    config:Object
    el:ElementRef
    constructor(el:ElementRef){
        this.el = el;
        this.config = {
            minView:2,
            dateRangeName:"今天"
        }
    }

    ngOnInit() {
        var self = this;
    }

    ngAfterViewInit(){
        var dateRange = new DateRange(this.dateRangeSelectEle.nativeElement,Object.assign(this.config,this.dateRangeConfig));
        //setTimeout(function (){
            this.renderDatePicker(dateRange.currentDateRange)
        //}.bind(this))
        dateRange.targetElement.on("dataRangeChange",function (event,dateRange){
            this.renderDatePicker(dateRange,true);
        }.bind(this));
    }

    renderDatePicker(dateRange:any,emitEvent?: boolean) {
        this.dateRange.begin_time = new Date(dateRange.begin_time).getTime();
        this.dateRange.end_time = new Date(dateRange.end_time).getTime();
        if(emitEvent) this.dateChangeFunc.emit();
    }
}
