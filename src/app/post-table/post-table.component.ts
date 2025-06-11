import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../core/header/header.component';
import { MasterService } from '../master.service';
import { Posts } from '../posts.model';
import { Subject, takeUntil } from 'rxjs';
import { FooterComponent } from "../core/footer/footer.component";

@Component({
  selector: 'app-post-table',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './post-table.component.html',
  styleUrl: './post-table.component.scss'
})
export class PostTableComponent {
  posts: Posts[] = [];
  masterService = inject(MasterService);
  selectedPost: any = null;
  private destroy$ = new Subject<void>();
  


  ngOnInit(){
    this.masterService.getPosts().pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.posts = data;
    })
  }

  ngOnDestroy(){
    this.destroy$.next();
    this.destroy$.complete();
  }

  openModal(post:any):void{
    this.selectedPost = post;
  }


  closeModal():void{
    this.selectedPost = null;
  }

}
