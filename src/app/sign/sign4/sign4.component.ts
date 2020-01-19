import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-sign4',
  templateUrl: './sign4.component.html',
  styleUrls: ['./sign4.component.css']
})
export class Sign4Component implements OnInit {
  param;
  constructor(private activatedRoute: ActivatedRoute) { 
    this.param = this.activatedRoute.snapshot.params.param;
  }
  
  ngOnInit() {
    $("."+this.param).css('display','block');
  }
  logo:any = "../assets/images/logo.png";
}
