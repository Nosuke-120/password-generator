import React, { useState } from 'react';

interface Props {
  passwordLength: number
  setPasswordLength: React.Dispatch<React.SetStateAction<number>>
}

const PasswordLength:React.VFC<Props> = ({passwordLength, setPasswordLength}) => {
  
  return (
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
);
}
export default PasswordLength