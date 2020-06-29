import { async, TestBed } from '@angular/core/testing';
import { PostingModule } from './posting.module';

describe('PostingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PostingModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PostingModule).toBeDefined();
  });
});
