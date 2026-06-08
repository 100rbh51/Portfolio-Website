import { motion } from "motion/react";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Bootstrap", level: 85 },
      { name: "React.js", level: 87 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
    ],
  },
  {
    category: "Programming",
    skills: [
      { name: "C++", level: 85 },
      { name: "DSA", level: 80 },
    ],
  },
  {
    category: "Other",
    skills: [
      { name: "AI", level: 75 },
      { name: "Git", level: 88 },
      { name: "GitHub", level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#06B6D4]/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg">Technologies I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 to-[#8B5CF6]/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#6366F1] to-[#06B6D4] bg-clip-text text-transparent">
                  {category.category}
                </h3>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-200 font-medium">{skill.name}</span>
                        <span className="text-[#06B6D4]">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                            duration: 1,
                            ease: "easeOut",
                          }}
                          className="h-full bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#06B6D4] relative"
                        >
                          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white/20" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
