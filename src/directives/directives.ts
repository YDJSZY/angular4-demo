/**
 * Created by luwenwe on 2017/7/17.
 */
import {Directive, ElementRef, HostListener, Input, OnInit, OnChanges, SimpleChange} from "@angular/core";
declare var $:any
@Directive({
    selector:'[beauty]'
})
class BeautyDirective{
    @Input() bgc:string;/*它之所以称为输入属性，是因为数据流是从绑定表达式流向指令内部的。 如果没有这个元数据，Angular就会拒绝绑定*/
    constructor(private el:ElementRef){

    }

    ngOnInit() {
        //console.log(this.bgc)
        this.el.nativeElement.style.backgroundColor = this.bgc;
    }

    @HostListener("click") onClick(){/*绑定点击事件*/
        console.log(this)
    }
}

@Directive({
    selector:'[init]',
    exportAs:"andy"
})
class InitDirective{
    @Input() params:any
    @Input() init:any;/*它之所以称为输入属性，是因为数据流是从绑定表达式流向指令内部的。 如果没有这个元数据，Angular就会拒绝绑定*/
    newData:any
    y:string="x"
    constructor(private el:ElementRef){
    }

    ngOnInit() {
        this.newData = this.init(this.params);
        //console.log(this.newData)
    }
}

@Directive({
    selector:'[datepicker]'
})
class DatepickerDirective implements OnInit, OnChanges{
    @Input() dateModel:any
    @Input() dateFormat:any
    @Input() minView:any;/*它之所以称为输入属性，是因为数据流是从绑定表达式流向指令内部的。 如果没有这个元数据，Angular就会拒绝绑定*/
    constructor(private el:ElementRef){
        this.el = el;
    }

    ngOnChanges(changes:{[propName: string]: SimpleChange}) {
        if(!this.dateModel.value) return;
        $(this.el.nativeElement).datetimepicker('update', this.dateModel.value);
    }

    ngOnInit() {
        var format = this.dateFormat;
        var minView = parseInt(this.minView || 2);
        var self = this;
        var datepicker = $(this.el.nativeElement).datetimepicker({
            format: format || "yyyy-mm-dd",
            weekStart: 1,
            todayBtn:  1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            forceParse: 0,
            showMeridian: 1,
            minView:minView,
        });
        datepicker.on("changeDate", function (e) {
            if(self.dateModel){
                if(self.dateModel.setValue){
                    self.dateModel.setValue(e.currentTarget.value)
                }else{
                    self.dateModel = e.currentTarget.value;
                }
            }
        })
    }
}

export { BeautyDirective, InitDirective, DatepickerDirective}
