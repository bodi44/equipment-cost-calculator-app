import { useEffect, useMemo, useState } from 'react';
import Select from 'react-select';
import styles from './App.module.css';
import { useForm, Controller } from 'react-hook-form';
import Plot from 'react-plotly.js';
import { ICostFormValues } from '../interfaces.ts';
import { calculateComponentsTotalCost } from '../utils.ts';
import { ANALYTIC_EQUATIONS_CONFIG } from '../constants.ts';

export default function App() {
  const { handleSubmit, watch, formState, control, register } = useForm<ICostFormValues>({
    mode: 'onChange',
    values: {
      devices: [],
      entriesNumber: null,
      nodesNumber: null,
      operandsNumber: null,
    },
  });
  const formValues = watch();
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

  useEffect(() => {
    if (formState.isValid && !formState.isValidating) {
      console.log('formValid');
    }
  }, [formState, formState.isValidating, formValues, handleSubmit]);

  const ifAnyDeviceHaveMultipleEntries = useMemo(
    () => formValues.devices.some((item) => item.hasNodes),
    [formValues.devices]
  );

  return (
    <>
      <h1 className={styles.title}>Програма обчислення витрат обладнання у вентилях</h1>

      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <p className={styles.inputRow}>
          <label className={styles.inputLabel} htmlFor='select'>
            Найменування функціональних вузлів
          </label>
          <Controller
            control={control}
            name='devices'
            render={({ field }) => (
              <Select
                id='select'
                isMulti
                placeholder='Оберіть опцію...'
                options={ANALYTIC_EQUATIONS_CONFIG}
                value={field.value}
                onChange={(newValue) => {
                  field.onChange(newValue);
                }}
              />
            )}
          />
        </p>

        <p className={styles.inputRow}>
          <label className={styles.inputLabel} htmlFor='n-input'>
            Кількість функціональних вузлів n
          </label>
          <input
            className={styles.input}
            id='n-input'
            type='number'
            placeholder='Введіть значення n...'
            {...register('nodesNumber')}
          />
        </p>

        <p className={styles.inputRow}>
          <label className={styles.inputLabel} htmlFor='n-input'>
            Кількість операндів N(опціонально)
          </label>
          <input
            className={styles.input}
            id='n-input'
            type='number'
            placeholder='Введіть значення N...'
            {...register('operandsNumber')}
          />
        </p>

        {ifAnyDeviceHaveMultipleEntries && (
          <p className={styles.inputRow}>
            <label className={styles.inputLabel} htmlFor='n-input'>
              Кількість входів m
            </label>
            <input
              className={styles.input}
              id='n-input'
              type='number'
              placeholder='Введіть значення m...'
              {...register('entriesNumber')}
            />
          </p>
        )}

        <button type='submit' className={styles.submitButton}>
          Розрахувати
        </button>
      </form>

      {totalCost > 0 && plotCosts.length && (
        <div className={styles.title}>
          <h2 className={styles.title}>Результати обчислень</h2>
          <p className={styles.title}>Витрати на обране обладнання: {totalCost}</p>

          <Plot
            data={[
              {
                x: plotNValues,
                y: plotCosts,
                type: 'scatter',
                mode: 'lines+markers',
                marker: { color: 'blue' },
              },
            ]}
            layout={{
              width: 800,
              height: 500,
              title: 'Залежність Витрат на обладнання від кількості операндів N',
              xaxis: { title: 'Кількість операндів N' },
              yaxis: { title: 'Витрати на обладнання' },
            }}
          />
        </div>
      )}
    </>
  );
}
