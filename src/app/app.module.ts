import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Routing } from './app.route';
import { PedidoComponent } from './pedido/pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PedidoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    Routing
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
