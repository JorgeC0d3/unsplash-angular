import { Component, OnInit } from '@angular/core';
import { PhotoComponent } from '../photo/photo.component';

@Component({
  selector: 'app-photo-feed',
  standalone: true,
  imports: [PhotoComponent],
  templateUrl: './photo-feed.component.html',
  styleUrl: './photo-feed.component.css'
})
export class PhotoFeedComponent {

  photos: any[] = [];

  getPhotos(){
    const apiUrl = 'https://api.unsplash.com/photos/random?client_id=0pW7BN_YnqSydQE3j1wtECO--JSGK5yqBHxlnBtqCfY&count=12';

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la búsqueda');
        }
        return response.json();
      })
      .then((data: any[]) => {
        this.photos = data;
        console.log(this.photos);
      })
      .catch(err => {
        console.error('Error:', err);
      });
  }

  ngOnInit(){
    this.getPhotos();
  }



}
