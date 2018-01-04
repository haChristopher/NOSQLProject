import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Channel } from '../models/channel'


@Injectable()
export class RestService {

    constructor(private http: Http) { }

    public getChannels() {
        return this.get("/api/channels");
    }

    private get(path: string): Observable<any> {
        path = "http://localhost:3000" + path;
        return this.http.get(path)
            .map(response => response.json().data)
            .catch(this.handleError);
    }

    private post(path: string, data: any): Observable<any> {
        return this.http.post(path, data).map(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}