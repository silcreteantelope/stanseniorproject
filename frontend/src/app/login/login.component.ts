import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { FanfileService } from '../fanfile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  cookieValue: string;

  constructor(private fanFileService: FanfileService,
    private cookieService: CookieService) { 
    this.cookieService.set('Test', 'Hello World');
    this.cookieValue = this.cookieService.get('Test');
}

  ngOnInit(): void {
    this.login = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    });
    console.log(this.login.controls)
  }

  onSubmit() {
    console.log('SUAVE')
    if (this.login.valid) {
      const payload = this.login.value;
      this.fanFileService.login(this.login.value).subscribe(response=> {
        if (response.jwt) {
          this.cookieService.set('bearer', response.jwt);
          console.log('Response', response);
        }
      });
      // httpu call
      console.log('Test Message', payload)
    }
  }
}


