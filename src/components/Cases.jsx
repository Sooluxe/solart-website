import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TiltCard from './TiltCard';

const allProjects = [
  {
    id: 1,
    category: 'Telegram Mini App',
    tag: 'MINI APP',
    title: 'Mini App для сервиса доставки еды',
    task: 'Создать полноценную платформу доставки еды внутри Telegram — каталог ресторанов, корзина, оплата, отслеживание.',
    solution: 'Фронтенд на React 18 + Vite + Tailwind с Telegram WebApp SDK. Бэкенд на NestJS с PostgreSQL, Redis, JWT-авторизацией и TypeORM. Подключил оплату через YooKassa и real-time обновления статусов.',
    result: 'Пользователи оформляют заказ за ~40 секунд. 80% доходят до этапа оплаты без единого выхода из Telegram.',
    tech: ['React', 'NestJS', 'PostgreSQL', 'Redis'],
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=800',
  },
  {
    id: 2,
    category: 'Telegram Mini App',
    tag: 'MINI APP',
    title: 'FitFlow: запись в фитнес-клуб через Telegram',
    task: 'Разработать систему бронирования тренировок для фитнес-клуба с админ-панелью и автоматическими уведомлениями.',
    solution: 'Mini App на React + Vite + TailwindCSS + shadcn/ui. Бэкенд — NestJS + Prisma + PostgreSQL. Админка на Refine.dev + Ant Design. Бот на Grammy, очереди через BullMQ + Redis. Всё в Docker.',
    result: 'Полностью автономная запись на тренировки. Администраторы управляют расписанием через удобную веб-панель.',
    tech: ['React', 'NestJS', 'Prisma', 'Docker'],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800',
  },
  {
    id: 3,
    category: 'TELEGRAM бот',
    tag: 'BOT DEV',
    title: 'Бот для записи в салон красоты с оплатой',
    task: 'Автоматизировать запись клиентов, выбор мастера и онлайн-оплату услуг салона красоты через Telegram.',
    solution: 'Python-бот на Aiogram 3.x с PostgreSQL + SQLAlchemy 2.0. Интегрировал YooKassa для приёма платежей, APScheduler для напоминаний, Alembic для миграций. Админ-панель для управления расписанием.',
    result: 'Запись стала полностью автономной. Клиенты выбирают мастера, время и оплачивают услугу — всё без участия администратора.',
    tech: ['Python', 'Aiogram 3', 'PostgreSQL', 'YooKassa'],
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800',
  },
  {
    id: 4,
    category: 'TELEGRAM бот',
    tag: 'AUTOMATION',
    title: 'Бот-модератор для крупных чатов',
    task: 'Создать систему модерации для чатов 10к+ участников: фильтрация спама, капча, антимат, кастомные приветствия.',
    solution: 'Python + Aiogram с SQLite в WAL-режиме для производительности. Реализовал капчу для новых участников, спам-фильтр по эмодзи, фильтр нецензурной лексики с расширяемым словарём. Бесплатный и PRO-тарифы.',
    result: 'Количество спам-сообщений снизилось на 95%. Бот обслуживает несколько чатов одновременно без участия живых модераторов.',
    tech: ['Python', 'Aiogram', 'SQLite'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800',
  },
  {
    id: 5,
    category: 'Python',
    tag: 'ML / CV',
    title: 'AutoCheck AI: детекция дефектов авто по фото',
    task: 'Создать MVP сервиса, который по фотографиям автомобиля определяет перекрасы, царапины и шпаклёвку, и генерирует PDF-отчёт.',
    solution: 'FastAPI-сервис с YOLOv8n для детекции дефектов и OpenCV для обработки изображений. Автоматическая генерация PDF-отчёта. Контейнеризация через Docker.',
    result: '88% покрытие кода тестами (32 теста). Сервис анализирует фото и выдаёт структурированный отчёт за секунды.',
    tech: ['FastAPI', 'YOLOv8', 'OpenCV', 'Docker'],
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800',
  },
  {
    id: 6,
    category: 'Web',
    tag: 'WEB APP',
    title: 'ContentForge: AI-платформа генерации контента',
    task: 'Разработать веб-платформу для генерации, гуманизации и A/B тестирования контента с помощью ИИ.',
    solution: 'Фронтенд на Next.js 14 + TypeScript + Tailwind CSS. Бэкенд на FastAPI. Реализовал анализ ключевых слов, гуманизацию текста и A/B тестирование вариантов.',
    result: 'Полноценная платформа для контент-маркетинга: от генерации до тестирования — всё в одном интерфейсе.',
    tech: ['Next.js', 'TypeScript', 'FastAPI', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800',
  },
  {
    id: 7,
    category: 'Python',
    tag: 'DESKTOP SOFT',
    title: 'PriceFinder: поиск по 50 000+ строкам Excel',
    task: 'Сделать быстрый поиск позиций сразу в нескольких прайс-листах Excel с разной структурой и кодировкой.',
    solution: 'Desktop-приложение на Python + CustomTkinter. Реализовал fallback-систему из 4 движков чтения Excel (openpyxl, xlrd, calamine, pandas), автоопределение кодировки и нормализацию текста.',
    result: 'Поиск по 50 000+ строкам за менее чем 1 секунду. Экономия 12-15 рабочих часов в неделю.',
    tech: ['Python', 'pandas', 'CustomTkinter'],
    image: 'https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=800',
  },
  {
    id: 8,
    category: 'Python',
    tag: 'DESKTOP SOFT',
    title: 'ЕФГИС Comparer: сверка данных с госсистемой',
    task: 'Автоматизировать сверку данных Плана СПП с выгрузками из государственной системы ЕФГИС ЗСН.',
    solution: 'Desktop-приложение на Python + tkinter + openpyxl. Загрузка двух Excel-файлов, автоматическое сопоставление записей, поиск расхождений и экспорт отчёта с цветовой маркировкой.',
    result: 'Сверка 250+ записей занимает менее 60 секунд вместо нескольких часов ручной работы.',
    tech: ['Python', 'tkinter', 'openpyxl'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800',
  },
  {
    id: 9,
    category: 'Python',
    tag: 'DESKTOP SOFT',
    title: 'Sherlozon: сверка бухгалтерских данных',
    task: 'Разработать десктоп-инструмент для reconciliation финансовых и бухгалтерских данных с удобным интерфейсом.',
    solution: 'Приложение на PySide6 (Qt) с тёмной темой. Табличное отображение данных, прогресс-бар обработки, split-layout для сравнения источников.',
    result: 'Наглядная сверка данных из разных источников в один клик. Ошибки подсвечиваются автоматически.',
    tech: ['Python', 'PySide6', 'pandas'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800',
  },
  {
    id: 10,
    category: 'Web',
    tag: 'WEB APP',
    title: 'Pallet Planner: оптимизатор укладки грузов',
    task: 'Создать веб-инструмент для визуализации и оптимизации укладки коробок на паллеты с импортом данных из CSV.',
    solution: 'React + Vite + TypeScript + Tailwind CSS. Canvas 2D для визуализации укладки. Импорт CSV с параметрами коробок, эвристические алгоритмы размещения, экспорт отчёта.',
    result: 'Визуальное планирование укладки паллет прямо в браузере. Экспорт схемы в CSV/текст для склада.',
    tech: ['React', 'TypeScript', 'Canvas 2D', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800',
  },
  {
    id: 11,
    category: 'DataLens',
    tag: 'ANALYTICS',
    title: 'Дашборд: эффективность отделов компании',
    task: 'Собрать в одном месте план/факт, выручку и ключевые KPI по отделам.',
    solution: 'Написал Python-скрипты для регулярной выгрузки данных, очистки показателей, собрал витрину и дашборд в Yandex DataLens.',
    result: 'Еженедельные сводные отчёты перестали делать руками — руководители сами смотрят актуальные цифры.',
    tech: ['Yandex DataLens', 'Python'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800',
  },
];

const filters = ['Все', 'Telegram Mini App', 'TELEGRAM бот', 'Python', 'Web', 'DataLens'];

export default function Cases() {
  const [activeFilter, setActiveFilter] = useState('Все');
  const [currentPage, setCurrentPage] = useState(0);

  const filteredProjects = useMemo(() => {
    setCurrentPage(0);
    if (activeFilter === 'Все') return allProjects;
    return allProjects.filter(p =>
      p.category === activeFilter || p.tag.includes(activeFilter.toUpperCase())
    );
  }, [activeFilter]);

  const projectsPerPage = 3;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const currentProjects = filteredProjects.slice(
    currentPage * projectsPerPage,
    (currentPage * projectsPerPage) + projectsPerPage
  );

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <section id="cases" className="py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-12 lg:px-24 bg-dark">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-8 sm:mb-12">
          <div className="text-accent font-mono uppercase tracking-[0.3em] text-[10px] mb-4 sm:mb-6">03. ПОРТФОЛИО</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-8 sm:mb-12 text-white">Кейсы и примеры работ</h2>

          {/* Фильтры - горизонтальный скролл на мобильном */}
          <div className="overflow-x-auto -mx-5 sm:mx-0 px-5 sm:px-0 scrollbar-hide">
            <div className="flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3 min-w-max sm:min-w-0">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 sm:px-6 py-2 rounded-md text-[10px] font-bold uppercase tracking-widest transition-all border whitespace-nowrap
                    ${activeFilter === f
                      ? 'bg-accent border-accent text-dark shadow-[0_0_20px_rgba(0,250,255,0.4)]'
                      : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-20 sm:space-y-32 mt-12 sm:mt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter + currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {currentProjects.map((p, index) => (
                <div
                  key={p.id}
                  className={`flex flex-col lg:flex-row gap-8 sm:gap-12 items-center mb-20 sm:mb-32 last:mb-0 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 w-full relative group">
                    <div className="absolute -inset-4 bg-accent/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <TiltCard className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/5 bg-white/2 hover:shadow-[0_20px_60px_-20px_rgba(0,250,255,0.15)]">
                      <img src={p.image} alt={p.title} className="w-full h-auto aspect-video object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700" />
                    </TiltCard>
                  </div>

                  <div className="flex-1 space-y-4 sm:space-y-6">
                    <div className="inline-block px-3 py-1 border border-accent/40 text-accent text-[9px] font-bold uppercase tracking-widest rounded-sm">
                      {p.tag}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase leading-tight">{p.title}</h3>

                    <div className="space-y-4 sm:space-y-5 text-gray-400 text-sm sm:text-base leading-relaxed text-left">
                      <p><span className="text-white font-bold uppercase text-[10px] tracking-widest block mb-1">Задача:</span> {p.task}</p>
                      <p><span className="text-white font-bold uppercase text-[10px] tracking-widest block mb-1">Решение:</span> {p.solution}</p>
                      <p><span className="text-white font-bold uppercase text-[10px] tracking-widest block mb-1">Результат:</span> {p.result}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2 sm:pt-4 justify-start">
                      {p.tech.map(t => (
                        <span key={t} className="px-2.5 sm:px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-mono text-gray-300 uppercase">
                          {t}
                        </span>
                      ))}
                    </div>

                    {p.link && (
                      <div className="text-left">
                        <a href={`https://t.me/${p.link.replace('@', '')}`} className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest hover:underline pt-2 sm:pt-4">
                          <span className="text-lg">↗</span> Бот: {p.link}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Пагинация */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-6 sm:gap-8 mt-12 sm:mt-20">
            <button
              onClick={prevPage}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-white/10 text-gray-400
                         hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(0,250,255,0.3)]
                         transition-all duration-300 group"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <div className="flex gap-3">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`h-1.5 transition-all duration-500 rounded-full ${
                    i === currentPage ? 'w-8 sm:w-10 bg-accent' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-white/10 text-gray-400
                         hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(0,250,255,0.3)]
                         transition-all duration-300 group"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
