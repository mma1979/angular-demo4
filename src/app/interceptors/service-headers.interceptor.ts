import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UserStateService } from '../services/user-state.service';

export const serviceHeadersInterceptor: HttpInterceptorFn = (req, next) => {
  debugger;
  let userStateService = inject(UserStateService);
  let token = userStateService.userSubject.value
  req.headers.append('Authorization', `Bearer ${token}`)
  req.headers.append('X-API-TOKEN', "API-TOKEN-VALUE")
 
  return next(req);
};
