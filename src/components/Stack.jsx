import { motion } from 'framer-motion';

const techStack = [
  { name: 'Tilda' },
  { name: 'HTML/CSS' },
  { name: 'JS' },
  { name: 'React' },
  { name: 'Aiogram' },
  { name: 'TG mini app' },
  { name: 'DataLens' },
  { name: 'Google Sheets' },
  { name: 'Python' },
  { name: 'Flutter' },
];

export default function Stack() {
  return (
    <section id="stack" className="py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-12 lg:px-24 bg-dark relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">

        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-10 sm:mb-16"
        >
          <span className="text-accent text-xl sm:text-2xl font-black">//</span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-wider">
            Технологии и инструменты
          </h2>
        </motion.div>

        {/* Облако тегов */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{
                scale: 1.05,
                borderColor: 'rgba(0, 250, 255, 0.5)',
                backgroundColor: 'rgba(0, 250, 255, 0.05)'
              }}
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/[0.02] border border-white/10 rounded-lg cursor-default transition-all duration-300
                         group hover:shadow-[0_0_20px_rgba(0,250,255,0.2)]"
            >
              <span className="text-xs sm:text-sm md:text-base font-mono text-gray-400 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
