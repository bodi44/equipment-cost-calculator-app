import { IDeviceItem } from './interfaces.ts';

export function calculateComponentsTotalCost(devices: IDeviceItem[], n?: number, m?: number, N = 1): number {
  return devices.reduce((previousValue, currentValue) => {
    return previousValue + N * currentValue.costFormula(n, m);
  }, 0);
}

export function calculateComponentsTotalSpeed(devices: IDeviceItem[], n?: number, m?: number, N = 1): number {
  return devices.reduce((previousValue, currentValue) => {
    return previousValue + N * currentValue.speedFormula(n, m);
  }, 0);
}
