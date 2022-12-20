import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-id2',
  templateUrl: './id2.page.html',
  styleUrls: ['./id2.page.scss'],
})
export class Id2Page implements OnInit {

  
    id: string;
    data;
    constructor(private router : ActivatedRoute) { }
  
    ngOnInit() {
      this.id=this.router.snapshot.paramMap.get('id'); 
      fetch('./assets/input/input.json').then(res => res.json()).then(json => {this.data = json;});
    
  
  }

}
