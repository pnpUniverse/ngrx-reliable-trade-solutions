import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent implements OnInit {
	memberships:any;
  	constructor(
		private authService: AuthService
	) { }
  	ngOnInit(): void {
  		this.authService.retrieve('memberships').subscribe((res) => {
	      	if(res && res['data'] && res['data']){
	        	this.memberships = res['data'];
	      	}
	  	});
  	}
}
