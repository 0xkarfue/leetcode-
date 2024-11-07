import React, { useState } from 'react';

function CodeArea() {
  const [selectedLanguage, setSelectedLanguage] = useState('JavaScript');

  const handleSubmit = () => {
    alert(`Code submitted in ${selectedLanguage}`);
  };

  return (
    <div className="flex flex-col h-full bg-gray-100 p-4">
      {/* Language Selector */}
      <div className="flex justify-between items-center mb-4">
        <label htmlFor="language" className="text-lg font-semibold">Choose Language:</label>
        <select
          id="language"
          className="p-2 border border-gray-300 rounded-md"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="C++">C++</option>
        </select>
      </div>

      {/* Code Area */}
      <textarea
        className="w-full h-2/3 bg-white border border-gray-300 rounded-md p-4 mb-4"
        placeholder="Write your code here..."
      ></textarea>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Submit
      </button>
    </div>
  );
}

export default CodeArea;
