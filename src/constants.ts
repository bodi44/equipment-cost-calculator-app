import { v4 as uuidv4 } from 'uuid';
import { IDeviceItem } from './interfaces.ts';

export const BASE_URL = process.env.NODE_ENV === 'production' ? '/equipment-cost-calculator-app' : '';

export const APP_ROUTES = {
  costPage: `${BASE_URL}/cost`,
  speedPage: `${BASE_URL}/speed`,
};

export const ANALYTIC_EQUATIONS_CONFIG: IDeviceItem[] = [
  {
    value: uuidv4(),
    label: 'Тригер',
    costFormula: () => 6,
    speedFormula: () => 3,
    hasNodes: false,
  },
  {
    value: uuidv4(),
    label: 'Регістр',
    costFormula: (n = 1) => 7 * n,
    speedFormula: () => 3,
    hasNodes: false,
  },
  {
    value: uuidv4(),
    label: 'Однорозрядний суматор',
    costFormula: () => 18,
    speedFormula: () => 7,
    hasNodes: false,
  },
  {
    value: uuidv4(),
    label: 'Однорозрядний віднімач',
    costFormula: () => 18,
    speedFormula: () => 7,
    hasNodes: false,
  },
  {
    value: uuidv4(),
    label: 'Однорозрядний суматор-віднімач',
    costFormula: () => 20,
    speedFormula: () => 8,
    hasNodes: false,
  },
  {
    value: uuidv4(),
    label: 'n-розрядний суматор',
    costFormula: (n = 1) => 20 * n,
    speedFormula: (n = 1) => 7 * Math.log2(n),
    hasNodes: false,
  },
  {
    value: uuidv4(),
    label: 'n-розрядний віднімач',
    costFormula: (n = 1) => 21 * n,
    speedFormula: (n = 1) => 8 * Math.log2(n),
    hasNodes: false,
  },
  {
    value: uuidv4(),
    label: 'n-розрядний суматор-віднімач',
    costFormula: (n = 1) => 23 * n,
    speedFormula: (n = 1) => 8 * Math.log2(n),
    hasNodes: false,
  },
  {
    value: uuidv4(),
    label: 'm-вхідний, n-розрядний суматор',
    costFormula: (n = 1, m = 1) => (m - 1) * 20 * n,
    speedFormula: (n = 1, m = 1) => 7 * Math.log2(n) * Math.log2(m),
    hasNodes: true,
  },
  {
    value: uuidv4(),
    label: 'm-вхідний, n-розрядний конвеєрний суматор',
    costFormula: (n = 1, m = 1) => 27 * (m - 1) * n,
    speedFormula: () => 10,
    hasNodes: true,
  },
  {
    value: uuidv4(),
    label: 'Пристрій множення',
    costFormula: (n = 1) => 18 * n ** 2,
    speedFormula: (n = 1) => 14 * n,
    hasNodes: false,
  },
  {
    value: uuidv4(),
    label: 'Пристрій піднесення до квадрату',
    costFormula: (n = 1) => 9 * n ** 2,
    speedFormula: (n = 1) => 12 * n,
    hasNodes: false,
  },
  {
    value: uuidv4(),
    label: 'пристрій ділення',
    costFormula: (n = 1) => 20 * n ** 2,
    speedFormula: (n = 1) => 16 * n,
    hasNodes: false,
  },
  {
    value: uuidv4(),
    label: 'схема порівняння',
    costFormula: (n = 1) => 7 * n,
    speedFormula: (n = 1) => 3 * Math.log2(n),
    hasNodes: false,
  },
  {
    value: uuidv4(),
    label: 'двійковий лічильник',
    costFormula: (n = 1) => 12 * n,
    speedFormula: (n = 1) => 5 * Math.log2(n),
    hasNodes: false,
  },
  {
    value: uuidv4(),
    label: 'm-вхідний, n-розрядний комутатор',
    costFormula: (n = 1, m = 1) => 3 * m * n,
    speedFormula: (m = 1) => m,
    hasNodes: true,
  },
  {
    value: uuidv4(),
    label: 'm-вхідний, n-розрядний ПЗП',
    costFormula: (n = 1, m = 1) => 2 * m * n,
    speedFormula: (m = 1) => m + 3,
    hasNodes: true,
  },
  {
    value: uuidv4(),
    label: 'm-вхідний, n-розрядний ОЗП',
    costFormula: (n = 1, m = 1) => 2 * m * 3 * n,
    speedFormula: (m = 1) => m + 3,
    hasNodes: true,
  },
];
