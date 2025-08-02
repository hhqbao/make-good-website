import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-service-item-card',
  templateUrl: 'service-item-card.component.html',
  standalone: true,
})
export class ServiceItemCardComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() imgUrls: string[] = [];
  @Input() playSpeed: number = 1.5;
  @Input() heading: string;
  @Input() altText: string;

  @ViewChild('mainDiv') mainDivRef: ElementRef;

  mainDiv: HTMLDivElement;
  isPlayed = false;
  playInterval: any;
  imgIndex = 0;

  ngOnInit() {
    this.playInterval = setInterval(this.loopImages, this.playSpeed * 1000);
  }

  ngAfterViewInit(): void {
    this.mainDiv = this.mainDivRef.nativeElement as HTMLDivElement;

    this.mainDiv.style.backgroundImage = `url('${this.imgUrls[0]}')`;

    this.isPlayed = true;
  }

  ngOnDestroy(): void {
    clearInterval(this.playInterval);
  }

  private loopImages = () => {
    const { isPlayed, imgUrls } = this;

    if (!isPlayed || imgUrls.length <= 1) return;

    this.imgIndex += 1;

    if (this.imgIndex >= imgUrls.length) this.imgIndex = 0;

    this.mainDiv.style.backgroundImage = `url('${imgUrls[this.imgIndex]}')`;
  };
}
