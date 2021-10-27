import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

upenSignUp:boolean=true;
upenlogin:boolean = false;

  constructor(private _auth : AuthServiceService) { }

  loginForm = new FormGroup({
		email: new FormControl(''),
		password: new FormControl('')
	})

  registerForm = new FormGroup({
		name: new FormControl(''),
    lastname: new FormControl(''),
		email: new FormControl(''),
    phone: new FormControl(''),
		password: new FormControl(''),
		confirm_password: new FormControl(''),
	})

  ngOnInit(): void {

  }

  //User Registration
  register(){
		this._auth.userRegistration(this.registerForm.value);
	}

  openClick(){
    this.upenSignUp =! this.upenSignUp;
    this.upenlogin =! this.upenlogin
  }

}
