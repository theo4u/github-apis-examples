import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <clr-main-container>
      <clr-alert [clrAlertType]="'alert-info'" [clrAlertClosable]="true" [clrAlertAppLevel]="true">
        <div class="alert-item">
            <span class="alert-text">
                This alert indicates success.
            </span>
        </div>
      </clr-alert>
      <app-header></app-header> 
      <div class="content-container">
          <app-sidenav></app-sidenav>
          <main class="content-area">
            <app-main></app-main>
          </main>
      </div>
    </clr-main-container>
  `,
  styles: []
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
