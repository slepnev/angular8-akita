import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface CourseState {
   key: string;
}

export function createInitialState(): CourseState {
  return {
    key: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'course' })
export class CoursesStore extends Store<CourseState> {

  constructor() {
    super(createInitialState());
  }

}

