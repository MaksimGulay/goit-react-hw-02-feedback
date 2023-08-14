import { B } from './B';

const styles = {
  backgroundColor: 'green',
  padding: 12,
};

export const A = ({ clicks, onIncriment, onReset }) => {
  return (
    <div style={styles}>
      <p>Clicks: {clicks}</p>
      <button onClick={onIncriment}>Incrinent </button>
      <B value={clicks} onReset={onReset} />
    </div>
  );
};
