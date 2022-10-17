import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { ProductCreateComponent } from './admin/product-create/product-create.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { AboutComponent } from './components/about/about.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'details/:id', component: DetailProductComponent },
  { path: 'admin/edit/:id', component: ProductEditComponent },
  { path: 'admin/product-create', component: ProductCreateComponent },
  { path: 'admin', component: HomeAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
