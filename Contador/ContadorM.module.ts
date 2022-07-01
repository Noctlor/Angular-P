import {NgModule} from '@angular/core'
import { ContadorComp } from './contador/contador.component';

@NgModule({
    declarations :[
        ContadorComp
    ],
    exports:[
        ContadorComp
    ]
  
})
export class ContadorModule{

}