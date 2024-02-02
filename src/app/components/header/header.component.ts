import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppStateInterface } from '../../models/app-state-interface';
import { Store, select } from '@ngrx/store';
import { selectedPostIndexSelector } from '../../store/selectors';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  public selectedPostIndex$: Observable<number>;

  constructor(private store: Store<AppStateInterface>) {
    this.selectedPostIndex$ = this.store.pipe(select(selectedPostIndexSelector));
  }
}
