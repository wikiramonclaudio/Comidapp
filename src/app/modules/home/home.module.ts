import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { CommonModule } from '@angular/common';

import { registerElement } from 'nativescript-angular/element-registry';
import { CardView } from 'nativescript-cardview';

import {NativeScriptUIListViewModule} from 'nativescript-ui-listview/angular/listview-directives';

registerElement('CardView', () => CardView);

const routes: Routes = [
  { path: "restaurants", component: RestaurantsComponent },  
];

@NgModule({
  declarations: [
    BottomBarComponent,
     RestaurantsComponent,
  ],
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptUIListViewModule,
    NativeScriptRouterModule.forChild(routes),
    CommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }
