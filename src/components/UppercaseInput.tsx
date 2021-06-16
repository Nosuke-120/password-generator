import React, { useState } from 'react';

interface Props {
  includeUpperCase: boolean
  setIncludeUpperCase: React.Dispatch<React.SetStateAction<boolean>>
}

const UppercaseInput:React.VFC<Props> = ({includeUpperCase, setIncludeUpperCase}) => {
  
  return (
    <div>
        <div className="check_lb">
        <label>Include Symbols</label>
        <input
          defaultChecked={includeUpperCase}
          type="checkbox"
          onChange={(e) => setIncludeUpperCase(e.target.checked)}
        />
      </div>
    </div>
  );
}
export default UppercaseInput