import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  {CustomerService}  from '../../customer.service';
import  Customer  from '../../Customer';



declare var $: any;

@Component({
  selector: 'app-sign3',
  templateUrl: './sign3.component.html',
  styleUrls: ['./sign3.component.css']
})
export class Sign3Component implements OnInit {
  param;
  address;
  source;
  
  constructor(private activatedRoute: ActivatedRoute,private ls: CustomerService) { 
    
    this.param = this.activatedRoute.snapshot.params.param;
    this.generateHTML();
   
  }

  
  
  generateHTML() {      
      let zipcode = localStorage.getItem('zipcode');
      this.ls.getServiceAddress(zipcode, this.param)
      .subscribe((data: any[]) => {       
        let source = new Array();
        let j = 0;
        $.each(data, function(i,obj){
            
            let title=obj.Address;
            let html = "<div style='padding: 0px; margin: 0px; height: 25px; float: left;'>" + title +
            "</div></div>";
            source[j] = { html: html,title: title };
            j++;
        }); 
       
        this.source = source;        
       
     });    
      
  }

  ngOnInit() {
    $("#businessdays").css("display","none");    
    $("#zipcode").val(localStorage.getItem('zipcode'));   
    
  }
  

  switch_display(param){
    if(param == 1){
      $("#businessdays").css("display","");
      $("#note").css("display","none");
      
    }
    else if(param==2){
      $("#businessdays").css("display","none");
      $("#note").css("display","");
     
    }
    else{
      
      if($("#businessdays > input").prop("checked") == true){       
        $(".startdate").css("display","none");
      }
      else{
        $(".startdate").css("display","block");
      }
    }
  }

  getaddressdata(){
    let address = $("#serviceaddress input").val();    
    this.ls.getAddressData(address)
      .subscribe((data: any[]) => {     
        
        $("#esiid").val(data[0]['ESIId']);
        $("#city").val(data[0]['City']);
        $("#state").val(data[0]['State']);
        
       
     }); 
  }

  billingaddress(){
    if($("#billingaddress").prop("checked") == true){     
        $("#billingserviceaddress").val($("#serviceaddress input").val());   
        $("#billingcity").val($("#city").val());
        $("#billingstate").val($("#state").val());
        $("#billingzipcode").val($("#zipcode").val());
    }
    else{
      $("#billingserviceaddress").val('');
      $("#billingcity").val('');
      $("#billingstate").val('');
      $("#billingzipcode").val('');
    }
  }


  logo:any = "../assets/images/logo.png";
  
}
