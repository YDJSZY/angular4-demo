/**
 * Created by luwenwe on 2017/7/17.
 */
import {Directive, ElementRef, HostListener, Input, OnInit} from "@angular/core";
@Directive({
    selector:'[beauty]'
})
class BeautyDirective{
    @Input() bgc:string;/*它之所以称为输入属性，是因为数据流是从绑定表达式流向指令内部的。 如果没有这个元数据，Angular就会拒绝绑定*/
    constructor(private el:ElementRef){

    }

    ngOnInit() {
        console.log(this.bgc)
        this.el.nativeElement.style.backgroundColor = this.bgc;
    }

    @HostListener("click") onClick(){/*绑定点击事件*/
        console.log(this)
    }
}

export {BeautyDirective}
