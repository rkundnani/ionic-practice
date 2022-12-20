import { UserService } from './../user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string;
  password:string;
  id;

  
  
  data;
  constructor(private router : Router , private userservice : UserService) { }
 
  ngOnInit() {
    this.userservice.getUser().subscribe(data=>{
      this.data=data


    })
  }

  onClick(email){
    
    this.router.navigate(['/login/login1',email])
  }
  

  

}
