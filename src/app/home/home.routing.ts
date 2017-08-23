/**
 * Created by luwenwe on 2017/7/12.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
    { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);