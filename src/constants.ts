import { v4 as uuidv4 } from 'uuid';
import { IDeviceItem } from './interfaces.ts';

export const ANALYTIC_EQUATIONS_LIST: IDeviceItem[] = [
  {
    value: uuidv4(),
    label: 'Тригер',
    formula: () => 6,
    hasNodes: false,
  },
  {
    value: uuidv4(),
    label: 'Регістр',
    formula: (n = 1) => 7 * n,
    hasNodes: false,
  },
  {
    value: uuidv4(),
    label: 'Однорозрядний суматор',
    formula: () => 18,
    hasNodes: false,
  },
  {
    value: uuidv4(),
    label: 'Однорозрядний віднімач',
    formula: () => 18,
    hasNodes: false,
  },
  {
    value: uuidv4(),
    label: 'Однорозрядний суматор-віднімач',
    formula: () => 20,
    hasNodes: false,
  },
  {
    value: uuidv4(),
    label: 'n-розрядний суматор',
    formula: (n = 1) => 20 * n,
    hasNodes: false,
  },
  {
    value: uuidv4(),
    label: 'n-розрядний віднімач',
    formula: (n = 1) => 21 * n,
    hasNodes: false,
  },
  {
    value: uuidv4(),
    label: 'n-розрядний суматор-віднімач',
    formula: (n = 1) => 23 * n,
    hasNodes: false,
  },
  {
    value: uuidv4(),
    label: 'm-вхідний, n-розрядний суматор',
    formula: (n = 1, m = 1) => (m - 1) * 20 * n,
    hasNodes: true,
  },
  {
    value: uuidv4(),
    label: 'm-вхідний, n-розрядний конвеєрний суматор',
    formula: (n = 1, m = 1) => 27 * (m - 1) * n,
    hasNodes: true,
  },
  {
    value: uuidv4(),
    label: 'Пристрій множення',
    formula: (n = 1) => 18 * n ** 2,
    hasNodes: false,
  },
  {
    value: uuidv4(),
    label: 'Пристрій піднесення до квадрату',
    formula: (n = 1) => 9 * n ** 2,
    hasNodes: false,
  },
  {
    value: uuidv4(),
    label: 'пристрій ділення',
    formula: (n = 1) => 20 * n ** 2,
    hasNodes: false,
  },
  {
    value: uuidv4(),
    label: 'схема порівняння',
    formula: (n = 1) => 7 * n,
    hasNodes: false,
  },
  {
    value: uuidv4(),
    label: 'двійковий лічильник',
    formula: (n = 1) => 12 * n,
    hasNodes: false,
  },
  {
    value: uuidv4(),
    label: 'm-вхідний, n-розрядний комутатор',
    formula: (n = 1, m = 1) => 3 * m * n,
    hasNodes: true,
  },
  {
    value: uuidv4(),
    label: 'm-вхідний, n-розрядний ПЗП',
    formula: (n = 1, m = 1) => 2 * m * n,
    hasNodes: true,
  },
  {
    value: uuidv4(),
    label: 'm-вхідний, n-розрядний ОЗП',
    formula: (n = 1, m = 1) => 2 * m * 3 * n,
    hasNodes: true,
  },
];
