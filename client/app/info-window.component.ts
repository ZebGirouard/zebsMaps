import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'info-window',
  templateUrl: 'app/info-window.component.html',
})

export class InfoWindowComponent implements OnChanges { 
	constructor(private router: Router) {}
	@Input() selected:string;
	@Input() fullName:string;
	ngOnChanges() {
		this.url = "";
	}
	text = "More Info"; 
	url = "";
	randomVideos = [
		// "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		// "https://www.youtube.com/watch?v=9bZkp7q19f0",
		"https://www.youtube.com/embed/FzRH3iTQPrk",
		"https://www.youtube.com/embed/CMNry4PE93Y",
		"https://www.youtube.com/embed/K1Y6PchDYfw"
	];
	randomLinks = [
		"http://endless.horse/",
		"http://www.zombo.com/",
		"http://www.homestarrunner.com/"
	];

	getRandomLink(): string {
		return this.randomLinks[Math.floor(Math.random()*this.randomLinks.length)];
	};

	goToStateInfo(): void {
		window.open(`http://kids.nationalgeographic.com/explore/states/${this.fullName}`); 
	};

	goSomewhereFun(): void {
		//this.router.navigateByUrl(this.getRandomLink());
		window.open(this.getRandomLink());
	};

	showVideo(): void {
		console.log("Showing video!");
		this.url = this.randomVideos[Math.floor(Math.random()*this.randomVideos.length)]+"?autoplay=1";
	};

}
