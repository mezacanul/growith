export interface AcademiaWebsite {
  clientSTR: string;
  folderID: string | null;
  websiteURL: string | null;
  period: string;
}

export type AcademiaList = AcademiaWebsite[];

export interface AcademiaPeriodGroup {
  period: string;
  websites: AcademiaList;
}
