/**
 * Created by luwenwe on 2017/8/9.
 */
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
    constructor(private http:Http){
    }

    getData(options){
        return this.http.get(options.url,{params:options.params}).toPromise()
    }

    postData(options){
        return this.http.post(options.url,{data:options.data})
    }
}