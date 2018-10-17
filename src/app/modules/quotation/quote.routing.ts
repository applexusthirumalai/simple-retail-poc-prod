import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CreateComponent } from './create/create.component';

// Import Containers

export const routes: Routes = [
    {
        path: 'view',
        component: ViewComponent
    },
    {
        path: 'create',
        component: CreateComponent
    }
];

export const routeModule: ModuleWithProviders = RouterModule.forChild(routes);