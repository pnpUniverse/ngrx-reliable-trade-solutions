import { Component, OnInit, ViewChild, TemplateRef,  AfterViewInit  } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastConfig, Toaster, ToastType } from "ngx-toast-notifications";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
   @ViewChild('mymodal') mymodal : TemplateRef<any>;
  title = 'reliable-trade-solutions';
  collapse: boolean = true;
  selectedIndex: any = null;
  loginForm: FormGroup;
  loginError: any;
  myRoutes = [
    {
      name : 'Home',
      url: '/'
    },
    {
      name : 'About US',
      url: '/about-us'
    },
    {
      name : 'Services',
      url: '/services'
    },
    {
      name : 'Membership',
      url: '/membership'
    },
    {
      name : 'Performance',
      url: '/performance'
    },
    {
      name : 'Contact US',
      url: '/contact-us'
    }
  ]
  // { name : 'Service', url: '/service' },
  services:any;
  contact_us_content: any;
  closeResult: string;
  constructor(
    private router: Router,
    private authService: AuthService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private toaster: Toaster
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        const result = this.myRoutes.findIndex(function(object) {
          return object.url == val.url;
        });
        if(result > -1) {
          this.selectedIndex = result; 
        }
      }
    });
    this.authService.retrieve('services').subscribe((res) => {
      if(res && res['data'] && res['data']){
        this.services = res['data'];
      }
    });

    this.authService.retrieveBySlug('contact_us_content', 'contact_us_content').subscribe((res) => {
      if(res && res['data'] && res['data']['_id']){
        this.contact_us_content = res['data'];
      }
    });
    this.buildForm();
  }

  ngAfterViewInit() {
    this.open(this.mymodal);
  }

  buildForm() {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: this.fb.control(null, [Validators.required]),
      service: ['', [Validators.required]]
    });
  }

  get f() {
    return this.loginForm.value;
  }

  loginUser() {
    // const formData = new FormData();
    // const obj = {
    //   name 
    // }
    // ['name', 'mobile', 'email', 'service'].map(d => formData.append(d, this.f[d]));

    this.authService.create(this.loginForm.value, 'free_trial_request').subscribe((res) => {
      if (res) {
        this.toaster.open({
          text: 'Our Representative will get back to you soon !!',
          caption: 'Free Trial Request Notification',
          type: 'success',
        });
        this.loginForm.reset();
      }
    });
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  setIndex(index: number) {
    this.selectedIndex = index;
  }
}
