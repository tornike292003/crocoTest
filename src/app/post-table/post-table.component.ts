import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../core/header/header.component';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-post-table',
  imports: [HeaderComponent],
  templateUrl: './post-table.component.html',
  styleUrl: './post-table.component.scss'
})
export class PostTableComponent {
  posts: any[] = [];
  masterService = inject(MasterService);

  ngOnInit(){
    this.masterService.getPosts().subscribe((data) => {
      this.posts = data;
    })
  }

}
