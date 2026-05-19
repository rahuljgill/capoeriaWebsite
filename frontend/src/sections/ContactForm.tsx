import { useEffect, useRef, useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ContactForm() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const formRef = useRef<HTMLFormElement>(null);
  const contactCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!formRef.current || !contactCardRef.current) return;

    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 45 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          once: true,
        },
      },
    );

    gsap.fromTo(
      contactCardRef.current,
      { opacity: 0, y: 45 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactCardRef.current,
          start: "top 80%",
          once: true,
        },
      },
    );
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email is required.");
      setSuccess("");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      setSuccess("");
      return;
    }

    if (!enquiry.trim()) {
      setError("Please enter your enquiry.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/meenkbgl", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSuccess("Your message has been sent. Gira will get back to you soon.");

      setEmail("");
      setPhoneNumber("");
      setEnquiry("");
    } catch {
      setError("Something went wrong. Please try again.");
      setSuccess("");
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#1b120c] px-6 py-24 text-white"
    >
      <div className="absolute right-[-140px] top-[-140px] h-[420px] w-[420px] rounded-full border-[35px] border-[#c98b2b]/10" />
      <div className="absolute bottom-[-120px] left-[-120px] h-80 w-80 rounded-full bg-[#c98b2b]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#c98b2b]">
            Contact
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase leading-tight sm:text-5xl">
            Start Your Capoeira Journey
          </h2>

          <p className="mt-5 text-base leading-relaxed text-[#d7cec5] sm:text-lg">
            Want to join a class, ask a question or find out which session is
            right for you? Send a message below.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <form
            ref={formRef}
            action="https://formspree.io/f/meenkbgl"
            method="POST"
            onSubmit={handleSubmit}
            className="rounded-[28px] border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-md sm:p-8"
          >
            {error && (
              <p className="mb-5 rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {error}
              </p>
            )}

            {success && (
              <p className="mb-5 rounded-xl border border-green-400/20 bg-green-500/10 px-4 py-3 text-sm text-green-200">
                {success}
              </p>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold uppercase tracking-[0.15em] text-[#c98b2b]">
                  Email *
                </label>

                <input
                  name="email"
                  type="email"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#c98b2b]"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold uppercase tracking-[0.15em] text-[#c98b2b]">
                  Phone
                </label>

                <input
                  name="phoneNumber"
                  type="tel"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#c98b2b]"
                  placeholder="07700 000000"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-bold uppercase tracking-[0.15em] text-[#c98b2b]">
                Message *
              </label>

              <textarea
                name="enquiry"
                className="min-h-44 w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-4 text-white outline-none transition placeholder:text-white/35 focus:border-[#c98b2b]"
                placeholder="Tell us what you're interested in — classes, beginners sessions, prices, location or anything else..."
                value={enquiry}
                onChange={(e) => setEnquiry(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-md bg-[#c98b2b] px-8 py-4 text-sm font-black uppercase tracking-[0.15em] text-white transition hover:-translate-y-1 hover:bg-[#b67d27]"
            >
              Send Message
            </button>
          </form>

          <div
            ref={contactCardRef}
            className="relative overflow-hidden rounded-[28px] border border-[#c98b2b]/20 bg-[#f7f2ea] p-8 text-[#1e140d] shadow-2xl"
          >
            <div className="absolute right-[-80px] top-[-80px] h-56 w-56 rounded-full border-[24px] border-[#c98b2b]/10" />

            <div className="relative z-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#c98b2b]">
                Instructor Gira
              </p>

              <h3 className="mt-4 text-3xl font-black uppercase">
                Prefer To Contact Directly?
              </h3>

              <p className="mt-4 leading-relaxed text-[#5f5147]">
                You can contact Gira directly by phone, email, WhatsApp or
                Instagram.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="tel:07783596919"
                  className="block rounded-2xl border border-[#c98b2b]/15 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c98b2b]">
                    Phone
                  </p>
                  <p className="mt-2 text-xl font-black">07783 59 69 19</p>
                </a>

                <a
                  href="mailto:gira.capoeira@gmail.com"
                  className="block rounded-2xl border border-[#c98b2b]/15 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c98b2b]">
                    Email
                  </p>
                  <p className="mt-2 break-all text-xl font-black">
                    gira.capoeira@gmail.com
                  </p>
                </a>

                <div className="grid gap-4 sm:grid-cols-2">
                  <a
                    href="https://www.instagram.com/bath.capoeira.group/reels/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-3 rounded-2xl bg-[#1b120c] px-5 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#c98b2b]"
                  >
                    <FaInstagram className="text-2xl" />
                    Instagram
                  </a>

                  <a
                    href="https://wa.me/447783596919"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-3 rounded-2xl bg-[#1b120c] px-5 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#c98b2b]"
                  >
                    <FaWhatsapp className="text-2xl" />
                    WhatsApp
                  </a>
                </div>
              </div>

              <p className="mt-8 text-sm leading-relaxed text-[#6b5b50]">
                Beginners are welcome. No previous Capoeira experience is needed
                — just bring comfortable clothes and energy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
