import { Component } from '@angular/core';
@Component({
    selector: 'main',
    templateUrl: './main.component.html',
    //styleUrls: ['./main.component.scss']
})
export class MainComponent {
    title:String
    data:Array<any>
    constructor(){
        this.title = "main";
        this.data = [1,2,3]
    }
};
