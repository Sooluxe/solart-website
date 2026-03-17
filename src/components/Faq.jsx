import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Сколько стоит разработка?',
    answer: 'Стоимость всегда индивидуальна и зависит от сложности логики, количества интеграций и сроков. Мы работаем в среднем ценовом сегменте, ориентируясь на малый бизнес. Точную вилку цен называем после первого созвона и брифинга.',
  },
  {
    question: 'Какие сроки разработки?',
    answer: 'Лендинги на Tilda — от 7 дней. Telegram-боты средней сложности — от 5 до 10 дней. Сложные системы с дашбордами и Mini Apps могут занимать от 3 недель. Мы всегда фиксируем дедлайн в договоре.',
  },
  {
    question: 'Как происходит оплата?',
    answer: 'Обычно мы работаем по схеме 50/50: предоплата перед стартом и финальный расчет после приема работы. Для крупных проектов возможна разбивка на 3-4 этапа с оплатой по факту выполнения каждого.',
  },
  {
    question: 'Можно ли доработать проект после сдачи?',
    answer: 'Да. Мы предоставляем 2 недели бесплатной поддержки для исправления мелких багов или правок. Если нужны масштабные изменения в будущем, мы можем договориться о почасовой оплате или отдельном этапе разработки.',
  },
  {
    question: 'Как передаются доступы и права?',
    answer: 'После финальной оплаты мы передаем все права на код и контент. Переносим сайт на ваш аккаунт Tilda, передаем API-ключи ботов и доступы к базам данных. Вы становитесь полным владельцем продукта.',
  },
  {
    question: 'Что если результат мне не понравится?',
    answer: 'Чтобы этого не случилось, мы делим работу на этапы: сначала прототип и структура, затем дизайн, потом код. На каждом этапе вы даете обратную связь. Так мы гарантируем, что итоговый продукт будет соответствовать вашим ожиданиям.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-12 lg:px-24 bg-dark relative overflow-hidden">
      <div className="max-w-4xl mx-auto">

        {/* Заголовок */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-center mb-10 sm:mb-16 tracking-tight"
        >
          Частые вопросы
        </motion.h2>

        {/* Список вопросов */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`w-full text-left p-4 sm:p-6 border transition-all duration-300 flex justify-between items-center gap-3 sm:gap-4
                    ${isOpen
                      ? 'bg-accent/5 border-accent/40 rounded-t-2xl rounded-b-none border-b-0 shadow-[0_0_30px_-10px_rgba(0,250,255,0.2),inset_0_0_30px_-15px_rgba(0,250,255,0.05)]'
                      : 'bg-white/2 border-white/5 hover:border-white/20 hover:bg-white/[0.04] rounded-2xl'}`}
                >
                  <span className={`font-bold text-sm sm:text-base uppercase tracking-wide transition-colors
                    ${isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0 transition-transform duration-500
                    ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 sm:p-6 text-gray-400 text-sm sm:text-base leading-relaxed border-x border-b border-accent/40 rounded-b-2xl bg-accent/[0.02] shadow-[0_10px_30px_-10px_rgba(0,250,255,0.1)]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
