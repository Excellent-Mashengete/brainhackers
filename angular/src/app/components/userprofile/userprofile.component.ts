import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {
  currentuser: Object = {}
  constructor(
    private actRoute: ActivatedRoute,
    private auth:AuthenticationService) {
      let id = this.actRoute.snapshot.paramMap.get('id');
      console.log(id);
     }

  ngOnInit(): void {}

}
