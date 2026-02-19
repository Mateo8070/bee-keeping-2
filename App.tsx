import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import BeeAssistant from './components/BeeAssistant';
import {
  PRODUCTS,
  CONTACT_NUMBERS,
  TESTIMONIALS,
  NAV_ITEMS,
  STARTER_KITS,
} from './constants';
import { Product } from './types';

type CategoryFilter = 'All' | 'Hives' | 'Gear' | 'Equipment';
const CATEGORIES: CategoryFilter[] = ['All', 'Hives', 'Gear', 'Equipment'];

const App: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  const filteredProducts: Product[] =
    activeCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter(p => p.category === activeCategory);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleSocialClick = (platform: string) => {
    alert(
      `Malandula Enterprise ${platform} page coming soon! For now, please contact us via WhatsApp: ${CONTACT_NUMBERS[1]}`
    );
  };

  const nextTestimonial = () =>
    setActiveTestimonial(prev => (prev + 1) % TESTIMONIALS.length);
  const prevTestimonial = () =>
    setActiveTestimonial(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-stone-950 selection:bg-amber-500/30 selection:text-amber-200">
      <Navbar />

      <main>
        <Hero />

        {/* ── PRODUCTS SECTION ─────────────────────────────── */}
        <section id="products" className="py-24 bg-stone-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
              <span className="text-amber-400 font-bold uppercase tracking-[0.2em] text-xs">Our Catalog</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                Premium Beekeeping Equipment
              </h2>
              <p className="text-stone-400">
                A Malandula Enterprise provides the best tools in Malawi for harvesting high-quality honey. Contact us to get the best price.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all border ${activeCategory === cat
                    ? 'bg-amber-500 text-stone-900 border-amber-500 shadow-lg shadow-amber-500/25'
                    : 'bg-stone-900 text-stone-400 border-white/10 hover:border-amber-500/40 hover:text-amber-400'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-14 text-center">
              <a
                href={`https://wa.me/265${CONTACT_NUMBERS[0].substring(1)}?text=Hello Malandula! I would like to inquire about a custom starter kit.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 font-bold hover:text-amber-300 hover:gap-4 transition-all group"
              >
                Looking for a custom starter kit? Chat with us
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </div>
        </section>

        {/* ── STARTER KITS SECTION ─────────────────────────── */}
        <section id="kits" className="py-24 bg-stone-900/50 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
              <span className="text-amber-400 font-bold uppercase tracking-[0.2em] text-xs">Bundles</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                Ready-Made Starter Kits
              </h2>
              <p className="text-stone-400">
                Take the guesswork out of getting started. Our curated bundles include everything you need, sourced and assembled by experts.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {STARTER_KITS.map((kit) => (
                <div
                  key={kit.id}
                  className="group bg-stone-900 rounded-3xl overflow-hidden border border-white/8 hover:border-amber-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={kit.image}
                      alt={kit.name}
                      className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-transparent" />
                    <span className="absolute top-4 right-4 bg-amber-500 text-stone-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {kit.highlight}
                    </span>
                  </div>
                  <div className="p-7 space-y-5">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">{kit.name}</h3>
                      <p className="text-stone-400 text-sm mt-1">{kit.description}</p>
                    </div>
                    <ul className="space-y-2">
                      {kit.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-stone-300 text-sm">
                          <i className="fas fa-check-circle text-amber-500 text-xs flex-shrink-0"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`https://wa.me/265${CONTACT_NUMBERS[0].substring(1)}?text=Hello Malandula! I'm interested in the ${kit.name}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 rounded-xl font-bold transition-all shadow-md hover:shadow-emerald-500/30 active:scale-[0.98]"
                    >
                      <i className="fab fa-whatsapp text-lg"></i>
                      Order This Kit
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY BEEKEEPING SECTION ───────────────────────── */}
        <section id="about" className="py-24 bg-stone-950 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <div className="space-y-8">
                <div>
                  <span className="inline-block border border-amber-500/30 bg-amber-500/10 px-4 py-2 rounded-full text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
                    Beekeeping Philosophy
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                    The <span className="text-amber-400">Hidden Treasure</span> is in your Backyard
                  </h2>
                </div>
                <p className="text-stone-400 text-lg leading-relaxed">
                  Beekeeping is more than just an activity; it's a sustainable business that builds wealth while protecting nature.
                  With the right equipment from Malandula, you can turn a small piece of land into a profitable honey farm.
                </p>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { icon: 'fa-hand-holding-usd', color: 'amber', title: 'High ROI', desc: 'Low maintenance costs with high market demand for pure honey.' },
                    { icon: 'fa-leaf', color: 'green', title: 'Eco-Friendly', desc: 'Bees help pollinate your crops, increasing your harvest yield.' },
                    { icon: 'fa-tools', color: 'sky', title: 'Easy to Start', desc: 'Our starter kits include everything you need to begin immediately.' },
                    { icon: 'fa-map-marker-alt', color: 'rose', title: 'Nationwide', desc: 'We deliver quality equipment across all regions of Malawi.' },
                  ].map(({ icon, color, title, desc }) => (
                    <div key={title} className={`space-y-3 bg-stone-900 p-6 rounded-2xl border border-white/8 hover:border-${color}-500/40 transition-colors group`}>
                      <div className={`w-11 h-11 bg-${color}-500/15 border border-${color}-500/30 rounded-xl flex items-center justify-center text-${color}-400 group-hover:scale-110 transition-transform`}>
                        <i className={`fas ${icon} text-lg`}></i>
                      </div>
                      <h4 className="font-bold text-white">{title}</h4>
                      <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: image */}
              <div className="relative group cursor-pointer hidden lg:block" onClick={() => window.location.href = '#products'}>
                <div className="absolute -inset-4 bg-amber-500/10 rounded-[3rem] blur-2xl group-hover:bg-amber-500/15 transition-all duration-700" />
                <img
                  src="/beekeeper.png"
                  className="relative rounded-[2.5rem] shadow-2xl border border-white/10 w-full object-cover aspect-[4/5] transition-all duration-700 group-hover:scale-[1.02]"
                  alt="Professional beekeeper at work"
                />
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-t from-stone-950/70 to-transparent flex items-end p-10">
                  <div className="bg-stone-900/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 text-white">
                    <p className="font-bold">Start Harvesting Treasure</p>
                    <p className="text-sm text-amber-400 underline underline-offset-4 mt-0.5">View Gear Selection →</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS SECTION ─────────────────────────── */}
        <section id="testimonials" className="py-24 bg-stone-900/60 border-y border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-14 space-y-3">
              <span className="text-amber-400 font-bold uppercase tracking-[0.2em] text-xs">Customer Stories</span>
              <h2 className="text-4xl font-serif text-white">Success with Malandula</h2>
            </div>

            <div className="relative max-w-3xl mx-auto">
              <div className="bg-stone-900 border border-white/10 rounded-[2.5rem] p-8 md:p-14 shadow-2xl min-h-[340px] flex flex-col justify-center">
                <div className="flex flex-col items-center text-center space-y-6" key={activeTestimonial}>
                  <div className="relative">
                    <img
                      src={TESTIMONIALS[activeTestimonial].photo}
                      alt={TESTIMONIALS[activeTestimonial].name}
                      className="w-20 h-20 rounded-full border-4 border-amber-500/40 object-cover shadow-xl shadow-amber-500/10"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-amber-500 w-7 h-7 rounded-full flex items-center justify-center text-stone-900 text-xs font-bold border-2 border-stone-900">
                      ✓
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-center text-amber-400 gap-1 text-xs">
                      {[1, 2, 3, 4, 5].map(i => <i key={i} className="fas fa-star"></i>)}
                    </div>
                    <p className="text-xl md:text-2xl font-serif text-stone-200 italic leading-relaxed">
                      "{TESTIMONIALS[activeTestimonial].feedback}"
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">{TESTIMONIALS[activeTestimonial].name}</h4>
                    <p className="text-amber-400 text-sm font-medium mt-0.5">{TESTIMONIALS[activeTestimonial].location}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-10">
                  <button
                    onClick={prevTestimonial}
                    className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-stone-400 hover:bg-amber-500 hover:text-stone-900 hover:border-amber-500 transition-all active:scale-90"
                    aria-label="Previous testimonial"
                  >
                    <i className="fas fa-chevron-left text-sm"></i>
                  </button>
                  <div className="flex gap-2">
                    {TESTIMONIALS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveTestimonial(i)}
                        className={`h-2 rounded-full transition-all ${activeTestimonial === i ? 'bg-amber-500 w-8' : 'bg-stone-700 w-2 hover:bg-stone-500'}`}
                        aria-label={`Go to testimonial ${i + 1}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextTestimonial}
                    className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-stone-400 hover:bg-amber-500 hover:text-stone-900 hover:border-amber-500 transition-all active:scale-90"
                    aria-label="Next testimonial"
                  >
                    <i className="fas fa-chevron-right text-sm"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT SECTION ──────────────────────────────── */}
        <section id="contact" className="py-24 bg-stone-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2.5rem] overflow-hidden grid lg:grid-cols-5 border border-white/8 shadow-2xl">
              {/* Left panel */}
              <div className="lg:col-span-2 bg-gradient-to-br from-amber-600 to-amber-700 p-10 text-white flex flex-col justify-between">
                <div className="space-y-5">
                  <span className="text-amber-200/70 font-bold uppercase tracking-[0.2em] text-xs">Get in Touch</span>
                  <h2 className="text-3xl font-serif">Let's start your beekeeping journey</h2>
                  <p className="text-amber-50/80 leading-relaxed text-sm">
                    Have questions or want to place an order? Reach out via call or WhatsApp. We deliver nationwide across Malawi.
                  </p>
                </div>

                <div className="space-y-6 mt-10">
                  <a href={`tel:${CONTACT_NUMBERS[0]}`} className="flex items-center gap-4 group">
                    <div className="bg-white/20 p-3.5 rounded-xl group-hover:bg-white/30 transition-all">
                      <i className="fas fa-phone-alt text-white"></i>
                    </div>
                    <div>
                      <p className="text-xs text-amber-200/70">Call us directly</p>
                      <p className="font-bold hover:underline">{CONTACT_NUMBERS[0]}</p>
                    </div>
                  </a>
                  <a
                    href={`https://wa.me/265${CONTACT_NUMBERS[1].substring(1)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="bg-white/20 p-3.5 rounded-xl group-hover:bg-green-500/30 transition-all">
                      <i className="fab fa-whatsapp text-xl text-white"></i>
                    </div>
                    <div>
                      <p className="text-xs text-amber-200/70">WhatsApp</p>
                      <p className="font-bold hover:underline">{CONTACT_NUMBERS[1]}</p>
                    </div>
                  </a>
                </div>

                <div className="mt-10 flex gap-3">
                  {['facebook', 'instagram', 'twitter'].map(social => (
                    <button
                      key={social}
                      onClick={() => handleSocialClick(social)}
                      className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/25 transition-all active:scale-90"
                      aria-label={social}
                    >
                      <i className={`fab fa-${social}`}></i>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right panel: form */}
              <div className="lg:col-span-3 p-10 bg-stone-900">
                <h3 className="text-xl font-bold text-white mb-8">Quick Inquiry</h3>
                {formSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
                    <div className="w-16 h-16 bg-green-500/20 border border-green-500/40 text-green-400 rounded-full flex items-center justify-center text-2xl shadow-inner">
                      <i className="fas fa-check"></i>
                    </div>
                    <h4 className="text-xl font-bold text-white font-serif">Zikomo! Thank you!</h4>
                    <p className="text-stone-400 max-w-xs text-sm">Your inquiry has been received. We will contact you soon about your beekeeping needs.</p>
                    <button onClick={() => setFormSubmitted(false)} className="text-amber-400 font-bold hover:text-amber-300 transition-all text-sm">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form className="space-y-5" onSubmit={handleFormSubmit}>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Full Name</label>
                        <input required type="text" placeholder="Your Name"
                          className="w-full bg-stone-800 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-stone-600 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all text-sm"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Phone Number</label>
                        <input required type="tel" placeholder="e.g. 0999XXXXXX"
                          className="w-full bg-stone-800 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-stone-600 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all text-sm"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Interested In</label>
                      <select className="w-full bg-stone-800 border border-white/10 rounded-xl px-4 py-3.5 text-stone-300 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all appearance-none cursor-pointer text-sm">
                        <option>Modern Langstroth Beehives</option>
                        <option>Professional Bee Suits</option>
                        <option>Stainless Steel Smokers</option>
                        <option>Honey Extractors</option>
                        <option>Beginner Starter Kit</option>
                        <option>Farm Expansion Kit</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Message (Optional)</label>
                      <textarea rows={4} placeholder="How can we help you today?"
                        className="w-full bg-stone-800 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-stone-600 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all resize-none text-sm"
                      />
                    </div>
                    <button type="submit"
                      className="w-full bg-amber-500 hover:bg-amber-400 text-stone-900 py-4 rounded-xl font-bold transition-all shadow-lg shadow-amber-500/20 active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      <i className="fas fa-paper-plane"></i>
                      Send Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="bg-stone-900 border-t border-white/8 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30 text-lg">🐝</div>
                <div>
                  <span className="font-bold text-white text-lg block leading-none font-serif">Malandula</span>
                  <span className="text-amber-400/70 text-[10px] font-bold uppercase tracking-widest">Enterprise & General Supplies</span>
                </div>
              </div>
              <p className="text-stone-500 text-sm leading-relaxed">
                Providing high-quality beekeeping equipment and expertise since 2010.<br />
                <span className="text-stone-400 italic text-xs">Fulumilani! Nthawi yopha makwachadi ulimi wa njuchi ndi ino!</span>
              </p>
              <div className="flex gap-3">
                {['facebook', 'whatsapp', 'instagram'].map(social => (
                  <button key={social}
                    className="w-9 h-9 bg-stone-800 border border-white/10 rounded-lg flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-500/40 transition-all"
                    onClick={() => social === 'whatsapp' ? window.open(`https://wa.me/265${CONTACT_NUMBERS[1].substring(1)}`) : handleSocialClick(social)}
                    aria-label={social}
                  >
                    <i className={`fab fa-${social} text-sm`}></i>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-5">Quick Links</h4>
              <ul className="space-y-3">
                {NAV_ITEMS.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.href} className="text-stone-500 hover:text-amber-400 text-sm transition-colors flex items-center gap-2 group">
                      <i className="fas fa-chevron-right text-xs text-amber-500/40 group-hover:text-amber-400 transition-colors"></i>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-white text-sm uppercase tracking-widest mb-5">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-stone-800 border border-white/8 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone-alt text-amber-400 text-xs"></i>
                  </div>
                  <div>
                    <p className="text-stone-500 text-[11px] uppercase tracking-wider">Phone</p>
                    <a href={`tel:${CONTACT_NUMBERS[0]}`} className="text-stone-300 hover:text-amber-400 transition-colors text-sm font-medium">{CONTACT_NUMBERS[0]}</a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-stone-800 border border-white/8 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fab fa-whatsapp text-emerald-400 text-sm"></i>
                  </div>
                  <div>
                    <p className="text-stone-500 text-[11px] uppercase tracking-wider">WhatsApp</p>
                    <a href={`https://wa.me/265${CONTACT_NUMBERS[1].substring(1)}`} target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-amber-400 transition-colors text-sm font-medium">{CONTACT_NUMBERS[1]}</a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-stone-800 border border-white/8 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-amber-400 text-xs"></i>
                  </div>
                  <div>
                    <p className="text-stone-500 text-[11px] uppercase tracking-wider">Location</p>
                    <p className="text-stone-300 text-sm font-medium">Malawi · Nationwide Delivery</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-600">
            <p>© {new Date().getFullYear()} A Malandula Enterprise and General Supplies. All rights reserved.</p>
            <p className="text-amber-500/60 italic">"Chuma Obisika · The Hidden Treasure"</p>
          </div>
        </div>
      </footer>

      <BeeAssistant />
    </div>
  );
};

export default App;
