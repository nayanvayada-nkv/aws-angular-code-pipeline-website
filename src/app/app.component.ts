import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedEdge = 'rounded';
  selectedSize = 'medium';

  edgeClass = 'pro-pic-bordered';
  sizeClass = 'medium';

  applyStyle() {

    this.edgeClass =
      this.selectedEdge === 'rounded'
        ? 'pro-pic-bordered'
        : 'pro-pic-sharp';

    this.sizeClass = this.selectedSize;
  }
}