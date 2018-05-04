import { Component,OnInit,Injectable } from '@angular/core';
import { GitHub } from './app.models';
import { Http, Response, HttpModule } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class GitHubService {
  
  public results: GitHub[];

  constructor(private http: HttpClient) { }
  
  public getPulls(): Promise<GitHub[]> {
    return new Promise<GitHub[]>((resolve, reject) => {
      
      let pullsURL = 'https://api.github.com/repos/Microsoft/TypeScript/pulls?state=open';
      this.http.get<any>(pullsURL)
          .toPromise()
          .then(
              res => { 
                this.results = res.map(item => {
                  return new GitHub(
                      item.assignee,
                      item.author_association,
                      item.html_url,
                      item.id,
                      item.number,
                      item.state,
                      item.title,
                      item.user.login     
                  );
                });
                resolve(this.results);
              },
              msg => { // Error
                reject(msg);
              }
          );
    });
  }
}