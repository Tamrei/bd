import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {IProduct} from "../../../../models/product.model";
import {ProductsService} from "../../../../service/product.service";

@Component({
    selector: 'productView',
    templateUrl: 'product.template.html'
})
export class ProductView {

    private productId;
    private product : IProduct;

    constructor(private productService: ProductsService,
                private activeRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.productId = this.activeRoute.snapshot.params['id'];
        this.product = this.productService.getProduct(this.productId);
    }
}