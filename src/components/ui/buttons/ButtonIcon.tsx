import React, { ReactElement } from 'react';

export const ButtonIcon: React.FC<{
  onClick: () => void;
  label: string;
  icon: ReactElement;
  disabled?: boolean;
  classNames: string;
}> = ({ onClick, label, icon, classNames, disabled }) => {
  return (
    <button
      type="button"
      className={`flex items-center justify-center text-black  focus:outline-none focus:ring-0 ${classNames || ''} ${disabled ? 'opacity-40' : 'lg:hover:bg-gray-100'}`}
      onClick={onClick}
      disabled={disabled || false}
    >
      <span className="absolute -inset-0.5" />
      <span className="sr-only">{label}</span>
      {icon}
    </button>
  );
};
