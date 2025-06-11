import { Component, inject } from '@angular/core';
import { MasterService } from '../../master.service';
import { HeaderComponent } from "../header/header.component";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-table',
  imports: [HeaderComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  usersData: any[] = [];
  masterService = inject(MasterService);
  router = inject(Router)

  ngOnInit(){
    this.masterService.getUsers().subscribe((data) => {
      this.usersData = data;
      console.log(data);
    })
  }

  goToUserPosts(id:number){
    this.router.navigate(['/posts', id])
  }


}
