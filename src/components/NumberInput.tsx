import React, { useState } from 'react';

interface Props {
  includeNumbers: boolean
  setIncludeNumbers: React.Dispatch<React.SetStateAction<boolean>>
}

const NumberInput:React.VFC<Props> = ({includeNumbers, setIncludeNumbers}) => {
  
  return (
    <div className="check_lb">
      <label>Include Numbers</label>
      <input
        defaultChecked={includeNumbers}
        type="checkbox"
        onChange={(e) => setIncludeNumbers(e.target.checked)}
      />
    </div>
);
}
export default NumberInput