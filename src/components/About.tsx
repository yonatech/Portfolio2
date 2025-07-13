import React from 'react';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const About: React.FC = () => {
  const techStack = [
    { category: 'Frontend', icon: <Globe className="w-6 h-6" />, technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
    { category: 'Backend', icon: <Database className="w-6 h-6" />, technologies: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
    { category: 'Mobile', icon: <Smartphone className="w-6 h-6" />, technologies: ['React Native', 'Flutter', 'iOS', 'Android'] },
    { category: 'Tools', icon: <Code className="w-6 h-6" />, technologies: ['Git', 'Docker', 'AWS', 'CI/CD'] }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience creating 
              innovative solutions that bridge the gap between design and functionality.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile & Bio */}
            <div className="space-y-8">
              {/* Enhanced Profile Image */}
              <div className="relative">
                <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-blue-400 via-purple-500 to-emerald-400 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-8xl font-bold text-gray-600 dark:text-gray-300">YH</span>
                  </div>
                </div>
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  5+ Years
                </div>
                <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  50+ Projects
                </div>
              </div>

              {/* Bio Text */}
              <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-lg">
                  My journey in software development began during college when I discovered the power 
                  of turning ideas into reality through code. Since then, I've been dedicated to 
                  mastering both frontend and backend technologies.
                </p>
                <p className="text-lg">
                  I specialize in building scalable web applications using modern technologies like 
                  React, Node.js, and cloud platforms. My approach combines clean code principles 
                  with user-centered design to create exceptional digital experiences.
                </p>
                <p className="text-lg">
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge through technical writing and mentoring.
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
                Technology Stack
              </h3>
              
              <div className="grid gap-6">
                {techStack.map((stack, index) => (
                  <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white">
                        {stack.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                        {stack.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {stack.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Career Timeline */}
              <div className="mt-12">
                <h4 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Career Highlights</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-4 h-4 bg-blue-500 rounded-full mt-1"></div>
                    <div>
                      <div className="font-semibold text-gray-800 dark:text-white">Senior Full-Stack Developer</div>
                      <div className="text-gray-600 dark:text-gray-300">Tech Innovations Inc. (2022 - Present)</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-4 h-4 bg-purple-500 rounded-full mt-1"></div>
                    <div>
                      <div className="font-semibold text-gray-800 dark:text-white">Full-Stack Developer</div>
                      <div className="text-gray-600 dark:text-gray-300">Digital Solutions Ltd. (2020 - 2022)</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-4 h-4 bg-emerald-500 rounded-full mt-1"></div>
                    <div>
                      <div className="font-semibold text-gray-800 dark:text-white">Junior Developer</div>
                      <div className="text-gray-600 dark:text-gray-300">StartUp Ventures (2019 - 2020)</div>
                    </div>
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

export default About;