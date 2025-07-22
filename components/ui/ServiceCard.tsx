import Image from 'next/image'
import React from 'react'

export const ServiceCard = ({ service }: any) => {
  return (
    <div className="relative group rounded-lg shadow-lg bg-white text-center overflow-hidden h-64">
      {/* Background Icon */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out ${service.bgColor}`}
        style={{ zIndex: 1 }}
      >
        <service.icon className="w-20 h-20 text-white group-hover:scale-125 transition-transform duration-500 ease-in-out opacity-30" />
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 ease-in-out p-4 text-white">
        <h3 className="text-xl font-semibold">{service.title}</h3>
        <p className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
          {service.description}
        </p>
      </div>
    </div>
  )
}
