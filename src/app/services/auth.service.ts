import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(username: string, password: string){
   
    // return this.http.post<string>(`${environment.ApiBaseUrl}/api/Account/Login`, {userName: username, password: password});
    if(username === "mma1979"){
      return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJyb2xlcyI6ImFkbWluIn0.28U88cDcCtnWUP_m7NtLWKELJZhuu35CnaTNV2fav80'
    }

    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJyb2xlcyI6ImNsaWVudCJ9.-a5OJWClY1u4OjoVouRKfdbZiCCN1TawRe1f4DGgxvA'
  }
}
