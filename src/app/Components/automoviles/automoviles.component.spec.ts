import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomovilesComponent } from './automoviles.component';

describe('AutomovilesComponent', () => {
  let component: AutomovilesComponent;
  let fixture: ComponentFixture<AutomovilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomovilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomovilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
