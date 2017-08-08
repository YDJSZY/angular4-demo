/**
 * Created by luwenwei on 17/7/23.
 */
import { NgModule,NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule} from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { FieldCheckBoxComponent,PaginationComponent,EditModalComponent,DateRangeComponent } from './global.component';
import { DatepickerDirective,BeautyDirective,InitDirective } from '../directives/directives'
import { MdInputModule,MdSelectModule,MdCheckboxModule,MdDatepickerModule,MdNativeDateModule,MdSlideToggleModule } from '@angular/material';
import { UiSwitchModule } from '../../node_modules/angular2-ui-switch/src';
import { SelectModule } from 'ng2-select';
import {ToasterModule, ToasterService} from 'angular2-toaster';
@NgModule({
    schemas:[NO_ERRORS_SCHEMA],
    imports:[CommonModule,ToasterModule,UiSwitchModule,SelectModule,FormsModule,ReactiveFormsModule,MdInputModule,MdSelectModule,MdCheckboxModule,MdDatepickerModule,MdNativeDateModule,MdSlideToggleModule],
    declarations: [ DatepickerDirective,BeautyDirective,InitDirective,FieldCheckBoxComponent,PaginationComponent,EditModalComponent,DateRangeComponent ],
    exports: [ ToasterModule,DatepickerDirective,UiSwitchModule,SelectModule,BeautyDirective,InitDirective,FieldCheckBoxComponent,PaginationComponent,EditModalComponent,DateRangeComponent,CommonModule,FormsModule ]
    //providers:[ToasterService]
})
export class SharedModule {}