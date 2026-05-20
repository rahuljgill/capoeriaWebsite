import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Users, Music, Dumbbell } from "lucide-react";

import instructor from "../assets/instructor.jpeg";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current || !textRef.current) return;

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          once: true,
        },
      },
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          once: true,
        },
      },
    );
  }, []);

  const features = [
    {
      icon: Users,
      title: "Community Focused",
      text: "A welcoming environment where everyone can grow together.",
    },
    {
      icon: Dumbbell,
      title: "Fitness & Movement",
      text: "Build strength, flexibility, coordination and confidence.",
    },
    {
      icon: Music,
      title: "Music & Culture",
      text: "Learn the rhythms, songs and traditions of Capoeira.",
    },
    {
      icon: Award,
      title: "All Levels Welcome",
      text: "From complete beginners to experienced players.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#1b120c] py-24 text-white"
    >
      <div className="absolute -left-25 top-0 h-96 w-96 rounded-full bg-[#c98b2b]/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* DESKTOP IMAGE SIDE */}
        <div ref={imageRef} className="relative hidden lg:block">
          <div className="absolute -left-6 -top-6 h-full w-full rounded-4xl border border-[#c98b2b]/20 bg-[#c98b2b]/5" />

          <div className="relative overflow-hidden rounded-4xl shadow-2xl">
            <img
              src={instructor}
              alt="Capoeira Instructor"
              className="h-137.5 w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-black/50 px-5 py-4 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c98b2b]">
                Bath Capoeira Group
              </p>

              <h3 className="mt-1 text-2xl font-black uppercase">Gira</h3>
            </div>
          </div>
        </div>

        {/* TEXT SIDE */}
        <div ref={textRef}>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#c98b2b]">
            Meet Your Instructor
          </p>

          <h2 className="mt-5 max-w-xl text-5xl font-black uppercase leading-none text-white">
            More Than A Martial Art.
          </h2>

          {/* MOBILE IMAGE */}
          <div className="relative mt-10 lg:hidden">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-[28px] border border-[#c98b2b]/20 bg-[#c98b2b]/5" />

            <div className="relative overflow-hidden rounded-[28px] shadow-2xl">
              <img
                src={instructor}
                alt="Capoeira Instructor"
                className="h-105 w-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 rounded-2xl border border-white/10 bg-black/50 px-4 py-3 backdrop-blur-md">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c98b2b]">
                  Bath Capoeira Group
                </p>

                <h3 className="mt-1 text-xl font-black uppercase">Gira</h3>
              </div>
            </div>
          </div>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#d7cec5]">
            Capoeira combines movement, music, culture and community into a
            unique Afro-Brazilian art form. Our classes are designed to help
            students build confidence, improve fitness and connect through
            movement.
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#bcae9f]">
            Whether you're completely new or already experienced, Bath Capoeira
            Group offers a supportive environment where everyone is encouraged
            to learn, move and grow together.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition duration-300 hover:border-[#c98b2b]/40 hover:bg-white/[0.07]"
                >
                  <Icon className="text-[#c98b2b]" size={28} />

                  <h3 className="mt-4 text-lg font-black uppercase">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#cfc3b7]">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
