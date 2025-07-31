import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-item-card',
  templateUrl: 'service-item-card.component.html',
  standalone: true,
})
export class ServiceItemCardComponent implements OnInit {
  @Input() imgUrl: string;
  @Input() heading: string;
  @Input() altText: string;

  ngOnInit() {}
}
