import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable()
export class CommonService {

  constructor(private http:HttpClient) { }
getData() {
  return  this.http.get('https://reqres.in/api/users?page=2');
}
CreateData(data:any){
  return this.http.post('https://reqres.in/api/users', data);
}
}