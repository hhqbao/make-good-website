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
import { MouldSectionComponent } from './components/mould-section/mould-section.component';

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
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}
