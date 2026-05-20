import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import background from "../assets/background.png";

gsap.registerPlugin(ScrollTrigger);

const classes = [
  {
    title: "Weekly Capoeira Classes",
    day: "Tuesday",
    time: "7:30–9:00 PM",
    location: "Phase1 Gym, Bath",
    price: "£45 per calendar month",
  },
  {
    title: "Weekly Outdoor Sesh",
    day: "Friday",
    time: "6:00–7:00 PM",
    location: "Green Park Station, Bath",
    price: "Included in the monthly cost",
  },
  {
    title: "Weekly Music Sesh",
    day: "Coming Soon",
    time: "More info soon",
    location: "Bath",
    price: "Learn rhythms, songs and Capoeira music",
  },
];

const locations = [
  {
    title: "Class Location",
    address: "7–9 Comfortable Place, Bath, BA1 3AJ",
    note: "Top floor of the gym. No gym membership required.",
  },
  {
    title: "Outdoor Class Location",
    address: "Inside Green Park Station, Bath, BA1 1JB",
    note: "In front of the Music Workshop Coffeehouse.",
  },
];

function Services() {
  const sectionContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionContentRef.current) return;

    const header = sectionContentRef.current.querySelector(".services-header");

    const cards = sectionContentRef.current.querySelectorAll(".service-card");

    const locationCards =
      sectionContentRef.current.querySelectorAll(".location-card");

    gsap.fromTo(
      header,
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionContentRef.current,
          start: "top 80%",
          once: true,
        },
      },
    );

    gsap.fromTo(
      cards,
      { opacity: 0, y: 45 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionContentRef.current,
          start: "top 70%",
          once: true,
        },
      },
    );

    gsap.fromTo(
      locationCards,
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionContentRef.current,
          start: "top 60%",
          once: true,
        },
      },
    );
  }, []);

  return (
    <section
      id="services"
      className="relative overflow-hidden px-6 py-24 text-[#1e140d]"
    >
      {/* Background Image */}
      <img
        src={background}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Beige Overlay */}
      <div className="absolute inset-0 bg-[#f7f2ea]/80" />

      {/* Ambient Glow */}
      <div className="absolute -left-30 -top-30 h-80 w-80 rounded-full bg-[#c98b2b]/10 blur-3xl" />

      <div className="absolute -bottom-40 -right-40 h-105 w-105 rounded-full border-35 border-[#c98b2b]/10" />

      <div ref={sectionContentRef} className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="services-header mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#c98b2b]">
            Classes
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase leading-tight sm:text-5xl">
            Train With Us
          </h2>

          <p className="mt-5 text-base leading-relaxed text-[#5f5147] sm:text-lg">
            Weekly Capoeira, outdoor movement and music sessions in Bath.
            Beginners are welcome and no gym membership is required.
          </p>
        </div>

        {/* Class Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {classes.map((item) => (
            <article
              key={item.title}
              className="service-card group relative overflow-hidden rounded-[28px] border border-[#c98b2b]/15 bg-white/85 p-7 shadow-lg shadow-black/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/95 hover:shadow-2xl hover:shadow-black/10"
            >
              <div className="absolute right-5 top-5 h-16 w-16 rounded-full border-10 border-[#c98b2b]/10 transition duration-300 group-hover:scale-125 group-hover:border-[#c98b2b]/20" />

              <div className="relative z-10">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c98b2b]">
                  {item.day}
                </p>

                <h3 className="mt-4 min-h-16 text-2xl font-black uppercase leading-tight">
                  {item.title}
                </h3>

                <div className="mt-8 space-y-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9b8a7b]">
                      Time
                    </p>

                    <p className="mt-1 text-lg font-black">{item.time}</p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9b8a7b]">
                      Location
                    </p>

                    <p className="mt-1 text-lg font-black">{item.location}</p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9b8a7b]">
                      Price
                    </p>

                    <p className="mt-1 text-base font-semibold text-[#5f5147]">
                      {item.price}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Location Cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {locations.map((location) => (
            <div
              key={location.title}
              className="location-card rounded-[28px] border border-[#c98b2b]/15 bg-[#1b120c]/95 p-7 text-white shadow-xl backdrop-blur-sm"
            >
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c98b2b]">
                {location.title}
              </p>

              <h3 className="mt-4 text-2xl font-black uppercase leading-tight">
                {location.address}
              </h3>

              <p className="mt-4 leading-relaxed text-[#d7cec5]">
                {location.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
