import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Course } from '../model/course';

export interface CoursesState extends EntityState<Course> {
  allCoursesLoaded: boolean;
}

export function createInitialState(): CoursesState {
  return {
    allCoursesLoaded: false
  };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'course'})
export class CoursesStore extends EntityStore<CoursesState> {

  constructor() {
    super(createInitialState());
  }

}

