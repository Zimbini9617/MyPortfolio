// pages/about.js

import React from 'react';
import Container from '@/components/ui/container';
const skills = [
  { skill: 'HTML' },
  { skill: 'CSS' },
  { skill: 'SASS' },
  { skill: 'JavaScript' },
  { skill: 'Nodejs' },
  { skill: 'Express' },
  { skill: 'React' },
  { skill: 'Redux' },
  { skill: 'Next.js' },
  { skill: 'Tailwind CSS' },
  { skill: 'Radix UI' },
  { skill: 'Shadcn' },
  { skill: 'Git' },
  { skill: 'GitHub' },
  { skill: 'MongoDB' },
  { skill: 'Mysql' },
  { skill: 'Prisma client' },
];
const About = () => {
  return (
    <>
      <Container>
        <div className="px-4 flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0  md:flex-row md:text-left">
          <section className="py-6 md:w-1/2 ">
            <h2 className="text-2xl font-semibold text-[#7F056E]">About Me</h2>
            <h3 className="text-xl font-semibold my-2 text-[#57648C]">
              Full-Stack Web Developer
            </h3>
            <p className='text-[#C2B4D6]'>
              I am a Full-Stack Web Developer with 10 months
              experience in Web Development. My
              expertise include JavaScript, ReactJS, NextJS, Typescript,
              NodeJS, Express, MongoDB,Tailwind-CSS, Radix-UI, Shadcn. I
              specialize in providing high-quality services in frontend &
              backend development, MERN-Stack, Nextjs Projects. React js & Next
              js applications, landing pages, Company Website. I pride myself on
              writing SEO-friendly and clean code to ensure the best user
              experience.
            </p>
            <p className="my-2 text-[#C2B4D6]">
              I believe that you should{' '}
              <span className="font-bold text-[#A3C6C4]">
                never stop growing and learning
              </span>{' '}
              and that&#39;s what I strive to do. I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
            <br />

            <h3 className="text-xl font-semibold my-2 text-[#57648C]">Education</h3>
            <p className="my-2 text-[#C2B4D6]">
              I have recently graduated in Damelin College at Randburg Campus. I hold a diploma in Information Technology, which will equip me with valuable skills, knowledge and open various opportunities in the IT indusrty.
            </p>

            <br />
            <h3 className="text-xl font-semibold my-2 text-[#57648C]">Experience</h3>
            <h4 className="font-semibold text-[#57648C]">
              Intern @Velisa Africa Academy
            </h4>
            <p className="my-2 text-[#C2B4D6]">
              Working as Full-Stack Intern for the past 9 months. The skills I have acquired
              HTML, CSS, SASS, Javascript, React, Redux, Nodejs, Express, MongoDB,
              MERN Stack, Nextjs, Tailwind CSS and SEO.
            </p>

          </section>
          <section className="md:w-1/2 ">
            <div className="text-center md:w-1/2 md:text-left">
              <h1 className="text-2xl font-bold mb-6">My Skills</h1>
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start my-4">
                {skills.map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      className="bg-gray-200 px-4 py-2 mr-2 my-2 text-gray-500 rounded font-semibold"
                    >
                      {item.skill}
                    </p>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </Container>
    </>
  );
};

export default About;
