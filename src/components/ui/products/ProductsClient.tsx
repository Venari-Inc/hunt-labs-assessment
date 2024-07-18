'use client';
import React, { useState } from 'react';
import { ProductTile } from './ProductTile';
import { PaginationBlock } from './PaginationBlock';
import { Breadcrumbs } from './Breadcrumbs';

export const ProductsClient: React.FC = () => {
  const [aboutExpanded, setAboutExpanded] = useState(false);

  return (
    <div className="flex grow flex-col py-6 lg:flex-col-reverse lg:py-10">
      <Breadcrumbs />

      <div className="flex flex-col gap-6 lg:gap-10">
        <div className="space-y-2">
          <h1 className="text-5xl">Sweaters</h1>
          <div className="group relative flex">
            <p className={`${aboutExpanded ? '' : 'line-clamp-1'}`}>
              Boost your cold-weather closet with Hunt&apos;s edit of new-season
              knitwear. From cozy cardigans and ponchos that are ideal for
              layering, to perennially stylish sweaters and turtlenecks, this
              knitwear collection can be relied on year-round. Look out for
              cable-knits, zipped sweaters and sleeveless styles.
            </p>
            {aboutExpanded ? null : (
              <button
                onClick={() => setAboutExpanded(!aboutExpanded)}
                className="relative font-bold underline hover:no-underline"
              >
                <span className="absolute -inset-1.5" />
                <span>more</span>
              </button>
            )}
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 xl:grid-cols-5 xl:gap-y-8">
          <ProductTile />
          <ProductTile />
          <ProductTile />
          <ProductTile />
          <ProductTile />
          <ProductTile />
          <ProductTile />
          <ProductTile />
          <ProductTile />
          <ProductTile />
          <ProductTile />
          <ProductTile />
          <ProductTile />
          <ProductTile />
          <ProductTile />
          <ProductTile />
          <ProductTile />
          <ProductTile />
          <ProductTile />
          <ProductTile />
        </div>

        {/* PAGINATION */}
        <PaginationBlock />
      </div>
    </div>
  );
};
