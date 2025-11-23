const BASE_API_URL = 'https://api.sst.empodify.com';
const ATS_TITLE = 'ATS';
const ADMINISTRACION_TITLE = 'ADMINISTRACION';
const EMPODIFY_TITLE = 'EMPODIFY';

export const environment = {
  production: false,
  apis: {
    auth: `${BASE_API_URL}/ms-auth/v1`,
    ats: `${BASE_API_URL}/ms-ats/v1`,
    padron: `${BASE_API_URL}/ms-padron/v1`,
  },
  appKEYTOKEN: '26122023',
  firebaseConfig: {
    apiKey: 'AIzaSyBD6ItVZWyUb68qy9hP0po7S-h8BOaMxzo',
    authDomain: 'yarviz.firebaseapp.com',
    projectId: 'yarviz',
    storageBucket: 'yarviz.appspot.com',
    messagingSenderId: '1050521133561',
    appId: '1:1050521133561:web:fb9c8d924f44c5f1e31d28',
  },
  app: "sst-backofice",
  stage: "dev",
  version: "1.0.0",
  domain: "http://localhost:4200/",
  name: "Backofice App",
  titles: {
    auth: {
      login: "Login",
      register: "Register",
    },
    main: "Backofice",
    dashboard: "Dashboard",
    notFound: "Página no encontrada",
    ats: {
      main: ATS_TITLE,
      reportes: `${ATS_TITLE} - Reportes`,
      tipos: `${ATS_TITLE} - Tipos`,
      prc: `${ATS_TITLE} - Peligros / Riesgos / Control`,
      matrizGenerales: `${ATS_TITLE} - Matriz Generales`,
      matrizEspecificos: `${ATS_TITLE} - Matriz Especificos`,
    },
    administracion: {
      main: ADMINISTRACION_TITLE,
      empresas: `${ADMINISTRACION_TITLE} - Empresas`,
      actividadesResponsables: `${ADMINISTRACION_TITLE} - Actividades y Responsabilidades`,
    },
    empodify: {
      main: EMPODIFY_TITLE,
      ubigeo: `${EMPODIFY_TITLE} - Ubigeo`,
      parametrosGlobales: `${EMPODIFY_TITLE} - Parametros Globales`,
      modulos: `${EMPODIFY_TITLE} - Modulos`,
    }
  }
};
