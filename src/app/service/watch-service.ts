import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Watch } from "../models/watch";

@Injectable({
    providedIn: 'root'
  })
  export class WatchDataService {
    private apiUrl = 'https://676ef36ab353db80c321b6ac.mockapi.io/Watches/watches';

    constructor(private http: HttpClient) {}

  getWatches(): Observable<Watch[]> {
    return this.http.get<Watch[]>(this.apiUrl).pipe(
        map(response => response.map((item: Watch) => ({
          id: item.id,
          name: item.name,
          model: item.model,
          type: item.type,
          price: item.price,
          image: item.image
        })))
      );
  }
  }

