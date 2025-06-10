import { Component, inject } from '@angular/core';
import { MasterService } from '../../master.service';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  usersData: any[] = [];
  masterService = inject(MasterService);

  ngOnInit(){
    this.masterService.getUsers().subscribe((data) => {
      this.usersData = data;
      console.log(data);
    })
  }


}
