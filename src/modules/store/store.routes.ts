import {Routes} from "@angular/router";
import {MainView} from "./views/main/main.view";
import {CreateProductView} from "./views/create-product/create-product.view";
import {ProductView} from "./views/product/product.view";
import {UpdateProductView} from "./views/update-product/update-product.component";

export const storeRoutes: Routes = [
    // Main redirect
    {path: '', redirectTo: 'main', pathMatch: 'full'},

    {path: 'main', component: MainView},
    {path: 'create-product', component: CreateProductView},
    {path: 'product/:id', component: ProductView},
    {path: 'update-product/:id', component: UpdateProductView}
];
