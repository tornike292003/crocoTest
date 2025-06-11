import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { HeaderComponent } from '../core/header/header.component';
import { MasterService } from '../master.service';
import { CommonModule } from '@angular/common';
import { Todo } from '../todo.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit, OnDestroy{

  todo: Todo[] = [];
  masterService = inject(MasterService);
  private destroy$ = new Subject<void>();


  ngOnInit(){
    return this.masterService.getTodo().pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.todo = data;
    })
  }

  ngOnDestroy(){
    this.destroy$.next();
    this.destroy$.complete();
  }

}
