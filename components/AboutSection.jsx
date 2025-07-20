'use client';

import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id='about' className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                  alt="Students in modern classroom learning environment"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-200 rounded-full opacity-60 z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200 rounded-full opacity-40 z-0"></div>
            
            {/* Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-xl p-6 z-20 hidden lg:block">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">2015</div>
                <div className="text-sm text-gray-600">Founded</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Empowering the Next Generation</h3>
              <p className="text-gray-700 leading-relaxed">
                SS Institution was founded in 2015 by <span className="font-semibold text-green-600">Mr. Sathi Reddy</span> with a vision to empower the next generation of professionals. The primary goal of the institution is to train graduating students in highly demanding and industry-relevant courses.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From its inception, SS Institution has focused on bridging the gap between academic knowledge and real-world job skills. It offers specialized training programs that are designed to enhance the employability of students across various sectors.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">Our Approach</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Practical, hands-on learning</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Experienced mentors</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Industry experts guidance</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Updated curriculum</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Over the years, it has helped hundreds of students shape their future and secure high-growth careers. SS Institution is known for its commitment to quality education and student success.
              </p>
              <p className="text-gray-700 leading-relaxed">
                It constantly updates its curriculum to match the evolving needs of the industry. With a strong foundation and forward-thinking approach, the institution continues to grow as a trusted name in career-oriented education.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
              <h4 className="text-lg font-semibold text-green-800 mb-2">Our Mission</h4>
              <p className="text-green-700 leading-relaxed">
                SS Institution stands as a launchpad for students to achieve their dreams and build a successful future through quality education and industry-relevant training.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
