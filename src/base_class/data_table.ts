/**
 * Created by luwenwe on 2017/8/7.
 */
import { ToasterConfig } from 'angular2-toaster';

export class DataTable{
    toasterconfig: ToasterConfig
    constructor(public toasterconfig:ToasterConfig){
        this.toasterconfig = new ToasterConfig({animation: 'fade'});
    }
}