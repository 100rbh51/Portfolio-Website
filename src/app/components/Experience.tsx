import { motion } from "motion/react";
import { BookOpen, Code2, Brain, Rocket } from "lucide-react";

const timeline = [
  {
    year: "First Year",
    title: "Foundation & Exploration",
    description:
      "Started my journey in Computer Science, learning programming fundamentals, problem-solving, and basic algorithms.",
    icon: BookOpen,
    color: "#6366F1",
  },
  {
    year: "Second Year",
    title: "Web Development",
    description:
      "Dived deep into web technologies. Mastered HTML, CSS, JavaScript, and modern frameworks like React.js. Built multiple responsive websites.",
    icon: Code2,
    color: "#8B5CF6",
  },
  {
    year: "Third Year",
    title: "DSA & Backend Development",
    description:
      "Focused on Data Structures & Algorithms using C++. Learned backend development with Node.js and Express.js. Built full-stack applications.",
    icon: Rocket,
    color: "#06B6D4",
  },
  {
    year: "Current",
    title: "AI & Advanced Topics",
    description:
      "Exploring Artificial Intelligence, Machine Learning, and advanced web development patterns. Working on innovative projects combining AI with web technologies.",
    icon: Brain,
    color: "#6366F1",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#6366F1]/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Learning{" "}
            <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-gray-400 text-lg">My path to becoming a developer</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6366F1] via-[#8B5CF6] to-[#06B6D4]" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex gap-8 items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10">
                      <span
                        className="inline-block px-4 py-1 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full text-sm font-semibold mb-3"
                      >
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Icon */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center relative z-10"
                    style={{
                      boxShadow: `0 0 30px ${item.color}40`,
                    }}
                  >
                    <item.icon className="w-8 h-8" />
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
