import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail } from 'lucide-react';

export default function Contacts() {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function onScroll() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const vh = window.innerHeight;
      setOffset(center - vh / 2);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="contacts" ref={sectionRef} className="pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 px-5 sm:px-6 md:px-12 lg:px-24 bg-dark relative overflow-hidden">

      {/* Parallax orbs */}
      <div
        className="absolute w-[300px] h-[300px] rounded-full pointer-events-none -left-20 top-10 opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(0,250,255,0.07), transparent 70%)',
          filter: 'blur(40px)',
          transform: `translateY(${offset * 0.15}px)`,
        }}
      />
      <div
        className="absolute w-[200px] h-[200px] rounded-full pointer-events-none -right-10 bottom-20 opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(0,112,255,0.08), transparent 70%)',
          filter: 'blur(30px)',
          transform: `translateY(${offset * -0.1}px)`,
        }}
      />
      <div
        className="absolute w-[120px] h-[120px] rounded-full pointer-events-none right-[15%] top-[30%] opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(0,250,255,0.1), transparent 70%)',
          filter: 'blur(20px)',
          transform: `translateY(${offset * 0.2}px)`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Основной контент */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 mb-16 sm:mb-24 md:mb-32">

          {/* Левая сторона */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-6 sm:mb-8"
            >
              <div className="inline-block px-3 py-1 border border-accent/30 text-accent text-[9px] font-bold uppercase tracking-widest rounded-sm mb-4 sm:mb-6">
                КОНТАКТЫ
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6 sm:mb-8">
                Давайте обсудим <br className="hidden sm:block" /> ваш проект
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-md leading-relaxed">
                Расскажите о задаче — ответим в течение 24 часов. Первая консультация бесплатно.
              </p>
            </motion.div>

            <div className="space-y-3 sm:space-y-4 mt-4 lg:mt-auto">
              {/* Карточка Telegram */}
              <motion.a
                href="https://t.me/programmer0555"
                target="_blank"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-white/2 border border-white/5 rounded-2xl hover:border-accent/40 transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shrink-0">
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-white font-bold text-base sm:text-lg">Telegram</div>
                  <div className="text-gray-500 text-sm truncate">@programmer0555</div>
                </div>
              </motion.a>

              {/* Карточка Email */}
              <motion.a
                href="mailto:soleev.alex@gmail.com"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-white/2 border border-white/5 rounded-2xl hover:border-accent/40 transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500 shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-white font-bold text-base sm:text-lg">Email</div>
                  <div className="text-gray-500 text-sm truncate">roleev.alex@gmail.com</div>
                </div>
              </motion.a>
            </div>
          </div>

          {/* Правая сторона: Форма */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/2 border border-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl -z-10" />

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 sm:mb-10">Оставить заявку</h3>

            <form className="space-y-6 sm:space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold">Имя</label>
                <input
                  type="text"
                  placeholder="Как к Вам обращаться?"
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white text-sm sm:text-base placeholder:text-gray-600 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold">TELEGRAM ИЛИ EMAIL</label>
                <input
                  type="text"
                  placeholder="@username"
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white text-sm sm:text-base placeholder:text-gray-600 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold">Кратко о задаче</label>
                <textarea
                  rows="3"
                  placeholder="Расскажите, что нужно сделать..."
                  className="w-full bg-transparent border-b border-white/10 py-3 text-white text-sm sm:text-base placeholder:text-gray-600 focus:outline-none focus:border-accent transition-colors resize-none"
                ></textarea>
              </div>

              <button className="w-full py-4 sm:py-5 bg-accent text-dark font-black uppercase tracking-widest text-xs sm:text-sm rounded-sm hover:bg-white transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(0,250,255,0.4)]">
                Отправить заявку
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
