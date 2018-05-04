/* This file represents the model for object 
used for representing data from Github */

export class GitHub {
  constructor(public assignee: string,
              public author_association: string,
              public html_url: string,
              public id: number,
              public number: number,
              public state: string,
              public title: string,
              public user: string
              ) {
  }
}