import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  votes: number;
  title: string;
  link: string;

  constructor() {
    this.title = 'Angular 2';
    this.link = 'www.google.com';
    this.votes = 10;
  }
  voteUp(): void {
    this.votes += 1;
  }
  voteDown(): boolean {
    this.votes -= 1;
    return false;
  }

  ngOnInit(): void {
  }

}
