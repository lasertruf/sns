import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {


  }

  postdata = '';
  posttitle = '';
  txtar = '';
  txtdat = '';

  onClickDo(){
    this.posttitle=this.txtar;
    this.postdata=this.txtdat;

  }
  
 
}
