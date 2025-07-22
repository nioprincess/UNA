import React from 'react'
import { ServiceCard } from '../ui/ServiceCard'
import { FaBalanceScale, FaFemale, FaGlobe, FaHandshake, FaInfoCircle } from 'react-icons/fa'
import {  FaUsers ,FaSchool} from 'react-icons/fa6'

export type service = {
  icon: any
  title: string
  description: string
}

export const ServicesSection = () => {
  const programs = [
    {
      title: 'Information Training and Resource Centre',
      description:
        'Provides access to information, training, and resources to empower individuals and communities.',
      bgColor: 'bg-blue-500',
      icon: FaInfoCircle,
    },
    {
      title: "Human and People's Rights",
      description:
        'Promotes and protects the fundamental rights and freedoms of individuals and communities.',
      bgColor: 'bg-green-500',
      icon:  FaBalanceScale,
    },
    {
      title: 'Conflict Resolution and Peace',
      description:
        'Facilitates peaceful resolution of conflicts and promotes harmony within communities.',
      bgColor: 'bg-purple-500',
      icon: FaHandshake,
    },
    {
      title: 'Climate Change Programs',
      description:
        'Addresses the challenges of climate change through awareness, mitigation, and adaptation initiatives.',
      bgColor: 'bg-orange-500',
      icon: FaGlobe,
    },
    {
      title: 'Women Empowerment',
      description:
        'Supports and empowers women through education, skills development, and advocacy for gender equality.',
      bgColor: 'bg-pink-500',
      icon: FaFemale,
    },
    {
      title: 'School-Net',
      description:
        'Connects schools and educational institutions to enhance learning opportunities and collaboration.',
      bgColor: 'bg-yellow-500',
      icon: FaSchool,
    },
    {
      title: 'UN Association Elders League',
      description:
        'Engages and mobilizes elders to contribute their wisdom and experience to UN initiatives and programs.',
      bgColor: 'bg-gray-500',
      icon: FaUsers,
    },
  ]
    return (
      <div className="py-12 bg-[#f6f3f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mx-auto -mt-[5px] mb-[60px] max-w-[720px]">
            <h2 className="font-bold tracking-wide mb-4  text-3xl ">
              Our Programs
            </h2>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {programs.map((program, index) => (
                <ServiceCard key={index} service={program} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
}
