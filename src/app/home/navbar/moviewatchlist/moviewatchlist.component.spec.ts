import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviewatchlistComponent } from './moviewatchlist.component';

describe('MoviewatchlistComponent', () => {
  let component: MoviewatchlistComponent;
  let fixture: ComponentFixture<MoviewatchlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviewatchlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviewatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
