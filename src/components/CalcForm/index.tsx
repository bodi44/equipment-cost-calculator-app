import styles from '../../App/App.module.css';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';
import { ANALYTIC_EQUATIONS_CONFIG } from '../../constants.ts';
import { ICostFormValues } from '../../interfaces.ts';
import { useMemo } from 'react';

interface ICalcFormProps {
  onSubmit: (data: ICostFormValues) => void;
}

export function CalcForm({ onSubmit }: ICalcFormProps) {
  const { handleSubmit, control, register, watch } = useFormContext<ICostFormValues>();
  const formValues = watch();

  const ifAnyDeviceHaveMultipleEntries = useMemo(
    () => formValues.devices.some((item) => item.hasNodes),
    [formValues.devices]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
  );
}
