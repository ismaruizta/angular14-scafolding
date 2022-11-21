import { NgModule } from '@angular/core';
import { DIRECTIVES } from "../mova3-components";

@NgModule({
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES]
})
export class SharedModule {  }