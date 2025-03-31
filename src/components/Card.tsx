import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`${className} rounded-2xl bg-[#393939] p-4 drop-shadow-xl`}>
      {children}
    </div>
  )
}

export default Card
