import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from './ui/container';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';

const projects = [
  {
    name: 'Tribute Page',
    description:
      'This project was one of my first projects, using HTML and CSS. This tribute page for Dr. Norman Borlaug the man who saved a billion lives',
    image: '/tribute-page.png',
    github: 'https://github.com/Zimbini9617/tribute-page',
    link: 'https://fascinating-smakager-dba1c4.netlify.app/',
  },
  {
    name: 'Portfolio',
    description: 'This is not a real portfolio, it is just a portfolio project that I was working on and to learn how to create a portfolio.',
    image: '/portfolio.png',
    github: 'https://github.com/Zimbini9617/portfolio',
    link: 'https://adorable-dasik-acc30a.netlify.app/',
  },
  {
    name: 'Blog Page',
    description:
      'This project is a blog page with you login page or sign up page.',
    image: '/blog-page.png',
    github: 'https://github.com/Zimbini9617/Blog-Project',
    link: 'https://peppy-haupia-87730a.netlify.app/auth',
  },
  {
    name: 'E-commerce Website',
    description:
      'This is a clone of an e-commerce website, built using ReactJS, JavaScript, HTML and tailwindcss & css to style it.',
    image: '/e-commerce-website.png',
    github: 'https://github.com/Zimbini9617/zeeonlineshopping',
    link: 'https://zeeonlineshopping.vercel.app/',
  },
  {
    name: 'Bug Tracker Website',
    description:
      'This is a bug tracker website project',
    image: '/bug-tracker.png',
    github: 'https://github.com/Zimbini9617/bug-tracker',
    link: 'https://bug-tracker-kappa.vercel.app/',
  },
];

const ProjectsSection = () => {
  return (
    <Container>
      <section id="projects" className="my-5">
        <h1 className="my-10 text-center font-bold text-4xl  text-purple-700">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-purple-400 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-28">
          {projects.map((project, idx) => {
            return (
              <div key={idx}>
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={800}
                        height={800}
                        priority
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Container>
  );
};

export default ProjectsSection;
