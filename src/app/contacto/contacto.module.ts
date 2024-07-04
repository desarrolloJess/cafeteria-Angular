import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormularioContactoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    FormularioContactoComponent
  ]
})
export class ContactoModule { }
