import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import background2 from "../assets/background2.webp";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    id: 1,
    question: "Do I need experience to join?",
    answer:
      "No experience is needed. Beginners are very welcome, and classes are designed so you can learn at your own pace.",
  },
  {
    id: 2,
    question: "What should I wear?",
    answer:
      "Wear comfortable clothes you can move in, such as tracksuit bottoms, leggings or shorts with a t-shirt. Trainers are useful for outdoor sessions.",
  },
  {
    id: 3,
    question: "How much are classes?",
    answer:
      "Weekly Capoeira classes are £45 per calendar month. The Friday outdoor session is included in the monthly cost.",
  },
  {
    id: 4,
    question: "Where are the classes held?",
    answer:
      "Tuesday classes are at Phase1 Gym, 7–9 Comfortable Place, Bath, BA1 3AJ. Outdoor sessions are at Green Park Station, Bath, BA1 1JB.",
  },
  {
    id: 5,
    question: "Do I need a gym membership?",
    answer:
      "No. Classes are on the top floor of Phase1 Gym, but you do not need a gym membership to attend.",
  },
  {
    id: 6,
    question: "Is Capoeira good for fitness?",
    answer:
      "Yes. Capoeira helps build strength, flexibility, balance, rhythm, coordination and confidence while also being fun and social.",
  },
];

function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!faqRef.current) return;

    const items = faqRef.current.querySelectorAll(".faq-item");

    gsap.fromTo(
      items,
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top 80%",
          once: true,
        },
      },
    );
  }, []);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden px-6 py-24 text-[#1e140d]"
    >
      {/* Background Image */}
      <img
        src={background2}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Beige Overlay */}
      <div className="absolute inset-0 bg-[#f7f2ea]/82" />

      {/* Ambient Effects */}

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left Side */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#c98b2b]">
            FAQ
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase leading-tight sm:text-5xl">
            Questions Before Your First Class?
          </h2>

          <p className="mt-6 max-w-md text-base leading-relaxed text-[#5f5147] sm:text-lg">
            Here are a few quick answers for beginners, new students and anyone
            curious about starting Capoeira in Bath.
          </p>

          <div className="mt-10 rounded-[28px] border border-[#c98b2b]/15 bg-[#1b120c]/95 p-7 text-white shadow-xl backdrop-blur-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c98b2b]">
              Still Unsure?
            </p>

            <h3 className="mt-4 text-2xl font-black uppercase">
              Message Instructor Gira
            </h3>

            <p className="mt-4 leading-relaxed text-[#d7cec5]">
              Ask about beginners classes, what to bring, prices or anything
              else before coming along.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex rounded-md bg-[#c98b2b] px-6 py-3 text-sm font-black uppercase tracking-[0.15em] text-white transition hover:bg-[#b67d27]"
            >
              Ask A Question
            </a>
          </div>
        </div>

        {/* FAQ Items */}
        <div ref={faqRef} className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`faq-item overflow-hidden rounded-[22px] border backdrop-blur-sm transition-all duration-300 ${
                  isOpen
                    ? "border-[#c98b2b]/30 bg-white/95 shadow-xl shadow-black/5"
                    : "border-[#c98b2b]/10 bg-white/75 hover:border-[#c98b2b]/25"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="flex w-full items-center justify-between gap-6 p-6 text-left"
                >
                  <span className="text-lg font-black uppercase leading-snug">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-2xl font-light transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 bg-[#c98b2b] text-white"
                        : "bg-[#1b120c] text-white"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-relaxed text-[#5f5147]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
