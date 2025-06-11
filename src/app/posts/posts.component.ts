import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { HeaderComponent } from "../core/header/header.component";
import { MasterService } from '../master.service';
import { ActivatedRoute } from '@angular/router';
import { Posts } from '../posts.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-posts',
  imports: [HeaderComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit,OnDestroy {
  id!:number;
  posts: Posts[] = [];
  masterService = inject(MasterService);
  route = inject(ActivatedRoute)
  private destroy$ = new Subject<void>();
  

  ngOnInit(){
    this.id = +this.route.snapshot.paramMap.get('id')!;
    return this.masterService.getPostById(this.id).pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.posts = data;
    })
  }

  ngOnDestroy(){
    this.destroy$.next();
    this.destroy$.complete();
  }
}
