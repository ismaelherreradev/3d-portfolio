'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Tilt } from 'react-tilt';

import { projects } from '@/constants';
import { fadeIn, staggerContainer, textVariant } from '@/lib/motion';
import { github } from '@/public';
import { Projects } from '@/types';

function ProjectCard({ index, name, description, tags, image, source_code_link }: Projects & { index: number }) {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary w-full rounded-2xl p-5 sm:w-[360px]'
      >
        <div className='relative h-[230px] w-full'>
          <Image src={image} alt='project_image' className='h-full w-full rounded-2xl object-cover' />

          <div className='card-img_hover absolute inset-0 m-3 flex justify-end'>
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className='black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full'
            >
              <Image src={github} alt='source code' className='h-1/2 w-1/2 object-contain' />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-[24px] font-bold text-white'>{name}</h3>
          <p className='text-secondary mt-2 text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}

export default function Works() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`padding relative z-0 mx-auto max-w-7xl`}
    >
      {/* @ts-ignore */}
      <motion.div variants={textVariant()}>
        <p className='sectionSubText'>My work</p>
        <h2 className='sectionHeadText'>Projects.</h2>
      </motion.div>

      <div className='flex w-full'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]'
        >
          Following projects showcases my skills and experience through real-world examples of my work. Each project is
          briefly described with links to code repositories and live demos in it. It reflects my ability to solve
          complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </motion.section>
  );
}
