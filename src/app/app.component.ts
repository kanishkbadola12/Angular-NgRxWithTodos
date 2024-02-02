import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'zivver';
  isLoading: boolean = true;
  error: string | null = null;

  receiveLoadingData(isLoading: boolean) {
    this.isLoading = isLoading;
  }
  receiveErrorData(error: string | null) {
    this.error = error;
  }
}
