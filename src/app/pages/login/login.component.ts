import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/service/auth-service.service';
////////////
import Swal from 'sweetalert2'

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
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required])
	})

  registerForm = new FormGroup({
		name: new FormControl(''),
		email: new FormControl(''),
    phone: new FormControl(''),
		password: new FormControl(''),
		confirm_password: new FormControl(''),
	})

  ngOnInit(): void {

  }
  //login
  login(data: FormGroup){
    console.log(data);
    
		this._auth.userLogin(data.value).toPromise().then((res: any) => {
      localStorage.setItem('token', JSON.stringify(res));     
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: res.message,
        showConfirmButton: false,
        timer: 1500
      })
      this.resetForm(this.loginForm);
    }).catch((error:any)=>{
      console.log(error);
      return Swal.fire({
        title: 'Error!',
        text: error.error.message,
        icon: 'error',
        confirmButtonText: 'close'
      })
    })
	}

  //User Registration
  register(){

    if (this.registerForm.value.password !== this.registerForm.value.confirm_password) {
      
    }
		this._auth.userRegistration(this.registerForm.value);

    this.resetForm(this.registerForm);
	}

  resetForm(form: FormGroup){
		form.reset();
	}

  openClick(){
    this.upenSignUp =! this.upenSignUp;
    this.upenlogin =! this.upenlogin
  }

}
