export class Constants {
    public readonly TITLE_TOOLBAR = 'Revisión de botiquines';
    public readonly SUBTITLE_TOOLBAR = 'Registro de solicitudes: Paso ';

    public readonly dtLABEL_BUTTON_PRINT = 'Imprimir';
    public readonly dtLABEL_BUTTON_ACCEPT = 'Aceptar';
    public readonly dtLABEL_BUTTON_UP = 'Subir';
    public readonly dtLABEL_BUTTON_NEW_REQUEST = 'Nueva Solicitud';
    public readonly dtLABEL_BUTTON_CONTINUE = 'Continuar';
    public readonly dtLABEL_BUTTON_SEARCH = 'Buscar';
    public readonly dtLABEL_BUTTON_SEARCH_CENTER = 'Buscar centros';
    public readonly dtLABEL_BUTTON_ADD = 'Añadir';
    public readonly dtLABEL_BUTTON_SIGN_SEND = 'Firmar y enviar';


    // Tipo de usuario 
    public readonly TYPE_ROL_USER = {
        representate: 'Representante',
        propio: 'Propio',
        apoderado: 'Apoderado'
    }

    // Tipo de solicitud
    public readonly REQUEST_TYPE = {
        inicial: '1', // Dotación inciial o rep. medicamentos
        periodica: '2', // Revisión periodica del botiquín
        documentacion: '3' // Documentación del botiquin
    }

    // Estado de la revisión de solicitud
    public readonly REVIEW_STATUS = {
        pendiente: 'P',
        subsanada: 'N',
        pendiente_subsanacion: 'B',
        iniciada: 'S'
    }


    constructor() { }
}