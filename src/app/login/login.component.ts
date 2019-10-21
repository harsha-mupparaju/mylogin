import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators, FormsModule} from '@angular/forms';
import {AuthenticationService} from '../authentication.service';
import {User} from '../login/user';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // loginForm:FormGroup;
  // submitted=false;


  constructor(private authenticationService:AuthenticationService, private route:Router) { }
  ngOnInit() {
    // this.loginForm=this.formbuilder.group({
    //   username:['',Validators.required],
    //   password:['',Validators.required]
    // });
  }
  //  get f(){return this.loginForm.controls;}
    
  loginUser(user){
    console.log(user);
    this.authenticationService.loginUser(user).subscribe(data=>{
      console.log(data);
      this.route.navigateByUrl('/user-dashboard');
    },error=>{
      this.route.navigateByUrl('');

    });
  }
} 

    
  

