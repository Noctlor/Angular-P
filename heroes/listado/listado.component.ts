import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
 heroe : string []  = ["LLEWUA","ALLAHU","AKBARK"]
 hb : string = "";

  borrar() {
      this.hb = this.heroe.pop()||"";
      
      
  }

}
