import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:angular/src/app/Components/signup/signup.component.spec.ts
// import { SignupComponent } from './signup.component';
import { SignupComponent } from './signup.component'
=======
import { CardComponent } from './card.component';
>>>>>>> 08e81666792116934d3be7c65ba054012a1eea50:angular/src/app/Components/card/card.component.spec.ts

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
