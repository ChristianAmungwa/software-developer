import React from 'react';
import Header from './Header';
import Column from './Column';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <div className="columns">
        <Column 
          title="About Me" 
          aboutMeText="I am a front-end software developer with several years of experience building and delivering websites to various clients. While I primarily use React and JavaScript to build websites, I have done the same using Python, and Django." 
          isAboutMe={true}
        />
        <Column 
          title="Skills" 
          fields={['React', 'JavaScript', 'React Hooks', 'Python', 'Django', 'HTML5', 'CSS', 'Bootstrap 5', 'DOM Manipulation', 'Git', 'GitHub', 'Firebase', 'Web Design', 'Stripe API']} 
        />
        <Column 
          title="Projects" 
          fields={[    
            {name: 'A Clothing Store', url: 'https://clothing-store-db-7dd04.web.app/'},
            {name: 'A Netflix Clone (Webflix)', url: 'https://webflix-379ad.web.app/'},
            {name: 'Trivia Quiz', url: 'https://trivia-quiz-bf5fb.web.app'},
            {name: 'A Scientific Calculator', url: 'https://scientific-calculator-527ca.web.app'}
          ]} 
          
          isProjects={true}
        />
      </div>
    </div>
  );
};

export default Homepage;











// import React from 'react';
// import Header from './Header';
// import Column from './Column';
// import './Homepage.css'; // we'll create this CSS file next

// const Homepage = () => {
//   return (
//     <div className="homepage">
//       <Header />
//       <div className="columns">
//         <Column 
//           title="About Me" 
//           fields={['Field 1', 'Field 2', 'Field 3', 'Field 3']} 
//           isAboutMe={true}
//         />
//         <Column 
//           title="Skills" 
//           fields={['Field 1', 'Field 2', 'Field 3']} 
//         />
//         <Column 
//           title="Projects" 
//           fields={['Field 1', 'Field 2', 'Field 3']} 
//           isProjects={true}
//         />
//       </div>
//     </div>
//   );
// };

// export default Homepage;











// import React from 'react';
// import Header from './Header';
// import Column from './Column';
// import './Homepage.css';  // we'll create this CSS file next

// const Homepage = () => {
//   return (
//     <div className="homepage">
//       <Header />
//       <div className="columns">
//         <Column title="About Me" fields={['Field 1', 'Field 2', 'Field 3']} />
//         <Column title="Skills" fields={['Field 1', 'Field 2', 'Field 3']} />
//         <Column title="Projects" fields={['Field 1', 'Field 2', 'Field 3']} />
//       </div>
//     </div>
//   );
// };

// export default Homepage;








// import React from 'react';
// import Header from './Header';
// import Column from './Column';
// import './Homepage.css';  // we'll create this CSS file next

// const Home = () => {
//   return (
//     <div className="home">
//       <div className="column">
//         <h2>About Me</h2>
//         <p>Field 1: Description</p>
//         <p>Field 2: Description</p>
//         <p>Field 3: Description</p>
//       </div>
//       <div className="column">
//         <h2>Skills</h2>
//         <ul>
//           <li>Field 1</li>
//           <li>Field 2</li>
//           <li>Field 3</li>
//         </ul>
//       </div>
//       <div className="column">
//         <h2>Projects</h2>
//         <ul>
//           <li><a href="#project1">Project 1</a></li>
//           <li><a href="#project2">Project 2</a></li>
//           <li><a href="#project3">Project 3</a></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Home;

