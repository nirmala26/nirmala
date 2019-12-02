import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../contact-service.service';
import{RouterModule,Routes} from '@angular/router'
import{Router } from '@angular/router'
import { addDetails } from '../models/addDetails';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  ID : number
  FirstName: string
  LastName : string
  Phone : string
  City : string
  userlist : addDetails[]
  constructor(private ContactService:ContactServiceService ,private router: Router) { }

  ngOnInit() {
    this.getuserlist()
  }
  getuserlist()
  {
  this.ContactService.getuser().subscribe(
    result=>{
     
      this.userlist=result;
     // alert(this.userlist.length);
     
    }
  )
  }
}
