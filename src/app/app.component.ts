import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PhotoFeedComponent } from './photo-feed/photo-feed.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PhotoFeedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'unsplash';
}
