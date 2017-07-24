/**
 * Created by luwenwe on 2017/7/12.
 */
import { NgModule } from '@angular/core';
import { SharkModule } from '@ntesmail/shark-angular2';
import { FormsModule } from "@angular/forms";
import { CommonModule} from '@angular/common';
import { MainComponent } from './main.component';
import { routing } from './main.routing';
import { SharedModule } from  '../../components/shared.modules';
import { MdInputModule } from '@angular/material';
@NgModule({
    imports: [SharkModule,routing,SharedModule,MdInputModule,FormsModule,CommonModule],
    declarations: [MainComponent]
})
export class MainModule {}