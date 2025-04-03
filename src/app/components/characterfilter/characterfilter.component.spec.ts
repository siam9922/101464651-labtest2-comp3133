import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterfilterComponent } from './characterfilter.component';

describe('CharacterfilterComponent', () => {
  let component: CharacterfilterComponent;
  let fixture: ComponentFixture<CharacterfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterfilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
