import React from 'react'

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        <rect width="48" height="48" rx="8" fill="#3B82F6" />
        <circle cx="24" cy="24" r="18" stroke="white" strokeWidth="2" />
        <path d="M24 6V24L36 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 24L36 30" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 24L12 30" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 24L12 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-2xl font-bold text-gray-900">CICO-CASH</span>
    </div>
  )
}

export default Logo