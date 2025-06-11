import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MasterService } from '../../master.service';
import { HeaderComponent } from "../header/header.component";
import { Router } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Users } from '../../users.model';
import { Subject, take, takeUntil } from 'rxjs';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-table',
  imports: [HeaderComponent, FormsModule, ReactiveFormsModule, FooterComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit,OnDestroy {

  usersData: Users[] = [];
  masterService = inject(MasterService);
  router = inject(Router)
  filteredData: Users[] = [];
  searchUser = new FormControl('')
  private destroy$ = new Subject<void>();


  ngOnInit(){
    this.masterService.getUsers().pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.usersData = data;
      this.filteredData = data;
    });

    this.searchUser.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(searchText => {
      const text = searchText?.toLowerCase() || '';
      this.filteredData = this.usersData.filter(user => 
        user.name.toLowerCase().includes(text) || user.email.toLowerCase().includes(text)
      );
    });

  }

  ngOnDestroy(){
    this.destroy$.next();
    this.destroy$.complete();
  }

  goToUserPosts(id:number){
    this.router.navigate(['/posts', id])
  }


   goToUserToDo(id:number){
    this.router.navigate(['/todo', id])
  }




}
