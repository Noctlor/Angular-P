import { Component } from '@angular/core';

@Component({
    selector:"app-contador",
    template:`

        <h3>la base es: <strong>{{based}}</strong></h3>
        <button (click)="acu(+based)">+{{based}}</button>
        <span>{{N}}</span>
        <button (click)="acu(-based)">{{-based}}</button>


    `
})
export class ContadorComp{
    title = 'bases';
    N : number = 0;
    based : number = 1;
    acu(valor:number){
      this.N +=valor;
    }   
}