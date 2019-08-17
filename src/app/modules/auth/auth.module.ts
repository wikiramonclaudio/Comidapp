import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  // { path: "items", component: ItemsComponent },
  // { path: "item/:id", component: ItemDetailComponent }
];

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forChild(routes)
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AuthModule { }
