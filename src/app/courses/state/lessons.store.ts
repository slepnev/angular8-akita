import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface LessonsState {
   key: string;
}

export function createInitialState(): LessonsState {
  return {
    key: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'lessons' })
export class LessonsStore extends Store<LessonsState> {

  constructor() {
    super(createInitialState());
  }

}

