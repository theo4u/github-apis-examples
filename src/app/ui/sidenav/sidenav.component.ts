import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  template: `
    <nav class="sidenav" [clr-nav-level]="2">
            <section class="sidenav-content">
                <a href="..." class="nav-link active">
                    Nav Element 1
                </a>
                <a href="..." class="nav-link">
                    Nav Element 2
                </a>
                <section class="nav-group collapsible">
                    <input id="tabexample1" type="checkbox">
                    <label for="tabexample1">Collapsible Nav Element</label>
                    <ul class="nav-list">
                        <li><a class="nav-link">Link 1</a></li>
                        <li><a class="nav-link">Link 2</a></li>
                    </ul>
                </section>
                <section class="nav-group">
                    <input id="tabexample2" type="checkbox">
                    <label for="tabexample2">Default Nav Element</label>
                    <ul class="nav-list">
                        <li><a class="nav-link">Link 1</a></li>
                        <li><a class="nav-link">Link 2</a></li>
                        <li><a class="nav-link active">Link 3</a></li>
                        <li><a class="nav-link">Link 4</a></li>
                        <li><a class="nav-link">Link 5</a></li>
                        <li><a class="nav-link">Link 6</a></li>
                    </ul>
                </section>
            </section>
    </nav>
  `,
  styles: []
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
