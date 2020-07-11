import { SalaComponent } from './sala/sala.component';
import { InterfacePrincipalComponent } from './interface-principal/interface-principal.component';
import { CriarEntrarSalaComponent } from './criar-entrar-sala/criar-entrar-sala.component';
import { AnimatedDigitComponent } from './animated/animated-digit.component';
import { LoginModule } from './login/login.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: InterfacePrincipalComponent, children: [
    { path: 'criar-entrar' , component: CriarEntrarSalaComponent},
    { path: 'sala', component: SalaComponent},
  ]}
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
