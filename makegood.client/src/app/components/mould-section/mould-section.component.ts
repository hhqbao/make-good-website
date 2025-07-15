import { Component, OnInit } from '@angular/core';
import { ImageCompareComponent } from '../image-compare/image-compare.component';

@Component({
  selector: 'app-mould-section',
  templateUrl: 'mould-section.component.html',
  standalone: true,
  imports: [ImageCompareComponent],
})
export class MouldSectionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
