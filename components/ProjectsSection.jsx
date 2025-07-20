"use client";

const ProjectsSection = () => {
  const projectOpportunities = [
    {
      title: "Industry-Sponsored Projects",
      description:
        "Collaborate with leading tech companies on real-world problems:",
      points: [
        "6-month duration with industry mentorship",
        "Solve actual business challenges",
        "Potential for pre-placement offers",
      ],
    },
    {
      title: "Research Projects",
      description: "Work with faculty on cutting-edge research areas:",
      points: [
        "Original research in emerging technologies",
        "Opportunity for publication in journals",
        "Presentations at national conferences",
      ],
    },
  ];

  const recentProjectAreas = [
    "AI-Based Medical Diagnosis",
    "IoT Smart Agriculture",
    "Autonomous Robotics",
    "Blockchain Applications",
    "5G Network Optimization",
    "Cybersecurity Systems",
    "Renewable Energy Solutions",
    "AR/VR Applications",
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
            <svg
              className="w-8 h-8 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Final Year Projects & Research
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Hands-on projects that bridge the gap between academia and industry
            requirements
          </p>
        </div>

        {/* Project Opportunities Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {projectOpportunities.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-purple-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  {index === 0 ? (
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-6 4h6"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-4">
                {project.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="h-5 w-5 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 shadow-md hover:shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Project Areas */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Recent Project Areas
            </h3>
            <p className="text-lg text-gray-600">
              Explore the cutting-edge domains where our students are making
              breakthrough innovations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentProjectAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 leading-tight">
                  {area}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
