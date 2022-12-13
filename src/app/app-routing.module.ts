import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
{
  path: '',
  component:ProductListComponent
},
{
  path:'login', 
  component:LoginComponent
},
{
  path:'signup',
  component:SignupComponent
},
{
  path: 'products',
  component:ProductListComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
