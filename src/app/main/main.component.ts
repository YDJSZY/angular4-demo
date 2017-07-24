import { Component,Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
@Component({
    selector: 'main',
    templateUrl: './main.component.html',
    //styleUrls: ['./main.component.scss']
})
export class MainComponent {
    title:String
    data:Array<any>
    paginationMessage:Object
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.pattern(EMAIL_REGEX)]);

    constructor(){
        this.title = "main";
        this.data = [1,2,3];
        this.paginationMessage = {totalRecords:2,totalPages:10,currentPage:1,pageSize:200,currentTimestamp:null}
    }

    loadData(params){
        console.log(params)
    }
};
