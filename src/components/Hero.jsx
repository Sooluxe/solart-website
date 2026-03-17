import { motion } from 'framer-motion';
import { Globe, Bot, Grid3x3, BarChart4, Monitor } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

const tags = [
  { icon: Globe, label: 'Tilda' },
  { icon: Bot, label: 'Bots' },
  { icon: Grid3x3, label: 'Mini Apps' },
  { icon: BarChart4, label: 'DataLens' },
  { icon: Monitor, label: 'Desktop' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden pt-28 sm:pt-32 md:pt-36 pb-12
                        bg-[url('/bg1.jpg')] bg-cover bg-center bg-no-repeat">

      {/* Animated particles background */}
      <ParticlesBackground />

      {/* Верхний бадж */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 sm:mb-10 px-4 sm:px-5 py-2 border border-accent/20 bg-[#0A1F29]/60 rounded-full backdrop-blur-xl flex items-center gap-2 relative z-10"
      >
        <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse shadow-[0_0_8px_#00FAFF]" />
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-accent font-medium">
          Разработка для бизнеса v2.0
        </span>
      </motion.div>

      {/* Главный заголовок */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        className="text-[2rem] sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[100px] font-black uppercase tracking-tighter leading-[1.1] mb-6 sm:mb-10 relative z-10 px-2"
      >
        Обслуживание <br />
        <span className="relative inline-block">
          <span className="absolute -inset-2 bg-accent/20 blur-2xl rounded-full -z-10 opacity-50"></span>
          <span className="bg-clip-text text-transparent bg-cyber drop-shadow-[0_0_30px_rgba(0,250,255,0.5)]">
            малого и среднего
          </span>
        </span> <br />
        бизнеса под ключ
      </motion.h1>

      {/* Описание */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-3xl text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-wide mb-8 sm:mb-12 leading-relaxed relative z-10 px-2"
      >
        Делаем <b className="text-white font-semibold">Telegram-ботов</b> и <b className="text-white font-semibold">Mini Apps</b>, <b className="text-white font-semibold">сайты</b>, дашборды в <b className="text-white font-semibold">DataLens</b>. Помогаем бизнесу запускаться быстрее и работать эффективнее.
      </motion.p>

      {/* Теги с иконками */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="flex flex-wrap justify-center gap-2.5 sm:gap-4 mb-10 sm:mb-16 relative z-10 px-2"
      >
        {tags.map(({ icon: Icon, label }) => (
          <motion.div
            key={label}
            whileHover={{
              scale: 1.05,
              y: -3,
              borderColor: 'rgba(0, 250, 255, 0.6)',
              backgroundColor: 'rgba(0, 250, 255, 0.1)'
            }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 bg-[#0F1115]/70 border border-white/10 rounded-xl cursor-pointer transition-shadow duration-300 backdrop-blur-md
                       hover:shadow-[0_0_25px_-5px_rgba(0,250,255,0.6)]"
          >
            <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent/60 group-hover:text-accent transition-colors duration-300" />
            <span className="text-xs sm:text-sm text-gray-400 font-medium group-hover:text-white transition-colors duration-300">
              {label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Кнопки */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 relative z-10 w-full sm:w-auto px-4 sm:px-0"
      >
        <a href="#contacts" className="bg-accent text-dark font-extrabold px-8 sm:px-10 py-3.5 sm:py-4 rounded-[4px] text-xs sm:text-sm uppercase tracking-widest hover:bg-white transition-colors shadow-[0_0_30px_-5px_rgba(0,250,255,0.5)] text-center">
          Обсудить проект
        </a>
        <a href="#cases" className="bg-transparent border-2 border-white/10 text-white font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-[4px] text-xs sm:text-sm uppercase tracking-widest hover:bg-white/5 hover:border-white/30 transition-all text-center">
          Смотреть кейсы
        </a>
      </motion.div>
    </section>
  );
}
