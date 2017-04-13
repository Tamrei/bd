import {Routes} from "@angular/router";
import {storeRoutes} from "../modules/store/store.routes";
import {StoreContainer} from "../modules/store/store.container";


export const ROUTES:Routes = [
    {path: '', redirectTo: '', pathMatch: 'full'},

    {path: '', component: StoreContainer, children: [
        ...storeRoutes
    ]},

];
