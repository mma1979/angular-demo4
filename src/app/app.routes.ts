import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OffersComponent } from './components/offers/offers.component';
import { ViewProductsComponent } from './components/view-products/view-products.component';
import { AddProductComponent } from './components/add-product/add-product.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'offers', component: OffersComponent},
    {path:'products', component: ViewProductsComponent},
    {path:'add-product', component: AddProductComponent},
    {path:'**', component: HomeComponent}
];
