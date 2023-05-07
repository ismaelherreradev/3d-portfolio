'use client';
import Link from 'next/link';
import { useState } from 'react';

import { navLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { styles } from '@/styles/commons';

export default function Navbar() {
  const [active, setActive] = useState('');

  return (
    <nav className={cn(`${styles.paddingX}, bg-primary fixed top-0 z-20 flex w-full items-center py-5`)}>
      <div className='mx-auto flex w-full max-w-7xl items-center justify-between'>
        <Link
          href='/'
          className='decoration-none flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <p className='cursor-pointer text-lg font-bold'>
            <span className='text-white'>Ismael </span>
            <span className='hidden sm:block'>Herrera</span>
          </p>
        </Link>
        <ul className='hidden list-none flex-row gap-10 sm:flex'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={cn(
                active === link.title ? 'text-white' : 'text-secondary',
                'cursor-pointer text-lg font-medium transition-colors duration-75 hover:text-white'
              )}
              onClick={() => setActive((prev) => (prev === link.title ? prev : link.title))}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
