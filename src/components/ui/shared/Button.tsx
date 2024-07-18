import React from 'react';
import { classNames } from './functions';
import Spinner from './Spinner';

export const Button: React.FC<
  React.PropsWithChildren<{
    danger?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
  }>
> = ({ danger, loading, disabled, children, onClick }) => {
  return (
    <button
      type="button"
      disabled={loading || disabled}
      className={classNames(
        loading || disabled
          ? 'opacity-60'
          : danger
            ? 'bg-red-500 hover:bg-red-700 focus:ring-red-700/50'
            : 'hover:bg-accent-primary/80 focus:ring-accent-primary/30',
        'bg-accent-primary flex items-center justify-center px-5 min-h-12 text-center font-medium text-white transition-colors focus:outline-none focus:ring-4 ',
      )}
      onClick={onClick}
    >
      {loading ? <Spinner color="white" /> : children}
    </button>
  );
};
