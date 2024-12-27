import { Routes } from '@angular/router';
import { WatchListComponent } from './watch-list/watch-list.component';
import { HistoryComponent } from './history/history.component';

export const routes: Routes = [
  { path: '', component: WatchListComponent }, // Main page
  { path: 'history', component: HistoryComponent }, // History page
];
