import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import BeeAssistant from './components/BeeAssistant';
import { PRODUCTS, CONTACT_NUMBERS, TESTIMONIALS, NAV_ITEMS } from './constants';

const App: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleSocialClick = (platform: string) => {
    alert(`Malandula Enterprise ${platform} page coming soon! For now, please contact us via WhatsApp.`);
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="min-h-screen selection:bg-amber-200 selection:text-amber-900">
      <Navbar />
      
      <main>
        <Hero />

        {/* Products Section */}
        <section id="products" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-amber-600 font-bold uppercase tracking-[0.2em] text-sm">Our Catalog</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
                Quality Equipment for Every Beekeeper
              </h3>
              <p className="text-stone-500">
                A Malandula Enterprise provides the best tools in Malawi for harvesting high-quality honey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRODUCTS.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Beekeeping Section */}
        <section id="about" className="py-24 bg-stone-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-block border border-amber-500/30 bg-amber-500/10 px-4 py-2 rounded-full text-amber-500 text-xs font-bold uppercase tracking-widest">
                  Beekeeping Philosophy
                </div>
                <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                  The <span className="text-amber-500">Hidden Treasure</span> is in your Backyard
                </h2>
                <p className="text-stone-400 text-lg leading-relaxed">
                  Beekeeping is more than just an activity; it's a sustainable business that builds wealth while protecting nature. 
                  With the right equipment from Malandula, you can turn a small piece of land into a profitable honey farm.
                </p>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-amber-500/20 border border-amber-500/40 rounded-xl flex items-center justify-center text-amber-500">
                      <i className="fas fa-hand-holding-usd text-2xl"></i>
                    </div>
                    <h4 className="font-bold text-xl">High ROI</h4>
                    <p className="text-stone-500 text-sm">Low maintenance costs with high market demand for pure honey.</p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-green-500/20 border border-green-500/40 rounded-xl flex items-center justify-center text-green-500">
                      <i className="fas fa-leaf text-2xl"></i>
                    </div>
                    <h4 className="font-bold text-xl">Eco-Friendly</h4>
                    <p className="text-stone-500 text-sm">Bees help pollinate your crops, increasing your harvest yield.</p>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1543160732-237dc0984c26?auto=format&fit=crop&q=80&w=1000" 
                  className="rounded-[3rem] shadow-2xl transition-all duration-700 group-hover:rotate-2 group-hover:scale-105"
                  alt="Beekeeper at work"
                />
                <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-t from-stone-900/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 bg-amber-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-amber-600 font-bold uppercase tracking-[0.2em] text-sm">Customer Stories</h2>
              <h3 className="text-4xl font-serif text-stone-900">Success with Malandula</h3>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-[3rem] bg-white shadow-xl p-8 md:p-16 border border-amber-100">
                <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in duration-700" key={activeTestimonial}>
                  <img 
                    src={TESTIMONIALS[activeTestimonial].photo} 
                    alt={TESTIMONIALS[activeTestimonial].name} 
                    className="w-24 h-24 rounded-full border-4 border-amber-100 object-cover shadow-md"
                  />
                  <div className="space-y-2">
                    <div className="flex justify-center text-amber-400 gap-1 text-sm mb-2">
                      {[1, 2, 3, 4, 5].map(i => <i key={i} className="fas fa-star"></i>)}
                    </div>
                    <p className="text-xl md:text-2xl font-serif text-stone-800 italic leading-relaxed">
                      "{TESTIMONIALS[activeTestimonial].feedback}"
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-stone-900">{TESTIMONIALS[activeTestimonial].name}</h4>
                    <p className="text-amber-600 text-sm font-medium">{TESTIMONIALS[activeTestimonial].location}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-12">
                  <button 
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full border border-amber-200 flex items-center justify-center text-amber-600 hover:bg-amber-600 hover:text-white transition-all shadow-sm"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <div className="flex gap-2">
                    {TESTIMONIALS.map((_, i) => (
                      <button 
                        key={i} 
                        onClick={() => setActiveTestimonial(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${activeTestimonial === i ? 'bg-amber-600 w-8' : 'bg-amber-200'}`}
                      />
                    ))}
                  </div>
                  <button 
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full border border-amber-200 flex items-center justify-center text-amber-600 hover:bg-amber-600 hover:text-white transition-all shadow-sm"
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden grid lg:grid-cols-5 border border-amber-100">
              <div className="lg:col-span-2 bg-amber-600 p-12 text-white flex flex-col justify-between">
                <div className="space-y-6">
                  <h2 className="text-4xl font-serif">Let's start your journey</h2>
                  <p className="opacity-90 leading-relaxed">
                    Have questions or want to place an order? Reach out to us via call or WhatsApp. We deliver nationwide.
                  </p>
                </div>
                
                <div className="space-y-8 mt-12">
                  <a href={`tel:${CONTACT_NUMBERS[0]}`} className="flex items-center gap-6 group">
                    <div className="bg-white/20 p-4 rounded-2xl group-hover:bg-white/30 transition-colors">
                      <i className="fas fa-phone-alt text-xl"></i>
                    </div>
                    <div>
                      <p className="text-sm opacity-70">Call us directly</p>
                      <p className="text-xl font-bold">{CONTACT_NUMBERS[0]}</p>
                    </div>
                  </a>
                  <a href={`https://wa.me/265${CONTACT_NUMBERS[1].substring(1)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                    <div className="bg-white/20 p-4 rounded-2xl group-hover:bg-white/30 transition-colors">
                      <i className="fab fa-whatsapp text-2xl"></i>
                    </div>
                    <div>
                      <p className="text-sm opacity-70">WhatsApp</p>
                      <p className="text-xl font-bold">{CONTACT_NUMBERS[1]}</p>
                    </div>
                  </a>
                </div>

                <div className="mt-12 flex gap-4">
                  {['facebook', 'instagram', 'twitter'].map(social => (
                    <button 
                      key={social} 
                      onClick={() => handleSocialClick(social)}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <i className={`fab fa-${social}`}></i>
                    </button>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-3 p-12 bg-white">
                <h3 className="text-2xl font-bold mb-8">Quick Inquiry</h3>
                {formSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl">
                      <i className="fas fa-check"></i>
                    </div>
                    <h4 className="text-2xl font-bold text-stone-900">Zikomo! Thank you!</h4>
                    <p className="text-stone-500">Your inquiry has been sent successfully. We will contact you soon.</p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="text-amber-600 font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleFormSubmit}>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-stone-700">Name</label>
                        <input required type="text" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-stone-700">Phone</label>
                        <input required type="tel" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-stone-700">Interested In</label>
                      <select className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all">
                        <option>Beehives</option>
                        <option>Beesuits</option>
                        <option>Smokers</option>
                        <option>Full Starter Kit</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-stone-700">Message</label>
                      <textarea rows={4} className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold hover:bg-amber-600 transition-all shadow-lg active:scale-[0.98]">
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-50 border-t border-stone-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white text-xs">
              <i className="fas fa-bee"></i>
            </div>
            <span className="font-bold text-amber-900">Malandula Enterprise</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            {NAV_ITEMS.map((item, idx) => (
              <a key={idx} href={item.href} className="text-stone-500 hover:text-amber-600 text-sm transition-colors">
                {item.label}
              </a>
            ))}
          </div>
          <p className="text-stone-500 text-sm max-w-md mx-auto">
            Providing high-quality beekeeping equipment and expertise since 2010. 
            "Fulumilani! Nthawi yopha makwachadi ulimi wa njuchi ndi ino!"
          </p>
          <div className="text-xs text-stone-400 mt-8">
            &copy; {new Date().getFullYear()} A Malandula Enterprise and General Supplies. All rights reserved.
          </div>
        </div>
      </footer>

      <BeeAssistant />
    </div>
  );
};

export default App;