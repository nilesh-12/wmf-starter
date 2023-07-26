import React, { useState, useEffect } from 'react';
interface Props {
  onChange?: (count: number) => any
}
export default function Counter({ onChange }: Props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    onChange?.(count)
  }, [count]);
  return (
    <div className="bg-blue-600 text-white 3x-l p-4">
      {count}
      <div>
        <button onClick={() => { setCount(c => c+1); }}>
          Add One
        </button>
      </div>
    </div>
  );
}
