import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreateComponent, ViewComponent]
})
export class SalesOrderModule { }
