'use client';
import Image from 'next/image';
import Link from 'next/link';
import { HTMLAttributes, useState } from 'react';

import { navLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { close, menu } from '@/public';
import { styles } from '@/styles/commons';

function NavbarLinks(props: HTMLAttributes<HTMLUListElement>) {
  const [active, setActive] = useState('');

  return (
    <ul className={props.className}>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={cn(
            active === link.title ? 'text-white' : 'text-secondary',
            'cursor-pointer text-base  font-medium transition-colors duration-75 hover:text-white md:text-lg'
          )}
          onClick={() => setActive((prev) => (prev === link.title ? prev : link.title))}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default function Navbar() {
  const [active, setActive] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <span className='text-white'>Ismael Herrera</span>
          </p>
        </Link>
        <NavbarLinks className='hidden list-none flex-row gap-10 sm:flex' />
        <div className='flex flex-1 items-center justify-end sm:hidden'>
          <Image
            src={isMenuOpen ? close : menu}
            alt='menu'
            className='h-7 w-7 cursor-pointer object-contain'
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />

          <div
            className={cn(
              !isMenuOpen ? 'hidden' : 'flex',
              'black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6'
            )}
          >
            <NavbarLinks className='flex flex-col items-start justify-end gap-4' />
          </div>
        </div>
      </div>
    </nav>
  );
}
