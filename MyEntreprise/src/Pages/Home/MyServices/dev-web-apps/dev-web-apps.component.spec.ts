import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevWebAppsComponent } from './dev-web-apps.component';

describe('DevWebAppsComponent', () => {
  let component: DevWebAppsComponent;
  let fixture: ComponentFixture<DevWebAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevWebAppsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevWebAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
