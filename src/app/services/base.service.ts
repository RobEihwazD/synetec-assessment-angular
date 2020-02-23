import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BaseService {

    private _baseUrl: string = environment.apiBaseUrl;

    constructor(private httpClient: HttpClient) {}

    protected getRequestHeaders(): { headers: HttpHeaders | { [header: string]: string | string[]; } } {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': `application/json, text/plain, */*`,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET'
        });

        return { headers: headers };
    }

    protected getBaseUrl(): string {
        return this._baseUrl;
    }


  get<T>(endpoint: string): Observable<T> {
    return this.httpClient.get<T>(this._baseUrl + endpoint);
  }

  getAll<T>(endpoint: string): Observable<T> {
    return this.httpClient.get<T>(this._baseUrl + endpoint);
  }

  delete<T>(endpoint: string): Observable<T> {
    return this.httpClient.delete<T>(this._baseUrl + endpoint);
  }

}
