import styles from '../../App/App.module.css';
import { FormProvider, useForm } from 'react-hook-form';
import { ICostFormValues } from '../../interfaces.ts';
import { useState } from 'react';
import { calculateComponentsTotalCost } from '../../utils.ts';
import { CalcForm } from '../../components/CalcForm';
import { CalcResults } from '../../components/CalcResults';

export default function Cost() {
  const formMethods = useForm<ICostFormValues>({
    mode: 'onChange',
    values: {
      devices: [],
      entriesNumber: null,
      nodesNumber: null,
      operandsNumber: null,
    },
  });
  const [totalCost, setTotalCost] = useState(0);
  const [plotCosts, setPlotCosts] = useState<number[]>([]);
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

    setTotalCost(cost);

    const nCosts: number[] = [];
    plotNValues.forEach((NItem) => {
      const cost = calculateComponentsTotalCost(data.devices, n, m, NItem);
      nCosts.push(cost);
    });
    setPlotCosts(nCosts);
  };

  return (
    <>
      <h1 className={styles.title}>Програма обчислення витрат обладнання у вентилях</h1>

      <FormProvider {...formMethods}>
        <CalcForm onSubmit={onSubmitHandler} />
      </FormProvider>

      {totalCost > 0 && plotCosts.length && (
        <CalcResults
          results={`Витрати на обране обладнання: ${totalCost}`}
          plotXValues={plotNValues}
          plotYValues={plotCosts}
          plotConfig={{
            title: 'Залежність Витрат на обладнання від кількості операндів N',
            xTitle: 'Кількість операндів N',
            yTitle: 'Витрати на обладнання',
          }}
        />
      )}
    </>
  );
}
