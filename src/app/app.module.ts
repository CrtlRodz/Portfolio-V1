import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutModule } from './about/about.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [AppComponent, NavComponent, ExperienceComponent, HomeComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
