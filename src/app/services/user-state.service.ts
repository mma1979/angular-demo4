import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {


  userSubject = new BehaviorSubject<string>('')
  userToken$ = this.userSubject.asObservable()
  constructor(private authService: AuthService) { }

  login(username: string, password: string){
   this.userSubject.next(this.authService.login(username, password))
  }

  isAuthinticated(): boolean {
    let token = this.userSubject.value;
    return token.length > 0;
  }

  isAdmin(): boolean{
    let tokenData: any = jwtDecode(this.userSubject.value)

    return tokenData['roles'] == "admin"
  }
}
