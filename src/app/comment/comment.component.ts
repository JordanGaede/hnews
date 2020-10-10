import { CommentsService } from './../services/comments.service';
import { Comment } from './../models/comment';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  @Output() onLoadAdditionalComments: EventEmitter<any> = new EventEmitter<any>();

  collapse: boolean;
  constructor(private service: CommentsService) { }

  ngOnInit() {
    this.collapse = false;
  }
  loadAdditionalComments(id) {
    this.onLoadAdditionalComments.emit(id);
  }
}
