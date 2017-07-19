import { enableProdMode } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { SharkModule } from '@ntesmail/shark-angular2';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { ApplicationRef } from '@angular/core';
//import {FieldCheckBoxComponent} from '../directives/fieldCheckBox';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

// 定义常量 路由
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren:'../home/home.module#HomeModule'
    },
    { path: 'main', loadChildren: '../main/main.module#MainModule' }
    , {
        path: 'detail',
        loadChildren: '../detail/detail.module#DetailModule'
    }
];

@NgModule({
    imports: [BrowserModule, SharkModule,FormsModule, RouterModule.forRoot(appRoutes, { useHash: true })],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(public appRef: ApplicationRef) { }
    hmrOnInit(store: any) {
    }
    hmrOnDestroy(store: any) {
        let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement)
        store.disposeOldHosts = createNewHosts(cmpLocation)
        removeNgStyles()
    }
    hmrAfterDestroy(store: any) {
        store.disposeOldHosts()
        delete store.disposeOldHosts
    }
}