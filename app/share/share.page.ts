
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit() {
  }

  // async basicShare(){
  //     await Share.share({
  //       title:"hello"
  //     })
  // }

}
