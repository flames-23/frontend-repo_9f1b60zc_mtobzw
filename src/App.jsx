import React, { useMemo } from 'react'
import Spline from '@splinetool/react-spline'
import { Camera, Image as ImageIcon, Sparkles, Rocket, Star, CheckCircle, Mail, MessageSquare, Instagram, Youtube } from 'lucide-react'

function Nav() {
  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6">
        <nav className="mt-6 flex items-center justify-between rounded-2xl border border-white/20 bg-white/70 backdrop-blur-md px-5 py-3 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600" />
            <span className="font-semibold text-gray-900">ThumbCraft Studio</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <button onClick={() => handleScroll('services')} className="hover:text-gray-900">Services</button>
            <button onClick={() => handleScroll('work')} className="hover:text-gray-900">Work</button>
            <button onClick={() => handleScroll('pricing')} className="hover:text-gray-900">Pricing</button>
            <button onClick={() => handleScroll('testimonials')} className="hover:text-gray-900">Reviews</button>
          </div>
          <div className="flex items-center gap-3">
            <a href="#contact" onClick={(e)=>{e.preventDefault();handleScroll('contact')}} className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-white transition hover:bg-gray-800">
              <Mail size={16} /> Get a Quote
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur">
            <Sparkles size={14} className="text-indigo-600" /> Standout YouTube thumbnails, delivered fast
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
            Turn clicks into fans with high-impact thumbnail design
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            I design scroll-stopping thumbnails that boost CTR for creators, brands, and agencies. Clean, modern, and on-brand every time.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-white shadow-lg shadow-gray-900/10 transition hover:bg-gray-800">Get a Free Concept</a>
            <a href="#work" className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-gray-900 ring-1 ring-gray-200 transition hover:bg-gray-50">See Recent Work</a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-1"><Star className="text-yellow-500" size={16}/> Rated 5.0</div>
            <div className="flex items-center gap-1"><CheckCircle className="text-green-600" size={16}/> 48hr average turnaround</div>
            <div className="flex items-center gap-1"><Camera className="text-indigo-600" size={16}/> YouTube + Shorts + Reels</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const items = [
    { icon: <Camera className="text-indigo-600" />, title: 'Custom Thumbnail Design', desc: 'Unique, on-brand designs crafted for maximum CTR.' },
    { icon: <ImageIcon className="text-indigo-600" />, title: 'Retouching & Compositing', desc: 'Pro-level cutouts, color grading, and depth to make subjects pop.' },
    { icon: <Rocket className="text-indigo-600" />, title: 'A/B Variations', desc: 'Multiple concepts and quick iterations based on performance.' },
    { icon: <Sparkles className="text-indigo-600" />, title: 'Channel Branding', desc: 'Consistent style guides and templates for your content library.' },
  ]
  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Services</h2>
          <p className="mt-3 text-gray-600">Everything you need to make people stop scrolling and start watching.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50">
                {it.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Work() {
  const thumbs = useMemo(() => [
    'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511765224389-d55e62171b5d?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520975693416-35a0d5cfd8df?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
  ], [])
  return (
    <section id="work" className="relative bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Recent Work</h2>
            <p className="mt-3 max-w-xl text-gray-600">A peek at designs crafted for creators across tech, education, and lifestyle niches.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex rounded-xl bg-gray-900 px-5 py-2 text-sm text-white hover:bg-gray-800">Start a Project</a>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {thumbs.map((src, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <img src={src} alt="Portfolio thumbnail" className="h-56 w-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Star size={14} className="text-yellow-500"/> +22% CTR lift
                </div>
                <h3 className="mt-1 text-base font-semibold text-gray-900">YouTube Thumbnail Concept</h3>
                <p className="mt-1 text-sm text-gray-600">Bold subject focus, clean typography, and high contrast color grading.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '$49',
      note: 'per thumbnail',
      features: ['One custom concept', '1 round of revisions', '48-72h delivery', 'YouTube optimized JPEG'],
      cta: 'Try Starter',
    },
    {
      name: 'Creator',
      price: '$199',
      note: '5 thumbnails pack',
      features: ['3 concepts to choose', 'Unlimited minor tweaks', '48h priority delivery', 'PSD + JPEG exports'],
      highlight: true,
      cta: 'Most Popular',
    },
    {
      name: 'Pro',
      price: '$399',
      note: 'monthly retainer',
      features: ['Up to 15 thumbnails', 'A/B variations for key videos', 'Same-day revisions', 'Brand kit & templates'],
      cta: 'Talk to Sales',
    },
  ]
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Simple, creator-friendly pricing</h2>
          <p className="mt-3 text-gray-600">Pick a one-off design or a monthly plan for consistent output.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <div key={i} className={
              `rounded-2xl border ${t.highlight ? 'border-indigo-500 shadow-indigo-200/50' : 'border-gray-200'} bg-white p-6 shadow-sm`
            }>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-gray-900">{t.name}</h3>
                {t.highlight && <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">Best Value</span>}
              </div>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-bold text-gray-900">{t.price}</span>
                <span className="text-sm text-gray-600">{t.note}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                {t.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2"><CheckCircle className="text-green-600" size={16}/>{f}</li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm ${t.highlight ? 'bg-gray-900 text-white hover:bg-gray-800' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>{t.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const items = [
    {
      quote: 'Our CTR jumped from 4.8% to 6.2% in a month. The designs are clean, bold, and on brand.',
      name: 'Alex Rivera', role: 'Tech Creator (300k subs)'
    },
    {
      quote: 'Fast, collaborative, and highly consistent. Exactly what we needed for our weekly uploads.',
      name: 'Maya Chen', role: 'Producer at LearnFlow'
    },
    {
      quote: 'The A/B variations helped us identify a style that now outperforms everything else.',
      name: 'Jordan Lee', role: 'Gaming Channel Manager'
    }
  ]
  return (
    <section id="testimonials" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Client Results</h2>
          <p className="mt-3 text-gray-600">Real feedback from creators and teams I partner with.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <figure key={i} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <Star className="text-yellow-500" />
              <blockquote className="mt-3 text-gray-800">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-gray-600">— {t.name}, {t.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Tell me about your next video</h2>
            <p className="mt-3 text-gray-600">Share the title, style references, and deadline. I’ll reply with a free concept and timeline within 24 hours.</p>
            <div className="mt-6 space-y-3 text-gray-700">
              <div className="flex items-center gap-3"><Mail className="text-indigo-600"/> hello@thumbcraft.studio</div>
              <div className="flex items-center gap-3"><MessageSquare className="text-indigo-600"/> Discord/DM on request</div>
              <div className="flex items-center gap-3"><Instagram className="text-indigo-600"/> @thumbcraft.studio</div>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <form action="mailto:hello@thumbcraft.studio" method="post" encType="text/plain" className="grid gap-4">
              <div>
                <label className="text-sm text-gray-700">Your Name</label>
                <input required className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2 outline-none ring-0 focus:border-gray-300" placeholder="Jane Creator" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Email</label>
                <input type="email" required className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2 outline-none ring-0 focus:border-gray-300" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Video Title / Idea</label>
                <input className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2 outline-none ring-0 focus:border-gray-300" placeholder="What’s the video about?" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Style References</label>
                <textarea rows={4} className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2 outline-none ring-0 focus:border-gray-300" placeholder="Link a channel or describe the look you want" />
              </div>
              <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-white hover:bg-gray-800">Send Brief</button>
              <p className="text-xs text-gray-500">No backend needed — this opens your email client to send the message.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600" />
          <span className="font-semibold text-gray-900">ThumbCraft Studio</span>
        </div>
        <div className="flex items-center gap-4 text-gray-600">
          <a href="#" className="inline-flex items-center gap-1 hover:text-gray-900"><Youtube size={18}/> YouTube</a>
          <a href="#" className="inline-flex items-center gap-1 hover:text-gray-900"><Instagram size={18}/> Instagram</a>
          <a href="mailto:hello@thumbcraft.studio" className="inline-flex items-center gap-1 hover:text-gray-900"><Mail size={18}/> Email</a>
        </div>
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} ThumbCraft Studio. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Nav />
      <Hero />
      <Services />
      <Work />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
