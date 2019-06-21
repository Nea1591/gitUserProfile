import { Component, OnInit, Input } from '@angular/core';
import { GitUserSearchService } from '../../git-user-search.service';
@Component({
  selector: 'app-user-template',
  templateUrl: './user-template.component.html',
  styleUrls: ['./user-template.component.css']
})
export class UserTemplateComponent implements OnInit {
  showRepoDetail = false;
  buttonname = "Details";
  isExpand: boolean;
  repoList: any;
  constructor(private userSearchService: GitUserSearchService) { 
  }
  @Input() userDetail: any;
  config: any;
  ngOnInit() {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: 30//this.userDetail.length
    };
  }

  getRepoDetails(users: any, index: boolean) {
    this.isExpand = !this.isExpand;
    this.userSearchService.getRepoDetails(users).subscribe(result => {
      this.repoList = result;
      this.showRepoDetail = index;
    });
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

}
