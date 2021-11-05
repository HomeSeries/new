import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesWatchlistComponent } from './series-watchlist.component';

describe('SeriesWatchlistComponent', () => {
  let component: SeriesWatchlistComponent;
  let fixture: ComponentFixture<SeriesWatchlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesWatchlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesWatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
