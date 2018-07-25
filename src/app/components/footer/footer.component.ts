import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerNavArray: any;
  footerNavListULTemp = [];
  numFullColumns: number;
  navListRowLength: number;
  constructor(public navigation: NavigationService) { }
  ngOnInit() {
    this.footerNavArray = this.navigation.getFooterNav();
    this.divideFooter();
  }
  /**
  * Dividing up footer links to be neatly placed in columns
  */
 divideFooter() {
    this.numFullColumns = 3;
    this.navListRowLength = Math.floor(this.footerNavArray.length / this.numFullColumns);
    this.footerNavListULTemp = Array(Math.ceil(this.footerNavArray.length / this.navListRowLength));
  }

}
