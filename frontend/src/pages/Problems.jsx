import React from 'react';
import problems from '../problems.js';

function Problems() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">LeetCode Problems</h1>
      <div className="space-y-4">
        {problems.map((problem, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-200"
          >
            <h2 className="text-xl font-semibold text-gray-800">{problem.title}</h2>
            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-600">Difficulty: {problem.difficulty}</span>
              <span className="text-sm text-gray-600">Acceptance: {problem.acceptance}</span>
            </div>
            <div className="mt-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200">
                Solve
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Problems;
