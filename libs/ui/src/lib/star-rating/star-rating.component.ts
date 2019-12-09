import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  constructor() { }

  @Input() rating : any;
           finalStars : any = [];

  ngOnInit() {
    console.log("rating",this.rating);
    this.rating = Number(this.rating);
    this.finalStars = ['star_border','star_border','star_border','star_border','star_border'];
    if(isNaN(this.rating) == false){
      this.finalStars = [];
      for(var i=1;i<=5;i++){
        if(i <= this.rating){
          this.finalStars.push('star');
        }else if((i - this.rating) < 1){
          this.finalStars.push('star_half');
        }else{
          this.finalStars.push('star_border');
        }
      }
    }
  }

}
