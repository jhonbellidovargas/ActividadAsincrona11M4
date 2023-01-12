import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormretoComponent } from './formreto/formreto.component';



@NgModule({
  declarations: [
    FormretoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormretoComponent
  ]
})
export class PrincipalModule { }
