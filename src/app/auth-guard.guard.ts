import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserStateService } from './services/user-state.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  let userStateService = inject(UserStateService)
  
  return userStateService.isAuthinticated();
};
