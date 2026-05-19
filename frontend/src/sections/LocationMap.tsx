import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function LocationMap() {
  const infoRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const [selectedLocation, setSelectedLocation] = useState("phase1");

  useEffect(() => {
    if (!infoRef.current || !mapRef.current) return;

    gsap.fromTo(
      infoRef.current,
      { opacity: 0, x: -45 },
      {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 80%",
          once: true,
        },
      },
    );

    gsap.fromTo(
      mapRef.current,
      { opacity: 0, x: 45 },
      {
        opacity: 1,
        x: 0,
        duration: 0.9,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 80%",
          once: true,
        },
      },
    );
  }, []);

  const mapSrc =
    selectedLocation === "phase1"
      ? "https://www.google.com/maps?q=7-9%20Comfortable%20Place%2C%20Bath%2C%20BA1%203AJ&output=embed"
      : "https://www.google.com/maps?q=Green+Park+Station+Bath+BA1+1JB&output=embed";

  return (
    <section
      id="location"
      className="relative overflow-hidden bg-[#f7f2ea] px-6 py-24 text-[#1e140d]"
    >
      <div className="absolute left-[-140px] top-[-140px] h-[420px] w-[420px] rounded-full border-[35px] border-[#c98b2b]/10" />

      <div className="absolute bottom-[-120px] right-[-120px] h-80 w-80 rounded-full bg-[#c98b2b]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#c98b2b]">
            Location
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase leading-tight sm:text-5xl">
            Find Us In Bath
          </h2>

          <p className="mt-5 text-base leading-relaxed text-[#5f5147] sm:text-lg">
            Weekly classes are held at Phase1 Gym, with outdoor sessions at
            Green Park Station.
          </p>
        </div>

        {/* Content */}
        <div className="overflow-hidden rounded-[32px] border border-[#c98b2b]/15 bg-white/80 shadow-2xl shadow-black/5 backdrop-blur-sm">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* Left Side */}
            <div ref={infoRef} className="space-y-5 p-7 sm:p-9">
              {/* Phase1 */}
              <button
                onClick={() => setSelectedLocation("phase1")}
                className={`w-full rounded-2xl p-6 text-left transition duration-300 ${
                  selectedLocation === "phase1"
                    ? "bg-[#1b120c] text-white shadow-xl"
                    : "border border-[#c98b2b]/15 bg-white hover:-translate-y-1 hover:shadow-xl"
                }`}
              >
                <p
                  className={`text-xs font-bold uppercase tracking-[0.25em] ${
                    selectedLocation === "phase1"
                      ? "text-[#c98b2b]"
                      : "text-[#c98b2b]"
                  }`}
                >
                  Class Location
                </p>

                <h3 className="mt-4 text-2xl font-black uppercase leading-tight">
                  Phase1 Gym
                </h3>

                <p
                  className={`mt-3 leading-relaxed ${
                    selectedLocation === "phase1"
                      ? "text-[#d7cec5]"
                      : "text-[#5f5147]"
                  }`}
                >
                  7–9 Comfortable Place, Bath, BA1 3AJ
                </p>

                <p
                  className={`mt-3 text-sm ${
                    selectedLocation === "phase1"
                      ? "text-[#bcae9f]"
                      : "text-[#6b5b50]"
                  }`}
                >
                  Top floor of the gym. No gym membership required.
                </p>
              </button>

              {/* Green Park */}
              <button
                onClick={() => setSelectedLocation("greenpark")}
                className={`w-full rounded-2xl p-6 text-left transition duration-300 ${
                  selectedLocation === "greenpark"
                    ? "bg-[#1b120c] text-white shadow-xl"
                    : "border border-[#c98b2b]/15 bg-white hover:-translate-y-1 hover:shadow-xl"
                }`}
              >
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c98b2b]">
                  Outdoor Class Location
                </p>

                <h3 className="mt-4 text-2xl font-black uppercase leading-tight">
                  Green Park Station
                </h3>

                <p
                  className={`mt-3 leading-relaxed ${
                    selectedLocation === "greenpark"
                      ? "text-[#d7cec5]"
                      : "text-[#5f5147]"
                  }`}
                >
                  Inside Green Park Station, Bath, BA1 1JB
                </p>

                <p
                  className={`mt-3 text-sm ${
                    selectedLocation === "greenpark"
                      ? "text-[#bcae9f]"
                      : "text-[#6b5b50]"
                  }`}
                >
                  In front of the Music Workshop Coffeehouse.
                </p>
              </button>
            </div>

            {/* Map */}
            <div ref={mapRef} className="min-h-[420px] lg:min-h-full">
              <iframe
                key={selectedLocation}
                src={mapSrc}
                className="h-[460px] w-full border-0 lg:h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bath Capoeira Group location map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationMap;
