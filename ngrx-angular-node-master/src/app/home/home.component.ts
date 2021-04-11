import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	homeObj: any;
	services:any;
  	constructor(
	  	private authService: AuthService
	) { }

  	ngOnInit(): void {
	  	this.authService.retrieveBySlug('home', 'home').subscribe((res) => {
	      	if(res && res['data'] && res['data']['_id']){
		        this.homeObj = res['data'];
		        // for(let srcs of res['data']['banner_image_path']){
		        //   this.filesrc.push(`${fileLocation}`)
		        // }
	      	}
	    });

	    this.authService.retrieve('services').subscribe((res) => {
	      	if(res && res['data'] && res['data']){
		        this.services = res['data'];
	      	}
	    });
  	}
}
