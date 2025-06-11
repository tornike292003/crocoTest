import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../core/header/header.component';
import { MasterService } from '../master.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  todo: any[] = [];
  masterService = inject(MasterService);

  ngOnInit(){
    return this.masterService.getTodo().subscribe((data) => {
      this.todo = data;
    })
  }

}
