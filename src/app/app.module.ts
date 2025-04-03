
// Angular imports
// This module is the root module of the Angular application. It imports necessary modules and declares components used in the application.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterlistComponent } from './components/characterlist/characterlist.component';
import { CharacterfilterComponent } from './components/characterfilter/characterfilter.component';
import { CharacterdetailsComponent } from './components/characterdetails/characterdetails.component';

// Material modules
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    CharacterlistComponent,
    CharacterfilterComponent,
    CharacterdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
