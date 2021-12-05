import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective { //attribute directive


  // @Input() backgroundColor=''; // shifted to below

  constructor(private elementRef: ElementRef) { 
//  console.log(this.backgroundColor);
//  setTimeout(()=>{
//     this.elementRef.nativeElement.style.background= this.backgroundColor;
//  },1000)
  }

  //without input aliasing
  // @Input() set backgroundColor(color:string){
  //   this.elementRef.nativeElement.style.background= color;
  // }


  // with input aliasing
  // @Input('appClass') set backgroundColor(color:string){ // we can put 'appClass' in the input decorator
  //   this.elementRef.nativeElement.style.background= color;
  // }

  //replacing NgClass
  @Input('appClass') set classNames(object:any){
    for(let key in object) {
      if(object[key])
      {this.elementRef.nativeElement.classList.add('key')}
      else{
        this.elementRef.nativeElement.classList.remove('key')
      }
    };
  }

}
