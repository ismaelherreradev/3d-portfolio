'use client';

import { cn } from '@/lib/utils';

// import {motion} from 'framer-motion'
import { ComputerCanvas } from './canvas';

export default function Hero() {
  return (
    <section className='relative mx-auto h-screen w-full'>
      <div className='absolute inset-0 top-[120px] mx-auto flex max-w-7xl flex-row items-start gap-5 px-6 sm:px-16'>
        <div className='mt-5 flex flex-col items-center justify-center'>
          <div className='h-5 w-5 rounded-full bg-[#915eff]' />
          <div className='violet-gradient h-40 w-1 sm:h-80' />
        </div>

        <div>
          <h1 className='heroHeadText'>
            Hi, I&apos;m <span className='text-[#915eff]'>Ismael</span>
          </h1>
          <p className={cn('heroSubText text-white-100 mt-2')}>
            I&apos;m a full-stack developer and designer. <br className='hidden sm:block' /> I love to build things that
            make people happy.
          </p>
        </div>
      </div>
      <ComputerCanvas />
    </section>
  );
}
