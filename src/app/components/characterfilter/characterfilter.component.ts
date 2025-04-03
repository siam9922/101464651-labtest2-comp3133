import { Component } from '@angular/core';
import { HpapiService } from '../../services/hpapi.service';
import { Character } from '../../models/character.model';

// This component is responsible for filtering characters by house
// It uses the `HpapiService` to fetch character data based on the selected house

@Component({
  selector: 'app-characterfilter',
  standalone: false,
  templateUrl: './characterfilter.component.html',
  styleUrls: ['./characterfilter.component.css']
})
export class CharacterfilterComponent {
  houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
  selectedHouse = '';
  characters: Character[] = [];

  constructor(private hpapi: HpapiService) {}

  onHouseChange(): void {
    if (this.selectedHouse) {
      this.hpapi.getCharactersByHouse(this.selectedHouse).subscribe(data => {
        this.characters = data;
      });
    } else {
      this.characters = [];
    }
  }
}
