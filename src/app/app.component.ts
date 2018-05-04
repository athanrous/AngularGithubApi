import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GitHubService} from './app.service';
import {GitHub} from './app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  public today = Date.now();
  public title = 'app';
  public gitHubIssues: Array<GitHub>;
  constructor(private http: HttpClient,private service: GitHubService) { }
  
  ngOnInit(): void { 
  	this.service.getPulls().then((result) => {this.gitHubIssues = result;});	
  }
  
}
