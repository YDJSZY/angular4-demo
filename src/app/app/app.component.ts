import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app',
    templateUrl:'./app.html',
    styles:[]
})
export class AppComponent {
    isCollapsed:boolean = false;
    constructor(){

    }

    openChange(value) {
        this.isOpenThree = !this.isOpenThree;
    }
};