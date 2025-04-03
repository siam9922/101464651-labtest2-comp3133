import { Component, OnInit } from '@angular/core';
import { HpapiService } from '../../services/hpapi.service';
import { Character } from '../../models/character.model';

// This component is responsible for displaying a list of characters
// It uses the `HpapiService` to fetch character data from the API
// The character data is then displayed in the template

@Component({
  selector: 'app-characterlist',
  standalone: false,
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css']
})
export class CharacterlistComponent implements OnInit {
  characters: Character[] = [];

  constructor(private hpapi: HpapiService) {}

  ngOnInit(): void {
    this.hpapi.getAllCharacters().subscribe(data => {
      this.characters = data;
    });
  }
}
