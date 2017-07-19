/**
 * Created by Apple on 16/11/23.
 */
import {Injectable} from '@angular/core';
import {Http,URLSearchParams,RequestOptions,Response,Headers, Request, RequestMethod} from '@angular/http';
@Injectable()
export class ActiveTitleService {
    title:string
    constructor(private http:Http){
        this.title = "indexPage";
    }
    getTitle() {
        //this.title = Math.random().toFixed(2) + 'title';
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }
    getData() {
        let params = new URLSearchParams();
        params.append("loading","true");
        params.append("name","lll");
        let headers = new Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers,loading:true });
        return this.http.get('../data.json',{search:params}).toPromise();
    }
}
