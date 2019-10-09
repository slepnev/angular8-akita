import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CoursesState, CoursesStore } from './courses.store';

@Injectable({providedIn: 'root'})
export class CoursesQuery extends QueryEntity<CoursesState> {

  beginnerCourses$ = this.selectAll({
    filterBy: course => course.category === 'BEGINNER'
  });
  advancedCourses$ = this.selectAll({
    filterBy: course => course.category === 'ADVANCED'
  });
  promoTotal$ = this.selectCount(course => course.promo);

  constructor(protected store: CoursesStore) {
    super(store);
  }

  courseById(id: number) {
    return this.getEntity(id);
  }

}
