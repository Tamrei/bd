import {Component, Input} from "@angular/core";

@Component({
    selector: 'product-detailed',
    template: `     
<div class="ui centered card">
  <div class="image">
    <img src="{{image}}">
  </div>
  <div class="content">
    <a class="header">{{title}}</a>
    <div class="meta">
      <span class="date"></span>
    </div>
    <div class="description">
      {{description}}
    </div>
  </div>
  <div class="extra content">
    <a>
      <i class="dollar icon"></i>
      {{price}}
    </a>
  </div>
</div>
`,
})
export class ProductDetailedComponent {

    @Input() id: string;
    @Input() image: string;
    @Input() title: string;
    @Input() description: string;
    @Input() price: number;

    constructor() {
    }

    ngOnInit() {
        if (!this.image) this.image = "https://fakeimg.pl/200x200/?text=Empty";
    }
}