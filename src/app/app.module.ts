import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './shared/profile.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [ProfileComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(ProfileComponent, { injector });
    customElements.define('ng-custom-profile', el);
  }
  ngDoBootstrap() { }
}
