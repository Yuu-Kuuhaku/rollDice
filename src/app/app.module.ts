import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AnimatedDigitComponent } from './animated/animated-digit.component';
import { LoginModule } from './login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterfacePrincipalComponent } from './interface-principal/interface-principal.component';
import { CriarEntrarSalaComponent } from './criar-entrar-sala/criar-entrar-sala.component';
import { SalaComponent } from './sala/sala.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
   declarations: [
      AppComponent,
      InterfacePrincipalComponent,
      CriarEntrarSalaComponent,
      SalaComponent,
      AnimatedDigitComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      LoginModule,
      BrowserAnimationsModule,
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      ReactiveFormsModule,
      MatIconModule,
      MatInputModule,
      MatButtonModule,
      MatCheckboxModule,
      MatGridListModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
