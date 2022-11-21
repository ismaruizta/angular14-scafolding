import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateHomeComponent } from './pages/private/home/home.component';
import { PublicHomeComponent } from './pages/public/home/home.component';

const routes: Routes = [
  { path: "home", component: PrivateHomeComponent },
  { path: "", component: PublicHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
