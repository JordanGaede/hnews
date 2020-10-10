import { map, mergeMap } from 'rxjs/operators';
import { CommentsService } from './../../services/comments.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Story } from 'src/app/models/story';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  sub: Subscription;
  errorMessage = '';
  comments: any;
  isLoading = true;
  data: any;
  constructor(private route: ActivatedRoute, private commentService: CommentsService) { }

  fetchComments(level, not) {

    return level.map(firstComment => {
      if (firstComment.kids) {
        firstComment['children'] = [];
        firstComment.kids.map(kidId => {

          this.commentService.getIdComment(kidId).subscribe((secondLevelComment: any) => {
            this.comments.map(comment => {
              if (!comment['children']) {
                comment['children'] = [];
              }
              if (comment.id === secondLevelComment.parent) {
                comment['children'].push(secondLevelComment);
              }              
              return comment;
            })
          })
        })
      }
      return firstComment;
    });
  }
  ngOnInit(): void {
    this.route.data.pipe(
      map(firstLevel => { return this.fetchComments(firstLevel.data, ''); })
    ).subscribe(resp => {
      this.comments = resp;
      this.isLoading = false;
    })
  }
  loadAdditionalComments(id) {
    this.commentService.getComments(id).pipe(
      map(firstLevel => { return this.fetchComments(firstLevel, 'not'); })
    ).subscribe(resp => {
      this.comments.map(comment => {

        comment.children.map(child => {
          if (!child['children']) child['children'] = [];

          if (child.id === id) {
            child['children'] = resp;            
          }
          child.kids = [];
          return child;
        });

        return comment;
      });
    })
  }
}
