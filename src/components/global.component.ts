/**
 * Created by luwenwe on 2017/7/12.
 */
<<<<<<< HEAD
import { Component,OnInit,OnChanges,Input,Output,ElementRef,EventEmitter,ViewChild,AfterViewInit,DoCheck} from '@angular/core';
=======
import { Component,OnInit,OnChanges,Input,Output,ElementRef,EventEmitter,ViewChild,AfterViewInit} from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from "@angular/forms";
>>>>>>> aa217375fb006a3f34539fa481b1cbce51fe06e1
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
            var event = e || window.e;
            event.stopPropagation() || event.cancelBubble;
            self.showPanel = false;
            //$(element).find(".selectPanel").hide();
        };
    }
    
    openbindclick(e){
        var event = e || window.e;
        event.stopPropagation() || event.cancelBubble;
        this.showPanel = !this.showPanel;
        
    }

    selectField(e,name){
        var event = e || window.e;
        event.stopPropagation() || event.cancelBubble;
        if(!name) return;
        this.fieldshow[name] = !this.fieldshow[name];
    }
}

@Component({
    selector: 'pagination',
    templateUrl: './pagination.html',
})
<<<<<<< HEAD
export class paginationComponent implements OnInit,AfterViewInit,DoCheck {
=======
export class PaginationComponent implements OnInit,AfterViewInit,OnChanges {
>>>>>>> aa217375fb006a3f34539fa481b1cbce51fe06e1
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
        console.log(this.paginationMessage)
    }
}