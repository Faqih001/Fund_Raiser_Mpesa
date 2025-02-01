'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Text Section */}
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              About <span className="text-orange-600">AmiTech Charity</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              At AmiTech Charity, we are on a mission to <strong className="text-gray-900">bridge the digital divide</strong> by 
              providing technology education, resources, and opportunities to underserved communities.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              We believe that <strong className="text-gray-900">access to technology is a fundamental right</strong>, not a privilege. 
              Our programs are designed to empower individuals with the skills they need to thrive in the digital era.
            </p>

            {/* Vision */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              <p className="mt-4 text-lg text-gray-600">
                A world where <strong>everyone</strong> has the opportunity to learn, innovate, and succeed in the 
                digital economy, regardless of their background.
              </p>
            </div>

            {/* Mission */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-lg text-gray-600">
                To provide <strong>accessible, high-quality tech education</strong>, empowering communities to
                leverage technology for <strong>sustainable growth and innovation</strong>.
              </p>
            </div>
          </div>

          {/* Image & Impact Section */}
          <div className="relative flex flex-col items-center">
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
              alt="AmiTech Charity team working on digital education initiatives"
              width={800}
              height={600}
              className="rounded-2xl shadow-xl object-cover"
              priority
            />
            
            {/* Impact Stats */}
            <div className="mt-8 w-full">
              <h2 className="text-2xl font-bold text-gray-900 text-center">Our Impact</h2>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { stat: '5,000+', label: 'Students Trained' },
                  { stat: '20+', label: 'Communities Served' },
                  { stat: '95%', label: 'Success Rate' },
                  { stat: '50+', label: 'Partner Organizations' }
                ].map(({ stat, label }) => (
                  <div key={label} className="flex flex-col items-center bg-orange-50 p-6 rounded-lg shadow-sm">
                    <p className="text-3xl font-extrabold text-orange-600">{stat}</p>
                    <p className="mt-2 text-sm text-gray-700">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
