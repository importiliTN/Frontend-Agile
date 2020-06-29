import { async, TestBed } from '@angular/core/testing';
import { LoginUiModule } from './login-ui.module';

describe('LoginModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LoginUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LoginUiModule).toBeDefined();
  });
});
