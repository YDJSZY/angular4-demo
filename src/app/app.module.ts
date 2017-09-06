import { ENV_PROVIDERS } from './environment';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { SharkModule } from '@ntesmail/shark-angular2';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { ApplicationRef } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpModule } from '@angular/http';
//import { HttpClientModule } from "@angular/common/http";
import { GlobalService } from '../service/globalService';
//import 'hammerjs';
// 定义常量 路由
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren:'./home/home.module#HomeModule'
  },
  {
    path: 'main',
    loadChildren: './main/main.module#MainModule'
  }
];

@NgModule({
  imports: [BrowserModule,BrowserAnimationsModule,SharkModule,HttpModule,FormsModule,NgZorroAntdModule.forRoot(),RouterModule.forRoot(appRoutes, { useHash: true })],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers:[GlobalService,ENV_PROVIDERS]
})
export class AppModule {
  constructor() { }
}
