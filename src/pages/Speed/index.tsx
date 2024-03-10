import styles from '../../App/App.module.css';
import { FormProvider, useForm } from 'react-hook-form';
import { ICostFormValues } from '../../interfaces.ts';
import { useState } from 'react';
import { calculateComponentsTotalCost, calculateComponentsTotalSpeed } from '../../utils.ts';
import { CalcForm } from '../../components/CalcForm';
import { CalcResults } from '../../components/CalcResults';

export default function Speed() {
  const formMethods = useForm<ICostFormValues>({
    mode: 'onChange',
    values: {
      devices: [],
      entriesNumber: null,
      nodesNumber: null,
      operandsNumber: null,
    },
  });
  const [totalSpeed, setTotalSpeed] = useState(0);
  const [plotSpeed, setPlotSpeed] = useState<number[]>([]);
  const plotNValues = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

  const onSubmitHandler = (data: ICostFormValues): void => {
    const n = data.nodesNumber ? Number(data.nodesNumber) : undefined;
    const m = data.entriesNumber ? Number(data.entriesNumber) : undefined;
    const cost = calculateComponentsTotalCost(
      data.devices,
      n,
      m,
      data.operandsNumber ? Number(data.operandsNumber) : undefined
    );

    setTotalSpeed(cost);

    const nCosts: number[] = [];
    plotNValues.forEach((NItem) => {
      const cost = calculateComponentsTotalSpeed(data.devices, n, m, NItem);
      nCosts.push(cost);
    });
    setPlotSpeed(nCosts);
  };

  return (
    <>
      <h1 className={styles.title}>Програма обчислення швидкодії функціональних вузлів</h1>

      <FormProvider {...formMethods}>
        <CalcForm onSubmit={onSubmitHandler} />
      </FormProvider>

      {totalSpeed > 0 && plotSpeed.length && (
        <CalcResults
          results={`Швидкодія обраних функціональних вузлів: ${totalSpeed}`}
          plotXValues={plotNValues}
          plotYValues={plotSpeed}
          plotConfig={{
            title: 'Залежність швидкодії від кількості операндів N',
            xTitle: 'Кількість операндів N',
            yTitle: 'Швидкодія функціональних вузлів',
          }}
        />
      )}
    </>
  );
}
