import { Component, inject } from '@angular/core';
import { MasterService } from '../../master.service';
import { HeaderComponent } from "../header/header.component";
import { Router } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-table',
  imports: [HeaderComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  usersData: any[] = [];
  masterService = inject(MasterService);
  router = inject(Router)
  filteredData: any[] = [];
  searchUser = new FormControl('')

  ngOnInit(){
    this.masterService.getUsers().subscribe((data) => {
      this.usersData = data;
      this.filteredData = data;
    });

    this.searchUser.valueChanges.subscribe(searchText => {
      const text = searchText?.toLowerCase() || '';
      this.filteredData = this.usersData.filter(user => 
        user.name.toLowerCase().includes(text) || user.email.toLowerCase().includes(text)
      );
    });

  }

  goToUserPosts(id:number){
    this.router.navigate(['/posts', id])
  }


   goToUserToDo(id:number){
    this.router.navigate(['/todo', id])
  }




}
