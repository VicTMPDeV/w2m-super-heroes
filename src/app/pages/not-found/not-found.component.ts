import { Component } from '@angular/core';

import { NavigationService } from '@services/navigation-service/navigation.service';
import { Constants } from '@constants/constants';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styles: [`
    .not-found {
      height: 80vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `]
})
export class NotFoundComponent {

  public CONST: typeof Constants = Constants;

  constructor(private _navService: NavigationService) { }

  public goHomePage(): void {
    this._navService.goToHomePage();
  }

}
