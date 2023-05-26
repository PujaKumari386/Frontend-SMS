import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NewregisterComponent } from './components/newregister/newregister.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path: 'newregister', component: NewregisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
