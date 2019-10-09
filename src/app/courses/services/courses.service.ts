import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { map } from 'rxjs/operators';
import { Lesson } from '../model/lesson';
import { CoursesStore } from '../state/courses.store';


@Injectable()
export class CoursesService {

  constructor(private http: HttpClient, private coursesStory: CoursesStore) {
  }

  findCourseById(courseId: number): Observable<Course> {
    return this.http.get<Course>(`/api/courses/${courseId}`);
  }

  findAllCourses(): Observable<Course[]> {
    return this.http.get('/api/courses')
      .pipe(
        map(res => res['payload'])
      );
  }

  findAllCourseLessons(courseId: number): Observable<Lesson[]> {
    return this.http.get('/api/lessons', {
      params: new HttpParams()
        .set('courseId', courseId.toString())
        .set('pageNumber', '0')
        .set('pageSize', '1000')
    }).pipe(
      map(res => res['payload'])
    );
  }

  findLessons(
    courseId: number,
    pageNumber = 0, pageSize = 3): Observable<Lesson[]> {

    return this.http.get('/api/lessons', {
      params: new HttpParams()
        .set('courseId', courseId.toString())
        .set('filter', '')
        .set('sortOrder', 'asc')
        .set('pageNumber', pageNumber.toString())
        .set('pageSize', pageSize.toString())
    }).pipe(
      map(res => res['payload'])
    );
  }


  saveCourse(courseId: number, changes: Partial<Course>) {
    return this.http.put('/api/courses/' + courseId, changes);
  }

  courseLoaded(course) {
    this.coursesStory.add(course);
  }

  allCoursesLoaded(courses) {
    this.coursesStory.add(courses);
    this.coursesStory.update({
      allCoursesLoaded: true
    });
  }

}
