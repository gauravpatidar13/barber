import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private auth:AuthService) { }

  ngOnInit(): void {
  }
  openHomepage(){
    alert("homepage")
this.router.navigate([""]);
  }
  onSubmit(data){
console.log(data)
this.auth.authUser(data).subscribe(res=>{
  localStorage.setItem("token",res.token);
  console.log(res)
})
  }
}
