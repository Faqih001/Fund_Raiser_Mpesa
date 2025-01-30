'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  useEffect(() => {
    // Add animation classes on scroll
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white pt-16">
      {/* Hero Section */}
    <div className="relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-orange-100 to-orange-50 opacity-90" />

        {/* Content Wrapper */}
        <div className="relative z-10 pt-12 pb-20 sm:pb-28 lg:pb-32">
          <main className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
            <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
              
              {/* Left Content - Title & Text */}
              <div className="lg:col-span-6 text-center lg:text-left">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block text-orange-600">Empowering</span>{' '}
                  <span className="block">Communities Through Innovation</span>
                </h1>
                <p className="mt-4 text-lg text-gray-700 sm:mt-6 sm:text-xl lg:text-lg xl:text-xl">
                  Bridging the digital divide by equipping underserved communities with cutting-edge 
                  technology, education, and opportunities for a brighter future.
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <Link
                    href="/donate"
                    className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-6 py-3 text-lg font-medium text-white shadow-lg transition-transform transform hover:scale-105 hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-400"
                  >
                    Donate Now
                  </Link>
                  <Link
                    href="/programs"
                    className="inline-flex items-center justify-center rounded-lg border border-orange-600 px-6 py-3 text-lg font-medium text-orange-600 shadow-lg transition-transform transform hover:scale-105 hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-orange-400"
                  >
                    Explore Programs
                  </Link>
                </div>
              </div>

              {/* Right Content - Image */}
              <div className="mt-12 lg:mt-0 lg:col-span-6">
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
                  <Image
                    src="/Innovation.jpg"
                    alt="Tech education"
                    fill
                    priority
                    className="object-cover rounded-xl shadow-2xl"
                  />
                </div>
              </div>

            </div>
          </main>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 ease-out">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Driving Change, Empowering Communities  
              </h2>
              <p className="mt-3 text-lg text-gray-600 sm:mt-4">
                Through technology and innovation, we're transforming lives and creating opportunities across Kenya.  
              </p>
            </div>

            <dl className="mt-10 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-3 sm:gap-8">
              <div className="flex flex-col">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Students Reached</dt>
                <dd className="order-1 text-5xl font-bold tracking-tight text-orange-600">2,500+</dd>
              </div>
              <div className="mt-10 flex flex-col sm:mt-0">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Communities Served</dt>
                <dd className="order-1 text-5xl font-bold tracking-tight text-orange-600">17+</dd>
              </div>
              <div className="mt-10 flex flex-col sm:mt-0">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Success Rate</dt>
                <dd className="order-1 text-5xl font-bold tracking-tight text-orange-600">96%</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 ease-out">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Transforming Lives Through Technology
              </h2>
              <p className="mt-3 text-lg text-gray-600 sm:mt-4">
                Explore our innovative programs designed to bridge the digital divide, empower communities, and unlock new opportunities.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Program Cards */}
              {[
                {
                  title: 'Tech Education',
                  description: 'Empowering underserved communities with quality technology education, equipping them for the future.',
                  icon: '🎓'
                },
                {
                  title: 'Digital Literacy',
                  description: 'Equipping individuals with essential digital skills to thrive in the modern workforce.',
                  icon: '💻'
                },
                {
                  title: 'Innovation Hub',
                  description: 'Fostering creativity and innovation through technology workshops, hackathons, and more.',
                  icon: '🚀'
                }
              ].map((program) => (
                <div
                  key={program.title}
                  className="rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <div className="text-4xl">{program.icon}</div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{program.title}</h3>
                  <p className="mt-2 text-gray-500">{program.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-orange-600">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 ease-out">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to make a difference?</span>
              <span className="block text-orange-200">Join us in empowering communities.</span>
            </h2>
            <div className="mt-8 flex">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="/donate"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-orange-600 hover:bg-orange-50"
                >
                  Donate Now
                </Link>
              </div>
              <div className="ml-3 inline-flex">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-700 px-5 py-3 text-base font-medium text-white hover:bg-orange-800"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}