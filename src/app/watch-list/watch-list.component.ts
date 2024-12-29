import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Watch } from '../models/watch';
import { WatchDataService } from '../service/watch-service';

@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css'],
})
export class WatchListComponent implements OnInit {
  constructor(private watchService: WatchDataService){}
  watches: Watch[] = [];
  filteredWatches: Watch[] = [];
  searchTerm: string = '';
  filterType: string = '';

  ngOnInit(){
    this.fetchWatches();
  }

  fetchWatches(): void {
    this.watchService.getWatches().subscribe({
      next: (data) => {
        this.watches = data;
        this.filteredWatches = data;
      },
      error: (err) => {
        console.error('Error retrieving watches:', err);
      }
    });
  }

  applyFilter(): void {
    this.filteredWatches = [...this.watches];

    
    if (this.filterType) {
      this.filteredWatches = this.filteredWatches.filter(
        (watch) => watch.type.toLowerCase() === this.filterType.toLowerCase()
      );
    }

   
    if (this.searchTerm) {
      this.filteredWatches = this.filteredWatches.filter(
        (watch) =>
          watch.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          watch.model.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
