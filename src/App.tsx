import { useEffect, useState } from 'react';
import type { FormEvent, MouseEvent } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Star,
  Sparkles,
  CalendarCheck,
  ArrowRight,
  MessageCircle,
  HeartHandshake,
  Building2,
  PartyPopper,
  Music2,
  Lightbulb,
  Camera,
  Trophy,
  Users,
  CheckCircle2,
  Mic2,
  Play,
  Youtube,
  ExternalLink,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_NUMBER = '919741293742';
const CONTACT_EMAIL = 'jambaebalu_info@zohomail.in';
const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@Jambe_Balu/videos';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Videos', href: '#videos' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  {
    title: 'Luxury Weddings',
    description:
      'Elegant wedding planning, décor, stage design, guest flow, and complete coordination for unforgettable celebrations.',
    image: '/images/wedding_stage_couple.jpg',
    icon: HeartHandshake,
  },
  {
    title: 'Corporate Events',
    description:
      'Professional conferences, product launches, exhibitions, award nights, and branded business gatherings.',
    image: '/images/corporate_conference.jpg',
    icon: Building2,
  },
  {
    title: 'Private Parties',
    description:
      'Birthdays, anniversaries, family functions, and private celebrations designed with energy and style.',
    image: '/images/private_party_crowd.jpg',
    icon: PartyPopper,
  },
  {
    title: 'Concerts & DJ Nights',
    description:
      'Crowd-pulling entertainment experiences with sound, lighting, ambience, and performance coordination.',
    image: '/images/dj_crowd.jpg',
    icon: Music2,
  },
  {
    title: 'Stage, Sound & Lighting',
    description:
      'Stage structures, LED walls, truss rigs, lighting effects, sound systems, and complete technical production.',
    image: '/images/led_wall_lights.jpg',
    icon: Lightbulb,
  },
  {
    title: 'Decoration & Styling',
    description:
      'Premium tablescapes, themed décor, floral styling, entrance design, and picture-perfect event spaces.',
    image: '/images/decor_tablescape.jpg',
    icon: Sparkles,
  },
];

const gallery = [
  {
    src: '/images/hero_stage_crowd.jpg',
    title: 'Live Event Production',
    className: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: '/images/wedding_stage_couple.jpg',
    title: 'Wedding Stage',
    className: '',
  },
  {
    src: '/images/corporate_conference.jpg',
    title: 'Corporate Conference',
    className: '',
  },
  {
    src: '/images/dj_crowd.jpg',
    title: 'DJ Night',
    className: 'lg:row-span-2',
  },
  {
    src: '/images/exhibition_hall.jpg',
    title: 'Exhibition Setup',
    className: '',
  },
  {
    src: '/images/decor_tablescape.jpg',
    title: 'Decor Styling',
    className: '',
  },
  {
    src: '/images/private_party_crowd.jpg',
    title: 'Private Party',
    className: 'lg:col-span-2',
  },
];

