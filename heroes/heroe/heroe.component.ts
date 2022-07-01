import { Component } from "@angular/core";

@Component({
    selector:"app-heroe",
    templateUrl:"heroe.component.html"
})
export class heroecomp{
    nombre:string ="chiko";
    edad:number = 15;
    get NC(){
        return this.nombre.toUpperCase();
    }
    obtener():string{
        return`${this.nombre} - ${this.edad}`
    }
    cambiar():void{
        this.nombre =  "Mele"
    }
    Came():void     {
        this.edad = 32
    }
}