import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, NgForm } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
//import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { SkeletonModule } from 'primeng/skeleton';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { PanelModule } from 'primeng/panel';
import { FuncionariosPesquisaComponent } from './funcionarios-pesquisa/funcionarios-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DepartamentosPesquisaComponent } from './departamentos-pesquisa/departamentos-pesquisa.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    FuncionariosPesquisaComponent,
    NavbarComponent,
    DepartamentosPesquisaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, TabViewModule, AvatarModule, AvatarGroupModule,
    BadgeModule, SkeletonModule, InputTextModule, ButtonModule,
    TableModule , TooltipModule, PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
