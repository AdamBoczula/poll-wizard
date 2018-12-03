import {Injectable} from '@angular/core';
import {User} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  constructor() {
  }

  exampleLogin(): User {
    return <User>{};
  }
}
