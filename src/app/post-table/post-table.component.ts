import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../core/header/header.component';
import { MasterService } from '../master.service';
import { Posts } from '../posts.model';

@Component({
  selector: 'app-post-table',
  imports: [HeaderComponent],
  templateUrl: './post-table.component.html',
  styleUrl: './post-table.component.scss'
})
export class PostTableComponent {
  posts: Posts[] = [];
  masterService = inject(MasterService);
  selectedPost: any = null;


  ngOnInit(){
    this.masterService.getPosts().subscribe((data) => {
      this.posts = data;
    })
  }

  openModal(post:any):void{
    this.selectedPost = post;
  }


  closeModal():void{
    this.selectedPost = null;
  }

}
