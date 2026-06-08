import { motion } from "motion/react";
import { GraduationCap, Code, TrendingUp, Users } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: "15+", icon: Code },
  { label: "Technologies Learned", value: "20+", icon: TrendingUp },
  { label: "GitHub Contributions", value: "500+", icon: Users },
];

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6366F1]/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 text-lg">Get to know more about my journey</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">
              Hi, I'm <span className="text-[#6366F1]">Saurabh Pal</span>
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              I'm a passionate Computer Science Engineering student with a deep
              love for web development and artificial intelligence. My journey
              started with curiosity about how websites work, and it has evolved
              into a mission to create impactful digital experiences.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              I specialize in building modern, responsive web applications using
              cutting-edge technologies. From frontend design to backend
              development, I enjoy every aspect of bringing ideas to life through
              code.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or learning about the latest
              trends in AI and machine learning.
            </p>
          </motion.div>

          {/* Right - Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-lg">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold">Education</h4>
                  <p className="text-gray-400">Academic Background</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h5 className="text-xl font-semibold text-[#06B6D4]">
                    ABES Engineering College
                  </h5>
                  <p className="text-gray-300 mt-1">
                    Bachelor of Technology (B.Tech)
                  </p>
                  <p className="text-gray-400 mt-1">
                    Computer Science & Engineering
                  </p>
                  <p className="text-gray-500 mt-2">2025 - 2029 (Expected)</p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h6 className="font-semibold mb-2">Key Achievements:</h6>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-[#06B6D4] mt-1">•</span>
                      <span>Strong foundation in Data Structures & Algorithms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#06B6D4] mt-1">•</span>
                      <span>Active participant in coding competitions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#06B6D4] mt-1">•</span>
                      <span>Member of technical clubs and societies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <stat.icon className="w-10 h-10 mx-auto mb-4 text-[#06B6D4]" />
                <h4 className="text-4xl font-bold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </h4>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
