import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { GridComponent } from './components/grid/grid.component';
import { TypographyComponent } from './components/typography/typography.component';
import { MainComponent } from './components/main/main.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab.component';
import { FormsComponent } from './components/forms/forms.component';
import { ModalsComponent } from './components/modals/modals.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BacktotopComponent } from './components/backtotop/backtotop.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { SidesettingsComponent } from './components/sidesettings/sidesettings.component';
import { HomeComponent } from './components/home/home.component';

// Services
import { ModalService } from './services/modal.service';
import { NavigationService } from './services/navigation.service';
import { PlaygroundComponent } from './components/playground/playground.component';
import { UtilitiesComponent } from './components/utilities/utilities.component';
import { ToplivegamesComponent } from './components/toplivegames/toplivegames.component';
import { HeaderloginregComponent } from './components/headerloginreg/headerloginreg.component';
import { SvgDirective } from './directives/svg.directive';
import { SafePipe } from './pipes/safe.pipe';
import { ImagesComponent } from './components/images/images.component';
import { ThemeComponent } from './components/theme/theme.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    GridComponent,
    TypographyComponent,
    MainComponent,
    TabsComponent,
    TabComponent,
    FormsComponent,
    ModalsComponent,
    SidenavComponent,
    BacktotopComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SidesettingsComponent,
    HomeComponent,
    PlaygroundComponent,
    UtilitiesComponent,
    ToplivegamesComponent,
    HeaderloginregComponent,
    SvgDirective,
    SafePipe,
    ImagesComponent,
    ThemeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ModalService,
    NavigationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
