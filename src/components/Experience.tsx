import React from 'react';
import { Download, Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Lead development of enterprise-level web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers.',
      achievements: [
        'Increased application performance by 40% through optimization',
        'Led a team of 5 developers in delivering critical projects',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'MongoDB']
    },
    {
      title: 'Full-Stack Developer',
      company: 'Digital Solutions Ltd.',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client-facing web applications using modern JavaScript frameworks and cloud technologies.',
      achievements: [
        'Built 15+ production applications from concept to deployment',
        'Reduced bug reports by 50% through comprehensive testing',
        'Integrated third-party APIs improving user experience'
      ],
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Azure', 'Redis']
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Ventures',
      location: 'Austin, TX',
      period: '2019 - 2020',
      description: 'Started career in a fast-paced startup environment, contributing to various projects and learning modern development practices.',
      achievements: [
        'Developed responsive web interfaces for mobile-first applications',
        'Collaborated with designers to implement pixel-perfect designs',
        'Participated in agile development processes and code reviews'
      ],
      technologies: ['JavaScript', 'React', 'PHP', 'MySQL', 'Git']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      period: '2015 - 2019',
      gpa: '3.8/4.0',
      achievements: ['Magna Cum Laude', 'Dean\'s List', 'Computer Science Club President']
    }
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional Developer',
    'MongoDB Certified Developer',
    'Scrum Master Certification'
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience & Education
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              My professional journey, key achievements, and continuous learning in the world of software development.
            </p>
            
            {/* Download Resume Button */}
            <div className="mt-8">
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                <Download className="w-5 h-5" />
                Download Full Resume
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Experience Timeline */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-blue-600" />
                Professional Experience
              </h3>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div 
                    key={index}
                    className="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  >
                    {/* Timeline connector */}
                    {index < experiences.length - 1 && (
                      <div className="absolute left-8 bottom-[-2rem] w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                    )}
                    
                    {/* Job Details */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                          {exp.title}
                        </h4>
                        <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-300">
                          <span className="font-semibold text-blue-600 dark:text-blue-400">
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Key Achievements */}
                      <div>
                        <h5 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                          <Award className="w-5 h-5 text-yellow-500" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li 
                              key={achIndex}
                              className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                            >
                              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies Used */}
                      <div>
                        <h5 className="font-semibold text-gray-800 dark:text-white mb-3">
                          Technologies Used
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar with Education & Certifications */}
            <div className="space-y-8">
              {/* Education */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                  Education
                </h3>
                {education.map((edu, index) => (
                  <div key={index} className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {edu.school}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {edu.period}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        GPA: {edu.gpa}
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 dark:text-white mb-2">
                        Achievements
                      </h5>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li 
                            key={achIndex}
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                  Certifications
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600"
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {cert}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Years of Experience</span>
                    <span className="text-2xl font-bold">5+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Projects Completed</span>
                    <span className="text-2xl font-bold">50+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Happy Clients</span>
                    <span className="text-2xl font-bold">30+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Code Reviews</span>
                    <span className="text-2xl font-bold">500+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;