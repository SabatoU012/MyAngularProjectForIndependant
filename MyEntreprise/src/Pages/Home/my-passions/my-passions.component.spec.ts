import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPassionsComponent } from './my-passions.component';

describe('MyPassionsComponent', () => {
  let component: MyPassionsComponent;
  let fixture: ComponentFixture<MyPassionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPassionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPassionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
