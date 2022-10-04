import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Constants } from '@constants/constants';
import { SuperHero } from '@models/super-hero.interface';
import { SuperHeroService } from '@services/api-service/super-hero.service';

import { ConfirmDialogComponent } from '@components/confirm-dialog/confirm-dialog.component';
import { NavigationService } from '@services/navigation-service/navigation.service';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.scss']
})
export class CardHeroComponent {

  @Input('heroData')
  public hero!: SuperHero;

  public CONST = Constants;

  constructor(private _heroService: SuperHeroService,
              private _navService: NavigationService,
              private _dialog: MatDialog,
              private _snackBar: MatSnackBar) { }

  public deleteHero(): void {

    const dialog = this._dialog.open(ConfirmDialogComponent, {
      width: Constants.DIALOG_WIDTH,
      data: {...this.hero}
    });

    dialog.afterClosed()
      .subscribe( (result) => {
        if(result){
          this._heroService.deleteSuperHero(this.hero.id!)
            .subscribe(() => {  
              this.showSnackBar(Constants.DELETED_HERO_MESSAGE);
              this._navService.goBack();
            })
        }
      })
  
  }

  public showSnackBar( message: string ){
    this._snackBar.open( message, Constants.MESSAGE_BUTTON_LABEL, {
      duration: Constants.MESSAGE_DURATION
    });
  }

}
