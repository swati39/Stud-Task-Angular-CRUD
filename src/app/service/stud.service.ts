import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stud } from '../stud';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudService {
  private baseURL = `http://localhost:5000/api/v1`
  

  private studList: Stud[] = [{
    id: 1,
    name: 'Swati Inje',
    dob: new Date('02/01/1999'),
    email: 'swati@gmail.com',
    gender: 'Female',
    mobile: '800000000'
}];

  constructor(private http: HttpClient) { }
  getStuds() {
    return this.studList
  }

  getStudsByID(id: number) {
    return this.studList.find(x => x.id == id)
}
  addStud(stud: Stud) {
    stud.id = new Date().getTime();
      this.studList.push(stud);
  }
  updateStud(stud: Stud) {
      const userIndex = this.studList.findIndex(x => x.id == stud.id);
      if (userIndex != null && userIndex != undefined) {
          this.studList[userIndex] = stud;
      }
  }
  removeStud(id: number) {
    this.studList = this.studList.filter(x => x.id != id);
  }
}
