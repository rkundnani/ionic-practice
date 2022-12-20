import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginPage } from '../login.page';
import { NgModule } from '@angular/core';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'idcomponent',
  templateUrl: './id1.component.html',
  styleUrls: ['./id1.component.scss'],
})
export class Id1Component implements OnInit {
  id: string;
  data;


  constructor(private router : ActivatedRoute , private userservice : UserService) { }
 
  ngOnInit() {
    this.userservice.getUser().subscribe(data=>{
      this.data=data
    })

    this.id=this.router.snapshot.paramMap.get('id');
  }

}








