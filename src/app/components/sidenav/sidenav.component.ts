import { Component, trigger, state, style, transition, animate, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  menuState = 'out';
  constructor(private router: Router) { }
  @Output() change: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        this.closeMenu();
    });
  }
  /**
   * Toggle menu state between 'in' and 'out'
   */
  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    this.change.emit(this.menuState);
  }
  /**
   * Close the navigation by setting state to 'out'
   */
  closeMenu() {
    this.menuState = 'out';
    this.change.emit(this.menuState);
  }
}
