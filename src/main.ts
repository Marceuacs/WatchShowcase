import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { AppComponent } from './app/app.component';
import { WatchListComponent } from './app/watch-list/watch-list.component';
import { HistoryComponent } from './app/history/history.component'; // Import the HistoryComponent
import { provideHttpClient } from '@angular/common/http';

const routes: Route[] = [
  { path: '', component: WatchListComponent }, // Main page
  { path: 'history', component: HistoryComponent }, // History page
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient()],
}).catch((err) => console.error(err));
