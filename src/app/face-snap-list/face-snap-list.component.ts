import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snaps-model';
import { FaceSnapsService } from '../services/face-snaps.service';


@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  @Input() faceSnaps!: FaceSnap[];

  constructor(private faceSnapService: FaceSnapsService) { }

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapService.getAllFaceSnaps();
  }

}
