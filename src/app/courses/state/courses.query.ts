import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { CoursesStore, CoursesState } from './courses.store';

@Injectable({ providedIn: 'root' })
export class CoursesQuery extends Query<CoursesState> {

  constructor(protected store: CoursesStore) {
    super(store);
  }

}
