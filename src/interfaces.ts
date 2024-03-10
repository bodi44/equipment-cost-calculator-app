export interface ICostFormValues {
  devices: IDeviceItem[];
  nodesNumber: number | null;
  entriesNumber: number | null;
  operandsNumber: number | null;
}

export interface IDeviceItem {
  label: string;
  value: string;
  formula: (n?: number, m?: number) => number;
  hasNodes: boolean;
}
