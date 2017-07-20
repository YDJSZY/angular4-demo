/**
 * Created by luwenwe on 2017/7/12.
 */
import { Component,OnInit,Input } from '@angular/core';

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
export class paginationComponent implements OnInit {
    constructor() {

    }

    ngOnInit() {

    }
}