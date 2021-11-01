import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { FanfileService } from '../fanfile.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registration: FormGroup;
  cookieValue: string;

  constructor(private fanFileService: FanfileService,
              private cookieService: CookieService) { 
      this.cookieService.set('Test', 'Hello World');
      this.cookieValue = this.cookieService.get('Test');
  }
  
  ngOnInit(): void {
    this.registration = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      sport: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      confirmPassword: new FormControl("", [Validators.required])
    });
    console.log(this.registration.controls)
  }

  onSubmit() {
    if (this.isFormValid()) {
      const payload = this.registration.value;
      console.log('Test Message', payload)
       this.fanFileService.register(this.registration.value).subscribe(response => {
          if (response.jwt) {
            this.cookieService.set('bearer', response.jwt);
            console.log('Response', response);
          }
       });
    }
  }

  private isFormValid(): boolean {
    const password = this.registration.get('password').value;
    const confirmPassword = this.registration.get('confirmPassword').value;
    return this.registration.valid && password === confirmPassword;
  }
}