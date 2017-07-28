/**
 * Created by luwenwe on 2017/7/12.
 */
import { Component,OnInit,OnChanges,Input,Output,ElementRef,EventEmitter,ViewChild,AfterViewInit,DoCheck} from '@angular/core';
const UiPagination = require("../utils/ui-pagination");

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
            //$(element).find(".selectPanel").hide();
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
    @Input() paginationMessage={totalRecords:0,totalPages:0,currentPage:0,pageSize:20}
    @Input() currentTimestamp
    @Output() loadData = new EventEmitter<any>();
    @ViewChild("pagination")
    paginationEle:ElementRef
    params:Object={}
    constructor() {
    }

    everyPageSize(){
        this.params.page_size = this.paginationMessage.pageSize;
        this.loadData.emit(this.params);
    }
    
    ngOnChanges(changes:currentTimestamp){
        if(!this.currentTimestamp) return;
        this.uiPagination.totalPage = this.paginationMessage.totalPages;
        this.uiPagination.currentPage = 1;
        this.uiPagination.init();
        this.gotoPage();
    }

    ngOnInit() {

    }

    ngAfterViewInit(){
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
export class EditModalComponent implements OnInit{
    @Input() dataFields
    @Input() editForm
    @Input() selectSources
    @Output() saveForm = new EventEmitter<any>();
    constructor(){
        
    }

    ngOnInit() {
      
    }

    onSubmit(value){
        this.saveForm.emit(value)
    }
}

var dateRangeSelectorTemplate = "<select class='form-control' id='dateSelect'>{options}</select>";
dateRangeSelectorTemplate += "<input style='width:120px' class='form-control dateRangeBegin txtSetDate' name='begin_date' type='text' disabled='disabled'/>-";
dateRangeSelectorTemplate += "<input style='width:120px' class='form-control dateRangeEnd txtSetDate' name='end_date' type='text' disabled='disabled'/>";
dateRangeSelectorTemplate += "<button type='button' class='btn btn-info' style='display:none;margin-left: 1px'>转到</button>";
@Component({
    selector: 'daterange',
    template:'<span></span>'
})
export class DateRangeComponent implements OnInit{
    @Input() dateRangeConfig
    @Output() dateChangeFunc = new EventEmitter<any>();
    constructor(el:ElementRef){
        this.el = el;
    }

    ngOnInit() {
        var self = this;
        var cfg = {
            template:dateRangeSelectorTemplate,
            minView:2,
            dateRangeName:"今天"
        }
        cfg = Object.assign(cfg,this.config || {});
        var func = function (event, begin, end, dateRangeName) {
            self.dateChangeFunc.emit({beginDate:begin,endDate:end,dateRangeName:dateRangeName},true);
        }
        console.log(this.el)
        var ctl = $(this.el.nativeElement).dateRange(func.bind(this),cfg).get(0);
        this.dateChangeFunc.emit(ctl);
        $('input.txtSetDate').each(function (index, item) {
            $(item).datetimepicker({
                format: "yyyy-mm-dd",
                weekStart: 1,
                todayBtn:  1,
                autoclose: 1,
                todayHighlight: 1,
                startView: 2,
                forceParse: 0,
                showMeridian: 1,
                minView:2,
            });
        });
    }
}
