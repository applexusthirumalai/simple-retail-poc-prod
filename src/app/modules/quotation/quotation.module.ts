import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { routeModule } from './quote.routing';

@NgModule({
  imports: [
    CommonModule,
    routeModule
  ],
  declarations: [CreateComponent, ViewComponent]
})
export class QuotationModule { }
