import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user?:User;
  model: any;
  getData: boolean=true;
  username: any;
  password:any;
  role:any;
  isAdmin: boolean=false;
  isMentor: boolean=false;
  isIntern: boolean=false;
  toastr: any;
  constructor(private authservice: AuthService, private router:Router){

  }
  getUserData(){
    this.authservice.getUserData().subscribe(data=>{
      return data;
    })
  }
  postUserData(){
    this.authservice.getUserData().subscribe(data=>{
      return data;
    })
  }
    loginUser() {
      console.log(this.username,this.password);
      // debugger
      // var username = username;
      // var password = password;
    let userJson: any ={
    username:this.username,
    password:this.password
    }
    
this.authservice.postUserData(userJson).subscribe(data=>{
   
  //console.log(data.role);
  
  if (data.role === "admin") {
      this.isAdmin=true;
      console.log("admin:" +this.isAdmin)
       localStorage.setItem('role','admin');
        this.goToPage('dashboard');
  }
  else if (data.role === "mentor") {
    this.isMentor=true;
    console.log("mentor:" +this.isMentor)
    localStorage.setItem('role','mentor');
     this.goToPage('mentordashboard');     
  }
  else if (data.role === "intern") {
    this.isIntern=true;
    console.log("Intern:" +this.isIntern)
    localStorage.setItem('role','intern');
     this.goToPage('interndashboard');
  }
  else {
    this.toastr.error("password Incorrect")
    console.log("password Incorrect")
  }
  // this.authservice.getUserData().subscribe(
  //   (res: any)=>{
  //   this.getData= res;
  
  //   if(this.getData == true)
  //   {
  //     this.router.navigate(["/dashboard"]);
  //   }
  // })
  
},

  
)
}
ngOnInit() {
      this.getUserData();
      this.postUserData();
      // this.loginUser();
    }
    
  // }

  // constructor(private router: Router) { }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }

  // checkPassword(username: string, password: string) {
  //   console.log(username,password);
  //   if (username === 'admin' && password === 'admin') {
  //     localStorage.setItem('role','admin');
  //     this.goToPage('dashboard');

  //   } else if (username === 'mentor' && password === 'mentor') {
  //     localStorage.setItem('role','mentor');
  //     this.goToPage('mentordashboard');
  //   }

  //   else if (username === 'intern' && password === 'intern') {
  //     localStorage.setItem('role','intern');
  //     this.goToPage('interndashboard');
  //   }
  //   else {
  //     console.log('Invalid username or password');
  //   }
  // }

  // showPassword: boolean = false;

  // togglePasswordVisibility() {
  //   this.showPassword = !this.showPassword;
  // }
}