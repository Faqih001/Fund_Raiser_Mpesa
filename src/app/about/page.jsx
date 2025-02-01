'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            About <span className="text-orange-600">AmiTech Charity</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Transforming lives through technology by providing education, tools, and opportunities 
            for underserved communities to thrive in the digital world.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Vision & Mission */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            <p className="mt-4 text-lg text-gray-600">
              A world where <strong>everyone</strong> has the opportunity to learn, innovate, 
              and succeed in the digital economy, regardless of their background.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-lg text-gray-600">
              To provide <strong>accessible, high-quality tech education</strong>, 
              empowering communities to leverage technology for <strong>sustainable growth 
              and innovation</strong>.
            </p>
          </div>

          {/* Image */}
          <div className="relative flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
              alt="AmiTech Charity team working on digital education initiatives"
              width={800}
              height={600}
              className="rounded-2xl shadow-xl object-cover"
              priority
            />
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Our Core Values</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Innovation", desc: "Encouraging creative solutions for tech accessibility." },
              { title: "Inclusivity", desc: "Ensuring equal opportunities for all communities." },
              { title: "Empowerment", desc: "Equipping individuals with digital skills for success." },
              { title: "Collaboration", desc: "Partnering with organizations to expand our impact." }
            ].map(({ title, desc }) => (
              <div key={title} className="rounded-lg bg-orange-50 p-6 shadow-md">
                <h3 className="text-xl font-semibold text-orange-600">{title}</h3>
                <p className="mt-2 text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Impact Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Our Impact</h2>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { stat: '5,000+', label: 'Students Trained' },
              { stat: '20+', label: 'Communities Served' },
              { stat: '95%', label: 'Success Rate' },
              { stat: '50+', label: 'Partner Organizations' }
            ].map(({ stat, label }) => (
              <div key={label} className="rounded-lg bg-orange-100 p-6 text-center shadow-md">
                <p className="text-3xl font-bold text-orange-600">{stat}</p>
                <p className="mt-2 text-lg text-gray-700">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How We Make a Difference Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center">How We Make a Difference</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Tech Education",
                desc: "Providing coding bootcamps, digital literacy, and STEM programs for all ages.",
                img: "/Empower.jpg"
              },
              {
                title: "Innovation Labs",
                desc: "Offering collaborative spaces for creative problem-solving and hands-on learning.",
                img: "/Innovation.jpg"
              },
              {
                title: "Community Outreach",
                desc: "Bringing technology resources and training to underserved communities.",
                img: "/community.jpg"
              }
            ].map(({ title, desc, img }) => (
              <div key={title} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image src={img} alt={title} width={400} height={250} className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                  <p className="mt-2 text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
