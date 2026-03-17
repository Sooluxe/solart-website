import { motion } from 'framer-motion';
import { Infinity, Rocket, MessageSquare, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Infinity,
    title: 'Комплексный подход',
    description: 'Смотрим на проект целиком: сайт, бот, CRM, таблицы, аналитика. Связываем всё в единую систему.',
  },
  {
    icon: Rocket,
    title: 'Умеренный старт',
    description: 'Перед запуском тестируем сценарии и нагрузку. В первый же день система не падает от пользователей.',
  },
  {
    icon: MessageSquare,
    title: 'Понятная коммуникация',
    description: 'Работаем как одна команда с вашим бизнесом: фиксируем договоренности, показываем результаты.',
  },
  {
    icon: ShieldCheck,
    title: 'Поддержка после',
    description: 'Не исчезаем после релиза. Следим за работой решения, собираем обратную связь, вносим улучшения.',
  },
];

const stats = [
  { value: '15+', label: 'ПРОЕКТОВ' },
  { value: '2', label: 'ГОДА ОПЫТА' },
  { value: '∞', label: 'ЭНТУЗИАЗМА' },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-12 lg:px-24 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-24 relative z-10">

        {/* Левая колонка */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6 sm:mb-8"
          >
            <div className="h-[2px] w-10 sm:w-12 bg-accent/50"></div>
            <span className="text-accent font-mono uppercase tracking-[0.2em] text-xs sm:text-sm">01. О НАС</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-6 sm:mb-8"
          >
            Команда, которая думает <span className="text-accent">о бизнесе</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed space-y-4 sm:space-y-6 mb-8 sm:mb-12"
          >
            <p>
              Привет! Мы помогаем предпринимателям и малому бизнесу решать задачи с помощью технологий: делаем сайты, которые продают, ботов, которые экономят время, и дашборды, которые показывают всё на одном экране.
            </p>
            <p>
              Наша задача — не просто написать код, а дать вам работающий инструмент, который решит конкретную проблему и принесет результат.
            </p>
            <div className="h-[1px] w-full bg-white/10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex gap-8 sm:gap-10 md:gap-12"
          >
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-accent/70 font-bold">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Правая колонка */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group bg-white/[0.02] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col gap-4 sm:gap-6 cursor-default transition-all duration-300
                         hover:bg-accent/5 hover:border-accent/50
                         hover:shadow-[0_0_40px_-10px_rgba(0,250,255,0.5)]"
            >
              <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-accent transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(0,250,255,0.8)]" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-200">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
