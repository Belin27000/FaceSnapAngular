import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snaps-model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [

        {
            id: 1,
            title: 'Archibald',
            description: 'Mon meilleur ami depuis tout petit',
            createdDate: new Date(),
            snaps: 210,
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            location: 'Paris'
        },
        {
            id: 2,
            title: 'Yann',
            description: 'Mes plus belle vacances',
            createdDate: new Date(),
            snaps: 150,
            imageUrl: 'https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg',
            location: 'La montagne'
        },
        {
            id: 3,
            title: 'Camille',
            description: 'Je ne sais pas pourquoi il y a cette photo',
            createdDate: new Date(),
            snaps: 90,
            imageUrl: 'https://cdn.pixabay.com/user/2015/10/16/09-28-45-303_250x250.png',
        },
        {
            id: 4,
            title: 'Archibald',
            description: 'Mon meilleur ami depuis tout petit',
            createdDate: new Date(),
            snaps: 0,
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            location: 'Paris'
        },
        {
            id: 5,
            title: 'Yann',
            description: 'Mes plus belle vacances',
            createdDate: new Date(),
            snaps: 10,
            imageUrl: 'https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg',
            location: 'La montagne'
        },
        {
            id: 6,
            title: 'Camille',
            description: 'Je ne sais pas pourquoi il y a cette photo',
            createdDate: new Date(),
            snaps: 90,
            imageUrl: 'https://cdn.pixabay.com/user/2015/10/16/09-28-45-303_250x250.png',
        }
    ]
    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }
    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found')
        } else {
            return faceSnap;
        }
    }
    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId)
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--
    }
}