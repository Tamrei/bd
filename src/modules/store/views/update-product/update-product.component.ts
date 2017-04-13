import {Component} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {IProduct} from "../../../../models/product.model";
import {ProductsService} from "../../../../service/product.service";

@Component({
    selector: 'updateProductView',
    templateUrl: 'update-product.template.html'
})
export class UpdateProductView {

    private productId;
    private product : IProduct;

    constructor(private productService: ProductsService,
                private activeRoute: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.productId = this.activeRoute.snapshot.params['id'];
        this.product = this.productService.getProduct(this.productId);
    }

    submit() {
        this.productService.updateProduct(this.product);
        this.router.navigate(['main']);
    }
}