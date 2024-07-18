import React from 'react';
import { HuntLogo } from '../shared/Icons';

export const MainFooter: React.FC = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-5 py-6">
        <HuntLogo />
        <p className="text-xs text-black/50">&copy; 2024 Hunt Labs Inc.</p>
      </div>
    </div>
  );
};
