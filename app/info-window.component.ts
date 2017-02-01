import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'info-window',
  templateUrl: 'app/info-window.component.html',
})

export class InfoWindowComponent { 
	constructor(private router: Router) {}
	@Input() selected:string;
	@Input() fullName:string;
	text = "More Info"; 
	randomLinks = [
		"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		"http://endless.horse/",
		"http://www.zombo.com/",
		"http://www.homestarrunner.com/"
	];

	getRandomLink(): string {
		return this.randomLinks[Math.floor(Math.random()*4)];
	}
	goToStateInfo(): void {
		window.open(`http://kids.nationalgeographic.com/explore/states/${this.fullName}`); 
	}
	goSomewhereFun(): void {
		//this.router.navigateByUrl(this.getRandomLink());
		window.open(this.getRandomLink());
	}

}
