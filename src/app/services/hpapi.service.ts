import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // ✅ Needed for filtering
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class HpapiService {
  private baseUrl = 'https://hp-api.onrender.com/api';

  constructor(private http: HttpClient) {}

  // ✅ Get all characters
  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}/characters`);
  }

  // ✅ Get characters by house
  getCharactersByHouse(house: string): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}/characters/house/${house}`);
  }

  // ✅ Get full character info by ID (filtered from /characters list)
  getCharacterById(id: string): Observable<Character | undefined> {
    return this.http.get<Character[]>(`${this.baseUrl}/characters`).pipe(
      map(characters => characters.find(char => char.id === id))
    );
  }
}
