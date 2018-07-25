import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-backtotop',
  templateUrl: './backtotop.component.html',
  styleUrls: ['./backtotop.component.scss']
})
export class BacktotopComponent {

  navIsFixed: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.navIsFixed = true;
    } else if (
      this.navIsFixed && window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 10) {
      this.navIsFixed = false;
    }
  } scrollToTop() {
    (function smoothscroll() {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
      }
    })();
  }
}
