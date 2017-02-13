"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var InfoWindowComponent = (function () {
    function InfoWindowComponent(router) {
        this.router = router;
        this.text = "More Info";
        this.url = "";
        this.randomVideos = [
            "https://www.youtube.com/embed/dQw4w9WgXcQ",
            "https://www.youtube.com/embed/9bZkp7q19f0",
            "https://www.youtube.com/embed/FzRH3iTQPrk",
            "https://www.youtube.com/embed/CMNry4PE93Y",
            "https://www.youtube.com/embed/K1Y6PchDYfw"
        ];
        this.randomLinks = [
            "http://endless.horse/",
            "http://www.zombo.com/",
            "http://www.homestarrunner.com/"
        ];
    }
    InfoWindowComponent.prototype.ngOnChanges = function () {
        this.url = "";
    };
    InfoWindowComponent.prototype.getRandomLink = function () {
        return this.randomLinks[Math.floor(Math.random() * this.randomLinks.length)];
    };
    ;
    InfoWindowComponent.prototype.goToStateInfo = function () {
        window.open("http://kids.nationalgeographic.com/explore/states/" + this.fullName);
    };
    ;
    InfoWindowComponent.prototype.goSomewhereFun = function () {
        //this.router.navigateByUrl(this.getRandomLink());
        window.open(this.getRandomLink());
    };
    ;
    InfoWindowComponent.prototype.showVideo = function () {
        console.log("Showing video!");
        this.url = this.randomVideos[Math.floor(Math.random() * this.randomVideos.length)] + "?autoplay=1";
    };
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], InfoWindowComponent.prototype, "selected", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], InfoWindowComponent.prototype, "fullName", void 0);
    InfoWindowComponent = __decorate([
        core_1.Component({
            selector: 'info-window',
            templateUrl: 'app/info-window.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], InfoWindowComponent);
    return InfoWindowComponent;
}());
exports.InfoWindowComponent = InfoWindowComponent;
//# sourceMappingURL=info-window.component.js.map