import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-sign5',
  templateUrl: './sign5.component.html',
  styleUrls: ['./sign5.component.css']
})
export class Sign5Component implements OnInit {
  param;
  constructor(private activatedRoute: ActivatedRoute) { 
    this.param = this.activatedRoute.snapshot.params.param;
  }

  ngOnInit() {
    $("."+this.param).css('display','block');
  }

  logo:any = "../assets/images/logo.png";

}
