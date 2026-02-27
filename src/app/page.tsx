import Hero from "@/components/home/Hero";
import FeaturedNews from "@/components/home/FeaturedNews";
import Features from "@/components/home/Features";
import OrderBook from "@/components/home/OrderBook";
import MarketStats from "@/components/home/MarketStats";

export default function Home() {
  return (
    <div className="space-y-32 pb-32">
      <Hero />

      {/* Live Market Terminal Section */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <FeaturedNews />
          </div>
          <div className="lg:col-span-1">
            <OrderBook />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6">
        <MarketStats />
      </div>

      <Features />

      {/* CTA Section */}
      <section className="container mx-auto px-6">
        <div className="relative glass p-12 md:p-24 rounded-[3rem] overflow-hidden border border-primary/20 bg-black/60">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -mr-40 -mt-20" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 text-center lg:text-left">
            <div>
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
                Initiate <br />
                <span className="text-primary">Execution.</span>
              </h2>
              <p className="text-muted-foreground text-xl max-w-xl font-medium">
                Enter the future of high-frequency finance. Deploy your capital with the precision of NeonByte Capital AI.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <button className="px-12 py-6 bg-white text-black rounded-2xl font-black text-2xl hover:bg-primary hover:text-white transition-all hover:neon-glow uppercase tracking-tighter">
                Get Started Now
              </button>
              <button className="px-12 py-6 glass border border-white/10 rounded-2xl font-black text-2xl hover:bg-white/10 transition-all uppercase tracking-tighter">
                Institutional
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
