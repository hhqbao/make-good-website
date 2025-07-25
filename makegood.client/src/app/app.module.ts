import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { ServicesCardComponent } from './components/services-card/services-card.component';
import { ServicesBannerComponent } from './components/services-banner/services-banner.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SloganPanelComponent } from './components/slogan-panel/slogan-panel.component';
import { FooterComponent } from './components/footer/footer.component';
import { MouldSectionComponent } from './components/mould-section/mould-section.component';
import { MakeGoodComponent } from './components/make-good/make-good.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainBannerComponent,
    ServicesCardComponent,
    ServicesBannerComponent,
    TopNavComponent,
    SloganPanelComponent,
    MouldSectionComponent,
    FooterComponent,
    ContactSectionComponent,
    MakeGoodComponent,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}
