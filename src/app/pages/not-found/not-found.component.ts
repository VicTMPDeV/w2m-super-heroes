import { Component } from '@angular/core';

import { NavigationService } from '@services/navigation-service/navigation.service';
import { Constants } from '@constants/constants';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  public CONST: typeof Constants = Constants;

  constructor(private _navService: NavigationService) { }

  public goHomePage(): void {
    this._navService.goToHomePage();
  }

}
