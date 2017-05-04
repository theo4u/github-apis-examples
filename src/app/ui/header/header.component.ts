import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
     <clr-header> 
        <div class="branding">
              <a href="..." class="nav-link">
                <clr-icon shape="vm-bug"></clr-icon>
                <span class="title">GitHub Api Examples</span>
              </a>
        </div>
        <div class="header-nav" [clr-nav-level]="1"> 
            <a href="javascript://" class="active nav-link nav-text">Dashboard</a>
            <a href="javascript://" class="nav-link nav-text">Interactive Analytics</a>
        </div>
        <form class="search">
          <label for="search_input">
            <input id="search_input" type="text" placeholder="Search for user...">
          </label>
         </form>
        <div class="header-actions">
            <a href="javascript://" class="nav-link nav-icon">
                <clr-icon shape="cog"></clr-icon>
            </a>
        </div> 
    </clr-header>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
