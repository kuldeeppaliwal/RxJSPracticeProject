import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfOperatorExample1Component } from './of-operator-example1/of-operator-example1.component';
import { OfOperatorExample2Component } from './of-operator-example2/of-operator-example2.component';
import { OfOperatorExample3Component } from './of-operator-example3/of-operator-example3.component';
import { OfOperatorExample4Component } from './of-operator-example4/of-operator-example4.component';
import { OfOperatorExample5Component } from './of-operator-example5/of-operator-example5.component';
import { OfOperatorExample6Component } from './of-operator-example6/of-operator-example6.component';

@NgModule({
  declarations: [
    OfOperatorExample1Component,
    OfOperatorExample2Component,
    OfOperatorExample3Component,
    OfOperatorExample4Component,
    OfOperatorExample5Component,
    OfOperatorExample6Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
    OfOperatorExample1Component,
    OfOperatorExample2Component,
    OfOperatorExample3Component,
    OfOperatorExample4Component,
    OfOperatorExample5Component,
    OfOperatorExample6Component
  ]
})
export class CreationOperatorsModule { }
