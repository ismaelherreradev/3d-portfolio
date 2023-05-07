'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { testimonials } from '@/constants';
import { fadeIn, staggerContainer, textVariant } from '@/lib/motion';
import { Testimonials } from '@/types';

function FeedbackCard({ index, testimonial, name, designation, company, image }: Testimonials & { index: number }) {
  return (
    <motion.div
      variants={fadeIn('', 'spring', index * 0.5, 0.75)}
      className='bg-black-200 xs:w-[320px] w-full rounded-3xl p-10'
    >
      <p className='text-[48px] font-black text-white'>&quot;</p>

      <div className='mt-1'>
        <p className='text-[18px] tracking-wider text-white'>{testimonial}</p>

        <div className='mt-7 flex items-center justify-between  gap-1'>
          <div className='flex flex-1 flex-col'>
            <p className='text-[16px] font-medium text-white'>
              <span className='blue-text-gradient'>@</span> {name}
            </p>
            <p className='text-secondary mt-1 text-[12px]'>
              {designation} of {company}
            </p>
          </div>

          <Image
            width={40}
            height={40}
            src={image}
            alt='feedback_by-${name}'
            className='h-10 w-10 rounded-full object-cover'
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Feedbacks() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className='padding relative z-0 mx-auto max-w-7xl'
    >
      <div className='bg-black-100 mt-12 rounded-[20px]'>
        <div className='bg-tertiary padding min-h-[300px] rounded-2xl'>
          {/* @ts-ignore */}
          <motion.div variants={textVariant()}>
            <p className='sectionSubText'>What others say</p>
            <h2 className='sectionHeadText'>Testimonials.</h2>
          </motion.div>
        </div>
        <div className='paddingX -mt-20 flex flex-wrap gap-7 pb-14'>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
