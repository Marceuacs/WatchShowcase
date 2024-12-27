import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css'],
})
export class WatchListComponent {
  watches = [
    { brand: 'Tissot', model: 'Classic Dream', type: 'Classic', price: '$500', image: '/images/tissot.jpg' },
    { brand: 'Tissot', model: 'T-Touch', type: 'Smart', price: '$700', image: '/images/tissot_1.jpg' },
    { brand: 'Casio', model: 'Edifice', type: 'Classic', price: '$300', image: '/images/casio.jpg' },
    { brand: 'Casio', model: 'G-Shock', type: 'Sport', price: '$350', image: '/images/casio1.jpg' },
    { brand: 'Seiko', model: 'Presage', type: 'Dress', price: '$900', image: '/images/seiko.jpg' },
    { brand: 'Seiko', model: 'Prospex', type: 'Diver', price: '$1,100', image: '/images/seiko_1.jpg' },
    { brand: 'Tag Heuer', model: 'Carrera', type: 'Dress', price: '$2,500', image: '/images/tag_heuer.jpg' },
    { brand: 'Tag Heuer', model: 'Monaco', type: 'Classic', price: '$3,000', image: '/images/tag_heuer_1.jpg' },
    { brand: 'Casio', model: 'Protrek', type: 'Diver', price: '$400', image: '/images/casio3.jpg' },
    { brand: 'Tag Heuer', model: 'Aquaracer', type: 'Diver', price: '$4,000', image: '/images/tag_heuer_2.jpg' }
  ];
  filteredWatches = [...this.watches];
  searchTerm: string = '';
  filterType: string = '';

  applyFilter(): void {
    this.filteredWatches = [...this.watches];

    // Filter by type
    if (this.filterType) {
      this.filteredWatches = this.filteredWatches.filter(
        (watch) => watch.type.toLowerCase() === this.filterType.toLowerCase()
      );
    }

    // Search by term
    if (this.searchTerm) {
      this.filteredWatches = this.filteredWatches.filter(
        (watch) =>
          watch.brand.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          watch.model.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
