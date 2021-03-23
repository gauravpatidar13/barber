import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(data){
this.auth.addUser(data).subscribe(res=>{

  console.log(res);
  localStorage.setItem("token",res.token)
  
})
  }
}
