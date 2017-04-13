import {Component, Input, Output, EventEmitter} from "@angular/core";
import {IProduct} from "../models/product.model";
import {ImageUtilsService} from "../utils/image.utils";

@Component({
    selector: 'product-form',
    template: `     
            <form class="ui large form" #productForm="ngForm" [ngClass]="{'loading': loading}" (ngSubmit)="submit()">
            <div class="two fields">
                <div class="field">
                    <label>Title</label>
                    <input type="text" name="title" placeholder="Title"
                           [(ngModel)]="product.title"
                           #title="ngModel" required minlength="2">
                    <div *ngIf="!title.valid && !title.pristine" class="ui pointing red basic label">
                        Please enter a value
                    </div>
                </div>
                  <div class="field">
                    <label>Price</label>
                    <input type="number" name="price" placeholder="Price"
                           [(ngModel)]="product.price"
                           #price="ngModel" required>
                    <div *ngIf="!price.valid && !price.pristine" class="ui pointing red basic label">
                        Please enter a value
                    </div>
                </div>
                </div>
                <div class="ui divider"></div>

                <div class="field">
                    <label>Description</label>
                    <textarea name="description" placeholder="Description"
                              [(ngModel)]="product.description"
                              #description="ngModel" required minlength="2"></textarea>
                    <div *ngIf="!description.valid && !description.pristine" class="ui pointing red basic label">
                        Please enter a value
                    </div>
                </div>
                <div class="ui divider"></div>

                <div class="field">
                    <label>Image url</label>
                    <div class="ui icon input loading" [ngClass]="{'loading': isImageLoading}">
                        <input type="text" name="image" placeholder="Image url"
                               [(ngModel)]="product.image" delayed (delayedInput)="imageValidation()"
                               #image="ngModel" required>
                        <i class="icon"></i>
                    </div>
                    <div *ngIf="!image.valid && !image.pristine" class="ui pointing red basic label">
                        Please enter a value
                    </div>

                    <div *ngIf="!isImageValid && !image.pristine" class="ui pointing red basic label">
                        Image is invalid
                    </div>
                </div>
                <div class="ui divider"></div>

                <button type="submit" class="ui button"
                        [disabled]="!productForm.valid || !isImageValid">
                    Submit product
                </button>
            </form>
`,
})
export class ProductFormComponent {

    @Input() product: IProduct;

    @Output() submitEvent: EventEmitter<any> = new EventEmitter();

    private isImageLoading: boolean = false;
    private isImageValid: boolean = false;

    constructor(private imageUtils: ImageUtilsService) {
    }

    ngOnInit() {
        this.imageValidation();
    }

    imageValidation() {
        this.imageUtils.checkImage(this.product.image, (error, url) => {
            this.isImageLoading = false;

            if (error) {
                this.isImageValid = false;
                return;
            }

            this.product.image = url;
            this.isImageValid = true;
        });
    }

    submit() {
        this.submitEvent.emit(this.product);
    }
}