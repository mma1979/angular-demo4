import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CardStateService } from './services/card-state.service';
import { CommonModule } from '@angular/common';
import { UserStateService } from './services/user-state.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NgbNavModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo4';

  count = 0;
  isAuth = false;
  constructor(private cardStateService: CardStateService, private userStateService: UserStateService){
    this.cardStateService.products$.subscribe(products=>{
      this.count = products.length
    })

    this.userStateService.userToken$.subscribe(token=>{
      this.isAuth = this.userStateService.isAuthinticated()
    })
  }
}
