/**
 * Created by luwenwe on 2017/4/27.
 */
import { NgModule} from '@angular/core';
import { SharkModule } from '@ntesmail/shark-angular2';
import { CommonModule} from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HomeComponent } from './home.component';
import { routing } from './home.routing';
import { BeautyDirective,InitDirective } from '../../directives/directives'
import { MyPipe,SafeHtmlPipe } from '../../pipes/pipes';
import { HttpModule }    from '@angular/http';
import { AuthInterceptor } from '../../providers/httpInterceptor';
import { HTTP_INTERCEPTORS,HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from  '../../components/shared.modules';
import { MdInputModule,MdSelectModule  } from '@angular/material';
@NgModule({
    imports: [SharkModule,SharedModule,MdInputModule,MdSelectModule,ReactiveFormsModule,CommonModule,FormsModule,routing,HttpModule,HttpClientModule],
    declarations: [HomeComponent,BeautyDirective,InitDirective,MyPipe,SafeHtmlPipe],
    providers:[ { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
})
export class HomeModule { }
