import React, {useState} from 'react';
import './App.css';

const App = () => {

  // const [targetLength, setTargetLength] = useState(null)
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(20);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const numbers = '0123456789'
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const specialCharacters = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é"

  const handleGeneratePassword = () => {
    let charcterList = '';
    if (includeUpperCase) {
      charcterList += upperCaseLetters;
    }
    if (includeLowerCase) {
      charcterList += lowerCaseLetters;
    }
    if (includeNumbers) {
      charcterList += numbers;
    }
    if (includeSymbols) {
      charcterList += specialCharacters;
    }

    setPassword(createPassword(charcterList));
  }

  const createPassword = (charcterList: string) => {
    let password = '';
    const charcterListLength = charcterList.length;

    for (let i = 0; i < passwordLength; i++) {
      const charlistIndex = Math.round(Math.random() * charcterListLength);
      password += charcterList.charAt(charlistIndex);
    }
    return password;
  }

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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordLength(Number(e.target.value))}
          min='10'
          max='20'
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
        <button onClick={handleGeneratePassword}>GENERATE PASSWORD</button>
      </div>
    </div>
  );
}

export default App;
