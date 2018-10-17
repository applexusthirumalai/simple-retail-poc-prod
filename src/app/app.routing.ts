import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent as SalesCreate } from './modules/sales-order/create/create.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ViewComponent as Viewquotation } from './modules/quotation/view/view.component';
import { ViewComponent as SalesView } from './modules/sales-order/view/view.component';
import { QuotationModule } from './modules/quotation/quotation.module';

// Import Containers

export const routes: Routes = [{
  path: 'quotation',
  loadChildren: () => QuotationModule
}];



export const routeModule: ModuleWithProviders = RouterModule.forChild(routes);