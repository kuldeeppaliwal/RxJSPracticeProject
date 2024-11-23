import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfOperatorExample1Component } from './of-operator-example1/of-operator-example1.component';
import { OfOperatorExample2Component } from './of-operator-example2/of-operator-example2.component';
import { OfOperatorExample3Component } from './of-operator-example3/of-operator-example3.component';
import { OfOperatorExample4Component } from './of-operator-example4/of-operator-example4.component';
import { OfOperatorExample5Component } from './of-operator-example5/of-operator-example5.component';
import { OfOperatorExample6Component } from './of-operator-example6/of-operator-example6.component';
import { FromOperatorExample1Component } from './from-operator-example1/from-operator-example1.component';
import { FromOperatorExample2Component } from './from-operator-example2/from-operator-example2.component';
import { FromOperatorExample3Component } from './from-operator-example3/from-operator-example3.component';
import { FromOperatorExample4Component } from './from-operator-example4/from-operator-example4.component';
import { FromOperatorExample5Component } from './from-operator-example5/from-operator-example5.component';
import { FromOperatorExample6Component } from './from-operator-example6/from-operator-example6.component';
import { FromOperatorExample7Component } from './from-operator-example7/from-operator-example7.component';
import { FromOperatorExample8Component } from './from-operator-example8/from-operator-example8.component';

@NgModule({
  declarations: [
    OfOperatorExample1Component,
    OfOperatorExample2Component,
    OfOperatorExample3Component,
    OfOperatorExample4Component,
    OfOperatorExample5Component,
    OfOperatorExample6Component,
    FromOperatorExample1Component,
    FromOperatorExample2Component,
    FromOperatorExample3Component,
    FromOperatorExample4Component,
    FromOperatorExample5Component,
    FromOperatorExample6Component,
    FromOperatorExample7Component,
    FromOperatorExample8Component
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
    OfOperatorExample6Component,
    FromOperatorExample1Component,
    FromOperatorExample2Component,
    FromOperatorExample3Component,
    FromOperatorExample4Component,
    FromOperatorExample5Component,
    FromOperatorExample6Component,
    FromOperatorExample7Component,
    FromOperatorExample8Component
  ]
})
export class CreationOperatorsModule { }
