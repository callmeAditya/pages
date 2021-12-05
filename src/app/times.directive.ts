import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective { //structural directive
 //
  constructor(
    private templateRef:TemplateRef<any>,  // generic
    private viewcontainerref: ViewContainerRef,
  
  ) { }

  @Input('appTimes') set render(times:number){
    this.viewcontainerref.clear() //clear elements
  for(let i=0;i<times;i++)    {
    this.viewcontainerref.createEmbeddedView(this.templateRef,{  //this object is called context object->ng-container
      index:i       // we can add different properties and use them in ng-container
    })
  }

  }

}
