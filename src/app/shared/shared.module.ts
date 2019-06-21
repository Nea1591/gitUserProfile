import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTemplateComponent } from '../shared/user-template/user-template.component';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  declarations: [UserTemplateComponent],
  exports: [UserTemplateComponent,
    NgxPaginationModule]
})
export class SharedModule { }
