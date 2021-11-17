import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FanfileService {
  constructor(private http: HttpClient) { }

  getffile(var id) {
  	console.log(id);
    return this.http.get('/getffile'+"?id="+id);
  }

}