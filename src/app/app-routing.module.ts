import { LoginComponent } from './auth/login/login.component';
import { PastResolver } from './resolvers/PastResolver';
import { JobResolver } from './resolvers/JobResolver';
import { ShowResolver } from './resolvers/ShowResolver';
import { AskResolver } from './resolvers/AskResolver';
import { BestStoriesResolver } from './resolvers/BestStoriesResolver';
import { CommentsResolver } from './resolvers/CommentResolver';
import { CommentsComponent } from './shared/comments/comments.component';
import { NewsResolvers } from './resolvers/NewsResolver';
import { ListComponent } from './items/list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'beststories',
    pathMatch: 'prefix'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'newcomments',
    component: LoginComponent
  },
  {
    path: 'submit',
    component: LoginComponent
  },
  {
    path: 'beststories',
    component: ListComponent,
    resolve: { data: BestStoriesResolver },
  },
  {
    path: 'newest',
    component: ListComponent,
    resolve: { data: NewsResolvers },
  },
  {
    path: 'past',
    component: ListComponent,
    resolve: { data: PastResolver },
  },
  {
    path: 'ask',
    component: ListComponent,
    resolve: { data: AskResolver },
  },
  {
    path: 'show',
    component: ListComponent,
    resolve: { data: ShowResolver },
  },
  {
    path: 'jobs',
    component: ListComponent,
    resolve: { data: JobResolver },
  },
  { path: 'beststories/:id/comments', component: CommentsComponent, resolve: { data: CommentsResolver } },
  { path: 'past/:id/comments', component: CommentsComponent, resolve: { data: CommentsResolver } },
  { path: 'newest/:id/comments', component: CommentsComponent, resolve: { data: CommentsResolver } },
  { path: 'ask/:id/comments', component: CommentsComponent, resolve: { data: CommentsResolver } },
  { path: 'show/:id/comments', component: CommentsComponent, resolve: { data: CommentsResolver } },
  { path: 'jobs/:id/comments', component: CommentsComponent, resolve: { data: CommentsResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
