/**
 * Created by Apple on 16/11/23.
 */
import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector: '[highlight]'
})

class HighlightDirective {
    constructor(renderer: Renderer, el: ElementRef) {
        renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'red');
    }
}

@Directive({
    selector: '[fontsize]'
})

class FontsizeDirective {
    constructor(renderer: Renderer, el: ElementRef) {
        renderer.setElementStyle(el.nativeElement, 'fontSize', '24px');
    }
}

export {
    HighlightDirective,
    FontsizeDirective
}