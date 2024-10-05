import { CanActivateFn } from '@angular/router';
import { UserStateService } from './services/user-state.service';
import { inject } from '@angular/core';

export const adminGuardGuard: CanActivateFn = (route, state) => {
  let userStateService = inject(UserStateService)
  
  return userStateService.isAdmin()
};
