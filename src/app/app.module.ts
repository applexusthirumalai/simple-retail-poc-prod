import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routes, routeModule } from './app.routing';
import { SimpleRetailModule } from 'simple-retail';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SimpleRetailModule.forRoot(routes)
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
