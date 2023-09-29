import React from 'react';

const Column = ({ title, fields, isAboutMe, isProjects, aboutMeText }) => {
  const idName = title.toLowerCase().replace(" ", "-");
  
  return (
    <div id={idName} className={`column ${idName}`}>
      <h2>{title}</h2>
      {isAboutMe ? (
        <div className="about-me">
          <p>{aboutMeText}</p>
        </div>
      ) : isProjects ? (
        <ul>
          {fields.map((x, index) => (
            <li key={index}>
              <a href={x.url}>{x.name}</a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="skills-container">
          {fields.map((field, index) => (
            <button key={index} className={`btn ${field.toLowerCase().replace(" ", "-")}`}>
              {field}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Column;










// import React from 'react';

// const Column = ({ title, fields, isAboutMe, isProjects, aboutMeText }) => {
//   return (
//     <div className={`column ${title.toLowerCase().replace(" ", "-")}`}>
//       <h2>{title}</h2>
//       {isAboutMe ? (
//         <div className="about-me">
//           <p>{aboutMeText}</p>
//         </div>
//       ) : isProjects ? (
//         <ul>
//           {fields.map((x, index) => (
//             <li key={index}>
//             <a href={x.url}>{x.name}</a>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <div className="skills-container">
//           {fields.map((field, index) => (
//             <button key={index} className={`btn ${field.toLowerCase().replace(" ", "-")}`}>
//               {field}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Column;











// import React from 'react';

// const Column = ({ title, fields, isAboutMe, isProjects, aboutMeText }) => {
//   return (
//     <div className="column">
//       <h2>{title}</h2>
//       {isAboutMe ? (
//         <div className="about-me">
//           <p>{aboutMeText}</p>
//         </div>
//       ) : (
//         <ul>
//           {fields.map((field, index) => (
//             <li key={index}>
//               {isProjects ? (
//                 <a href={`https://example.com/${field}`}>
//                   {field}
//                 </a>
//               ) : (
//                 <>{field}</>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Column;









// import React from 'react';

// const Column = ({ title, fields, isAboutMe, isProjects }) => {
//   return (
//     <div className="column">
//       <h2>{title}</h2>
//       {isAboutMe ? (
//         <div className="about-me">
//           {fields.map((field, index) => (
//             <p key={index}>{field}</p>
//           ))}
//         </div>
//       ) : (
//         <ul>
//           {fields.map((field, index) => (
//             <li key={index}>
//               {isProjects ? (
//                 <a href={`https://example.com/${field}`}>
//                   {field}
//                 </a>
//               ) : (
//                 <>{field}</>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Column;











// import React from 'react';

// const Column = ({ title, fields, isAboutMe, isProjects }) => {
//   return (
//     <div className="column">
//       <h2>{title}</h2>
//       <ul>
//         {fields.map((field, index) => (
//           <li key={index}>
//             {isAboutMe ? (
//               <p>{field}</p>
//             ) : isProjects ? (
//               <a 
//                 href={`https://example.com/${field}`} 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 {field}
//               </a>
//             ) : (
//               <>{field}</>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Column;












// import React from 'react';
// import './Column.css'; // we'll create this CSS file next

// const Column = ({ title, fields }) => {
//   return (
//     <div className="column">
//       <h2>{title}</h2>
//       <ul>
//         {fields.map((field, index) => (
//           <li key={index}>{field}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Column;
