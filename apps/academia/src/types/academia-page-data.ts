export interface AcademiaPageAssets {
  heroBg: string;
  growithLogo: string;
  businessAcademyLogo: string;
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

export interface AcademiaDrive {
  impURL: string;
  impDestacadasURL: string;
  resourcesURL: string;
}

export interface AcademiaMeet {
  meetURL: string;
  dayOfCall: string;
  timeOfCall: string;
}

export interface AcademiaPageData {
  period: string;
  modality: string;
  assets: AcademiaPageAssets;
  evento: AcademiaEvento;
  drive: AcademiaDrive;
  meet: AcademiaMeet;
}
