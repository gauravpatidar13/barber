import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  authUser(user):Observable<any>{
return this.http.post("http://localhost:3000/user",user)
  }
  addUser(user):Observable<any>{
    return this.http.post("http://localhost:3000/users",user);
  }
  getToken(){
    return localStorage.getItem("token");
  }
  dummy(){
    return this.http.get("http://localhost:3000/");
  }
}
