import React, { useState } from 'react';

interface Props {
  includeSymbols: boolean
  setIncludeSymbols: React.Dispatch<React.SetStateAction<boolean>>
}

const SymbolInput:React.VFC<Props> = ({includeSymbols, setIncludeSymbols}) => {
  
  return (
    <div className="check_lb">
      <label>Include Symbols</label>
      <input
        defaultChecked={includeSymbols}
        type="checkbox"
        onChange={(e) => setIncludeSymbols(e.target.checked)}
      />
    </div>
);
}
export default SymbolInput