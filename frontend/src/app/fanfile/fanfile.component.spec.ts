import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanfileComponent } from './fanfile.component';

describe('FanfileComponent', () => {
  let component: FanfileComponent;
  let fixture: ComponentFixture<FanfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FanfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FanfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
