'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-white pt-16">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Text Section */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              About AmiTech Charity
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              AmiTech Charity was founded with a simple yet powerful mission: to bridge the digital
              divide and empower communities through technology education and resources.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We believe that access to technology and digital skills is not just a privilege
              but a fundamental right in today's interconnected world.
            </p>
            {/* Vision */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              <p className="mt-4 text-lg text-gray-600">
                A world where every individual has the opportunity to learn, grow, and succeed
                in the digital age, regardless of their background or circumstances.
              </p>
            </div>
            {/* Mission */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-lg text-gray-600">
                To provide quality technology education, resources, and opportunities to
                underserved communities, empowering them to participate fully in the digital
                economy.
              </p>
            </div>
          </div>

          {/* Image & Impact Section */}
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
              alt="AmiTech Charity team working on digital education initiatives"
              width={800}
              height={600}
              className="rounded-2xl shadow-xl"
              priority
            />
            {/* Impact Stats */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900">Our Impact</h2>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-2">
                {[
                  { stat: '5,000+', label: 'Students Trained' },
                  { stat: '20+', label: 'Communities Served' },
                  { stat: '95%', label: 'Success Rate' },
                  { stat: '50+', label: 'Partner Organizations' }
                ].map(({ stat, label }) => (
                  <div key={label} className="rounded-lg bg-orange-50 p-6">
                    <p className="text-3xl font-bold text-orange-600">{stat}</p>
                    <p className="mt-2 text-sm text-gray-600">{label}</p>
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
 