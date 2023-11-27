import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl : string='https://reqres.in/api/users'

  constructor(private httpClient : HttpClient) { }

  //fetch users
  getUsers():Observable<any>{
    return this.httpClient.get<any>('${this.apiUrl}')
  }
  //fetch one user using UUID.
  getUser(id:number):Observable<any>{
    return this.httpClient.get<any>('${this.apiUrl}/?id=${id}')
  }
}
