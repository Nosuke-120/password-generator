import React, { useState } from 'react';

interface Props {
  includeLowerCase: boolean
  setIncludeLowerCase: React.Dispatch<React.SetStateAction<boolean>>
}

const LowercaseInput:React.VFC<Props> = ({includeLowerCase, setIncludeLowerCase}) => {
  
  return (
    <div>
      <label>Include Lowercase Letters</label>
      <input
        defaultChecked={includeLowerCase}
        type="checkbox"
        onChange={(e) => setIncludeLowerCase(e.target.checked)}
      />
  </div>
);
}
export default LowercaseInput