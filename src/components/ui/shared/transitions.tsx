import React, { Fragment } from 'react';
import { TransitionChild } from '@headlessui/react';

export const FadeInUp: React.FC<{ delay: string; children: any }> = ({
  delay,
  children,
}) => {
  return (
    <TransitionChild
      enter={`transition-all ease-in-out duration-700 ${delay}`}
      enterFrom="opacity-0 translate-y-6"
      enterTo="opacity-100 translate-y-0"
      leave="transition-all ease-in-out duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </TransitionChild>
  );
};

export const SlideFromBelow: React.FC<{ children: any }> = ({ children }) => {
  return (
    <TransitionChild
      as={Fragment}
      enter="transform transition ease-in-out duration-300"
      enterFrom="translate-y-full"
      enterTo="translate-y-0"
      leave="transform transition ease-in-out duration-300 delay-100"
      leaveFrom="translate-y-0"
      leaveTo="translate-y-full"
    >
      {children}
    </TransitionChild>
  );
};

export const SlideFromRight: React.FC<{ children: any }> = ({ children }) => {
  return (
    <TransitionChild
      as={Fragment}
      enter="transform transition ease-in-out duration-500"
      enterFrom="translate-x-full"
      enterTo="translate-x-0"
      leave="transform transition ease-in-out duration-500 delay-100"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-full"
    >
      {children}
    </TransitionChild>
  );
};

export const SlideFromLeft: React.FC<{ children: any }> = ({ children }) => {
  return (
    <TransitionChild
      as={Fragment}
      enter="transform transition ease-in-out duration-300"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transform transition ease-in-out duration-300 delay-100"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
    >
      {children}
    </TransitionChild>
  );
};
