import { Component, trigger, state, style, transition, animate, Output, EventEmitter, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidesettings',
  templateUrl: './sidesettings.component.html',
  styleUrls: ['./sidesettings.component.scss']
})
export class SidesettingsComponent implements OnInit {
  themeColours = [
    {
      'colour': 'green',
      'code': '#439539'
    },
    {
      'colour': 'light-green',
      'code': '#acc540'
    },
    {
      'colour': 'pink',
      'code': '#b3114d'
    },
    {
      'colour': 'gold',
      'code': '#ffc421'
    }
  ];
  menuState = 'out';
  constructor(
    private router: Router,
    private render: Renderer2
  ) { }
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
   * Removes all theme colours in array and sets to current parameter
   * @param colour Colour for theme to be set as
   */
  setColour(colour) {
    for (const colourItem of this.themeColours) {
      this.render.removeClass(document.body, colourItem.colour);
    }
    this.render.addClass(document.body, colour);
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
