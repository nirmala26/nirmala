import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../contact-service.service';
import{RouterModule,Routes} from '@angular/router'
import{Router } from '@angular/router'


@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {
  ID : number
  FirstName: string
  LastName : string
  Phone : string
  City : string
  constructor(private ContactService:ContactServiceService ,private router: Router) { }

  ngOnInit() {
   
 
}

SaveDetails()
{
  
  this.ContactService.AddContact(this.FirstName,this.LastName,this.Phone,this.City).subscribe(
    result=>{
     
      //alert('saved succesfully')
      window.location.reload();
    
     
}
  )
  
}
}


