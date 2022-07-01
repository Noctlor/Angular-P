import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core'
import { heroecomp } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations :[
        heroecomp,
        ListadoComponent
    ],
    exports:[
        ListadoComponent,
        heroecomp
    ],
    imports:[
        CommonModule
    ]    
})
export class HeroesModule{

}