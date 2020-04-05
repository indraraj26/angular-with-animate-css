import { Component, ElementRef, ViewChild, Renderer2, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  { 
  name = 'Angular';  
  @ViewChildren('lol') lol:QueryList<ElementRef>;
  constructor(private _renderer2: Renderer2) {}

  ngAfterViewInit(): void { 
     const items = this.lol.toArray(); 
    for(let i=0; i < items.length; i++) {
      this._renderer2.setStyle(items[i].nativeElement, 'animation-delay', i.toString()+ 's')
      this._renderer2.addClass(items[i].nativeElement, 'bounceInUp')
    } 
  } 
   
  onClick() {  
    const items = this.lol.toArray(); 
    for(let i=0; i < items.length; i++) {
      this._renderer2.setStyle(items[i].nativeElement, 'animation-delay', i.toString()+ 's')
      this._renderer2.addClass(items[i].nativeElement, 'wobble')
    } 
  }

  onPara(lol: HTMLParagraphElement) {
      // this._renderer2.addClass(lol, 'wobble'
      lol.style.animationDelay = '0s' 
      lol.className = 'bounceOutRight animated slow';
      lol.style.opacity = '0.2'
      lol.addEventListener('animationend', function() { 
      this.remove();
     })

      // setTimeout(() => {
      // lol.remove();    
      // }, 100)
  }
}
 