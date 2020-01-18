import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  {CustomerService}  from '../../customer.service';
import  Customer  from '../../Customer';
declare var $: any;

@Component({
  selector: 'app-sign2',
  templateUrl: './sign2.component.html',
  styleUrls: ['./sign2.component.css']
})
export class Sign2Component implements OnInit {
  param; data = [];
  constructor(private activatedRoute: ActivatedRoute,private ls: CustomerService) { 
    this.param = this.activatedRoute.snapshot.params.param;
    this.getenergyrate();
    
  }

  ngOnInit() {
    
      $("#zipcode").val(localStorage.getItem('zipcode'));   
      
    
      $("#slider-range").slider({
        range: true, 
        min: 0,
        max: 3500,
        step: 50,
        slide: function( event, ui ) {
          $( "#min-price").html(ui.values[ 0 ]);
          
          var suffix = '';
          if (ui.values[ 1 ] == $( "#max-price").data('max') ){
             suffix = ' +';
          }
          $( "#max-price").html(ui.values[ 1 ] + suffix);         
        }
      });

      
  }

  codeSnippetText = 'Source Code';
  minValue2 = 1000;
  maxValue2 = 2000;
  step2 = 500;
  currentValues = [0, 20];
   
  nums;
  brand = "All";

  onSliderChange(selectedValues: number[]) {
    this.currentValues = selectedValues;
    this.getenergyrate();
  }
  onFilterBrand(event:any){
    let value = event.target.value;
    this.brand = value;
    this.getenergyrate();
  }
  
  savezipcode(){
    let value = $("#zipcode").val();
    localStorage.setItem('zipcode',value);
  }

  getenergyrate(){
    let param = [];
    param['zipcode'] =  localStorage.getItem('zipcode');
    param['startmonth'] = localStorage.getItem('startmonth');
    param['planterm'] = this.currentValues;
    param['brand'] = this.brand;
    
    this.ls.getEnergyRate(param)
      .subscribe((result: any[]) =>  {   
        this.data = result;
        this.nums = result.length;
     }); 
  }

  

  icon1:any = "../assets/images/icon1.png";
  icon2:any = "../assets/images/home/icon2.png";
  icon3:any = "../assets/images/home/icon3.png";
  logo:any = "../assets/images/logo.png";
  
  
}
