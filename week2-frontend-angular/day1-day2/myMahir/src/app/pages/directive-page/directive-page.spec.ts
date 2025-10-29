import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivePage } from './directive-page';

describe('DirectivePage', () => {
  let component: DirectivePage;
  let fixture: ComponentFixture<DirectivePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
