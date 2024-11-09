import React from 'react';

function ProblemDescription() {
  return (
    <div className="flex flex-col bg-gray-50 p-4 h-full">
      <h2 className="text-2xl font-bold mb-4">Problem Title: Solve the Problem</h2>
      <p className="text-lg text-gray-700 mb-6">
        This is the problem description. It will contain the details of the problem, including input/output
        formats, constraints, and examples. You will need to implement a solution to pass all test cases.
      </p>
      <div>
        <h3 className="text-xl font-semibold mb-2">Example:</h3>
        <pre className="bg-gray-200 p-4 rounded-md">Input: [1, 2, 3, 4]</pre>
        <pre className="bg-gray-200 p-4 rounded-md">Output: [1, 3, 6, 10]</pre>
      </div>
    </div>
  );
}

export default ProblemDescription;































































// import React from 'react';
// import problems from '../../problems.js';


// function ProblemDescription() {
//   return (
//     <div className="flex flex-col bg-gray-50 p-4 h-full">
//         {
//           problems.map((element) => (
//             <h2 className="text-2xl font-bold mb-4">Problem Title: {element.title}</h2>


//           ))
//         }
//       <p className="text-lg text-gray-700 mb-6">
//         This is the problem description. It will contain the details of the problem, including input/output
//         formats, constraints, and examples. You will need to implement a solution to pass all test cases.
//       </p>
//       <div>
//         <h3 className="text-xl font-semibold mb-2">Example:</h3>
//         <pre className="bg-gray-200 p-4 rounded-md">Input: [1, 2, 3, 4]</pre>
//         <pre className="bg-gray-200 p-4 rounded-md">Output: [1, 3, 6, 10]</pre>
//       </div>
//     </div>
//   );
// }

// export default ProblemDescription;





// import React, { useState } from 'react';
// import problems from '../../problems.js';
// function ProblemDescription() {

//   const [title, setTitle] = useState(null)

//   const handleTitle = () => {
//     setTitle(problems.map((element) => {
//       return element.title
//     }))
//   }
  

//   return (
//     <div className="flex flex-col bg-gray-50 p-4 h-full">
//       <h2 className="text-2xl font-bold mb-4">Problem Title: {handleTitle}</h2>
//       <p className="text-lg text-gray-700 mb-6">
//         This is the problem description. It will contain the details of the problem, including input/output
//         formats, constraints, and examples. You will need to implement a solution to pass all test cases.
//       </p>
//       <div>
//         <h3 className="text-xl font-semibold mb-2">Example:</h3>
//         <pre className="bg-gray-200 p-4 rounded-md">Input: [1, 2, 3, 4]</pre>
//         <pre className="bg-gray-200 p-4 rounded-md">Output: [1, 3, 6, 10]</pre>
//       </div>
//     </div>
//   );
// }

// export default ProblemDescription;









