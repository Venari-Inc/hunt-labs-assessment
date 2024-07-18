import React, { Fragment } from 'react';
import { Dialog, DialogPanel, Transition } from '@headlessui/react';
import { ButtonIcon } from '../buttons/ButtonIcon';
import { HuntLogo, IconClose } from '../shared/Icons';
import { NAV_ITEMS } from './MainHeader';
import BackdropOverlay from './BackdropOverlay';
import { SlideFromLeft } from '../shared/transitions';
import { useRouter } from 'next/navigation';

export const MainNavMobile: React.FC<{
  onClose: () => void;
  isOpen: boolean;
}> = ({ onClose, isOpen }) => {
  const router = useRouter();

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50 lg:hidden" onClose={onClose}>
        <BackdropOverlay />

        <SlideFromLeft>
          <DialogPanel className="fixed inset-y-0 left-0 right-10 z-50 flex flex-col overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-black/10">
            {/* HEADER */}
            <div className="relative flex h-14 items-center justify-between">
              <div className="absolute inset-y-0 left-3 flex items-center sm:hidden">
                {/* CLOSE */}
                <ButtonIcon
                  onClick={onClose}
                  label="Close main nav"
                  classNames="relative h-10 w-10"
                  icon={<IconClose />}
                />
              </div>

              <div className="flex flex-1 items-center justify-center">
                {/* BRAND */}
                <div className="flex flex-shrink-0 items-center">
                  <a href="/" className="text-lg text-black">
                    <span className="sr-only">Hunt.com</span>
                    <HuntLogo aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* NAV */}
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex flex-1 flex-col gap-12 py-2 pl-5">
                <ul>
                  {NAV_ITEMS.map((item, i) => (
                    <li key={i} className="border-b border-black/10">
                      <button
                        className="flex w-full items-center justify-between py-3.5 pr-5 text-sm"
                        onClick={() => {
                          router.push(item.route);
                          onClose();
                        }}
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DialogPanel>
        </SlideFromLeft>
      </Dialog>
    </Transition>
  );
};
