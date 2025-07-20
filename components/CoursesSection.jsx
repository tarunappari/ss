'use client';

import Image from 'next/image';

const CoursesSection = () => {
  const computerScienceCourses = [
    {
      title: "Programming Foundations",
      alt: "Programming Foundations",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      topics: [
        "Python Programming",
        "Java Core & Advanced",
        "C/C++ Programming",
        "Data Structures & Algorithms"
      ]
    },
    {
      title: "Web Development",
      alt: "Web Development",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      topics: [
        "MERN Stack (MongoDB, Express, React, Node)",
        "MEAN Stack Development",
        "Full Stack Development",
        "JavaScript & Advanced JS"
      ]
    },
    {
      title: "Data Science & AI",
      alt: "Data Science & AI",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      topics: [
        "Machine Learning with Python",
        "Deep Learning & Neural Networks",
        "Data Analytics with R/Python",
        "Natural Language Processing"
      ]
    },
    {
      title: "Cloud & DevOps",
      alt: "Cloud & DevOps",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      topics: [
        "AWS Cloud Practitioner",
        "Azure Fundamentals",
        "Docker & Kubernetes",
        "CI/CD Pipeline Implementation"
      ]
    },
    {
      title: "Database Systems",
      alt: "Database Systems",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      topics: [
        "SQL & NoSQL Databases",
        "MongoDB Administration",
        "Oracle Database",
        "Big Data with Hadoop"
      ]
    },
    {
      title: "Cybersecurity",
      alt: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      topics: [
        "Ethical Hacking",
        "Network Security",
        "Penetration Testing",
        "Cyber Forensic"
      ]
    }
  ];

  const electronicsCourses = [
    {
      title: "Core Electronics",
      alt: "Core Electronics",
      image: "https://images.unsplash.com/photo-1672689933227-2ce1249c46a9?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      topics: [
        "Analog & Digital Electronics",
        "Microcontroller Programming",
        "VLSI Design",
        "Embedded Systems"
      ]
    },
    {
      title: "Communication Systems",
      alt: "Communication Systems",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      topics: [
        "Wireless Communication",
        "5G Technologies",
        "Optical Communication",
        "Satellite Communication"
      ]
    },
    {
      title: "Instrumentation & Control",
      alt: "Instrumentation & Control",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      topics: [
        "Industrial Automation",
        "PLC & SCADA Systems",
        "Process Control",
        "IoT Applications"
      ]
    },
    {
      title: "Signal Processing",
      alt: "Signal Processing",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      topics: [
        "Digital Signal Processing",
        "MATLAB for Engineers",
        "Image Processing",
        "Audio Signal Processing"
      ]
    },
    {
      title: "Power Electronics",
      alt: "Power Electronics",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      topics: [
        "Power Systems Analysis",
        "Renewable Energy Systems",
        "Electric Vehicles Technology",
        "Smart Grid Technologies"
      ]
    },
    {
      title: "Robotics & Automation",
      alt: "Robotics & Automation",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      topics: [
        "Robotics Fundamentals",
        "Industrial Robotics",
        "AI in Robotics",
        "Mechatronics"
      ]
    }
  ];

  const CourseCard = ({ course, index, bgColor }) => (
    <div className={`${bgColor} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100`}>
      {/* Course Image */}
      <div className="relative h-48 w-full">
        <Image
          src={course.image}
          alt={course.alt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">{course.title}</h3>

        <div className="space-y-3">
          {course.topics.map((topic, topicIndex) => (
            <div key={topicIndex} className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <span className="text-gray-700 text-sm leading-relaxed">{topic}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id='courses' className="py-20 bg-gray-50 coursesSection">
      <div className='underCoursesSection'>
        <h1>In-Demand Courses</h1>
        <p>Specialized courses to enhance your technical skills and career prospects</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Computer Science Courses Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Computer Science Courses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master the latest technologies and programming languages with our comprehensive computer science curriculum
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {computerScienceCourses.map((course, index) => (
              <CourseCard 
                key={index} 
                course={course} 
                index={index} 
                bgColor="bg-gradient-to-br from-blue-50 to-indigo-50"
              />
            ))}
          </div>
        </div>

        {/* Electronics Courses Section */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Electronics & Communication Courses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore cutting-edge electronics and communication technologies with hands-on practical experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {electronicsCourses.map((course, index) => (
              <CourseCard 
                key={index} 
                course={course} 
                index={index} 
                bgColor="bg-gradient-to-br from-orange-50 to-red-50"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoursesSection;
