import { useEffect } from "react";
import Icon from "@/components/ui/icon";

const timelineData = [
  {
    year: "≈ 1300 до н.э.",
    era: "Древний Египет",
    title: "Первый токарный станок",
    emoji: "🏺",
    color: "#C8832A",
    description:
      "Египтяне изобрели примитивный токарный станок: один человек держал режущий инструмент, второй вращал заготовку верёвочной петлёй. Первые изделия — деревянные ножки мебели и ритуальные сосуды.",
    fact: "Найденные фрески показывают двух мастеров за работой",
    tags: ["Дерево", "Ручной привод", "Верёвочный лук"],
    icon: "Wrench",
  },
  {
    year: "≈ 300 до н.э.",
    era: "Древняя Греция и Рим",
    title: "Ножной привод",
    emoji: "🏛️",
    color: "#B07020",
    description:
      "Греки и римляне усовершенствовали станок, добавив ножную педаль с гибкой жердью — «пружинный токарный станок». Мастер мог работать обеими руками, удерживая резец точно.",
    fact: "Такие станки использовались для изготовления колонн и мраморных деталей",
    tags: ["Педальный привод", "Пружинная жердь", "Камень и дерево"],
    icon: "Settings",
  },
  {
    year: "XIII–XV вв.",
    era: "Средневековье",
    title: "Токарный станок с коромыслом",
    emoji: "⚔️",
    color: "#9A6010",
    description:
      "В средневековой Европе появился станок с коромыслом и маховиком. Цеховые мастера-токари получили статус привилегированных ремесленников. Изготовление оружейных рукоятей, деталей доспехов.",
    fact: "В 1376 г. в Париже основана гильдия токарей",
    tags: ["Маховик", "Цеховое ремесло", "Металл"],
    icon: "Shield",
  },
  {
    year: "≈ 1483",
    era: "Эпоха Возрождения",
    title: "Непрерывное вращение",
    emoji: "🎨",
    color: "#8B3A1A",
    description:
      "Леонардо да Винчи создал эскизы станка с кривошипно-шатунным механизмом — первый проект непрерывного вращения без обратного хода. Революция в принципе работы.",
    fact: "Эскизы хранятся в Codex Atlanticus в Милане",
    tags: ["Кривошип", "Непрерывное вращение", "Инновация"],
    icon: "Lightbulb",
  },
  {
    year: "≈ 1550",
    era: "Ренессанс",
    title: "Токарное искусство при дворах",
    emoji: "👑",
    color: "#C8832A",
    description:
      "Токарное дело стало придворным искусством. Король Франции Генрих II, германские императоры лично работали на токарных станках. Появился термин «токарное искусство» — art de tourner.",
    fact: "Пётр I изучил токарное дело в Голландии и имел личный станок",
    tags: ["Придворное искусство", "Слоновая кость", "Ювелирная точность"],
    icon: "Crown",
  },
  {
    year: "1751",
    era: "Промышленная революция",
    title: "Металлический суппорт",
    emoji: "⚙️",
    color: "#6A7A8A",
    description:
      "Французский изобретатель Жак де Вокансон создал токарный станок с металлическим суппортом для фиксации резца. Первый шаг к точному машиностроению — резец больше не держат руками.",
    fact: "Точность обработки выросла в десятки раз",
    tags: ["Металлический суппорт", "Точность", "Механизация"],
    icon: "Cog",
  },
  {
    year: "1800",
    era: "Промышленная революция",
    title: "Станок Генри Модсли",
    emoji: "🔧",
    color: "#5A6A7A",
    description:
      "Британец Генри Модсли создал токарно-винторезный станок с ходовым винтом и сменными шестернями — прародитель всех современных токарных станков. Стало возможным нарезать резьбу любого шага.",
    fact: "Точность достигала 0.001 дюйма — невероятно для того времени",
    tags: ["Ходовой винт", "Резьбонарезание", "Взаимозаменяемость"],
    icon: "Zap",
  },
  {
    year: "1850–1900",
    era: "Эпоха пара",
    title: "Паровой и приводной токарный станок",
    emoji: "🚂",
    color: "#4A5A6A",
    description:
      "Промышленная революция принесла паровой привод в токарные цеха. Появились трансмиссионные системы с ременными передачами от парового двигателя. Серийное производство деталей машин.",
    fact: "К 1890-м в США работало более 50 000 токарных станков",
    tags: ["Паровой привод", "Трансмиссия", "Серийное производство"],
    icon: "Flame",
  },
  {
    year: "1910–1930",
    era: "Электрическая эпоха",
    title: "Электрический привод",
    emoji: "⚡",
    color: "#3A8A9A",
    description:
      "Электродвигатель заменил пар и ремни. Каждый станок получил собственный привод, скорость стала плавно регулироваться. Появились универсальные токарные станки для массового машиностроения.",
    fact: "СССР запустил производство токарных станков ДИП-200 в 1932 году",
    tags: ["Электродвигатель", "Регулировка скорости", "Стандартизация"],
    icon: "Bolt",
  },
  {
    year: "1952",
    era: "Цифровая революция",
    title: "Первый станок с ЧПУ",
    emoji: "🖥️",
    color: "#2A7A8A",
    description:
      "MIT разработал первый станок с числовым программным управлением (ЧПУ). Программа на перфоленте управляла движением инструмента. Точность и воспроизводимость стали абсолютными.",
    fact: "Проект финансировало ВВС США для производства авиадеталей",
    tags: ["ЧПУ", "Перфолента", "Автоматизация"],
    icon: "Cpu",
  },
  {
    year: "1980–2000",
    era: "Компьютерная эпоха",
    title: "CAD/CAM и токарные центры",
    emoji: "💻",
    color: "#1A6A7A",
    description:
      "Компьютерное проектирование (CAD) и управление производством (CAM) слились с токарными станками. Появились многоосевые токарные центры, способные обрабатывать детали за один установ.",
    fact: "Точность современных ЧПУ-станков — до 1 микрона (0.001 мм)",
    tags: ["CAD/CAM", "Многоосевая обработка", "Компьютер"],
    icon: "Monitor",
  },
  {
    year: "2000-е — наши дни",
    era: "Высокие технологии",
    title: "Лазер, робот и Smart Factory",
    emoji: "🤖",
    color: "#C8832A",
    description:
      "Токарные станки интегрируются с роботами-манипуляторами, системами машинного зрения и IoT-сенсорами. Концепция «умного завода» — полностью автономное производство без участия человека.",
    fact: "Некоторые заводы Toyota работают 24/7 без операторов у станков",
    tags: ["Роботизация", "IoT", "Умный завод", "Нейросети"],
    icon: "Bot",
  },
];

