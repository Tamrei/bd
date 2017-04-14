import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'product',
    template: `     
<div class="ui card" style="margin-bottom: 15px;">
    <a class="image" (click)="click()">
          <a class="ui teal ribbon label"><i class="dollar icon"></i>{{price}}</a>
      <img src="{{image}}">
    </a>
    <div class="content" (click)="click()">
      <div class="header">{{title}}</div>
      <div class="description">
        {{description}}
      </div>
    </div>
    <div class="extra content">
    <button class="tiny ui negative basic button" (click)="delete()">Delete</button>
    <button class="tiny ui primary basic button" (click)="update()">Update</button>
    </div>
</div>
`,
    styles: [`img {
        max-height: 150px;
        min-height: 150px;
    }`]
})
export class ProductComponent {

    @Input() id: string;
    @Input() image : string;
    @Input() title: string;
    @Input() description: string;
    @Input() price: number;

    @Output() deleteCommand: EventEmitter<any> = new EventEmitter();
    @Output() updateEvent: EventEmitter<any> = new EventEmitter();
    @Output() clickEvent: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    delete() {
        this.deleteCommand.emit(this.id);
    }

    click() {
        this.clickEvent.emit(this.id);
    }

    update() {
        this.updateEvent.emit(this.id);
    }
}