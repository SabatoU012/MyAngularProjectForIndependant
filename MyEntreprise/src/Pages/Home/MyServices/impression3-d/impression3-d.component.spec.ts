import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Impression3DComponent } from './impression3-d.component';

describe('Impression3DComponent', () => {
  let component: Impression3DComponent;
  let fixture: ComponentFixture<Impression3DComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Impression3DComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Impression3DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
