/**
 * Created by luwenwei on 17/7/23.
 */
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { FieldCheckBoxComponent,PaginationComponent,EditModalComponent,DateRangeComponent } from './global.component';
import { DatepickerDirective,BeautyDirective,InitDirective } from '../directives/directives'
import { NgZorroAntdModule } from 'ng-zorro-antd';
@NgModule({
    schemas:[NO_ERRORS_SCHEMA],
    imports:[CommonModule,FormsModule,ReactiveFormsModule,NgZorroAntdModule],
    declarations: [ DatepickerDirective,BeautyDirective,InitDirective,FieldCheckBoxComponent,PaginationComponent,EditModalComponent,DateRangeComponent ],
    exports: [ DatepickerDirective,BeautyDirective,NgZorroAntdModule,InitDirective,FieldCheckBoxComponent,PaginationComponent,EditModalComponent,DateRangeComponent,CommonModule,FormsModule ]
})
export class SharedModule {}
