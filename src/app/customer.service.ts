import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }
  
  getServiceAddress(zipcode, param) {
    
    let data = [zipcode, param];
    return this
           .http
           .get(`${this.uri}/`+data);
    
  }
  getAddressData(address) {
    let addresschn = address.replace("#",'*');
    //alert(addresschn)
    return this
           .http
           .get(`${this.uri}/getAddressData/`+addresschn);
    
  }
  getEnergyRate(param) {

    const obj = {
         zipcode : param['zipcode'],
      startmonth : param['startmonth'],
        planterm : param['planterm'],
           brand : param['brand']
    };
    return this
           .http
           .post(`${this.uri}/getEnergyRate`,obj);
    
  }
 
}
