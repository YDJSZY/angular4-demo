/**
 * Created by luwenwe on 2017/7/12.
 */
import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { routing } from './main.routing';
//import { SharedModule } from  '../../components/shared.modules';
@NgModule({
    imports: [routing],
    declarations: [MainComponent]
})
export class MainModule {}
