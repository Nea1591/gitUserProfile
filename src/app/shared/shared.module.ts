import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTemplateComponent } from '../shared/user-template/user-template.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserTemplateComponent],
  exports: [UserTemplateComponent]
})
export class SharedModule { }
