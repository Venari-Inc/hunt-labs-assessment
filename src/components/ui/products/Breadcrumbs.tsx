import React from 'react';

const Divider: React.FC = () => {
  return <span className="h-4 w-4 shrink-0 text-center text-black/60">/</span>;
};

export const Breadcrumbs: React.FC = () => {
  return (
    <nav className="flex pb-2 lg:border-t lg:pb-0 lg:pt-10">
      <ol role="list" className="flex text-xs font-medium text-black">
        <li className="relative flex">
          <a href="/" className="block py-1 hover:underline">
            Home
            <span className="absolute -inset-y-1 inset-x-0"></span>
          </a>
        </li>
        <li className="relative flex items-center">
          <Divider />
          <a href="#" className="block text-black hover:underline">
            Clothing
            <span className="absolute -inset-y-1 inset-x-0"></span>
          </a>
        </li>
        <li className="relative flex items-center">
          <Divider />
          <a href="#" className="block text-black hover:underline">
            Women
            <span className="absolute -inset-y-1 inset-x-0"></span>
          </a>
        </li>
        <li className="flex items-center">
          <Divider />
          <p className="text-black/60">Sweaters</p>
        </li>
      </ol>
    </nav>
  );
};
