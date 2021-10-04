import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSocialComponent } from './edit-social.component';

describe('EditSocialComponent', () => {
  let component: EditSocialComponent;
  let fixture: ComponentFixture<EditSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
