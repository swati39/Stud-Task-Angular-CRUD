import { Component, OnInit } from '@angular/core';
import { StudService } from '../service/stud.service';
import { Stud } from '../stud';

@Component({
  selector: 'app-stud-list',
  templateUrl: './stud-list.component.html',
  styleUrls: ['./stud-list.component.css']
})
export class StudListComponent implements OnInit {

  studList: Stud[] = [];
    first = 0;
    rows = 10;
    constructor(private StudService: StudService) {}
    ngOnInit(): void {
        // Get Users from UserService
        this.studList = this.StudService.getStuds();
    }
   
    reset() {
        this.first = 0;
    }
    isLastPage(): boolean {
        return this.studList ? this.first === (this.studList.length - this.rows) : true;
    }
    isFirstPage(): boolean {
        return this.studList ? this.first === 0 : true;
    }
    //****************PrimeNG DataTable Pagination Method End*********************** */
    // ********************User To Remove User from User List*************************/
    remove(id: number) {
        this.StudService.removeStud(id);
        this.studList = this.StudService.getStuds();
    }
}

