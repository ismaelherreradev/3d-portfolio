'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Tilt } from 'react-tilt';

import { services } from '@/constants';
import { fadeIn, staggerContainer, textVariant } from '@/lib/motion';
import { Services } from '@/types';

function ServiceCard({ title, icon, ...props }: Services & { index: number }) {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', props.index * 0.5, 0.75)}
        className='green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]'
      >
        <div
          //  @ts-ignore
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5'
        >
          <Image src={icon} alt='web-development' className='h-16 w-16 object-contain' />

          <h3 className='text-center text-[20px] font-bold text-white'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

export default function About() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`padding relative z-0 mx-auto max-w-7xl`}
    >
      {/* @ts-ignore */}
      <motion.div variants={textVariant('1')}>
        <p className='sectionSubText'>Introduction</p>
        <h2 className='sectionHeadText'>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)} className='text-secondary mt-5 max-w-3xl text-[17px] leading-[30px]'>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. sed euismod, diam quis aliquam ultricies, nunc elit
        tempor magna, quis aliquam lorem ipsum dolor sit amet, consectetur adipiscing elit. sed euismod, diam quis
        aliquam ultricies, nunc elit tempor magna, quis aliquam lorem ipsum dolor sit amet, consectetur adipiscing elit.
        sed euismod, diam quis aliquam ultricies, nunc elit tempor magna, quis aliquam lorem ipsum dolor sit amet,
        consectetur adipiscing elit. sed euismod, diam quis aliquam ultricies, nunc elit tempor magna, quis aliquam
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </motion.section>
  );
}
