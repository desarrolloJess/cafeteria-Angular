import { Component } from '@angular/core';
import { IMensaje } from '../../modelos/mensaje';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrl: './formulario-contacto.component.css'
})
export class FormularioContactoComponent {

  mensaje : IMensaje = {
    nombre: '',
    apellido: '',
    correo: '',
    asunto: '',
    mensaje: ''
  };

  enviarMensaje(){
    alert("Entra al metodo mensaje");
  }

}
