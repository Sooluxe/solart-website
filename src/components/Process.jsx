import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: '01',
    title: 'Созвон/чат',
    time: '20-60 минут',
    desc: 'Обсуждаем задачу, цели и ожидания. Понимаем, что вам действительно нужно.',
  },
  {
    id: '02',
    title: 'Бриф',
    time: '20-60 минут',
    desc: 'Фиксируем требования. Называем сроки и стоимость. Договариваемся об оплате.',
  },
  {
    id: '03',
    title: 'Прототип',
    time: '2-3 дня',
    desc: 'Делаем черновую версию. Согласуем структуру и логику до старта разработки.',
  },
  {
    id: '04',
    title: 'Код',
    time: '5-10 дней',
    desc: 'Реализуем проект итерациями. Показываем промежуточные результаты.',
  },
  {
    id: '05',
    title: 'Запуск',
    time: '1 день',
    desc: 'Передаем проект, доступы, обучаем. Проверяем работу вместе.',
  },
  {
    id: '06',
    title: 'Поддержка',
    time: '∞',
    desc: 'Остаемся на связи. Мелкие правки — бесплатно в течение 2 недель.',
  },
];

export default function Process() {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.75;
      const end = -rect.height * 0.3;
      const p = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
      setProgress(p);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const activeCount = Math.floor(progress * steps.length) + (progress > 0 ? 1 : 0);

  return (
    <section id="process" className="py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-12 lg:px-24 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Заголовок блока */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4 sm:mb-6"
          >
            <div className="h-0.5 w-10 sm:w-12 bg-accent/50"></div>
            <span className="text-accent font-mono uppercase tracking-[0.2em] text-xs sm:text-sm">05. ПРОЦЕСС</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight mb-4 sm:mb-6"
          >
            Как мы работаем
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-base sm:text-lg md:text-xl font-light"
          >
            Прозрачный алгоритм от первой идеи до поддержки
          </motion.p>
        </div>

        <div className="relative" ref={trackRef}>
          {/* Горизонтальная линия на десктопе */}
          <div className="absolute top-8 left-0 w-full h-0.5 bg-white/5 hidden lg:block" />
          <div
            className="absolute top-8 left-0 h-0.5 hidden lg:block transition-none"
            style={{
              width: `${progress * 100}%`,
              background: 'linear-gradient(90deg, #00FAFF, #0070FF)',
              boxShadow: '0 0 12px rgba(0,250,255,0.4)',
            }}
          />

          {/* Вертикальная линия на мобильном */}
          <div className="absolute top-0 left-[31px] w-0.5 h-full bg-white/5 lg:hidden" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-10 md:gap-12 lg:gap-4 relative">
            {steps.map((step, index) => {
              const isActive = index < activeCount;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group cursor-default gap-5 lg:gap-0"
                >
                  {/* Кружок с номером */}
                  <div className="relative mb-0 lg:mb-8 shrink-0">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 bg-dark
                                    flex items-center justify-center font-bold text-base sm:text-lg transition-all duration-500
                                    ${isActive
                                      ? 'border-accent text-white shadow-[0_0_25px_rgba(0,250,255,0.5)]'
                                      : 'border-white/10 text-gray-500 group-hover:border-accent group-hover:text-white group-hover:shadow-[0_0_25px_rgba(0,250,255,0.5)]'
                                    }`}>
                      {step.id}
                    </div>
                    <div className={`absolute inset-0 bg-accent/20 blur-xl rounded-full -z-10 transition-opacity duration-500
                                    ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                  </div>

                  {/* Текстовый контент */}
                  <div className="space-y-2 sm:space-y-3 min-w-0">
                    <h3 className={`text-lg sm:text-xl font-black uppercase tracking-tight transition-colors duration-300
                                   ${isActive ? 'text-accent' : 'text-white group-hover:text-accent'}`}>
                      {step.title}
                    </h3>

                    <div className="text-accent text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest">
                      {step.time}
                    </div>

                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed lg:max-w-[180px] lg:mx-auto transition-colors duration-300 group-hover:text-gray-200">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
