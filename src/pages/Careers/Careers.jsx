import React from 'react';
import Header from '../shared/Header/Header';

const Careers = () => {
  return (
    <div >
        <Header></Header>
      <header className='container mx-auto mt-10'>
        <h1 className='text-xl mt-2 mb-2'>Careers at The Dragon News</h1>
      </header>
      
      <section>
        <h2>Open Positions</h2>
        <ul>
          <li>
            <h3>Journalist</h3>
            <p>We are looking for talented journalists with a passion for storytelling and a keen interest in current events. Responsibilities include researching, writing, and editing news articles across various beats.</p>
          </li>
         
        </ul>
      </section>

      <section>
        <h2>Application Process</h2>
        <p>If you are interested in joining our team, please submit your resume, cover letter, and writing samples to email@example.com. In your cover letter, highlight your relevant experience and why you are passionate about journalism.</p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>If you have any questions regarding the application process or would like more information, please contact our Human Resources department at HRemail@example.com.</p>
      </section>
    </div>
  );
};

export default Careers;
