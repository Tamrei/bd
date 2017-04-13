import {Injectable} from "@angular/core";

@Injectable()
export class ImageUtilsService {

    constructor() {
    }

    public checkImage(url: string, callback: Function) {
        let image = new Image();

        image.onload = function () {
            callback(null, url)
        };
        image.onerror = function () {
            callback(`No image there at ${url}`, null)
        };

        image.src = url;
    };

}
