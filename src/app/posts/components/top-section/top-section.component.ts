import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PostInterface } from '../../models/post.interface';
import { AppStateInterface } from '../../../models/app-state-interface';
import { Store } from '@ngrx/store';
import { selectedPostSelector } from '../../store/selectors';

@Component({
  selector: 'top-section',
  templateUrl: './top-section.component.html',
  styleUrl: './top-section.component.css'
})
export class TopSectionComponent {
  selectedPost$: Observable<PostInterface | null>;

  constructor(private store: Store<AppStateInterface>) {
    this.selectedPost$ = this.store.select(selectedPostSelector);
  }
}
