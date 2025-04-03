import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HpapiService } from '../../services/hpapi.service';
import { Character } from '../../models/character.model';

// This component is responsible for displaying the details of a character
// It uses the `HpapiService` to fetch character data based on the ID passed in the route
// The character data is then displayed in the template
@Component({
  selector: 'app-characterdetails',
  standalone: false,
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.css']
})
export class CharacterdetailsComponent implements OnInit {
  character: Character | null = null;

  constructor(
    private route: ActivatedRoute,
    private hpapi: HpapiService
  ) {}

  // The component is not standalone and is part of the Angular module
  // It uses the `ActivatedRoute` to get the character ID from the URL
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.hpapi.getCharacterById(id).subscribe(data => {
        this.character = data ?? null; 
      });
    }
  }
}  