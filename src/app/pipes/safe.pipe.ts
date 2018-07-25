import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

/**
 * Bypass security and trust the given value to be safe style value
 *
 * __Usage :__
 *   value | safe: 'cleanUrl'
 *
 */
@Pipe({
    name: 'safe'
})

export class SafePipe implements PipeTransform {
    version = '1.0';
    constructor(protected _sanitizer: DomSanitizer) { }

    transform(value: string, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
        if (value !== undefined) {
            switch (type) {
                case 'html':
                    return this._sanitizer.bypassSecurityTrustHtml(value);
                case 'style':
                    return this._sanitizer.bypassSecurityTrustStyle(value);
                case 'script':
                    return this._sanitizer.bypassSecurityTrustScript(value);
                case 'url':
                    return this._sanitizer.bypassSecurityTrustUrl(value);
                case 'resourceUrl':
                    return this._sanitizer.bypassSecurityTrustResourceUrl(value);
                // case 'cleanUrl':
                //     console.log(this.basePath + value.replace(/\\/g, ''));
                //     return this._sanitizer.bypassSecurityTrustResourceUrl(this.basePath + value.replace(/\\/g, ''));
                default:
                    throw new Error(`Unable to bypass security for invalid type: ${type}`);
            }
        }



    }

}
