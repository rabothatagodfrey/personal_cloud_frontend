import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

 

  constructor(private __http: HttpClient,private message:ToastrService) { }

  url = environment.URL;
  headers = new HttpHeaders().set('Content-Type', 'multipart/form-data');

  isUserLoggedIn(){
		let user = JSON.parse(localStorage.getItem('cloud'));
		return user ? user : false;
	}

  //User Registration

  userRegistration(user:any){

    if (!user.email) return "Invalid Email', 'Please provide a valid email address";

    return this.__http.post(`${this.url}/auth/register`, user).subscribe((res: any) => {
      
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.message,
          showConfirmButton: false,
          timer: 1500
        })
      
      
    }, (err:any)=>{

      Swal.fire({
        title: 'Error!',
        text: err.error.message,
        icon: 'error',
        confirmButtonText: 'close'
      })
    })
  }
  

  // user login 

  userLogin(userCreditions:any){
     return this.__http.post( `${this.url}/auth/login`, userCreditions);
  }



}
