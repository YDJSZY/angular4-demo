/**
 * Created by luwenwe on 2017/4/27.
 */
import { NgModule} from '@angular/core';
import { SharkModule } from '@ntesmail/shark-angular2';
import { CommonModule} from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HomeComponent } from './home.component';
import { routing } from './home.routing';
import {FieldCheckBoxComponent} from '../../components/fieldCheckBox';
import {BeautyDirective} from '../../directives/directives'
import { MyPipe } from '../../pipes/pipes';
import { HttpModule }    from '@angular/http';
import { AuthInterceptor } from '../../providers/httpInterceptor';
import {HTTP_INTERCEPTORS,HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [SharkModule,ReactiveFormsModule,CommonModule,FormsModule,routing,HttpModule,HttpClientModule],
    declarations: [HomeComponent,BeautyDirective,FieldCheckBoxComponent,MyPipe],
    providers:[ { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
})
export class HomeModule { }
