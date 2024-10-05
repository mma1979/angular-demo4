import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductModel } from '../../models/product-model';
import { TableModule } from 'primeng/table';
import { Router, RouterModule } from '@angular/router';
import { CardStateService } from '../../services/card-state.service';
import { UserStateService } from '../../services/user-state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-products',
  standalone: true,
  imports: [TableModule, RouterModule, CommonModule],
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsComponent implements OnInit {




  products: ProductModel[] = []

  isAuthenticated: boolean=false;
  token: string='';
  isAdmin = false;
  constructor(private service: ProductsService, private router: Router, public cardStateService: CardStateService,
    private userStateService: UserStateService
  ) { 
    this.userStateService.userToken$.subscribe(token=>{
      this.token =token;
      this.isAuthenticated= this.userStateService.isAuthinticated()
    })
  }

  loadData() {
    this.service.getAll()
      .subscribe({
        next: res => {
          this.products = [...res];
        },
        error: err => {
          console.log(err)
          alert(err.error)
        },
        complete: () => { }
      })
  }
  ngOnInit(): void {
    this.loadData()
  }

  gotoEditProduct(productId: number) {
    this.router.navigate(["/edit-product", productId])
  }

  deleteProduct(productId: number) {

    let confirmed = confirm("are you sure?")
    if (confirmed) {
      this.service.deleteProduct(productId)
        .subscribe({
          next: res => this.loadData(),
          error: err => alert('can not delete product')
        })
    }
  }

  addToCard(product: ProductModel) {
      if(this.cardStateService.isExist(product)){
        this.cardStateService.removeProduct(product)
      }else{
        this.cardStateService.addProduct(product)
      }
  }

  doLogin() {
    this.userStateService.login("mma1979", "P@ssw0rd");
    this.userStateService.userSubject.subscribe(token=>{
      this.token = token;
      this.isAdmin = this.userStateService.isAdmin();
    })
   
    }
    
}
