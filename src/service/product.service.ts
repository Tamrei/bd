import {Injectable} from "@angular/core";
import {IProduct} from "../models/product.model";

const PRODUCTS_STORAGE_KEY = "products";

@Injectable()
export class ProductsService {

    constructor() {
    }

    public getProducts() : Array<IProduct> {
        if (!localStorage.getItem(PRODUCTS_STORAGE_KEY)) {
            localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(this.getInitialProducts()));
        }

        return JSON.parse(localStorage.getItem(PRODUCTS_STORAGE_KEY));
    }

    public getProduct(id : string) : IProduct {
        let products : Array<IProduct> = this.getProducts();
        let index = this.getIndexById(products, id);
        return products[index];
    }

    public addProduct(product : IProduct) {
        let products : Array<IProduct> = this.getProducts();
        products.push(product);
        localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
    }

    public deleteProduct(id : string) {
        let products : Array<IProduct> = this.getProducts();
        let index = this.getIndexById(products, id);
        products.splice(index, 1);
        localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
    }

    public updateProduct(product : IProduct) {
        let products : Array<IProduct> = this.getProducts();
        let index = this.getIndexById(products, product.id);
        products[index] = product;
        localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
    }

    private getIndexById(products : Array<IProduct>, id : string) : number {
        return products.map((p) => p.id).indexOf(id);
    }

    private getInitialProducts(): Array<IProduct> {
        let products: Array<IProduct> = [
            {
                id: "1",
                image: "https://semantic-ui.com/images/avatar2/large/elyse.png",
                title: "3",
                description: "test",
                price: 77
            }, {
                id: "2",
                image: "https://semantic-ui.com/images/avatar2/large/matthew.png",
                title: "3",
                description: "test",
                price: 77
            }, {
                id: "3",
                image: "https://semantic-ui.com/images/avatar2/large/elyse.png",
                title: "3",
                description: "test",
                price: 77
            }, {
                id: "4",
                image: "https://semantic-ui.com/images/avatar2/large/matthew.png",
                title: "3",
                description: "test",
                price: 77
            }, {
                id: "5",
                image: "https://semantic-ui.com/images/avatar2/large/matthew.png",
                title: "3",
                description: "test",
                price: 77
            }, {
                id: "6",
                image: "https://semantic-ui.com/images/avatar2/large/matthew.png",
                title: "3",
                description: "test",
                price: 77
            }, {
                id: "7",
                image: "https://semantic-ui.com/images/avatar2/large/elyse.png",
                title: "3",
                description: "test",
                price: 77
            }];

        return products;
    }

}
