import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadosComponent } from './componentes/listados/listados.component';
import { FormProfesoresComponent } from './componentes/form-profesores/form-profesores.component';
import { HttpClientModule } from '@angular/common/http';
import { PAjaxService } from './servicios/p-ajax.service';

@NgModule({
  declarations: [
    AppComponent,
    ListadosComponent,
    FormProfesoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PAjaxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
