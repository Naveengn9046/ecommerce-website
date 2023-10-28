// image-popup.component.ts
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-image-popup',
  templateUrl: './image-popup.component.html',
  styleUrls: ['./image-popup.component.css']
})
export class ImagePopupComponent {
  @Input() selectedProduct: any | null;
  @Output() closePopup = new EventEmitter<void>();

  onClosePopup() {
    this.closePopup.emit();
  }
}
