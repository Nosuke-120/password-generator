import React, {useState} from 'react';
import './App.css';

const App = () => {
  const password_base = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // const [targetLength, setTargetLength] = useState(null)
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(20);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);


  return (
    <div>
      <h3>Password Generator</h3>
      <div>{password}</div>
      <label>Length</label>
      <div>
        <label>Password Length</label>
        <input
          defaultValue={passwordLength}
          type="number"
          onChange={(e) => setPasswordLength(e.target.value)}
          min='10'
          max='30'
        />
      </div>

      <div className="check_lb">
        <label>Password Length</label>
        <input
          defaultChecked={includeUpperCase}
          type="checkbox"
          onChange={(e) => setIncludeUpperCase(e.target.checked)}
        />
      </div>

      <div className="check_lb">
        <label>Include Uppercase Letters</label>
        <input
          defaultChecked={includeLowerCase}
          type="checkbox"
          onChange={(e) => setIncludeLowerCase(e.target.checked)}
        />
      </div>

      <div className="check_lb">
        <label>Include Lowercase Letters</label>
        <input
          defaultChecked={includeLowerCase}
          type="checkbox"
          onChange={(e) => setIncludeLowerCase(e.target.checked)}
        />
      </div>

      <div className="check_lb">
        <label>Include Numbers</label>
        <input
          defaultChecked={includeNumbers}
          type="checkbox"
          onChange={(e) => setIncludeNumbers(e.target.checked)}
        />
      </div>

      <div className="check_lb">
        <label>Include Symbols</label>
        <input
          defaultChecked={includeSymbols}
          type="checkbox"
          onChange={(e) => setIncludeSymbols(e.target.checked)}
        />
      </div>
      <div>
        <button onClick={generatePassword}>GENERATE PASSWORD</button>
      </div>
    </div>
  );
}

export default App;
