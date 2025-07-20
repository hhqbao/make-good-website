import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-image-compare',
  templateUrl: 'image-compare.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class ImageCompareComponent implements OnInit {
  @Input() beforeUrl: string = '';
  @Input() afterUrl: string = '';

  @ViewChild('sliderContainer') sliderContainer: ElementRef;

  sliderPosition = 50;
  isDragging = false;

  ngOnInit() {}

  getClipPathValue = (stage: 'before' | 'after'): string => {
    const position = `${this.sliderPosition}%`;

    if (stage === 'before')
      return `polygon(0 0, ${position} 0, ${position} 100%, 0 100%)`;

    return `polygon(${position} 0, 100% 0, 100% 100%, ${position} 100%)`;
  };

  onClickOnHandle = (event: MouseEvent | TouchEvent) => {
    this.isDragging = true;
  };

  @HostListener('document:touchend', ['$event'])
  @HostListener('document:mouseup', ['$event'])
  onMouseUpDocument = (event: MouseEvent | TouchEvent) => {
    this.isDragging = false;
  };

  @HostListener('document:mousemove', ['$event'])
  onMouseMoveDocument = (event: MouseEvent) => {
    if (!this.isDragging) return;

    this.moveSlider(event.clientX);
  };

  @HostListener('document:touchmove', ['$event'])
  onTouchMoveDocument = (event: TouchEvent) => {
    if (!this.isDragging) return;

    this.moveSlider(event.touches[0].clientX);
  };

  private moveSlider = (clientX: number) => {
    const containerHtml = this.sliderContainer.nativeElement as HTMLDivElement;

    const box = containerHtml.getBoundingClientRect();

    const mouseX = Math.min(clientX - box.left, box.width);

    if (mouseX <= 0) this.sliderPosition = 0;
    else this.sliderPosition = (mouseX / box.width) * 100;
  };
}
