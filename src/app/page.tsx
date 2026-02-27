import Hero from "@/components/home/Hero";
import FeaturedNews from "@/components/home/FeaturedNews";
import Features from "@/components/home/Features";
import MarketStats from "@/components/home/MarketStats";
import MarketSummary from "@/components/home/MarketSummary";
import IndicatorsStrategies from "@/components/home/IndicatorsStrategies";
import BrokerPartners from "@/components/home/BrokerPartners";
import MarketDataTerminal from "@/components/home/MarketDataTerminal";

export default function Home() {
  return (
    <div className="space-y-0 pb-32">
      <Hero />

      {/* Market Summary Feed */}
      <MarketSummary />

      <MarketDataTerminal />

      {/* Community Ideas Section */}
      <div className="bg-[#0A1628]/50 py-24 pb-32">
        <FeaturedNews />
      </div>

      {/* Scripting & Community */}
      <IndicatorsStrategies />

      {/* Execution Partners */}
      <BrokerPartners />

      {/* Technical Features */}
      <Features />

      {/* Infrastructure Status */}
      <div className="container mx-auto px-6 py-20 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-md">
            <h4 className="text-xl font-black uppercase italic tracking-tighter mb-4">Institutional Resilience</h4>
            <p className="text-slate-500 text-sm">Deployed on global edge infrastructure with AES-256 military-grade encryption and ISO-27001 compliance standards.</p>
          </div>
          <div className="flex-1 w-full">
            <MarketStats />
          </div>
        </div>
      </div>

      {/* Final Global CTA */}
      <section className="container mx-auto px-6 mt-32">
        <div className="relative glass p-16 md:p-32 rounded-[4rem] overflow-hidden border border-primary/20 bg-[#0D1B2D]">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[160px] -mr-60 -mt-40" />
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.8] italic">
              Empower your <br />
              <span className="gradient-text">Future.</span>
            </h2>
            <p className="text-slate-400 text-xl md:text-2xl mb-16 font-medium leading-relaxed">
              Join 100 million futures. The most powerful terminal for the world's most demanding traders.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-16 py-6 bg-white text-black rounded-2xl font-black text-2xl hover:bg-primary hover:text-white transition-all hover:neon-glow uppercase tracking-tighter italic">
                Get Started
              </button>
              <button className="px-16 py-6 glass border border-white/10 rounded-2xl font-black text-2xl hover:bg-white/10 transition-all uppercase tracking-tighter italic">
                View Brokers
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
