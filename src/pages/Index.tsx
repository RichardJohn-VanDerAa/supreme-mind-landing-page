import heroImage from "@/assets/hero-nyc.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero - Full viewport */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={heroImage}
          alt="New York City skyline at golden hour"
          className="absolute inset-0 h-full w-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/30 to-foreground/80" />

        {/* Nav */}
        <nav className="relative z-10 flex items-center justify-between px-8 py-8 md:px-16">
          <img src="/logo-dark.png" alt="Supreme Mind" className="h-16 object-contain" />
          




          
        </nav>

        {/* Hero text */}
        <div className="relative z-10 flex h-full items-end px-8 md:px-[64px] pl-[64px] pr-[64px] pb-[250px]">
          <div className="w-full max-w-5xl">
            <h1 className="font-serif text-6xl md:text-9xl font-light leading-tight text-primary-foreground tracking-wide">
              Preparing the next generation of litigators.
            </h1>
            <div className="mt-6 h-px bg-accent" style={{width: '45%'}} />
          </div>
        </div>
      </section>

      {/* About section */}
      <section id="about" className="px-8 md:px-[64px] py-[96px] bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto text-center max-w-3xl">
          <p className="font-serif text-3xl md:text-5xl font-semibold leading-relaxed text-slate-900">Junior lawyers deserve to walk into the courtroom with confidence

          </p>
          <div className="mt-12 h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent mx-auto" style={{width: '120px'}} />
          <p className="mt-12 font-sans text-base md:text-lg font-light leading-relaxed text-slate-700 mx-auto max-w-2xl">Supreme Mind gives associates the tools to practice litigation scenarios in a realistic environment, so senior partners can focus on winning cases, not running training sessions.


          </p>
        </div>
      </section>

      {/* Three pillars */}
      <section className="px-8 py-24 md:px-[64px] bg-white">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="p-8 bg-slate-50 hover:bg-slate-100 transition-colors">
            <span className="font-sans text-sm tracking-widest uppercase font-bold text-blue-900">Step 01</span>
            <h3 className="mt-6 font-serif text-3xl font-semibold text-slate-900">Practice</h3>
            <p className="mt-4 font-sans text-base leading-relaxed text-slate-700">
              Realistic litigation simulations that mirror actual courtroom dynamics.
            </p>
          </div>
          <div className="p-8 bg-slate-50 hover:bg-slate-100 transition-colors">
            <span className="font-sans text-sm tracking-widest uppercase font-bold text-blue-900">Step 02</span>
            <h3 className="mt-6 font-serif text-3xl font-semibold text-slate-900">Prepare</h3>
            <p className="mt-4 font-sans text-base leading-relaxed text-slate-700">
              Build case strategy and argumentation skills before stepping into court.
            </p>
          </div>
          <div className="p-8 bg-slate-50 hover:bg-slate-100 transition-colors">
            <span className="font-sans text-sm tracking-widest uppercase font-bold text-blue-900">Step 03</span>
            <h3 className="mt-6 font-serif text-3xl font-semibold text-slate-900">Perform</h3>
            <p className="mt-4 font-sans text-base leading-relaxed text-slate-700">
              Walk into the courtroom ready to advocate with precision and poise.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 md:px-[64px] bg-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <img src="/logo-dark.png" alt="Supreme Mind" className="h-10 object-contain" />
          <p className="font-sans text-xs tracking-widest uppercase text-slate-400">
            © 2026 Supreme Mind. All rights reserved.
          </p>
        </div>
      </footer>
    </div>);

};

export default Index;