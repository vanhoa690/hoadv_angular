import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc',
  },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTYxNmY4MjlhMzRlMTM0MzA0YjI4ODY2MzNjYjVmZSIsInN1YiI6IjY1ODhlOTRkMzI1YTUxNTg3ZTAxN2M3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xp81rO8uudXkoouZ4qkmNGHbnnNbKXIFWB1wzbGQ4zE',
  },
};
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}

  http = inject(HttpClient);

  getMovies() {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/discover/movie',
      options
    );
  }
}
