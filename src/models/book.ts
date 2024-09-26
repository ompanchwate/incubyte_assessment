// Book Class
export class Book {
    constructor(
      public isbn: string,
      public title: string,
      public author: string,
      public year: number,
      public available: boolean = true
    ) {}
  }
  
/* 
isbn - unique number of a book
title - title of the book
author - author of the book
year - publishing year of the book
available - availability of the book
*/