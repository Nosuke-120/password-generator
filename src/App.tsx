import React, {useState} from 'react';
import './App.css';
import PasswordLength from './components/PasswordLength';
import UppercaseInput from './components/UppercaseInput';
import LowercaseInput from './components/LowercaseInput';
import NumberInput from './components/NumberInput';
import SymbolInput from './components/SymbolInput';

const App = () => {

  // const [targetLength, setTargetLength] = useState(null)
  const [password, setPassword] = useState<string>('');
  const [passwordLength, setPasswordLength] = useState<number>(20);
  const [includeUpperCase, setIncludeUpperCase] = useState<boolean>(false);
  const [includeLowerCase, setIncludeLowerCase] = useState<boolean>(false);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);

  const numbers = '0123456789'
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const specialCharacters = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é"

  const handleGeneratePassword = () => {
    if (
      !includeUpperCase &&
      !includeLowerCase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      alert('Select atleast one option');
      setPassword('');
      return
    }

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
      <PasswordLength passwordLength={passwordLength} setPasswordLength={setPasswordLength}/>
      <UppercaseInput includeUpperCase={includeUpperCase} setIncludeUpperCase={setIncludeUpperCase}/>
      <LowercaseInput includeLowerCase={includeLowerCase} setIncludeLowerCase={setIncludeLowerCase}/>
      <NumberInput includeNumbers={includeNumbers} setIncludeNumbers={setIncludeNumbers}/>
      <SymbolInput includeSymbols={includeSymbols} setIncludeSymbols={setIncludeSymbols}/>
      <div>
        <button onClick={handleGeneratePassword}>GENERATE PASSWORD</button>
      </div>
    </div>
  );
}

export default App;
