import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snaps-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap
  myLastSnap!: FaceSnap

  ngOnInit() {
    this.mySnap = new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit',
      new Date(),
      0,
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
    )
    this.myOtherSnap = new FaceSnap(
      'Yann',
      'Mes plus belle vacances',
      new Date(),
      10,
      'https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg'
    )
    this.myLastSnap = new FaceSnap(
      'Camille',
      'Je ne sais pas pourquoi il y a cette photo',
      new Date(),
      150,
      'https://cdn.pixabay.com/user/2015/10/16/09-28-45-303_250x250.png'
    )
  }

}
