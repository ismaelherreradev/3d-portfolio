import type { StaticImageData } from 'next/image';

export type NavLink = {
  id: string;
  title: string;
};

export type Services = {
  title: string;
  icon: StaticImageData;
};

export type Technologies = {
  name: string;
  icon: StaticImageData;
};

export type Experiences = {
  title: string;
  company_name: string;
  icon: StaticImageData;
  iconBg: string;
  date: string;
  points: string[];
};

export type Testimonials = {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
};

export type Projects = {
  name: string;
  description: string;
  tags: Tags[];
  image: StaticImageData;
  source_code_link: string;
};

export type Tags = {
  name: string;
  color: string;
};
