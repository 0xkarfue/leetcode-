import React from 'react'
import CodeArea from '../components/Playground/CodeArea'
import ProblemDescription from '../components/Playground/ProblemDescription'

function SolveProblem() {
  return (
    <div className="flex h-screen">
      {/* Code Area - 50% height */}
      <div className="w-1/2 h-full">
        <CodeArea />
      </div>

      {/* Problem Description - 50% height */}
      <div className="w-1/2 h-full">
        <ProblemDescription />
      </div>
    </div>
  )
}

export default SolveProblem