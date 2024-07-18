import React from 'react';

const Spinner: React.FC<{ color: 'white' | 'accent-primary' | 'black' }> = (
  _,
) => {
  const getFillColor = (color: string) => {
    switch (color) {
      case 'white':
        return 'text-white/60';
      case 'accent-primary':
        return 'text-accent-primary';
      case 'black':
      default:
        return 'text-black';
    }
  };
  return (
    <svg
      className={`h-8 w-8 animate-spin ${_.color === 'white' ? 'text-white/20' : 'text-black/10'}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className={getFillColor(_.color)}
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

export default Spinner;
