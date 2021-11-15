import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {
  constructor(private http: HttpClient) { }

  getffile() {
    return this.http.get('/pullffile?id=6140b39f76123f6d29873e96');
  }

}