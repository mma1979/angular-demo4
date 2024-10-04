import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {

  userSubject = new BehaviorSubject<string>('')
  userToken$ = this.userSubject.asObservable()
  constructor() { }

  login(username: string, password: string){
   if(username === "mma1979" && password === "P@ssw0rd"){
    this.userSubject.next(crypto.randomUUID())
   }
  }

  isAuthinticated(): boolean {
    let token = this.userSubject.value;
    return token.length > 0;
  }
}
