import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app";
import {BrowserModule} from "@angular/platform-browser";
import {ROUTES} from "./app.routes";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ProductsService} from "../service/product.service";
import {ProductComponent} from "../components/product.component";
import {MainView} from "../modules/store/views/main/main.view";
import {StoreContainer} from "../modules/store/store.container";
import {CreateProductView} from "../modules/store/views/create-product/create-product.view";
import {ProductView} from "../modules/store/views/product/product.view";
import {ProductDetailedComponent} from "../components/product-detailed.component";
import {ImageUtilsService} from "../utils/image.utils";
import {DelayedInputDirective} from "../directives/delayedInput.directive";
import {ProductFormComponent} from "../components/product-form.component";
import {UpdateProductView} from "../modules/store/views/update-product/update-product.component";
import {StoreTopNavComponent} from "../components/store-top-nav.component";


@NgModule({
    declarations: [
        AppComponent,
        StoreContainer,
        MainView,
        ProductComponent,
        CreateProductView,
        ProductView,
        ProductDetailedComponent,
        ProductFormComponent,
        UpdateProductView,
        StoreTopNavComponent,

        DelayedInputDirective,
    ],
    imports: [
        // Angular modules
        BrowserModule,
        FormsModule,
        RouterModule,

        RouterModule.forRoot(ROUTES),
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        ProductsService,
        ImageUtilsService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {

}