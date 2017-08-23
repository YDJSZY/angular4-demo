/**
 * Created by luwenwei on 17/7/23.
 */
import { NgModule,NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule} from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { FieldCheckBoxComponent,PaginationComponent,EditModalComponent,DateRangeComponent } from './global.component';
import { DatepickerDirective,BeautyDirective,InitDirective } from '../directives/directives'
import { UiSwitchModule } from '../../node_modules/angular2-ui-switch/src';
import {ToasterModule} from 'angular2-toaster';
import { NgZorroAntdModule } from 'ng-zorro-antd';
@NgModule({
    schemas:[NO_ERRORS_SCHEMA],
    imports:[CommonModule,NgZorroAntdModule,ToasterModule,UiSwitchModule,FormsModule,ReactiveFormsModule],
    declarations: [ DatepickerDirective,BeautyDirective,InitDirective,FieldCheckBoxComponent,PaginationComponent,EditModalComponent,DateRangeComponent ],
    exports: [ ToasterModule,NgZorroAntdModule,DatepickerDirective,UiSwitchModule,BeautyDirective,InitDirective,FieldCheckBoxComponent,PaginationComponent,EditModalComponent,DateRangeComponent,CommonModule,FormsModule ]
})
export class SharedModule {}