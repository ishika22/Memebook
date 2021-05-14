import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
// import { IconsModule } from 'angular-bootstrap-md';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatIconModule,} from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // IconsModule,
    BrowserAnimationsModule,
   // MDBBootstrapModule.forRoot(),
    FormsModule,
    Ng2SearchPipeModule,
    MatIconModule,MatMenuModule,MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
