'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const programs = [
  {
    title: 'Tech Empowerment',
    description: 'Equipping individuals with essential technology skills through hands-on coding, web development, and digital literacy training.',
    image: '/Empower.jpg',
    features: [
      'Interactive coding bootcamps',
      'Web & app development training',
      'AI & data science fundamentals',
      'Project-based learning experiences'
    ]
  },
  {
    title: 'Innovation Hub',
    description: 'A dynamic space fostering creativity, collaboration, and problem-solving, where innovators turn ideas into impactful tech solutions.',
    image: '/Innovation.jpg',
    features: [
      'State-of-the-art tech lab',
      'Industry mentorship & networking',
      'Hackathons & startup incubation',
      'Cutting-edge research projects'
    ]
  },
  {
    title: 'Tech for Communities',
    description: 'Bridging the digital divide by making technology accessible through outreach programs, mobile labs, and digital literacy workshops.',
    image: '/community.jpg',
    features: [
      'Mobile tech labs in remote areas',
      'Inclusive digital training for all ages',
      'Empowering women & youth in tech',
      'Technology for social impact initiatives'
    ]
  }
];

const faqs = [
  {
    question: 'Who can join these programs?',
    answer: 'Our programs are open to individuals of all backgrounds, from beginners to advanced learners looking to enhance their tech skills.'
  },
  {
    question: 'Are the programs free or paid?',
    answer: 'Some programs are free, while others have a small fee to cover resources. We also offer scholarships and financial aid.'
  },
  {
    question: 'Do I need prior experience in tech?',
    answer: 'No prior experience is needed! We have beginner-friendly programs as well as advanced courses for those with experience.'
  },
  {
    question: 'How can I apply?',
    answer: 'You can apply through our website by filling out a simple registration form for your desired program.'
  }
];

export default function ProgramsPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="bg-gray-50 py-16">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Explore Our Programs
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          We provide hands-on tech training, innovation spaces, and community-driven digital empowerment.
        </p>
      </div>

      {/* Programs Section */}
      <div className="mt-16 max-w-6xl mx-auto px-6 space-y-20">
        {programs.map((program, index) => (
          <div
            key={program.title}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            {/* Image */}
            <div className="relative w-full lg:w-1/2 h-64 sm:h-80">
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Text Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-900">{program.title}</h2>
              <p className="mt-3 text-gray-600">{program.description}</p>
              <ul className="mt-6 space-y-2 text-gray-700">
                {program.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="h-5 w-5 text-orange-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section with Animation */}
      <div className="mt-24 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-xl"
              whileHover={{ scale: 1.02 }}
            >
              <button
                className="w-full flex justify-between items-center py-4 px-6 text-lg font-medium text-left text-gray-700 focus:outline-none"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                {faq.question}
                <motion.span
                  className="text-gray-500"
                  animate={{ rotate: openFAQ === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  ▼
                </motion.span>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={openFAQ === index ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-4 text-gray-600">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
