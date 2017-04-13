import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {IProduct} from "../../../../models/product.model";
import {ProductsService} from "../../../../service/product.service";

@Component({
    selector: 'mainView',
    templateUrl: 'main.template.html'
})
export class MainView {

    private products: Array<IProduct> = [];

    constructor(private productService: ProductsService,
                private router: Router) {
    }

    ngOnInit() {
        this.products = this.productService.getProducts();
    }

    productView(id) {
        this.router.navigate(['product', id]);
    }

    private deleteProduct(id) {
        if (confirm("Are you sure that you want to delete this product ?")) {
            this.productService.deleteProduct(id);
            this.products = this.productService.getProducts();
        }
    }

    private updateProduct(id) {
        this.router.navigate(['update-product', id]);
    }

    private createProductView() {
        this.router.navigate(['create-product'])
    }

}