/**
 * Created by luwenwei on 17/7/23.
 */
import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {FieldCheckBoxComponent,PaginationComponent,EditModalComponent} from './global.component';
import { MdInputModule,MdSelectModule,MdCheckboxModule,MdDatepickerModule,MdNativeDateModule,MdSlideToggleModule } from '@angular/material';
@NgModule({
    imports:[CommonModule,FormsModule,ReactiveFormsModule,MdInputModule,MdSelectModule,MdCheckboxModule,MdDatepickerModule,MdNativeDateModule,MdSlideToggleModule],
    declarations: [ FieldCheckBoxComponent,PaginationComponent,EditModalComponent ],
    exports: [ FieldCheckBoxComponent,PaginationComponent,EditModalComponent,CommonModule,FormsModule ]
})
export class SharedModule {}