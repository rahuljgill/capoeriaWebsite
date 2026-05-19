import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import Navbar from "../components/Navbar";

import Services from "../sections/Services";
import FAQ from "../sections/FAQ";
import ContactForm from "../sections/ContactForm";
import Reviews from "../sections/Reviews";
import LocationMap from "../sections/LocationMap";
import About from "../sections/About";
import AdditionalResources from "../sections/AdditionalResouces";
import VideoSection from "../sections/VideoSection";

import image from "../assets/image.png";

function Home() {
  const heroContentRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const heroFeatureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

    timeline
      .fromTo(
        heroContentRef.current,
        { opacity: 0, y: 45 },
        { opacity: 1, y: 0, duration: 1 },
      )
      .fromTo(
        heroImageRef.current,
        { opacity: 0, scale: 0.92, x: 40 },
        { opacity: 1, scale: 1.04, x: 0, rotation: 1, duration: 1 },
        "-=0.55",
      )
      .fromTo(
        heroFeatureRef.current?.children || [],
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12 },
        "-=0.45",
      );
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-[#f7f2ea] text-[#1e140d]">
      <section
        id="home"
        className="relative min-h-screen w-full overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(194,132,37,0.15),_transparent_40%)]" />
        <div className="absolute right-20 top-32 h-72 w-72 rounded-full bg-[#c98b2b]/10 blur-3xl" />

        <Navbar />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-20 lg:flex-row lg:items-center lg:gap-12">
          <div ref={heroContentRef} className="w-full lg:w-1/2">
            <h1 className="max-w-xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
              <span className="block">Movement.</span>

              <span className="block bg-[linear-gradient(90deg,#009739_0%,#009739_25%,#ffdf00_40%,#002776_50%,#002776_58%,#ffdf00_68%,#009739_82%,#009739_100%)] bg-clip-text text-transparent">
                Culture.
              </span>

              <span className="block text-[#c98b2b]">Community.</span>
            </h1>

            <p className="mt-8 max-w-lg text-base leading-relaxed text-[#4b3b31] sm:text-lg">
              Capoeira is an Afro-Brazilian martial art that combines movement,
              music and acrobatics. Join our friendly and welcoming community in
              Bath.
            </p>

            <div
              ref={heroFeatureRef}
              className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3"
            >
              <div>
                <h3 className="text-sm font-black uppercase tracking-wide">
                  Beginner Friendly
                </h3>
                <p className="mt-2 text-sm text-[#5f5147]">
                  Perfect for adults starting their Capoeira journey.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-black uppercase tracking-wide">
                  Fitness & Fun
                </h3>
                <p className="mt-2 text-sm text-[#5f5147]">
                  Build strength, confidence and flexibility.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-black uppercase tracking-wide">
                  Strong Community
                </h3>
                <p className="mt-2 text-sm text-[#5f5147]">
                  More than a class. We’re a family.
                </p>
              </div>
            </div>
          </div>

          <div
            ref={heroImageRef}
            className="relative mt-20 flex w-full scale-[1.04] rotate-[1deg] justify-center shadow-lg lg:mt-0 lg:w-1/2"
          >
            <div className="group relative w-full max-w-[620px]">
              <div className="absolute -right-8 -top-8 h-48 w-48 scale-125 rounded-full bg-[#c98b2b]/20 blur-3xl transition duration-500" />

              <img
                src={image}
                alt="Capoeira movement artwork"
                className="relative z-10 h-auto w-full object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute -bottom-8 left-4 z-20 rounded-2xl border border-[#c98b2b]/20 bg-white/90 p-6 shadow-xl backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#c98b2b]">
                  Weekly Classes
                </p>

                <h3 className="mt-2 text-2xl font-black">Tuesdays & Fridays</h3>

                <p className="mt-2 text-sm text-[#5f5147]">
                  Beginners welcome. No experience needed.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#f7f2ea] to-transparent" />
      </section>

      <VideoSection />
      <Services />
      <About />
      <Reviews />
      <FAQ />
      <ContactForm />
      <LocationMap />
      <AdditionalResources />

      <footer className="w-full bg-gradient-to-b from-[#2a1b12] to-[#1b120c] py-8 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-gray-400">
          © 2026 Bath Capoeira Group. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;
