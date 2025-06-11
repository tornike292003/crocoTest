import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TableComponent } from './core/table/table.component';
import { PostTableComponent } from './post-table/post-table.component';
import { PostsComponent } from './posts/posts.component';
import { TodoListComponent } from './todo-list/todo-list.component';

export const routes: Routes = [
    {path:'', redirectTo:'main', pathMatch:'full'},
    {path:'main', component:MainComponent},
    {path:'users', component:TableComponent},
    {path:'posts', component:PostTableComponent},
    {path:'posts/:id', component:PostsComponent},
    {path:'todo/:id', component:TodoListComponent}
];
