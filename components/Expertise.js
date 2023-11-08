import React from 'react';

const Expertise = () => {
  const expertiseList = [
    'Frontend Development: Proficient in building modern, responsive web applications using Next.js.',
    
    'Tailwind CSS Mastery: Expert in using Tailwind CSS to streamline the styling and design of web applications.',
    
    'Full-Stack Development: Capable of working on both frontend and backend aspects of web development.',
    
    'State Management: Skilled in implementing state management with tools like Redux and Context API.',
    
    'TypeScript Integration: Experience in incorporating TypeScript to enhance code quality and type safety.',
    
    'API Integration: Capable of integrating RESTful and GraphQL APIs into web applications.',

    'SEO Optimization: Knowledgeable in  enforcing SEO stylish practices to ameliorate website hunt machine rankings.',
    
    'Database Management: Proficient in working with databases, including MongoDB, for data  storehouse and  reclamation.',
    
    'Collaboration and cooperation: Effective communication and collaboration chops for working in development  brigades. ',

    'Stylish Practices: Strong commitment to following stylish coding practices, including  law reviews, testing, and  interpretation control using Git.',

    'Element Re-usability: complete in creating applicable UI  factors to enhance  law maintainability.',
    
    'Responsive Design: Endured in designing and developing websites that  acclimatize seamlessly to  colorful screen sizes and  bias.',
    
    'Deployment and Hosting: Proficient in deploying web applications to platforms like Vercel and Netlify.',
  ];

  return (
    <div className="">
      <h2 className="text-2xl font-semibold mb-4 text-purple-700">My Expertise Includes:</h2>
      <ul className="list-disc pl-6">
        {expertiseList.map((item, index) => (
          <li key={index} className="mb-4">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expertise;
