export class Constants {

    //ASSETS
    public static NO_IMAGE: string = 'assets/images/no_image_available.jpg';
    public static LOGO_IMAGE: string = 'assets/images/logoVictor.png';

    //DIALOG-DELETE
    public static MESSAGE_BUTTON_LABEL: string = 'Ok!';
    public static CREATED_HERO_MESSAGE: string = 'Héroe Añadido con éxito';
    public static UPDATED_HERO_MESSAGE: string = 'Héroe Actualizado con éxito';
    public static DELETED_HERO_MESSAGE: string = 'Héroe Borrado con éxito';
    public static MESSAGE_TITLE: string = 'Va a borrar el Super Héroe: ';
    public static MESSAGE_QUESTION: string = '¿Desea continuar?';
    public static MESSAGE_RESPONSE_YES: string = 'Sí';
    public static MESSAGE_RESPONSE_NO: string = 'No';
    public static DIALOG_WIDTH: string = '300px';
    public static MESSAGE_DURATION: number = 3000;

    //ENDPOINTS
    public static HEROES_ENDPOINT: string = 'heroes';

    //ERRORS
    public static ERROR: string = '404 Error - Page Not Found OR Check if mockserver is up (execute: npm run mock)\nMessage: ';

    //LABELS
    public static NAVBAR_TITLE: string = 'Angular\'s Super Heroes App';
    public static ERROR_BACK: string = 'Take me back to';
    public static HERO_NAME: string = 'Super Héroe : ';
    public static REAL_NAME: string = 'Identidad : ';
    public static COMPANY: string = 'Compañía : ';

    //NUMBERS
    public static ZERO: number = 0;
    public static ONE: number = 1;
    public static FIVE: number = 5;
    public static TWENTY: number = 20;

    //NOT-FOUND
    public static NOTFOUND_TITLE: string = "HA OCURRIDO UN ERROR";
    public static NOTFOUND_BUTTON_LABEL: string = "Recargar Página";

    //ROUTES
    public static ROOT: string = '/';
    public static ROUTE_LISTHEROES: string = '/heroes';
    public static ROUTE_NOT_FOUND: string = 'not-found';

}