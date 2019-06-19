import { Component, OnInit, Input } from '@angular/core';
import { GitUserSearchService } from '../../git-user-search.service';
@Component({
  selector: 'app-user-template',
  templateUrl: './user-template.component.html',
  styleUrls: ['./user-template.component.css']
})
export class UserTemplateComponent implements OnInit {

  showRepoDetail = false;
  repoList: any;
  constructor(private userSearchService: GitUserSearchService) { }
  @Input() userDetail: any;
  ngOnInit() {
  }

  getRepoDetails(users: any, index: boolean) {
    this.showRepoDetail = true;
    this.userSearchService.getRepoDetails(users).subscribe(result => {
      this.repoList = result;
    });
  }

}
