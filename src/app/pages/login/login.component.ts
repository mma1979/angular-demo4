import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserStateService } from '../../services/user-state.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

form: FormGroup = new FormGroup({
  username: new FormControl(''),
  password: new FormControl('')
})

hasError=false;
constructor(private userStateService: UserStateService, private router: Router){}

doLogin(){
  this.userStateService.login(this.form.controls['username'].getRawValue(), this.form.controls['password'].getRawValue());
  if(this.userStateService.isAuthinticated()){
    this.router.navigate(['/products'])
  }else{
this.hasError = true;
  }
  
}

}
