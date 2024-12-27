// src/app/watch.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WatchService {
  private watches = [
    { brand: 'Tissot', model: 'Classic Dream', type: 'Classic' },
    { brand: 'Tissot', model: 'T-Touch', type: 'Smart' },
    { brand: 'Casio', model: 'G-Shock', type: 'Sport' },
    { brand: 'Casio', model: 'Edifice', type: 'Classic' },
    { brand: 'Seiko', model: 'Presage', type: 'Dress' },
    { brand: 'Seiko', model: 'Prospex', type: 'Diver' },
    { brand: 'Tag Heuer', model: 'Carrera', type: 'Sport' },
    { brand: 'Tag Heuer', model: 'Monaco', type: 'Classic' },
  ];

  getWatches() {
    return this.watches;
  }
}
