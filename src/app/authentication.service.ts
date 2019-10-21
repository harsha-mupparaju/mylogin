import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../app/login/user';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private http:HttpClient) { }

  loginUser(user:User):any{
    console.log(user);
    let url = "http://localhost:8080/login-service/api/v1/authenticate";
    return this.http.post(url,user,httpOptions);
    // let url = "http://localhost:9090/api/v1/authenticate";
    // return this.http.post(url, user, httpOptions);
    //     let post_url = `http://localhost:8080/user-service/api/v1/user`;
    // return this.http.post(post_url,newUser,httpOptions);
  }
}
