import { Injectable } from '@angular/core';
import{addDetails} from 'src/app/models/addDetails';
import { observable, Observable } from 'rxjs';
import {HttpClient,HttpParams} from '@angular/common/http'
import {HttpClientModule} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor(private http:HttpClient) { }


  AddContact(FirstName:string,LastName:string,Phone:string,City:string): Observable<any> {
    
    let objreg=new addDetails();
    objreg.FirstName=FirstName;
    objreg.LastName=LastName;
    objreg.Phone=Phone;
    objreg.City=City;
 
    return this.http.post<any>('http://localhost:50260/AddContact',objreg)
  }
  getuser():any{
    //alert('jkhjh');
    
          return this.http.get<addDetails>('http://localhost:50260/AddContact')
    
        }
  
}
