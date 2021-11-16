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
    return this.http.get('/pullffile?id=61677bf53dc70fb28691066c');
  }

}