import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient ) {  }

  getUser(){
    return this.httpClient.get('http://localhost:3000/users')
  }
   
  deleteUser(id){
    const deleteEndpoint = 'http://localhost:3000/users/' + id;
    return this.httpClient.delete(deleteEndpoint);
  }

   }



