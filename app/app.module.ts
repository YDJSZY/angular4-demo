/**
 * Created by Apple on 16/11/16.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { RouterModule,Routes }   from '@angular/router';
import { HttpModule }   from '@angular/http';
import { MyApp }   from './app.myApp';
import { Home }   from './app.home';
import{ LocationStrategy, HashLocationStrategy }from'@angular/common';
import {ActiveTitleService} from "./active-title.service";
import {HighlightDirective,FontsizeDirective} from "./highlight.directive";
const appRoutes: Routes = [
    {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'AppComponent',
        component: AppComponent
    },
    {
        path: 'home',
        component: Home
    }
]
@NgModule({
    providers: [
        //ActiveTitleService // 添加我们刚才的服务
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
    ],
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [ AppComponent,MyApp,Home,HighlightDirective,FontsizeDirective],
    bootstrap:    [MyApp]
})
export class AppModule { }
