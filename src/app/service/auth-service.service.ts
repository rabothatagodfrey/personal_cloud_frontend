import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private __http: HttpClient,) { }

  url = environment.URL;
  headers = new HttpHeaders().set('Content-Type', 'multipart/form-data');

  isUserLoggedIn(){
		let user = JSON.parse(localStorage.getItem('cloud'));
		return user ? user : false;
	}

  //User Registration

  userRegistration(user:any){

    if (!user.email) return "Invalid Email', 'Please provide a valid email address";

    return this.__http.post(`${this.url}/register`, user).subscribe((res: any) => {
        
      console.log(res);
        
    })
  }




}
