import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { VideoComponent } from './components/video/video.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <mat-toolbar color="primary"> My Deferred Blog! </mat-toolbar>
    <div class="container">
      <section class="blog">
        <h1>Angular v17 is released!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed vitae mollis arcu, et rhoncus est.
          Morbi pulvinar mauris risus, ac rutrum nunc sodales non. Duis dictum
          eros vitae tortor consectetur fermentum. Vestibulum venenatis ornare
          felis vulputate varius. Aliquam aliquet orci sollicitudin aliquam
          gravida.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida.
        </p>
        @defer(on viewport) {
        <app-video id="sitHfnoeT88" />
        } @placeholder {
        <app-placeholder />
        } @loading(minimum 500ms) {
        <app-placeholder [loading]="true" />
        }
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          mollis arcu, et rhoncus est. Morbi pulvinar mauris risus, ac rutrum
          nunc sodales non. Duis dictum eros vitae tortor consectetur fermentum.
          Vestibulum venenatis ornare felis vulputate varius. Aliquam aliquet
          orci sollicitudin aliquam gravida.
        </p>
        @defer(on interaction) {
        <app-video id="sitHfnoeT88" />
        }@placeholder {
        <app-placeholder />
        } @loading (minimum 500ms) {
        <app-placeholder [loading]="true" />
        }
      </section>
    </div>
  `,
  styles: `
      .container {
        padding: 24px;
        height: calc(100vh - 113px);
        overflow: auto;
      }

      .blog {
        margin: auto;
        max-width: 800px;
        font-size: 1.1rem;

        > * {
          padding-bottom: 12px;
          padding-top: 12px;
        }
      }
    `,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    VideoComponent,
    PlaceholderComponent,
  ],
})
export class AppComponent {}
