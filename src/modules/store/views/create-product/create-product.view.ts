import {Component} from "@angular/core";
import {IProduct} from "../../../../models/product.model";
import {ProductsService} from "../../../../service/product.service";
import {Router} from "@angular/router";

@Component({
    selector: 'createProductView',
    templateUrl: 'create-product.template.html'
})
export class CreateProductView {

    product: IProduct;

    constructor(private productService: ProductsService,
                private router: Router) {
    }
    ngOnInit() {
        this.product = {
            id: (Math.random()*101|0) + '',
            image: "",
            title: "",
            description: "",
            price: 1
        }
    }

    submit() {
        this.productService.addProduct(this.product);
        this.router.navigate(['main']);
    }
}