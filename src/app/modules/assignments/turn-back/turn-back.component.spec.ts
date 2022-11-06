import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnBackComponent } from './turn-back.component';

describe('TurnBackComponent', () => {
  let component: TurnBackComponent;
  let fixture: ComponentFixture<TurnBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
