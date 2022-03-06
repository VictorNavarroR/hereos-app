import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroService } from 'src/app/shared/hero.service';
import { HeroComponent } from './hero/hero.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { UpperCaseTextDirective } from 'src/app/shared/directives/upper-case-text.directive';


@NgModule({
  declarations: [
    HeroComponent,
    DialogComponent,
    FormComponent,
    ModalComponent,
    UpperCaseTextDirective
  ],
  providers: [HeroService],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  exports: [
    HeroComponent,
    FormComponent
  ]
})
export class SharedModule { }
