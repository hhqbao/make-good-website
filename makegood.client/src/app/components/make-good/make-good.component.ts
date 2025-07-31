import { Component, inject, OnInit } from '@angular/core';
import { ServiceItemCardComponent } from '../service-item-card/service-item-card.component';
import { LayoutDataService } from '../../services/layout-data.service';
import { OurService } from '../../models/layouts/OurService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-make-good',
  templateUrl: 'make-good.component.html',
  imports: [CommonModule, ServiceItemCardComponent],
})
export class MakeGoodComponent implements OnInit {
  private dataService = inject(LayoutDataService);

  ourServices: OurService[] = [];

  ngOnInit() {
    this.loadOurServicesAsync();
  }

  loadOurServicesAsync = async () => {
    this.ourServices = await this.dataService.getOurServicesAsync();
  };
}
