import { Component, inject, OnInit } from '@angular/core';
import { LayoutDataService } from '../../services/layout-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-nav',
  templateUrl: 'top-nav.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class TopNavComponent implements OnInit {
  layoutService = inject(LayoutDataService);

  ngOnInit() {}

  onLinkClick = () => {
    setTimeout(() => {
      this.layoutService.openMobileMenu = false;
    });
  };
}
