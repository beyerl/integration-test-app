import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Environment, IEnvironment } from './environment.model';


@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  public currentEnvironment: BehaviorSubject<IEnvironment> = new BehaviorSubject(Environment.localhost)

  constructor() { }

  set(value: IEnvironment) {
    this.currentEnvironment.next(value)
  }

  getAsObservable() {
    return this.currentEnvironment.asObservable()
  }
}
