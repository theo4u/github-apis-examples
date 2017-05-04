import { ClarityModule } from 'clarity-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './main/main.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule
  ],
  declarations: [LayoutComponent, MainComponent, SidenavComponent, HeaderComponent],
  exports:[LayoutComponent]
})
export class UiModule { }
