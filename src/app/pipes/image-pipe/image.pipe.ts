import { Pipe, PipeTransform } from '@angular/core';

import { Constants } from '@constants/constants';
import { SuperHero } from '@models/super-hero.interface';


@Pipe({
  name: 'imagePipe'
})
export class ImagePipe implements PipeTransform {

  transform(superHero: SuperHero): string {
    return superHero.urlImage ?? Constants.NO_IMAGE;
  }

}
