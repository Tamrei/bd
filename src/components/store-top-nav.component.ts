import {Component} from "@angular/core";

@Component({
    selector: 'store-top-nav',
    template: `     
<div class="ui inverted segment" style="margin-bottom: 15px;">
    <div class="container">
        <div class="ui inverted secondary menu">
            <a class="item" [routerLink]="['/main']" [routerLinkActive]="['active']">
                Products
            </a>
            <a class="item" [routerLink]="['/create-product']" [routerLinkActive]="['active']">
                Create product
            </a>
        </div>
    </div>
</div>
`,
})
export class StoreTopNavComponent {
    constructor() {
    }
}