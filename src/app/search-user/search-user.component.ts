import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GitUserSearchService } from '../git-user-search.service';
import { ToastrService as toaster} from 'ngx-toastr';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  searchForm: FormGroup;
  error : any;
  userDetail: string;
  totalResult: number;
  showcount = false;
  constructor(private gitSearch: GitUserSearchService, private toastrService : toaster) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      userName: new FormControl('')
    });
  }

  onSubmit() {
    let user = this.searchForm.value;
    this.showcount = true;
    this.gitSearch.getUser(user.userName).subscribe(result => {
      this.userDetail = result['items'];
      this.totalResult = result['items'].length;
      this.toastrService.success("Successfully got the user detail","Success");
    });

  }

}