const galleryItems = [
  {
    title: "Деревянная чаша, Египет",
    period: "≈ 1200 до н.э.",
    image:
      "https://cdn.poehali.dev/projects/de837130-753d-4148-8c0e-d127b8043ea4/files/dc7f7785-89f2-44de-91ee-134527ff635b.jpg",
    desc: "Первые токарные изделия — ритуальная посуда из дерева",
  },
  {
    title: "Средневековый станок",
    period: "XIV век",
    image:
      "https://cdn.poehali.dev/projects/de837130-753d-4148-8c0e-d127b8043ea4/files/3bd55625-dd0a-44e5-af1b-462659d82f4f.jpg",
    desc: "Европейский цеховой токарный станок с маховиком",
  },
  {
    title: "Современный ЧПУ-центр",
    period: "XXI век",
    image:
      "https://cdn.poehali.dev/projects/de837130-753d-4148-8c0e-d127b8043ea4/files/4521cd6e-6106-47e4-a315-0e2f69ece1bd.jpg",
    desc: "Многоосевой токарный обрабатывающий центр с ЧПУ",
  },
];

export default function Index() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-[72vh] flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 55% at 50% 15%, rgba(200,131,42,0.13) 0%, transparent 70%)",
          }}
        />
        {/* Horizontal lines decoration */}
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px pointer-events-none"
            style={{
              top: `${12 + i * 13}%`,
              background: "linear-gradient(90deg, transparent 5%, rgba(200,131,42,0.12) 50%, transparent 95%)",
            }}
          />
        ))}

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8"
            style={{
              borderColor: "rgba(200,131,42,0.35)",
              background: "rgba(200,131,42,0.07)",
              color: "#E8A84A",
            }}
          >
            <Icon name="Clock" size={13} />
            <span className="text-xs uppercase tracking-[0.2em] font-medium">Лента времени</span>
          </div>

          <h1
            className="text-5xl md:text-8xl font-bold mb-6 leading-none tracking-wide"
            style={{
              fontFamily: "Oswald, sans-serif",
              background: "linear-gradient(135deg, #F0C060 0%, #C8832A 45%, #8A9BA8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ТОКАРНОЕ
            <br />
            ДЕЛО
          </h1>

          <p
            className="text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "#7A8B98", fontWeight: 300 }}
          >
            От деревянного лука египтян до роботизированных цехов —<br />
            <strong style={{ color: "#C8832A", fontWeight: 400 }}>3000 лет эволюции</strong> одного из древнейших ремёсел
          </p>

          <div className="flex items-center justify-center gap-10 mt-10">
            {[
              { num: "3000+", label: "лет истории" },
              { num: "12", label: "этапов" },
              { num: "0.001мм", label: "точность сегодня" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "Oswald", color: "#C8832A" }}>
                  {s.num}
                </div>
                <div className="text-xs mt-0.5 uppercase tracking-widest" style={{ color: "#6A7A88" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Icon name="ChevronDown" size={26} style={{ color: "#C8832A", margin: "0 auto", animation: "bounce 2s infinite" }} />
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="relative max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="reveal text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-3 tracking-[0.1em]"
            style={{ fontFamily: "Oswald", color: "#E8A84A" }}
          >
            ХРОНОЛОГИЯ
          </h2>
          <div className="w-14 h-0.5 mx-auto" style={{ background: "#C8832A" }} />
        </div>

        {/* Vertical line (desktop) */}
        <div
          className="hidden md:block absolute left-1/2 -translate-x-1/2 w-px"
          style={{
            top: "120px",
            bottom: "40px",
            background: "linear-gradient(to bottom, transparent, #C8832A 8%, #C8832A 92%, transparent)",
            opacity: 0.5,
          }}
        />

        <div className="relative">
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} className="relative flex items-center mb-10 md:mb-8">
                {/* Left side */}
                <div className={`w-full md:w-[calc(50%-28px)] ${isLeft ? "md:pr-8" : "md:order-3 md:pl-8"}`}>
                  {isLeft ? (
                    <div
                      className="reveal-left timeline-card rounded-lg border p-5 cursor-default"
                      style={{
                        background: "hsl(20, 10%, 9%)",
                        borderColor: `${item.color}28`,
                        borderLeftColor: item.color,
                        borderLeftWidth: "3px",
                        transitionDelay: `${index * 0.05}s`,
                      }}
                    >
                      <TimelineCard item={item} />
                    </div>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>

                {/* Center dot */}
                <div
                  className="hidden md:flex order-2 flex-shrink-0 w-14 h-14 rounded-full items-center justify-center z-10"
                  style={{
                    background: `radial-gradient(circle, ${item.color} 0%, ${item.color}88 100%)`,
                    boxShadow: `0 0 16px ${item.color}60, 0 0 4px ${item.color}`,
                  }}
                >
                  <Icon name={item.icon} size={20} style={{ color: "#100800" }} />
                </div>

                {/* Right side */}
                <div className={`w-full md:w-[calc(50%-28px)] ${!isLeft ? "md:order-1 md:pr-8" : "md:order-3 md:pl-8"}`}>
                  {!isLeft ? (
                    <div
                      className="reveal-right timeline-card rounded-lg border p-5 cursor-default"
                      style={{
                        background: "hsl(20, 10%, 9%)",
                        borderColor: `${item.color}28`,
                        borderRightColor: item.color,
                        borderRightWidth: "3px",
                        transitionDelay: `${index * 0.05}s`,
                      }}
                    >
                      <TimelineCard item={item} />
                    </div>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>

                {/* Mobile card (all left) */}
                <div className="flex md:hidden w-full">
                  <div
                    className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center mr-4 mt-1"
                    style={{
                      background: item.color,
                      boxShadow: `0 0 10px ${item.color}60`,
                    }}
                  >
                    <Icon name={item.icon} size={16} style={{ color: "#100800" }} />
                  </div>
                  <div
                    className="reveal flex-1 rounded-lg border p-4"
                    style={{
                      background: "hsl(20, 10%, 9%)",
                      borderColor: `${item.color}28`,
                      borderLeftColor: item.color,
                      borderLeftWidth: "3px",
                    }}
                  >
                    <TimelineCard item={item} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, #C8832A50, transparent)" }} />
      </div>

      {/* ── GALLERY ── */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-20">
        <div className="reveal text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-2 tracking-[0.1em]"
            style={{ fontFamily: "Oswald", color: "#E8A84A" }}
          >
            ГАЛЕРЕЯ АРТЕФАКТОВ
          </h2>
          <p className="text-sm" style={{ color: "#5A6A78" }}>
            Исторические изделия и станки разных эпох
          </p>
          <div className="w-14 h-0.5 mx-auto mt-3" style={{ background: "#C8832A" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="reveal gallery-item rounded-lg overflow-hidden border"
              style={{
                borderColor: "rgba(200,131,42,0.18)",
                background: "hsl(20,10%,9%)",
                transitionDelay: `${i * 0.12}s`,
              }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(8,5,2,0.85) 0%, transparent 55%)" }}
                />
                <span
                  className="absolute bottom-3 left-3 text-xs px-2 py-0.5 rounded font-semibold"
                  style={{ background: "#C8832A", color: "#100800", fontFamily: "Oswald", letterSpacing: "0.05em" }}
                >
                  {item.period}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold mb-1" style={{ fontFamily: "Oswald", color: "#E8C870" }}>
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#5A6A78" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MATERIALS STRIP ── */}
      <section
        className="py-16 px-6"
        style={{
          borderTop: "1px solid rgba(200,131,42,0.12)",
          background: "linear-gradient(135deg, rgba(200,131,42,0.06) 0%, transparent 60%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="reveal">
            <div className="text-4xl mb-4">⚙️</div>
            <h3
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ fontFamily: "Oswald", color: "#E8A84A", letterSpacing: "0.08em" }}
            >
              ТОКАРНЫЙ СТАНОК — МАТЬ ВСЕХ СТАНКОВ
            </h3>
            <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "#5A6A78", fontWeight: 300 }}>
              Именно токарный станок стал основой промышленной революции. Без него невозможно было бы
              изготовить паровые двигатели, железнодорожные оси и все остальные металлообрабатывающие станки.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {[
              { icon: "🏺", label: "Древесина", sub: "Первые материалы" },
              { icon: "⚔️", label: "Металл", sub: "Средние века" },
              { icon: "🔩", label: "Сплавы", sub: "Индустриальная эра" },
              { icon: "💎", label: "Титан / КМ", sub: "Современность" },
            ].map((m, i) => (
              <div
                key={m.label}
                className="reveal p-4 rounded-lg"
                style={{
                  background: "rgba(200,131,42,0.06)",
                  border: "1px solid rgba(200,131,42,0.14)",
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div className="text-2xl mb-2">{m.icon}</div>
                <div className="text-sm font-bold" style={{ fontFamily: "Oswald", color: "#E8A84A" }}>
                  {m.label}
                </div>
                <div className="text-xs mt-1" style={{ color: "#4A5A68" }}>
                  {m.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="py-8 px-6 text-center border-t"
        style={{ borderColor: "rgba(200,131,42,0.08)" }}
      >
        <p className="text-xs" style={{ color: "#3A4A58" }}>
          История токарного дела · ≈1300 до н.э. — наши дни
        </p>
      </footer>
    </div>
  );
}

function TimelineCard({ item }: { item: (typeof timelineData)[0] }) {
  return (
    <>
      <div className="flex items-start justify-between gap-3 mb-2">
        <div>
          <div className="text-xs uppercase tracking-widest font-medium mb-0.5" style={{ color: item.color }}>
            {item.era}
          </div>
          <h3 className="text-lg md:text-xl font-bold leading-tight" style={{ fontFamily: "Oswald", color: "#F0D080" }}>
            {item.title}
          </h3>
        </div>
        <span className="text-3xl flex-shrink-0">{item.emoji}</span>
      </div>

      <div
        className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium mb-3"
        style={{
          background: `${item.color}15`,
          color: item.color,
          border: `1px solid ${item.color}28`,
          fontFamily: "Oswald",
          letterSpacing: "0.04em",
        }}
      >
        <Icon name="Calendar" size={10} />
        {item.year}
      </div>

      <p className="text-sm leading-relaxed mb-3" style={{ color: "#8A9BA8", fontWeight: 300 }}>
        {item.description}
      </p>

      <div
        className="flex items-start gap-2 p-2.5 rounded mb-3"
        style={{ background: `${item.color}0D`, borderLeft: `2px solid ${item.color}60` }}
      >
        <Icon name="Info" size={13} style={{ color: item.color, flexShrink: 0, marginTop: 1 }} />
        <span className="text-xs italic" style={{ color: "#6A7A88" }}>
          {item.fact}
        </span>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded"
            style={{
              background: "rgba(138,155,168,0.08)",
              color: "#6A7A88",
              border: "1px solid rgba(138,155,168,0.15)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );
}