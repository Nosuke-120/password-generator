import React, {useState} from 'react';
import './App.css';

const App = () => {
  const password_base = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // const [targetLength, setTargetLength] = useState(null)
  const [result, setResult] = useState('');

  // const handleLength = (e) => {
  //   setTargetLength(e.target.value)
  // }

  // const updateResult = () => {
  //   setResult(targetLength);
  // }

  const generatePassword = () => {
    let password = '';
    for (let i = 0; i <= 20; i++) {
      password += password_base.charAt(Math.floor(Math.random() * password_base.length));
    }
    setResult(password);
  }

  return (
    <div>
      <h3>Password Generator</h3>
      <div>{result}</div>
      <label>Length</label>
      <div>
        <input type="text"/>
      </div>
      <div>
        <label className="check_lb"><input type="checkbox" />Include Uppercase</label>
        <label className="check_lb"><input type="checkbox" />Include Lowercase</label>
        <label className="check_lb"><input type="checkbox" />Include Numbers</label>
        <label className="check_lb"><input type="checkbox" />Include Symbols</label>
      </div>
      <button onClick={generatePassword}>GENERATE PASSWORD</button>
    </div>
  );
}

export default App;
