import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export const PaginationBlock: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-6 lg:py-10">
      <nav className="isolate flex flex-1 items-stretch justify-between sm:grow-0 lg:gap-3">
        <Link
          href="#"
          className="relative z-20 inline-flex w-10 items-center justify-center py-2.5 text-black hover:bg-gray-100 focus:outline-0"
        >
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </Link>

        <div className="flex gap-2 lg:gap-3">
          <Link
            href="#"
            className="inline-flex min-w-10 items-center justify-center bg-black px-2 py-2 text-center text-sm font-semibold text-white"
          >
            1
          </Link>
          <Link
            href="#"
            className="inline-flex min-w-10 items-center justify-center bg-white px-2 py-2 text-center text-sm font-semibold text-black hover:bg-gray-100"
          >
            2
          </Link>
          <Link
            href="#"
            className="inline-flex min-w-10 items-center justify-center bg-white px-2 py-2 text-center text-sm font-semibold text-black hover:bg-gray-100"
          >
            3
          </Link>
          <span className="relative inline-flex items-center bg-white py-2 text-sm font-semibold text-black">
            ...
          </span>
          <Link
            href="#"
            className="inline-flex min-w-10 items-center justify-center bg-white px-2 py-2 text-center text-sm font-semibold text-black hover:bg-gray-100"
          >
            12
          </Link>
        </div>
        <Link
          href="#"
          className="relative z-20 inline-flex w-10 items-center justify-center py-2.5 text-black hover:bg-gray-100 focus:outline-0"
        >
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </Link>
      </nav>
    </div>
  );
};
