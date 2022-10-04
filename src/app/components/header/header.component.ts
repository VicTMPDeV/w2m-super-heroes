import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Constants } from '@constants/constants';
import { NavigationService } from '@services/navigation-service/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private navServiceSubscription!: Subscription;
  private readonly mainUrl: string[] = [Constants.ROOT,Constants.ROUTE_LISTHEROES];
  public onHomePage!: boolean;
  public CONST = Constants;
  
  constructor(private _navService: NavigationService) { }
  
  ngOnInit(): void {
    this.navServiceSubscription = this._navService.getCurrentUrl()
      .subscribe((currentUrl: string) => {
        (this.mainUrl.includes(currentUrl)) ? this.onHomePage = true : this.onHomePage = false;
      });
  }

  public goBack(): void {
    this._navService.goBack();
  }
  
  ngOnDestroy(): void {
    this.navServiceSubscription.unsubscribe();
  }
}
