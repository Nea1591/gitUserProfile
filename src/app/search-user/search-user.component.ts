import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GitUserSearchService } from '../git-user-search.service'

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  searchForm: FormGroup;
  userDetail: string;
  totalResult: number;

  constructor(private gitSearch: GitUserSearchService) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      userName: new FormControl('')
    });
  }

  onSubmit() {
    console.log(this.searchForm.value);
    let user = this.searchForm.value;
    this.gitSearch.getUser(user.userName).subscribe(result => {
      this.userDetail = result['items'];
      this.totalResult = result['items'].length;
    });

  }

}
