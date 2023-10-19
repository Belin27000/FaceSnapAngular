import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snaps-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [

      {

        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit',
        createdDate: new Date(),
        snaps: 0,
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        location: 'Paris'
      },
      {
        title: 'Yann',
        description: 'Mes plus belle vacances',
        createdDate: new Date(),
        snaps: 10,
        imageUrl: 'https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg',
        location: 'La montagne'
      },
      {
        title: 'Camille',
        description: 'Je ne sais pas pourquoi il y a cette photo',
        createdDate: new Date(),
        snaps: 90,
        imageUrl: 'https://cdn.pixabay.com/user/2015/10/16/09-28-45-303_250x250.png',
      },
      {

        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit',
        createdDate: new Date(),
        snaps: 0,
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        location: 'Paris'
      },
      {
        title: 'Yann',
        description: 'Mes plus belle vacances',
        createdDate: new Date(),
        snaps: 10,
        imageUrl: 'https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg',
        location: 'La montagne'
      },
      {
        title: 'Camille',
        description: 'Je ne sais pas pourquoi il y a cette photo',
        createdDate: new Date(),
        snaps: 90,
        imageUrl: 'https://cdn.pixabay.com/user/2015/10/16/09-28-45-303_250x250.png',
      }
    ]
  }

}
