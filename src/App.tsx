import { useState } from 'react';
import './App.css';
import { FetchExample, TimerExample } from './components';

function App() {
  const [selected, setSelected] = useState<string>('FetchExample');

  return (
    <div style={styles.appContainer}>
      <div>
        <button
          style={{ backgroundColor: selected === 'FetchExample' ? '#42eff5' : 'white' }}
          onClick={() => setSelected('FetchExample')}
        >
          Fetch Example
        </button>
        <button
          style={{ backgroundColor: selected === 'TimerExample' ? '#42eff5' : 'white' }}
          onClick={() => setSelected('TimerExample')}
        >
          Timer Example
        </button>
      </div>
      <div>
        {selected === 'FetchExample' ? <FetchExample /> : null}
        {selected === 'TimerExample' ? <TimerExample /> : null}
      </div>
    </div>
  );
}

const styles = {
  appContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column' as 'column',
  }
};

export default App;
