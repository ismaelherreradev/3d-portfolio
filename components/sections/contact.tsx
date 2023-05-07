'use client';

import { motion } from 'framer-motion';

import { slideIn, staggerContainer } from '@/lib/motion';

import EarthCanvas from '../canvas/Earth';

export default function Contact() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className='padding relative z-0 mx-auto max-w-7xl'
    >
      <div className='flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row'>
        <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='h-[350px] md:h-[550px] xl:h-auto xl:flex-1'>
          <EarthCanvas />
        </motion.div>
      </div>
    </motion.section>
  );
}
