'use client';
import Link from 'next/link';
import { ButtonIcon } from '../buttons/ButtonIcon';
import { HuntLogo, MenuIcon } from '../shared/Icons';
import { classNames } from '../shared/functions';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { MainNavMobile } from './MainNavMobile';

export const NAV_ITEMS = [
  { name: 'Home', id: 'home', route: '/' },
  { name: 'Products', id: 'products', route: '/products' },
];

export const MainHeader: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navActive, setNavActive] = useState<string>('/');

  useEffect(() => {
    const initialSelectedMenuItem = NAV_ITEMS.find(
      ({ route }) => route === pathname,
    );
    if (initialSelectedMenuItem) {
      setNavActive(initialSelectedMenuItem.route);
    }
  }, [pathname]);

  return (
    <header className="sticky top-0 z-20 w-full border-b bg-white">
      <div className="relative mx-auto flex h-14 w-full max-w-screen-2xl items-center justify-between bg-white px-3 sm:px-5">
        <div className="z-20 flex items-center lg:hidden">
          {/* MOBILE MENU BUTTON */}
          <ButtonIcon
            onClick={() => setMobileMenuOpen(true)}
            label="Open main menu"
            icon={<MenuIcon aria-hidden="true" />}
            classNames="relative h-10 w-10"
          />
        </div>

        {/* DESKTOP NAV */}
        <div className="z-20 hidden gap-6 lg:flex lg:self-stretch">
          <div className="flex gap-6">
            {NAV_ITEMS.map((item, i) => (
              <Link
                key={i}
                className={classNames(
                  navActive === item.route
                    ? 'border-black text-black'
                    : 'border-transparent text-black/60 hover:text-black',
                  'relative z-10 -mb-px flex items-center border-b-[3px] pt-1 text-sm font-medium transition-colors duration-200 ease-out focus:outline-none',
                )}
                href={item.route}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* BRAND */}
        <div className="absolute inset-0 z-20 m-auto flex w-14 items-center justify-center">
          <Link href="/" className="text-lg text-black">
            <span className="sr-only">Hunt.com</span>
            <HuntLogo aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* MOBILE NAV */}
      <MainNavMobile
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
};
