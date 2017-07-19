/**
 * Created by luwenwe on 2017/7/12.
 */
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeService {
    constructor(private http:Http){

    }

    getData(){
        return this.http.get("../../data.json")
    }
}