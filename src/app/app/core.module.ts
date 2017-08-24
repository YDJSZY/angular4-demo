/**
 * Created by luwenwe on 2017/8/24.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }      from '@angular/common';
import { GlobalService }       from '../../service/globalService';

@NgModule({
    imports:      [ CommonModule ],
    providers:    [ GlobalService ]
})
export class CoreModule {
}