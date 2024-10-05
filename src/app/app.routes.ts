import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OffersComponent } from './components/offers/offers.component';
import { ViewProductsComponent } from './components/view-products/view-products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuardGuard } from './auth-guard.guard';
import { adminGuardGuard } from './admin-guard.guard';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'offers', component: OffersComponent},
    {path:'products', component: ViewProductsComponent, canActivate: [authGuardGuard]},
    {path:'add-product', component: AddProductComponent, canActivate:[adminGuardGuard]},
    {path:'edit-product/:id', component: EditProductComponent, canActivate:[adminGuardGuard]},
    {path:'login', component: LoginComponent},
    {path:'**', component: LoginComponent}
];
