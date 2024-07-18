import React from 'react';
import Image from 'next/image';
import { ButtonIcon } from '../buttons/ButtonIcon';
import Link from 'next/link';
import { HeartIcon } from '../shared/Icons';

export const ProductTile: React.FC = () => {
  return (
    <div className="group relative flex flex-col gap-1">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-200 transition-opacity group-hover:opacity-70">
        <Image
          fill
          className="object-cover object-center"
          src="https://d2jgxrbnm3mr8f.cloudfront.net/266/eefdd5c1-ddde-5710-bdd7-32f99c60415e_luv-aj-puffy-heart-huggies-gold.jpg"
          alt="Luv Aj Puffy Heart Huggies Gold"
        />
      </div>

      <div className="flex grow flex-col">
        <Link
          href="#"
          className="block text-sm text-black/70 transition-colors after:absolute after:inset-0 after:block group-hover:text-black"
        >
          <p className="line-clamp-4">
            <span className="block font-bold text-black">Luv Aj</span>
            Puffy Heart Huggies Gold
          </p>
        </Link>

        {/* PRICE & FAVORITE */}
        <div className="flex min-h-9 items-center justify-between">
          <p className="text-md font-semibold text-gray-900">$65</p>
          <ButtonIcon
            onClick={() => {}}
            label="Add to Favorites"
            classNames="relative z-10 h-9 w-9 opacity-30 lg:hover:opacity-100"
            icon={<HeartIcon />}
          />
        </div>
      </div>
    </div>
  );
};
