import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
/**
 * TODO - remove dup
 */
export class FanfileService {
  constructor(private http: HttpClient) { }

  getffile(){
    return this.http.get('/pullffile?id=61942b7365359cfec97264fa');
  }

  register(payload): Observable<{ jwt: string }> {
    return this.http.post<any>('http://localhost:3000/register', payload);
  }

  login(payload): Observable<{ jwt: string}> {
    return this.http.post<any>('http://localhost:3000/login', payload)
  }

}