/** Videos from https://www.youtube.com/@Jambe_Balu/videos */
const videos = [
  {
    id: 'vBbzkfIzjJc',
    title: 'Balu Jambe Team Indian Folk Band — Part 5',
  },
  {
    id: 'facwT7aLrZw',
    title: 'Balu Jambe Team Indian Folk Band — Part 4',
  },
  {
    id: '3E9tqMZjrII',
    title: 'Balu Jambe Team Indian Folk Band — Part 3',
  },
  {
    id: 'FEYDkWoxW6s',
    title: 'Balu Jambe Team Indian Folk Band — Part 2',
  },
  {
    id: 'z4Oqg-UG0V0',
    title: 'Balu Jambe Team Indian Folk Band — Part 1',
  },
  {
    id: '9k_CE1FyBz4',
    title: 'Balu Jambe Team Indian Folk Band',
  },
  {
    id: 'JOrm07iiQ2E',
    title: 'Town Hall Program — Bangalore',
  },
  {
    id: 'JLFqrDy5Xak',
    title: 'Town Hall Program Highlights',
  },
  {
    id: 'eXIe3LQYU_k',
    title: 'Balu Jambe Events',
  },
  {
    id: 'PUFPxaBHZgI',
    title: 'Jambe Zalak — Balu Jambe Events',
  },
  {
    id: '5YAvwtECAzI',
    title: 'Balu Jambe Live Events',
  },
  {
    id: 'JJk1mSASzo8',
    title: 'Balu Jambe Events — Arun Singing',
  },
  {
    id: 'FOBWu87SoJE',
    title: 'Bhoomi Habba Vistar — Folk Band & Jambe Zalak',
  },
  {
    id: 'VRWRFVxPjIg',
    title: 'Bhoomi Habba Vistar — Program Highlights',
  },
  {
    id: 'cXvmxjM6dp0',
    title: 'Sahakaranagara Event — Arun Vechi',
  },
  {
    id: 'D6mzFheNLWw',
    title: 'Bhoomi Habba Vistar — Folk Band Performance',
  },
  {
    id: 'f5M1WDvzjo4',
    title: 'Mari Kunitha — Balu Jambe, Ramesh, Gowtham',
  },
  {
    id: '0NYh0jxDDOE',
    title: 'Jambe Balu — Chandana TV Live',
  },
  {
    id: 'BCFq-3eJ0_s',
    title: 'Jambe Performing',
  },
  {
    id: 'cKT_TKwFqHU',
    title: 'Indian Folk Performance',
  },
  {
    id: 'OH51znpSlos',
    title: 'Indian Folk — Fire Show',
  },
  {
    id: 'aTDVY5Vlylo',
    title: 'Indian Folk — Fire Show Highlights',
  },
  {
    id: 'zyd6Zn9ol8o',
    title: 'Indian Folk — Balu Jambe',
  },
  {
    id: 'tWlYc9Sye9I',
    title: 'Indian Folk — Balu Jambe Live',
  },
].map((video) => ({
  ...video,
  poster: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
  type: 'youtube' as const,
}));

const testimonials = [
  {
    name: 'Amina & Khalid',
    event: 'Wedding Celebration',
    text: 'Jambe Balu made our wedding feel magical. The décor, coordination, lighting, and entire flow were handled beautifully.',
  },
  {
    name: 'Corporate Client',
    event: 'Annual Business Meet',
    text: 'The team was professional, punctual, and extremely detail-oriented. Our conference looked premium and ran smoothly.',
  },
  {
    name: 'Happy Customer',
    event: 'Private Celebration',
    text: 'Everything exceeded our expectations. The atmosphere, music, setup, and service were absolutely amazing.',
  },
];

