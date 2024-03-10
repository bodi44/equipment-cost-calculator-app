export interface ICostFormValues {
  devices: IDeviceItem[];
  nodesNumber: number | null;
  entriesNumber: number | null;
  operandsNumber: number | null;
}

export interface IDeviceItem {
  label: string;
  value: string;
  costFormula: (n?: number, m?: number) => number;
  speedFormula: (n?: number, m?: number) => number;
  hasNodes: boolean;
}
