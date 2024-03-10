import Plot from 'react-plotly.js';
import styles from './CalcResults.module.css';

interface IPlotConfig {
  title: string;
  xTitle: string;
  yTitle: string;
}

interface ICalcResultsProps {
  results: string;
  plotXValues: number[];
  plotYValues: number[];
  plotConfig: IPlotConfig;
}

export function CalcResults({ results, plotYValues, plotXValues, plotConfig }: ICalcResultsProps) {
  return (
    <div className={styles.container}>
      <h2>Результати обчислень</h2>
      <p>{results}</p>

      <Plot
        data={[
          {
            x: plotXValues,
            y: plotYValues,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'blue' },
          },
        ]}
        layout={{
          width: 800,
          height: 500,
          title: plotConfig.title,
          xaxis: { title: plotConfig.xTitle },
          yaxis: { title: plotConfig.yTitle },
        }}
      />
    </div>
  );
}
