import { motion } from "motion/react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

const techIcons = [
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#68A063" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "C++", color: "#00599C" },
  { name: "HTML", color: "#E34F26" },
  { name: "CSS", color: "#1572B6" },
  { name: "AI", color: "#8B5CF6" },
];

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/20 via-transparent to-[#8B5CF6]/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6366F1]/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8B5CF6]/30 rounded-full blur-[120px] animate-pulse delay-700" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-[#06B6D4] text-lg"
              >
                Hello, I'm
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                Building Modern{" "}
                <span className="bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
                  Web Experiences
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl text-gray-400"
              >
                with Code & Creativity
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-gray-300 max-w-xl"
              >
                Computer Science Engineering Student | Full Stack Developer | AI
                Enthusiast
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-gray-400 max-w-xl leading-relaxed"
              >
                Passionate about creating beautiful, functional web applications
                that solve real-world problems. Currently pursuing B.Tech in CSE
                at ABES Engineering College, specializing in modern web
                technologies and AI.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={() => scrollToSection("projects")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-lg text-white font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-[#6366F1]/50 transition-shadow"
              >
                View Projects
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white font-medium flex items-center gap-2 hover:bg-white/10 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://github.com/100rbh51"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.linkedin.com/in/saurabh-pal-325174395/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="mailto:100rbh51@gmail.com"
                className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Content - Profile Image with Floating Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glowing Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#06B6D4] rounded-full blur-2xl opacity-50 animate-pulse" />

              {/* Profile Circle */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-full p-1">
                <div className="w-full h-full bg-[#0B0F19] rounded-full flex items-center justify-center text-6xl font-bold">
                  SP
                </div>
              </div>

              {/* Floating Tech Icons */}
              {techIcons.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    opacity: { delay: 1 + index * 0.1 },
                    scale: { delay: 1 + index * 0.1 },
                    y: {
                      repeat: Infinity,
                      duration: 2 + index * 0.2,
                      ease: "easeInOut",
                    },
                  }}
                  className="absolute bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-sm font-medium"
                  style={{
                    top: `${50 + 45 * Math.sin((index * Math.PI * 2) / techIcons.length)}%`,
                    left: `${50 + 45 * Math.cos((index * Math.PI * 2) / techIcons.length)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {tech.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
