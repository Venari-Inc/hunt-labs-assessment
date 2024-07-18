import { TransitionChild } from '@headlessui/react';
import React, { Fragment } from 'react';

const BackdropOverlay: React.FC = () => {
  return (
    <TransitionChild
      as={Fragment}
      enter="transition-opacity ease-in-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity ease-in-out duration-300 delay-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        aria-hidden="true"
      />
    </TransitionChild>
  );
};

export default BackdropOverlay;
