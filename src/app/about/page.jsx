'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl p-10">
            About <span className="text-orange-600">AmiTech Charity</span> 💡
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Transforming lives through technology 🚀. We empower underserved communities with 
            the skills, resources, and opportunities needed to thrive in the digital age.  
            <strong> Together, we break barriers and create a future where everyone has access 
            to technology.</strong>
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Vision & Mission */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">🌟 Our Vision</h2>
            <p className="mt-4 text-lg text-gray-600">
              A world where <strong>everyone</strong> has the opportunity to learn, innovate, 
              and succeed in the digital economy, regardless of their background or circumstances.  
              We believe that <span className="text-orange-600 font-semibold">technology should be 
              a bridge, not a barrier</span> to success.
            </p>

            <h2 className="mt-8 text-3xl font-bold text-gray-900">🎯 Our Mission</h2>
            <p className="mt-4 text-lg text-gray-600">
              To provide <strong>accessible, high-quality tech education</strong>, equipping 
              individuals with the skills needed to <span className="text-orange-600 font-semibold">
              create, innovate, and lead</span> in a digital-first world.  
              Through workshops, mentorship, and hands-on training, we empower 
              communities to use technology for personal and economic growth.
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
          <h2 className="text-4xl font-bold text-gray-900 text-center">🌍 Our Core Values</h2>
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            These principles guide everything we do at AmiTech Charity:
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "🚀 Innovation", desc: "Encouraging creative solutions for tech accessibility." },
              { title: "🌎 Inclusivity", desc: "Ensuring equal opportunities for all communities." },
              { title: "📚 Empowerment", desc: "Equipping individuals with digital skills for success." },
              { title: "🤝 Collaboration", desc: "Partnering with organizations to expand our impact." }
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
          <h2 className="text-4xl font-bold text-gray-900 text-center">📊 Our Impact</h2>
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Over the years, AmiTech Charity has made a real difference in countless lives:
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { stat: "5,000+", label: "Students Trained" },
              { stat: "20+", label: "Communities Served" },
              { stat: "95%", label: "Success Rate" },
              { stat: "50+", label: "Partner Organizations" }
            ].map(({ stat, label }) => (
              <div key={label} className="rounded-lg bg-orange-50 p-6 shadow-md text-center">
                <p className="text-3xl font-bold text-orange-600">{stat}</p>
                <p className="mt-2 text-lg text-gray-600">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How We Make a Difference */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-gray-900 text-center">💡 How We Make a Difference</h2>
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Through key initiatives, we ensure technology reaches those who need it most:
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "💻 Digital Literacy", desc: "Providing hands-on training in essential digital skills." },
              { title: "📡 Internet Access", desc: "Bridging the connectivity gap in underserved areas." },
              { title: "👩‍💻 Women in Tech", desc: "Encouraging and supporting women in STEM careers." },
              { title: "🎓 Youth Mentorship", desc: "Guiding young minds to explore tech opportunities." },
              { title: "🌱 Tech for Sustainability", desc: "Leveraging technology for environmental solutions." },
              { title: "🏫 School Partnerships", desc: "Integrating tech education into school curriculums." }
            ].map(({ title, desc }) => (
              <div key={title} className="rounded-lg bg-orange-50 p-6 shadow-md">
                <h3 className="text-xl font-semibold text-orange-600">{title}</h3>
                <p className="mt-2 text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="mt-16 bg-orange-600 text-white py-16 text-center rounded-2xl shadow-xl">
          <h2 className="text-4xl font-extrabold">🚀 Join Our Mission!</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Be part of the change! Support AmiTech Charity by donating, volunteering, or 
            partnering with us. Together, we can create a future where technology empowers 
            everyone.
          </p>
          <Link href="/donate">
            <button className="mt-6 px-8 py-3 bg-white text-orange-600 font-bold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
              Get Involved
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
