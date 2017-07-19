/**
 * Created by luwenwe on 2017/7/19.
 */
import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor} from "@angular/common/http";
import {HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const clonedRequest = req.clone({
            headers: req.headers.set('loading', "loading")
        });
        console.log("new headers", clonedRequest.headers.keys());
        return next.handle(clonedRequest);
    }
}