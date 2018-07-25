import { Directive, Input, ElementRef, AfterViewInit, OnInit, Renderer2, AfterContentInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Directive({
  selector: '[appSvg]'
})
export class SvgDirective implements OnInit, AfterContentInit {
  svgMarkup: any;
  constructor(private el: ElementRef, private renderer: Renderer2, public http: HttpClient) { }
  @Input() svgId: any;
  @Input() svgClass = '';

  ngOnInit() {
    console.log('this.renderer: ', this.renderer);
  }

  ngAfterContentInit() {
    this.getSVG(this.svgId);
  }

  getSVG(svg) {
    return this.http.get('/assets/svgs/sports/' + svg + '.svg', { responseType: 'text' })
      .subscribe(data => {
        const parser = new DOMParser();
        const dataIdReplace = data
        .replace(/<svg/g, '<svg class="' + this.svgClass + '"')
        .replace(/[^color="]fill:url\(#/g, '{fill:url(#' + svg + '-')
        .replace(/id="(?!Lay)/g, 'id="' + svg + '-')
        .replace(/cls-/g, svg + '-cls-');
        const doc = parser.parseFromString(dataIdReplace, 'image/svg+xml');
        this.renderer.appendChild(this.el.nativeElement, doc.firstChild);
      });
  }
}

