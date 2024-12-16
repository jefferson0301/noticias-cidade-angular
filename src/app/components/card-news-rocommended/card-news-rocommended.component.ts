import { Component, Input } from '@angular/core';
import { New } from '../../New';
import { NewComponent } from '../new/new.component';

@Component({
  selector: 'app-card-news-rocommended',
  imports: [NewComponent],
  templateUrl: './card-news-rocommended.component.html',
  styleUrl: './card-news-rocommended.component.css'
})
export class CardNewsRocommendedComponent {

  @Input () news: New[] = []


}
