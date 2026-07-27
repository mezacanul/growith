export interface LandingPageAssets {
  clientesGrowith: string;
  luisCoach: string;
  clientaGrowith: string;
  brochure: string;
}

export interface LandingPageTestimoniales {
  [key: string]: string;
}

export interface ProximaGeneracion {
  "fecha-inicio": string;
  duracion: string;
  horario: string;
  modalidad: string;
  ciudad: string;
  inversion: string;
  "opciones-pago": string;
  "lugares-disponibles": string;
}

export interface LandingPageFooter {
  instagram: string;
  linkedin: string;
  facebook: string;
  correo: string;
  telefono: string;
  ubicacion: string;
}

export interface LandingPageData {
  testimoniales: LandingPageTestimoniales;
  "proxima-generacion": ProximaGeneracion;
  footer: LandingPageFooter;
  assets: LandingPageAssets;
}
