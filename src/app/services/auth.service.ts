import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http : HttpClient) { }


signUp(userObj:any){

  return this.http.post<any>(`${this.baseApiUrl}api/User/register`,userObj);

}

login(userObj:any){
  return this.http.post<any>(`${this.baseApiUrl}api/User/authenticate`,userObj);
}

}
