/**
 * Created by luwenwe on 2017/8/9.
 */
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()//标识一个类可以被注入器实例化
export class HttpService {
    constructor(private http:Http){
    }

    getData(options:any){
        return this.http.get(options.url,{params:options.params}).toPromise()
    }

    postData(options:any){
        return this.http.post(options.url,{data:options.data}).toPromise()
    }
}