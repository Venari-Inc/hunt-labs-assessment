import React from 'react';
import { IconCheck } from './Icons';

export const Alert: React.FC<{
  message: string;
  type: 'success' | 'default';
}> = ({ message, type }) => {
  const color = (() => {
    switch (type) {
      case 'success':
        return 'text-green-600';
      case 'default':
        return 'text-black/80';
    }
  })();
  return (
    <div
      className={`text-sm font-medium justify-center flex items-center gap-2 ${color}`}
    >
      {type === 'success' ? <IconCheck width={16} height={16} /> : null}
      <p className="text-base">{message}</p>
    </div>
  );
};
