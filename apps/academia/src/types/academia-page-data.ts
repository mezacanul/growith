export interface AcademiaPageAssets {
  heroBg: string;
  logoGrowith: string;
  logoBusinessAcademy: string;
  letsGrowith: string;
  clientLogo: string;
  calendario: string;
}

export interface AcademiaEvento {
  fecha: string;
  hora: string;
  url: string;
  textoBtn: string;
  textoIzq: string;
  titulo: string;
  descripcion: string;
}

export interface DriveObject {
  embed?: string;
  webLink?: string;
}

export interface AcademiaDrive {
  implementaciones: DriveObject;
  impDestacadas: DriveObject;
  materialDidactico: DriveObject;
}

export interface AcademiaMeet {
  meetURL: string;
  dayOfCall: string;
  timeOfCall: string;
}

export interface YoutubeVideo {
  title: string;
  videoURL: string;
}

export interface AcademiaPageData {
  period: string;
  modality: string;
  assets: AcademiaPageAssets;
  evento: AcademiaEvento;
  drive: AcademiaDrive;
  meet: AcademiaMeet;
  youtube: YoutubeVideo[];
}
