/**
 * Created by luwenwei on 17/7/23.
 */
import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { FieldCheckBoxComponent,PaginationComponent,EditModalComponent,DateRangeComponent } from './global.component';
import { DatepickerDirective,BeautyDirective,InitDirective } from '../directives/directives'
import { MdInputModule,MdSelectModule,MdCheckboxModule,MdDatepickerModule,MdNativeDateModule,MdSlideToggleModule } from '@angular/material';
import { UiSwitchModule } from '../../node_modules/angular2-ui-switch/src';
@NgModule({
    imports:[CommonModule,UiSwitchModule,FormsModule,ReactiveFormsModule,MdInputModule,MdSelectModule,MdCheckboxModule,MdDatepickerModule,MdNativeDateModule,MdSlideToggleModule],
    declarations: [ DatepickerDirective,BeautyDirective,InitDirective,FieldCheckBoxComponent,PaginationComponent,EditModalComponent,DateRangeComponent ],
    exports: [ DatepickerDirective,UiSwitchModule,BeautyDirective,InitDirective,FieldCheckBoxComponent,PaginationComponent,EditModalComponent,DateRangeComponent,CommonModule,FormsModule ]
})
export class SharedModule {}