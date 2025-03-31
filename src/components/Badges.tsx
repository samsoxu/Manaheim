import React from 'react'

interface BadgesProps {
  text: string
  className?: string
}

const Badges: React.FC<BadgesProps> = ({ text, className }) => {
  return (
    <div
      className={`${className} inline-flex items-center rounded-xl bg-gray-50 px-4 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset`}
    >
      {text}
    </div>
  )
}

export default Badges
