import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-our-works',
  templateUrl: 'our-works.component.html',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
})
export class OurWorksComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
