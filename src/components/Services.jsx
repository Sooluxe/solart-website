import { motion } from 'framer-motion';
import { Layout, MessageSquare, Smartphone, BarChart3, Terminal, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'Сайты на Tilda',
    subtitle: 'ЛЕНДИНГИ И МНОГОСТРАНИЧНИКИ',
    desc: 'Продающие сайты под запуск продукта, услуги или мероприятия. Адаптивный дизайн, SEO-оптимизация.',
    features: ['Лендинг за 7-10 дней', 'Интеграция с CRM', 'Мобильная адаптация', 'Аналитика'],
  },
  {
    icon: MessageSquare,
    title: 'Telegram-боты',
    subtitle: 'АВТОМАТИЗАЦИЯ И ВОРОНКИ',
    desc: 'Боты для сбора заявок, автоответов, рассылок и интеграции с вашими системами. Экономят время команды.',
    features: ['Бот за 5-7 дней', 'Интеграция с Google Sheets', 'Воронки продаж', 'Уведомления'],
  },
  {
    icon: Smartphone,
    title: 'Telegram mini app',
    subtitle: 'ПРИЛОЖЕНИЯ ВНУТРИ МЕССЕНДЖЕРА',
    desc: 'Полноценные веб-приложения, встроенные в Telegram: каталоги, бронирование, личные кабинеты.',
    features: ['Оплата через Telegram', 'Работа без установки', 'Push-уведомления', 'Геолокация'],
  },
  {
    icon: BarChart3,
    title: 'Аналитика DataLens',
    subtitle: 'ДАШБОРДЫ И ОТЧЕТЫ',
    desc: 'Визуализация данных бизнеса: продажи, воронки, метрики. Всё на одном экране в реальном времени.',
    features: ['Подключение к любым данным', 'Автообновление', 'Фильтры и детализация', 'Доступ по ссылке'],
  },
  {
    icon: Terminal,
    title: 'Десктоп-приложения',
    subtitle: 'УТИЛИТЫ НА PYTHON/FLUTTER',
    desc: 'Программы для автоматизации рутины: парсеры, обработка файлов, синхронизация между системами.',
    features: ['Под вашу задачу', 'Работа без интернета', 'Простой интерфейс', 'Обучение'],
  },
  {
    icon: Sparkles,
    title: 'Нейровизуал',
    subtitle: 'ИЗОБРАЖЕНИЯ И ВИДЕО',
    desc: 'Генерация креативов, баннеров, иллюстраций с помощью нейросетей. Уникальный контент для рекламы и соцсетей.',
    features: ['Быстрая генерация', 'Любой стиль', 'Редактирование', 'Коммерческое использование'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-12 lg:px-24 bg-dark relative">
      <div className="max-w-7xl mx-auto">

        {/* Заголовок блока */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-4 sm:gap-6">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4 sm:mb-6"
            >
              <div className="h-[2px] w-10 sm:w-12 bg-accent/50"></div>
              <span className="text-accent font-mono uppercase tracking-[0.2em] text-xs sm:text-sm">02. УСЛУГИ</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight"
            >
              Что мы делаем
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-right hidden md:block"
          >
            <span className="text-[10px] font-mono tracking-[0.3em] text-gray-500 uppercase">
              CODE // DESIGN // AUTOMATION
            </span>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-base sm:text-lg mb-10 sm:mb-16 max-w-2xl"
        >
          Комплексные цифровые решения для трансформации вашего бизнеса.
        </motion.p>

        {/* Сетка услуг */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                backgroundColor: 'rgba(0, 250, 255, 0.03)'
              }}
              className="group relative bg-white/[0.02] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col transition-all duration-300
                         hover:border-accent/40 hover:shadow-[0_0_50px_-15px_rgba(0,250,255,0.3)]"
            >
              {/* Иконка */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-accent/20 transition-colors">
                <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent group-hover:drop-shadow-[0_0_8px_rgba(0,250,255,0.8)]" />
              </div>

              {/* Текстовый контент */}
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2 uppercase tracking-tight">{s.title}</h3>
              <p className="text-[9px] sm:text-[10px] font-mono tracking-[0.15em] sm:tracking-[0.2em] text-accent/60 mb-4 sm:mb-6 uppercase font-bold">{s.subtitle}</p>

              <p className="text-gray-400 text-sm leading-relaxed mb-6 sm:mb-8 flex-grow group-hover:text-gray-200 transition-colors">
                {s.desc}
              </p>

              {/* Список фич */}
              <ul className="space-y-2.5 sm:space-y-3">
                {s.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 sm:gap-3 text-[11px] text-gray-300 font-medium uppercase tracking-wide group-hover:text-white transition-colors">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_5px_#00FAFF] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
