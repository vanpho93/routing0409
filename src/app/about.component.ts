import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  template: '<div>About</div>',
})

export class AboutComponent {
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('name'));
    });
  }
}
