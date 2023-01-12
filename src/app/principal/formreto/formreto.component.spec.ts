import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormretoComponent } from './formreto.component';

describe('FormretoComponent', () => {
  let component: FormretoComponent;
  let fixture: ComponentFixture<FormretoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormretoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormretoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
