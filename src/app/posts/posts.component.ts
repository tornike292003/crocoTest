import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../core/header/header.component";
import { MasterService } from '../master.service';
import { ActivatedRoute } from '@angular/router';
import { Posts } from '../posts.model';

@Component({
  selector: 'app-posts',
  imports: [HeaderComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  id!:number;
  posts: Posts[] = [];
  masterService = inject(MasterService);
  route = inject(ActivatedRoute)

  ngOnInit(){
    this.id = +this.route.snapshot.paramMap.get('id')!;
    return this.masterService.getPostById(this.id).subscribe((data) => {
      this.posts = data;
    })
  }
}
