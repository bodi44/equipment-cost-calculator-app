import { IDeviceItem } from './interfaces.ts';

export function calculateComponentsTotalCost(devices: IDeviceItem[], n?: number, m?: number, N = 1): number {
  return devices.reduce((previousValue, currentValue) => {
    return previousValue + N * currentValue.formula(n, m);
  }, 0);
}
