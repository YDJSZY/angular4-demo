/**
 * Created by luwenwei on 17/7/23.
 */
import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from "@angular/forms";
import {FieldCheckBoxComponent,PaginationComponent} from './global.component';
@NgModule({
    imports:[CommonModule,FormsModule],
    declarations: [ FieldCheckBoxComponent,PaginationComponent ],
    exports: [ FieldCheckBoxComponent,PaginationComponent,CommonModule,FormsModule ]
})
export class SharedModule {}