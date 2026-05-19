function AdditionalResources() {
  const resources = [
    {
      title: "Soft Tissue Release & Massage",
      description:
        "Enhance your movement practice with soft tissue release, massage and recovery support.",
      link: "https://experience-calm.co.uk/",
      label: "Visit Experience Calm",
    },
    {
      title: "Chiropractic & Mobility Support",
      description:
        "For chiropractic assistance with mobility, alignment and movement support.",
      link: "https://www.marshallchiro.co.uk/",
      label: "Visit Marshall Chiropractic",
    },
  ];

  return (
    <section
      id="resources"
      className="relative overflow-hidden bg-[#1b120c] px-6 py-24 text-white"
    >
      {/* Decorative Ring */}
      <div className="absolute bottom-[-140px] left-[-140px] h-[420px] w-[420px] rounded-full border-[35px] border-[#c98b2b]/10" />

      {/* Glow */}
      <div className="absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full bg-[#c98b2b]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#c98b2b]">
            Additional Resources
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase leading-tight sm:text-5xl">
            Support Your Movement Practice
          </h2>

          <p className="mt-5 text-base leading-relaxed text-[#d7cec5] sm:text-lg">
            Helpful local resources for recovery, mobility and keeping your body
            moving well alongside Capoeira.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.link}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-[320px] flex-col rounded-[28px] border border-white/10 bg-white/[0.06] p-8 shadow-2xl backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-[#c98b2b]/40 hover:bg-white/[0.09]"
            >
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c98b2b]">
                Recommended Resource
              </p>

              <h3 className="mt-4 text-2xl font-black uppercase leading-tight">
                {resource.title}
              </h3>

              <p className="mt-4 leading-relaxed text-[#d7cec5]">
                {resource.description}
              </p>

              {/* Bottom CTA */}
              <div className="mt-auto inline-flex items-center gap-3 pt-8 text-sm font-black uppercase tracking-[0.12em] text-[#c98b2b]">
                {resource.label}

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdditionalResources;
