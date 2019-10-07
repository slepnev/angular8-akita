import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { LessonsStore, LessonsState } from './lessons.store';

@Injectable({ providedIn: 'root' })
export class LessonsQuery extends Query<LessonsState> {

  constructor(protected store: LessonsStore) {
    super(store);
  }

}
