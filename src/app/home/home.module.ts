/**
 * Created by luwenwe on 2017/4/27.
 */
import { NgModule} from '@angular/core';
import { SharkModule } from '@ntesmail/shark-angular2';
import { CommonModule} from '@angular/common';
import { HomeComponent } from './home.component';
import { routing } from './home.routing';
import { MyPipe,SafeHtmlPipe } from '../../pipes/pipes';
import { HttpModule }    from '@angular/http';
import { AuthInterceptor } from '../../providers/httpInterceptor';
import { HTTP_INTERCEPTORS,HttpClientModule } from "@angular/common/http";
import { SharedModule } from  '../../components/shared.modules';
import { DpDatePickerModule } from 'ng2-date-picker';
@NgModule({
    imports: [SharkModule,DpDatePickerModule,SharedModule,CommonModule,routing,HttpModule,HttpClientModule],
    declarations: [HomeComponent,MyPipe,SafeHtmlPipe],
    providers:[ { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
})
export class HomeModule { }
