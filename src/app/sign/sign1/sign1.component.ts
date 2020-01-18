import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-sign1',
  templateUrl: './sign1.component.html',
  styleUrls: ['./sign1.component.css']
})
export class Sign1Component implements OnInit {
  param;
  constructor(private activatedRoute: ActivatedRoute) { 
    this.param = this.activatedRoute.snapshot.params.param;
  }

  ngOnInit() {
    
    $("#zipcode").val(localStorage.getItem('zipcode'));   

    $("#"+this.param+"chk").attr("checked","checked");
    this.showform(this.param);

    let month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year = [2020,2021,2022,2023];
    for(let y=0; y<year.length;y++){
      for(let m=0; m<month.length;m++){
        var value = year[y].toString(); var mm;
        if(m<9){
          mm = '0' + (m+1);
        }
        else{mm = (m+1);}
        value = value+mm.toString()+"01";
        var sel = (value==localStorage.getItem('startmonth'))?"selected":"";
        $("#startmonth").append("<option value="+value+" "+sel+">"+month[m]+"&nbsp"+year[y]+"</option>");
      }
    }
  }
  select_service(param){
    $(".option").removeClass("selected");
    $("."+param).addClass("selected");
  }

  showform(param){
    
    
    $("#ss_form").css("display",'block');
    $(".chk").removeClass("chked");
    if(param == "business"){
      $("#ss_form >div:first-child").removeClass("startmonth");

    }
    $(".chk"+param).addClass("chked");

    this.param = param;
  }

  savezipcode(){
    let value = $("#zipcode").val();
    localStorage.setItem('zipcode',value);
  }

  savestartmonth(){
    let value = $("#startmonth").val();
    localStorage.setItem('startmonth',value);
  }

  home:any = "../assets/images/home/home_1.png";
  business:any = "../assets/images/home/business_1.png";
  logo:any = "../assets/images/logo.png";
}
