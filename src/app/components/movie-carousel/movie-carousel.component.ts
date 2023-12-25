import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Movie } from '../../types/Movie';

@Component({
  selector: 'app-movie-carousel',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './movie-carousel.component.html',
  styleUrl: './movie-carousel.component.css',
})
export class MovieCarouselComponent {
  @Input() title!: string;
  @Input() movies: Movie[] = [];
}
