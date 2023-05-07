'use client';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

import { ComputerCanvas } from './canvas';

export default function Hero() {
  return (
    console.log('Hero'),
    (
      <section className='relative mx-auto h-screen w-full'>
        <div className='paddingX absolute inset-0 top-[120px] mx-auto flex max-w-7xl flex-row items-start gap-5 px-6 sm:px-16'>
          <div className='mt-5 flex flex-col items-center justify-center'>
            <div className='h-5 w-5 rounded-full bg-[#915eff]' />
            <div className='violet-gradient h-40 w-1 sm:h-80' />
          </div>

          <div>
            <h1 className='heroHeadText'>
              Hi, I&apos;m <span className='text-[#915eff]'>Ismael</span>
            </h1>
            <p className={cn('heroSubText text-white-100 mt-2')}>
              I&apos;m a full-stack developer and designer. <br className='hidden sm:block' /> I love to build things
              that make people happy.
            </p>
          </div>
        </div>
        <ComputerCanvas />
        <div className='xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center'>
          <a href='#about'>
            <div className='border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2'>
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className='bg-secondary mb-1 h-3 w-3 rounded-full'
              />
            </div>
          </a>
        </div>
      </section>
    )
  );
}
