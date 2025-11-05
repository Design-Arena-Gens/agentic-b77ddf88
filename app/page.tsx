export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-100/60 via-white to-white" />
        <div className="absolute -top-24 -left-24 size-[32rem] rounded-full bg-brand-200 blur-3xl opacity-40" />
        <div className="absolute -bottom-24 -right-24 size-[28rem] rounded-full bg-brand-300 blur-3xl opacity-30" />

        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full border border-brand-300/60 bg-white/60 px-3 py-1 text-xs font-medium text-brand-800 shadow-sm backdrop-blur">
              Local. Licensed. Insured.
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl leading-tight">
              Plumbing emergencies, installs, and maintenance ?
              <span className="block text-gradient">handled the right way.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              BlueWave Plumbing brings 24/7 expertise to leaks, clogs, heaters, fixtures,
              and full-home systems. Same?day service with upfront pricing and tidy work ?
              so your home stays stress?free.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
              <a
                href="#book"
                className="btn-ring inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-white shadow hover:bg-slate-800 focus-visible:outline-none"
              >
                Book Same?Day Service
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-slate-900 shadow-sm hover:border-slate-400"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 text-sm text-slate-700 sm:grid-cols-4">
              {[
                { k: 'response', v: '60?min response' },
                { k: 'warranty', v: '2?year workmanship' },
                { k: 'pricing', v: 'Upfront pricing' },
                { k: 'clean', v: 'We leave it spotless' },
              ].map((item) => (
                <div key={item.k} className="rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-center shadow-sm">
                  {item.v}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-16 sm:py-24">
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Services that keep water where it belongs</h2>
            <p className="mt-3 text-slate-600">
              From quick fixes to full installs, our certified techs bring the right tools,
              parts, and know?how on the first visit.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Emergency & Repairs',
                points: ['Burst or leaking pipes', 'Drain unclogging & jetting', 'Toilets, faucets, fixtures'],
                accent: 'from-brand-200/60 to-brand-100/30',
              },
              {
                title: 'Water Heaters',
                points: ['Tank & tankless install', 'Maintenance & flush', 'Smart controls'],
                accent: 'from-brand-300/50 to-brand-100/20',
              },
              {
                title: 'Kitchens & Baths',
                points: ['Garbage disposals', 'Shower valves & heads', 'Sinks, taps, trim'],
                accent: 'from-brand-400/40 to-brand-100/20',
              },
              {
                title: 'Whole?Home Plumbing',
                points: ['Repipes & reroutes', 'Pressure regulation', 'Leak detection'],
                accent: 'from-brand-300/40 to-brand-100/20',
              },
              {
                title: 'Backflow & Filtration',
                points: ['Backflow testing', 'Water softeners', 'Whole?home filtration'],
                accent: 'from-brand-400/40 to-brand-100/20',
              },
              {
                title: 'New Fixtures',
                points: ['Toilets & bidets', 'Sinks & vanities', 'Appliance hookups'],
                accent: 'from-brand-500/30 to-brand-100/10',
              },
            ].map((card) => (
              <div key={card.title} className="card relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${card.accent}`} />
                <div className="relative p-6">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <ul className="mt-3 space-y-2 text-slate-700">
                    {card.points.map((p) => (
                      <li key={p} className="flex items-baseline gap-2">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-400 mt-1.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-brand-50/60">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">We treat your home like our own</h2>
            <p className="mt-3 text-slate-600">
              Clear communication, shoe covers, protective mats, and tidy finishes. You get craftsmanship
              that lasts and a clean space when we leave.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ['Upfront, fair pricing', 'No surprises ? ever'],
                ['Licensed & insured', 'Backed by a 2?year warranty'],
                ['On?time arrivals', 'Real?time ETA updates'],
                ['Respectful pros', 'Background?checked team'],
              ].map(([h, s]) => (
                <div key={h} className="card p-5">
                  <div className="text-base font-semibold">{h}</div>
                  <div className="mt-1 text-sm text-slate-600">{s}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="card p-8">
            <h3 className="text-xl font-semibold">Our simple process</h3>
            <ol className="mt-4 space-y-4 text-slate-700">
              {[
                ['1. Book', 'Tell us the issue ? photos optional'],
                ['2. Diagnose', 'We assess and explain options clearly'],
                ['3. Approve', 'Choose the plan that suits your budget'],
                ['4. Fix', 'We complete the work and clean up'],
              ].map(([title, desc]) => (
                <li key={title} className="relative pl-5">
                  <span className="absolute left-0 top-2 size-2 rounded-full bg-brand-500" />
                  <div className="font-medium">{title}</div>
                  <div className="text-sm text-slate-600">{desc}</div>
                </li>
              ))}
            </ol>
            <a
              id="book"
              href="#contact"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-white shadow hover:bg-brand-700"
            >
              Get My Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold sm:text-4xl">Neighbors who trust BlueWave</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [
                '?They arrived within the hour and fixed a hidden leak in one visit. Courteous, efficient, and transparent pricing.?',
                '? Morgan R.',
              ],
              [
                '?Immaculate work on our tankless heater. They protected floors, explained everything, and left the space spotless.?',
                '? Priya S.',
              ],
              [
                '?Upfront quote matched the invoice. Best plumbing experience we?ve had in years.?',
                '? Daniel K.',
              ],
            ].map(([q, a]) => (
              <blockquote key={a as string} className="card p-6">
                <p className="text-slate-800">{q}</p>
                <footer className="mt-3 text-sm text-slate-600">{a}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="relative py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50 to-white" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="card mx-auto max-w-3xl overflow-hidden">
            <div className="bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-8 text-white sm:px-10">
              <h3 className="text-2xl font-bold">Ready for fast, friendly plumbing?</h3>
              <p className="mt-2 text-white/90">
                Tell us what you need. We?ll respond quickly with timing and pricing.
              </p>
            </div>
            <div className="p-6 sm:p-8">
              <form className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium text-slate-700">Name</label>
                  <input className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60" placeholder="Jane Doe" />
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium text-slate-700">Phone</label>
                  <input className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60" placeholder="(555) 123?4567" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700">Address (City)</label>
                  <input className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60" placeholder="Riverdale" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700">How can we help?</label>
                  <textarea rows={4} className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60" placeholder="Leak, clog, install, heater?" />
                </div>
                <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-xs text-slate-500">By submitting, you consent to be contacted about your request.</div>
                  <button type="button" className="btn-ring inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-white shadow hover:bg-slate-800">
                    Request Call Back
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200/70 bg-white/70">
        <div className="mx-auto max-w-7xl px-6 py-10 sm:py-12 grid gap-6 sm:grid-cols-3">
          <div>
            <div className="text-xl font-bold text-slate-900">BlueWave Plumbing</div>
            <div className="mt-1 text-sm text-slate-600">Licensed ? Insured ? 24/7</div>
          </div>
          <div className="text-sm text-slate-600">
            <div className="font-semibold text-slate-800">Contact</div>
            <div className="mt-1">(555) 555?0123</div>
            <div>service@bluewaveplumbing.com</div>
          </div>
          <div className="text-sm text-slate-600">
            <div className="font-semibold text-slate-800">Service Areas</div>
            <div className="mt-1">Riverdale ? Brookview ? Westport ? Lakeside</div>
          </div>
        </div>
        <div className="border-t border-slate-200/70 px-6 py-6 text-center text-xs text-slate-500">
          ? {new Date().getFullYear()} BlueWave Plumbing. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
