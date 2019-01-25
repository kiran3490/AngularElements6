import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileComponent } from './shared/profile.component';
import { createCustomElement } from '@angular/elements';
import { MyClientComponentComponent } from './my-client-component/my-client-component.component';
import { WidgetsComponentComponent } from './widgets-component/widgets-component.component';
import { HttpClientModule } from '@angular/common/http';
import { MyClientDataService } from './service/my-client-data.service';
import { WidgetCollectionComponentComponent } from './widget-collection-component/widget-collection-component.component';

const routes: Routes = [
  {
    path: '', component: WidgetsComponentComponent, pathMatch: 'full',
  },
  {
    path: '', outlet: 'wigetCollection', component: WidgetCollectionComponentComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    MyClientComponentComponent,
    WidgetsComponentComponent,
    WidgetCollectionComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MyClientDataService],
  exports: [RouterModule],
  // entryComponents: [ProfileComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  // constructor(private injector: Injector) {
  //   const el = createCustomElement(ProfileComponent, { injector });
  //   customElements.define('ng-custom-profile', el);
  // }
  // ngDoBootstrap() { }
}
