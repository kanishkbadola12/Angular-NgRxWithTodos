import { Component, Input } from '@angular/core';
import { PostInterface } from '../../../models/post.interface';

@Component({
  selector: 'post-card',
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})

export class PostCardComponent {
  @Input() post: PostInterface | null = null;

}
