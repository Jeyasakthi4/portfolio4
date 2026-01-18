"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Star } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science Engineering (Cybersecurity)",
      institution: "Sphoorthy Engineering College",
      location: "Chennai, India",
      period: "2022 - 2026",
      status: "Currently Pursuing",
      gpa: "In Progress",
      description: "Specializing in Cybersecurity with a strong foundation in computer science fundamentals, programming, and security practices.",
      subjects: [
        "Data Structures & Algorithms",
        "Computer Networks",
        "Cybersecurity Fundamentals",
        "Web Development",
        "Database Management Systems",
        "Software Engineering",
        "Ethical Hacking",
        "Cryptography"
      ],
      achievements: [
        "Vice President of Cyber GenZ Club",
        "Organized 5+ cybersecurity workshops",
        "Active participant in coding competitions",
        "Strong academic performance"
      ]
    },
    {
      degree: "Intermediate (XII) - MPC",
      institution: "Sri Chaitanya Junior College",
      location: "Chennai, India",
      period: "2020 - 2022",
      status: "Completed",
      gpa: "9.51 GPA",
      description: "Completed intermediate education with Mathematics, Physics, and Chemistry, building a strong foundation for engineering studies.",
      subjects: [
        "Mathematics",
        "Physics", 
        "Chemistry",
        "English",
        "Computer Science"
      ],
      achievements: [
        "Achieved 9.51 GPA",
        "Consistent academic excellence",
        "Strong foundation in STEM subjects",
        "Developed analytical thinking skills"
      ]
    },
    {
      degree: "Secondary School Certificate (X)",
      institution: "Chaitanya Bharathi High School (CBSE)",
      location: "Chennai, India",
      period: "2019 - 2020",
      status: "Completed",
      gpa: "9.80 GPA",
      description: "Completed secondary education with outstanding academic performance, demonstrating strong fundamentals across all subjects.",
      subjects: [
        "Mathematics",
        "Science",
        "Social Studies",
        "English",
        "Hindi",
        "Computer Applications"
      ],
      achievements: [
        "Achieved 9.80 GPA",
        "Academic excellence award",
        "Strong performance in all subjects",
        "Developed strong study habits"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My <span className="text-primary">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and educational background in computer science and technology
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column - Main Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap size={28} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                      <p className="text-primary font-semibold text-lg">{edu.institution}</p>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-3 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          {edu.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          {edu.location}
                        </div>
                        <div className="flex items-center">
                          <Star size={16} className="mr-2" />
                          {edu.gpa}
                        </div>
                      </div>
                      
                      <div className="mt-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          edu.status === 'Currently Pursuing' 
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            : 'bg-green-500/20 text-green-400 border border-green-500/30'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{edu.description}</p>

                  {/* Subjects */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                      <BookOpen size={16} className="mr-2 text-primary" />
                      Key Subjects
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {edu.subjects.map((subject, subIndex) => (
                        <motion.div
                          key={subject}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: subIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2 flex-shrink-0"></div>
                          {subject}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Achievements */}
                <div className="lg:col-span-1">
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/20 h-full">
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                      <Award size={20} className="mr-2 text-primary" />
                      Achievements
                    </h4>
                    <div className="space-y-3">
                      {edu.achievements.map((achievement, achIndex) => (
                        <motion.div
                          key={achievement}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: achIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academic Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 border border-primary/20 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Academic Excellence
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
              Throughout my academic journey, I have maintained consistent excellence with strong 
              performance across all subjects. My education has provided me with a solid foundation 
              in computer science, cybersecurity, and technology, preparing me for real-world challenges.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">9.80</div>
                <div className="text-sm text-muted-foreground">SSC GPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">9.51</div>
                <div className="text-sm text-muted-foreground">Intermediate GPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2026</div>
                <div className="text-sm text-muted-foreground">Expected Graduation</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
