import { motion } from "motion/react";
import {
  Layout,
  Smartphone,
  FileCode,
  Palette,
  Globe,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    description:
      "Building beautiful, interactive user interfaces with modern frameworks and best practices.",
    icon: Layout,
  },
  {
    title: "Responsive Websites",
    description:
      "Creating pixel-perfect, mobile-first websites that work seamlessly across all devices.",
    icon: Smartphone,
  },
  {
    title: "Landing Pages",
    description:
      "High-converting landing pages designed to capture attention and drive action.",
    icon: Globe,
  },
  {
    title: "React Applications",
    description:
      "Developing dynamic, scalable single-page applications using React.js and modern tools.",
    icon: FileCode,
  },
  {
    title: "Portfolio Websites",
    description:
      "Professional portfolio sites that showcase your work and make a lasting impression.",
    icon: Palette,
  },
  {
    title: "Website Redesign",
    description:
      "Modernizing existing websites with fresh designs, improved UX, and better performance.",
    icon: Sparkles,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#06B6D4]/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I Can{" "}
            <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
              Help With
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Services I offer to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-xl flex items-center justify-center mb-6"
                >
                  <service.icon className="w-8 h-8" />
                </motion.div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-[#06B6D4] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
