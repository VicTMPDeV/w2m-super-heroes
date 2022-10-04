import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ImagePipeModule } from '@pipes/image-pipe/image.module';
import { TruncateTextPipeModule } from '@pipes/truncate-text-pipe/truncate-text-pipe.module';
import { CardHeroComponent } from './card-hero.component';


@NgModule({
  declarations: [
    CardHeroComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    ImagePipeModule,
    TruncateTextPipeModule
  ],
  exports: [
    CardHeroComponent
  ]
})
export class CardHeroModule { }
