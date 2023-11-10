import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-placeholder',
  standalone: true,
  imports: [MatIconModule, MatProgressSpinnerModule],
  template: `
    <div>
      @if(loading) {
      <mat-progress-spinner [diameter]="50" mode="indeterminate" />
      } @else {
      <mat-icon>play_circle</mat-icon>
      }
    </div>
  `,
  styles: `

    :host {
      display: block;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 400px;
      width: 800px;
      background: rgba(0,0,0,0.03);
      cursor: pointer;
    }

    mat-icon {
      height: 60px;
      width: 60px;
      font-size: 60px;
    }

  `,
})
export class PlaceholderComponent {
  @Input() loading = false;
}
