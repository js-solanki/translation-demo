import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListingComponent } from './listing/listing.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ListingComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    UserRoutingModule
  ]
})
export class UserModule { }
