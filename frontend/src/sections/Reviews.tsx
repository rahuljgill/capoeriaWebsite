import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const reviews = [
  {
    id: 1,
    name: "Luiz Colurato",
    rating: 5,
    review:
      "Really good energy, friendly people and everything you need to learn Capoeira. A great environment that allows you to learn Capoeira and enjoy yourself while doing it. Great teacher.",
  },
  {
    id: 2,
    name: "Jessica Barbosa",
    rating: 5,
    review:
      "I recently attended Gira's capoeira class in Bath, and it was an incredible experience! Gira is a fantastic instructor who creates a fun and engaging atmosphere for everyone, regardless of their experience level.",
  },
  {
    id: 3,
    name: "Natalie B.",
    rating: 5,
    review:
      "If you want fun, growth, more connection with your body, and to learn self defence with fascinating roots — take this as your sign to get to Bath Capoeira!",
  },
  {
    id: 4,
    name: "Dylan Charles",
    rating: 5,
    review:
      "Gira is a great teacher and has helped me work through stabilising and strengthening my knee following injury. The sessions are well thought out and accessible to people of all abilities.",
  },
  {
    id: 5,
    name: "Maria Kay",
    rating: 5,
    review:
      "I always have a great time at Bath Capoeira. Having never tried it before, I visited once and never looked back. It leaves me feeling better after every session!",
  },
  {
    id: 6,
    name: "Don Simon",
    rating: 5,
    review:
      "Gira is a great teacher! If you want to learn Capoeira, he's the guy. Even if you're an absolute beginner and think you can't do it. The classes are for any age, any gender, any ability. Everyone is included, and everyone is equal.",
  },
];

function Reviews() {
  const [startIndex, setStartIndex] = useState(0);
  const cardsRef = useRef<HTMLDivElement>(null);

  const visibleReviews = [
    reviews[startIndex],
    reviews[(startIndex + 1) % reviews.length],
    reviews[(startIndex + 2) % reviews.length],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!cardsRef.current) return;

      gsap.to(cardsRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.45,
        ease: "power2.inOut",
        onComplete: () => {
          setStartIndex((prev) => (prev + 1) % reviews.length);

          gsap.fromTo(
            cardsRef.current,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
              ease: "power2.inOut",
            },
          );
        },
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#f7f2ea] px-6 py-24 text-[#1e140d]"
    >
      {/* Background Detail */}
      <div className="absolute -right-35 -top-35 h-105 w-105 rounded-full border-35 border-[#c98b2b]/10" />
      <div className="absolute -left-30 -bottom-30 h-80 w-80 rounded-full bg-[#c98b2b]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#c98b2b]">
            Testimonials
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase leading-tight sm:text-5xl">
            Loved By Our Community
          </h2>

          <p className="mt-5 text-base leading-relaxed text-[#5f5147] sm:text-lg">
            Real words from students who train, move and grow with Bath Capoeira
            Group.
          </p>
        </div>

        {/* Rating Summary */}
        <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-4 rounded-2xl border border-[#c98b2b]/20 bg-white/70 px-6 py-4 shadow-sm backdrop-blur">
          <div className="text-3xl font-black">5.0</div>

          <div>
            <div className="text-lg text-[#c98b2b]">★★★★★</div>
            <p className="text-sm font-semibold text-[#5f5147]">
              Based on Google reviews
            </p>
          </div>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="mt-14 grid gap-6 md:grid-cols-3">
          {visibleReviews.map((review) => (
            <article
              key={review.id}
              className="group relative overflow-hidden rounded-[28px] border border-[#c98b2b]/15 bg-white p-7 shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10"
            >
              <div className="absolute right-6 top-4 text-7xl font-black leading-none text-[#c98b2b]/10">
                “
              </div>

              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1b120c] text-lg font-black uppercase text-[#c98b2b]">
                      {review.name.charAt(0)}
                    </div>

                    <div>
                      <h3 className="font-black uppercase tracking-tight">
                        {review.name}
                      </h3>

                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#9b8a7b]">
                        Google Review
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-5 text-[#c98b2b]">
                  {"★".repeat(review.rating)}
                </div>

                <p className="line-clamp-6 text-sm leading-relaxed text-[#5f5147]">
                  “{review.review}”
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Google Link */}
        <div className="mt-14 text-center">
          <a
            href="https://www.google.com/search?sca_esv=afc85aa92f7b31d4&sxsrf=ANbL-n61ybbI6hub45xXQJPp6FXTwI3ewQ:1779207588458&q=bath+capoeira+group&spell=1&sa=X&ved=2ahUKEwiEvqri4MWUAxVaYEEAHYg0HqQQBSgAegQIEBAB&biw=1280&bih=630&dpr=1.5#lrd=0x48718199eab2f82d:0x458f52f51a2e8884,1,,,,"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-md bg-[#1b120c] px-8 py-4 text-sm font-black uppercase tracking-[0.15em] text-white shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#c98b2b]"
          >
            View Reviews On Google
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