const stats = [
  {
    value: '500+',
    label: 'Events Managed',
    icon: CalendarCheck,
  },
  {
    value: '100+',
    label: 'Wedding Setups',
    icon: HeartHandshake,
  },
  {
    value: '50+',
    label: 'Corporate Clients',
    icon: Building2,
  },
  {
    value: '10+',
    label: 'Years Experience',
    icon: Trophy,
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<(typeof videos)[number] | null>(null);
  const [contactStatus, setContactStatus] = useState<string | null>(null);
  const [emailDraft, setEmailDraft] = useState<{ subject: string; body: string } | null>(null);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!activeVideo) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveVideo(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeVideo]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-kicker', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.hero-title', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.15,
        ease: 'power3.out',
      });

      gsap.from('.hero-copy, .hero-actions, .hero-badge', {
        y: 35,
        opacity: 0,
        duration: 0.9,
        delay: 0.35,
        stagger: 0.15,
        ease: 'power3.out',
      });

      gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 82%',
          },
          y: 55,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
        });
      });

      gsap.utils.toArray<HTMLElement>('.reveal-scale').forEach((element) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 84%',
          },
          scale: 0.92,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const readInquiryFields = (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const str = (key: string) => String(formData.get(key) ?? '').trim();

    return {
      name: str('name'),
      phone: str('phone'),
      email: str('email'),
      eventType: str('eventType'),
      message: str('message'),
    };
  };

  const buildInquiryMessage = (fields: ReturnType<typeof readInquiryFields>) => {
    const lines = [
      'Hello Jambe Balu,',
      '',
      'I would like to enquire about an event.',
      '',
      `Name: ${fields.name}`,
      `Phone: ${fields.phone}`,
      `Email: ${fields.email || 'Not provided'}`,
      `Event Type: ${fields.eventType}`,
      `Message: ${fields.message || '—'}`,
    ];
    return lines.join('\n');
  };

  const openExternal = (url: string) => {
    const win = window.open(url, '_blank', 'noopener,noreferrer');
    if (!win) {
      // Popup blocked — fall back to same-tab navigation
      window.location.href = url;
    }
  };

  /** Primary path: open WhatsApp with a filled enquiry. */
  const handleWhatsAppInquiry = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;

    const fields = readInquiryFields(form);
    const text = buildInquiryMessage(fields);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    setContactStatus('Opening WhatsApp with your enquiry…');
    openExternal(url);
    window.setTimeout(() => setContactStatus(null), 4000);
  };

  const buildGmailComposeUrl = (subject: string, body: string) =>
    `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${encodeURIComponent(CONTACT_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  /**
   * Secondary path: open a pre-filled email draft.
   * Prefer Gmail in the browser — mailto: often shows a system popup then does nothing
   * when no desktop mail app is configured.
   */
  const handleEmailInquiry = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const form = e.currentTarget.form;
    if (!form) return;
    if (!form.reportValidity()) return;

    const fields = readInquiryFields(form);
    const body = buildInquiryMessage(fields);
    const subject = `Event inquiry: ${fields.eventType || 'General'} — ${fields.name || 'Website visitor'}`;

    setEmailDraft({ subject, body });
    setContactStatus('Opening Gmail in your browser with a draft to us…');
    openExternal(buildGmailComposeUrl(subject, body));
    window.setTimeout(() => setContactStatus(null), 6000);
  };

  const handleCopyEnquiry = async () => {
    if (!emailDraft) return;
    const payload = `To: ${CONTACT_EMAIL}\nSubject: ${emailDraft.subject}\n\n${emailDraft.body}`;
    try {
      await navigator.clipboard.writeText(payload);
      setContactStatus('Enquiry copied. Paste it into Zoho Mail, Gmail, or any mail app.');
    } catch {
      setContactStatus(`Could not copy automatically. Email us at ${CONTACT_EMAIL}`);
    }
    window.setTimeout(() => setContactStatus(null), 6000);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* Background Effects */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-[-10%] top-[8%] h-72 w-72 rounded-full bg-[#d4af37]/20 blur-[100px]" />
        <div className="absolute right-[-8%] top-[35%] h-96 w-96 rounded-full bg-fuchsia-500/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[30%] h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="noise absolute inset-0 opacity-[0.05]" />
      </div>

      {/* Navbar */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050816]/65 backdrop-blur-2xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
              <div className="grid h-11 w-11 place-items-center rounded-2xl border border-[#d4af37]/40 bg-[#d4af37]/15 shadow-[0_0_35px_rgba(212,175,55,0.25)]">
                <Sparkles className="text-[#d4af37]" size={22} />
              </div>
              <div>
                <p className="text-lg font-black uppercase tracking-[0.15em] sm:text-xl">
                  Jambe Balu
                </p>
                <p className="text-xs uppercase tracking-[0.35em] text-[#d4af37]">
                  Entertainment
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative transition hover:text-[#d4af37] after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[#d4af37] after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="btn-shine inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-5 py-3 text-sm font-bold text-[#111827] shadow-[0_0_35px_rgba(212,175,55,0.3)] transition hover:-translate-y-0.5 hover:brightness-110"
              >
                <MessageCircle size={18} />
                Book Now
              </a>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 lg:hidden"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>

          {menuOpen && (
            <div className="border-t border-white/10 py-5 lg:hidden">
              <div className="grid gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-xl px-3 py-2 text-white/80 hover:bg-white/10 hover:text-[#d4af37]"
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d4af37] px-5 py-3 font-bold text-[#111827]"
                >
                  <MessageCircle size={18} />
                  Book Now
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative min-h-screen scroll-mt-24">
        <div className="absolute inset-0">
          <img
            src="/images/hero_stage_crowd.jpg"
            alt="Jambe Balu live event crowd and stage"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/80 to-[#050816]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-[#050816]/60" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-20 pt-32 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="hero-kicker mb-6 inline-flex items-center gap-3 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#d4af37] backdrop-blur-xl">
              <Mic2 size={17} />
              Premium Event Management
            </div>

            <h1 className="hero-title font-display text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
              Creating Events That People{' '}
              <span className="text-gradient">Remember Forever</span>
            </h1>

            <p className="hero-copy mt-7 max-w-2xl text-base leading-8 text-white/78 sm:text-lg lg:text-xl">
              Weddings, corporate events, concerts, private parties, stage production,
              lighting, décor and complete event coordination — designed to impress your
              guests from the first moment.
            </p>

            <div className="hero-actions mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-[#d4af37] px-7 py-4 font-bold text-[#111827] shadow-[0_0_45px_rgba(212,175,55,0.3)] transition hover:-translate-y-1 hover:brightness-110"
              >
                Plan Your Event
                <ArrowRight size={19} />
              </a>

              <a
                href="#gallery"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/15"
              >
                View Gallery
                <Camera size={19} />
              </a>
            </div>

            <div className="hero-badge mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.08] p-4 backdrop-blur-xl"
                  >
                    <Icon className="mb-3 text-[#d4af37]" size={21} />
                    <p className="text-2xl font-black">{stat.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.15em] text-white/60">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 text-xs uppercase tracking-[0.35em] text-white/45 sm:block">
          Scroll to explore
        </div>
      </section>

      {/* Marquee */}
      <section className="relative z-10 border-y border-white/10 bg-white/[0.03] py-5 backdrop-blur-xl">
        <div className="marquee overflow-hidden">
          <div className="marquee-track flex gap-10 text-sm font-bold uppercase tracking-[0.3em] text-white/55">
            {[
              'Weddings',
              'Corporate Events',
              'Concerts',
              'Stage Design',
              'LED Walls',
              'DJ Nights',
              'Private Parties',
              'Decor Styling',
              'Lighting',
              'Exhibitions',
              'Sound Production',
              'Event Coordination',
            ].map((item) => (
              <span key={item} className="flex items-center gap-10">
                {item}
                <Sparkles className="text-[#d4af37]" size={16} />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 scroll-mt-24 py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="reveal">
            <p className="section-kicker">About Jambe Balu</p>
            <h2 className="section-title mt-3">
              We Turn Simple Occasions Into Spectacular Experiences.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              Jambe Balu Entertainment is focused on delivering high-impact events with
              premium planning, stylish decoration, stage production, lighting effects,
              music, and smooth on-ground coordination.
            </p>
            <p className="mt-5 text-lg leading-8 text-white/70">
              Whether it is a wedding, corporate event, private party, exhibition, or live
              entertainment night, our team creates an atmosphere that feels organized,
              energetic, and visually unforgettable.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Creative event concepts',
                'Complete technical production',
                'Premium decoration styling',
                'Smooth guest experience',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="text-[#d4af37]" size={20} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-scale relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#d4af37]/25 via-fuchsia-500/10 to-cyan-400/10 blur-2xl" />

            <div className="relative grid grid-cols-2 gap-4">
              <img
                src="/images/Owner%20of%20Jambe%20Balu.jpg"
                alt="Owner of Jambe Balu"
                className="h-72 w-full rounded-[2rem] object-cover shadow-2xl"
              />
              <img
                src="/images/stage_truss_rig.jpg"
                alt="Stage truss rig"
                className="mt-10 h-72 w-full rounded-[2rem] object-cover shadow-2xl"
              />
              <div className="col-span-2 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#d4af37]/15">
                    <Users className="text-[#d4af37]" />
                  </div>
                  <div>
                    <p className="text-2xl font-black">Trusted by Families & Brands</p>
                    <p className="mt-1 text-white/60">
                      From intimate celebrations to full-scale event productions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative z-10 scroll-mt-24 bg-white/[0.025] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal mx-auto max-w-3xl text-center">
            <p className="section-kicker">Our Services</p>
            <h2 className="section-title mt-3">Everything Your Event Needs, In One Place.</h2>
            <p className="mt-6 text-lg leading-8 text-white/65">
              From concept to completion, we handle the details that make an event look
              premium, feel smooth, and create a lasting impression.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="reveal-scale glow-card group relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05]"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/65 to-transparent" />
                  <div className="absolute inset-0 bg-black/15 transition group-hover:bg-black/0" />

                  <div className="relative z-10 flex h-full flex-col justify-end p-7">
                    <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-[#d4af37]/30 bg-[#d4af37]/15 backdrop-blur-xl">
                      <Icon className="text-[#d4af37]" size={26} />
                    </div>

                    <h3 className="text-2xl font-black">{service.title}</h3>
                    <p className="mt-3 leading-7 text-white/75">{service.description}</p>

                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#d4af37]">
                      Learn More
                      <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="relative z-10 scroll-mt-24 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="section-kicker">Event Gallery</p>
              <h2 className="section-title mt-3">A Visual Glimpse Of Our Work.</h2>
            </div>
            <p className="max-w-md text-lg leading-8 text-white/65">
              Powerful stage moments, elegant décor, premium production, and celebrations
              designed to attract attention.
            </p>
          </div>

          <div className="mt-14 grid auto-rows-[260px] gap-5 md:grid-cols-2 lg:grid-cols-4">
            {gallery.map((item) => (
              <div
                key={item.src}
                className={`reveal-scale group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 ${item.className}`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xl font-black">{item.title}</p>
                  <p className="mt-1 text-sm text-white/60">Jambe Balu Entertainment</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos — YouTube channel */}
      <section id="videos" className="relative z-10 scroll-mt-24 bg-white/[0.025] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="section-kicker">YouTube Videos</p>
              <h2 className="section-title mt-3">Watch Jambe Balu On Stage.</h2>
              <p className="mt-5 text-lg leading-8 text-white/65">
                Live folk band performances, jambe shows, and event highlights from our
                official YouTube channel.
              </p>
            </div>

            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-red-500/40 hover:bg-white/15"
            >
              <Youtube size={18} className="text-red-500" />
              View Full Channel
              <ExternalLink size={15} className="text-white/50" />
            </a>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {videos.map((video) => (
              <button
                key={video.id}
                type="button"
                onClick={() => setActiveVideo(video)}
                className="reveal-scale group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.05] text-left transition hover:border-[#d4af37]/40"
              >
                <div className="relative aspect-video overflow-hidden bg-black/40">
                  <img
                    src={video.poster}
                    alt={video.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="grid h-14 w-14 place-items-center rounded-full border border-[#d4af37]/40 bg-[#d4af37]/20 text-[#d4af37] shadow-[0_0_35px_rgba(212,175,55,0.35)] backdrop-blur-xl transition group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-[#111827]">
                      <Play size={24} className="ml-0.5 fill-current" />
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <p className="line-clamp-2 text-base font-bold leading-snug">{video.title}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af37]/80">
                    Play on site
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video player modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          onClick={() => setActiveVideo(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#050816] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                  Jambe Balu · YouTube
                </p>
                <h3 className="mt-1 text-lg font-black sm:text-xl">{activeVideo.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10"
                aria-label="Close video"
              >
                <X size={20} />
              </button>
            </div>

            <div className="aspect-video w-full bg-black">
              <iframe
                title={activeVideo.title}
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-white/10 px-5 py-3">
              <a
                href={`https://www.youtube.com/watch?v=${activeVideo.id}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-red-400"
              >
                <Youtube size={16} className="text-red-500" />
                Open on YouTube
              </a>
              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-[#d4af37] transition hover:brightness-110"
              >
                More videos →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="relative z-10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-[#d4af37]/20 bg-gradient-to-br from-[#d4af37]/20 via-white/[0.06] to-fuchsia-500/10 p-8 shadow-[0_0_80px_rgba(212,175,55,0.12)] sm:p-12 lg:p-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="section-kicker">Ready To Celebrate?</p>
              <h2 className="font-display mt-3 text-4xl font-black leading-tight sm:text-5xl">
                Let’s Create An Event That Brings You More Attention.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                Tell us your event idea. We will help with planning, styling, production,
                and complete execution.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="#contact"
                className="btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-[#d4af37] px-7 py-4 font-bold text-[#111827] transition hover:-translate-y-1 hover:brightness-110"
              >
                Send Inquiry
                <ArrowRight size={19} />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/15"
              >
                WhatsApp Us
                <MessageCircle size={19} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 scroll-mt-24 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="reveal mx-auto max-w-3xl text-center">
            <p className="section-kicker">Client Reviews</p>
            <h2 className="section-title mt-3">What Clients Say About Us.</h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="reveal-scale rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 backdrop-blur-xl"
              >
                <div className="mb-5 flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={19} className="fill-[#d4af37] text-[#d4af37]" />
                  ))}
                </div>

                <p className="text-lg leading-8 text-white/78">“{item.text}”</p>

                <div className="mt-7 border-t border-white/10 pt-5">
                  <p className="font-black">{item.name}</p>
                  <p className="mt-1 text-sm text-[#d4af37]">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 scroll-mt-24 bg-white/[0.025] py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="reveal">
            <p className="section-kicker">Contact Us</p>
            <h2 className="section-title mt-3">Let’s Plan Your Next Big Moment.</h2>
            <p className="mt-6 text-lg leading-8 text-white/65">
              Share your event details and our team will connect with you. WhatsApp is
              the fastest way to book; email works if you prefer a written trail.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition hover:border-[#d4af37]/40"
              >
                <Mail className="mt-1 text-[#d4af37]" size={22} />
                <div>
                  <p className="font-black">Email</p>
                  <p className="mt-1 text-white/65">{CONTACT_EMAIL}</p>
                </div>
              </a>

             <a
  href="tel:+919741293742"
  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition hover:border-[#d4af37]/40"
>
  <Phone className="mt-1 text-[#d4af37]" size={22} />
  <div>
    <p className="font-black">Phone</p>
    <p className="mt-1 text-white/65">+91 97412 93742</p>
  </div>
</a>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <MapPin className="mt-1 text-[#d4af37]" size={22} />
                <div>
                  <p className="font-black">Location</p>
                  <p className="mt-1 text-white/65">Bangalore, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-scale rounded-[2rem] border border-white/10 bg-[#050816]/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            <form onSubmit={handleWhatsAppInquiry} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="form-field"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="Enter phone number"
                    className="form-field"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="form-field"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    Event Type
                  </label>
                  <select name="eventType" className="form-field">
                    <option>Wedding</option>
                    <option>Corporate Event</option>
                    <option>Private Party</option>
                    <option>Concert / DJ Night</option>
                    <option>Decoration & Styling</option>
                    <option>Stage & Production</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us about your event, date, venue and expected guests"
                  className="form-field resize-none"
                />
              </div>

              <div className="grid gap-3">
                <button
                  type="submit"
                  className="btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-[#d4af37] px-7 py-4 font-black text-[#111827] transition hover:-translate-y-1 hover:brightness-110"
                >
                  Send Inquiry on WhatsApp
                  <MessageCircle size={19} />
                </button>

                <button
                  type="button"
                  onClick={handleEmailInquiry}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 font-black text-white transition hover:-translate-y-1 hover:border-[#d4af37]/50 hover:bg-white/[0.07]"
                >
                  Send by Email (Gmail)
                  <Mail size={19} className="text-[#d4af37]" />
                </button>

                <p className="text-center text-xs leading-5 text-white/45">
                  WhatsApp is fastest. Email opens a Gmail draft to {CONTACT_EMAIL} in your
                  browser — no desktop mail app required.
                </p>

                {emailDraft && (
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center text-xs leading-5 text-white/60">
                    <p>
                      Gmail didn&apos;t open?{' '}
                      <button
                        type="button"
                        onClick={() =>
                          openExternal(
                            buildGmailComposeUrl(emailDraft.subject, emailDraft.body)
                          )
                        }
                        className="font-semibold text-[#d4af37] underline-offset-2 hover:underline"
                      >
                        Try again
                      </button>
                      {' · '}
                      <button
                        type="button"
                        onClick={handleCopyEnquiry}
                        className="font-semibold text-[#d4af37] underline-offset-2 hover:underline"
                      >
                        Copy enquiry
                      </button>
                      {' · '}
                      <a
                        href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(emailDraft.subject)}&body=${encodeURIComponent(emailDraft.body)}`}
                        className="font-semibold text-[#d4af37] underline-offset-2 hover:underline"
                      >
                        System mail app
                      </a>
                    </p>
                    <p className="mt-2 break-all text-white/45">{CONTACT_EMAIL}</p>
                  </div>
                )}

                {contactStatus && (
                  <p className="rounded-2xl border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-3 text-center text-sm font-medium text-[#d4af37]">
                    {contactStatus}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#050816]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="text-lg font-black uppercase tracking-[0.18em]">Jambe Balu</p>
            <p className="mt-1 text-sm uppercase tracking-[0.3em] text-[#d4af37]">
              Entertainment
            </p>
          </div>

          <p className="text-sm text-white/50">
            © 2026 Jambe Balu Event Management. All rights reserved.
          </p>

          <div className="flex gap-5 text-sm text-white/60">
            <a href="#home" className="hover:text-[#d4af37]">
              Home
            </a>
            <a href="#services" className="hover:text-[#d4af37]">
              Services
            </a>
            <a href="#contact" className="hover:text-[#d4af37]">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;