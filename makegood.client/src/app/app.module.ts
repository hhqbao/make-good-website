import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { MakeGoodComponent } from './components/make-good/make-good.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    TopNavComponent,

    FooterComponent,
    ContactSectionComponent,
    MakeGoodComponent,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}
