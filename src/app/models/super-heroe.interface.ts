import { Company } from "./company.interface";

export interface SuperHero {
    
    id?:        number;
    heroName:   string;
    realName:   string;
    company:    Company;
    urlImage?:  string;
    
}