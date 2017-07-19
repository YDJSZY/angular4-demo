/**
 * Created by luwenwe on 2017/7/12.
 */
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule} from '@angular/common';
import { MainComponent } from './main.component';
import { routing } from './main.routing';

@NgModule({
    imports: [routing,FormsModule,CommonModule],
    declarations: [MainComponent]
})
export class MainModule {}