import { BaseService } from './services/base.service';
import { PastResolver } from './resolvers/PastResolver';
import { JobResolver } from './resolvers/JobResolver';
import { ShowResolver } from './resolvers/ShowResolver';
import { AskResolver } from './resolvers/AskResolver';
import { CommentsResolver } from './resolvers/CommentResolver';
import { NewsResolvers } from './resolvers/NewsResolver';
import { BestStoriesResolver } from './resolvers/BestStoriesResolver';
import { ProjectMaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './navigation/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ListComponent } from './items/list/list.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MomentModule } from 'ngx-moment';
import { CommentsComponent } from './shared/comments/comments.component';
import { CommentComponent } from './comment/comment.component';
import { LoginComponent } from './auth/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    CommentsComponent,
    CommentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    InfiniteScrollModule,
    MomentModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    FlexLayoutModule,
    ProjectMaterialModule
  ],
  providers: [NewsResolvers, CommentsResolver, BestStoriesResolver, AskResolver, ShowResolver, JobResolver, PastResolver, BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}